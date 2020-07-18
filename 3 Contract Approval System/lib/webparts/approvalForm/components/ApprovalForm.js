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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import styles from "./ApprovalForm.module.scss";
import { AppItemForm } from "./AppItemForm";
import { statusDesc } from "../../ComComponents/interfaces/IItem";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { String } from "typescript-string-operations";
import { WebConfig, CurrentUrl } from "../../ComComponents/webconfig";
import { EmailUtil } from "../../ComComponents/Email/EmailUtil";
import { Label } from "office-ui-fabric-react/lib/Label";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import * as objectAssign from "object-assign";
var ApprovalForm = (function (_super) {
    __extends(ApprovalForm, _super);
    function ApprovalForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            requestedItemsListFields: [
                {
                    ariaLabel: "Id",
                    Name: "Id",
                    maxWidth: 0
                },
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
            curItem: null
        };
        return _this;
        // injectCss();
    }
    ApprovalForm.prototype.render = function () {
        return (React.createElement("div", { className: styles.approvalForm },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: "ms-Grid" },
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12" },
                            React.createElement("div", { className: styles.mstbheader, style: { width: "100%", textAlign: "center" } },
                                React.createElement("h2", null, "\u5408\u540C\u5BA1\u6279\u8868")))),
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement("div", { className: "ms-Dropdown-container" },
                                React.createElement("label", { className: styles.mslable }, "\u7533\u8BF7\u4EBA"),
                                React.createElement("div", { "aria-expanded": "false", "aria-live": "assertive", "aria-disabled": "true", className: "ms-Dropdown root_44853ebf" },
                                    React.createElement(Label, null, this.state.curItem && this.state.curItem.Author
                                        ? this.state.curItem.Author.Title
                                        : "")))),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement("div", { className: "ms-Dropdown-container" },
                                React.createElement("label", { className: styles.mslable }, "\u5408\u540C\u4E3B\u4F53"),
                                React.createElement("div", { "aria-expanded": "false", "aria-live": "assertive", "aria-disabled": "true", className: "ms-Dropdown root_44853ebf" },
                                    React.createElement(Label, null, this.state.curItem && this.state.curItem.mainbody
                                        ? this.state.curItem.mainbody
                                        : "")))),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement("div", { className: "ms-Dropdown-container" },
                                React.createElement("label", { className: styles.mslable }, "\u72B6\u6001"),
                                React.createElement("div", { "aria-expanded": "false", "aria-live": "assertive", "aria-disabled": "true", className: "ms-Dropdown root_44853ebf" },
                                    React.createElement(Label, { disabled: true }, this.state.curItem
                                        ? this.state.curItem.statusDesc
                                        : "New Request"))))),
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg12" },
                            React.createElement("div", { className: "ms-Dropdown-container" },
                                React.createElement("label", { className: styles.mslable }, "\u5408\u540C\u76F8\u5BF9\u65B9"),
                                React.createElement("div", { "aria-expanded": "false", "aria-live": "assertive", "aria-disabled": "true", className: "ms-Dropdown root_44853ebf" },
                                    React.createElement(Label, null, this.state.curItem && this.state.curItem.RelativeParty
                                        ? this.state.curItem.RelativeParty
                                        : ""))))),
                    React.createElement(AppItemForm, __assign({}, this.props, { curItem: this.state.curItem, curUser: this.state.curUser, onUpdatedItem: this._setItemResult }))))));
    };
    ApprovalForm.prototype._setItemResult = function (item, status, comments, sendtype) {
        var data = {};
        objectAssign(data, this.state.curItem);
        var state = "In approval";
        var allRejected = true;
        var anyRejected = false;
        var allPassed = true;
        if (data.status === "1") {
            var resultTitle = status === "-1" ? "驳回" : "通过";
            EmailUtil.SendEmailbyId(data.AuthorId, String.Format(WebConfig.EmailResultTemplate.body, data.Title, data.requestNo, "审价中心", resultTitle, comments && comments !== "" ? "<p>\u5BA1\u6279\u610F\u89C1\uFF1A" + comments + "</p>" : "", this._getmyctrlistlink()), String.Format(WebConfig.EmailResultTemplate.subject, data.Title, data.requestNo, "审价中心", resultTitle));
            if (status === "2") {
                EmailUtil.SendEmailbyId(data.lawyerId, String.Format(WebConfig.EmailToLawyerTemplate.body, EmailUtil.getsystemlink(), data.ContractType + ":" + data.Title, data.requestNo), String.Format(WebConfig.EmailToLawyerTemplate.subject, data.Author.Title, data.ContractType + ":" + data.Title));
            }
        }
        else if (data.status === "2") {
            var resultTitle = status === "-2" ? "驳回" : "通过!" + sendtype;
            EmailUtil.SendEmailbyId(data.AuthorId, String.Format(WebConfig.EmailResultTemplate.body, data.Title, data.requestNo, "律师", resultTitle, comments && comments.trim() !== ""
                ? "<p>\u5BA1\u6279\u610F\u89C1\uFF1A" + comments + "</p>"
                : "", this._getmyctrlistlink()), String.Format(WebConfig.EmailResultTemplate.subject, data.Title, data.requestNo, "律师", resultTitle));
        }
        data.status = status;
        data.statusDesc = statusDesc[status];
        this.setState({ curItem: data });
        document.location.href = WebConfig.InapprovalListPage;
    };
    ApprovalForm.prototype._getmyctrlistlink = function () {
        var url = CurrentUrl;
        url =
            url.substr(0, url.lastIndexOf("/") + 1) + WebConfig.CreatedByMeListPage;
        return "<a href=" + url + ">\u7CFB\u7EDF</a>";
    };
    ApprovalForm.prototype.componentDidMount = function () {
        var _this = this;
        sp.web.currentUser
            .get()
            .then(function (result) {
            _this.setState({
                curUser: result
            });
            var requestId = parseInt(_this.props.id, 10);
            if (isNaN(requestId)) {
                //  window.location.href="../";
                return;
            }
            else {
                var filedNames = _this.state.requestedItemsListFields.map(function (d) {
                    return d.Name;
                });
                sp.web.lists
                    .getByTitle(WebConfig.requestedItemsListName)
                    .items.getById(requestId)
                    .select("*", "Author/Title", "ContractType/Title", "AttachmentFiles", "lawyer/Title", "pricingcenter/Title")
                    .expand("Author", "ContractType", "AttachmentFiles", "lawyer/Id", "pricingcenter/Id")
                    .get()
                    .then(function (item) {
                    //  console.log(item);
                    sp.web.lists
                        .getByTitle(WebConfig.contractTypeListName)
                        .items.getById(item.ContractTypeId)
                        .get()
                        .then(function (confg) {
                        var HasAuthority = false;
                        if (item.status === "1") {
                            if (item.pricingcenterId === result.Id ||
                                confg.pricecenterId === result.Id ||
                                confg.otherpricecentersId.indexOf(result.Id) >= 0) {
                                HasAuthority = true;
                            }
                        }
                        else if (item.status === "2") {
                            if (item.lawyerId === result.Id ||
                                confg.laywerId === result.Id ||
                                confg.otherlawyersId.indexOf(result.Id) >= 0) {
                                HasAuthority = true;
                            }
                        }
                        if (!HasAuthority) {
                            document.location.href = WebConfig.InapprovalListPage;
                            return;
                        }
                        var curLawyer = [];
                        if (item.lawyer) {
                            curLawyer.push({
                                title: item.lawyer.Title,
                                text: item.lawyer.Title,
                                key: item.lawyerId
                            });
                        }
                        var curPricingcenter = [];
                        if (item.pricingcenter) {
                            curPricingcenter.push({
                                title: item.pricingcenter.Title,
                                text: item.pricingcenter.Title,
                                key: item.pricingcenterId
                            });
                        }
                        var itemdata = {
                            Id: item.Id,
                            ContractNo: item.ContractNo,
                            Title: item.Title,
                            ContractType: item.ContractType.Title,
                            ContractTypeId: item.ContractTypeId,
                            ContractObject: item.ContractObject,
                            MoneyText: item.Currency === "N/A"
                                ? item.Currency
                                : "" + item.Currency + item.Money,
                            Money: item.Money,
                            Currency: item.Currency,
                            NeedApproval: item.NeedApproval,
                            PayWay: item.PayWay,
                            status: item.status,
                            statusDesc: statusDesc[item.status],
                            Lawyer: curLawyer,
                            Pricingcenter: curPricingcenter,
                            lawyerId: item.lawyerId,
                            pricingcenterId: item.pricingcenterId,
                            remarks: item.remarks,
                            requestNo: item.requestNo,
                            CurrentHandler: item.CurrentHandler,
                            AuthorId: item.AuthorId,
                            mainbody: item.mainbody,
                            Author: item.Author,
                            RelativeParty: item.mainbody,
                            FactoryDept: item.FactoryDept,
                            AttachmentFiles: item.AttachmentFiles.map(function (fileinfo) {
                                return {
                                    ServerRelativeUrl: fileinfo.ServerRelativeUrl,
                                    FileName: fileinfo.FileName
                                };
                            })
                        };
                        _this.setState({ curItem: itemdata }, function () {
                            //    console.log(this.state.curItem);
                        });
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    __decorate([
        autobind
    ], ApprovalForm.prototype, "_setItemResult", null);
    return ApprovalForm;
}(React.Component));
export default ApprovalForm;

//# sourceMappingURL=ApprovalForm.js.map
