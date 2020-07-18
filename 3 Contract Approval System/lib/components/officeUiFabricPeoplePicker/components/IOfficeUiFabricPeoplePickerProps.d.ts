import { SharePointUserPersona } from "../models";
export interface IOfficeUiFabricPeoplePickerProps {
    label?: string;
    onResolveSuggestions: (filter: string, selectedItems?: SharePointUserPersona[]) => SharePointUserPersona[] | PromiseLike<SharePointUserPersona[]>;
    selectedItems?: SharePointUserPersona[];
    itemLimit: number;
    onChange?: (selectedItems?: SharePointUserPersona[]) => void;
}
