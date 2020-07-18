import { IFileUploadProps } from "./IFieUploadProps";

export interface ICpsFileUploadProps extends IFileUploadProps {
  docid: number;
  errMsg?: string;
  Enable: boolean;
  AutoUpload?: boolean;
}
