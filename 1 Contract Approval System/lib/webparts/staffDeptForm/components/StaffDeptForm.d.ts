/// <reference types="react" />
import * as React from "react";
import { IStaffDeptFormProps } from "./IStaffDeptFormProps";
import "@pnp/polyfill-ie11";
import { IStaffDeptFormState } from "./IStaffDeptFormState";
export default class StaffDeptForm extends React.Component<IStaffDeptFormProps, IStaffDeptFormState> {
    constructor(props: any);
    render(): React.ReactElement<IStaffDeptFormProps>;
    private _StaffChanged;
    private changeDeptState;
    private _onExistsChange;
    private _AddClicked;
    private onDeleteStaffs;
    private _closeDeleteDialog;
    private _deleteStaffs;
}
