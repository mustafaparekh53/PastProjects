import { IApprovalFormProps } from "./IApprovalFormProps";
import { IItem } from "../../ComComponents/interfaces/IItem";
import { IRequest } from "../../ComComponents/interfaces/IRequest";

export interface IApprovalItemProps extends IApprovalFormProps {
    curItem:IItem;
    curUser:any;
    onUpdatedItem:(item:IItem,status:string,comments:string,sendtype:string)=>void;
    onSelected?:(item:any)=>void;
}