import * as React from "react";
import styles from "./ApprovalForm.module.scss";
import { IApprovalFormProps } from "./IApprovalFormProps";

import { IApprovalFormState } from "./IApprovalFormState";
import { AppItemForm } from "./AppItemForm";
import { statusDesc, IItem } from "../../ComComponents/interfaces/IItem";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { IColumnField } from "../../ComComponents/interfaces/IColumnField";
import { String } from "typescript-string-operations";
import { WebConfig, CurrentUrl } from "../../ComComponents/webconfig";
import { EmailUtil } from "../../ComComponents/Email/EmailUtil";
import { Label } from "office-ui-fabric-react/lib/Label";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import * as objectAssign from "object-assign";
export default class ApprovalForm extends React.Component<
  IApprovalFormProps,
  IApprovalFormState
> {
  constructor(props: any) {
    super(props);
    this.state = {
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
      ] as IColumnField[],
      curUser: null,
      curItem: null
    };
    // injectCss();
  }
  public render(): React.ReactElement<IApprovalFormProps> {
    return (
      <div className={styles.approvalForm}>
        <div className={styles.container}>
          <div className="ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                <div
                  className={styles.mstbheader}
                  style={{ width: "100%", textAlign: "center" }}
                >
                  <h2>合同审批表</h2>
                </div>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <div className="ms-Dropdown-container">
                  <label className={styles.mslable}>申请人</label>
                  <div
                    aria-expanded="false"
                    aria-live="assertive"
                    aria-disabled="true"
                    className="ms-Dropdown root_44853ebf"
                  >
                    <Label>
                      {this.state.curItem && this.state.curItem.Author
                        ? this.state.curItem.Author.Title
                        : ""}
                    </Label>
                  </div>
                </div>
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <div className="ms-Dropdown-container">
                  <label className={styles.mslable}>合同主体</label>
                  <div
                    aria-expanded="false"
                    aria-live="assertive"
                    aria-disabled="true"
                    className="ms-Dropdown root_44853ebf"
                  >
                    <Label>
                      {this.state.curItem && this.state.curItem.mainbody
                        ? this.state.curItem.mainbody
                        : ""}
                    </Label>
                  </div>
                </div>
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <div className="ms-Dropdown-container">
                  <label className={styles.mslable}>状态</label>
                  <div
                    aria-expanded="false"
                    aria-live="assertive"
                    aria-disabled="true"
                    className="ms-Dropdown root_44853ebf"
                  >
                    <Label disabled={true}>
                      {this.state.curItem
                        ? this.state.curItem.statusDesc
                        : "New Request"}
                    </Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg12">
                <div className="ms-Dropdown-container">
                  <label className={styles.mslable}>合同相对方</label>
                  <div
                    aria-expanded="false"
                    aria-live="assertive"
                    aria-disabled="true"
                    className="ms-Dropdown root_44853ebf"
                  >
                    <Label>
                      {this.state.curItem && this.state.curItem.RelativeParty
                        ? this.state.curItem.RelativeParty
                        : ""}
                    </Label>
                  </div>
                </div>
              </div>
            </div>
            <AppItemForm
              {...this.props}
              curItem={this.state.curItem}
              curUser={this.state.curUser}
              onUpdatedItem={this._setItemResult}
            />
          </div>
        </div>
      </div>
    );
  }

  @autobind
  private _setItemResult(
    item: IItem,
    status: string,
    comments: string,
    sendtype: string
  ): void {
    let data: IItem = {} as IItem;
    objectAssign(data, this.state.curItem);

    let state: string = "In approval";
    let allRejected: boolean = true;
    let anyRejected: boolean = false;
    let allPassed: boolean = true;

    if (data.status === "1") {
      const resultTitle: string = status === "-1" ? "驳回" : "通过";
      EmailUtil.SendEmailbyId(
        data.AuthorId,
        String.Format(
          WebConfig.EmailResultTemplate.body,
          data.Title,
          data.requestNo,
          "审价中心",
          resultTitle,
          comments && comments !== "" ? `<p>审批意见：${comments}</p>` : "",
          this._getmyctrlistlink()
        ),
        String.Format(
          WebConfig.EmailResultTemplate.subject,
          data.Title,
          data.requestNo,
          "审价中心",
          resultTitle
        )
      );
      if (status === "2") {
        EmailUtil.SendEmailbyId(
          data.lawyerId,
          String.Format(
            WebConfig.EmailToLawyerTemplate.body,
            EmailUtil.getsystemlink(),
            data.ContractType + ":" + data.Title,
            data.requestNo
          ),
          String.Format(
            WebConfig.EmailToLawyerTemplate.subject,
            data.Author.Title,
            data.ContractType + ":" + data.Title
          )
        );
      }
    } else if (data.status === "2") {
      const resultTitle: string = status === "-2" ? "驳回" : "通过!" + sendtype;
      EmailUtil.SendEmailbyId(
        data.AuthorId,
        String.Format(
          WebConfig.EmailResultTemplate.body,
          data.Title,
          data.requestNo,
          "律师",
          resultTitle,
          comments && comments.trim() !== ""
            ? `<p>审批意见：${comments}</p>`
            : "",
          this._getmyctrlistlink()
        ),
        String.Format(
          WebConfig.EmailResultTemplate.subject,
          data.Title,
          data.requestNo,
          "律师",
          resultTitle
        )
      );
    }
    data.status = status;
    data.statusDesc = statusDesc[status];
    this.setState({ curItem: data });
    document.location.href = WebConfig.InapprovalListPage;
  }

  private _getmyctrlistlink(): string {
    let url: string = CurrentUrl;
    url =
      url.substr(0, url.lastIndexOf("/") + 1) + WebConfig.CreatedByMeListPage;
    return `<a href=${url}>系统</a>`;
  }
  public componentDidMount(): void {
    sp.web.currentUser
      .get()
      .then(result => {
        this.setState({
          curUser: result
        });
        let requestId: number = parseInt(this.props.id, 10);
        if (isNaN(requestId)) {
          //  window.location.href="../";
          return;
        } else {
          const filedNames: string[] = this.state.requestedItemsListFields.map(
            d => {
              return d.Name;
            }
          );
          sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.getById(requestId)
            .select(
              "*",
              "Author/Title",
              "ContractType/Title",
              "AttachmentFiles",
              "lawyer/Title",
              "pricingcenter/Title"
            )
            .expand(
              "Author",
              "ContractType",
              "AttachmentFiles",
              "lawyer/Id",
              "pricingcenter/Id"
            )
            .get()
            .then(item => {
              //  console.log(item);
              sp.web.lists
                .getByTitle(WebConfig.contractTypeListName)
                .items.getById(item.ContractTypeId)
                .get()
                .then(confg => {
                  let HasAuthority: boolean = false;
                  if (item.status === "1") {
                    if (
                      item.pricingcenterId === result.Id ||
                      confg.pricecenterId === result.Id ||
                      confg.otherpricecentersId.indexOf(result.Id) >= 0
                    ) {
                      HasAuthority = true;
                    }
                  } else if (item.status === "2") {
                    if (
                      item.lawyerId === result.Id ||
                      confg.laywerId === result.Id ||
                      confg.otherlawyersId.indexOf(result.Id) >= 0
                    ) {
                      HasAuthority = true;
                    }
                  }
                  if (!HasAuthority) {
                    document.location.href = WebConfig.InapprovalListPage;
                    return;
                  }
                  let curLawyer: any[] = [];
                  if (item.lawyer) {
                    curLawyer.push({
                      title: item.lawyer.Title,
                      text: item.lawyer.Title,
                      key: item.lawyerId
                    });
                  }

                  let curPricingcenter: any[] = [];
                  if (item.pricingcenter) {
                    curPricingcenter.push({
                      title: item.pricingcenter.Title,
                      text: item.pricingcenter.Title,
                      key: item.pricingcenterId
                    });
                  }
                  let itemdata: any = {
                    Id: item.Id,
                    ContractNo: item.ContractNo,
                    Title: item.Title,
                    ContractType: item.ContractType.Title,
                    ContractTypeId: item.ContractTypeId,
                    ContractObject: item.ContractObject,
                    MoneyText:
                      item.Currency === "N/A"
                        ? item.Currency
                        : `${item.Currency}${item.Money}`,
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
                    AttachmentFiles: item.AttachmentFiles.map(fileinfo => {
                      return {
                        ServerRelativeUrl: fileinfo.ServerRelativeUrl,
                        FileName: fileinfo.FileName
                      };
                    })
                  };
                  this.setState({ curItem: itemdata }, () => {
                    //    console.log(this.state.curItem);
                  });
                })
                .catch((error: any) => {
                  console.log(error);
                });
            })
            .catch((error: any) => {
              console.log(error);
            });
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
