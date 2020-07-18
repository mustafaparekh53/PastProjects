/// <reference types="react" />
import * as React from "react";
import { IContractListProps } from "./IContractListProps";
import { IContractListState } from "./IContractListState";
import "@pnp/polyfill-ie11";
import "moment/locale/zh-cn";
export default class ContractList extends React.Component<IContractListProps, IContractListState> {
    private Provtitem1;
    constructor(props: any);
    render(): React.ReactElement<IContractListProps>;
    private _openRequestForm(item, index);
    private _NewRequestForm();
    private handlePaginatorChange2(active);
    componentDidMount(): void;
    private _onRenderItemColumn(item, index, column);
    private _getpageditems2(page);
    private _changtab(itemKey);
    private _listchanged(item?, ev?);
    private _fillreqdata2(req, page, pgdata);
    private _pagedItemsTo(PgItems, targetPage, PgNum, pgdata);
    private _getprestatus(data);
}
