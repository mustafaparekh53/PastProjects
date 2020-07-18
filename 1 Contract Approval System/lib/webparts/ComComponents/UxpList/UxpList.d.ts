/// <reference types="react" />
import * as React from "react";
import { IUxpListProps } from "./IUxpListProps";
import { IUxpListState } from "./IUxpListState";
export default class UxpList extends React.PureComponent<IUxpListProps, IUxpListState> {
    private _selection;
    constructor(props: any);
    render(): React.ReactElement<IUxpListProps>;
    componentDidMount(): void;
    selectEmit(value: any): void;
    componentWillReceiveProps(nextProps: IUxpListProps): void;
    private _getCommandBarItems();
    private _getCommandBarFarItems();
    private _getSelectionDetails();
    private _cancelSelection();
    private _getItems(props);
    private _getColumns();
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
}
