import React = require("react");
import { IApprovalFormState } from "./IApprovalFormState";
import { IApprovalFormProps } from "./IApprovalFormProps";
import { Apprhistory } from "./appresults/Apprhistory";

import { autobind } from "@uifabric/utilities";
import { IColumnField } from "../../ComComponents/interfaces/IColumnField";
import { IApprovalItemProps } from "./IApprovalItemProps";
import * as ReactQuill from "react-quill";
import * as QuillNamespace from "quill";
let Quill: any = QuillNamespace;
const Delta = Quill.import("delta");
import "react-quill/dist/quill.snow.css";
import { sp, Item } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { IItem } from "../../ComComponents/interfaces/IItem";
import { WebConfig } from "../../ComComponents/webconfig";
import { Attachments } from "../../contractForm/components/Attachments/Attachments";
import CollapsePanel from "../../ComComponents/collapsepanel/CollapsePanel";
import * as objectAssign from "object-assign";
import * as moment from "moment";
import "moment/locale/zh-cn";
import { GetFileRandName } from "../../ComComponents/comutil";
import { Label } from "office-ui-fabric-react/lib/Label";
import {
  DefaultButton,
  PrimaryButton
} from "office-ui-fabric-react/lib/Button";
export class AppItemForm extends React.Component<
  IApprovalItemProps,
  IApprovalFormState
