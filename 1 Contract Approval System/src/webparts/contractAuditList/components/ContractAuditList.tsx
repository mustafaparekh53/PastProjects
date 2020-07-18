import * as React from "react";
import styles from "./ContractAuditList.module.scss";
import { IContractAuditListProps } from "./IContractAuditListProps";
import UxpList from "../../ComComponents/UxpList/UxpList";
import { IAuditListState } from "./IAuditListState";
import { sp, Items, Web } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { IColumnField } from "../../ComComponents/interfaces/IColumnField";
import { autobind } from "@uifabric/utilities";
import { Ipageditems } from "../../ComComponents/interfaces/Ipageditems";
import { WebConfig, CurrentUrl } from "../../ComComponents/webconfig";
import { statusDesc } from "../../ComComponents/interfaces/IItem";
import { AuditItems } from "./AuditItems";
import { EmailUtil } from "../../ComComponents/Email/EmailUtil";
import { String } from "typescript-string-operations";
import Modal from "office-ui-fabric-react/lib/Modal";
import { ODataDefaultParser } from "@pnp/odata";
import {
  ColumnActionsMode,
  SelectionMode,
  IColumn
} from "office-ui-fabric-react/lib/DetailsList";
import { Pivot, PivotItem } from "office-ui-fabric-react/lib/Pivot";
import { Link } from "office-ui-fabric-react/lib/Link";
import * as objectAssign from "object-assign";
export default class ContractAuditList extends React.Component<
  IContractAuditListProps,
  IAuditListState
