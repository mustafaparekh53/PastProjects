import React = require("react");
import { IContractFormProps } from "../IContractFormProps";
import { IItemState } from "./IItemState";
import styles from "../ContractForm.module.scss";
import { NumberTextField } from "../NumberTextField/NumberTextField";
import { CpsFileUpload } from "../FileUpload/CpsFileUpload";
import contractutil from "../contractutil";
import { Attachments } from "../Attachments/Attachments";
import { sp, Item, Web } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { IItem, statusDesc } from "../../../ComComponents/interfaces/IItem";
import { IItemDataResult } from "../../../ComComponents/interfaces/IItemDataResult";
import CollapsePanel from "../../../ComComponents/collapsepanel/CollapsePanel";
import { Apprhistory } from "../../../approvalForm/components/appresults/Apprhistory";
import { WebConfig } from "../../../ComComponents/webconfig";
import { IRequest } from "../../../ComComponents/interfaces/IRequest";
import { IContractSubject } from "../../../ComComponents/interfaces/IContractSubject";
import * as moment from "moment";
import "moment/locale/zh-cn";
import { GetFileRandName } from "../../../ComComponents/comutil";
import {
  IDatePickerStrings,
  DatePicker,
  DayOfWeek
} from "office-ui-fabric-react/lib/DatePicker";
import { IBasePickerSuggestionsProps } from "office-ui-fabric-react/lib/Pickers";
import { BaseComponent } from "office-ui-fabric-react/lib/Utilities";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { Label } from "office-ui-fabric-react/lib/Label";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";
import {
  Dialog,
  DialogType,
  DialogFooter
} from "office-ui-fabric-react/lib/Dialog";
import {
  DefaultButton,
  PrimaryButton
} from "office-ui-fabric-react/lib/Button";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import {
  OfficeUiFabricPeoplePickerContainer,
  IOfficeUiFabricPeoplePickerSelection
} from "../../../../components/officeUiFabricPeoplePicker";
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
import * as objectAssign from "object-assign";
// tslint:disable-next-line:one-line
export default class CpsItemForm extends BaseComponent<any, IItemState> {
  constructor(props: any) {
    super(props);
    this.state = {
      ContractItem: this.props.CurContractItem,
      isdisabled: false,
      currentSelectedLawyer: [],
      currentSelectedPricingcenter: [],
      hideDeleteDialog: true,
      request: this.props.request,
      SubjectOptions: this.props.SubjectOptions,
      Typeoptions: this.props.Typeoptions,
      DialogType: 0,
      CurUser: {}
    };
    /*this.setState(
            {
                ContractItem: this.props.CurContractItem
            }
        );*/
    // injectCss();
  }
  public render(): React.ReactElement<IContractFormProps> {
    return (
      <div className={styles.contactForm}>
        <div className={styles.container}>
          <CollapsePanel
            isHidden={this.getIsHiddenHistory()}
            headerText={"审批记录"}
          >
            <Apprhistory
              contractitemid={
                this.state.ContractItem && this.state.ContractItem.Id
              }
            />
          </CollapsePanel>
          <div className="ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <TextField
                  label={"申请人"}
                  value={
                    this.state.request &&
                    this.state.request.Author &&
                    this.state.request.Author.Title
                      ? this.state.request.Author.Title
                      : this.state.CurUser.Title
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
                      : undefined
                  }
                  options={this.state.SubjectOptions}
                  onChanged={this.changemainbodyState}
                  disabled={this._isSubjectDropDownDisabled()}
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <div className="ms-Dropdown-container">
                  <label className="ms-Label ms-Dropdown-label root-125">
                    状态
                  </label>
                  <div
                    aria-expanded="false"
                    aria-live="assertive"
                    aria-disabled="true"
                    className="ms-Dropdown"
                  >
                    <Label disabled={true}>
                      {this.state.request ? this.state.request.state : "新建"}
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4">
                <TextField
                  label="合同相对方"
                  value={
                    this.state.request ? this.state.request.RelativeParty : ""
                  }
                  placeholder="注：一个申请单只能填一个合同相对方"
                  disabled={this._isSubjectDropDownDisabled()}
                  required={true}
                  onChanged={this._RelativePartyChanged}
                  errorMessage={
                    this.state.request &&
                    this.state.request.RelativeParty &&
                    this.state.request.RelativeParty.trim() !== ""
                      ? ""
                      : "请填写合同相对方"
                  }
                />
              </div>
              <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4">
                <TextField
                  label="厂部"
                  placeholder={"厂部名称"}
                  value={
                    this.state.request ? this.state.request.FactoryDept : ""
                  }
                  disabled={this._isSubjectDropDownDisabled()}
                  onChanged={this._FactoryDeptChanged}
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <Dropdown
                  label={"合同类型"}
                  selectedKey={
                    this.state.ContractItem &&
                    this.state.ContractItem.ContractTypeId
                      ? this.state.ContractItem.ContractTypeId
                      : undefined
                  }
                  options={this.state.Typeoptions}
                  disabled={this.state.isdisabled}
                  required={true}
                  onChanged={this.changeTypeDropdownState}
                  errorMessage={
                    this.state.ContractItem &&
                    this.state.ContractItem.ContractTypeId
                      ? ""
                      : "必填字段"
                  }
                />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <TextField
                  label="合同编号"
                  required={true}
                  placeholder={"合同编号"}
                  onGetErrorMessage={this.getTxtMsg}
                  value={
                    this.state.ContractItem &&
                    this.state.ContractItem.ContractNo
                      ? this.state.ContractItem.ContractNo
                      : ""
                  }
                  onChanged={this.ContractNoChanged}
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <TextField
                  label="合同名称"
                  required={true}
                  placeholder={"合同名称"}
                  onGetErrorMessage={this.getTxtMsg}
                  value={
                    this.state.ContractItem && this.state.ContractItem.Title
                      ? this.state.ContractItem.Title
                      : ""
                  }
                  onChanged={this.TitleChanged}
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <TextField
                  label="合同标的和数量"
                  required={true}
                  placeholder="例如：电脑设备 1台"
                  value={
                    this.state.ContractItem &&
                    this.state.ContractItem.ContractObject
                      ? this.state.ContractItem.ContractObject
                      : ""
                  }
                  onChanged={this.ContractObjectChanged}
                  onGetErrorMessage={this.getTxtMsg}
                />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <Dropdown
                  label={"货币单位"}
                  required={true}
                  selectedKey={
                    this.state.ContractItem && this.state.ContractItem.Currency
                      ? this.state.ContractItem.Currency
                      : undefined
                  }
                  options={[
                    { key: "USD", text: "USD" },
                    { key: "HKD", text: "HKD" },
                    { key: "RMB", text: "RMB" },
                    { key: "EUR", text: "EUR" },
                    { key: "N/A", text: "N/A" }
                  ]}
                  onChanged={this.changeDropdownState}
                  disabled={this.state.isdisabled}
                  errorMessage={
                    this.state.ContractItem && this.state.ContractItem.Currency
                      ? ""
                      : "必填字段"
                  }
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <NumberTextField
                  label={"合同金额"}
                  required={
                    this.state.ContractItem &&
                    this.state.ContractItem.Currency &&
                    this.state.ContractItem.Currency === "N/A"
                      ? false
                      : true
                  }
                  placeholder={"例如：1000.00"}
                  initialValue={
                    this.state.ContractItem && this.state.ContractItem.Money
                      ? this.state.ContractItem.Money + ""
                      : ""
                  }
                  disabled={this.getMoneyDisabled()}
                  onChanged={this.MoneyChanged}
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <TextField
                  label="付款方式"
                  required={true}
                  placeholder="请按照合同中付款条款简要填写"
                  value={
                    this.state.ContractItem && this.state.ContractItem.PayWay
                      ? this.state.ContractItem.PayWay
                      : ""
                  }
                  onChanged={this.ContractPayWayChanged}
                  onGetErrorMessage={this.getTxtMsg}
                />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <Toggle
                  label="是否审价中心审批"
                  onText="是"
                  offText="否"
                  disabled={this.getToggleDisabled()}
                  onFocus={() => console.log("onFocus called")}
                  onBlur={() => console.log("onBlur called")}
                  checked={
                    this.state.ContractItem &&
                    this.state.ContractItem.NeedApproval
                  }
                  onChanged={this._NeedApprovalChanged}
                />
              </div>

              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                <TextField
                  label="备注"
                  value={
                    this.state.ContractItem && this.state.ContractItem.remarks
                      ? this.state.ContractItem.remarks
                      : ""
                  }
                  onChanged={this.ContractremarksChanged}
                />
              </div>
            </div>

            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                <Label>
                  {this.state.ContractItem &&
                  this.state.ContractItem.status === "3"
                    ? "合同附件"
                    : "附件（采购报告等）"}
                </Label>
                <CpsFileUpload
                  docid={
                    this.state.ContractItem && this.state.ContractItem.Id
                      ? this.state.ContractItem.Id
                      : 0
                  }
                  Enable={this._isEnableUpload()}
                  baseUrl="/"
                  dataType=""
                  AutoUpload={true}
                  doUpload={this._doUpload}
                  errMsg={this.state.uploadErrmsg}
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
                <Attachments
                  docid={
                    this.state.ContractItem && this.state.ContractItem.Id
                      ? this.state.ContractItem.Id
                      : 0
                  }
                  deleteenable={!this._isSubmitButtonHidden()}
                  defaultatts={
                    this.state.ContractItem &&
                    this.state.ContractItem.AttachmentFiles
                      ? this.state.ContractItem.AttachmentFiles
                      : []
                  }
                  setAtts={this._onDeletedItems}
                />
              </div>
            </div>
            {this.state.ContractItem &&
            this.state.ContractItem.status === "3" ? (
              <div className="ms-Grid-row">
                <hr />
                <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4">
                  <DatePicker
                    firstDayOfWeek={DayOfWeek.Sunday}
                    strings={DayPickerStrings}
                    placeholder="请选择日期"
                    label="合同签订日期"
                    isRequired={true}
                    formatDate={this._formatDate}
                    // tslint:disable:jsx-no-lambda
                    onAfterMenuDismiss={() =>
                      console.log("onAfterMenuDismiss called")
                    }
                    onSelectDate={this._setSingingDate}
                    value={
                      this.state.ContractItem &&
                      this.state.ContractItem.signingDate
                        ? moment(
                            this.state.ContractItem.signingDate,
                            moment.ISO_8601
                          ).toDate()
                        : undefined
                    }
                  />
                </div>
                <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                  <OfficeUiFabricPeoplePickerContainer
                    label={"合同签署代表"}
                    principalTypeUser={true}
                    principalTypeSharePointGroup={false}
                    principalTypeSecurityGroup={false}
                    principalTypeDistributionList={false}
                    itemLimit={1}
                    maximumEntitySuggestions={5}
                    onChange={this._ReqresChanged}
                    selections={
                      this.state.ContractItem &&
                      this.state.ContractItem.representative
                        ? this.state.ContractItem.representative
                        : undefined
                    }
                  />
                </div>
                <div
                  className="ms-Grid-col ms-sm6 ms-md6 ms-lg2"
                  style={{
                    minHeight: "60.67px",
                    paddingTop: "28.67px"
                  }}
                >
                  <button onClick={this._setContractinfo}>保存修改</button>
                </div>
                <div style={{ clear: "both" }} />
                <hr style={{ margin: "5px 0" }} />
              </div>
            ) : (
              ""
            )}
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                <div className="footerbtns">
                  {this._getButtons()}
                  <div className="errmMessage">{this.state.errMsg}</div>
                </div>
              </div>
            </div>
            <Dialog
              hidden={this.state.hideDeleteDialog}
              onDismiss={this._closeDeleteDialog}
              dialogContentProps={{
                type: DialogType.normal,
                title: this.state.DialogType === 0 ? "删除确认" : "取消确认",
                subText:
                  this.state.DialogType === 0
                    ? "你确认要删除此申请吗?"
                    : "你确认要取消此申请吗?"
              }}
              modalProps={{
                isBlocking: false
              }}
            >
              <DialogFooter>
                <PrimaryButton
                  onClick={() => {
                    this._deleteRequest(this.state.ContractItem);
                  }}
                  text={this.state.DialogType === 0 ? "删除申请" : "取消申请"}
                />
                <DefaultButton onClick={this._closeDeleteDialog} text="取消" />
              </DialogFooter>
            </Dialog>
          </div>
        </div>
      </div>
    );
  }
  @autobind
  private changeDropdownState(item: IDropdownOption): void {
    var newRequest: IItem = {} as IItem;
    objectAssign(newRequest, this.state.ContractItem);
    newRequest.Currency = item.text;
    if (item.text === "N/A") {
      newRequest.Money = null;
    }
    this.setState({
      ContractItem: newRequest
    });
  }
  @autobind
  private _onDeletedItems(items: any[]): void {
    var newRequest: IItem = {} as IItem;
    objectAssign(newRequest, this.state.ContractItem);
    newRequest.AttachmentFiles = items;
    this.setState({
      ContractItem: newRequest
    });
  }
  private _formatDate(datevale: Date): string {
    return datevale.toLocaleDateString();
  }
  @autobind
  private changemainbodyState(item: IDropdownOption): void {
    var newRequest: IRequest = {} as IRequest;
    objectAssign(newRequest, this.state.request);
    newRequest.ContractSubject = item.text;
    newRequest.ContractSubjectId = item.key as number;
    const curoption: any = this.state.SubjectOptions.filter(op => {
      return op.key === item.key;
    })[0];
    newRequest.subabbr = curoption.subabbr;
    // console.log(this.state.SubjectOptions, newRequest);
    this.setState(
      {
        request: newRequest
      },
      () => {
        // console.log(this.state.request.subabbr);
      }
    );
  }
  @autobind
  private _ReqresChanged(items?: IOfficeUiFabricPeoplePickerSelection[]): void {
    var newRequest: IItem = {} as IItem;
    // console.log(items);
    objectAssign(newRequest, this.state.ContractItem);
    newRequest.representativeId = items.length > 0 ? items[0].id : null;
    newRequest.representative =
      items.length > 0
        ? ([
            {
              id: items[0].id,
              email: items[0].email
            }
          ] as IOfficeUiFabricPeoplePickerSelection[])
        : null;
    this.setState({
      ContractItem: newRequest
    });
  }
  @autobind
  private _setContractinfo(): void {
    var newRequest: IItem = {} as IItem;
    if (
      !this.state.ContractItem.representative ||
      this.state.ContractItem.representative.length === 0
    ) {
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
      .then(value => {
        alert("保存成功。");
        document.location.href = WebConfig.CreatedByMeListPage;
      })
      .catch(err => {
        console.log(err);
      });
  }
  @autobind
  private changeTypeDropdownState(item: IDropdownOption): void {
    var newRequest: IItem = {} as IItem;
    objectAssign(newRequest, this.state.ContractItem);
    newRequest.ContractType = item.text;
    newRequest.ContractTypeId = item.key as number;
    this.state.Typeoptions.some(ops => {
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
  }
  @autobind
  private getTxtMsg(value: string): string {
    if (value === "") {
      return "必填字段";
    }
    return "";
  }
  @autobind
  private _FactoryDeptChanged(value: string): void {
    let data: IRequest = {} as IRequest;
    objectAssign(data, this.state.request);
    data.FactoryDept = value;
    this.setState({ request: data });
  }
  @autobind
  private _setSingingDate(value: Date): void {
    var newRequest: IItem = {} as IItem;
    objectAssign(newRequest, this.state.ContractItem);
    newRequest.signingDate = value;
    this.setState({
      ContractItem: newRequest
    });
  }
  @autobind
  private _RelativePartyChanged(value: string): void {
    let data: IRequest = {} as IRequest;
    objectAssign(data, this.state.request);
    data.RelativeParty = value;
    this.setState({ request: data });
  }
  @autobind
  private _isSubjectDropDownDisabled(): boolean {
    if (!this.state.request) {
      return true;
    }
    return false;
  }
  @autobind
  private getIsHiddenHistory(): boolean {
    // console.log(this && this.state.ContractItem && this.state.ContractItem.status);
    return (
      !this ||
      !this.state ||
      !this.state.ContractItem ||
      this.state.ContractItem.status === "0"
    );
  }
  @autobind
  private ContractNoChanged(newValue: any): void {
    let data: IItem = {} as IItem;
    objectAssign(data, this.state.ContractItem);
    data.ContractNo = newValue;
    this.setState({ ContractItem: data });
  }
  @autobind
  private TitleChanged(newValue: any): void {
    let data: IItem = {} as IItem;
    objectAssign(data, this.state.ContractItem);
    data.Title = (newValue as string).trim();
    this.setState({ ContractItem: data });
  }
  @autobind
  private ContractPayWayChanged(newValue: any): void {
    let data: IItem = {} as IItem;
    objectAssign(data, this.state.ContractItem);
    data.PayWay = (newValue as string).trim();
    this.setState({ ContractItem: data });
  }
  @autobind
  private _NeedApprovalChanged(value: boolean): void {
    let data: IItem = {} as IItem;
    objectAssign(data, this.state.ContractItem);
    if (
      this.state.ContractItem.pricingcenterId &&
      this.state.ContractItem.pricingcenterId > 0
    ) {
      data.NeedApproval = value;
      data.NeedApproval_cn = value ? "是" : "否";
      this.setState({ ContractItem: data });
    } else {
      alert("没配置审价人员，不能送审价中心审核。");
    }
  }
  @autobind
  private MoneyChanged(newValue: any): void {
    let data: IItem = {} as IItem;
    objectAssign(data, this.state.ContractItem);
    data.Money = newValue;
    this.setState({ ContractItem: data });
  }
  @autobind
  private ContractObjectChanged(newValue: any): void {
    let data: IItem = {} as IItem;
    objectAssign(data, this.state.ContractItem);
    data.ContractObject = newValue;
    this.setState({ ContractItem: data });
  }

  @autobind
  private ContractremarksChanged(newValue: any): void {
    let data: IItem = {} as IItem;
    objectAssign(data, this.state.ContractItem);
    data.remarks = newValue;
    this.setState({ ContractItem: data });
  }
  private getMoneyDisabled(): boolean {
    if (this.state.ContractItem != null && this.state.ContractItem.status < 3) {
      return this.state.ContractItem.Currency === "N/A";
    }
    return true;
  }
  private getToggleDisabled(): boolean {
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
  }
  @autobind
  private _doUpload(files: File[], mill: any): void {
    // in case of multiple files,iterate or else upload the first file.
    this.setState({ uploadErrmsg: "正在上传中...." });
    let file: File = files[0];
    if (file !== undefined || file !== null) {
      if (this.state.ContractItem.Id > 0) {
        this._douploadfile(file, mill);
      } else {
        let result: IItemDataResult = this._checkItemVilide(false);
        result.success
          ? this._addItem(result.data as IItem, (value: IItem) => {
              this._douploadfile(file, mill, true);
              // this.props.onAdded(result.data,false);
            })
          : this.setState({ uploadErrmsg: result.error });
      }
    }
  }
  private _douploadfile(file: File, mill: any, isAdd: boolean = false): void {
    if (file === null) {
      return;
    }
    let item: Item = sp.web.lists
      .getByTitle(WebConfig.requestedItemsListName)
      .items.getById(this.state.ContractItem.Id);
    let status: string = this.state.ContractItem.status as string;
    const fileReader: FileReader = new FileReader();

    fileReader.onloadend = (event: Event) => {
      let attdata: any = fileReader.result;
      let subjoin: string = status === "3" ? "_s" : "";
      let newfileName: string = GetFileRandName(file.name, subjoin);
      item.attachmentFiles
        .add(newfileName, attdata)
        .then(v => {
          // console.log(v);
          let data: IItem = {} as IItem;
          objectAssign(data, this.state.ContractItem);
          if (!data.AttachmentFiles) {
            data.AttachmentFiles = [];
          }
          // console.log(data.AttachmentFiles);
          data.AttachmentFiles.push({
            ServerRelativeUrl: v.data.ServerRelativeUrl,
            FileName: v.data.FileName
          });
          //  console.log(data.AttachmentFiles);
          this.setState(
            { ContractItem: data, uploadErrmsg: "上传成功" },
            () => {
              setTimeout(() => {
                this.setState(() => ({ uploadErrmsg: "" }));
              }, 500);
            }
          );
          /*   isAdd
            ? this.props.onAdded(data, false)
            : this.props.onUpdated(data, false);*/
        })
        .catch(err => {
          let errMsg: string = err.data
            ? err.data.responseBody["odata.error"].message.value
            : err.message;
          this.setState({ uploadErrmsg: "上传失败:" + errMsg });
        });
    };

    fileReader.readAsArrayBuffer(file);
  }
  private _getButtons(): JSX.Element[] {
    let buttons: JSX.Element[] = [];

    if (this._isSubmitButtonHidden() === false) {
      buttons.push(
        <PrimaryButton
          data-automation-id="test"
          text={this.props.onAdded ? "保存草稿" : "提交"}
          onClick={this._submit}
        />
      );
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
      if (
        this.state.ContractItem &&
        this.state.ContractItem.Id > 0 &&
        (this.state.ContractItem.status === "-1" ||
          this.state.ContractItem.status === "-2")
      ) {
        buttons.push(
          <DefaultButton
            text="取消申请"
            onClick={() => {
              this._showDeleteDialog(1);
            }}
          />
        );
      }
      if (this.props.onClose !== undefined) {
        buttons.push(<DefaultButton text="关闭" onClick={this._close} />);
      }
    } else {
      if (this.state.ContractItem && this.state.ContractItem.Id > 0) {
        buttons.push(
          <PrimaryButton
            data-automation-id="test"
            text="关闭"
            onClick={() => {
              document.location.href = WebConfig.CreatedByMeListPage;
            }}
          />
        );
      }
    }
    return buttons;
  }
  @autobind
  private _close() {
    /**如果当前文档有附件
     * 如果父窗口列表里没有该记录
     * 这说明新建后没提交直接关闭的，这时需要删除此草稿文档
     */
    if (
      this.state.ContractItem.AttachmentFiles &&
      this.state.ContractItem.AttachmentFiles.length > 0
    ) {
      this.props.onClose(this.state.ContractItem.Id);
    }
    this.props.onClose();
  }
  @autobind
  private _isSubmitButtonHidden(): boolean {
    // console.log(this.state.ContractItem);
    if (
      !this.state.ContractItem ||
      (this.state.ContractItem.Id > 0 &&
        this.state.ContractItem.AuthorId !== this.state.CurUser.Id)
    ) {
      return true;
    }
    return (
      this.state.ContractItem.status === "2" ||
      this.state.ContractItem.status === "3"
    );
  }
  @autobind
  private _isEnableUpload(): boolean {
    // console.log(this.state.ContractItem);
    if (
      !this.state.ContractItem ||
      (this.state.ContractItem.Id > 0 &&
        this.state.ContractItem.AuthorId !== this.state.CurUser.Id)
    ) {
      return false;
    }
    return (
      this.state.ContractItem.status !== "1" &&
      this.state.ContractItem.status !== "2"
    );
  }
  @autobind
  private _submit(): void {
    let result: IItemDataResult = this._checkItemVilide(true);
    if (!result.success) {
      return;
    }
    let data: IItem = result.data as IItem;
    //  console.log(data);
    //  console.log(this.state.ContractItem);
    const idstr: string = this.props.id || "";
    const id: number = parseInt(idstr, 10);
    if (data.Id > 0) {
      if (this.props.CurContractItem === undefined) {
        // 这里有两种情况，1：新建时，2，页面带参数编辑时
        if (this.props.onAdded !== undefined) {
          // 新建时,交给父页面处理
          if (this.props.onAdded) {
            //  console.log(this.props.onAdded);
            this.props.onAdded(data);
          }
        } else {
          // 当前页处理
          let issubmit: boolean = false;
          if ((data.status as number) <= 0) {
            data.status = data.NeedApproval ? "1" : "2";
            issubmit = true;
          }
          // console.log(data);
          sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.getById(data.Id)
            .update(data)
            .then(value => {
              // console.log(value);
              if (this.props.onUpdated) {
                this.props.onUpdated(this.state.ContractItem);
              }
            })
            .catch(err => {
              if (err) {
                this.setState({
                  errMsg: err.data
                    ? err.data.responseBody["odata.error"].message.value
                    : err.message
                });
                console.log(err);
                return;
              }
            });
          if (issubmit) {
            let emailbodys: any = {};
            const Key: string = data.NeedApproval
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
      } else {
        // 从父页面编辑的
        sp.web.lists
          .getByTitle(WebConfig.requestedItemsListName)
          .items.getById(data.Id)
          .update(data)
          .then(updatedItem => {
            if (this.props.onUpdated !== undefined) {
              this.props.onUpdated(this.state.ContractItem);
            }
          });
      }
    } else {
      this._addItem(data, (value: IItem) => {
        if (this.props.onAdded !== undefined) {
          // console.log(value);
          this.props.onAdded(value);
        }
      });
    }
  }
  private _addItem(data: IItem, callback: (value: IItem) => void): void {
    // console.log(data);
    if (data === null) {
      return;
    }
    sp.web.lists
      .getByTitle(this.props.requestedItemsListName)
      .items.add(data)
      .then(v => {
        objectAssign(data, this.state.ContractItem);
        data.Id = v.data.Id;
        data.AuthorId = v.data.AuthorId;
        const curdate: string = v.data.Created.split("T")[0];
        const curdtstr: string = curdate.replace(/-/g, "");

        sp.web.lists
          .getByTitle(this.props.requestedItemsListName)
          .items.filter(`Created ge datetime'${curdate}T00:00:00.000Z'`)
          .orderBy("Id", true)
          .select("requestNo,Id")
          .top(1)
          .get()
          .then(preitems => {
            let No: number = 0;
            let fisrtNo: string = "";
            if (preitems.length > 0) {
              let preitem: string = preitems[0].requestNo;
              No = data.Id - preitems[0].Id; // parseInt(preitem.substr(preitem.length - 3), 10);
              if (No > 0) {
                fisrtNo = preitem.substr(
                  (this.state.request.subabbr + curdtstr).length
                );
              }
            }
            let requestNo: any = {
              requestNo: this._getrequestNo(No, curdtstr, fisrtNo)
            };
            sp.web.lists
              .getByTitle(WebConfig.StaffDeptListName)
              .items.filter("StaffId eq " + data.AuthorId)
              .get()
              .then(stfinfos => {
                if (stfinfos.length > 0) {
                  requestNo.StaffDeptId = stfinfos[0].DeptId;
                }
                sp.web.lists
                  .getByTitle(this.props.requestedItemsListName)
                  .items.getById(data.Id)
                  .update(requestNo)
                  .then(() => {
                    data.requestNo = requestNo.requestNo;
                    this.setState({ ContractItem: data }, () => {
                      //    console.log(data);
                      callback(data);
                    });
                    console.log(`成功更新requestNo为：${requestNo.requestNo}`);
                  })
                  .catch(err => {
                    console.log("更新requestNo失败", err);
                  });
              });
          });
      })
      .catch(error => {
        if (error) {
          console.log(error);
          this.setState({
            errMsg: error.data
              ? error.data.responseBody["odata.error"].message.value
              : error.message
          });
        }
      });
  }
  @autobind
  private _getrequestNo(No: number, curdtstr: string, fisrtNo: string): string {
    let firstNo: number = parseInt(fisrtNo, 10);
    if (isNaN(firstNo)) {
      firstNo = 0;
    }
    if (No === 0) {
      No = 1;
    }
    let Nostr: string = `${No + firstNo}`;
    const Nolength: number = Nostr.length;
    if (Nolength < 3) {
      Nostr = `${"000".substr(0, 3 - Nolength)}${Nostr}`;
    }
    // console.log(this.state.request.subabbr);
    return `${this.state.request.subabbr}${curdtstr}${Nostr}`;
  }
  @autobind
  private _checkItemVilide(checkForm: boolean = true): IItemDataResult {
    let result: IItemDataResult = { success: false, data: null, error: null };
    let data: IItem = {} as IItem;
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
    let keys: string[] = [
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
    } else {
      result.error = "请先完整填写所有必填项";
    }
    return result;
  }

  @autobind
  private _closeDeleteDialog(): void {
    this.setState({ hideDeleteDialog: true });
  }
  @autobind
  private _showDeleteDialog(dtype: number = 0): void {
    this.setState({ hideDeleteDialog: false, DialogType: dtype });
  }
  @autobind
  private _deleteRequest(request: IItem): void {
    //  console.log(request);
    if (this.state.DialogType === 0) {
      sp.web.lists
        .getByTitle(WebConfig.requestedItemsListName)
        .items.getById(request.Id)
        .delete()
        .then(() => {
          this.setState(
            {
              hideDeleteDialog: true
            },
            () => {
              if (this.props.onDeleted) {
                this.props.onDeleted(request);
              } else {
                document.location.href = WebConfig.CreatedByMeListPage;
              }
            }
          );
        });
    } else {
      sp.web.lists
        .getByTitle(WebConfig.requestedItemsListName)
        .items.getById(request.Id)
        .update({ status: "-4" })
        .then(() => {
          this.setState(
            {
              hideDeleteDialog: true
            },
            () => {
              document.location.href = WebConfig.CreatedByMeListPage;
            }
          );
        });
    }
  }
  @autobind
  public componentDidMount(): void {
    const idstr: string = this.props.id || "";
    const id: number = parseInt(idstr, 10);
    sp.web.currentUser.get().then(user => {
      // console.log(user);
      this.setState({ CurUser: user }, () => {
        if (!isNaN(id) && id > 0) {
          sp.web.lists
            .getByTitle(WebConfig.subjectsListName)
            .items.orderBy("Title")
            .getAll()
            .then((response: IContractSubject[]) => {
              let options: any[] = [];
              sp.web.lists
                .getByTitle(WebConfig.requestedItemsListName)
                .items.getById(id)
                .expand(
                  "Author",
                  "AttachmentFiles",
                  "ContractType",
                  "lawyer/Id",
                  "pricingcenter/Id",
                  "representative/Id"
                )
                .select(
                  "*",
                  "Author/Title",
                  "Author/EMail",
                  "AttachmentFiles",
                  "ContractType/Title",
                  "lawyer/Title",
                  "pricingcenter/Title",
                  "representative/EMail"
                )
                .get()
                .then(item => {
                  let subjid: number;
                  let subjstr: string;
                  if (!user.IsSiteAdmin && item.AuthorId !== user.Id) {
                    if (
                      item.lawyerId !== user.Id &&
                      item.pricingcenterId !== user.Id
                    ) {
                      sp.web.lists
                        .getByTitle(WebConfig.contractTypeListName)
                        .items.getById(item.ContractTypeId)
                        .get()
                        .then(ContractTypeInfo => {
                          if (
                            ContractTypeInfo.pricecenterId !== user.Id &&
                            ContractTypeInfo.lawyerId !== user.Id &&
                            ContractTypeInfo.otherpricecentersId.indexOf(
                              user.Id
                            ) < 0 &&
                            ContractTypeInfo.otherlawyersId.indexOf(user.Id) < 0
                          ) {
                            if (item.StaffDeptId && item.StaffDeptId > 0) {
                              sp.web.lists
                                .getByTitle(WebConfig.StaffDeptListName)
                                .items.filter(
                                  "StaffId eq " +
                                    user.Id +
                                    " and DeptId eq " +
                                    item.StaffDeptId
                                )
                                .getAll()
                                .then(sdfs => {
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

                  response.map((oitem, i) => {
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
                  const reqt: IRequest = {
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
                  const curitem: IItem = {
                    Id: item.Id,
                    ContractNo: item.ContractNo,
                    Title: item.Title,
                    ContractType: item.ContractType.Title,
                    ContractTypeId: item.ContractTypeId,
                    ContractObject: item.ContractObject,
                    Money: item.Money,
                    MoneyText:
                      item.Currency === "N/A"
                        ? item.Currency
                        : `${item.Currency}${item.Money}`,
                    Currency: item.Currency,
                    PayWay: item.PayWay,
                    NeedApproval: item.NeedApproval,
                    NeedApproval_cn: item.NeedApproval ? "是" : "否",
                    status: item.status,
                    remarks: item.remarks,
                    signingDate: item.signingDate,
                    AttachmentFiles:
                      item.AttachmentFiles &&
                      item.AttachmentFiles.map(fileinfo => {
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
                      ? ([
                          {
                            email: item.representative.EMail,
                            id: item.representativeId
                          }
                        ] as IOfficeUiFabricPeoplePickerSelection[])
                      : [],
                    Lawyer: item.lawyer.Title,
                    Pricingcenter: item.pricingcenter.Title
                  };
                  // console.log(curitem);
                  this.setState({
                    ContractItem: curitem,
                    request: reqt,
                    SubjectOptions: options
                  });
                  //var offset = new Date().getTimezoneOffset()* 60 * 1000;

                  // console.log(moment(item.signingDate, moment.ISO_8601).format("llll")) ;
                  let typeoptions: any[] = [];
                  sp.web.lists
                    .getByTitle(WebConfig.contractTypeListName)
                    .items.select("*", "pricecenter/Title", "laywer/Title")
                    .expand("pricecenter", "laywer")
                    .orderBy("Title")
                    .getAll()
                    .then((types: any[]) => {
                      // console.log(types);
                      types.map(typeitem => {
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
                      this.setState({
                        Typeoptions: typeoptions
                      });
                    })
                    .catch(e => {
                      console.log(e);
                      this.setState({
                        errMsg: e.data
                          ? e.data.responseBody["odata.error"].message.value
                          : e.message
                      });
                    });
                });
            });
        } else {
          if (this.state.ContractItem) {
            let tempReq: IRequest = {} as IRequest;
            let setReq: boolean = false;
            if (this.state.ContractItem.FactoryDept) {
              if (
                !this.state.request.FactoryDept ||
                this.state.request.FactoryDept.trim() === ""
              ) {
                objectAssign(tempReq, this.state.request);
                tempReq.FactoryDept = this.state.ContractItem.FactoryDept;
                //  console.log(tempReq.FactoryDept);
                // this.setState({ request: tempReq });
                setReq = true;
              }
            }
            if (this.state.ContractItem.RelativeParty) {
              if (
                !this.state.request.RelativeParty ||
                this.state.request.RelativeParty.trim() === ""
              ) {
                if (!setReq) {
                  objectAssign(tempReq, this.state.request);
                }
                tempReq.RelativeParty = this.state.ContractItem.RelativeParty;
                setReq = true;
                // this.setState({ request: tempReq });
              }
            }
            if (setReq) {
              this.setState({ request: tempReq });
            }
          }
        }
      });
    });
  }
}
