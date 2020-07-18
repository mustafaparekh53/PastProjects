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
import * as strings from "ContractListWebPartStrings";
import ContractList from "./components/ContractList";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
var ContractListWebPart = (function (_super) {
    __extends(ContractListWebPart, _super);
    function ContractListWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContractListWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            // other init code may be present
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    ContractListWebPart.prototype.render = function () {
        var element = React.createElement(ContractList, {
            pageSize: 10
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(ContractListWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    ContractListWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return ContractListWebPart;
}(BaseClientSideWebPart));
export default ContractListWebPart;

//# sourceMappingURL=ContractListWebPart.js.map
