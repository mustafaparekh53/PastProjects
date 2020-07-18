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
import * as React from "react";
import styles from "./AllContracts.module.scss";
import UxpList from "../../ComComponents/UxpList/UxpList";
import { WebConfig } from "../../ComComponents/webconfig";
import { sp, Web } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import Pagination from "office-ui-fabric-react-pagination";
import { statusDesc } from "../../ComComponents/interfaces/IItem";
import * as moment from "moment";
import "moment/locale/zh-cn";
import { ODataDefaultParser } from "@pnp/odata";
import * as XLSX from "xlsx";
import { GetFileRandName, FieldNames } from "../../ComComponents/comutil";
import { Button } from "office-ui-fabric-react/lib/Button";
import { DatePicker, DayOfWeek } from "office-ui-fabric-react/lib/DatePicker";
import { ColumnActionsMode, SelectionMode } from "office-ui-fabric-react/lib/DetailsList";
import { Link } from "office-ui-fabric-react/lib/Link";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import { OfficeUiFabricPeoplePickerContainer } from "../../../components/officeUiFabricPeoplePicker";
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
var requestedItemsListFields = [
    {
        ariaLabel: "合同审批单号",
        Name: "requestNo",
        columnActionsMode: ColumnActionsMode.clickable,
        maxWidth: 75
    },
    {
        ariaLabel: "当前状态",
        Name: "state",
        maxWidth: 100
    },
    {
        ariaLabel: "是否审价中心审批",
        Name: "NeedApproval",
        maxWidth: 100
    },
    {
        ariaLabel: "合同主体",
        Name: "mainbody",
        minWidth: 250
    },
    {
        ariaLabel: "合同相对方",
        Name: "RelativeParty",
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
        ariaLabel: "货币单位",
        Name: "Currency"
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
        ariaLabel: "申请人",
        Name: "Author"
    },
    {
        ariaLabel: "创建时间",
        Name: "Created"
    },
    {
        ariaLabel: "签订日期",
        Name: "signingDate"
    },
    {
        ariaLabel: "签署代表",
        Name: "representative"
    },
    {
        ariaLabel: "附件",
        Type: "linkArray",
        Name: "AttachmentFiles"
    }
];
var AllContracts = (function (_super) {
    __extends(AllContracts, _super);
    function AllContracts(props) {
        var _this = _super.call(this, props) || this;
        _this.colNames = [
            "合同审批单号",
            "合同主体",
            "合同相对方",
            "合同编号",
            "合同名称",
            "合同类别",
            "合同标的和数量",
            "合同金额",
            "货币单位",
            "付款方式",
            "当前状态",
            "是否审价中心审批",
            "备注",
            "厂部",
            "签订日期",
            "签署代表",
            "申请人",
            "创建时间",
            "审价人",
            "审批律师",
            "附件"
        ];
        _this.colKeys = [
            "requestNo",
            "mainbody",
            "RelativeParty",
            "ContractNo",
            "Title",
            "ContractType/Title",
            "ContractObject",
            "Money",
            "Currency",
            "PayWay",
            "state",
            "NeedApproval",
            "remarks",
            "FactoryDept",
            "signingDate",
            "representative/Title",
            "Author/Title",
            "Created",
            "pricingcenter/Title",
            "lawyer/Title",
            "AttachmentFiles"
        ];
        _this.state = {
            curUser: {},
            requestedItems: [],
            contractTypes: [],
            ContractType: "",
            ContractStatu: "",
            ContractMainBodies: [],
            ContractMainBody: "",
            StatffDepts: [],
            curDeptId: "",
            ContractTitle: "",
            ContractNo: "",
            filterCountstr: "",
            filterstr: "",
            ContractCurrency: "",
            minMoney: "",
            maxMoney: "",
            ContractMaxDate: new Date(),
            ContractMinDate: new Date(),
            RelativeParty: "",
            current: 1,
            total: 1,
            pageSize: 10,
            fieldNames: 0,
            Author: []
        };
        return _this;
    }
    AllContracts.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.allContracts },
            React.createElement("div", { className: styles.container },
                React.createElement("fieldset", null,
                    React.createElement("legend", null,
                        React.createElement("h3", null, "\u67E5\u8BE2\u6761\u4EF6")),
                    React.createElement("div", { className: "ms-Grid", dir: "ltr" },
                        React.createElement("div", { className: "ms-Grid-row" },
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1", style: { paddingLeft: "10px", minWidth: "80px" } }, "\u5408\u540C\u7C7B\u578B"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg3" },
                                React.createElement("select", { ref: function (c) { return (_this.ContractTypes = c); }, value: this.state.ContractType, onChange: this.onContractTypeChanged },
                                    React.createElement("option", { value: "" }, "\u4E0D\u9650"),
                                    this.state.contractTypes.map(function (typeitem) {
                                        return (React.createElement("option", { value: typeitem.Id }, typeitem.Title));
                                    }))),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1" }, "\u5408\u540C\u4E3B\u4F53"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg3" },
                                React.createElement("select", { ref: function (c) { return (_this.ContractMainBodies = c); }, value: this.state.ContractMainBody, onChange: this.onContractMainBodyChanged, style: { maxWidth: "97%" } },
                                    React.createElement("option", { value: "" }, "\u4E0D\u9650"),
                                    this.state.ContractMainBodies.map(function (item) {
                                        return React.createElement("option", { value: item.Title }, item.Title);
                                    }))),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1" }, "\u5F53\u524D\u72B6\u6001"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1" },
                                React.createElement("select", { ref: function (c) { return (_this.ContractStatus = c); }, value: this.state.ContractStatu, onChange: this.onContractStatuChanged },
                                    React.createElement("option", { value: "" }, "\u4E0D\u9650"),
                                    React.createElement("option", { value: "3" }, "\u5408\u540C\u5DF2\u5BA1"),
                                    React.createElement("option", { value: "2" }, "\u5F8B\u5E08\u5BA1\u6279"),
                                    React.createElement("option", { value: "1" }, "\u5BA1\u4EF7\u4E2D\u5FC3"),
                                    React.createElement("option", { value: "-1,-2" }, "\u5DF2\u9A73\u56DE"),
                                    React.createElement("option", { value: "-4" }, "\u5DF2\u53D6\u6D88")))),
                        React.createElement("div", { className: "ms-Grid-row" },
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1", style: { paddingLeft: "10px", minWidth: "80px" } }, "\u5408\u540C\u540D\u79F0"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg3" },
                                React.createElement("input", { type: "text", value: this.state.ContractTitle ? this.state.ContractTitle : "", ref: function (c) { return (_this.ContractTitle = c); }, onChange: this.onContractTitleChanged })),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1" }, "\u5408\u540C\u7F16\u53F7"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg3" },
                                React.createElement("input", { type: "text", ref: function (c) { return (_this.ContractNo = c); }, value: this.state.ContractNo ? this.state.ContractNo : "", onChange: this.onContractNoChanged })),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1" }, "\u8D27\u5E01\u5355\u4F4D"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg2" },
                                React.createElement("select", { ref: function (c) { return (_this.ContractCurrencies = c); }, value: this.state.ContractCurrency, onChange: this.onContractCurrencyChanged },
                                    React.createElement("option", { value: "" }, "\u4E0D\u9650"),
                                    React.createElement("option", { value: "RMB" }, "RMB"),
                                    React.createElement("option", { value: "USD" }, "USD"),
                                    React.createElement("option", { value: "EUR" }, "EUR"),
                                    React.createElement("option", { value: "N/A" }, "N/A")))),
                        React.createElement("div", { className: "ms-Grid-row" },
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md3 ms-lg1", style: { paddingLeft: "10px", minWidth: "80px" } }, "\u5408\u540C\u76F8\u5BF9\u65B9"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md3 ms-lg3" },
                                React.createElement("input", { type: "text", ref: function (c) { return (_this.RelativePartyinput = c); }, value: this.state.RelativeParty ? this.state.RelativeParty : "", onChange: this.onRelativePartyChanged })),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1" }, "\u91D1\u989D"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1", style: { width: "74px" } },
                                React.createElement("input", { ref: function (c) { return (_this.MinMoneyInput = c); }, type: "number", value: this.state.minMoney ? this.state.minMoney : "", onChange: this.setMinMoney, placeholder: "最小值", style: { maxWidth: "65px", height: "26px" } })),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1", style: { textAlign: "center", maxWidth: "10px" } }, "-"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1" },
                                React.createElement("input", { ref: function (c) { return (_this.MaxMoneyInput = c); }, type: "number", value: this.state.maxMoney ? this.state.maxMoney : "", onChange: this.setMaxMoney, placeholder: "最大值", style: { maxWidth: "65px", height: "26px" } })),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1" }, "\u6240\u5C5E\u90E8\u95E8"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1" },
                                React.createElement("select", { ref: function (c) { return (_this.ContractDepts = c); }, value: this.state.curDeptId, onChange: this.onContractDeptChanged, style: { maxWidth: "97%" } },
                                    React.createElement("option", { value: "" }, "\u4E0D\u9650"),
                                    this.state.StatffDepts.map(function (item) {
                                        return React.createElement("option", { value: item.Id }, item.Title);
                                    })))),
                        React.createElement("div", { className: "ms-Grid-row" },
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1", style: { paddingLeft: "10px", minWidth: "80px" } }, "\u521B\u5EFA\u65F6\u95F4"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg2" },
                                React.createElement(DatePicker, { firstDayOfWeek: DayOfWeek.Sunday, strings: DayPickerStrings, placeholder: "最小值", label: "", isRequired: false, allowTextInput: true, formatDate: this._formatDate, 
                                    // tslint:disable:jsx-no-lambda
                                    onAfterMenuDismiss: function () {
                                        return console.log("onAfterMenuDismiss called");
                                    }, onSelectDate: this._setMinDate, value: this.state.ContractMinDate
                                        ? moment(this.state.ContractMinDate, moment.ISO_8601).toDate()
                                        : null })),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1", style: { textAlign: "center", maxWidth: "20px" } }, "-"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md6 ms-lg2" },
                                React.createElement(DatePicker, { firstDayOfWeek: DayOfWeek.Sunday, strings: DayPickerStrings, placeholder: "最大值", isRequired: false, allowTextInput: true, formatDate: this._formatDate, 
                                    // tslint:disable:jsx-no-lambda
                                    onAfterMenuDismiss: function () {
                                        return console.log("onAfterMenuDismiss called");
                                    }, onSelectDate: this._setMaxDate, value: this.state.ContractMaxDate
                                        ? moment(this.state.ContractMaxDate, moment.ISO_8601).toDate()
                                        : null })),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg1", style: { marginTop: "0px", textAlign: "center" } }, "\u7533\u8BF7\u4EBA"),
                            React.createElement("div", { className: "ms-Grid-col ms-sm6 ms-md4 ms-lg5" },
                                React.createElement(OfficeUiFabricPeoplePickerContainer, { principalTypeUser: true, principalTypeSharePointGroup: false, principalTypeSecurityGroup: false, principalTypeDistributionList: false, itemLimit: 1, maximumEntitySuggestions: 5, onChange: this.onAuthorChanged, selections: this.state.Author ? this.state.Author : [] }))),
                        React.createElement("div", { className: "ms-Grid-row" },
                            React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md12 ms-lg12", style: {
                                    textAlign: "right",
                                    marginTop: "10px",
                                    paddingRight: "40px"
                                } },
                                React.createElement(Button, { onClick: function () {
                                        _this.Search();
                                    } }, "\u67E5\u8BE2"),
                                "\u00A0",
                                React.createElement(Button, { onClick: function () {
                                        _this.setState({
                                            ContractType: "",
                                            ContractStatu: "",
                                            ContractMainBody: "",
                                            ContractTitle: "",
                                            ContractNo: "",
                                            ContractCurrency: "",
                                            filterCountstr: "",
                                            filterstr: "",
                                            minMoney: "",
                                            maxMoney: "",
                                            RelativeParty: "",
                                            ContractMaxDate: new Date(),
                                            ContractMinDate: new Date(),
                                            curDeptId: "",
                                            Author: []
                                        }, function () {
                                            _this.Search();
                                        });
                                    } }, "\u91CD\u7F6E"),
                                "\u00A0",
                                React.createElement(Button, { onClick: function () {
                                        _this.exportDatas();
                                    } }, "\u5BFC\u51FA"))))),
                React.createElement(UxpList, { data: this.state.requestedItems, schemaFields: requestedItemsListFields, selectionMode: SelectionMode.none, onRenderItemColumn: this._onRenderItemColumn, onItemInvoked: this._ItemInvoked, label: "", ishiddenNewButton: true, hiddenFields: [
                        "lawyerId",
                        "AuthorId",
                        "status",
                        "Id",
                        "AuthorTitle"
                    ] }),
                React.createElement(Pagination, { currentPage: this.state.current, totalPages: this.state.total, onChange: this._getpageditems }))));
    };
    AllContracts.prototype._onRenderItemColumn = function (item, index, column) {
        // console.log(item,index,column);
        if (column.columnActionsMode === ColumnActionsMode.clickable) {
            return (React.createElement(Link, { "data-selection-invoke": true, href: WebConfig.NewContractPage + "?request=" + item.Id }, item[column.fieldName]));
        }
        return item[column.fieldName];
    };
    AllContracts.prototype._ItemInvoked = function (item, index, ev) {
        var Id = this.state.requestedItems[index].Id;
        window.location.href = WebConfig.NewContractPage + "?request=" + Id;
    };
    AllContracts.prototype.componentDidMount = function () {
        var _this = this;
        sp.web.currentUser.get().then(function (result) {
            // console.log(result);
            var odd = new ODataDefaultParser();
            var tweb = new Web("/", "_vti_bin/listdata.svc/");
            var header = {
                Accept: "application/json;odata=verbose,text/plain"
            };
            tweb.get(odd, header).then(function (o) {
                //console.log((o.EntitySets as any[]).lastIndexOf("网站页面"));
                var language = o.EntitySets.lastIndexOf("网站页面") > 0 ? 1 : 0;
                _this.setState({ curUser: result, fieldNames: language }, function () {
                    sp.web.lists
                        .getByTitle(WebConfig.contractTypeListName)
                        .items.getAll()
                        .then(function (items) {
                        var cttypes = [];
                        var ctmainbodys = [];
                        var ctstaffdepts = [];
                        items.map(function (item) {
                            cttypes.push({ Id: item.Id, Title: item.Title });
                        });
                        sp.web.lists
                            .getByTitle(WebConfig.subjectsListName)
                            .items.getAll()
                            .then(function (sbjs) {
                            sbjs.map(function (sbj) {
                                ctmainbodys.push({ Title: sbj.Title });
                            });
                            sp.web.lists
                                .getByTitle(WebConfig.DeptsListName)
                                .items.getAll()
                                .then(function (depts) {
                                depts.map(function (dpt) {
                                    ctstaffdepts.push({ Id: dpt.Id, Title: dpt.Title });
                                });
                                _this.setState({
                                    contractTypes: cttypes,
                                    ContractMainBodies: ctmainbodys,
                                    StatffDepts: ctstaffdepts
                                });
                            });
                        });
                    });
                    _this.Search();
                    // } else {
                    //  alert("您没有操作权限");
                    //  document.location.href = WebConfig.CreatedByMeListPage;
                    // }
                });
            });
        });
    };
    AllContracts.prototype.getDatas = function () {
        var _this = this;
        var odd = new ODataDefaultParser();
        var tweb = new Web("/", "_vti_bin/listdata.svc/" + WebConfig.requestedItemsListName + "/$count?$filter=" + this.state.filterCountstr);
        var header = {
            Accept: "application/json;odata=verbose,text/plain"
        };
        tweb.get(odd, { headers: header }).then(function (result) {
            // console.log(result);
            var ret = parseInt(result, 10);
            _this.setState({
                total: isNaN(ret) || ret === 0
                    ? 1
                    : Math.floor((ret + _this.state.pageSize - 1) / _this.state.pageSize)
            });
            _this.setState({ current: 1 }, function () {
                _this._getpageditems(1);
            });
        });
    };
    AllContracts.prototype._formatDate = function (datevale) {
        return datevale.toLocaleDateString();
    };
    AllContracts.prototype.getFilterStr = function (CallBack) {
        var filterCountstr = "Status ne '0'";
        var filterStr = "status ne '0'";
        if (this.state.ContractType && this.state.ContractType.trim() !== "") {
            filterStr += " and ContractTypeId eq " + this.state.ContractType;
            filterCountstr += " and ContractTypeId eq " + this.state.ContractType;
        }
        if (this.state.ContractStatu && this.state.ContractStatu.trim() !== "") {
            filterCountstr += " and ";
            filterStr += " and ";
            var statuss = this.state.ContractStatu.split(",");
            if (statuss.length > 1) {
                var allStatus = statuss
                    .map(function (stu) {
                    return "Status eq '" + stu + "'";
                })
                    .join(" or ");
                filterCountstr += "(" + allStatus + ") ";
                filterStr += "(" + allStatus.toLowerCase() + ") ";
            }
            else {
                filterCountstr += " Status eq '" + this.state.ContractStatu + "' ";
                filterStr += " status eq '" + this.state.ContractStatu + "' ";
            }
        }
        if (this.state.ContractMainBody &&
            this.state.ContractMainBody.trim() !== "") {
            var mbody = this.state.ContractMainBody.trim();
            filterCountstr += " and Mainbody eq '" + mbody + "' ";
            filterStr += " and  mainbody eq '" + mbody + "' ";
        }
        if (this.state.curDeptId && this.state.curDeptId.trim() !== "") {
            filterCountstr += " and StaffDeptId eq " + this.state.curDeptId + " ";
            filterStr += " and  StaffDeptId eq " + this.state.curDeptId + " ";
        }
        if (this.state.RelativeParty && this.state.RelativeParty.trim() !== "") {
            var mbody = encodeURIComponent(this.state.RelativeParty.trim());
            filterCountstr += " and RelativeParty eq '" + mbody + "' ";
            filterStr += " and RelativeParty eq '" + mbody + "' ";
        }
        if (this.state.ContractTitle && this.state.ContractTitle.trim() !== "") {
            var title = encodeURIComponent(this.state.ContractTitle.trim());
            filterCountstr += " and substringof('" + title + "',Title) ";
            filterStr += " and substringof('" + title + "',Title) ";
        }
        if (this.state.ContractNo && this.state.ContractNo.trim() !== "") {
            var title = this.state.ContractNo.trim();
            filterCountstr += " and substringof('" + title + "',ContractNo) ";
            filterStr += " and substringof('" + title + "',ContractNo) ";
        }
        if (this.state.ContractCurrency &&
            this.state.ContractCurrency.trim() !== "") {
            filterCountstr +=
                " and CurrencyValue eq '" + this.state.ContractCurrency + "' ";
            filterStr += " and Currency eq '" + this.state.ContractCurrency + "' ";
        }
        if (this.state.minMoney) {
            filterCountstr += " and Money ge " + this.state.minMoney;
            filterStr += " and Money ge " + this.state.minMoney;
        }
        if (this.state.maxMoney) {
            filterCountstr += " and Money le " + this.state.maxMoney;
            filterStr += " and Money le " + this.state.maxMoney;
        }
        if (this.state.ContractMinDate) {
            filterCountstr +=
                " and " +
                    FieldNames[this.state.fieldNames].Created +
                    " ge datetime'" +
                    this.state.ContractMinDate.toISOString() +
                    "'";
            filterStr +=
                " and Created ge datetime'" +
                    this.state.ContractMinDate.toISOString() +
                    "'";
        }
        if (this.state.ContractMaxDate) {
            var maxDay = new Date(this.state.ContractMaxDate.getTime());
            maxDay.setDate(maxDay.getDate() + 1);
            filterCountstr +=
                " and " +
                    FieldNames[this.state.fieldNames].Created +
                    " lt datetime'" +
                    maxDay.toISOString() +
                    "'";
            filterStr += " and  Created lt datetime'" + maxDay.toISOString() + "'";
        }
        if (this.state.Author && this.state.Author.length > 0) {
            filterCountstr +=
                " and " +
                    FieldNames[this.state.fieldNames].AuthorId +
                    " eq " +
                    this.state.Author[0].id;
            filterStr += " and AuthorId eq " + this.state.Author[0].id;
            console.log(filterCountstr);
        }
        this.setState({ current: 1, filterCountstr: filterCountstr, filterstr: filterStr }, function () {
            CallBack();
        });
    };
    AllContracts.prototype.Search = function () {
        this.getFilterStr(this.getDatas);
    };
    AllContracts.prototype.exportDatas = function () {
        this.getFilterStr(this._exportDatas);
    };
    AllContracts.prototype._exportDatas = function () {
        var _this = this;
        var expItems = [];
        var attfinfos = [];
        expItems.push(this.colNames);
        sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.filter("" + this.state.filterstr)
            .select("*", "AttachmentFiles", "ContractType/Title", "representative/Title", "Author/Title", "pricingcenter/Title", "lawyer/Title")
            .expand("AttachmentFiles", "ContractType", "representative/Id", "Author", "pricingcenter", "lawyer")
            .orderBy("Id", false)
            .top(2000)
            .getPaged()
            .then(function (items) {
            _this.fillDatas(items, expItems, attfinfos);
            _this._pagedItemsToExcel(items, expItems, attfinfos);
        });
    };
    AllContracts.prototype.onContractTypeChanged = function (e) {
        // console.log(this.ContractTypes.value);
        this.setState({ ContractType: this.ContractTypes.value });
    };
    AllContracts.prototype.onRelativePartyChanged = function (e) {
        this.setState({ RelativeParty: this.RelativePartyinput.value.trim() });
    };
    AllContracts.prototype.onContractDeptChanged = function (e) {
        this.setState({ curDeptId: this.ContractDepts.value.trim() });
    };
    AllContracts.prototype.onContractStatuChanged = function (e) {
        this.setState({ ContractStatu: this.ContractStatus.value });
    };
    AllContracts.prototype.onContractMainBodyChanged = function (e) {
        this.setState({ ContractMainBody: this.ContractMainBodies.value });
    };
    AllContracts.prototype.onContractTitleChanged = function (e) {
        this.setState({ ContractTitle: this.ContractTitle.value });
    };
    AllContracts.prototype.onContractNoChanged = function (e) {
        this.setState({ ContractNo: this.ContractNo.value });
    };
    AllContracts.prototype.onContractCurrencyChanged = function (e) {
        this.setState({ ContractCurrency: this.ContractCurrencies.value });
    };
    AllContracts.prototype.setMinMoney = function (e) {
        if (isNaN(parseFloat(this.MinMoneyInput.value))) {
            //  this.setState({ minMoney: "" });
            if (this.MinMoneyInput.value.trim() === "") {
                this.setState({ minMoney: "" });
            }
        }
        else {
            this.setState({ minMoney: this.MinMoneyInput.value });
        }
    };
    AllContracts.prototype.setMaxMoney = function (e) {
        // console.log(e);
        if (isNaN(parseFloat(this.MaxMoneyInput.value))) {
            //  this.setState({ maxMoney: "" });
            if (this.MaxMoneyInput.value.trim() === "") {
                this.setState({ maxMoney: "" });
            }
        }
        else {
            this.setState({ maxMoney: this.MaxMoneyInput.value });
        }
    };
    AllContracts.prototype._setMinDate = function (value) {
        this.setState({ ContractMinDate: value });
    };
    AllContracts.prototype._setMaxDate = function (value) {
        this.setState({ ContractMaxDate: value });
    };
    AllContracts.prototype.onAuthorChanged = function (authors) {
        this.setState({ Author: authors });
    };
    AllContracts.prototype._pagedItemsTo = function (PgItems, targetPage, PgNum) {
        var _this = this;
        PgNum--;
        if (PgNum > 0 && PgItems.hasNext) {
            PgItems.getNext().then(function (item) {
                _this._pagedItemsTo(item, targetPage, PgNum);
            });
            return;
        }
        var data = PgItems.results.map(function (item) {
            return {
                requestNo: item.requestNo,
                state: statusDesc[item.status],
                RelativeParty: item.RelativeParty,
                mainbody: item.mainbody,
                Title: item.Title,
                NeedApproval: item.NeedApproval === false ? "否" : "是",
                ContractType: item.ContractType ? item.ContractType.Title : "",
                ContractNo: item.ContractNo,
                ContractObject: item.ContractObject,
                MoneyText: item.Money ? item.Money : "N/A",
                Currency: item.Currency,
                PayWay: item.PayWay,
                remarks: item.remarks ? item.remarks : "",
                Id: item.Id,
                representative: item.representative ? item.representative.Title : "",
                Author: item.Author.Title,
                Created: moment(item.Created, moment.ISO_8601).format("YYYY/MM/DD"),
                signingDate: item.signingDate && (item.signingDate + "").length > 6
                    ? moment(item.signingDate, moment.ISO_8601).format("YYYY/MM/DD")
                    : "",
                AttachmentFiles: item.AttachmentFiles.map(function (fileinfo) {
                    return {
                        ServerRelativeUrl: fileinfo.ServerRelativeUrl,
                        FileName: fileinfo.FileName
                    };
                })
            };
        });
        //  console.log(data);
        this.setState({
            requestedItems: data,
            current: targetPage
        });
    };
    AllContracts.prototype._pagedItemsToExcel = function (PgItems, expItems, attfinfos) {
        var _this = this;
        if (PgItems.hasNext) {
            PgItems.getNext().then(function (items) {
                _this.fillDatas(items, expItems, attfinfos);
            });
            return;
        }
        var T = new Date();
        var ws_name = "合同申请表" + T.getFullYear() + (T.getMonth() + 1) + T.getDate();
        // if(typeof console !== 'undefined') console.log(new Date());
        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.aoa_to_sheet(expItems);
        var _loop_1 = function (r) {
            attfinfos[r].map(function (att, index) {
                var celName = XLSX.utils.encode_col(_this.colKeys.length - 1 + index) + (r + 2);
                //  console.log(celName);
                if (ws[celName]) {
                    ws[celName].l = att;
                }
            });
        };
        for (var r = 0; r < expItems.length - 1; r++) {
            _loop_1(r);
        }
        /* add worksheet to workbook */
        XLSX.utils.book_append_sheet(wb, ws, ws_name);
        /* write workbook */
        // if(typeof console !== 'undefined') console.log(new Date());
        var filename = "合同申请表_.xlsx";
        XLSX.writeFile(wb, GetFileRandName(filename));
        this.getDatas();
    };
    AllContracts.prototype._fillreqdata = function (req, page) {
        var _this = this;
        req.getPaged().then(function (reqbody) {
            // console.log(reqbody);
            _this._pagedItemsTo(reqbody, page, page);
        });
    };
    AllContracts.prototype.fillDatas = function (items, expItems, attfinfos) {
        var _this = this;
        items.results.map(function (curitem) {
            var rowdatas = [];
            var rowatts = [];
            var _loop_2 = function (i) {
                if (_this.colKeys[i] === "AttachmentFiles") {
                    // console.log(curitem[this.colKeys[i]]);
                    curitem[_this.colKeys[i]].map(function (attf, index) {
                        rowatts.push({
                            Target: WebConfig.hosturl + attf.ServerRelativeUrl,
                            Tooltip: attf.FileName
                        });
                        // return attf.FileName;
                        rowdatas[i + index] = attf.FileName;
                    });
                }
                else if (_this.colKeys[i] === "state") {
                    rowdatas[i] = statusDesc[curitem.status];
                }
                else if (_this.colKeys[i].indexOf("/") > 0) {
                    if (curitem.NeedApproval === false &&
                        _this.colKeys[i] === "pricingcenter/Title") {
                        rowdatas[i] = "";
                    }
                    else {
                        var fields = _this.colKeys[i].split("/");
                        var tempObj = curitem[fields[0]];
                        rowdatas[i] = tempObj ? tempObj[fields[1]] : "";
                    }
                }
                else if (_this.colKeys[i] === "NeedApproval") {
                    rowdatas[i] = curitem.NeedApproval === false ? "否" : "是";
                }
                else if (_this.colKeys[i] === "Created" ||
                    _this.colKeys[i] === "signingDate") {
                    if (curitem[_this.colKeys[i]] && curitem[_this.colKeys[i]].length > 6) {
                        rowdatas[i] = moment(curitem[_this.colKeys[i]], moment.ISO_8601).format("YYYY/MM/DD");
                    }
                    else {
                        rowdatas[i] = "";
                    }
                }
                else {
                    rowdatas[i] = curitem[_this.colKeys[i]];
                }
            };
            for (var i = 0; i < _this.colKeys.length; i++) {
                _loop_2(i);
            }
            expItems.push(rowdatas);
            attfinfos.push(rowatts);
        });
    };
    AllContracts.prototype._getpageditems = function (page) {
        // console.log(page);
        var filterstr = this.state.filterstr;
        var req = sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.filter("" + filterstr)
            .select("*", "AttachmentFiles", "ContractType/Title", "representative/Title", "Author/Title", "pricingcenter/Title", "lawyer/Title")
            .expand("AttachmentFiles", "ContractType", "representative/Id", "Author", "pricingcenter", "lawyer")
            .orderBy("Id", false);
        req = req.top(this.state.pageSize);
        this._fillreqdata(req, page);
    };
    __decorate([
        autobind
    ], AllContracts.prototype, "getDatas", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "Search", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "exportDatas", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "_exportDatas", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "onContractTypeChanged", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "onRelativePartyChanged", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "onContractDeptChanged", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "onContractStatuChanged", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "onContractMainBodyChanged", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "onContractTitleChanged", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "onContractNoChanged", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "onContractCurrencyChanged", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "setMinMoney", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "setMaxMoney", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "_setMinDate", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "_setMaxDate", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "onAuthorChanged", null);
    __decorate([
        autobind
    ], AllContracts.prototype, "_getpageditems", null);
    return AllContracts;
}(React.Component));
export default AllContracts;

//# sourceMappingURL=AllContracts.js.map