> {
  private quillRef: any;
  private formats: any[] = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
  ];
  FileUpload: HTMLInputElement;
  constructor(props: any) {
    super(props);
    this.state = {
      requestedItemsListFields: [
        {
          ariaLabel: "合同类型",
          Name: "ContractType"
        },
        {
          ariaLabel: "合同编号",
          Name: "ContractNo"
        },
        {
          ariaLabel: "合同名称",
          Name: "Title"
        },
        {
          ariaLabel: "合同标的和数量",
          Name: "ContractObject"
        },
        {
          ariaLabel: "合同金额",
          Name: "MoneyText"
        },
        {
          ariaLabel: "付款方式",
          Name: "PayWay"
        },
        {
          ariaLabel: "备注",
          Name: "remarks"
        },
        {
          ariaLabel: "附件",
          Type: "linkArray",
          Name: "AttachmentFiles"
        },
        {
          ariaLabel: "是否送审价中心审批",
          Name: "NeedApproval"
        },
        {
          ariaLabel: "状态",
          Name: "statusDesc"
        }
      ] as IColumnField[],
      curUser: null,
      sendtype: "",
      submited: false,
      curItem: null
    };
  }
  public render(): React.ReactElement<IApprovalFormProps> {
    return (
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
            <table className="table" cellSpacing="0" cellPadding="0">
              <tr>
                <td className="title">
                  <Label>合同审批单号</Label>
                </td>
                <td>{this.props.curItem && this.props.curItem.requestNo}</td>
                <td className="title">
                  <Label>申请人</Label>
                </td>
                <td>{this.props.curItem && this.props.curItem.Author.Title}</td>
                <td className="title">
                  <Label>合同主体</Label>
                </td>
                <td>{this.props.curItem && this.props.curItem.mainbody}</td>
              </tr>
              <tr>
                <td className="title">
                  <Label>合同相对方</Label>
                </td>
                <td>
                  {this.props.curItem && this.props.curItem.RelativeParty}
                </td>
                <td className="title">
                  <Label>合同类型</Label>
                </td>
                <td>{this.props.curItem && this.props.curItem.ContractType}</td>
                <td className="title">
                  <Label>合同编号</Label>
                </td>
                <td>{this.props.curItem && this.props.curItem.ContractNo}</td>
              </tr>
              <tr>
                <td className="title">
                  <Label>合同名称</Label>
                </td>
                <td>{this.props.curItem && this.props.curItem.Title}</td>
                <td className="title">
                  <Label>合同标的和数量</Label>
                </td>
                <td>
                  {this.props.curItem && this.props.curItem.ContractObject}
                </td>
                <td className="title">
                  <Label>合同金额</Label>
                </td>
                <td>
                  {this.props.curItem
                    ? this.props.curItem.Currency &&
                      this.props.curItem.Currency === "N/A"
                      ? this.props.curItem.Currency
                      : this.props.curItem.Currency + this.props.curItem.Money
                    : ""}
                </td>
              </tr>
              <tr>
                <td className="title">
                  <Label>付款方式</Label>
                </td>
                <td>{this.props.curItem && this.props.curItem.PayWay}</td>
                <td className="title">
                  <Label>是否送审价中心审批</Label>
                </td>
                <td colSpan={3}>
                  {this.props.curItem && this.props.curItem.NeedApproval
                    ? "是"
                    : "否"}
                </td>
              </tr>
              <tr>
                <td className="title">
                  <Label>备注</Label>
                </td>
                <td>{this.props.curItem && this.props.curItem.remarks}</td>
                <td className="title">
                  <Label>附件</Label>
                </td>
                <td colSpan={3}>
                  <Attachments
                    docid={this.props.curItem && this.props.curItem.Id}
                    deleteenable={false}
                    defaultatts={
                      this.props.curItem && this.props.curItem.AttachmentFiles
                    }
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
            <CollapsePanel headerText={"审批记录"}>
              <Apprhistory
                contractitemid={this.props.curItem && this.props.curItem.Id}
              />
            </CollapsePanel>
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
            <fieldset>
              <legend>
                <Label>
                  <h2>审批意见栏</h2>
                </Label>
              </legend>
              <div>
                审批结果
                <span style={{ color: "red" }}>*</span>：
                <input
                  type="radio"
                  id="rst_ok"
                  name="rdo_result"
                  value="1"
                  onClick={() => {
                    this.setState({ result: true });
                  }}
                />
                <label htmlFor="rst_ok">通过</label>
                <input
                  type="radio"
                  id="rst_no"
                  name="rdo_result"
                  value="0"
                  onClick={() => {
                    this.setState({ result: false, sendtype: "" });
                  }}
                />
                <label htmlFor="rst_no">拒绝</label>
                &nbsp;&nbsp;
                <label
                  style={{
                    color: "red",
                    display: this.state.result === undefined ? "" : "none"
                  }}
                >
                  请选择是否通过
                </label>{" "}
              </div>

              {this.props.curItem &&
              this.props.curItem.status === "2" &&
              this.state.result ? (
                <div>
                  寄取方式
                  <span style={{ color: "red" }}>*</span>：
                  <input
                    type="radio"
                    id="rst_send0"
                    name="rdo_send"
                    checked={this.state.sendtype === "请取回"}
                    value="请取回"
                    onClick={() => {
                      this.setState({ sendtype: "请取回" });
                    }}
                  />
                  <label htmlFor="rst_send0">请取回</label>
                  <input
                    type="radio"
                    id="rst_send1"
                    name="rdo_send"
                    value="今天寄回"
                    checked={this.state.sendtype === "今天寄回"}
                    onClick={() => {
                      this.setState({ sendtype: "今天寄回" });
                    }}
                  />
                  <label htmlFor="rst_send1">今天寄回</label>
                  <label
                    style={{
                      color: "red",
                      marginLeft: "20px",
                      display:
                        !this.state.sendtype || this.state.sendtype === ""
                          ? ""
                          : "none"
                    }}
                  >
                    请选择寄取方式
                  </label>
                </div>
              ) : (
                ""
              )}
              <div>
                {`${
                  this.props.curItem && this.props.curItem.status === "1"
                    ? "审价中心"
                    : "律师"
                }意见`}
                ：
                <div>
                  <ReactQuill
                    ref={el => (this.quillRef = el)}
                    defaultValue={this.state.description && ""}
                    modules={this.modules()}
                    formats={this.formats}
                    onChange={this.updateContent}
                  />
                </div>
              </div>
              <div>
                附件：
                <div className="ms-Grid-row">
                  <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                    <input
                      type="file"
                      onChange={this.UploadFile}
                      ref={obj => {
                        this.FileUpload = obj;
                      }}
                    />
                    <div style={{ color: "Red" }}>
                      {this.state.uploadErrmsg}
                    </div>
                  </div>
                  <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                    <Attachments
                      docid={this.state.id ? this.state.id : 0}
                      deleteenable={!this._isSubmitButtonHidden()}
                      listName={WebConfig.AddrListName}
                      defaultatts={
                        this.state.AttachmentFiles
                          ? this.state.AttachmentFiles
                          : []
                      }
                      setAtts={this._onDeletedItems}
                    />
                  </div>
                </div>
              </div>
              <div className="ms-Grid">
                <div className="ms-Grid-row">
                  <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                    <Label>审批日期</Label>
                  </div>
                  <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                    <Label>{moment(new Date()).format("YYYY/MM/DD")}</Label>
                  </div>
                  <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                    <Label>审批人</Label>
                  </div>
                  <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                    <Label>
                      {this.props.curItem && this.props.curUser.Title}
                    </Label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
            <div className="footerbtns">{this._getButtons()}</div>
          </div>
        </div>
      </div>
    );
  }

  private _getButtons(): JSX.Element[] {
    let buttons: JSX.Element[] = [];

    if (this._isSubmitButtonHidden() === false) {
      buttons.push(
        <PrimaryButton
          data-automation-id="test"
          text="提交"
          onClick={this._submit}
        />
      );
    }
    buttons.push(
      <DefaultButton
        data-automation-id="test2"
        text="关闭"
        onClick={() => {
          window.location.href = WebConfig.InapprovalListPage;
        }}
      />
    );
    return buttons;
  }

  private _isSubmitButtonHidden(): boolean {
    return false;
  }
  @autobind
  private UploadFile(): void {
    if (this.FileUpload.files.length > 0) {
      this.setState({ uploadErrmsg: "正在上传..." });
      if (this.state.id && this.state.id > 0) {
        this.doUploadfile();
      } else {
        this.Save(() => {
          const data: any = {
            itemidId: this.props.curItem.Id,
            Title: this.props.curItem.status === "1" ? "审价中心" : "律师",
            result: this.state.result,
            sendtype: this.state.sendtype,
            submited: false,
            description: this.state.description ? this.state.description : ""
          };
          sp.web.lists
            .getByTitle(WebConfig.AddrListName)
            .items.add(data)
            .then(item => {
              this.setState({ id: item.data.Id }, () => {
                this.doUploadfile();
              });
            })
            .catch(err => {
              console.log(err);
              alert("保存失败，请刷新后再试。");
            });
        });
      }
    }
  }
  @autobind
  private doUploadfile(): void {
    let file: File = this.FileUpload.files[0];
    const fileReader: FileReader = new FileReader();
    let item: Item = sp.web.lists
      .getByTitle(WebConfig.AddrListName)
      .items.getById(this.state.id);
    fileReader.onloadend = (event: Event) => {
      let attdata: any = fileReader.result;
      let subjoin: string = status === "3" ? "_s" : "";
      let newfileName: string = GetFileRandName(file.name, subjoin);
      item.attachmentFiles
        .add(newfileName, attdata)
        .then(v => {
          // console.log(v);
          let AttachmentFiles: any[] = [];
          objectAssign(AttachmentFiles, this.state.AttachmentFiles);
          if (!AttachmentFiles) {
            AttachmentFiles = [];
          }
          // console.log(data.AttachmentFiles);
          AttachmentFiles.push({
            ServerRelativeUrl: v.data.ServerRelativeUrl,
            FileName: v.data.FileName
          });
          this.FileUpload.value = "";
          //  console.log(data.AttachmentFiles);
          this.setState(
            { AttachmentFiles: AttachmentFiles, uploadErrmsg: "上传成功" },
            () => {
              setTimeout(() => {
                this.setState(() => ({ uploadErrmsg: "" }));
              }, 500);
            }
          );
          /*   isAdd
            ? this.props.onAdded(data, false)
            : this.props.onUpdated(data, false);*/
        })
        .catch(err => {
          let errMsg: string = err.data
            ? err.data.responseBody["odata.error"].message.value
            : err.message;
          this.setState({ uploadErrmsg: "上传失败:" + errMsg });
        });
    };

    fileReader.readAsArrayBuffer(file);
  }
  private Save(callBack: () => void): void {
    let title: string = this.props.curItem.status === "1" ? "审价中心" : "律师";
    sp.web.lists
      .getByTitle(WebConfig.requestedItemsListName)
      .items.getById(this.props.curItem.Id)
      .get()
      .then(reqitem => {
        if (reqitem.status !== this.props.curItem.status) {
          sp.web.lists
            .getByTitle(WebConfig.AddrListName)
            .items.filter(
              "submited eq 1 and itemidId eq " +
                this.props.curItem.Id +
                " and Title eq '" +
                encodeURIComponent(title) +
                "'"
            )
            .orderBy("Modified", false)
            .top(1)
            .select("*", "Author/Title")
            .expand("Author")
            .get()
            .then(items => {
              let msg: string = "检测到申请状态有变更，请刷新。";
              if (items.length > 0) {
                let appItem: any = items[0];
                msg = `抱歉，该合同申请已被${title}${appItem.Author.Title}审批${
                  appItem.result ? "通过" : "驳回"
                },您不能重复处理。`;
                alert(msg);
              } else {
                // alert(msg);
                this.setState({ uploadErrmsg: msg });
              }
            });
        } else {
          callBack();
        }
      })
      .catch(err => {
        console.log(err);
        alert("保存失败，请刷新后再试。");
      });
  }
  @autobind
  private _onDeletedItems(items: any[]): void {
    this.setState({
      AttachmentFiles: items
    });
  }
  @autobind
  private _submit(): void {
    // console.log(this.state.result);
    if (this.state.result === undefined) {
      return;
    }
    if (this.state.result && this.props.curItem.status === "2") {
      if (this.state.sendtype === undefined || this.state.sendtype === "") {
        return;
      }
    }
    this.Save(() => {
      const data: any = {
        itemidId: this.props.curItem.Id,
        Title: this.props.curItem.status === "1" ? "审价中心" : "律师",
        result: this.state.result,
        sendtype: this.state.sendtype,
        submited: true,
        description: this.state.description ? this.state.description : ""
      };
      //  console.log(data);
      let applog: string = "";
      if (
        !this.props.curItem.applog ||
        this.props.curItem.applog.indexOf(",") < 0
      ) {
        applog = "," + this.props.curUser.Id + ",";
      } else if (
        this.props.curItem.applog.indexOf("," + this.props.curUser.Id + ",") < 0
      ) {
        applog = this.props.curItem.applog + this.props.curUser.Id + ",";
      }
      let isPrice: boolean = true;
      let pm: Promise<any> = null;
      if (this.state.id && this.state.id > 0) {
        pm = sp.web.lists
          .getByTitle(WebConfig.AddrListName)
          .items.getById(this.state.id)
          .update(data);
      } else {
        pm = sp.web.lists.getByTitle(WebConfig.AddrListName).items.add(data);
      }
      pm.then(value => {
        let status: string = "";
        if (this.props.curItem.status === "1") {
          status = data.result ? "2" : "-1";
          isPrice = true;
        } else {
          status = data.result ? "3" : "-2";
          isPrice = false;
        }
        let curItem: IItem = {} as IItem;
        // objectAssign(curItem,this.props.curItem);
        // curItem.status=status;
        let ItemData: any = { status: status, applog: applog };
        if (isPrice) {
          ItemData.pricingcenterId = this.props.curUser.Id;
        } else {
          ItemData.lawyerId = this.props.curUser.Id;
        }
        sp.web.lists
          .getByTitle(WebConfig.requestedItemsListName)
          .items.getById(this.props.curItem.Id)
          .update(ItemData)
          .then(v2 => {
            this.props.onUpdatedItem(
              this.props.curItem,
              status,
              this.state.description && this.state.description.trim() !== ""
                ? this.state.description
                : "",
              this.state.sendtype
            );
          });
      });
    });
  }
  @autobind
  private updateContent(newContent) {
    this.setState({
      description: newContent
    });
    // console.log(newContent);
  }
  @autobind
  private onChange(evt) {
    // console.log("onChange fired with event info: ", evt);
    // var newContent = evt.editor.getData();
    // this.setState({
    //  description: newContent
    // });
  }
  @autobind
  private onBlur(evt) {
    // console.log("onBlur event called with event info: ", evt);
  }
  @autobind
  private afterPaste(evt) {
    // console.log("afterPaste event called with event info: ", evt);
  }
  private getIcons(): string[] {
    return [
      "source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
      "paragraph fontfamily fontsize | superscript subscript | ",
      "forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
      "cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
      "horizontal date time  | image spechars | inserttable"
    ];
  }
  @autobind
  private uploadImageCallback(value: any): void {
    console.log(value);
  }
  private modules(): any {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
          ],
          ["link", "image"],
          ["clean"]
        ]
      }
    };
  }

  public componentDidMount(): void {
    // tslint:disable-next-line:typedef
    const toolbar = this.quillRef.getEditor().getModule("toolbar");

    toolbar.addHandler("image", () => {
      let fileInput: any = this.quillRef.editor.container.querySelector(
        "input.ql-image[type=file]"
      );
      if (fileInput == null) {
        fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        fileInput.setAttribute("style", "display:none");
        fileInput.setAttribute(
          "accept",
          "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"
        );
        fileInput.classList.add("ql-image");
        fileInput.addEventListener("change", () => {
          if (fileInput.files != null && fileInput.files[0] != null) {
            this._douploadfile(fileInput);
          }
        });
        this.quillRef.editor.container.appendChild(fileInput);
      }
      fileInput.click();
    });
  }
  private _douploadfile(fileInput: any): void {
    const file: File = fileInput.files[0] as File;
    let reader: any = new FileReader();
    reader.onloadend = e => {
      sp.web.lists
        .getByTitle(WebConfig.AddrListName)
        .rootFolder.files.add(file.name, reader.result)
        .then(v => {
          let data: any = {
            imgUrl: WebConfig.hosturl + v.data.ServerRelativeUrl,
            FileName: v.data.FileName
          };
          let range: any = this.quillRef.editor.getSelection(true);
          this.quillRef.editor.updateContents(
            new Delta()
              .retain(range.index)
              .delete(range.length)
              .insert({ image: data.imgUrl }),
            Quill.sources.USER
          );
          this.quillRef.editor.setSelection(
            range.index + 1,
            Quill.sources.SILENT
          );
          fileInput.value = "";
        });
    };
    reader.readAsArrayBuffer(file);
  }
}
