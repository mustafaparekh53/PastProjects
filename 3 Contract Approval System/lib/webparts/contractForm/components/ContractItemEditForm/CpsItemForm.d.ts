/// <reference types="react" />
import React = require("react");
import { IContractFormProps } from "../IContractFormProps";
import { IItemState } from "./IItemState";
import "@pnp/polyfill-ie11";
import "moment/locale/zh-cn";
import { BaseComponent } from "office-ui-fabric-react/lib/Utilities";
export default class CpsItemForm extends BaseComponent<any, IItemState> {
    constructor(props: any);
    render(): React.ReactElement<IContractFormProps>;
    private changeDropdownState(item);
    private _onDeletedItems(items);
    private _formatDate(datevale);
    private changemainbodyState(item);
    private _ReqresChanged(items?);
    private _setContractinfo();
    private changeTypeDropdownState(item);
    private getTxtMsg(value);
    private _FactoryDeptChanged(value);
    private _setSingingDate(value);
    private _RelativePartyChanged(value);
    private _isSubjectDropDownDisabled();
    private getIsHiddenHistory();
    private ContractNoChanged(newValue);
    private TitleChanged(newValue);
    private ContractPayWayChanged(newValue);
    private _NeedApprovalChanged(value);
    private MoneyChanged(newValue);
    private ContractObjectChanged(newValue);
    private ContractremarksChanged(newValue);
    private getMoneyDisabled();
    private getToggleDisabled();
    private _doUpload(files, mill);
    private _douploadfile(file, mill, isAdd?);
    private _getButtons();
    private _close();
    private _isSubmitButtonHidden();
    private _isEnableUpload();
    private _submit();
    private _addItem(data, callback);
    private _getrequestNo(No, curdtstr, fisrtNo);
    private _checkItemVilide(checkForm?);
    private _closeDeleteDialog();
    private _showDeleteDialog(dtype?);
    private _deleteRequest(request);
    componentDidMount(): void;
}
