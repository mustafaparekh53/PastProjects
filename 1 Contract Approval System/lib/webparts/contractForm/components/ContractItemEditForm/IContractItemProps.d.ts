import { IItem } from "../../../ComComponents/interfaces/IItem";
import { IRequest } from "../../../ComComponents/interfaces/IRequest";
import { RequestFormMode } from "../IContractFormProps";
export interface IContractItemProps {
    CurContractItem: IItem;
    Typeoptions: any[];
    SubjectOptions: any[];
    request: IRequest;
    id: string;
    mode: RequestFormMode;
}
