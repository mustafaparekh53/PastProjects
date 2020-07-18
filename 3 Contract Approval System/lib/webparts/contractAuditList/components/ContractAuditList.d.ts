/// <reference types="react" />
import * as React from "react";
import { IContractAuditListProps } from "./IContractAuditListProps";
import { IAuditListState } from "./IAuditListState";
import "@pnp/polyfill-ie11";
export default class ContractAuditList extends React.Component<IContractAuditListProps, IAuditListState> {
    constructor(props: any);
    render(): React.ReactElement<IContractAuditListProps>;
    componentDidMount(): void;
    private _loaddatasbyme();
    private _loadcontractItems(items, tbindex);
    private _loaddatas();
    private _onRenderItemColumn(item, index, column);
    private _onRenderItemColumn3(item, index, column);
    private _ItemInvoked1(item?, index?, ev?);
    private _ItemInvoked2(item?, index?, ev?);
    private _ItemInvoked3(item?, index?, ev?);
    private _onSelectedChanged(items);
    private _toaudit(selectItem);
    private _listchanged(item?, ev?);
    private _approvedbyme();
    private _openRequestForm(items);
    private _setItemResult(dvalue, status, comments, sendtype, itemscount);
    private _closeModal();
    private _showModal();
    private _getmyctrlistlink();
}