> {
  constructor(props: any) {
    super(props);
    this.state = {
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
        ] as IColumnField[],
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
        ] as IColumnField[],
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
        ] as IColumnField[],
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
    // injectCss();
  }

  public render(): React.ReactElement<IContractAuditListProps> {
    return (
      <div className={styles.contractAuditList}>
        <div className={styles.container}>
          <Pivot onLinkClick={this._listchanged}>
            <PivotItem
              linkText="待我审批的合同"
              itemCount={this.state.list2.total}
              itemKey="2"
              itemIcon="Emoji2"
            >
              <UxpList
                data={this.state.list2.requestedItems}
                schemaFields={this.state.list2.requestedItemsListFields}
                selectionMode={SelectionMode.multiple}
                onRenderItemColumn={this._onRenderItemColumn}
                onItemInvoked={this._ItemInvoked2}
                onMultEditClicked={this._openRequestForm}
                editButtonTitle={"批量审批"}
                newButtonTitle={"审批"}
                label={""}
                onSelectedChanged={this._onSelectedChanged}
                onNewButtonClicked={this._toaudit}
                ishiddenNewButton={true}
                hiddenFields={[
                  "lawyerId",
                  "AuthorId",
                  "status",
                  "Id",
                  "applog",
                  "AuthorTitle"
                ]}
              />
            </PivotItem>

            <PivotItem
              linkText="其他待审批的合同"
              itemCount={this.state.list1.total}
              itemKey="1"
              itemIcon="Emoji2"
            >
              {" "}
              <UxpList
                data={this.state.list1.requestedItems}
                schemaFields={this.state.list1.requestedItemsListFields}
                selectionMode={SelectionMode.none}
                onRenderItemColumn={this._onRenderItemColumn}
                onItemInvoked={this._ItemInvoked1}
                hiddenFields={[
                  "lawyerId",
                  "AuthorId",
                  "status",
                  "Id",
                  "AuthorTitle"
                ]}
                label={``}
              />
            </PivotItem>
            <PivotItem
              linkText="我审批过的合同"
              itemCount={this.state.list3.total}
              itemKey="3"
              itemIcon="Emoji2"
            >
              <UxpList
                data={this.state.list3.requestedItems}
                schemaFields={this.state.list3.requestedItemsListFields}
                selectionMode={SelectionMode.none}
                onRenderItemColumn={this._onRenderItemColumn3}
                onItemInvoked={this._ItemInvoked3}
                hiddenFields={[
                  "lawyerId",
                  "AuthorId",
                  "status",
                  "Id",
                  "AuthorTitle"
                ]}
                label={``}
              />
            </PivotItem>
          </Pivot>

          <Modal
            isOpen={this.state.showModal}
            onDismiss={this._closeModal}
            isBlocking={true}
            containerClassName="ms-modalExample-container"
          >
            <div className="ms-modalExample-header">
              <span>批量审批</span>
              <i
                className="ms-Icon ms-Icon--BoxMultiplySolid x-hidden-focus close"
                onClick={this._closeModal}
              />
            </div>
            <AuditItems
              {...this.props}
              curUser={this.state.curUser}
              onUpdatedItem={this._setItemResult}
              curItems={this.state.curItems}
              isLaywer={this.state.isWaitforLaywer}
            />
          </Modal>
        </div>
      </div>
    );
  }

  public componentDidMount(): void {
    sp.web.currentUser.get().then(result => {
      // console.log(result);
      this.setState({ curUser: result });
      sp.web.lists
        .getByTitle(WebConfig.contractTypeListName)
        .items.orderBy("Id")
        .get()
        .then(configs => {
          let conditions: string = "";
          let condition_laywer: string = ""; // "status eq '2' ";
          let condition_price: string = ""; // "status eq '1' ";
          let isLaywer: number = -1;

          configs.map(confg => {
            if (
              isLaywer < 1 &&
              ((confg.pricecenterId && confg.pricecenterId === result.Id) ||
                (confg.otherpricecentersId &&
                  confg.otherpricecentersId.indexOf(result.Id) >= 0))
            ) {
              isLaywer = 0; // 只记录审价条件
              if (
                confg.otherpricecentersId &&
                confg.otherpricecentersId.indexOf(result.Id) >= 0
              ) {
                condition_price =
                  condition_price === ""
                    ? `(ContractTypeId eq ${confg.Id}`
                    : `${condition_price} or ContractTypeId eq ${confg.Id}`;
              }
            }
            if (
              (isLaywer === -1 || isLaywer === 1) &&
              ((confg.lawyerId && confg.lawyerId === result.Id) ||
                (confg.otherlawyersId &&
                  confg.otherlawyersId.indexOf(result.Id) >= 0))
            ) {
              isLaywer = 1;
              if (
                confg.otherlawyersId &&
                confg.otherlawyersId.indexOf(result.Id) >= 0
              ) {
                condition_laywer =
                  condition_laywer === ""
                    ? `(ContractTypeId eq ${confg.Id}`
                    : `${condition_laywer} or ContractTypeId eq ${confg.Id}`;
              }
            }
          });
          conditions =
            isLaywer === -1
              ? " status eq '9' "
              : isLaywer === 0
                ? condition_price === ""
                  ? `status eq '1'`
                  : `status eq '1' and ${condition_price}`
                : condition_laywer === ""
                  ? `status eq '2'`
                  : `status eq '2' and ${condition_laywer}`;
          const odd: ODataDefaultParser = new ODataDefaultParser();
          let tweb: Web = new Web(
            "/",
            `_vti_bin/listdata.svc/${
              WebConfig.requestedItemsListName
            }/$count?&$filter=${conditions.replace(/status/g, "Status")}`
          );
          const header: HeadersInit = {
            Accept: "application/json;odata=verbose,text/plain"
          };
          tweb.get(odd, { headers: header }).then(result2 => {
            // console.log(result);
            let ret: number = parseInt(result2, 10);
            let pgdata: Ipageditems = {} as Ipageditems;
            objectAssign(pgdata, this.state.list1);
            pgdata.total = isNaN(ret) ? 0 : ret;
            this.setState(
              { user: result, list1: pgdata, QueryConditions: conditions },
              () => {
                this._loaddatasbyme();
              }
            );
          })
          .catch((error: any) => {
            console.log(error);
          });

          tweb = new Web(
            "/",
            `_vti_bin/listdata.svc/${
              WebConfig.requestedItemsListName
            }/$count?&$filter=substringof(',${this.state.curUser.Id},',Applog)`
          );
          // tslint:disable-next-line:no-shadowed-variable
          tweb.get(odd, { headers: header }).then(result => {
            // console.log(result);
            let pgdata: Ipageditems = {} as Ipageditems;
            objectAssign(pgdata, this.state.list3);
            if (result != null) {
              let ret: number = parseInt(result, 10);
              pgdata.total = ret;
            } else {
              pgdata.total = 0;
            }
            this.setState({ list3: pgdata });
          })
          .catch((error: any) => {
            console.log(error);
          });
        });
    });
  }
  private _loaddatasbyme(): void {
    if (this.state.user.Id > 0) {
      const _items: Items = sp.web.lists
        .getByTitle(WebConfig.requestedItemsListName)
        .items // tslint:disable-next-line:max-line-length
        .filter(
          `(status eq '1' and pricingcenterId eq ${
            this.state.user.Id
          }) or ( status eq '2' and lawyerId eq ${this.state.user.Id} )`
        )
        .orderBy("Id", true);
      this._loadcontractItems(_items, 2);
    }
  }
  // tbindex=2,待我审批的合同 list2
  // tbindex=1,其他待审批的合同,list1
  // tbindex=3,我审批过的合同,list3
  private _loadcontractItems(items: Items, tbindex: number): void {
    items
      .select("*", "AttachmentFiles", "ContractType/Title", "Author/Title")
      .expand("AttachmentFiles", "ContractType", "Author")
      .get()
      .then(citems => {
        const datas: any[] = [];
        citems.map(item => {
          datas.push({
            requestNo: item.requestNo,
            stateDesc: statusDesc[item.status],
            Title: item.Title,
            RelativeParty: item.RelativeParty,
            ContractType: item.ContractType.Title,
            ContractNo: item.ContractNo,
            FactoryDept: item.FactoryDept ? item.FactoryDept : "",
            ContractObject: item.ContractObject,
            MoneyText:
              item.Currency === "N/A" ? "N/A" : item.Currency + item.Money,
            PayWay: item.PayWay,
            remarks: item.remarks,
            AttachmentFiles: item.AttachmentFiles.map(fileinfo => {
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
        let pgdata: Ipageditems = {} as Ipageditems;
        objectAssign(
          pgdata,
          tbindex === 2
            ? this.state.list2
            : tbindex === 1
              ? this.state.list1
              : this.state.list3
        );
        pgdata.requestedItems = datas;
        pgdata.current = 1;

        pgdata.total = datas.length;
        switch (tbindex) {
          case 2:
            this.setState({ list2: pgdata, total2: datas.length });
            break;
          case 1:
            this.setState({ list1: pgdata });
            break;
          case 3:
            this.setState({ list3: pgdata });
            break;
        }
      });
  }

  private _loaddatas(): void {
    if (this.state.user.Id > 0 && this.state.QueryConditions !== "") {
      const _items: Items = sp.web.lists
        .getByTitle(WebConfig.requestedItemsListName)
        .items.filter(`${this.state.QueryConditions}`)
        .orderBy("Id", true);
      this._loadcontractItems(_items, 1);
    }
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
          href={`${WebConfig.ApprovalPage}?request=${item.Id}`}
        >
          {item[column.fieldName]}
        </Link>
      );
    }

    return item[column.fieldName];
  }
  private _onRenderItemColumn3(
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
  @autobind
  private _ItemInvoked1(item?: any, index?: number, ev?: Event): void {
    const Id: number = this.state.list1.requestedItems[index].Id;
    window.location.href = `${WebConfig.ApprovalPage}?request=${Id}`;
  }
  @autobind
  private _ItemInvoked2(item?: any, index?: number, ev?: Event): void {
    const Id: number = this.state.list2.requestedItems[index].Id;
    window.location.href = `${WebConfig.ApprovalPage}?request=${Id}`;
  }
  @autobind
  private _ItemInvoked3(item?: any, index?: number, ev?: Event): void {
    const Id: number = this.state.list3.requestedItems[index].Id;
    window.location.href = `${WebConfig.NewContractPage}?request=${Id}`;
  }
  @autobind
  private _onSelectedChanged(items: any[]): any {
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
    let status: string = items[0].status;
    // this.setState({isWaitforLaywer:status==="2"}); 不能使用setState
    let samestatus: boolean = items.every(item => {
      return item.status === status;
    });
    return {
      ishiddenEditButton: !samestatus,
      ishiddenNewButton: true,
      isWaitforLaywer: items[0].status === "2"
    };
  }
  private _toaudit(selectItem: any): void {
    const Id: number = selectItem.Id;
    document.location.href = `${WebConfig.ApprovalPage}?request=${Id}`;
  }
  @autobind
  private _listchanged(
    item?: PivotItem,
    ev?: React.MouseEvent<HTMLElement>
  ): void {
    if (item.props.itemKey === "2") {
      this._loaddatasbyme();
    } else if (item.props.itemKey === "1") {
      this._loaddatas();
    } else if (item.props.itemKey === "3") {
      this._approvedbyme();
    }
  }
  private _approvedbyme(): void {
    const _items: Items = sp.web.lists
      .getByTitle(WebConfig.requestedItemsListName)
      .items.filter(`substringof(',${this.state.curUser.Id},',applog)`)
      .orderBy("Modified", false);
    this._loadcontractItems(_items, 3);
  }
  @autobind
  private _openRequestForm(items: any[]): void {
    this.setState({
      isWaitforLaywer: items[0].status === "2",
      showModal: true,
      curItems: items
    });

    // console.log(this.state.requestedItems[index]);
    // console.log(this.state.curItem);
    // this._showModal();
    // window.open(`${this.props.requestFormUrl}/?request=${item.ID}&mode=${mode}`, '_self');
  }

  @autobind
  private _setItemResult(
    dvalue: any,
    status: string,
    comments: string,
    sendtype: string,
    itemscount: number
  ): void {
    // console.log(dvalue);

    if (dvalue.status === "1") {
      const resultTitle: string = status === "-1" ? "驳回" : "通过";
      EmailUtil.SendEmailbyId(
        dvalue.AuthorId,
        String.Format(
          WebConfig.EmailResultTemplate.body,
          dvalue.Title,
          dvalue.requestNo,
          "审价中心",
          resultTitle,
          comments === "" ? "" : `<p>审批意见：${comments}</p>`,
          this._getmyctrlistlink()
        ),
        String.Format(
          WebConfig.EmailResultTemplate.subject,
          dvalue.ContractType + ":" + dvalue.Title,
          dvalue.requestNo,
          "审价中心",
          resultTitle
        )
      );
      if (status === "2") {
        EmailUtil.SendEmailbyId(
          dvalue.lawyerId,
          String.Format(
            WebConfig.EmailToLawyerTemplate.body,
            EmailUtil.getsystemlink(),
            dvalue.ContractType + ":" + dvalue.Title,
            dvalue.requestNo
          ),
          String.Format(
            WebConfig.EmailToLawyerTemplate.subject,
            dvalue.AuthorTitle,
            dvalue.ContractType + ":" + dvalue.Title
          )
        );
      }
    } else if (dvalue.status === "2") {
      const resultTitle: string = status === "-2" ? "驳回" : "通过";
      EmailUtil.SendEmailbyId(
        dvalue.AuthorId,
        String.Format(
          WebConfig.EmailResultTemplate.body,
          dvalue.ContractType + ":" + dvalue.Title,
          dvalue.requestNo,
          "律师",
          `${resultTitle}！${sendtype}`,
          comments === "" ? "" : `<p>审批意见：${comments}</p>`,
          this._getmyctrlistlink()
        ),
        String.Format(
          WebConfig.EmailResultTemplate.subject,
          dvalue.ContractType + ":" + dvalue.Title,
          dvalue.requestNo,
          "律师",
          resultTitle
        )
      );
    }
    dvalue.status = status;
    dvalue.CurrentHandler = 0;
    dvalue.statusDesc = statusDesc[status];
    let ctitems: number[] = [];
    objectAssign(ctitems, this.state.contractItems);
    ctitems.push(dvalue.Id);
    this.setState({ contractItems: ctitems }, () => {
      if (ctitems.length === itemscount) {
        let pgdata: Ipageditems = {} as Ipageditems;
        objectAssign(pgdata, this.state.list2);
        pgdata.requestedItems = pgdata.requestedItems.filter(it => {
          return ctitems.indexOf(it.Id) < 0;
        });
        pgdata.current = 1;
        pgdata.total = pgdata.total - ctitems.length;
        let pgdata2: Ipageditems = {} as Ipageditems;
        objectAssign(pgdata2, this.state.list3);
        pgdata2.total += ctitems.length;
        this.setState({
          list2: pgdata,
          list3: pgdata2,
          curItems: [],
          contractItems: [],
          showModal: false
        });
      }
    });
  }
  @autobind
  private _closeModal(): void {
    this.setState({ showModal: false });
  }
  private _showModal(): void {
    // console.log("pre showModel...");
    this.setState({ showModal: true }, () => {
      // console.log("showModaled。。。 ");
    });
  }
  private _getmyctrlistlink(): string {
    let url: string = CurrentUrl;
    url =
      url.substr(0, url.lastIndexOf("/") + 1) + WebConfig.CreatedByMeListPage;
    return `<a href=${url}>系统</a>`;
  }
}
