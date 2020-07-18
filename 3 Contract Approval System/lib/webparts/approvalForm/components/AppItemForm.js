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
import { Apprhistory } from "./appresults/Apprhistory";
import { autobind } from "@uifabric/utilities";
import * as ReactQuill from "react-quill";
import * as QuillNamespace from "quill";
var Quill = QuillNamespace;
var Delta = Quill.import("delta");
import "react-quill/dist/quill.snow.css";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { WebConfig } from "../../ComComponents/webconfig";
import { Attachments } from "../../contractForm/components/Attachments/Attachments";
import CollapsePanel from "../../ComComponents/collapsepanel/CollapsePanel";
import * as objectAssign from "object-assign";
import * as moment from "moment";
import "moment/locale/zh-cn";
import { GetFileRandName } from "../../ComComponents/comutil";
import { Label } from "office-ui-fabric-react/lib/Label";
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react/lib/Button";
var AppItemForm = (function (_super) {
    __extends(AppItemForm, _super);
    function AppItemForm(props) {
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
            ],
            curUser: null,
            sendtype: "",
            submited: false,
            curItem: null
        };
        return _this;
    }
    AppItemForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "ms-Grid" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement("table", { className: "table", cellSpacing: "0", cellPadding: "0" },
                        React.createElement("tr", null,
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u5408\u540C\u5BA1\u6279\u5355\u53F7")),
                            React.createElement("td", null, this.props.curItem && this.props.curItem.requestNo),
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u7533\u8BF7\u4EBA")),
                            React.createElement("td", null, this.props.curItem && this.props.curItem.Author.Title),
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u5408\u540C\u4E3B\u4F53")),
                            React.createElement("td", null, this.props.curItem && this.props.curItem.mainbody)),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u5408\u540C\u76F8\u5BF9\u65B9")),
                            React.createElement("td", null, this.props.curItem && this.props.curItem.RelativeParty),
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u5408\u540C\u7C7B\u578B")),
                            React.createElement("td", null, this.props.curItem && this.props.curItem.ContractType),
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u5408\u540C\u7F16\u53F7")),
                            React.createElement("td", null, this.props.curItem && this.props.curItem.ContractNo)),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u5408\u540C\u540D\u79F0")),
                            React.createElement("td", null, this.props.curItem && this.props.curItem.Title),
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u5408\u540C\u6807\u7684\u548C\u6570\u91CF")),
                            React.createElement("td", null, this.props.curItem && this.props.curItem.ContractObject),
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u5408\u540C\u91D1\u989D")),
                            React.createElement("td", null, this.props.curItem
                                ? this.props.curItem.Currency &&
                                    this.props.curItem.Currency === "N/A"
                                    ? this.props.curItem.Currency
                                    : this.props.curItem.Currency + this.props.curItem.Money
                                : "")),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u4ED8\u6B3E\u65B9\u5F0F")),
                            React.createElement("td", null, this.props.curItem && this.props.curItem.PayWay),
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u662F\u5426\u9001\u5BA1\u4EF7\u4E2D\u5FC3\u5BA1\u6279")),
                            React.createElement("td", { colSpan: 3 }, this.props.curItem && this.props.curItem.NeedApproval
                                ? "是"
                                : "否")),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u5907\u6CE8")),
                            React.createElement("td", null, this.props.curItem && this.props.curItem.remarks),
                            React.createElement("td", { className: "title" },
                                React.createElement(Label, null, "\u9644\u4EF6")),
                            React.createElement("td", { colSpan: 3 },
                                React.createElement(Attachments, { docid: this.props.curItem && this.props.curItem.Id, deleteenable: false, defaultatts: this.props.curItem && this.props.curItem.AttachmentFiles })))))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement(CollapsePanel, { headerText: "审批记录" },
                        React.createElement(Apprhistory, { contractitemid: this.props.curItem && this.props.curItem.Id })))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement("fieldset", null,
                        React.createElement("legend", null,
                            React.createElement(Label, null,
                                React.createElement("h2", null, "\u5BA1\u6279\u610F\u89C1\u680F"))),
                        React.createElement("div", null,
                            "\u5BA1\u6279\u7ED3\u679C",
                            React.createElement("span", { style: { color: "red" } }, "*"),
                            "\uFF1A",
                            React.createElement("input", { type: "radio", id: "rst_ok", name: "rdo_result", value: "1", onClick: function () {
                                    _this.setState({ result: true });
                                } }),
                            React.createElement("label", { htmlFor: "rst_ok" }, "\u901A\u8FC7"),
                            React.createElement("input", { type: "radio", id: "rst_no", name: "rdo_result", value: "0", onClick: function () {
                                    _this.setState({ result: false, sendtype: "" });
                                } }),
                            React.createElement("label", { htmlFor: "rst_no" }, "\u62D2\u7EDD"),
                            "\u00A0\u00A0",
                            React.createElement("label", { style: {
                                    color: "red",
                                    display: this.state.result === undefined ? "" : "none"
                                } }, "\u8BF7\u9009\u62E9\u662F\u5426\u901A\u8FC7"),
                            " "),
                        this.props.curItem &&
                            this.props.curItem.status === "2" &&
                            this.state.result ? (React.createElement("div", null,
                            "\u5BC4\u53D6\u65B9\u5F0F",
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
                        React.createElement("div", null, (this.props.curItem && this.props.curItem.status === "1"
                            ? "审价中心"
                            : "律师") + "\u610F\u89C1",
                            "\uFF1A",
                            React.createElement("div", null,
                                React.createElement(ReactQuill, { ref: function (el) { return (_this.quillRef = el); }, defaultValue: this.state.description && "", modules: this.modules(), formats: this.formats, onChange: this.updateContent }))),
                        React.createElement("div", null,
                            "\u9644\u4EF6\uFF1A",
                            React.createElement("div", { className: "ms-Grid-row" },
                                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg6" },
                                    React.createElement("input", { type: "file", onChange: this.UploadFile, ref: function (obj) {
                                            _this.FileUpload = obj;
                                        } }),
                                    React.createElement("div", { style: { color: "Red" } }, this.state.uploadErrmsg)),
                                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg6" },
                                    React.createElement(Attachments, { docid: this.state.id ? this.state.id : 0, deleteenable: !this._isSubmitButtonHidden(), listName: WebConfig.AddrListName, defaultatts: this.state.AttachmentFiles
                                            ? this.state.AttachmentFiles
                                            : [], setAtts: this._onDeletedItems })))),
                        React.createElement("div", { className: "ms-Grid" },
                            React.createElement("div", { className: "ms-Grid-row" },
                                React.createElement("div", { className: "ms-Grid-col ms-sm2 ms-md2 ms-lg2" },
                                    React.createElement(Label, null, "\u5BA1\u6279\u65E5\u671F")),
                                React.createElement("div", { className: "ms-Grid-col ms-sm2 ms-md2 ms-lg2" },
                                    React.createElement(Label, null, moment(new Date()).format("YYYY/MM/DD"))),
                                React.createElement("div", { className: "ms-Grid-col ms-sm2 ms-md2 ms-lg2" },
                                    React.createElement(Label, null, "\u5BA1\u6279\u4EBA")),
                                React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" },
                                    React.createElement(Label, null, this.props.curItem && this.props.curUser.Title))))))),
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                    React.createElement("div", { className: "footerbtns" }, this._getButtons())))));
    };
    AppItemForm.prototype._getButtons = function () {
        var buttons = [];
        if (this._isSubmitButtonHidden() === false) {
            buttons.push(React.createElement(PrimaryButton, { "data-automation-id": "test", text: "提交", onClick: this._submit }));
        }
        buttons.push(React.createElement(DefaultButton, { "data-automation-id": "test2", text: "关闭", onClick: function () {
                window.location.href = WebConfig.InapprovalListPage;
            } }));
        return buttons;
    };
    AppItemForm.prototype._isSubmitButtonHidden = function () {
        return false;
    };
    AppItemForm.prototype.UploadFile = function () {
        var _this = this;
        if (this.FileUpload.files.length > 0) {
            this.setState({ uploadErrmsg: "正在上传..." });
            if (this.state.id && this.state.id > 0) {
                this.doUploadfile();
            }
            else {
                this.Save(function () {
                    var data = {
                        itemidId: _this.props.curItem.Id,
                        Title: _this.props.curItem.status === "1" ? "审价中心" : "律师",
                        result: _this.state.result,
                        sendtype: _this.state.sendtype,
                        submited: false,
                        description: _this.state.description ? _this.state.description : ""
                    };
                    sp.web.lists
                        .getByTitle(WebConfig.AddrListName)
                        .items.add(data)
                        .then(function (item) {
                        _this.setState({ id: item.data.Id }, function () {
                            _this.doUploadfile();
                        });
                    })
                        .catch(function (err) {
                        console.log(err);
                        alert("保存失败，请刷新后再试。");
                    });
                });
            }
        }
    };
    AppItemForm.prototype.doUploadfile = function () {
        var _this = this;
        var file = this.FileUpload.files[0];
        var fileReader = new FileReader();
        var item = sp.web.lists
            .getByTitle(WebConfig.AddrListName)
            .items.getById(this.state.id);
        fileReader.onloadend = function (event) {
            var attdata = fileReader.result;
            var subjoin = status === "3" ? "_s" : "";
            var newfileName = GetFileRandName(file.name, subjoin);
            item.attachmentFiles
                .add(newfileName, attdata)
                .then(function (v) {
                // console.log(v);
                var AttachmentFiles = [];
                objectAssign(AttachmentFiles, _this.state.AttachmentFiles);
                if (!AttachmentFiles) {
                    AttachmentFiles = [];
                }
                // console.log(data.AttachmentFiles);
                AttachmentFiles.push({
                    ServerRelativeUrl: v.data.ServerRelativeUrl,
                    FileName: v.data.FileName
                });
                _this.FileUpload.value = "";
                //  console.log(data.AttachmentFiles);
                _this.setState({ AttachmentFiles: AttachmentFiles, uploadErrmsg: "上传成功" }, function () {
                    setTimeout(function () {
                        _this.setState(function () { return ({ uploadErrmsg: "" }); });
                    }, 500);
                });
                /*   isAdd
                  ? this.props.onAdded(data, false)
                  : this.props.onUpdated(data, false);*/
            })
                .catch(function (err) {
                var errMsg = err.data
                    ? err.data.responseBody["odata.error"].message.value
                    : err.message;
                _this.setState({ uploadErrmsg: "上传失败:" + errMsg });
            });
        };
        fileReader.readAsArrayBuffer(file);
    };
    AppItemForm.prototype.Save = function (callBack) {
        var _this = this;
        var title = this.props.curItem.status === "1" ? "审价中心" : "律师";
        sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.getById(this.props.curItem.Id)
            .get()
            .then(function (reqitem) {
            if (reqitem.status !== _this.props.curItem.status) {
                sp.web.lists
                    .getByTitle(WebConfig.AddrListName)
                    .items.filter("submited eq 1 and itemidId eq " +
                    _this.props.curItem.Id +
                    " and Title eq '" +
                    encodeURIComponent(title) +
                    "'")
                    .orderBy("Modified", false)
                    .top(1)
                    .select("*", "Author/Title")
                    .expand("Author")
                    .get()
                    .then(function (items) {
                    var msg = "检测到申请状态有变更，请刷新。";
                    if (items.length > 0) {
                        var appItem = items[0];
                        msg = "\u62B1\u6B49\uFF0C\u8BE5\u5408\u540C\u7533\u8BF7\u5DF2\u88AB" + title + appItem.Author.Title + "\u5BA1\u6279" + (appItem.result ? "通过" : "驳回") + ",\u60A8\u4E0D\u80FD\u91CD\u590D\u5904\u7406\u3002";
                        alert(msg);
                    }
                    else {
                        // alert(msg);
                        _this.setState({ uploadErrmsg: msg });
                    }
                });
            }
            else {
                callBack();
            }
        })
            .catch(function (err) {
            console.log(err);
            alert("保存失败，请刷新后再试。");
        });
    };
    AppItemForm.prototype._onDeletedItems = function (items) {
        this.setState({
            AttachmentFiles: items
        });
    };
    AppItemForm.prototype._submit = function () {
        var _this = this;
        // console.log(this.state.result);
        if (this.state.result === undefined) {
            return;
        }
        if (this.state.result && this.props.curItem.status === "2") {
            if (this.state.sendtype === undefined || this.state.sendtype === "") {
                return;
            }
        }
        this.Save(function () {
            var data = {
                itemidId: _this.props.curItem.Id,
                Title: _this.props.curItem.status === "1" ? "审价中心" : "律师",
                result: _this.state.result,
                sendtype: _this.state.sendtype,
                submited: true,
                description: _this.state.description ? _this.state.description : ""
            };
            //  console.log(data);
            var applog = "";
            if (!_this.props.curItem.applog ||
                _this.props.curItem.applog.indexOf(",") < 0) {
                applog = "," + _this.props.curUser.Id + ",";
            }
            else if (_this.props.curItem.applog.indexOf("," + _this.props.curUser.Id + ",") < 0) {
                applog = _this.props.curItem.applog + _this.props.curUser.Id + ",";
            }
            var isPrice = true;
            var pm = null;
            if (_this.state.id && _this.state.id > 0) {
                pm = sp.web.lists
                    .getByTitle(WebConfig.AddrListName)
                    .items.getById(_this.state.id)
                    .update(data);
            }
            else {
                pm = sp.web.lists.getByTitle(WebConfig.AddrListName).items.add(data);
            }
            pm.then(function (value) {
                var status = "";
                if (_this.props.curItem.status === "1") {
                    status = data.result ? "2" : "-1";
                    isPrice = true;
                }
                else {
                    status = data.result ? "3" : "-2";
                    isPrice = false;
                }
                var curItem = {};
                // objectAssign(curItem,this.props.curItem);
                // curItem.status=status;
                var ItemData = { status: status, applog: applog };
                if (isPrice) {
                    ItemData.pricingcenterId = _this.props.curUser.Id;
                }
                else {
                    ItemData.lawyerId = _this.props.curUser.Id;
                }
                sp.web.lists
                    .getByTitle(WebConfig.requestedItemsListName)
                    .items.getById(_this.props.curItem.Id)
                    .update(ItemData)
                    .then(function (v2) {
                    _this.props.onUpdatedItem(_this.props.curItem, status, _this.state.description && _this.state.description.trim() !== ""
                        ? _this.state.description
                        : "", _this.state.sendtype);
                });
            });
        });
    };
    AppItemForm.prototype.updateContent = function (newContent) {
        this.setState({
            description: newContent
        });
        // console.log(newContent);
    };
    AppItemForm.prototype.onChange = function (evt) {
        // console.log("onChange fired with event info: ", evt);
        // var newContent = evt.editor.getData();
        // this.setState({
        //  description: newContent
        // });
    };
    AppItemForm.prototype.onBlur = function (evt) {
        // console.log("onBlur event called with event info: ", evt);
    };
    AppItemForm.prototype.afterPaste = function (evt) {
        // console.log("afterPaste event called with event info: ", evt);
    };
    AppItemForm.prototype.getIcons = function () {
        return [
            "source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
            "paragraph fontfamily fontsize | superscript subscript | ",
            "forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
            "cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
            "horizontal date time  | image spechars | inserttable"
        ];
    };
    AppItemForm.prototype.uploadImageCallback = function (value) {
        console.log(value);
    };
    AppItemForm.prototype.modules = function () {
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
    AppItemForm.prototype.componentDidMount = function () {
        var _this = this;
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
    AppItemForm.prototype._douploadfile = function (fileInput) {
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
    ], AppItemForm.prototype, "UploadFile", null);
    __decorate([
        autobind
    ], AppItemForm.prototype, "doUploadfile", null);
    __decorate([
        autobind
    ], AppItemForm.prototype, "_onDeletedItems", null);
    __decorate([
        autobind
    ], AppItemForm.prototype, "_submit", null);
    __decorate([
        autobind
    ], AppItemForm.prototype, "updateContent", null);
    __decorate([
        autobind
    ], AppItemForm.prototype, "onChange", null);
    __decorate([
        autobind
    ], AppItemForm.prototype, "onBlur", null);
    __decorate([
        autobind
    ], AppItemForm.prototype, "afterPaste", null);
    __decorate([
        autobind
    ], AppItemForm.prototype, "uploadImageCallback", null);
    return AppItemForm;
}(React.Component));
export { AppItemForm };

//# sourceMappingURL=AppItemForm.js.map
