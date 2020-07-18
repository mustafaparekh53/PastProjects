import { IItem } from "../../../ComComponents/interfaces/IItem";
import { IRequest } from "../../../ComComponents/interfaces/IRequest";
import { IPersonaProps } from "office-ui-fabric-react/lib/Persona";

export interface IItemState {
  ContractItem: IItem;
  isdisabled: boolean;
  currentSelectedLawyer: IPersonaProps[];
  currentSelectedPricingcenter: IPersonaProps[];
  hideDeleteDialog: boolean;
  DialogType: number;
  uploadErrmsg?: string;
  request: IRequest;
  SubjectOptions: any[];
  Typeoptions: any[];
  CurUser: any;
  errMsg?: string;
}
