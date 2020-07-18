import * as React from "react";
import styles from "./ContractForm.module.scss";
import { IContractFormProps, RequestFormMode } from "./IContractFormProps";
import { IRequestFormState } from "./IRequestFormState";
import { sp, ItemAddResult, Web, ItemUpdateResult } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import contractutil from "./contractutil";

import Modal from "office-ui-fabric-react/lib/Modal";
import CpsItemForm from "./ContractItemEditForm/CpsItemForm";
import UxpList from "../../ComComponents/UxpList/UxpList";
import { IColumnField } from "../../ComComponents/interfaces/IColumnField";
import { IRequest } from "../../ComComponents/interfaces/IRequest";
import { IItem, statusDesc } from "../../ComComponents/interfaces/IItem";
import { IContractSubject } from "../../ComComponents/interfaces/IContractSubject";

import { WebConfig } from "../../ComComponents/webconfig";
import { Button, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { SelectionMode } from "office-ui-fabric-react/lib/DetailsList";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import { Label } from "office-ui-fabric-react/lib/Label";
// import { injectCss } from "../../ComComponents/comutil";
import * as objectAssign from "object-assign";
export default class ContractForm extends React.Component<
  IContractFormProps,
  IRequestFormState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      request: undefined,
      requestedItemsListFields: [
        {
          ariaLabel: "申请编号",
          Name: "requestNo"
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
          Name: "NeedApproval_cn"
        }
        /* {
          ariaLabel: "状态",
          Name: "statusDesc"
        }*/
      ] as IColumnField[],
      requestedItems: [],
      SubjectOptions: [],
      TypeOptions: [],
      hideDeleteDialog: true,
      curUser: null,
      curItem: null,
      showModal: false,
      defaultSubjectId: undefined
    };
    // injectCss();
  }
  public render(): React.ReactElement<IContractFormProps> {
    return (
      <div className={styles.contactForm}>
        <div className={styles.container}>
          <div className="ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <TextField
                  label={"申请人"}
                  value={
                    this.state.request &&
                    this.state.request.Author &&
                    this.state.request.Author.Title
                  }
                  disabled={true}
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <Dropdown
                  label={"合同主体"}
                  selectedKey={
                    this.state.request
                      ? this.state.request.ContractSubjectId
                      : this.state.defaultSubjectId
                  }
                  options={this.state.SubjectOptions}
                  onChanged={this.changeDropdownState}
                  disabled={this._isSubjectDropDownDisabled()}
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <div className="ms-Dropdown-container">
                  <label
                    className="ms-Label ms-Dropdown-label"
                    style={{ display: "inline-block", padding: "5px 0px" }}
                  >
                    状态
                  </label>
                  <div
                    aria-expanded="false"
                    aria-live="assertive"
                    aria-disabled="true"
                    className="ms-Dropdown root_44853ebf"
                  >
                    <Label disabled={true}>{"新建"}</Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <TextField
                  style={{ "font-size": "12px" }}
                  label="合同相对方"
                  value={
                    this.state.request ? this.state.request.RelativeParty : ""
                  }
                  placeholder="注：一个申请单只能填一个合同相对方"
                  disabled={this._isSubjectDropDownDisabled()}
                  required={false}
                  onChanged={this._RelativePartyChanged}
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <TextField
                  label="厂部"
                  style={{ "font-size": "12px" }}
                  value={
                    this.state.request ? this.state.request.FactoryDept : ""
                  }
                  disabled={this._isSubjectDropDownDisabled()}
                  onChanged={this._FactoryDeptChanged}
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">&nbsp;</div>
            </div>
            <div className={styles.toolsrow}>
              <h3 className={styles.leftpanel}>已添加的合同</h3>
              <div className={styles.rightpanel}>{this._getButtons()}</div>
            </div>
            <UxpList
              data={this.state.requestedItems}
              schemaFields={this.state.requestedItemsListFields}
              onItemInvoked={this._openRequestForm}
              onNewButtonClicked={this._NewRequestForm}
              onEditButtonClicked={this._openRequestForm}
              onDeleteButtonClicked={this._DeleteRequests}
              selectionMode={SelectionMode.multiple}
              newButtonTitle="新建"
              hiddenFields={["Id", "NeedApproval"]}
              label={""}
            />

            <Modal
              isOpen={this.state.showModal}
              onDismiss={this._closeModal}
              isBlocking={true}
              containerClassName="ms-modalExample-container"
            >
              <div className="ms-modalExample-header">
                <span>合同信息</span>
                <i
                  className="ms-Icon ms-Icon--BoxMultiplySolid x-hidden-focus close"
                  onClick={this._closeModal}
                />
              </div>
              <CpsItemForm
                CurContractItem={this.state.curItem}
                requestedItemsListName={WebConfig.requestedItemsListName}
                onDeleted={this._removeItem}
                Typeoptions={this.state.TypeOptions}
                onUpdated={this._updatedItem}
                onAdded={this._addedItem}
                onClose={this.DeleteAndClose}
                subabbr={this.state.request && this.state.request.subabbr}
                AddrListName={WebConfig.AddrListName}
                request={this.state.request}
                SubjectOptions={this.state.SubjectOptions}
              />
            </Modal>
          </div>
        </div>
      </div>
    );
  }

  @autobind
  public changeDropdownState(item: IDropdownOption): void {
    var newRequest: IRequest = {} as IRequest;
    objectAssign(newRequest, this.state.request);
    newRequest.ContractSubject = item.text;
    newRequest.ContractSubjectId = item.key as number;
    const curoption: any = this.state.SubjectOptions.filter(op => {
      return op.key === item.key;
    })[0];
    newRequest.subabbr = curoption.subabbr;
    // console.log(this.state.SubjectOptions, newRequest);
    this.setState({
      request: newRequest
    });
  }

  @autobind
  private _updatedItem(item: IItem, doClose: boolean = true): void {
    let newitems: IItem[] = [] as IItem[];

    objectAssign(newitems, this.state.requestedItems);
    let ItemExits: boolean = false;
    newitems.some(citem => {
      if (item.Id === citem.Id) {
        // citem=item;
        objectAssign(citem, item);
        citem.MoneyText =
          citem.Currency === "N/A"
            ? citem.Currency
            : `${citem.Currency}${citem.Money}`;
        citem.statusDesc = statusDesc[citem.status];
        ItemExits = true;
        return true;
      }
      return false;
    });
    // 新建时上传附件后提交会走到这里，需添加到列表
    if (!ItemExits) {
      this._addedItem(item, true);
      return;
    }
    this.setState({ requestedItems: newitems });

    if (doClose) {
      this.setState({ showModal: false });
    }
  }
  @autobind
  private _addedItem(item: IItem, closeModal: boolean = true): void {
    let newitems: IItem[] = [] as IItem[];
    objectAssign(newitems, this.state.requestedItems);
    // console.log(item);
    item.MoneyText =
      item.Currency === "N/A" ? item.Currency : `${item.Currency}${item.Money}`;
    item.statusDesc = statusDesc[item.status];

    newitems.push(item);
    this.setState({ requestedItems: newitems });

    if (closeModal) {
      this.setState({ showModal: false });
    }
  }
  /*
   * Requets Form Buttons related
   */

  @autobind
  private _submit(): void {
    var newRequest: IRequest = {} as IRequest;
    objectAssign(newRequest, this.state.request);
    // if (!this.state.request.RelativeParty||this.state.request.RelativeParty.trim() === "") {
    // return;
    // }
    if (this.state.requestedItems.length === 0) {
      alert("请添加合同内容后提交。");
      return;
    }

    const witems: IItem[] = this.state.requestedItems.filter(item => {
      return item.status === "0";
    });
    if (witems.length === 0) {
      alert("没有待审批的合同，不能提交。");
      return;
    }
    let emailbodys: any = {};
    let copyItems: IItem[] = [];
    objectAssign(copyItems, witems);
    this._submitsubitem(witems, () => {
      copyItems.map(item => {
        const Key: string = item.NeedApproval
          ? item.pricingcenterId + ""
          : item.lawyerId + "";
        if (!emailbodys[Key]) {
          emailbodys[Key] = [];
        }
        emailbodys[Key].push({
          id: item.Id,
          title: item.Title,
          type: item.ContractType,
          requestNo: item.requestNo,
          person: item.NeedApproval ? item.Pricingcenter : item.Lawyer
        });
      });
      newRequest.state = "审批中";
      this._updateRequest(emailbodys);
    }); // 更新单个合同状态
  }

  private _submitsubitem(items: IItem[], callback: Function): void {
    let item: IItem = items.shift();
    const data: any = {
      status: item.NeedApproval ? "1" : "2"
    };
    sp.web.lists
      .getByTitle(WebConfig.requestedItemsListName)
      .items.getById(item.Id)
      .update(data)
      .then(value => {
        console.log(`合同：${item.Id}提交成功。`);
        if (items.length > 0) {
          this._submitsubitem(items, callback);
        } else {
          callback();
        }
      });
  }

  private _isSubjectDropDownDisabled(): boolean {
    if (!this.state.request) {
      return true;
    }

    return false;
  }
  private _getButtons(): JSX.Element[] {
    let buttons: JSX.Element[] = [];

    if (this._isSubmitButtonHidden() === false) {
      buttons.push(
        <PrimaryButton
          data-automation-id="test"
          text="提交"
          onClick={this._submit}
        />
      );
    }
    buttons.push(
      <Button
        text="关闭"
        onClick={() => {
          document.location.href = WebConfig.CreatedByMeListPage;
        }}
      />
    );
    return buttons;
  }

  @autobind
  private _RelativePartyChanged(value: string): void {
    let data: IRequest = {} as IRequest;
    objectAssign(data, this.state.request);
    data.RelativeParty = value;
    this.setState({ request: data });
  }
  @autobind
  private _FactoryDeptChanged(value: string): void {
    let data: IRequest = {} as IRequest;
    objectAssign(data, this.state.request);
    data.FactoryDept = value;
    this.setState({ request: data });
  }
  private _isSubmitButtonHidden(): boolean {
    if (!this.state.request) {
      return true;
    }

    return false;
  }

  private _fetchRequestedItems(props: IContractFormProps): void {
    if (this.state.request === undefined) {
      return;
    }

    // get all fields that is visible and editable in a list
    sp.web.lists
      .getByTitle(WebConfig.requestedItemsListName)
      .items.filter(`RequestIDId eq ${this.state.request.Id}`)
      .get()
      .then((response: IItem[]) => {
        this.setState({
          requestedItems: response
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  private jumpHomePage(): void {
    location.href = WebConfig.CreatedByMeListPage;
    //console.log(`go to ${WebConfig.CreatedByMeListPage}...`);
  }

  private _updateRequest(emailbodys?: any): void {
    this.setState({
      hideDeleteDialog: true
    });
    if (emailbodys) {
      contractutil.sendEmail(emailbodys, this.state.curUser);
    }
    console.log("正在删除草稿中的合同...");
    sp.web.lists
      .getByTitle(WebConfig.requestedItemsListName)
      .items.filter(
        "AuthorId eq " + this.state.curUser.Id + " and status eq '0' "
      )
      .getAll()
      .then(items => {
        let count: number = items.length;
        if (count > 0) {
          count--;
          items.map((item, i) => {
            sp.web.lists
              .getByTitle(WebConfig.requestedItemsListName)
              .items.getById(item.Id)
              .delete()
              .then(v => {
                console.log("已删除申请编号为:" + item.requestNo + "的合同");
                if (i === count) {
                  this.jumpHomePage();
                }
              })
              .catch(err => {
                console.log("删除申请编号为:" + item.requestNo + "的合同失败");
                if (i === count) {
                  this.jumpHomePage();
                }
              });
          });
        } else {
          this.jumpHomePage();
        }
      });
  }

  public componentDidMount(): void {
    sp.web.currentUser
      .get()
      .then(
        (result => {
          // console.log(result);
          if (!result.Id) {
            sp.web.ensureUser(result.LoginName).then(() => {
              this.componentDidMount();
              return;
            });
          }
          this.setState({
            curUser: result
          });
          if (this.props.mode === RequestFormMode.Requester) {
            // this._addRequest();
            var newRequest: IRequest = {} as IRequest;

            newRequest.Author = result;
            newRequest.state = "新建";
            this.setState({
              request: newRequest
            });
          }
        }).bind(this)
      )
      .catch((error: any) => {
        console.log(error);
      });
    this._fetchSubjectOptions(this.props);
  }

  /*
  private _addRequest(callback?: () => void): void {
    const data: any = {
      ContractSubjectId: this.state.request.ContractSubjectId,
      RelativeParty: this.state.request.RelativeParty,
      state: this.state.request.state,
      subject: this.state.request.subabbr,
    };

    sp.web.lists.getByTitle(WebConfig.requestsListName).items.add(data).then(((iar: ItemAddResult) => {
      let curreq: IRequest = {} as IRequest;
      objectAssign(curreq, this.state.request);
      curreq.Id = iar.data.Id;
      console.log(iar);
      this.setState({
        request: curreq
      }, () => { if (callback) { callback(); } });
    }).bind(this)).catch((error: any) => {
      console.log(error);
    });
  }*/
  public componentWillReceiveProps(nextProps): void {
    this._fetchSubjectOptions(nextProps);
    this._fetchRequestedItems(nextProps);
  }
  private _fetchSubjectOptions(props: IContractFormProps): void {
    // let w: Web = this._getweb();
    sp.web.lists
      .getByTitle(WebConfig.subjectsListName)
      .items.orderBy("Title")
      .getAll()
      .then((response: IContractSubject[]) => {
        let options: any[] = [];
        let subarr: string = "";
        var newRequest: IRequest = {} as IRequest;
        objectAssign(newRequest, this.state.request);
        response.map((item, i) => {
          options.push({
            key: item.Id,
            text: item.Title,
            subabbr: item.abbreviation
          });
          if (item.Title === "广东溢达纺织有限公司") {
            subarr = item.abbreviation;
            newRequest.ContractSubjectId = item.Id;
            newRequest.subabbr = item.abbreviation;
            newRequest.ContractSubject = item.Title;
            this.setState({ defaultSubjectId: item.Id });
          }
        });

        let typeoptions: any[] = [];
        sp.web.lists
          .getByTitle(WebConfig.contractTypeListName)
          .items.select("*", "pricecenter/Title", "laywer/Title")
          .expand("pricecenter", "laywer")
          .orderBy("Title")
          .getAll()
          .then((types: any[]) => {
            //  console.log(types);
            let Msgs: string[] = [];
            types.map(typeitem => {
              //  console.log(typeitem);
              let isValid: boolean = true;
              if (!typeitem.laywer || !typeitem.laywer.Title) {
                Msgs.push(`${typeitem.Title}类别的律师`);
                isValid = false;
              }
              if (!typeitem.pricecenter || !typeitem.pricecenter.Title) {
                if (typeitem.ToPriceCenter) {
                  Msgs.push(`${typeitem.Title}类别的审价人员`);
                  isValid = false;
                }
              }
              if (isValid) {
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
              }
            });
            if (Msgs.length > 0) {
              alert(
                "请配置以下信息，否则无法提交该类别合同申请：\r\n" +
                  Msgs.join("\n")
              );
            }
            this.setState({
              SubjectOptions: options,
              request: newRequest,
              TypeOptions: typeoptions
            });
          })
          .catch(e => {
            console.log(e);
          });
      });
  }
  @autobind
  private _NewRequestForm(): void {
    let item: IItem = {
      Id: 0,
      status: "0",
      NeedApproval: true,
      NeedApproval_cn: "是",
      lawyerId: 0,
      pricingcenterId: 0
    } as IItem;
    this.setState({ curItem: item });
    this._showModal();
  }
  @autobind
  private _DeleteRequests(items: any[]) {
    console.log(items);
    let newitems: IItem[] = [] as IItem[];
    let Ids: number[] = [];
    // objectAssign(newitems, this.state.requestedItems);
    items.map(item => {
      Ids.push(item.Id);
      sp.web.lists
        .getByTitle(WebConfig.requestedItemsListName)
        .items.getById(item.Id)
        .delete()
        .then(v => {
          console.log("已删除Id为：" + item.Id + "的记录");
        });
    });
    this.state.requestedItems.map(item2 => {
      if (Ids.indexOf(item2.Id) < 0) {
        newitems.push(item2);
      }
    });
    this.setState({ requestedItems: newitems });
  }
  @autobind
  private _openRequestForm(item: any, index: number): void {
    let mode: string = "";
    switch (this.props.mode) {
      case RequestFormMode.Requester:
        mode = "requester";
        break;
      case RequestFormMode.Admin:
        mode = "admin";
        break;
      case RequestFormMode.Approver:
        mode = "approver";
        break;
      default:
        break;
    }
    this.setState({ curItem: this.state.requestedItems[index] });
    // console.log(this.state.requestedItems[index]);
    // console.log(this.state.curItem);
    this._showModal();
    // window.open(`${this.props.requestFormUrl}/?request=${item.ID}&mode=${mode}`, '_self');
  }
  @autobind
  private _showModal(): void {
    this.setState({ showModal: true });
  }
  @autobind
  private DeleteAndClose(id?: number): void {
    if (id > 0) {
      if (
        this.state.requestedItems.filter(item => {
          return item.Id === id;
        }).length === 0
      ) {
        sp.web.lists
          .getByTitle(WebConfig.requestedItemsListName)
          .items.getById(id)
          .delete()
          .then(() => {
            console.log("删除了记录：" + id);
          });
      }
    }
    this.setState({ showModal: false });
  }
  @autobind
  private _closeModal(): void {
    this.setState({ showModal: false });
  }
  @autobind
  private _removeItem(item: IItem): void {
    let data: IItem[] = this.state.requestedItems.filter(it => {
      return it.Id !== item.Id;
    });
    this.setState({ requestedItems: data });
  }
}
