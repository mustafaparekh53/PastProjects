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
import styles from "./ContractList.module.scss";
import UxpList from "../../ComComponents/UxpList/UxpList";
import { sp, Web } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import Pagination from "office-ui-fabric-react-pagination";
import { statusDesc } from "../../ComComponents/interfaces/IItem";
import { WebConfig } from "../../ComComponents/webconfig";
import { ODataDefaultParser } from "@pnp/odata";
import * as moment from "moment";
import "moment/locale/zh-cn";
import { FieldNames } from "../../ComComponents/comutil";
import { PivotItem, Pivot } from "office-ui-fabric-react/lib/Pivot";
import { SelectionMode } from "office-ui-fabric-react/lib/DetailsList";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import { Link } from "office-ui-fabric-react/lib/Link";
// import { injectCss } from "../../ComComponents/comutil";
import * as objectAssign from "object-assign";
var ContractList = (function (_super) {
    __extends(ContractList, _super);
    function ContractList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            list1: {
                current: 1,
                requestedItemsListFields: [
                    {
                        ariaLabel: "合同审批单号",
                        Name: "requestNo",
                        maxWidth: 75
                    },
                    {
                        ariaLabel: "创建人",
                        Name: "Author",
                        maxWidth: 100
                    },
                    {
                        ariaLabel: "当前状态",
                        Name: "state",
                        maxWidth: 100
                    },
                    {
                        ariaLabel: "厂部",
                        Name: "FactoryDept",
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
                ],
                total: 1,
                requestedItems: []
            },
            list2: {
                current: 1,
                requestedItemsListFields: [],
                total: 1,
                requestedItems: []
            },
            user: {},
            total0: 0,
            total1: 0,
            total2: 0,
            total3: 0,
            total4: 0
        };
        return _this;
        // injectCss();
    }
    ContractList.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.contractList },
            React.createElement("div", { className: styles.container },
                React.createElement(Pivot, { onLinkClick: this._listchanged },
                    React.createElement(PivotItem, { ref: function (el) { return (_this.Provtitem1 = el); }, linkText: "我的合同申请", itemCount: this.state.total0, itemKey: "1", itemIcon: "Emoji2" }),
                    React.createElement(PivotItem, { linkText: "审批中的", itemCount: this.state.total1, itemKey: "2", itemIcon: "Emoji2" }),
                    React.createElement(PivotItem, { linkText: "草稿、退回或取消的", itemCount: this.state.total2, itemKey: "3", itemIcon: "Emoji2" }),
                    React.createElement(PivotItem, { linkText: "已通过的", itemCount: this.state.total3, itemKey: "4", itemIcon: "Emoji2" }),
                    this.state.user &&
                        this.state.user.DeptId &&
                        this.state.user.DeptId > 0 ? (React.createElement(PivotItem, { linkText: "本部门的合同", itemCount: this.state.total4, itemKey: "5", itemIcon: "Emoji2" })) : ("")),
                React.createElement(UxpList, { data: this.state.list2.requestedItems, schemaFields: this.state.tabindex === 4
                        ? this.state.list1.requestedItemsListFields
                        : [
                            {
                                ariaLabel: "合同审批单号",
                                Name: "requestNo",
                                maxWidth: 75
                            },
                            {
                                ariaLabel: "上一步审批状态",
                                Name: "prestate",
                                maxWidth: 100
                            },
                            {
                                ariaLabel: "当前状态",
                                Name: "state",
                                maxWidth: 100
                            },
                            {
                                ariaLabel: "厂部",
                                Name: "FactoryDept",
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
                        ], onItemInvoked: this._openRequestForm, onRenderItemColumn: this._onRenderItemColumn, onNewButtonClicked: this._NewRequestForm, onEditButtonClicked: this._openRequestForm, selectionMode: SelectionMode.none, label: "", refreshtime: this.state.refreshtime, hiddenFields: ["Id"] }),
                React.createElement(Pagination, { currentPage: this.state.list2.current, totalPages: this.state.list2.total, onChange: this.handlePaginatorChange2 }))));
    };
    ContractList.prototype._openRequestForm = function (item, index) {
        window.location.href = WebConfig.NewContractPage + "?request=" + item.Id;
    };
    ContractList.prototype._NewRequestForm = function () {
        window.location.href = WebConfig.NewContractPage;
    };
    ContractList.prototype.handlePaginatorChange2 = function (active) {
        // console.log("当前页码：%s", active);
        this._getpageditems2(active);
    };
    ContractList.prototype.componentDidMount = function () {
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
                sp.web.lists
                    .getByTitle(WebConfig.StaffDeptListName)
                    .items.filter("StaffId eq " + result.Id)
                    .get()
                    .then(function (stfs) {
                    // console.log(stfs);
                    if (stfs.length > 0) {
                        result.DeptId = stfs[0].DeptId;
                    }
                    _this.setState({ user: result, fieldNames: language }, function () {
                        //this._listchanged(this.Provtitem1);
                        //  console.log(this.state.user);
                        _this._changtab("1");
                    });
                });
            });
        });
    };
    ContractList.prototype._onRenderItemColumn = function (item, index, column) {
        if (column.fieldName === "requestNo") {
            return (React.createElement(Link, { "data-selection-invoke": true, href: WebConfig.NewContractPage + "?request=" + item.Id }, item[column.fieldName]));
        }
        return item[column.fieldName];
    };
    ContractList.prototype._getpageditems2 = function (page) {
        var pgdata = {};
        var filterstr = this.state.filterstr;
        if (filterstr.indexOf("StaffDeptId") >= 0) {
            filterstr = " and " + filterstr;
        }
        else if (filterstr.trim() === "") {
            filterstr = " and AuthorId eq " + this.state.user.Id; //+ " and " + filterstr;
        }
        else {
            filterstr =
                " and AuthorId eq " + this.state.user.Id + " and " + filterstr;
        }
        objectAssign(pgdata, this.state.list2);
        var req = sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.filter(" status ne '-90' " + filterstr)
            .select("*", "AttachmentFiles", "ContractType/Title", "representative/Title", "Author/Title")
            .expand("AttachmentFiles", "ContractType", "representative/Id", "Author")
            .orderBy("Id", false);
        req = req.top(this.props.pageSize);
        this._fillreqdata2(req, page, pgdata);
    };
    ContractList.prototype._changtab = function (itemKey) {
        var _this = this;
        // console.log(item.props.itemKey);
        var filterstr = "";
        var tabindex = 0;
        // console.log(this.state.contrTypeids);
        switch (itemKey) {
            case "2":
                filterstr = "(status eq '1' or status eq '2' )";
                tabindex = 1;
                break;
            case "3":
                filterstr =
                    "(status eq '0' or status eq '-1' or status eq '-2' or status eq '-4' )";
                tabindex = 2;
                break;
            case "4":
                filterstr = "(status eq '3')";
                tabindex = 3;
                break;
            case "5":
                tabindex = 4;
                if (this.state.user.DeptId && this.state.user.DeptId > 0) {
                    filterstr =
                        "((status eq '1' or status eq '2' or status eq '3') and  StaffDeptId eq " +
                            this.state.user.DeptId +
                            ")";
                }
                else {
                    filterstr = "(StaffDeptId eq -1)";
                }
                break;
        }
        var odd = new ODataDefaultParser();
        var tweb = new Web("/", "_vti_bin/listdata.svc/" + WebConfig.requestedItemsListName + "/$count?&$filter=" + FieldNames[this.state.fieldNames].AuthorId + "  eq " + this.state.user.Id + " ");
        var header = {
            Accept: "application/json;odata=verbose,text/plain"
        };
        tweb.get(odd, { headers: header }).then(function (result) {
            // console.log(result);
            var ret = parseInt(result, 10);
            _this.setState({
                total0: isNaN(ret) ? 0 : ret,
                filterstr: filterstr,
                tabindex: tabindex
            }, function () {
                _this._getpageditems2(1);
            });
        });
        tweb = new Web("/", "_vti_bin/listdata.svc/" + WebConfig.requestedItemsListName + "/$count?&$filter=" + FieldNames[this.state.fieldNames].AuthorId + " eq " + this.state.user.Id + " and (Status eq '1' or Status eq '2' ) ");
        tweb.get(odd, { headers: header }).then(function (result) {
            var ret = parseInt(result, 10);
            _this.setState({ total1: isNaN(ret) ? 0 : ret });
        });
        tweb = new Web("/", "_vti_bin/listdata.svc/" + WebConfig.requestedItemsListName + "/$count?&$filter=" + FieldNames[this.state.fieldNames].AuthorId + " eq " + this.state.user.Id + " and ( Status eq '-1' or Status eq '0' or Status eq '-2' or Status eq '-4') ");
        tweb.get(odd, { headers: header }).then(function (result) {
            var ret = parseInt(result, 10);
            _this.setState({ total2: isNaN(ret) ? 0 : ret });
        });
        tweb = new Web("/", "_vti_bin/listdata.svc/" + WebConfig.requestedItemsListName + "/$count?&$filter=" + FieldNames[this.state.fieldNames].AuthorId + " eq " + this.state.user.Id + " and (Status eq '3' ) ");
        tweb.get(odd, { headers: header }).then(function (result) {
            var ret = parseInt(result, 10);
            _this.setState({ total3: isNaN(ret) ? 0 : ret });
        });
        if (this.state.user.DeptId && this.state.user.DeptId > 0) {
            tweb = new Web("/", "_vti_bin/listdata.svc/" + WebConfig.requestedItemsListName + "/$count?&$filter=(Status eq '1' or Status eq '2' or Status eq '3')  and StaffDeptId eq " + this.state.user.DeptId);
            tweb.get(odd, { headers: header }).then(function (result) {
                var ret = parseInt(result, 10);
                _this.setState({ total4: isNaN(ret) ? 0 : ret });
            });
        }
        else {
            this.setState({ total4: 0 });
        }
    };
    /*
    @autobind
    private _getmyconttypes(key: string): void {
      let values: number[] = [];
      if (this.state.user.Title.indexOf("Global Sourcing") > 0) {
        sp.web.lists
          .getByTitle(WebConfig.contractTypeListName)
          .items.select("Id")
          .filter("substringof('采购',Title) ")
          .get()
          .then(items => {
            items.map(item => {
              values.push(item.Id);
            });
            this.setState({ contrTypeids: values }, () => {
              this._changtab(key);
            });
          });
      } else {
        this.setState({ contrTypeids: [-1] }, () => {
          this._changtab(key);
        });
      }
    }*/
    ContractList.prototype._listchanged = function (item, ev) {
        this._changtab(item.props.itemKey);
    };
    ContractList.prototype._fillreqdata2 = function (req, page, pgdata) {
        var _this = this;
        req.getPaged().then(function (reqbody) {
            _this._pagedItemsTo(reqbody, page, page, pgdata);
        });
    };
    ContractList.prototype._pagedItemsTo = function (PgItems, targetPage, PgNum, pgdata) {
        var _this = this;
        PgNum--;
        if (PgNum > 0) {
            PgItems.getNext().then(function (item) {
                _this._pagedItemsTo(item, targetPage, PgNum, pgdata);
            });
            return;
        }
        var data = PgItems.results.map(function (item) {
            return {
                requestNo: item.requestNo,
                prestate: _this._getprestatus(item),
                state: statusDesc[item.status],
                FactoryDept: item.FactoryDept ? item.FactoryDept : "",
                RelativeParty: item.RelativeParty ? item.RelativeParty : "",
                Title: item.Title ? item.Title : "",
                ContractType: item.ContractType.Title ? item.ContractType.Title : "",
                ContractNo: item.ContractNo ? item.ContractNo : "",
                ContractObject: item.ContractObject ? item.ContractObject : "",
                MoneyText: item.Money ? item.Money : "N/A",
                Currency: item.Currency ? item.Currency : "",
                PayWay: item.PayWay ? item.PayWay : "",
                remarks: item.remarks ? item.remarks : "",
                Id: item.Id,
                Author: item.Author.Title,
                representative: item.representative ? item.representative.Title : "",
                signingDate: item.signingDate
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
        pgdata.requestedItems = data;
        pgdata.current = targetPage;
        switch (this.state.tabindex) {
            case 0:
                pgdata.total = Math.floor((this.state.total0 + this.props.pageSize - 1) / this.props.pageSize);
                break;
            case 1:
                pgdata.total = Math.floor((this.state.total1 + this.props.pageSize - 1) / this.props.pageSize);
                break;
            case 2:
                pgdata.total = Math.floor((this.state.total2 + this.props.pageSize - 1) / this.props.pageSize);
                break;
            case 3:
                pgdata.total = Math.floor((this.state.total3 + this.props.pageSize - 1) / this.props.pageSize);
                break;
            case 4:
                pgdata.total = Math.floor((this.state.total4 + this.props.pageSize - 1) / this.props.pageSize);
                break;
        }
        if (pgdata.current > pgdata.total) {
            pgdata.current = pgdata.total;
        }
        // console.log(this.state.tabindex, pgdata);
        this.setState({ list2: pgdata, refreshtime: new Date().toString() });
    };
    ContractList.prototype._getprestatus = function (data) {
        var curstate = data.status;
        switch (curstate) {
            case "-1":
                return "审价中心审批";
            case "-2":
                return "律师审批";
            case "2":
                if (data.NeedApproval) {
                    return "价格已审";
                }
                return "";
            case "3":
                return "律师已审";
        }
        return "";
    };
    __decorate([
        autobind
    ], ContractList.prototype, "_openRequestForm", null);
    __decorate([
        autobind
    ], ContractList.prototype, "_NewRequestForm", null);
    __decorate([
        autobind
    ], ContractList.prototype, "handlePaginatorChange2", null);
    __decorate([
        autobind
    ], ContractList.prototype, "_getpageditems2", null);
    __decorate([
        autobind
    ], ContractList.prototype, "_changtab", null);
    __decorate([
        autobind
    ], ContractList.prototype, "_listchanged", null);
    return ContractList;
}(React.Component));
export default ContractList;

//# sourceMappingURL=ContractList.js.map
