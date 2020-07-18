/// <reference types="react" />
import * as React from "react";
import { IStaffDeptFormContainerProps } from "./IStaffDeptFormContainerProps";
import { IStaffDeptFormContainerState } from "./IStaffDeptFormContainerState";
import "@pnp/polyfill-ie11";
export default class StaffDeptFormContainer extends React.Component<IStaffDeptFormContainerProps, IStaffDeptFormContainerState> {
    constructor(props: any);
    render(): React.ReactElement<IStaffDeptFormContainerProps>;
    componentDidMount(): void;
    private fetchDeptOptions();
    private fetchStaffItems;
    private updateContractItems;
    private deleteStaffItems;
    private addStaffItem;
    private updateStaffItem;
}
