import React = require("react");
import { IAuditItemsState } from "./IAuditItemsState";
import * as ReactQuill from "react-quill";
import * as QuillNamespace from "quill";
let Quill: any = QuillNamespace;
const Delta = Quill.import("delta");
import "react-quill/dist/quill.snow.css";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { WebConfig } from "../../ComComponents/webconfig";
import { Label } from "office-ui-fabric-react/lib/Label";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
// import emitter from "../../ComComponents/ev";
export class AuditItems extends React.Component<any, IAuditItemsState> {
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
  // eventEmitter: any;
  constructor(props: any) {
    super(props);
    this.state = {
      description: "",
      result: undefined,
      isLaywer: false,
      sendtype: ""
    };
  }
  public render(): React.ReactElement<any> {
    return (
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
            <table style={{ width: "90%", margin: "0 auto" }}>
              <tr>
                <td style={{ width: "100px" }}>
                  <h3>已选择项目:</h3>
                </td>
                <td>
                  <ol>
                    {this.props.curItems.map(item => {
                      return (
                        <li style={{ margin: "0px 20px" }}>
                          <a
                            href={`${WebConfig.ApprovalPage}?request=${
                              item.Id
                            }`}
                            target="_blank"
                          >
                            {item.requestNo}
                          </a>
                          :{item.Title}
                        </li>
                      );
                    })}
                  </ol>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
            <table style={{ width: "90%", margin: "0 auto" }}>
              <tr>
                <td>
                  <h2>审批意见栏</h2>
                </td>
              </tr>
              <tr>
                <td>
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
                        // console.log(this.props.isLaywer);
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
                        // console.log(this.props.isLaywer);
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
                  {this.state.result && this.props.isLaywer ? (
                    <div>
                      寄送方式
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
                    审批意见：
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
                  <div className="ms-Grid">
                    <div className="ms-Grid-row">
                      <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                        <Label>审批日期</Label>
                      </div>
                      <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                        <Label>{new Date().toLocaleDateString()}</Label>
                      </div>
                      <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                        <Label>审批人</Label>
                      </div>
                      <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                        <Label>{this.props.curUser.Title}</Label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
            <div className="ms-textAlignCenter">{this._getButtons()}</div>
          </div>
        </div>
      </div>
    );
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
  @autobind
  private updateContent(newContent: string): void {
    this.setState({
      description: newContent
    });
    // console.log(newContent);
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
    return buttons;
  }
  private _isSubmitButtonHidden(): boolean {
    return false;
  }
  public componentDidMount(): void {
    /*this.eventEmitter = emitter.addListener("setIsLaywer",(states)=> {
      console.log(states);
      this.setState({
        isLaywer:states.isWaitforLaywer
      });
  });*/
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
  // 组件销毁前移除事件监听
  public componentWillUnmount(): void {
    // console.log("removeListener");
    //  emitter.removeListener("setIsLaywer",this.eventEmitter);
  }
  public componentWillReceiveProps(nextprop: any): void {
    // console.log(nextprop);
  }
  @autobind
  private _submit(): void {
    // console.log(this.state.result);
    if (this.state.result === undefined) {
      return;
    }
    if (this.state.result === false && this.state.description.trim() === "") {
      alert("请填写驳回原因！");
      return;
    }
    if (this.state.result && this.props.isLaywer) {
      if (this.state.sendtype === undefined || this.state.sendtype === "") {
        return;
      }
    }
    // objectAssign(curItem,this.props.curItem);
    // curItem.status=status;
    const itemcount: number = this.props.curItems.length;
    this.props.curItems.map((curItem, index) => {
      const data: any = {
        itemidId: curItem.Id,
        Title: curItem.status === "1" ? "审价中心" : "律师",
        result: this.state.result,
        sendtype: this.props.isLaywer ? this.state.sendtype : "",
        description: this.state.description ? this.state.description : ""
      };
      let applog: string = "";
      if (!curItem.applog || curItem.applog.indexOf(",") < 0) {
        applog = "," + this.props.curUser.Id + ",";
      } else if (
        curItem.applog.indexOf("," + this.props.curUser.Id + ",") < 0
      ) {
        applog = curItem.applog + this.props.curUser.Id + ",";
      }
      let isPrice: boolean = true;
      sp.web.lists
        .getByTitle(WebConfig.AddrListName)
        .items.add(data)
        .then(value => {
          let status: string = "";
          if (curItem.status === "1") {
            isPrice = true;
            status = data.result ? "2" : "-1";
          } else {
            isPrice = false;
            status = data.result ? "3" : "-2";
          }
          let ItemData: any = { status: status, applog: applog };
          if (isPrice) {
            ItemData.pricingcenterId = this.props.curUser.Id;
          } else {
            ItemData.lawyerId = this.props.curUser.Id;
          }
          sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.getById(curItem.Id)
            .update(ItemData)
            .then(v2 => {
              this.props.onUpdatedItem(
                curItem,
                status,
                this.state.description ? this.state.description : "",
                this.state.sendtype,
                itemcount
              );
            });
        });
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
