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
import * as strings from "ApprovalFormWebPartStrings";
import ApprovalForm from "./components/ApprovalForm";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
var ApprovalFormWebPart = (function (_super) {
    __extends(ApprovalFormWebPart, _super);
    function ApprovalFormWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApprovalFormWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            // other init code may be present
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    ApprovalFormWebPart.prototype.render = function () {
        var url = new URL(document.URL);
        var element = React.createElement(ApprovalForm, {
            description: this.properties.description,
            id: url.searchParams.get("request")
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(ApprovalFormWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    ApprovalFormWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return ApprovalFormWebPart;
}(BaseClientSideWebPart));
export default ApprovalFormWebPart;

//# sourceMappingURL=ApprovalFormWebPart.js.map
