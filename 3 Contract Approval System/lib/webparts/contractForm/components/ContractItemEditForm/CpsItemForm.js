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
import styles from "../ContractForm.module.scss";
import { NumberTextField } from "../NumberTextField/NumberTextField";
import { CpsFileUpload } from "../FileUpload/CpsFileUpload";
import contractutil from "../contractutil";
import { Attachments } from "../Attachments/Attachments";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { statusDesc } from "../../../ComComponents/interfaces/IItem";
import CollapsePanel from "../../../ComComponents/collapsepanel/CollapsePanel";
import { Apprhistory } from "../../../approvalForm/components/appresults/Apprhistory";
import { WebConfig } from "../../../ComComponents/webconfig";
import * as moment from "moment";
import "moment/locale/zh-cn";
import { GetFileRandName } from "../../../ComComponents/comutil";
import { DatePicker, DayOfWeek } from "office-ui-fabric-react/lib/DatePicker";
import { BaseComponent } from "office-ui-fabric-react/lib/Utilities";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { Label } from "office-ui-fabric-react/lib/Label";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";
import { Dialog, DialogType, DialogFooter } from "office-ui-fabric-react/lib/Dialog";
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import { OfficeUiFabricPeoplePickerContainer } from "../../../../components/officeUiFabricPeoplePicker";
var DayPickerStrings = {
    months: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
    ],
    shortMonths: [
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
        "十",
        "十一",
        "十二"
    ],
    days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    shortDays: ["日", "一", "二", "三", "四", "五", "六"],
    goToToday: "今天",
    prevMonthAriaLabel: "上月",
    nextMonthAriaLabel: "下月",
    prevYearAriaLabel: "上一年",
    nextYearAriaLabel: "下一年"
};
import * as objectAssign from "object-assign";
// tslint:disable-next-line:one-line
var CpsItemForm = (function (_super) {
    __extends(CpsItemForm, _super);
    function CpsItemForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            ContractItem: _this.props.CurContractItem,
            isdisabled: false,
            currentSelectedLawyer: [],
            currentSelectedPricingcenter: [],
            hideDeleteDialog: true,
            request: _this.props.request,
            SubjectOptions: _this.props.SubjectOptions,
            Typeoptions: _this.props.Typeoptions,
            DialogType: 0,
            CurUser: {}
        };
        return _this;
        /*this.setState(
                {
                    ContractItem: this.props.CurContractItem
                }
            );*/
        // injectCss();
    }
    CpsItemForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.contactForm },
            React.createElement("div", { className: styles.container },
                React.createElement(CollapsePanel, { isHidden: this.getIsHiddenHistory(), headerText: "审批记录" },
                    React.createElement(Apprhistory, { contractitemid: this.state.ContractItem && this.state.ContractItem.Id })),
                React.createElement("div", { className: "ms-Grid" },
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(TextField, { label: "申请人", value: this.state.request &&
                                    this.state.request.Author &&
                                    this.state.request.Author.Title
                                    ? this.state.request.Author.Title
                                    : this.state.CurUser.Title, disabled: true })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(Dropdown, { label: "合同主体", selectedKey: this.state.request
                                    ? this.state.request.ContractSubjectId
                                    : undefined, options: this.state.SubjectOptions, onChanged: this.changemainbodyState, disabled: this._isSubjectDropDownDisabled() })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement("div", { className: "ms-Dropdown-container" },
                                React.createElement("label", { className: "ms-Label ms-Dropdown-label root-125" }, "\u72B6\u6001"),
                                React.createElement("div", { "aria-expanded": "false", "aria-live": "assertive", "aria-disabled": "true", className: "ms-Dropdown" },
                                    React.createElement(Label, { disabled: true }, this.state.request ? this.state.request.state : "新建"))))),
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg4" },
                            React.createElement(TextField, { label: "合同相对方", value: this.state.request ? this.state.request.RelativeParty : "", placeholder: "注：一个申请单只能填一个合同相对方", disabled: this._isSubjectDropDownDisabled(), required: true, onChanged: this._RelativePartyChanged, errorMessage: this.state.request &&
                                    this.state.request.RelativeParty &&
                                    this.state.request.RelativeParty.trim() !== ""
                                    ? ""
                                    : "请填写合同相对方" })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg4" },
                            React.createElement(TextField, { label: "厂部", placeholder: "厂部名称", value: this.state.request ? this.state.request.FactoryDept : "", disabled: this._isSubjectDropDownDisabled(), onChanged: this._FactoryDeptChanged })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(Dropdown, { label: "合同类型", selectedKey: this.state.ContractItem &&
                                    this.state.ContractItem.ContractTypeId
                                    ? this.state.ContractItem.ContractTypeId
                                    : undefined, options: this.state.Typeoptions, disabled: this.state.isdisabled, required: true, onChanged: this.changeTypeDropdownState, errorMessage: this.state.ContractItem &&
                                    this.state.ContractItem.ContractTypeId
                                    ? ""
                                    : "必填字段" }))),
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(TextField, { label: "合同编号", required: true, placeholder: "合同编号", onGetErrorMessage: this.getTxtMsg, value: this.state.ContractItem &&
                                    this.state.ContractItem.ContractNo
                                    ? this.state.ContractItem.ContractNo
                                    : "", onChanged: this.ContractNoChanged })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(TextField, { label: "合同名称", required: true, placeholder: "合同名称", onGetErrorMessage: this.getTxtMsg, value: this.state.ContractItem && this.state.ContractItem.Title
                                    ? this.state.ContractItem.Title
                                    : "", onChanged: this.TitleChanged })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(TextField, { label: "合同标的和数量", required: true, placeholder: "例如：电脑设备 1台", value: this.state.ContractItem &&
                                    this.state.ContractItem.ContractObject
                                    ? this.state.ContractItem.ContractObject
                                    : "", onChanged: this.ContractObjectChanged, onGetErrorMessage: this.getTxtMsg }))),
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(Dropdown, { label: "货币单位", required: true, selectedKey: this.state.ContractItem && this.state.ContractItem.Currency
                                    ? this.state.ContractItem.Currency
                                    : undefined, options: [
                                    { key: "USD", text: "USD" },
                                    { key: "HKD", text: "HKD" },
                                    { key: "RMB", text: "RMB" },
                                    { key: "EUR", text: "EUR" },
                                    { key: "N/A", text: "N/A" }
                                ], onChanged: this.changeDropdownState, disabled: this.state.isdisabled, errorMessage: this.state.ContractItem && this.state.ContractItem.Currency
                                    ? ""
                                    : "必填字段" })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(NumberTextField, { label: "合同金额", required: this.state.ContractItem &&
                                    this.state.ContractItem.Currency &&
                                    this.state.ContractItem.Currency === "N/A"
                                    ? false
                                    : true, placeholder: "例如：1000.00", initialValue: this.state.ContractItem && this.state.ContractItem.Money
                                    ? this.state.ContractItem.Money + ""
                                    : "", disabled: this.getMoneyDisabled(), onChanged: this.MoneyChanged })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(TextField, { label: "付款方式", required: true, placeholder: "请按照合同中付款条款简要填写", value: this.state.ContractItem && this.state.ContractItem.PayWay
                                    ? this.state.ContractItem.PayWay
                                    : "", onChanged: this.ContractPayWayChanged, onGetErrorMessage: this.getTxtMsg }))),
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(Toggle, { label: "是否审价中心审批", onText: "是", offText: "否", disabled: this.getToggleDisabled(), onFocus: function () { return console.log("onFocus called"); }, onBlur: function () { return console.log("onBlur called"); }, checked: this.state.ContractItem &&
                                    this.state.ContractItem.NeedApproval, onChanged: this._NeedApprovalChanged })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(TextField, { label: "备注", value: this.state.ContractItem && this.state.ContractItem.remarks
                                    ? this.state.ContractItem.remarks
                                    : "", onChanged: this.ContractremarksChanged }))),
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg6" },
                            React.createElement(Label, null, this.state.ContractItem &&
                                this.state.ContractItem.status === "3"
                                ? "合同附件"
                                : "附件（采购报告等）"),
                            React.createElement(CpsFileUpload, { docid: this.state.ContractItem && this.state.ContractItem.Id
                                    ? this.state.ContractItem.Id
                                    : 0, Enable: this._isEnableUpload(), baseUrl: "/", dataType: "", AutoUpload: true, doUpload: this._doUpload, errMsg: this.state.uploadErrmsg })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg6" },
                            React.createElement(Attachments, { docid: this.state.ContractItem && this.state.ContractItem.Id
                                    ? this.state.ContractItem.Id
                                    : 0, deleteenable: !this._isSubmitButtonHidden(), defaultatts: this.state.ContractItem &&
                                    this.state.ContractItem.AttachmentFiles
                                    ? this.state.ContractItem.AttachmentFiles
                                    : [], setAtts: this._onDeletedItems }))),
                    this.state.ContractItem &&
                        this.state.ContractItem.status === "3" ? (React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("hr", null),
                        React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg4" },
                            React.createElement(DatePicker, { firstDayOfWeek: DayOfWeek.Sunday, strings: DayPickerStrings, placeholder: "请选择日期", label: "合同签订日期", isRequired: true, formatDate: this._formatDate, 
                                // tslint:disable:jsx-no-lambda
                                onAfterMenuDismiss: function () {
                                    return console.log("onAfterMenuDismiss called");
                                }, onSelectDate: this._setSingingDate, value: this.state.ContractItem &&
                                    this.state.ContractItem.signingDate
                                    ? moment(this.state.ContractItem.signingDate, moment.ISO_8601).toDate()
                                    : undefined })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg6" },
                            React.createElement(OfficeUiFabricPeoplePickerContainer, { label: "合同签署代表", principalTypeUser: true, principalTypeSharePointGroup: false, principalTypeSecurityGroup: false, principalTypeDistributionList: false, itemLimit: 1, maximumEntitySuggestions: 5, onChange: this._ReqresChanged, selections: this.state.ContractItem &&
                                    this.state.ContractItem.representative
                                    ? this.state.ContractItem.representative
                                    : undefined })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg2", style: {
                                minHeight: "60.67px",
                                paddingTop: "28.67px"
                            } },
                            React.createElement("button", { onClick: this._setContractinfo }, "\u4FDD\u5B58\u4FEE\u6539")),
                        React.createElement("div", { style: { clear: "both" } }),
                        React.createElement("hr", { style: { margin: "5px 0" } }))) : (""),
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                            React.createElement("div", { className: "footerbtns" },
                                this._getButtons(),
                                React.createElement("div", { className: "errmMessage" }, this.state.errMsg)))),
                    React.createElement(Dialog, { hidden: this.state.hideDeleteDialog, onDismiss: this._closeDeleteDialog, dialogContentProps: {
                            type: DialogType.normal,
                            title: this.state.DialogType === 0 ? "删除确认" : "取消确认",
                            subText: this.state.DialogType === 0
                                ? "你确认要删除此申请吗?"
                                : "你确认要取消此申请吗?"
                        }, modalProps: {
                            isBlocking: false
                        } },
                        React.createElement(DialogFooter, null,
                            React.createElement(PrimaryButton, { onClick: function () {
                                    _this._deleteRequest(_this.state.ContractItem);
                                }, text: this.state.DialogType === 0 ? "删除申请" : "取消申请" }),
                            React.createElement(DefaultButton, { onClick: this._closeDeleteDialog, text: "取消" })))))));
    };
    CpsItemForm.prototype.changeDropdownState = function (item) {
        var newRequest = {};
        objectAssign(newRequest, this.state.ContractItem);
        newRequest.Currency = item.text;
        if (item.text === "N/A") {
            newRequest.Money = null;
        }
        this.setState({
            ContractItem: newRequest
        });
    };
    CpsItemForm.prototype._onDeletedItems = function (items) {
        var newRequest = {};
        objectAssign(newRequest, this.state.ContractItem);
        newRequest.AttachmentFiles = items;
        this.setState({
            ContractItem: newRequest
        });
    };
    CpsItemForm.prototype._formatDate = function (datevale) {
        return datevale.toLocaleDateString();
    };
    CpsItemForm.prototype.changemainbodyState = function (item) {
        var newRequest = {};
        objectAssign(newRequest, this.state.request);
        newRequest.ContractSubject = item.text;
        newRequest.ContractSubjectId = item.key;
        var curoption = this.state.SubjectOptions.filter(function (op) {
            return op.key === item.key;
        })[0];
        newRequest.subabbr = curoption.subabbr;
        // console.log(this.state.SubjectOptions, newRequest);
        this.setState({
            request: newRequest
        }, function () {
            // console.log(this.state.request.subabbr);
        });
    };
    CpsItemForm.prototype._ReqresChanged = function (items) {
        var newRequest = {};
        // console.log(items);
        objectAssign(newRequest, this.state.ContractItem);
        newRequest.representativeId = items.length > 0 ? items[0].id : null;
        newRequest.representative =
            items.length > 0
                ? [
                    {
                        id: items[0].id,
                        email: items[0].email
                    }
                ]
                : null;
        this.setState({
            ContractItem: newRequest
        });
    };
    CpsItemForm.prototype._setContractinfo = function () {
        var newRequest = {};
        if (!this.state.ContractItem.representative ||
            this.state.ContractItem.representative.length === 0) {
            alert("请填写签署代表!");
            return;
        }
        if (!this.state.ContractItem.signingDate) {
            alert("请填写签订日期!");
            return;
        }
        objectAssign(newRequest, this.state.ContractItem);
        sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.getById(this.state.ContractItem.Id)
            .update({
            signingDate: this.state.ContractItem.signingDate,
            representativeId: this.state.ContractItem.representative[0].id
        })
            .then(function (value) {
            alert("保存成功。");
            document.location.href = WebConfig.CreatedByMeListPage;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    CpsItemForm.prototype.changeTypeDropdownState = function (item) {
        var newRequest = {};
        objectAssign(newRequest, this.state.ContractItem);
        newRequest.ContractType = item.text;
        newRequest.ContractTypeId = item.key;
        this.state.Typeoptions.some(function (ops) {
            if (ops.key === item.key) {
                newRequest.lawyerId = ops.lawyerId;
                newRequest.Lawyer = ops.lawyer;
                newRequest.pricingcenterId = ops.pricingcenterId;
                newRequest.Pricingcenter = ops.pricingcenter;
                newRequest.NeedApproval =
                    ops.toprice && (ops.pricingcenterId && ops.pricingcenterId > 0);
                newRequest.NeedApproval_cn = newRequest.NeedApproval ? "是" : "否";
                return true;
            }
            return false;
        });
        this.setState({
            ContractItem: newRequest
        });
    };
    CpsItemForm.prototype.getTxtMsg = function (value) {
        if (value === "") {
            return "必填字段";
        }
        return "";
    };
    CpsItemForm.prototype._FactoryDeptChanged = function (value) {
        var data = {};
        objectAssign(data, this.state.request);
        data.FactoryDept = value;
        this.setState({ request: data });
    };
    CpsItemForm.prototype._setSingingDate = function (value) {
        var newRequest = {};
        objectAssign(newRequest, this.state.ContractItem);
        newRequest.signingDate = value;
        this.setState({
            ContractItem: newRequest
        });
    };
    CpsItemForm.prototype._RelativePartyChanged = function (value) {
        var data = {};
        objectAssign(data, this.state.request);
        data.RelativeParty = value;
        this.setState({ request: data });
    };
    CpsItemForm.prototype._isSubjectDropDownDisabled = function () {
        if (!this.state.request) {
            return true;
        }
        return false;
    };
    CpsItemForm.prototype.getIsHiddenHistory = function () {
        // console.log(this && this.state.ContractItem && this.state.ContractItem.status);
        return (!this ||
            !this.state ||
            !this.state.ContractItem ||
            this.state.ContractItem.status === "0");
    };
    CpsItemForm.prototype.ContractNoChanged = function (newValue) {
        var data = {};
        objectAssign(data, this.state.ContractItem);
        data.ContractNo = newValue;
        this.setState({ ContractItem: data });
    };
    CpsItemForm.prototype.TitleChanged = function (newValue) {
        var data = {};
        objectAssign(data, this.state.ContractItem);
        data.Title = newValue.trim();
        this.setState({ ContractItem: data });
    };
    CpsItemForm.prototype.ContractPayWayChanged = function (newValue) {
        var data = {};
        objectAssign(data, this.state.ContractItem);
        data.PayWay = newValue.trim();
        this.setState({ ContractItem: data });
    };
    CpsItemForm.prototype._NeedApprovalChanged = function (value) {
        var data = {};
        objectAssign(data, this.state.ContractItem);
        if (this.state.ContractItem.pricingcenterId &&
            this.state.ContractItem.pricingcenterId > 0) {
            data.NeedApproval = value;
            data.NeedApproval_cn = value ? "是" : "否";
            this.setState({ ContractItem: data });
        }
        else {
            alert("没配置审价人员，不能送审价中心审核。");
        }
    };
    CpsItemForm.prototype.MoneyChanged = function (newValue) {
        var data = {};
        objectAssign(data, this.state.ContractItem);
        data.Money = newValue;
        this.setState({ ContractItem: data });
    };
    CpsItemForm.prototype.ContractObjectChanged = function (newValue) {
        var data = {};
        objectAssign(data, this.state.ContractItem);
        data.ContractObject = newValue;
        this.setState({ ContractItem: data });
    };
    CpsItemForm.prototype.ContractremarksChanged = function (newValue) {
        var data = {};
        objectAssign(data, this.state.ContractItem);
        data.remarks = newValue;
        this.setState({ ContractItem: data });
    };
    CpsItemForm.prototype.getMoneyDisabled = function () {
        if (this.state.ContractItem != null && this.state.ContractItem.status < 3) {
            return this.state.ContractItem.Currency === "N/A";
        }
        return true;
    };
    CpsItemForm.prototype.getToggleDisabled = function () {
        return false;
        /*
            if (this.state.ContractItem != null && this.state.ContractItem.status <= 0) {
                // return this.state.ContractItem && this.state.ContractItem.ContractType === "销售合同";
                let NotApproval: boolean = true;
                const contid: number = this.state.ContractItem.ContractTypeId;
                this.state.Typeoptions.some((ops) => {
                    if (ops.key as number === contid) {
                        NotApproval = ops.toprice === true ? true : false;
                        return true;
                    }
                    return false;
                });
                return NotApproval;
            }
            return true;*/
    };
    CpsItemForm.prototype._doUpload = function (files, mill) {
        var _this = this;
        // in case of multiple files,iterate or else upload the first file.
        this.setState({ uploadErrmsg: "正在上传中...." });
        var file = files[0];
        if (file !== undefined || file !== null) {
            if (this.state.ContractItem.Id > 0) {
                this._douploadfile(file, mill);
            }
            else {
                var result = this._checkItemVilide(false);
                result.success
                    ? this._addItem(result.data, function (value) {
                        _this._douploadfile(file, mill, true);
                        // this.props.onAdded(result.data,false);
                    })
                    : this.setState({ uploadErrmsg: result.error });
            }
        }
    };
    CpsItemForm.prototype._douploadfile = function (file, mill, isAdd) {
        var _this = this;
        if (isAdd === void 0) { isAdd = false; }
        if (file === null) {
            return;
        }
        var item = sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.getById(this.state.ContractItem.Id);
        var status = this.state.ContractItem.status;
        var fileReader = new FileReader();
        fileReader.onloadend = function (event) {
            var attdata = fileReader.result;
            var subjoin = status === "3" ? "_s" : "";
            var newfileName = GetFileRandName(file.name, subjoin);
            item.attachmentFiles
                .add(newfileName, attdata)
                .then(function (v) {
                // console.log(v);
                var data = {};
                objectAssign(data, _this.state.ContractItem);
                if (!data.AttachmentFiles) {
                    data.AttachmentFiles = [];
                }
                // console.log(data.AttachmentFiles);
                data.AttachmentFiles.push({
                    ServerRelativeUrl: v.data.ServerRelativeUrl,
                    FileName: v.data.FileName
                });
                //  console.log(data.AttachmentFiles);
                _this.setState({ ContractItem: data, uploadErrmsg: "上传成功" }, function () {
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
    CpsItemForm.prototype._getButtons = function () {
        var _this = this;
        var buttons = [];
        if (this._isSubmitButtonHidden() === false) {
            buttons.push(React.createElement(PrimaryButton, { "data-automation-id": "test", text: this.props.onAdded ? "保存草稿" : "提交", onClick: this._submit }));
            /*
            if (
              this.state.ContractItem.Id &&
              this.state.ContractItem.Id > 0 &&
              this.state.ContractItem.status === "0"
            ) {
              buttons.push(
                <DefaultButton
                  text="删除"
                  onClick={() => {
                    this._showDeleteDialog(0);
                  }}
                />
              );
            }*/
            if (this.state.ContractItem &&
                this.state.ContractItem.Id > 0 &&
                (this.state.ContractItem.status === "-1" ||
                    this.state.ContractItem.status === "-2")) {
                buttons.push(React.createElement(DefaultButton, { text: "取消申请", onClick: function () {
                        _this._showDeleteDialog(1);
                    } }));
            }
            if (this.props.onClose !== undefined) {
                buttons.push(React.createElement(DefaultButton, { text: "关闭", onClick: this._close }));
            }
        }
        else {
            if (this.state.ContractItem && this.state.ContractItem.Id > 0) {
                buttons.push(React.createElement(PrimaryButton, { "data-automation-id": "test", text: "关闭", onClick: function () {
                        document.location.href = WebConfig.CreatedByMeListPage;
                    } }));
            }
        }
        return buttons;
    };
    CpsItemForm.prototype._close = function () {
        /**如果当前文档有附件
         * 如果父窗口列表里没有该记录
         * 这说明新建后没提交直接关闭的，这时需要删除此草稿文档
         */
        if (this.state.ContractItem.AttachmentFiles &&
            this.state.ContractItem.AttachmentFiles.length > 0) {
            this.props.onClose(this.state.ContractItem.Id);
        }
        this.props.onClose();
    };
    CpsItemForm.prototype._isSubmitButtonHidden = function () {
        // console.log(this.state.ContractItem);
        if (!this.state.ContractItem ||
            (this.state.ContractItem.Id > 0 &&
                this.state.ContractItem.AuthorId !== this.state.CurUser.Id)) {
            return true;
        }
        return (this.state.ContractItem.status === "2" ||
            this.state.ContractItem.status === "3");
    };
    CpsItemForm.prototype._isEnableUpload = function () {
        // console.log(this.state.ContractItem);
        if (!this.state.ContractItem ||
            (this.state.ContractItem.Id > 0 &&
                this.state.ContractItem.AuthorId !== this.state.CurUser.Id)) {
            return false;
        }
        return (this.state.ContractItem.status !== "1" &&
            this.state.ContractItem.status !== "2");
    };
    CpsItemForm.prototype._submit = function () {
        var _this = this;
        var result = this._checkItemVilide(true);
        if (!result.success) {
            return;
        }
        var data = result.data;
        //  console.log(data);
        //  console.log(this.state.ContractItem);
        var idstr = this.props.id || "";
        var id = parseInt(idstr, 10);
        if (data.Id > 0) {
            if (this.props.CurContractItem === undefined) {
                // 这里有两种情况，1：新建时，2，页面带参数编辑时
                if (this.props.onAdded !== undefined) {
                    // 新建时,交给父页面处理
                    if (this.props.onAdded) {
                        //  console.log(this.props.onAdded);
                        this.props.onAdded(data);
                    }
                }
                else {
                    // 当前页处理
                    var issubmit = false;
                    if (data.status <= 0) {
                        data.status = data.NeedApproval ? "1" : "2";
                        issubmit = true;
                    }
                    // console.log(data);
                    sp.web.lists
                        .getByTitle(WebConfig.requestedItemsListName)
                        .items.getById(data.Id)
                        .update(data)
                        .then(function (value) {
                        // console.log(value);
                        if (_this.props.onUpdated) {
                            _this.props.onUpdated(_this.state.ContractItem);
                        }
                    })
                        .catch(function (err) {
                        if (err) {
                            _this.setState({
                                errMsg: err.data
                                    ? err.data.responseBody["odata.error"].message.value
                                    : err.message
                            });
                            console.log(err);
                            return;
                        }
                    });
                    if (issubmit) {
                        var emailbodys = {};
                        var Key = data.NeedApproval
                            ? data.pricingcenterId + ""
                            : data.lawyerId + "";
                        emailbodys[Key] = [
                            {
                                id: data.Id,
                                title: data.Title,
                                type: this.state.ContractItem.ContractType,
                                requestNo: data.requestNo,
                                person: data.NeedApproval
                                    ? this.state.ContractItem.Pricingcenter
                                    : this.state.ContractItem.Lawyer
                            }
                        ];
                        contractutil.sendEmail(emailbodys, this.state.request.Author);
                    }
                    location.href = WebConfig.CreatedByMeListPage;
                }
            }
            else {
                // 从父页面编辑的
                sp.web.lists
                    .getByTitle(WebConfig.requestedItemsListName)
                    .items.getById(data.Id)
                    .update(data)
                    .then(function (updatedItem) {
                    if (_this.props.onUpdated !== undefined) {
                        _this.props.onUpdated(_this.state.ContractItem);
                    }
                });
            }
        }
        else {
            this._addItem(data, function (value) {
                if (_this.props.onAdded !== undefined) {
                    // console.log(value);
                    _this.props.onAdded(value);
                }
            });
        }
    };
    CpsItemForm.prototype._addItem = function (data, callback) {
        var _this = this;
        // console.log(data);
        if (data === null) {
            return;
        }
        sp.web.lists
            .getByTitle(this.props.requestedItemsListName)
            .items.add(data)
            .then(function (v) {
            objectAssign(data, _this.state.ContractItem);
            data.Id = v.data.Id;
            data.AuthorId = v.data.AuthorId;
            var curdate = v.data.Created.split("T")[0];
            var curdtstr = curdate.replace(/-/g, "");
            sp.web.lists
                .getByTitle(_this.props.requestedItemsListName)
                .items.filter("Created ge datetime'" + curdate + "T00:00:00.000Z'")
                .orderBy("Id", true)
                .select("requestNo,Id")
                .top(1)
                .get()
                .then(function (preitems) {
                var No = 0;
                var fisrtNo = "";
                if (preitems.length > 0) {
                    var preitem = preitems[0].requestNo;
                    No = data.Id - preitems[0].Id; // parseInt(preitem.substr(preitem.length - 3), 10);
                    if (No > 0) {
                        fisrtNo = preitem.substr((_this.state.request.subabbr + curdtstr).length);
                    }
                }
                var requestNo = {
                    requestNo: _this._getrequestNo(No, curdtstr, fisrtNo)
                };
                sp.web.lists
                    .getByTitle(WebConfig.StaffDeptListName)
                    .items.filter("StaffId eq " + data.AuthorId)
                    .get()
                    .then(function (stfinfos) {
                    if (stfinfos.length > 0) {
                        requestNo.StaffDeptId = stfinfos[0].DeptId;
                    }
                    sp.web.lists
                        .getByTitle(_this.props.requestedItemsListName)
                        .items.getById(data.Id)
                        .update(requestNo)
                        .then(function () {
                        data.requestNo = requestNo.requestNo;
                        _this.setState({ ContractItem: data }, function () {
                            //    console.log(data);
                            callback(data);
                        });
                        console.log("\u6210\u529F\u66F4\u65B0requestNo\u4E3A\uFF1A" + requestNo.requestNo);
                    })
                        .catch(function (err) {
                        console.log("更新requestNo失败", err);
                    });
                });
            });
        })
            .catch(function (error) {
            if (error) {
                console.log(error);
                _this.setState({
                    errMsg: error.data
                        ? error.data.responseBody["odata.error"].message.value
                        : error.message
                });
            }
        });
    };
    CpsItemForm.prototype._getrequestNo = function (No, curdtstr, fisrtNo) {
        var firstNo = parseInt(fisrtNo, 10);
        if (isNaN(firstNo)) {
            firstNo = 0;
        }
        if (No === 0) {
            No = 1;
        }
        var Nostr = "" + (No + firstNo);
        var Nolength = Nostr.length;
        if (Nolength < 3) {
            Nostr = "" + "000".substr(0, 3 - Nolength) + Nostr;
        }
        // console.log(this.state.request.subabbr);
        return "" + this.state.request.subabbr + curdtstr + Nostr;
    };
    CpsItemForm.prototype._checkItemVilide = function (checkForm) {
        if (checkForm === void 0) { checkForm = true; }
        var result = { success: false, data: null, error: null };
        var data = {};
        objectAssign(data, this.state.ContractItem);
        // console.log(data);
        if (data.Id === 0 || data.Id === null) {
            delete data.Id;
        }
        data.FactoryDept = this.state.request.FactoryDept;
        data.mainbody = this.state.request.ContractSubject;
        data.RelativeParty = this.state.request.RelativeParty || "";
        data.ContractType = data.ContractType || "";
        data.ContractNo = data.ContractNo ? data.ContractNo.trim() : "";
        data.ContractObject = data.ContractObject ? data.ContractObject.trim() : "";
        data.Title = data.Title ? data.Title.trim() : "";
        data.remarks = data.remarks ? data.remarks.trim() : "";
        var keys = [
            "mainbody",
            "RelativeParty",
            "ContractType",
            "ContractObject",
            "ContractNo",
            "Title",
            "Currency",
            "PayWay",
            "signingDate"
        ];
        result.success = true;
        if (checkForm) {
            for (var key in keys) {
                if (data[keys[key]] === "") {
                    result.success = false;
                    break;
                }
            }
            if (data.Currency !== "N/A" && (!data.Money || isNaN(data.Money))) {
                result.success = false;
            }
        }
        if (result.success) {
            // if (checkForm) {
            delete data.ContractType;
            delete data.Lawyer;
            delete data.Pricingcenter;
            delete data.MoneyText;
            delete data.statusDesc;
            delete data.AttachmentFiles;
            delete data.representative;
            delete data.signingDate;
            delete data.NeedApproval_cn;
            //}
            result.data = data;
        }
        else {
            result.error = "请先完整填写所有必填项";
        }
        return result;
    };
    CpsItemForm.prototype._closeDeleteDialog = function () {
        this.setState({ hideDeleteDialog: true });
    };
    CpsItemForm.prototype._showDeleteDialog = function (dtype) {
        if (dtype === void 0) { dtype = 0; }
        this.setState({ hideDeleteDialog: false, DialogType: dtype });
    };
    CpsItemForm.prototype._deleteRequest = function (request) {
        var _this = this;
        //  console.log(request);
        if (this.state.DialogType === 0) {
            sp.web.lists
                .getByTitle(WebConfig.requestedItemsListName)
                .items.getById(request.Id)
                .delete()
                .then(function () {
                _this.setState({
                    hideDeleteDialog: true
                }, function () {
                    if (_this.props.onDeleted) {
                        _this.props.onDeleted(request);
                    }
                    else {
                        document.location.href = WebConfig.CreatedByMeListPage;
                    }
                });
            });
        }
        else {
            sp.web.lists
                .getByTitle(WebConfig.requestedItemsListName)
                .items.getById(request.Id)
                .update({ status: "-4" })
                .then(function () {
                _this.setState({
                    hideDeleteDialog: true
                }, function () {
                    document.location.href = WebConfig.CreatedByMeListPage;
                });
            });
        }
    };
    CpsItemForm.prototype.componentDidMount = function () {
        var _this = this;
        var idstr = this.props.id || "";
        var id = parseInt(idstr, 10);
        sp.web.currentUser.get().then(function (user) {
            // console.log(user);
            _this.setState({ CurUser: user }, function () {
                if (!isNaN(id) && id > 0) {
                    sp.web.lists
                        .getByTitle(WebConfig.subjectsListName)
                        .items.orderBy("Title")
                        .getAll()
                        .then(function (response) {
                        var options = [];
                        sp.web.lists
                            .getByTitle(WebConfig.requestedItemsListName)
                            .items.getById(id)
                            .expand("Author", "AttachmentFiles", "ContractType", "lawyer/Id", "pricingcenter/Id", "representative/Id")
                            .select("*", "Author/Title", "Author/EMail", "AttachmentFiles", "ContractType/Title", "lawyer/Title", "pricingcenter/Title", "representative/EMail")
                            .get()
                            .then(function (item) {
                            var subjid;
                            var subjstr;
                            if (!user.IsSiteAdmin && item.AuthorId !== user.Id) {
                                if (item.lawyerId !== user.Id &&
                                    item.pricingcenterId !== user.Id) {
                                    sp.web.lists
                                        .getByTitle(WebConfig.contractTypeListName)
                                        .items.getById(item.ContractTypeId)
                                        .get()
                                        .then(function (ContractTypeInfo) {
                                        if (ContractTypeInfo.pricecenterId !== user.Id &&
                                            ContractTypeInfo.lawyerId !== user.Id &&
                                            ContractTypeInfo.otherpricecentersId.indexOf(user.Id) < 0 &&
                                            ContractTypeInfo.otherlawyersId.indexOf(user.Id) < 0) {
                                            if (item.StaffDeptId && item.StaffDeptId > 0) {
                                                sp.web.lists
                                                    .getByTitle(WebConfig.StaffDeptListName)
                                                    .items.filter("StaffId eq " +
                                                    user.Id +
                                                    " and DeptId eq " +
                                                    item.StaffDeptId)
                                                    .getAll()
                                                    .then(function (sdfs) {
                                                    if (sdfs.length === 0) {
                                                        alert("您没权限查看");
                                                        document.location.href =
                                                            WebConfig.CreatedByMeListPage;
                                                        return;
                                                    }
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                            response.map(function (oitem, i) {
                                options.push({
                                    key: oitem.Id,
                                    text: oitem.Title,
                                    subabbr: oitem.abbreviation
                                });
                                if (item.mainbody === oitem.Title) {
                                    subjid = oitem.Id;
                                    subjstr = oitem.Title;
                                }
                            });
                            var reqt = {
                                Id: item.Id,
                                ContractSubject: subjstr,
                                ContractSubjectId: subjid,
                                RelativeParty: item.RelativeParty,
                                Author: {
                                    Id: item.AuthorId,
                                    Title: item.Author.Title,
                                    Email: item.Author.EMail
                                },
                                subabbr: "",
                                FactoryDept: item.FactoryDept,
                                state: statusDesc[item.status]
                            };
                            var curitem = {
                                Id: item.Id,
                                ContractNo: item.ContractNo,
                                Title: item.Title,
                                ContractType: item.ContractType.Title,
                                ContractTypeId: item.ContractTypeId,
                                ContractObject: item.ContractObject,
                                Money: item.Money,
                                MoneyText: item.Currency === "N/A"
                                    ? item.Currency
                                    : "" + item.Currency + item.Money,
                                Currency: item.Currency,
                                PayWay: item.PayWay,
                                NeedApproval: item.NeedApproval,
                                NeedApproval_cn: item.NeedApproval ? "是" : "否",
                                status: item.status,
                                remarks: item.remarks,
                                signingDate: item.signingDate,
                                AttachmentFiles: item.AttachmentFiles &&
                                    item.AttachmentFiles.map(function (fileinfo) {
                                        return {
                                            ServerRelativeUrl: fileinfo.ServerRelativeUrl,
                                            FileName: fileinfo.FileName
                                        };
                                    }),
                                statusDesc: statusDesc[item.status],
                                lawyerId: item.lawyerId,
                                pricingcenterId: item.pricingcenterId,
                                requestNo: item.requestNo,
                                AuthorId: item.AuthorId,
                                mainbody: item.mainbody,
                                RelativeParty: item.RelativeParty,
                                FactoryDept: item.FactoryDept,
                                Author: {
                                    Id: item.AuthorId,
                                    Title: item.Author.Title
                                },
                                representative: item.representativeId
                                    ? [
                                        {
                                            email: item.representative.EMail,
                                            id: item.representativeId
                                        }
                                    ]
                                    : [],
                                Lawyer: item.lawyer.Title,
                                Pricingcenter: item.pricingcenter.Title
                            };
                            // console.log(curitem);
                            _this.setState({
                                ContractItem: curitem,
                                request: reqt,
                                SubjectOptions: options
                            });
                            //var offset = new Date().getTimezoneOffset()* 60 * 1000;
                            // console.log(moment(item.signingDate, moment.ISO_8601).format("llll")) ;
                            var typeoptions = [];
                            sp.web.lists
                                .getByTitle(WebConfig.contractTypeListName)
                                .items.select("*", "pricecenter/Title", "laywer/Title")
                                .expand("pricecenter", "laywer")
                                .orderBy("Title")
                                .getAll()
                                .then(function (types) {
                                // console.log(types);
                                types.map(function (typeitem) {
                                    //  console.log(typeitem);
                                    typeoptions.push({
                                        key: typeitem.Id,
                                        text: typeitem.Title,
                                        pricingcenterId: typeitem.pricecenterId,
                                        lawyerId: typeitem.laywerId,
                                        pricingcenter: typeitem.pricecenter
                                            ? typeitem.pricecenter.Title
                                            : "",
                                        lawyer: typeitem.laywer ? typeitem.laywer.Title : "",
                                        toprice: typeitem.ToPriceCenter
                                    });
                                });
                                _this.setState({
                                    Typeoptions: typeoptions
                                });
                            })
                                .catch(function (e) {
                                console.log(e);
                                _this.setState({
                                    errMsg: e.data
                                        ? e.data.responseBody["odata.error"].message.value
                                        : e.message
                                });
                            });
                        });
                    });
                }
                else {
                    if (_this.state.ContractItem) {
                        var tempReq = {};
                        var setReq = false;
                        if (_this.state.ContractItem.FactoryDept) {
                            if (!_this.state.request.FactoryDept ||
                                _this.state.request.FactoryDept.trim() === "") {
                                objectAssign(tempReq, _this.state.request);
                                tempReq.FactoryDept = _this.state.ContractItem.FactoryDept;
                                //  console.log(tempReq.FactoryDept);
                                // this.setState({ request: tempReq });
                                setReq = true;
                            }
                        }
                        if (_this.state.ContractItem.RelativeParty) {
                            if (!_this.state.request.RelativeParty ||
                                _this.state.request.RelativeParty.trim() === "") {
                                if (!setReq) {
                                    objectAssign(tempReq, _this.state.request);
                                }
                                tempReq.RelativeParty = _this.state.ContractItem.RelativeParty;
                                setReq = true;
                                // this.setState({ request: tempReq });
                            }
                        }
                        if (setReq) {
                            _this.setState({ request: tempReq });
                        }
                    }
                }
            });
        });
    };
    __decorate([
        autobind
    ], CpsItemForm.prototype, "changeDropdownState", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_onDeletedItems", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "changemainbodyState", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_ReqresChanged", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_setContractinfo", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "changeTypeDropdownState", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "getTxtMsg", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_FactoryDeptChanged", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_setSingingDate", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_RelativePartyChanged", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_isSubjectDropDownDisabled", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "getIsHiddenHistory", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "ContractNoChanged", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "TitleChanged", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "ContractPayWayChanged", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_NeedApprovalChanged", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "MoneyChanged", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "ContractObjectChanged", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "ContractremarksChanged", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_doUpload", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_close", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_isSubmitButtonHidden", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_isEnableUpload", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_submit", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_getrequestNo", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_checkItemVilide", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_closeDeleteDialog", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_showDeleteDialog", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "_deleteRequest", null);
    __decorate([
        autobind
    ], CpsItemForm.prototype, "componentDidMount", null);
    return CpsItemForm;
}(BaseComponent));
export default CpsItemForm;

//# sourceMappingURL=CpsItemForm.js.map
