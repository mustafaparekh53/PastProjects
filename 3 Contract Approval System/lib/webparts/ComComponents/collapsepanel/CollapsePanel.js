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
import "rc-collapse/assets/index.css";
// tslint:disable-next-line:typedef
import Collapse from "rc-collapse";
// tslint:disable-next-line:typedef
var Panel = Collapse.Panel;
var CollapsePanel = (function (_super) {
    __extends(CollapsePanel, _super);
    function CollapsePanel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    CollapsePanel.prototype.render = function () {
        return (this.props.isHidden === true ? null : React.createElement(Collapse, { accordion: true },
            React.createElement(Panel, { header: this.props.headerText, headerClass: "my-header-class" }, this.props.children)));
    };
    return CollapsePanel;
}(React.Component));
export default CollapsePanel;

//# sourceMappingURL=CollapsePanel.js.map
