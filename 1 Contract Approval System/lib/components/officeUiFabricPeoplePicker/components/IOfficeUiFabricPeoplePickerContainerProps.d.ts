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
    selections?: IOfficeUiFabricPeoplePickerSelection[];
}
