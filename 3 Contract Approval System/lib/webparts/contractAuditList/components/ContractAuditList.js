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
import styles from "./ContractAuditList.module.scss";
import UxpList from "../../ComComponents/UxpList/UxpList";
import { sp, Web } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { autobind } from "@uifabric/utilities";
import { WebConfig, CurrentUrl } from "../../ComComponents/webconfig";
import { statusDesc } from "../../ComComponents/interfaces/IItem";
import { AuditItems } from "./AuditItems";
import { EmailUtil } from "../../ComComponents/Email/EmailUtil";
import { String } from "typescript-string-operations";
import Modal from "office-ui-fabric-react/lib/Modal";
import { ODataDefaultParser } from "@pnp/odata";
import { ColumnActionsMode, SelectionMode } from "office-ui-fabric-react/lib/DetailsList";
import { Pivot, PivotItem } from "office-ui-fabric-react/lib/Pivot";
import { Link } from "office-ui-fabric-react/lib/Link";
import * as objectAssign from "object-assign";
var ContractAuditList = (function (_super) {
    __extends(ContractAuditList, _super);
    function ContractAuditList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            list1: {
                requestedItems: [],
                requestedItemsListFields: [
                    {
                        ariaLabel: "合同审批单号",
                        Name: "requestNo",
                        maxWidth: 75,
                        columnActionsMode: ColumnActionsMode.clickable
                    },
                    {
                        ariaLabel: "当前状态",
                        Name: "stateDesc",
                        maxWidth: 100
                    },
                    {
                        ariaLabel: "合同相对方",
                        Name: "RelativeParty",
                        minWidth: 250
                    },
                    {
                        ariaLabel: "厂部",
                        Name: "FactoryDept",
                        minWidth: 250
                    },
                    {
                        ariaLabel: "合同类型",
                        Name: "ContractType",
                        minWidth: 250
                    },
                    {
                        ariaLabel: "合同编号",
                        Name: "ContractNo",
                        minWidth: 250
                    },
                    {
                        ariaLabel: "合同名称",
                        Name: "Title",
                        minWidth: 250
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
                    }
                ],
                current: 1,
                total: 0
            },
            list2: {
                requestedItems: [],
                requestedItemsListFields: [
                    {
                        ariaLabel: "合同审批单号",
                        Name: "requestNo",
                        columnActionsMode: ColumnActionsMode.clickable,
                        maxWidth: 75
                    },
                    {
                        ariaLabel: "当前状态",
                        Name: "stateDesc",
                        maxWidth: 100
                    },
                    {
                        ariaLabel: "合同相对方",
                        Name: "RelativeParty",
                        minWidth: 250
                    },
                    {
                        ariaLabel: "厂部",
                        Name: "FactoryDept",
                        minWidth: 250
                    },
                    {
                        ariaLabel: "合同类型",
                        Name: "ContractType",
                        minWidth: 250
                    },
                    {
                        ariaLabel: "合同编号",
                        Name: "ContractNo",
                        minWidth: 250
                    },
                    {
                        ariaLabel: "合同名称",
                        Name: "Title",
                        minWidth: 250
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
                    }
                ],
                current: 1,
                total: 0
            },
            list3: {
                requestedItems: [],
                requestedItemsListFields: [
                    {
                        ariaLabel: "合同审批单号",
                        Name: "requestNo",
                        columnActionsMode: ColumnActionsMode.clickable,
                        maxWidth: 75
                    },
                    {
                        ariaLabel: "当前状态",
                        Name: "stateDesc",
                        maxWidth: 100
                    },
                    {
                        ariaLabel: "合同相对方",
                        Name: "RelativeParty",
                        minWidth: 250
                    },
                    {
                        ariaLabel: "厂部",
                        Name: "FactoryDept",
                        minWidth: 250
                    },
                    {
                        ariaLabel: "合同类型",
                        Name: "ContractType",
                        minWidth: 250
                    },
                    {
                        ariaLabel: "合同编号",
                        Name: "ContractNo",
                        minWidth: 250
                    },
                    {
                        ariaLabel: "合同名称",
                        Name: "Title",
                        minWidth: 250
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
                    }
                ],
                current: 1,
                total: 0
            },
            user: {},
            lawyerId: 0,
            PricingcenterId: 0,
            QueryConditions: "",
            showModal: false,
            isWaitforLaywer: false,
            contractItems: []
        };
        return _this;
        // injectCss();
    }
    ContractAuditList.prototype.render = function () {
        return (React.createElement("div", { className: styles.contractAuditList },
            React.createElement("div", { className: styles.container },
                React.createElement(Pivot, { onLinkClick: this._listchanged },
                    React.createElement(PivotItem, { linkText: "待我审批的合同", itemCount: this.state.list2.total, itemKey: "2", itemIcon: "Emoji2" },
                        React.createElement(UxpList, { data: this.state.list2.requestedItems, schemaFields: this.state.list2.requestedItemsListFields, selectionMode: SelectionMode.multiple, onRenderItemColumn: this._onRenderItemColumn, onItemInvoked: this._ItemInvoked2, onMultEditClicked: this._openRequestForm, editButtonTitle: "批量审批", newButtonTitle: "审批", label: "", onSelectedChanged: this._onSelectedChanged, onNewButtonClicked: this._toaudit, ishiddenNewButton: true, hiddenFields: [
                                "lawyerId",
                                "AuthorId",
                                "status",
                                "Id",
                                "applog",
                                "AuthorTitle"
                            ] })),
                    React.createElement(PivotItem, { linkText: "其他待审批的合同", itemCount: this.state.list1.total, itemKey: "1", itemIcon: "Emoji2" },
                        " ",
                        React.createElement(UxpList, { data: this.state.list1.requestedItems, schemaFields: this.state.list1.requestedItemsListFields, selectionMode: SelectionMode.none, onRenderItemColumn: this._onRenderItemColumn, onItemInvoked: this._ItemInvoked1, hiddenFields: [
                                "lawyerId",
                                "AuthorId",
                                "status",
                                "Id",
                                "AuthorTitle"
                            ], label: "" })),
                    React.createElement(PivotItem, { linkText: "我审批过的合同", itemCount: this.state.list3.total, itemKey: "3", itemIcon: "Emoji2" },
                        React.createElement(UxpList, { data: this.state.list3.requestedItems, schemaFields: this.state.list3.requestedItemsListFields, selectionMode: SelectionMode.none, onRenderItemColumn: this._onRenderItemColumn3, onItemInvoked: this._ItemInvoked3, hiddenFields: [
                                "lawyerId",
                                "AuthorId",
                                "status",
                                "Id",
                                "AuthorTitle"
                            ], label: "" }))),
                React.createElement(Modal, { isOpen: this.state.showModal, onDismiss: this._closeModal, isBlocking: true, containerClassName: "ms-modalExample-container" },
                    React.createElement("div", { className: "ms-modalExample-header" },
                        React.createElement("span", null, "\u6279\u91CF\u5BA1\u6279"),
                        React.createElement("i", { className: "ms-Icon ms-Icon--BoxMultiplySolid x-hidden-focus close", onClick: this._closeModal })),
                    React.createElement(AuditItems, __assign({}, this.props, { curUser: this.state.curUser, onUpdatedItem: this._setItemResult, curItems: this.state.curItems, isLaywer: this.state.isWaitforLaywer }))))));
    };
    ContractAuditList.prototype.componentDidMount = function () {
        var _this = this;
        sp.web.currentUser.get().then(function (result) {
            // console.log(result);
            _this.setState({ curUser: result });
            sp.web.lists
                .getByTitle(WebConfig.contractTypeListName)
                .items.orderBy("Id")
                .get()
                .then(function (configs) {
                var conditions = "";
                var condition_laywer = ""; // "status eq '2' ";
                var condition_price = ""; // "status eq '1' ";
                var isLaywer = -1;
                configs.map(function (confg) {
                    if (isLaywer < 1 &&
                        ((confg.pricecenterId && confg.pricecenterId === result.Id) ||
                            (confg.otherpricecentersId &&
                                confg.otherpricecentersId.indexOf(result.Id) >= 0))) {
                        isLaywer = 0; // 只记录审价条件
                        if (confg.otherpricecentersId &&
                            confg.otherpricecentersId.indexOf(result.Id) >= 0) {
                            condition_price =
                                condition_price === ""
                                    ? "(ContractTypeId eq " + confg.Id
                                    : condition_price + " or ContractTypeId eq " + confg.Id;
                        }
                    }
                    if ((isLaywer === -1 || isLaywer === 1) &&
                        ((confg.lawyerId && confg.lawyerId === result.Id) ||
                            (confg.otherlawyersId &&
                                confg.otherlawyersId.indexOf(result.Id) >= 0))) {
                        isLaywer = 1;
                        if (confg.otherlawyersId &&
                            confg.otherlawyersId.indexOf(result.Id) >= 0) {
                            condition_laywer =
                                condition_laywer === ""
                                    ? "(ContractTypeId eq " + confg.Id
                                    : condition_laywer + " or ContractTypeId eq " + confg.Id;
                        }
                    }
                });
                conditions =
                    isLaywer === -1
                        ? " status eq '9' "
                        : isLaywer === 0
                            ? condition_price === ""
                                ? "status eq '1'"
                                : "status eq '1' and " + condition_price
                            : condition_laywer === ""
                                ? "status eq '2'"
                                : "status eq '2' and " + condition_laywer;
                var odd = new ODataDefaultParser();
                var tweb = new Web("/", "_vti_bin/listdata.svc/" + WebConfig.requestedItemsListName + "/$count?&$filter=" + conditions.replace(/status/g, "Status"));
                var header = {
                    Accept: "application/json;odata=verbose,text/plain"
                };
                tweb.get(odd, { headers: header }).then(function (result2) {
                    // console.log(result);
                    var ret = parseInt(result2, 10);
                    var pgdata = {};
                    objectAssign(pgdata, _this.state.list1);
                    pgdata.total = isNaN(ret) ? 0 : ret;
                    _this.setState({ user: result, list1: pgdata, QueryConditions: conditions }, function () {
                        _this._loaddatasbyme();
                    });
                })
                    .catch(function (error) {
                    console.log(error);
                });
                tweb = new Web("/", "_vti_bin/listdata.svc/" + WebConfig.requestedItemsListName + "/$count?&$filter=substringof('," + _this.state.curUser.Id + ",',Applog)");
                // tslint:disable-next-line:no-shadowed-variable
                tweb.get(odd, { headers: header }).then(function (result) {
                    // console.log(result);
                    var pgdata = {};
                    objectAssign(pgdata, _this.state.list3);
                    if (result != null) {
                        var ret = parseInt(result, 10);
                        pgdata.total = ret;
                    }
                    else {
                        pgdata.total = 0;
                    }
                    _this.setState({ list3: pgdata });
                })
                    .catch(function (error) {
                    console.log(error);
                });
            });
        });
    };
    ContractAuditList.prototype._loaddatasbyme = function () {
        if (this.state.user.Id > 0) {
            var _items = sp.web.lists
                .getByTitle(WebConfig.requestedItemsListName)
                .items // tslint:disable-next-line:max-line-length
                .filter("(status eq '1' and pricingcenterId eq " + this.state.user.Id + ") or ( status eq '2' and lawyerId eq " + this.state.user.Id + " )")
                .orderBy("Id", true);
            this._loadcontractItems(_items, 2);
        }
    };
    // tbindex=2,待我审批的合同 list2
    // tbindex=1,其他待审批的合同,list1
    // tbindex=3,我审批过的合同,list3
    ContractAuditList.prototype._loadcontractItems = function (items, tbindex) {
        var _this = this;
        items
            .select("*", "AttachmentFiles", "ContractType/Title", "Author/Title")
            .expand("AttachmentFiles", "ContractType", "Author")
            .get()
            .then(function (citems) {
            var datas = [];
            citems.map(function (item) {
                datas.push({
                    requestNo: item.requestNo,
                    stateDesc: statusDesc[item.status],
                    Title: item.Title,
                    RelativeParty: item.RelativeParty,
                    ContractType: item.ContractType.Title,
                    ContractNo: item.ContractNo,
                    FactoryDept: item.FactoryDept ? item.FactoryDept : "",
                    ContractObject: item.ContractObject,
                    MoneyText: item.Currency === "N/A" ? "N/A" : item.Currency + item.Money,
                    PayWay: item.PayWay,
                    remarks: item.remarks,
                    AttachmentFiles: item.AttachmentFiles.map(function (fileinfo) {
                        return {
                            ServerRelativeUrl: fileinfo.ServerRelativeUrl,
                            FileName: fileinfo.FileName
                        };
                    }),
                    applog: item.applog,
                    Id: item.Id,
                    status: item.status,
                    AuthorId: item.AuthorId,
                    lawyerId: item.lawyerId,
                    AuthorTitle: item.Author.Title
                });
            });
            var pgdata = {};
            objectAssign(pgdata, tbindex === 2
                ? _this.state.list2
                : tbindex === 1
                    ? _this.state.list1
                    : _this.state.list3);
            pgdata.requestedItems = datas;
            pgdata.current = 1;
            pgdata.total = datas.length;
            switch (tbindex) {
                case 2:
                    _this.setState({ list2: pgdata, total2: datas.length });
                    break;
                case 1:
                    _this.setState({ list1: pgdata });
                    break;
                case 3:
                    _this.setState({ list3: pgdata });
                    break;
            }
        });
    };
    ContractAuditList.prototype._loaddatas = function () {
        if (this.state.user.Id > 0 && this.state.QueryConditions !== "") {
            var _items = sp.web.lists
                .getByTitle(WebConfig.requestedItemsListName)
                .items.filter("" + this.state.QueryConditions)
                .orderBy("Id", true);
            this._loadcontractItems(_items, 1);
        }
    };
    ContractAuditList.prototype._onRenderItemColumn = function (item, index, column) {
        // console.log(item,index,column);
        if (column.columnActionsMode === ColumnActionsMode.clickable) {
            return (React.createElement(Link, { "data-selection-invoke": true, href: WebConfig.ApprovalPage + "?request=" + item.Id }, item[column.fieldName]));
        }
        return item[column.fieldName];
    };
    ContractAuditList.prototype._onRenderItemColumn3 = function (item, index, column) {
        // console.log(item,index,column);
        if (column.columnActionsMode === ColumnActionsMode.clickable) {
            return (React.createElement(Link, { "data-selection-invoke": true, href: WebConfig.NewContractPage + "?request=" + item.Id }, item[column.fieldName]));
        }
        return item[column.fieldName];
    };
    ContractAuditList.prototype._ItemInvoked1 = function (item, index, ev) {
        var Id = this.state.list1.requestedItems[index].Id;
        window.location.href = WebConfig.ApprovalPage + "?request=" + Id;
    };
    ContractAuditList.prototype._ItemInvoked2 = function (item, index, ev) {
        var Id = this.state.list2.requestedItems[index].Id;
        window.location.href = WebConfig.ApprovalPage + "?request=" + Id;
    };
    ContractAuditList.prototype._ItemInvoked3 = function (item, index, ev) {
        var Id = this.state.list3.requestedItems[index].Id;
        window.location.href = WebConfig.NewContractPage + "?request=" + Id;
    };
    ContractAuditList.prototype._onSelectedChanged = function (items) {
        // 为true时隐藏按钮
        // console.log(items);
        if (items.length === 0) {
            this.setState({ isWaitforLaywer: false });
            return {
                ishiddenEditButton: true,
                ishiddenNewButton: true,
                isWaitforLaywer: false
            };
        }
        if (items.length === 1) {
            // this.setState({isWaitforLaywer:items[0].status==="2"});
            return {
                ishiddenEditButton: true,
                ishiddenNewButton: false,
                isWaitforLaywer: items[0].status === "2"
            };
        }
        // console.log(items);
        var status = items[0].status;
        // this.setState({isWaitforLaywer:status==="2"}); 不能使用setState
        var samestatus = items.every(function (item) {
            return item.status === status;
        });
        return {
            ishiddenEditButton: !samestatus,
            ishiddenNewButton: true,
            isWaitforLaywer: items[0].status === "2"
        };
    };
    ContractAuditList.prototype._toaudit = function (selectItem) {
        var Id = selectItem.Id;
        document.location.href = WebConfig.ApprovalPage + "?request=" + Id;
    };
    ContractAuditList.prototype._listchanged = function (item, ev) {
        if (item.props.itemKey === "2") {
            this._loaddatasbyme();
        }
        else if (item.props.itemKey === "1") {
            this._loaddatas();
        }
        else if (item.props.itemKey === "3") {
            this._approvedbyme();
        }
    };
    ContractAuditList.prototype._approvedbyme = function () {
        var _items = sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.filter("substringof('," + this.state.curUser.Id + ",',applog)")
            .orderBy("Modified", false);
        this._loadcontractItems(_items, 3);
    };
    ContractAuditList.prototype._openRequestForm = function (items) {
        this.setState({
            isWaitforLaywer: items[0].status === "2",
            showModal: true,
            curItems: items
        });
        // console.log(this.state.requestedItems[index]);
        // console.log(this.state.curItem);
        // this._showModal();
        // window.open(`${this.props.requestFormUrl}/?request=${item.ID}&mode=${mode}`, '_self');
    };
    ContractAuditList.prototype._setItemResult = function (dvalue, status, comments, sendtype, itemscount) {
        // console.log(dvalue);
        var _this = this;
        if (dvalue.status === "1") {
            var resultTitle = status === "-1" ? "驳回" : "通过";
            EmailUtil.SendEmailbyId(dvalue.AuthorId, String.Format(WebConfig.EmailResultTemplate.body, dvalue.Title, dvalue.requestNo, "审价中心", resultTitle, comments === "" ? "" : "<p>\u5BA1\u6279\u610F\u89C1\uFF1A" + comments + "</p>", this._getmyctrlistlink()), String.Format(WebConfig.EmailResultTemplate.subject, dvalue.ContractType + ":" + dvalue.Title, dvalue.requestNo, "审价中心", resultTitle));
            if (status === "2") {
                EmailUtil.SendEmailbyId(dvalue.lawyerId, String.Format(WebConfig.EmailToLawyerTemplate.body, EmailUtil.getsystemlink(), dvalue.ContractType + ":" + dvalue.Title, dvalue.requestNo), String.Format(WebConfig.EmailToLawyerTemplate.subject, dvalue.AuthorTitle, dvalue.ContractType + ":" + dvalue.Title));
            }
        }
        else if (dvalue.status === "2") {
            var resultTitle = status === "-2" ? "驳回" : "通过";
            EmailUtil.SendEmailbyId(dvalue.AuthorId, String.Format(WebConfig.EmailResultTemplate.body, dvalue.ContractType + ":" + dvalue.Title, dvalue.requestNo, "律师", resultTitle + "\uFF01" + sendtype, comments === "" ? "" : "<p>\u5BA1\u6279\u610F\u89C1\uFF1A" + comments + "</p>", this._getmyctrlistlink()), String.Format(WebConfig.EmailResultTemplate.subject, dvalue.ContractType + ":" + dvalue.Title, dvalue.requestNo, "律师", resultTitle));
        }
        dvalue.status = status;
        dvalue.CurrentHandler = 0;
        dvalue.statusDesc = statusDesc[status];
        var ctitems = [];
        objectAssign(ctitems, this.state.contractItems);
        ctitems.push(dvalue.Id);
        this.setState({ contractItems: ctitems }, function () {
            if (ctitems.length === itemscount) {
                var pgdata = {};
                objectAssign(pgdata, _this.state.list2);
                pgdata.requestedItems = pgdata.requestedItems.filter(function (it) {
                    return ctitems.indexOf(it.Id) < 0;
                });
                pgdata.current = 1;
                pgdata.total = pgdata.total - ctitems.length;
                var pgdata2 = {};
                objectAssign(pgdata2, _this.state.list3);
                pgdata2.total += ctitems.length;
                _this.setState({
                    list2: pgdata,
                    list3: pgdata2,
                    curItems: [],
                    contractItems: [],
                    showModal: false
                });
            }
        });
    };
    ContractAuditList.prototype._closeModal = function () {
        this.setState({ showModal: false });
    };
    ContractAuditList.prototype._showModal = function () {
        // console.log("pre showModel...");
        this.setState({ showModal: true }, function () {
            // console.log("showModaled。。。 ");
        });
    };
    ContractAuditList.prototype._getmyctrlistlink = function () {
        var url = CurrentUrl;
        url =
            url.substr(0, url.lastIndexOf("/") + 1) + WebConfig.CreatedByMeListPage;
        return "<a href=" + url + ">\u7CFB\u7EDF</a>";
    };
    __decorate([
        autobind
    ], ContractAuditList.prototype, "_ItemInvoked1", null);
    __decorate([
        autobind
    ], ContractAuditList.prototype, "_ItemInvoked2", null);
    __decorate([
        autobind
    ], ContractAuditList.prototype, "_ItemInvoked3", null);
    __decorate([
        autobind
    ], ContractAuditList.prototype, "_onSelectedChanged", null);
    __decorate([
        autobind
    ], ContractAuditList.prototype, "_listchanged", null);
    __decorate([
        autobind
    ], ContractAuditList.prototype, "_openRequestForm", null);
    __decorate([
        autobind
    ], ContractAuditList.prototype, "_setItemResult", null);
    __decorate([
        autobind
    ], ContractAuditList.prototype, "_closeModal", null);
    return ContractAuditList;
}(React.Component));
export default ContractAuditList;

//# sourceMappingURL=ContractAuditList.js.map
