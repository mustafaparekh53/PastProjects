import { IAttachmentprop } from "./IAttachmentprop";
import { IAttachmentState } from "./IAttachmentState";
import React = require("react");
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { WebConfig } from "../../../ComComponents/webconfig";
import {
  Dialog,
  DialogFooter,
  DialogType
} from "office-ui-fabric-react/lib/Dialog";
import {
  PrimaryButton,
  DefaultButton
} from "office-ui-fabric-react/lib/Button";
import { autobind } from "office-ui-fabric-react/lib/Utilities";

export class Attachments extends React.Component<
  IAttachmentprop,
  IAttachmentState
> {
  constructor(props: IAttachmentprop) {
    super(props);
    this.state = {
      attitems: props.defaultatts || [],
      hideDialog: true
    };
  }
  public componentDidMount(): void {
    this.initAttlist();
  }
  private initAttlist(): void {
    let docid: number = this.props.docid;
    let listName: string =
      this.props.listName && this.props.listName.trim() !== ""
        ? this.props.listName.trim()
        : WebConfig.requestedItemsListName;
    if (docid > 0 && this.state.attitems.length === 0) {
      let atts: any[];
      sp.web.lists
        .getByTitle(listName)
        .items.getById(docid)
        .attachmentFiles.get()
        .then(data => {
          this.setState({
            attitems: data
          });
        });
    }
  }
  private DeleteAtt(name: string): void {
    // console.log(name);
    this.setState({
      deletingFileName: name,
      hideDialog: false
    });
  }
  public render(): JSX.Element {
    // console.log(this.state.attitems);
    return (
      <div>
        <ul>
          {this.state.attitems &&
            this.state.attitems.map((item, index) => {
              return (
                <li>
                  <a href={item.ServerRelativeUrl} target="_blank">
                    {item.FileName}
                  </a>
                  {this.props.deleteenable ||
                  (this.props.listName === WebConfig.requestedItemsListName &&
                    this.getDeleteEnable(item)) ? (
                    <a
                      aria-label="Delete icon"
                      className="btn_delete"
                      onClick={data => {
                        this.DeleteAtt(item.FileName);
                      }}
                    >
                      <i
                        className="ms-Icon ms-Icon--Delete x-hidden-focus"
                        title="删除附件"
                        aria-hidden="true"
                      />
                    </a>
                  ) : null}
                </li>
              );
            })}
        </ul>
        <Dialog
          hidden={this.state.hideDialog}
          onDismiss={this._closeDialog}
          dialogContentProps={{
            type: DialogType.normal,
            title: "删除确认",
            subText: "确认要删除此附件吗？"
          }}
          modalProps={{
            titleAriaId: "myLabelId",
            subtitleAriaId: "mySubTextId",
            isBlocking: false,
            containerClassName: "ms-dialogMainOverride"
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={this._confirmDialog} text="是" />
            <DefaultButton onClick={this._closeDialog} text="否" />
          </DialogFooter>
        </Dialog>
      </div>
    );
  }
  @autobind
  private _confirmDialog(): void {
    if (this.state.deletingFileName && this.state.deletingFileName.length > 0) {
      let docid: number = this.props.docid;
      // this.setState({deletingFileName:null});
      let name: string = this.state.deletingFileName;
      let listName: string =
        this.props.listName && this.props.listName.trim() !== ""
          ? this.props.listName.trim()
          : WebConfig.requestedItemsListName;
      sp.web.lists
        .getByTitle(listName)
        .items.getById(docid)
        .attachmentFiles.deleteMultiple(name)
        .then(() => {
          // this.initAttlist();
          let data: any[] = this.state.attitems.filter((item, i) => {
            return item.FileName !== name;
          });
          this.setState(
            {
              hideDialog: true,
              attitems: data,
              deletingFileName: null
            },
            () => {
              if (this.props.setAtts) {
                this.props.setAtts(data);
              }
            }
          );
        })
        .catch(err => {
          console.log(err);
          alert("删除失败。");
          // this.setState({ hideDialog: true });
        });
    } else {
      this.setState({ hideDialog: true });
    }
  }
  @autobind
  private _closeDialog(): void {
    this.setState({ deletingFileName: null, hideDialog: true });
  }
  @autobind
  private getDeleteEnable(item: any): boolean {
    // console.log(item);
    let fileName: string = item.FileName;
    let addrIndex: number = fileName.lastIndexOf(".");
    if (addrIndex > 2) {
      fileName = fileName.substr(addrIndex - 2, 2);
      // console.log(fileName);
      return fileName === "_s";
    }
    return false;
  }
  public componentWillReceiveProps(nextProps: IAttachmentprop): void {
    this.setState({
      attitems: nextProps.defaultatts
    });
  }
}
