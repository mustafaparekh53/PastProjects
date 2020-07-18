/// <reference types="react" />
import { IFileUploadProps } from "./IFieUploadProps";
import React = require("react");
import { IFileUploadState } from "./IFileUploadState";
export declare class FileUpload extends React.Component<any, IFileUploadState> {
    userAgent: any;
    IETag: any;
    fileName: any;
    textBeforeFiles: any;
    _withoutFileUpload: any;
    disabledIEChoose: any;
    files: any;
    onabort: any;
    uploadFail: any;
    uploadError: any;
    uploadSuccess: any;
    uploading: any;
    doUpload: any;
    beforeUpload: any;
    chooseFile: any;
    beforeChoose: any | false;
    requestHeaders: any;
    withCredentials: any;
    fileFieldName: any;
    numberLimit: any;
    multiple: any;
    accept: any;
    timeout: any;
    wrapperDisplay: any;
    dataType: string;
    paramAddToField: any;
    chooseAndUpload: any;
    param: any;
    baseUrl: any;
    isIE: boolean;
    constructor(props: IFileUploadProps);
    private _updateProps(props);
    private commonChooseFile();
    private commonChange(e);
    private commonUpload();
    private appendFieldsToFormData(formData);
    private IEBeforeChoose(e);
    private IEChooseFile(e);
    private IEUpload(e?);
    private IECallback(dataType, frameId);
    private forwardChoose();
    /**
     * 外部调用方法，当多文件上传时，用这个方法主动删除列表中某个文件
     * TODO: 此方法应为可以任意操作文件数组
     * @param func 用户调用时传入的函数，函数接收参数files（filesAPI 对象）
     * @return Obj File API 对象
     * File API Obj:
     * {
     *   0 : file,
     *   1 : file,
     *   length : 2
     * }
     */
    private fowardRemoveFile(func);
    private filesToUpload(files);
    private abort(id);
    private checkIE();
    private fakeProgress();
    private getUserAgent();
    private getInitialState();
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillReceiveProps(newProps: any): void;
    render(): JSX.Element;
    private _packRender();
    private _multiIEForm();
}
