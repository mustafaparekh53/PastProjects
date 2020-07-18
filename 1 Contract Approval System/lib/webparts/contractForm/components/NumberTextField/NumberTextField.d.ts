/// <reference types="react" />
import * as React from "react";
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
export declare class NumberTextField extends React.Component<INumberTextFieldProps, INumberTextFieldState> {
    constructor(props: INumberTextFieldProps);
    render(): JSX.Element;
    private _validateNumber(value);
    private _onChanged(value);
    componentWillReceiveProps(nextProps: INumberTextFieldProps): void;
    private _restore();
}
