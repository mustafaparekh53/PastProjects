var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, PropertyPaneTextField } from "@microsoft/sp-webpart-base";
import * as strings from "ContractFormWebPartStrings";
import ContractForm from "./components/ContractForm";
import { RequestFormMode } from "./components/IContractFormProps";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import CpsItemForm from "./components/ContractItemEditForm/CpsItemForm";
var ContractFormWebPart = (function (_super) {
    __extends(ContractFormWebPart, _super);
    function ContractFormWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContractFormWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            // other init code may be present
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    ContractFormWebPart.prototype.render = function () {
        var url = new URL(document.URL);
        var mode;
        switch (url.searchParams.get("mode")) {
            case "requester":
                mode = RequestFormMode.Requester;
                break;
            case "approver":
                mode = RequestFormMode.Approver;
                break;
            case "admin":
                mode = RequestFormMode.Admin;
                break;
            default:
                mode = RequestFormMode.Requester;
                break;
        }
        var idstr = url.searchParams.get("request");
        var id = parseInt(idstr, 10);
        id = isNaN(id) ? 0 : id;
        // console.log("Id="+id);
        var element = id > 0
            ? React.createElement(CpsItemForm, {
                id: url.searchParams.get("request"),
                mode: mode
            })
            : React.createElement(ContractForm, {
                spHttpClient: this.context.spHttpClient,
                siteUrl: this.context.pageContext.web.absoluteUrl,
                id: url.searchParams.get("request"),
                mode: mode
            });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(ContractFormWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    ContractFormWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ContractFormWebPart;
}(BaseClientSideWebPart));
export default ContractFormWebPart;

//# sourceMappingURL=ContractFormWebPart.js.map
