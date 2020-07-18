/// <reference types="react" />
import * as React from "react";
import { IApprovalFormProps } from "./IApprovalFormProps";
import { IApprovalFormState } from "./IApprovalFormState";
import "@pnp/polyfill-ie11";
export default class ApprovalForm extends React.Component<IApprovalFormProps, IApprovalFormState> {
    constructor(props: any);
    render(): React.ReactElement<IApprovalFormProps>;
    private _setItemResult(item, status, comments, sendtype);
    private _getmyctrlistlink();
    componentDidMount(): void;
}
