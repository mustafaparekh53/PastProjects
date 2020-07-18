import { IItem } from "../../ComComponents/interfaces/IItem";
import { IColumnField } from "../../ComComponents/interfaces/IColumnField";

export interface IApprovalFormState {
  curUser: any;
  requestedItemsListFields: IColumnField[];
  id?: number;
  submited?: boolean;
  curItem: IItem;
  sendtype?: string;
  description?: string;
  result?: boolean;
  AttachmentFiles?: any[];
  uploadErrmsg?: string;
}
