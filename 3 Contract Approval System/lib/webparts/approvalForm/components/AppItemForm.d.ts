/// <reference types="react" />
import React = require("react");
import { IApprovalFormState } from "./IApprovalFormState";
import { IApprovalFormProps } from "./IApprovalFormProps";
import { IApprovalItemProps } from "./IApprovalItemProps";
import "react-quill/dist/quill.snow.css";
import "@pnp/polyfill-ie11";
import "moment/locale/zh-cn";
export declare class AppItemForm extends React.Component<IApprovalItemProps, IApprovalFormState> {
    private quillRef;
    private formats;
    FileUpload: HTMLInputElement;
    constructor(props: any);
    render(): React.ReactElement<IApprovalFormProps>;
    private _getButtons();
    private _isSubmitButtonHidden();
    private UploadFile();
    private doUploadfile();
    private Save(callBack);
    private _onDeletedItems(items);
    private _submit();
    private updateContent(newContent);
    private onChange(evt);
    private onBlur(evt);
    private afterPaste(evt);
    private getIcons();
    private uploadImageCallback(value);
    private modules();
    componentDidMount(): void;
    private _douploadfile(fileInput);
}
