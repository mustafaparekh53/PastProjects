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
import * as strings from "ContractAuditListWebPartStrings";
import ContractAuditList from "./components/ContractAuditList";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
var ContractAuditListWebPart = (function (_super) {
    __extends(ContractAuditListWebPart, _super);
    function ContractAuditListWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContractAuditListWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            // other init code may be present
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    ContractAuditListWebPart.prototype.render = function () {
        var element = React.createElement(ContractAuditList, {
            description: this.properties.description
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(ContractAuditListWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    ContractAuditListWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return ContractAuditListWebPart;
}(BaseClientSideWebPart));
export default ContractAuditListWebPart;

//# sourceMappingURL=ContractAuditListWebPart.js.map
