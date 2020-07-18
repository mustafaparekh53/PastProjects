export interface IOfficeUiFabricPeoplePickerSelection {
  id: number;
  email: string;
}

export interface IOfficeUiFabricPeoplePickerContainerProps {
  label?: string;
  principalTypeUser: boolean;
  principalTypeSharePointGroup: boolean;
  principalTypeSecurityGroup: boolean;
  principalTypeDistributionList: boolean;
  itemLimit: number;
  maximumEntitySuggestions: number;
  onChange?: (selections: IOfficeUiFabricPeoplePickerSelection[]) => void;
  selections?: IOfficeUiFabricPeoplePickerSelection[]; //this prop is used to reset selection after the form is submitted. It is highly not recommend to use it for controlled component because it triggers REST requests
}
