import { IContractListState } from "../../contractList/components/IContractListState";
export interface IAuditListState extends IContractListState {
    lawyerId: number;
    PricingcenterId: number;
    QueryConditions: string;
    total2?: number;
    tabindex?: number;
    curItems?: any[];
    curUser?: any;
    showModal: boolean;
    isWaitforLaywer?: boolean;
    contractItems: number[];
}
