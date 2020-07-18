import { IApprovalFormProps } from "./IApprovalFormProps";
import { IItem } from "../../ComComponents/interfaces/IItem";
export interface IApprovalItemProps extends IApprovalFormProps {
    curItem: IItem;
    curUser: any;
    onUpdatedItem: (item: IItem, status: string, comments: string, sendtype: string) => void;
    onSelected?: (item: any) => void;
}
