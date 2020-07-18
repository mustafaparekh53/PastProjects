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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
var NumberTextField = (function (_super) {
    __extends(NumberTextField, _super);
    function NumberTextField(props) {
        var _this = _super.call(this, props) || this;
        _this._restore = _this._restore.bind(_this);
        _this._onChanged = _this._onChanged.bind(_this);
        _this._validateNumber = _this._validateNumber.bind(_this);
        _this.state = {
            required: props.required,
            value: props.initialValue,
            disabled: props.disabled || false
        };
        return _this;
    }
    NumberTextField.prototype.render = function () {
        return (React.createElement("div", { className: "NumberTextField" },
            React.createElement(TextField, { className: "NumberTextField-textField", label: this.props.label, required: this.state.required, value: this.state.value, onChanged: this._onChanged, errorMessage: this.state.errMsg, disabled: this.state.disabled, placeholder: this.props.placeholder })));
    };
    NumberTextField.prototype._validateNumber = function (value) {
        // console.log(this.props.required === true && value.trim() === "");
        var msg = isNaN(Number(value))
            ? "请填写有效的数字格式" // `The value should be a number, actual is ${value}.`
            : this.props.required === true &&
                !this.state.disabled &&
                value.trim() === ""
                ? "请填写合同金额"
                : "";
        this.setState({ errMsg: msg });
        return msg;
    };
    NumberTextField.prototype._onChanged = function (value) {
        if (this.props.onChanged) {
            this.props.onChanged(value);
        }
        this._validateNumber(value);
        return this.setState({
            value: value
        });
    };
    NumberTextField.prototype.componentWillReceiveProps = function (nextProps) {
        var msg = isNaN(Number(this.state.value))
            ? "请填写有效的数字格式" // `The value should be a number, actual is ${value}.`
            : nextProps.required === true &&
                !nextProps.disabled &&
                nextProps.initialValue.trim() === ""
                ? "请填写合同金额"
                : "";
        this.setState({
            value: nextProps.initialValue,
            disabled: nextProps.disabled,
            required: nextProps.required,
            errMsg: msg
        });
    };
    NumberTextField.prototype._restore = function () {
        this.setState({
            value: this.props.initialValue
        });
    };
    __decorate([
        autobind
    ], NumberTextField.prototype, "_validateNumber", null);
    return NumberTextField;
}(React.Component));
export { NumberTextField };

//# sourceMappingURL=NumberTextField.js.map
