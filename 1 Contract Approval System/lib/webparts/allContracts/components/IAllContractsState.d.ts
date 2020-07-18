import { IOfficeUiFabricPeoplePickerSelection } from "../../../components/officeUiFabricPeoplePicker";
export interface IAllContractsState {
    curUser: any;
    requestedItems: any[];
    contractTypes: any[];
    ContractType: string;
    ContractStatu: string;
    ContractMainBodies: any[];
    ContractMainBody: string;
    StatffDepts: any[];
    curDeptId: string;
    ContractTitle: string;
    ContractNo: string;
    filterCountstr: string;
    filterstr: string;
    ContractCurrency: string;
    minMoney: string;
    maxMoney: string;
    ContractMaxDate: Date;
    ContractMinDate: Date;
    RelativeParty: string;
    current: number;
    total: number;
    pageSize: number;
    fieldNames: number;
    Author: IOfficeUiFabricPeoplePickerSelection[];
}
