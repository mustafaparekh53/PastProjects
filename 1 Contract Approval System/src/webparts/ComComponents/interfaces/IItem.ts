import { IPersonaProps } from "office-ui-fabric-react/lib/Persona";
import { IOfficeUiFabricPeoplePickerSelection } from "../../../components/officeUiFabricPeoplePicker";

export interface IItem {
  Id?: number;
  ContractNo: string;
  Title: string;
  ContractType: string;
  ContractTypeId: number;
  ContractObject: string;
  Money?: number;
  MoneyText: string;
  Currency: string;
  PayWay: string;
  NeedApproval: boolean;
  status: number | string;
  Lawyer: IPersonaProps & { key: string | number }[];
  Pricingcenter: IPersonaProps & { key: string | number }[];
  remarks?: string;
  AttachmentFiles?: any[];
  statusDesc?: string;
  lawyerId?: number;
  pricingcenterId?: number;
  requestNo?: string;
  CurrentHandler?: number;
  AuthorId?: number;
  mainbody: string;
  RelativeParty: string;
  FactoryDept: string;
  Author: any;
  signingDate?: Date;
  representative?: IOfficeUiFabricPeoplePickerSelection[];
  representativeId?: number;
  applog?: string;
  NeedApproval_cn: string;
}
export const statusDesc: any = {
  "0": "草稿",
  "1": "审价中心审批中",
  "2": "律师审批中",
  "3": "合同已审",
  "-1": "审价中心驳回",
  "-2": "律师驳回",
  "-4": "申请取消"
};
