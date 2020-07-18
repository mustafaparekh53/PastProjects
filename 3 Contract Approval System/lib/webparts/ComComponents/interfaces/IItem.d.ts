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
    Lawyer: IPersonaProps & {
        key: string | number;
    }[];
    Pricingcenter: IPersonaProps & {
        key: string | number;
    }[];
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
export declare const statusDesc: any;
