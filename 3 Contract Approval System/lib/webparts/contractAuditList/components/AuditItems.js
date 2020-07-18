var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as ReactQuill from "react-quill";
import * as QuillNamespace from "quill";
var Quill = QuillNamespace;
var Delta = Quill.import("delta");
import "react-quill/dist/quill.snow.css";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { WebConfig } from "../../ComComponents/webconfig";
import { Label } from "office-ui-fabric-react/lib/Label";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
// import emitter from "../../ComComponents/ev";
var AuditItems = (function (_super) {
    __extends(AuditItems, _super);
    // eventEmitter: any;
    function AuditItems(props) {
        var _this = _super.call(this, props) || this;
        _this.formats = [
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
        _this.state = {
            description: "",
            result: undefined,
            isLaywer: false,
            sendtype: ""
        };
        return _this;
    }
    AuditItems.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "ms-Grid" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement("table", { style: { width: "90%", margin: "0 auto" } },
                        React.createElement("tr", null,
                            React.createElement("td", { style: { width: "100px" } },
                                React.createElement("h3", null, "\u5DF2\u9009\u62E9\u9879\u76EE:")),
                            React.createElement("td", null,
                                React.createElement("ol", null, this.props.curItems.map(function (item) {
                                    return (React.createElement("li", { style: { margin: "0px 20px" } },
                                        React.createElement("a", { href: WebConfig.ApprovalPage + "?request=" + item.Id, target: "_blank" }, item.requestNo),
                                        ":",
                                        item.Title));
                                }))))))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement("table", { style: { width: "90%", margin: "0 auto" } },
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("h2", null, "\u5BA1\u6279\u610F\u89C1\u680F"))),
                        React.createElement("tr", null,
                            React.createElement("td", null,
                                React.createElement("div", null,
                                    "\u5BA1\u6279\u7ED3\u679C",
                                    React.createElement("span", { style: { color: "red" } }, "*"),
                                    "\uFF1A",
                                    React.createElement("input", { type: "radio", id: "rst_ok", name: "rdo_result", value: "1", onClick: function () {
                                            _this.setState({ result: true });
                                            // console.log(this.props.isLaywer);
                                        } }),
                                    React.createElement("label", { htmlFor: "rst_ok" }, "\u901A\u8FC7"),
                                    React.createElement("input", { type: "radio", id: "rst_no", name: "rdo_result", value: "0", onClick: function () {
                                            _this.setState({ result: false, sendtype: "" });
                                            // console.log(this.props.isLaywer);
                                        } }),
                                    React.createElement("label", { htmlFor: "rst_no" }, "\u62D2\u7EDD"),
                                    "\u00A0\u00A0",
                                    React.createElement("label", { style: {
                                            color: "red",
                                            display: this.state.result === undefined ? "" : "none"
                                        } }, "\u8BF7\u9009\u62E9\u662F\u5426\u901A\u8FC7"),
                                    " "),
                                this.state.result && this.props.isLaywer ? (React.createElement("div", null,
                                    "\u5BC4\u9001\u65B9\u5F0F",
                                    React.createElement("span", { style: { color: "red" } }, "*"),
                                    "\uFF1A",
                                    React.createElement("input", { type: "radio", id: "rst_send0", name: "rdo_send", checked: this.state.sendtype === "请取回", value: "请取回", onClick: function () {
                                            _this.setState({ sendtype: "请取回" });
                                        } }),
                                    React.createElement("label", { htmlFor: "rst_send0" }, "\u8BF7\u53D6\u56DE"),
                                    React.createElement("input", { type: "radio", id: "rst_send1", name: "rdo_send", value: "今天寄回", checked: this.state.sendtype === "今天寄回", onClick: function () {
                                            _this.setState({ sendtype: "今天寄回" });
                                        } }),
                                    React.createElement("label", { htmlFor: "rst_send1" }, "\u4ECA\u5929\u5BC4\u56DE"),
                                    React.createElement("label", { style: {
                                            color: "red",
                                            marginLeft: "20px",
                                            display: !this.state.sendtype || this.state.sendtype === ""
                                                ? ""
                                                : "none"
                                        } }, "\u8BF7\u9009\u62E9\u5BC4\u53D6\u65B9\u5F0F"))) : (""),
                                React.createElement("div", null,
                                    "\u5BA1\u6279\u610F\u89C1\uFF1A",
                                    React.createElement("div", null,
                                        React.createElement(ReactQuill, { ref: function (el) { return (_this.quillRef = el); }, defaultValue: this.state.description && "", modules: this.modules(), formats: this.formats, onChange: this.updateContent }))),
                                React.createElement("div", { className: "ms-Grid" },
                                    React.createElement("div", { className: "ms-Grid-row" },
                                        React.createElement("div", { className: "ms-Grid-col ms-sm2 ms-md2 ms-lg2" },
                                            React.createElement(Label, null, "\u5BA1\u6279\u65E5\u671F")),
                                        React.createElement("div", { className: "ms-Grid-col ms-sm2 ms-md2 ms-lg2" },
                                            React.createElement(Label, null, new Date().toLocaleDateString())),
                                        React.createElement("div", { className: "ms-Grid-col ms-sm2 ms-md2 ms-lg2" },
                                            React.createElement(Label, null, "\u5BA1\u6279\u4EBA")),
                                        React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" },
                                            React.createElement(Label, null, this.props.curUser.Title))))))))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement("div", { className: "ms-textAlignCenter" }, this._getButtons())))));
    };
    AuditItems.prototype.modules = function () {
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
    };
    AuditItems.prototype.updateContent = function (newContent) {
        this.setState({
            description: newContent
        });
        // console.log(newContent);
    };
    AuditItems.prototype._getButtons = function () {
        var buttons = [];
        if (this._isSubmitButtonHidden() === false) {
            buttons.push(React.createElement(PrimaryButton, { "data-automation-id": "test", text: "提交", onClick: this._submit }));
        }
        return buttons;
    };
    AuditItems.prototype._isSubmitButtonHidden = function () {
        return false;
    };
    AuditItems.prototype.componentDidMount = function () {
        var _this = this;
        /*this.eventEmitter = emitter.addListener("setIsLaywer",(states)=> {
          console.log(states);
          this.setState({
            isLaywer:states.isWaitforLaywer
          });
      });*/
        // tslint:disable-next-line:typedef
        var toolbar = this.quillRef.getEditor().getModule("toolbar");
        toolbar.addHandler("image", function () {
            var fileInput = _this.quillRef.editor.container.querySelector("input.ql-image[type=file]");
            if (fileInput == null) {
                fileInput = document.createElement("input");
                fileInput.setAttribute("type", "file");
                fileInput.setAttribute("style", "display:none");
                fileInput.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon");
                fileInput.classList.add("ql-image");
                fileInput.addEventListener("change", function () {
                    if (fileInput.files != null && fileInput.files[0] != null) {
                        _this._douploadfile(fileInput);
                    }
                });
                _this.quillRef.editor.container.appendChild(fileInput);
            }
            fileInput.click();
        });
    };
    // 组件销毁前移除事件监听
    AuditItems.prototype.componentWillUnmount = function () {
        // console.log("removeListener");
        //  emitter.removeListener("setIsLaywer",this.eventEmitter);
    };
    AuditItems.prototype.componentWillReceiveProps = function (nextprop) {
        // console.log(nextprop);
    };
    AuditItems.prototype._submit = function () {
        var _this = this;
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
        var itemcount = this.props.curItems.length;
        this.props.curItems.map(function (curItem, index) {
            var data = {
                itemidId: curItem.Id,
                Title: curItem.status === "1" ? "审价中心" : "律师",
                result: _this.state.result,
                sendtype: _this.props.isLaywer ? _this.state.sendtype : "",
                description: _this.state.description ? _this.state.description : ""
            };
            var applog = "";
            if (!curItem.applog || curItem.applog.indexOf(",") < 0) {
                applog = "," + _this.props.curUser.Id + ",";
            }
            else if (curItem.applog.indexOf("," + _this.props.curUser.Id + ",") < 0) {
                applog = curItem.applog + _this.props.curUser.Id + ",";
            }
            var isPrice = true;
            sp.web.lists
                .getByTitle(WebConfig.AddrListName)
                .items.add(data)
                .then(function (value) {
                var status = "";
                if (curItem.status === "1") {
                    isPrice = true;
                    status = data.result ? "2" : "-1";
                }
                else {
                    isPrice = false;
                    status = data.result ? "3" : "-2";
                }
                var ItemData = { status: status, applog: applog };
                if (isPrice) {
                    ItemData.pricingcenterId = _this.props.curUser.Id;
                }
                else {
                    ItemData.lawyerId = _this.props.curUser.Id;
                }
                sp.web.lists
                    .getByTitle(WebConfig.requestedItemsListName)
                    .items.getById(curItem.Id)
                    .update(ItemData)
                    .then(function (v2) {
                    _this.props.onUpdatedItem(curItem, status, _this.state.description ? _this.state.description : "", _this.state.sendtype, itemcount);
                });
            });
        });
    };
    AuditItems.prototype._douploadfile = function (fileInput) {
        var _this = this;
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onloadend = function (e) {
            sp.web.lists
                .getByTitle(WebConfig.AddrListName)
                .rootFolder.files.add(file.name, reader.result)
                .then(function (v) {
                var data = {
                    imgUrl: WebConfig.hosturl + v.data.ServerRelativeUrl,
                    FileName: v.data.FileName
                };
                var range = _this.quillRef.editor.getSelection(true);
                _this.quillRef.editor.updateContents(new Delta()
                    .retain(range.index)
                    .delete(range.length)
                    .insert({ image: data.imgUrl }), Quill.sources.USER);
                _this.quillRef.editor.setSelection(range.index + 1, Quill.sources.SILENT);
                fileInput.value = "";
            });
        };
        reader.readAsArrayBuffer(file);
    };
    __decorate([
        autobind
    ], AuditItems.prototype, "updateContent", null);
    __decorate([
        autobind
    ], AuditItems.prototype, "_submit", null);
    return AuditItems;
}(React.Component));
export { AuditItems };

//# sourceMappingURL=AuditItems.js.map
