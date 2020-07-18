import * as React from "react";
import styles from "./AllContracts.module.scss";
import { IAllContractsProps } from "./IAllContractsProps";

import UxpList from "../../ComComponents/UxpList/UxpList";
import { IColumnField } from "../../ComComponents/interfaces/IColumnField";
import { WebConfig } from "../../ComComponents/webconfig";
import { sp, Items, Web, PagedItemCollection } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import Pagination from "office-ui-fabric-react-pagination";
import { statusDesc } from "../../ComComponents/interfaces/IItem";
import * as moment from "moment";
import "moment/locale/zh-cn";
import { ODataDefaultParser } from "@pnp/odata";
import * as XLSX from "xlsx";
import { GetFileRandName, FieldNames } from "../../ComComponents/comutil";
import { Button } from "office-ui-fabric-react/lib/Button";
import {
  IDatePickerStrings,
  DatePicker,
  DayOfWeek
} from "office-ui-fabric-react/lib/DatePicker";
import {
  ColumnActionsMode,
  SelectionMode,
  IColumn
} from "office-ui-fabric-react/lib/DetailsList";
import { Link } from "office-ui-fabric-react/lib/Link";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import { IAllContractsState } from "./IAllContractsState";
import {
  OfficeUiFabricPeoplePickerContainer,
  IOfficeUiFabricPeoplePickerSelection
} from "../../../components/officeUiFabricPeoplePicker";
const DayPickerStrings: IDatePickerStrings = {
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

const requestedItemsListFields: any[] = [
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

export default class AllContracts extends React.Component<
  IAllContractsProps,
  IAllContractsState
> {
  private ContractTypes: any;
  private ContractStatus: HTMLSelectElement;
  private ContractMainBodies: HTMLSelectElement;
  private ContractTitle: HTMLInputElement;
  private ContractNo: HTMLInputElement;
  private ContractCurrencies: HTMLSelectElement;
  private MinMoneyInput: HTMLInputElement;
  private MaxMoneyInput: HTMLInputElement;
  private RelativePartyinput: HTMLInputElement;
  private ContractDepts: HTMLSelectElement;
  public constructor(props: any) {
    super(props);
    this.state = {
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
      total: 1, //总页数
      pageSize: 10,
      fieldNames: 0,
      Author: []
    };
  }
  public render(): React.ReactElement<IAllContractsProps> {
    return (
      <div className={styles.allContracts}>
        <div className={styles.container}>
          <fieldset>
            <legend>
              <h3>查询条件</h3>
            </legend>
            <div className="ms-Grid" dir="ltr">
              <div className="ms-Grid-row">
                <div
                  className="ms-Grid-col ms-sm6 ms-md4 ms-lg1"
                  style={{ paddingLeft: "10px", minWidth: "80px" }}
                >
                  合同类型
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
                  <select
                    ref={c => (this.ContractTypes = c)}
                    value={this.state.ContractType}
                    onChange={this.onContractTypeChanged}
                  >
                    <option value="">不限</option>
                    {this.state.contractTypes.map(typeitem => {
                      return (
                        <option value={typeitem.Id}>{typeitem.Title}</option>
                      );
                    })}
                  </select>
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">合同主体</div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
                  <select
                    ref={c => (this.ContractMainBodies = c)}
                    value={this.state.ContractMainBody}
                    onChange={this.onContractMainBodyChanged}
                    style={{ maxWidth: "97%" }}
                  >
                    <option value="">不限</option>
                    {this.state.ContractMainBodies.map(item => {
                      return <option value={item.Title}>{item.Title}</option>;
                    })}
                  </select>
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">当前状态</div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">
                  <select
                    ref={c => (this.ContractStatus = c)}
                    value={this.state.ContractStatu}
                    onChange={this.onContractStatuChanged}
                  >
                    <option value="">不限</option>
                    <option value="3">合同已审</option>
                    <option value="2">律师审批</option>
                    <option value="1">审价中心</option>
                    <option value="-1,-2">已驳回</option>
                    <option value="-4">已取消</option>
                  </select>
                </div>
              </div>
              <div className="ms-Grid-row">
                <div
                  className="ms-Grid-col ms-sm6 ms-md4 ms-lg1"
                  style={{ paddingLeft: "10px", minWidth: "80px" }}
                >
                  合同名称
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
                  <input
                    type="text"
                    value={
                      this.state.ContractTitle ? this.state.ContractTitle : ""
                    }
                    ref={c => (this.ContractTitle = c)}
                    onChange={this.onContractTitleChanged}
                  />
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">合同编号</div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
                  <input
                    type="text"
                    ref={c => (this.ContractNo = c)}
                    value={this.state.ContractNo ? this.state.ContractNo : ""}
                    onChange={this.onContractNoChanged}
                  />
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">货币单位</div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                  <select
                    ref={c => (this.ContractCurrencies = c)}
                    value={this.state.ContractCurrency}
                    onChange={this.onContractCurrencyChanged}
                  >
                    <option value="">不限</option>
                    <option value="RMB">RMB</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="N/A">N/A</option>
                  </select>
                </div>
              </div>
              <div className="ms-Grid-row">
                <div
                  className="ms-Grid-col ms-sm6 ms-md3 ms-lg1"
                  style={{ paddingLeft: "10px", minWidth: "80px" }}
                >
                  合同相对方
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md3 ms-lg3">
                  <input
                    type="text"
                    ref={c => (this.RelativePartyinput = c)}
                    value={
                      this.state.RelativeParty ? this.state.RelativeParty : ""
                    }
                    onChange={this.onRelativePartyChanged}
                  />
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">金额</div>
                <div
                  className="ms-Grid-col ms-sm6 ms-md4 ms-lg1"
                  style={{ width: "74px" }}
                >
                  <input
                    ref={c => (this.MinMoneyInput = c)}
                    type="number"
                    value={this.state.minMoney ? this.state.minMoney : ""}
                    onChange={this.setMinMoney}
                    placeholder="最小值"
                    style={{ maxWidth: "65px", height: "26px" }}
                  />
                </div>
                <div
                  className="ms-Grid-col ms-sm6 ms-md4 ms-lg1"
                  style={{ textAlign: "center", maxWidth: "10px" }}
                >
                  -
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">
                  <input
                    ref={c => (this.MaxMoneyInput = c)}
                    type="number"
                    value={this.state.maxMoney ? this.state.maxMoney : ""}
                    onChange={this.setMaxMoney}
                    placeholder="最大值"
                    style={{ maxWidth: "65px", height: "26px" }}
                  />
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">所属部门</div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">
                  <select
                    ref={c => (this.ContractDepts = c)}
                    value={this.state.curDeptId}
                    onChange={this.onContractDeptChanged}
                    style={{ maxWidth: "97%" }}
                  >
                    <option value="">不限</option>
                    {this.state.StatffDepts.map(item => {
                      return <option value={item.Id}>{item.Title}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="ms-Grid-row">
                <div
                  className="ms-Grid-col ms-sm6 ms-md4 ms-lg1"
                  style={{ paddingLeft: "10px", minWidth: "80px" }}
                >
                  创建时间
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg2">
                  <DatePicker
                    firstDayOfWeek={DayOfWeek.Sunday}
                    strings={DayPickerStrings}
                    placeholder="最小值"
                    label=""
                    isRequired={false}
                    allowTextInput={true}
                    formatDate={this._formatDate}
                    // tslint:disable:jsx-no-lambda
                    onAfterMenuDismiss={() =>
                      console.log("onAfterMenuDismiss called")
                    }
                    onSelectDate={this._setMinDate}
                    value={
                      this.state.ContractMinDate
                        ? moment(
                            this.state.ContractMinDate,
                            moment.ISO_8601
                          ).toDate()
                        : null
                    }
                  />
                </div>
                <div
                  className="ms-Grid-col ms-sm6 ms-md4 ms-lg1"
                  style={{ textAlign: "center", maxWidth: "20px" }}
                >
                  -
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg2">
                  <DatePicker
                    firstDayOfWeek={DayOfWeek.Sunday}
                    strings={DayPickerStrings}
                    placeholder="最大值"
                    isRequired={false}
                    allowTextInput={true}
                    formatDate={this._formatDate}
                    // tslint:disable:jsx-no-lambda
                    onAfterMenuDismiss={() =>
                      console.log("onAfterMenuDismiss called")
                    }
                    onSelectDate={this._setMaxDate}
                    value={
                      this.state.ContractMaxDate
                        ? moment(
                            this.state.ContractMaxDate,
                            moment.ISO_8601
                          ).toDate()
                        : null
                    }
                  />
                </div>
                <div
                  className="ms-Grid-col ms-sm6 ms-md4 ms-lg1"
                  style={{ marginTop: "0px", textAlign: "center" }}
                >
                  申请人
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg5">
                  <OfficeUiFabricPeoplePickerContainer
                    principalTypeUser={true}
                    principalTypeSharePointGroup={false}
                    principalTypeSecurityGroup={false}
                    principalTypeDistributionList={false}
                    itemLimit={1}
                    maximumEntitySuggestions={5}
                    onChange={this.onAuthorChanged}
                    selections={this.state.Author ? this.state.Author : []}
                  />
                </div>
              </div>

              <div className="ms-Grid-row">
                <div
                  className="ms-Grid-col ms-sm12 ms-md12 ms-lg12"
                  style={{
                    textAlign: "right",
                    marginTop: "10px",
                    paddingRight: "40px"
                  }}
                >
                  <Button
                    onClick={() => {
                      this.Search();
                    }}
                  >
                    查询
                  </Button>
                  &nbsp;
                  <Button
                    onClick={() => {
                      this.setState(
                        {
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
                        },
                        () => {
                          this.Search();
                        }
                      );
                    }}
                  >
                    重置
                  </Button>
                  &nbsp;
                  <Button
                    onClick={() => {
                      this.exportDatas();
                    }}
                  >
                    导出
                  </Button>
                </div>
              </div>
            </div>
          </fieldset>

          <UxpList
            data={this.state.requestedItems}
            schemaFields={requestedItemsListFields}
            selectionMode={SelectionMode.none}
            onRenderItemColumn={this._onRenderItemColumn}
            onItemInvoked={this._ItemInvoked}
            label={""}
            ishiddenNewButton={true}
            hiddenFields={[
              "lawyerId",
              "AuthorId",
              "status",
              "Id",
              "AuthorTitle"
            ]}
          />
          <Pagination
            currentPage={this.state.current}
            totalPages={this.state.total}
            onChange={this._getpageditems}
          />
        </div>
      </div>
    );
  }
  private _onRenderItemColumn(
    item: any,
    index: number,
    column: IColumn
  ): JSX.Element {
    // console.log(item,index,column);
    if (column.columnActionsMode === ColumnActionsMode.clickable) {
      return (
        <Link
          data-selection-invoke={true}
          href={`${WebConfig.NewContractPage}?request=${item.Id}`}
        >
          {item[column.fieldName]}
        </Link>
      );
    }

    return item[column.fieldName];
  }
  private _ItemInvoked(item?: any, index?: number, ev?: Event): void {
    const Id: number = this.state.requestedItems[index].Id;
    window.location.href = `${WebConfig.NewContractPage}?request=${Id}`;
  }
  public componentDidMount(): void {
    sp.web.currentUser.get().then(result => {
      // console.log(result);

      const odd: ODataDefaultParser = new ODataDefaultParser();
      let tweb: Web = new Web("/", `_vti_bin/listdata.svc/`);
      const header: HeadersInit = {
        Accept: "application/json;odata=verbose,text/plain"
      };
      tweb.get(odd, header).then(o => {
        //console.log((o.EntitySets as any[]).lastIndexOf("网站页面"));
        let language: number =
          (o.EntitySets as any[]).lastIndexOf("网站页面") > 0 ? 1 : 0;
        this.setState({ curUser: result, fieldNames: language }, () => {
          sp.web.lists
            .getByTitle(WebConfig.contractTypeListName)
            .items.getAll()
            .then(items => {
              let cttypes: any[] = [];
              let ctmainbodys: any[] = [];
              let ctstaffdepts: any[] = [];
              items.map(item => {
                cttypes.push({ Id: item.Id, Title: item.Title });
              });
              sp.web.lists
                .getByTitle(WebConfig.subjectsListName)
                .items.getAll()
                .then(sbjs => {
                  sbjs.map(sbj => {
                    ctmainbodys.push({ Title: sbj.Title });
                  });

                  sp.web.lists
                    .getByTitle(WebConfig.DeptsListName)
                    .items.getAll()
                    .then(depts => {
                      depts.map(dpt => {
                        ctstaffdepts.push({ Id: dpt.Id, Title: dpt.Title });
                      });
                      this.setState({
                        contractTypes: cttypes,
                        ContractMainBodies: ctmainbodys,
                        StatffDepts: ctstaffdepts
                      });
                    });
                });
            });
          this.Search();
          // } else {
          //  alert("您没有操作权限");
          //  document.location.href = WebConfig.CreatedByMeListPage;
          // }
        });
      });
    });
  }
  private colNames: string[] = [
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
  private colKeys: string[] = [
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
  @autobind
  public getDatas(): void {
    const odd: ODataDefaultParser = new ODataDefaultParser();
    let tweb: Web = new Web(
      "/",
      `_vti_bin/listdata.svc/${
        WebConfig.requestedItemsListName
      }/$count?$filter=${this.state.filterCountstr}`
    );
    const header: HeadersInit = {
      Accept: "application/json;odata=verbose,text/plain"
    };
    tweb.get(odd, { headers: header }).then(result => {
      // console.log(result);
      let ret: number = parseInt(result, 10);
      this.setState({
        total:
          isNaN(ret) || ret === 0
            ? 1
            : Math.floor((ret + this.state.pageSize - 1) / this.state.pageSize)
      });
      this.setState({ current: 1 }, () => {
        this._getpageditems(1);
      });
    });
  }
  private _formatDate(datevale: Date): string {
    return datevale.toLocaleDateString();
  }
  public getFilterStr(CallBack: Function): void {
    let filterCountstr: string = "Status ne '0'";
    let filterStr: string = "status ne '0'";
    if (this.state.ContractType && this.state.ContractType.trim() !== "") {
      filterStr += " and ContractTypeId eq " + this.state.ContractType;
      filterCountstr += " and ContractTypeId eq " + this.state.ContractType;
    }
    if (this.state.ContractStatu && this.state.ContractStatu.trim() !== "") {
      filterCountstr += " and ";
      filterStr += " and ";
      let statuss: string[] = this.state.ContractStatu.split(",");
      if (statuss.length > 1) {
        let allStatus: string = statuss
          .map(stu => {
            return "Status eq '" + stu + "'";
          })
          .join(" or ");
        filterCountstr += "(" + allStatus + ") ";
        filterStr += "(" + allStatus.toLowerCase() + ") ";
      } else {
        filterCountstr += " Status eq '" + this.state.ContractStatu + "' ";
        filterStr += " status eq '" + this.state.ContractStatu + "' ";
      }
    }
    if (
      this.state.ContractMainBody &&
      this.state.ContractMainBody.trim() !== ""
    ) {
      let mbody: string = this.state.ContractMainBody.trim();
      filterCountstr += " and Mainbody eq '" + mbody + "' ";
      filterStr += " and  mainbody eq '" + mbody + "' ";
    }
    if (this.state.curDeptId && this.state.curDeptId.trim() !== "") {
      filterCountstr += " and StaffDeptId eq " + this.state.curDeptId + " ";
      filterStr += " and  StaffDeptId eq " + this.state.curDeptId + " ";
    }
    if (this.state.RelativeParty && this.state.RelativeParty.trim() !== "") {
      let mbody: string = encodeURIComponent(this.state.RelativeParty.trim());
      filterCountstr += " and RelativeParty eq '" + mbody + "' ";
      filterStr += " and RelativeParty eq '" + mbody + "' ";
    }
    if (this.state.ContractTitle && this.state.ContractTitle.trim() !== "") {
      let title: string = encodeURIComponent(this.state.ContractTitle.trim());
      filterCountstr += " and substringof('" + title + "',Title) ";
      filterStr += " and substringof('" + title + "',Title) ";
    }
    if (this.state.ContractNo && this.state.ContractNo.trim() !== "") {
      let title: string = this.state.ContractNo.trim();
      filterCountstr += " and substringof('" + title + "',ContractNo) ";
      filterStr += " and substringof('" + title + "',ContractNo) ";
    }
    if (
      this.state.ContractCurrency &&
      this.state.ContractCurrency.trim() !== ""
    ) {
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
      let maxDay: Date = new Date(this.state.ContractMaxDate.getTime());
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
    this.setState(
      { current: 1, filterCountstr: filterCountstr, filterstr: filterStr },
      () => {
        CallBack();
      }
    );
  }
  @autobind
  public Search(): void {
    this.getFilterStr(this.getDatas);
  }
  @autobind
  public exportDatas(): void {
    this.getFilterStr(this._exportDatas);
  }
  @autobind
  public _exportDatas(): void {
    let expItems: any[] = [];
    let attfinfos: any[] = [];
    expItems.push(this.colNames);
    sp.web.lists
      .getByTitle(WebConfig.requestedItemsListName)
      .items.filter(`${this.state.filterstr}`)
      .select(
        "*",
        "AttachmentFiles",
        "ContractType/Title",
        "representative/Title",
        "Author/Title",
        "pricingcenter/Title",
        "lawyer/Title"
      )
      .expand(
        "AttachmentFiles",
        "ContractType",
        "representative/Id",
        "Author",
        "pricingcenter",
        "lawyer"
      )
      .orderBy("Id", false)
      .top(2000)
      .getPaged()
      .then(items => {
        this.fillDatas(items, expItems, attfinfos);
        this._pagedItemsToExcel(items, expItems, attfinfos);
      });
  }
  @autobind
  private onContractTypeChanged(e: any): void {
    // console.log(this.ContractTypes.value);
    this.setState({ ContractType: this.ContractTypes.value });
  }
  @autobind
  private onRelativePartyChanged(e: any): void {
    this.setState({ RelativeParty: this.RelativePartyinput.value.trim() });
  }
  @autobind
  private onContractDeptChanged(e: any): void {
    this.setState({ curDeptId: this.ContractDepts.value.trim() });
  }
  @autobind
  private onContractStatuChanged(e: any): void {
    this.setState({ ContractStatu: this.ContractStatus.value });
  }
  @autobind
  private onContractMainBodyChanged(e: any): void {
    this.setState({ ContractMainBody: this.ContractMainBodies.value });
  }
  @autobind
  private onContractTitleChanged(e: any): void {
    this.setState({ ContractTitle: this.ContractTitle.value });
  }
  @autobind
  private onContractNoChanged(e: any): void {
    this.setState({ ContractNo: this.ContractNo.value });
  }
  @autobind
  private onContractCurrencyChanged(e: any): void {
    this.setState({ ContractCurrency: this.ContractCurrencies.value });
  }
  @autobind
  private setMinMoney(e: any): void {
    if (isNaN(parseFloat(this.MinMoneyInput.value))) {
      //  this.setState({ minMoney: "" });
      if (this.MinMoneyInput.value.trim() === "") {
        this.setState({ minMoney: "" });
      }
    } else {
      this.setState({ minMoney: this.MinMoneyInput.value });
    }
  }
  @autobind
  private setMaxMoney(e: any): void {
    // console.log(e);
    if (isNaN(parseFloat(this.MaxMoneyInput.value))) {
      //  this.setState({ maxMoney: "" });
      if (this.MaxMoneyInput.value.trim() === "") {
        this.setState({ maxMoney: "" });
      }
    } else {
      this.setState({ maxMoney: this.MaxMoneyInput.value });
    }
  }
  @autobind
  private _setMinDate(value: Date): void {
    this.setState({ ContractMinDate: value });
  }
  @autobind
  private _setMaxDate(value: Date): void {
    this.setState({ ContractMaxDate: value });
  }
  @autobind
  private onAuthorChanged(
    authors?: IOfficeUiFabricPeoplePickerSelection[]
  ): void {
    this.setState({ Author: authors });
  }
  private _pagedItemsTo(
    PgItems: PagedItemCollection<any>,
    targetPage: number,
    PgNum: number
  ): void {
    PgNum--;
    if (PgNum > 0 && PgItems.hasNext) {
      PgItems.getNext().then(item => {
        this._pagedItemsTo(item, targetPage, PgNum);
      });
      return;
    }

    let data: any[] = PgItems.results.map(item => {
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
        signingDate:
          item.signingDate && (item.signingDate + "").length > 6
            ? moment(item.signingDate, moment.ISO_8601).format("YYYY/MM/DD")
            : "",
        AttachmentFiles: item.AttachmentFiles.map(fileinfo => {
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
  }

  private _pagedItemsToExcel(
    PgItems: PagedItemCollection<any>,
    expItems: any[],
    attfinfos: any[]
  ): void {
    if (PgItems.hasNext) {
      PgItems.getNext().then(items => {
        this.fillDatas(items, expItems, attfinfos);
      });
      return;
    }
    let T: Date = new Date();
    let ws_name: string =
      "合同申请表" + T.getFullYear() + (T.getMonth() + 1) + T.getDate();
    // if(typeof console !== 'undefined') console.log(new Date());
    let wb: XLSX.WorkBook = XLSX.utils.book_new();
    let ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(expItems);
    for (let r: number = 0; r < expItems.length - 1; r++) {
      attfinfos[r].map((att, index) => {
        let celName: string =
          XLSX.utils.encode_col(this.colKeys.length - 1 + index) + (r + 2);
        //  console.log(celName);
        if (ws[celName]) {
          ws[celName].l = att;
        }
      });
    }
    /* add worksheet to workbook */
    XLSX.utils.book_append_sheet(wb, ws, ws_name);
    /* write workbook */
    // if(typeof console !== 'undefined') console.log(new Date());
    let filename: string = "合同申请表_.xlsx";
    XLSX.writeFile(wb, GetFileRandName(filename));
    this.getDatas();
  }
  private _fillreqdata(req: Items, page: number): void {
    req.getPaged().then(reqbody => {
      // console.log(reqbody);
      this._pagedItemsTo(reqbody, page, page);
    });
  }

  private fillDatas(
    items: PagedItemCollection<any>,
    expItems: any[],
    attfinfos: any[]
  ): void {
    items.results.map(curitem => {
      let rowdatas: any[] = [];
      let rowatts: any[] = [];
      for (let i: number = 0; i < this.colKeys.length; i++) {
        if (this.colKeys[i] === "AttachmentFiles") {
          // console.log(curitem[this.colKeys[i]]);
          curitem[this.colKeys[i]].map((attf, index) => {
            rowatts.push({
              Target: WebConfig.hosturl + attf.ServerRelativeUrl,
              Tooltip: attf.FileName
            });
            // return attf.FileName;
            rowdatas[i + index] = attf.FileName;
          });
        } else if (this.colKeys[i] === "state") {
          rowdatas[i] = statusDesc[curitem.status];
        } else if (this.colKeys[i].indexOf("/") > 0) {
          if (
            curitem.NeedApproval === false &&
            this.colKeys[i] === "pricingcenter/Title"
          ) {
            rowdatas[i] = "";
          } else {
            let fields: string[] = this.colKeys[i].split("/");
            let tempObj: any = curitem[fields[0]];
            rowdatas[i] = tempObj ? tempObj[fields[1]] : "";
          }
        } else if (this.colKeys[i] === "NeedApproval") {
          rowdatas[i] = curitem.NeedApproval === false ? "否" : "是";
        } else if (
          this.colKeys[i] === "Created" ||
          this.colKeys[i] === "signingDate"
        ) {
          if (curitem[this.colKeys[i]] && curitem[this.colKeys[i]].length > 6) {
            rowdatas[i] = moment(
              curitem[this.colKeys[i]],
              moment.ISO_8601
            ).format("YYYY/MM/DD");
          } else {
            rowdatas[i] = "";
          }
        } else {
          rowdatas[i] = curitem[this.colKeys[i]];
        }
      }
      expItems.push(rowdatas);
      attfinfos.push(rowatts);
    });
  }

  @autobind
  private _getpageditems(page: number): void {
    // console.log(page);
    let filterstr: string = this.state.filterstr;
    let req: Items = sp.web.lists
      .getByTitle(WebConfig.requestedItemsListName)
      .items.filter(`${filterstr}`)
      .select(
        "*",
        "AttachmentFiles",
        "ContractType/Title",
        "representative/Title",
        "Author/Title",
        "pricingcenter/Title",
        "lawyer/Title"
      )
      .expand(
        "AttachmentFiles",
        "ContractType",
        "representative/Id",
        "Author",
        "pricingcenter",
        "lawyer"
      )
      .orderBy("Id", false);

    req = req.top(this.state.pageSize);

    this._fillreqdata(req, page);
  }
}
