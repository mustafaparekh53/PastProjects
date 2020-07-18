import { IOfficeUiFabricPeoplePickerSelection } from "../../../components/officeUiFabricPeoplePicker";

export interface IStaffDeptFormState {
  StaffIds: number[];
  DeptId: number;
  ChangeExists: boolean;
  ErrMsg: string;
  hideDeleteDialog: boolean;
  curItemId: number;
  selectedItems: any[];
  selections?: IOfficeUiFabricPeoplePickerSelection[];
}
