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
import { NormalPeoplePicker } from "office-ui-fabric-react/lib/Pickers";
import { Label } from "office-ui-fabric-react/lib/Label";
var OfficeUiFabricPeoplePicker = (function (_super) {
    __extends(OfficeUiFabricPeoplePicker, _super);
    function OfficeUiFabricPeoplePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OfficeUiFabricPeoplePicker.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Label, null, this.props.label),
            React.createElement(NormalPeoplePicker, { onChange: this.props.onChange, onResolveSuggestions: this.props.onResolveSuggestions, selectedItems: this.props.selectedItems, itemLimit: this.props.itemLimit })));
    };
    return OfficeUiFabricPeoplePicker;
}(React.Component));
export { OfficeUiFabricPeoplePicker };

//# sourceMappingURL=OfficeUiFabricPeoplePicker.js.map
