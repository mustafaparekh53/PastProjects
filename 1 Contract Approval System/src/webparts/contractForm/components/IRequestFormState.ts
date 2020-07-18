import { IRequest } from "../../ComComponents/interfaces/IRequest";
import { IColumnField } from "../../ComComponents/interfaces/IColumnField";
import { IItem } from "../../ComComponents/interfaces/IItem";

export interface IRequestFormState {
  request: IRequest;
  requestedItemsListFields: IColumnField[];
  requestedItems: IItem[];
  SubjectOptions: any[];
  TypeOptions: any[];
  hideDeleteDialog: boolean;
  curUser: any;
  curItem: IItem;
  showModal: boolean;
  lawyerId?: number;
  PricingcenterId?: number;
  defaultSubjectId?: number;
}
