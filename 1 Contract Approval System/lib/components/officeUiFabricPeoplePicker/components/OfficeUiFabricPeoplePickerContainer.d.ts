/// <reference types="react" />
import * as React from "react";
import { IOfficeUiFabricPeoplePickerContainerProps } from "./IOfficeUiFabricPeoplePickerContainerProps";
import "@pnp/polyfill-ie11";
import { IOfficeUiFabricPeoplePickerContainerState } from "./IOfficeUiFabricPeoplePickerContainerState";
export declare class OfficeUiFabricPeoplePickerContainer extends React.Component<IOfficeUiFabricPeoplePickerContainerProps, IOfficeUiFabricPeoplePickerContainerState> {
    constructor(props: any);
    render(): React.ReactElement<IOfficeUiFabricPeoplePickerContainerProps>;
    componentDidMount(): void;
    componentWillReceiveProps(newProps: IOfficeUiFabricPeoplePickerContainerProps): void;
    private _getSharePointUserPersonas(entities);
    private _fetchSelectionByEmail;
    private _onSelectionChange;
    private _onFilterChanged;
    private _getQueryParams(terms);
    /**
     * @function
     * Returns fake people results for the Mock mode
     */
    private searchPeopleFromMock(terms);
    /**
     * @function
     * Returns people results after a REST API call
     */
    private _searchPeople(terms);
}
