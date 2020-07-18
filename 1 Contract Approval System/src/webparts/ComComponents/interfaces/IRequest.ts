export interface IRequest {
  Id?: number;
  ApproverId?: number;
  ApproverStringId?: string;
  ContractSubject?: string;
  ContractSubjectId:number;
  RelativeParty:string;
  Author:any;
  subabbr:string;
  FactoryDept?:string;
  state:string;
}
