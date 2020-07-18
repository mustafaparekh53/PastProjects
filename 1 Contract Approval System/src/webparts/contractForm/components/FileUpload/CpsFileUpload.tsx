import { ICpsFileUploadProps } from "./ICpsFileUploadProps";
import React = require("react");
import { FileUpload } from "./FileUpload";
import { IFileState } from "./IFileState";
import { sp, Item } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import * as stylesImport from "./FileUpload.module.scss";
import { WebConfig } from "../../../ComComponents/webconfig";
import { GetFileRandName } from "../../../ComComponents/comutil";

export class CpsFileUpload extends React.Component<
  ICpsFileUploadProps,
  IFileState
> {
  constructor(props: ICpsFileUploadProps) {
    super(props);
    if (props.doUpload === undefined) {
      props.doUpload = this.doUpload;
    }
    this.state = {
      file: null,
      ContractItemId: this.props.docid,
      errMsg: this.props.errMsg
    };
  }

  private readUploadedFileAsBuffer: (
    inputFile: File
  ) => Promise<ArrayBuffer> = (inputFile: File) => {
    const temporaryFileReader: FileReader = new FileReader();
    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = ev => {
        temporaryFileReader.abort();
        reject(ev);
        // reject(new DOMException("Problem parsing input file."));
      };
      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result as ArrayBuffer);
      };
      temporaryFileReader.readAsArrayBuffer(inputFile);
    });
  };
  public render(): JSX.Element {
    //  console.log(this.props);
    return (
      <FileUpload options={this.props}>
        {this.state.errMsg && this.state.errMsg.length > 1 ? (
          <div>
            <span className="errmMessage">{this.state.errMsg}</span>
          </div>
        ) : null}
        {this.props.Enable && !this.props.AutoUpload ? (
          <button ref="uploadBtn">上传</button>
        ) : (
          ""
        )}
      </FileUpload>
    );
  }
  public componentWillReceiveProps(newProps: ICpsFileUploadProps): void {
    this.setState({ errMsg: newProps.errMsg });
  }
  private doUpload(files: File[], mill: any): void {
    // in case of multiple files,iterate or else upload the first file.
    let file: File = files[0];
    if (file !== undefined || file !== null) {
      let item: Item = sp.web.lists
        .getByTitle(WebConfig.requestedItemsListName)
        .items.getById(this.state.ContractItemId);

      const fileReader: FileReader = new FileReader();

      fileReader.onloadend = (event: Event) => {
        let data: any = fileReader.result;
        let newfileName: string = GetFileRandName(file.name);
        item.attachmentFiles.add(newfileName, data).then(v => {
          console.log(v);
        });
      };

      fileReader.readAsArrayBuffer(file);
    }
  }
}
