import { Ipageditems } from "../../ComComponents/interfaces/Ipageditems";
export interface IContractListState {
    list1: Ipageditems;
    user: any;
    list2?: Ipageditems;
    total0?: number;
    total1?: number;
    total2?: number;
    total3?: number;
    total4?: number;
    filterstr?: string;
    tabindex?: number;
    refreshtime?: string;
    contrTypeids?: number[];
    list3?: Ipageditems;
    fieldNames?: number;
}
