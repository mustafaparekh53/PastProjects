import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { autobind } from "office-ui-fabric-react/lib/Utilities";

export interface INumberTextFieldProps {
  label: string;
  initialValue: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  onChanged?: (value: string) => void;
}

export interface INumberTextFieldState {
  value: string;
  disabled: boolean;
  required?: boolean;
  errMsg?: string;
}

export class NumberTextField extends React.Component<
  INumberTextFieldProps,
  INumberTextFieldState
> {
  constructor(props: INumberTextFieldProps) {
    super(props);

    this._restore = this._restore.bind(this);
    this._onChanged = this._onChanged.bind(this);
    this._validateNumber = this._validateNumber.bind(this);

    this.state = {
      required: props.required,
      value: props.initialValue,
      disabled: props.disabled || false
    };
  }

  public render(): JSX.Element {
    return (
      <div className="NumberTextField">
        <TextField
          className="NumberTextField-textField"
          label={this.props.label}
          required={this.state.required}
          value={this.state.value}
          onChanged={this._onChanged}
          errorMessage={this.state.errMsg}
          disabled={this.state.disabled}
          placeholder={this.props.placeholder}
        />
        {/*<div className="NumberTextField-restoreButton">
          <DefaultButton onClick={ this._restore }>
            Restore
          </DefaultButton>
    </div>*/}
      </div>
    );
  }
  @autobind
  private _validateNumber(value: string): string {
    // console.log(this.props.required === true && value.trim() === "");
    let msg: string = isNaN(Number(value))
      ? "请填写有效的数字格式" // `The value should be a number, actual is ${value}.`
      : this.props.required === true &&
        !this.state.disabled &&
        value.trim() === ""
        ? "请填写合同金额"
        : "";
    this.setState({ errMsg: msg });
    return msg;
  }

  private _onChanged(value: string): void {
    if (this.props.onChanged) {
      this.props.onChanged(value);
    }
    this._validateNumber(value);
    return this.setState({
      value
    });
  }
  public componentWillReceiveProps(nextProps: INumberTextFieldProps): void {
    let msg: string = isNaN(Number(this.state.value))
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
  }
  private _restore(): void {
    this.setState({
      value: this.props.initialValue
    });
  }
}
