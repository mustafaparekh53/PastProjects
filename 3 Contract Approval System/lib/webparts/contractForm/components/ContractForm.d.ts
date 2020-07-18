/// <reference types="react" />
import * as React from "react";
import { IContractFormProps } from "./IContractFormProps";
import { IRequestFormState } from "./IRequestFormState";
import "@pnp/polyfill-ie11";
import { IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
export default class ContractForm extends React.Component<IContractFormProps, IRequestFormState> {
    constructor(props: any);
    render(): React.ReactElement<IContractFormProps>;
    changeDropdownState(item: IDropdownOption): void;
    private _updatedItem(item, doClose?);
    private _addedItem(item, closeModal?);
    private _submit();
    private _submitsubitem(items, callback);
    private _isSubjectDropDownDisabled();
    private _getButtons();
    private _RelativePartyChanged(value);
    private _FactoryDeptChanged(value);
    private _isSubmitButtonHidden();
    private _fetchRequestedItems(props);
    private jumpHomePage();
    private _updateRequest(emailbodys?);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    private _fetchSubjectOptions(props);
    private _NewRequestForm();
    private _DeleteRequests(items);
    private _openRequestForm(item, index);
    private _showModal();
    private DeleteAndClose(id?);
    private _closeModal();
    private _removeItem(item);
}
