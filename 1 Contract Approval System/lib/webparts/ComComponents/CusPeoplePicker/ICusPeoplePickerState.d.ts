import { IPersonaProps } from "office-ui-fabric-react/lib/Persona";
export interface ICusPeoplePickerState {
    currentPicker?: number | string;
    delayResults?: boolean;
    peopleList: IPersonaProps[];
    mostRecentlyUsed: IPersonaProps[];
    currentSelectedItems?: IPersonaProps[];
}
