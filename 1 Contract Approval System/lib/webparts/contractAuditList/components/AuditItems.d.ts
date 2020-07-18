/// <reference types="react" />
import React = require("react");
import { IAuditItemsState } from "./IAuditItemsState";
import "react-quill/dist/quill.snow.css";
import "@pnp/polyfill-ie11";
export declare class AuditItems extends React.Component<any, IAuditItemsState> {
    private quillRef;
    private formats;
    constructor(props: any);
    render(): React.ReactElement<any>;
    private modules();
    private updateContent(newContent);
    private _getButtons();
    private _isSubmitButtonHidden();
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextprop: any): void;
    private _submit();
    private _douploadfile(fileInput);
}
