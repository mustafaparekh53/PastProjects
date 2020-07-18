/// <reference types="react" />
import { ICpsFileUploadProps } from "./ICpsFileUploadProps";
import React = require("react");
import { IFileState } from "./IFileState";
import "@pnp/polyfill-ie11";
export declare class CpsFileUpload extends React.Component<ICpsFileUploadProps, IFileState> {
    constructor(props: ICpsFileUploadProps);
    private readUploadedFileAsBuffer;
    render(): JSX.Element;
    componentWillReceiveProps(newProps: ICpsFileUploadProps): void;
    private doUpload(files, mill);
}
