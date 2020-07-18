import * as React from "react";
import styles from "./ContractList.module.scss";
import { IContractListProps } from "./IContractListProps";
import UxpList from "../../ComComponents/UxpList/UxpList";
import { IContractListState } from "./IContractListState";
import { sp, Items, Web, PagedItemCollection } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { IColumnField } from "../../ComComponents/interfaces/IColumnField";
import Pagination from "office-ui-fabric-react-pagination";
import { Ipageditems } from "../../ComComponents/interfaces/Ipageditems";
import { statusDesc } from "../../ComComponents/interfaces/IItem";
import { WebConfig } from "../../ComComponents/webconfig";
import { ODataDefaultParser, ODataParser } from "@pnp/odata";
import * as moment from "moment";
import "moment/locale/zh-cn";
import { FieldNames } from "../../ComComponents/comutil";
import { PivotItem, Pivot } from "office-ui-fabric-react/lib/Pivot";
import { SelectionMode, IColumn } from "office-ui-fabric-react/lib/DetailsList";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import { Link } from "office-ui-fabric-react/lib/Link";
// import { injectCss } from "../../ComComponents/comutil";

import * as objectAssign from "object-assign";
export default class ContractList extends React.Component<
  IContractListProps,
  IContractListState
> {
  private Provtitem1: PivotItem;
  constructor(props: any) {
    super(props);
    this.state = {
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
        ] as IColumnField[],
        total: 1,
        requestedItems: []
      },
      list2: {
        current: 1,
        requestedItemsListFields: [] as IColumnField[],
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
    // injectCss();
  }
  public render(): React.ReactElement<IContractListProps> {
    return (
      <div className={styles.contractList}>
        <div className={styles.container}>
          <Pivot onLinkClick={this._listchanged}>
            <PivotItem
              ref={el => (this.Provtitem1 = el)}
              linkText="我的合同申请"
              itemCount={this.state.total0}
              itemKey="1"
              itemIcon="Emoji2"
            />
            <PivotItem
              linkText="审批中的"
              itemCount={this.state.total1}
              itemKey="2"
              itemIcon="Emoji2"
            />
            <PivotItem
              linkText="草稿、退回或取消的"
              itemCount={this.state.total2}
              itemKey="3"
              itemIcon="Emoji2"
            />
            <PivotItem
              linkText="已通过的"
              itemCount={this.state.total3}
              itemKey="4"
              itemIcon="Emoji2"
            />
            {this.state.user &&
            this.state.user.DeptId &&
            this.state.user.DeptId > 0 ? (
              <PivotItem
                linkText="本部门的合同"
                itemCount={this.state.total4}
                itemKey="5"
                itemIcon="Emoji2"
              />
            ) : (
              ""
            )}
          </Pivot>
          <UxpList
            data={this.state.list2.requestedItems}
            schemaFields={
              this.state.tabindex === 4
                ? this.state.list1.requestedItemsListFields
                : ([
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
                  ] as IColumnField[])
            }
            onItemInvoked={this._openRequestForm}
            onRenderItemColumn={this._onRenderItemColumn}
            onNewButtonClicked={this._NewRequestForm}
            onEditButtonClicked={this._openRequestForm}
            selectionMode={SelectionMode.none}
            label={""}
            refreshtime={this.state.refreshtime}
            hiddenFields={["Id"]}
          />
          <Pagination
            currentPage={this.state.list2.current}
            totalPages={this.state.list2.total}
            onChange={this.handlePaginatorChange2}
          />
        </div>
      </div>
    );
  }
  @autobind
  private _openRequestForm(item: any, index: number): void {
    window.location.href = `${WebConfig.NewContractPage}?request=${item.Id}`;
  }
  @autobind
  private _NewRequestForm(): void {
    window.location.href = WebConfig.NewContractPage;
  }

  @autobind
  private handlePaginatorChange2(active: number): void {
    // console.log("当前页码：%s", active);
    this._getpageditems2(active);
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
        sp.web.lists
          .getByTitle(WebConfig.StaffDeptListName)
          .items.filter("StaffId eq " + result.Id)
          .get()
          .then(stfs => {
            // console.log(stfs);
            if (stfs.length > 0) {
              result.DeptId = stfs[0].DeptId;
            }
            this.setState({ user: result, fieldNames: language }, () => {
              //this._listchanged(this.Provtitem1);
              //  console.log(this.state.user);
              this._changtab("1");
            });
          });
      });
    });
  }
  private _onRenderItemColumn(
    item: any,
    index: number,
    column: IColumn
  ): JSX.Element {
    if (column.fieldName === "requestNo") {
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

  @autobind
  private _getpageditems2(page: number): void {
    let pgdata: Ipageditems = {} as Ipageditems;
    let filterstr: string = this.state.filterstr;

    if (filterstr.indexOf("StaffDeptId") >= 0) {
      filterstr = " and " + filterstr;
    } else if (filterstr.trim() === "") {
      filterstr = " and AuthorId eq " + this.state.user.Id; //+ " and " + filterstr;
    } else {
      filterstr =
        " and AuthorId eq " + this.state.user.Id + " and " + filterstr;
    }

    objectAssign(pgdata, this.state.list2);
    let req: Items = sp.web.lists
      .getByTitle(WebConfig.requestedItemsListName)
      .items.filter(` status ne '-90' ${filterstr}`)
      .select(
        "*",
        "AttachmentFiles",
        "ContractType/Title",
        "representative/Title",
        "Author/Title"
      )
      .expand("AttachmentFiles", "ContractType", "representative/Id", "Author")
      .orderBy("Id", false);

    req = req.top(this.props.pageSize);

    this._fillreqdata2(req, page, pgdata);
  }
  @autobind
  private _changtab(itemKey: string): void {
    // console.log(item.props.itemKey);
    let filterstr: string = "";
    let tabindex: number = 0;

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
        } else {
          filterstr = "(StaffDeptId eq -1)";
        }
        break;
    }
    const odd: ODataDefaultParser = new ODataDefaultParser();
    let tweb: Web = new Web(
      "/",
      `_vti_bin/listdata.svc/${
        WebConfig.requestedItemsListName
      }/$count?&$filter=${FieldNames[this.state.fieldNames].AuthorId}  eq ${
        this.state.user.Id
      } `
    );
    const header: HeadersInit = {
      Accept: "application/json;odata=verbose,text/plain"
    };
    tweb.get(odd, { headers: header }).then(result => {
      // console.log(result);
      let ret: number = parseInt(result, 10);
      this.setState(
        {
          total0: isNaN(ret) ? 0 : ret,
          filterstr: filterstr,
          tabindex: tabindex
        },
        () => {
          this._getpageditems2(1);
        }
      );
    });
    tweb = new Web(
      "/",
      `_vti_bin/listdata.svc/${
        WebConfig.requestedItemsListName
      }/$count?&$filter=${FieldNames[this.state.fieldNames].AuthorId} eq ${
        this.state.user.Id
      } and (Status eq '1' or Status eq '2' ) `
    );
    tweb.get(odd, { headers: header }).then(result => {
      let ret: number = parseInt(result, 10);
      this.setState({ total1: isNaN(ret) ? 0 : ret });
    });
    tweb = new Web(
      "/",
      `_vti_bin/listdata.svc/${
        WebConfig.requestedItemsListName
      }/$count?&$filter=${FieldNames[this.state.fieldNames].AuthorId} eq ${
        this.state.user.Id
      } and ( Status eq '-1' or Status eq '0' or Status eq '-2' or Status eq '-4') `
    );
    tweb.get(odd, { headers: header }).then(result => {
      let ret: number = parseInt(result, 10);
      this.setState({ total2: isNaN(ret) ? 0 : ret });
    });
    tweb = new Web(
      "/",
      `_vti_bin/listdata.svc/${
        WebConfig.requestedItemsListName
      }/$count?&$filter=${FieldNames[this.state.fieldNames].AuthorId} eq ${
        this.state.user.Id
      } and (Status eq '3' ) `
    );
    tweb.get(odd, { headers: header }).then(result => {
      let ret: number = parseInt(result, 10);
      this.setState({ total3: isNaN(ret) ? 0 : ret });
    });
    if (this.state.user.DeptId && this.state.user.DeptId > 0) {
      tweb = new Web(
        "/",
        `_vti_bin/listdata.svc/${
          WebConfig.requestedItemsListName
        }/$count?&$filter=(Status eq '1' or Status eq '2' or Status eq '3')  and StaffDeptId eq ${
          this.state.user.DeptId
        }`
      );
      tweb.get(odd, { headers: header }).then(result => {
        let ret: number = parseInt(result, 10);
        this.setState({ total4: isNaN(ret) ? 0 : ret });
      });
    } else {
      this.setState({ total4: 0 });
    }
  }
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
  @autobind
  private _listchanged(
    item?: PivotItem,
    ev?: React.MouseEvent<HTMLElement>
  ): void {
    this._changtab(item.props.itemKey);
  }
  private _fillreqdata2(req: Items, page: number, pgdata: Ipageditems): void {
    req.getPaged().then(reqbody => {
      this._pagedItemsTo(reqbody, page, page, pgdata);
    });
  }
  private _pagedItemsTo(
    PgItems: PagedItemCollection<any>,
    targetPage: number,
    PgNum: number,
    pgdata: Ipageditems
  ): void {
    PgNum--;
    if (PgNum > 0) {
      PgItems.getNext().then(item => {
        this._pagedItemsTo(item, targetPage, PgNum, pgdata);
      });
      return;
    }

    let data: any[] = PgItems.results.map(item => {
      return {
        requestNo: item.requestNo,
        prestate: this._getprestatus(item),
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
        AttachmentFiles: item.AttachmentFiles.map(fileinfo => {
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
        pgdata.total = Math.floor(
          (this.state.total0 + this.props.pageSize - 1) / this.props.pageSize
        );
        break;
      case 1:
        pgdata.total = Math.floor(
          (this.state.total1 + this.props.pageSize - 1) / this.props.pageSize
        );
        break;
      case 2:
        pgdata.total = Math.floor(
          (this.state.total2 + this.props.pageSize - 1) / this.props.pageSize
        );
        break;
      case 3:
        pgdata.total = Math.floor(
          (this.state.total3 + this.props.pageSize - 1) / this.props.pageSize
        );
        break;
      case 4:
        pgdata.total = Math.floor(
          (this.state.total4 + this.props.pageSize - 1) / this.props.pageSize
        );
        break;
    }
    if (pgdata.current > pgdata.total) {
      pgdata.current = pgdata.total;
    }
    // console.log(this.state.tabindex, pgdata);
    this.setState({ list2: pgdata, refreshtime: new Date().toString() });
  }
  private _getprestatus(data: any): string {
    const curstate: string = data.status;
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
  }
}
