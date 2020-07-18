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
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as strings from "StaffDeptFormWebPartStrings";
import StaffDeptFormContainer from "./components/StaffDeptFormContainer";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
var StaffDeptFormWebPart = (function (_super) {
    __extends(StaffDeptFormWebPart, _super);
    function StaffDeptFormWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaffDeptFormWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            // other init code may be present
            sp.setup({
                spfxContext: _this.context
            });
        });
    };
    StaffDeptFormWebPart.prototype.render = function () {
        var element = React.createElement(StaffDeptFormContainer, {});
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(StaffDeptFormWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    StaffDeptFormWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: []
                        }
                    ]
                }
            ]
        };
    };
    return StaffDeptFormWebPart;
}(BaseClientSideWebPart));
export default StaffDeptFormWebPart;

//# sourceMappingURL=StaffDeptFormWebPart.js.map
