export interface IProgress {
    loaded:number;
    total:number;
}
export interface IFileUploadProps {
    baseUrl : string;
    param? : any;
    dataType? : string;
    wrapperDisplay? : string;
    multiple?: boolean;
    numberLimit?:number;
    accept?: string;
    chooseAndUpload? : boolean;
    paramAddToField? : any;
    fileFieldName?:(file:File)=>string ;
    withCredentials?: boolean;
      requestHeaders?: any;
    beforeChoose? : ()=>boolean;
    chooseFile? : (files:File[])=>void;
    beforeUpload? :(files:any[],mill:any)=>boolean;
    doUpload? : (files:any[],mill:any)=>void;
    uploading? : (progress:IProgress)=>void;
    uploadSuccess? : (resp:any)=>void;
    uploadError? : (err:any)=>void;
    uploadFail? : (resp:any)=>void;
}