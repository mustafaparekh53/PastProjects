export interface IEmailTemplate {
    subject: string;
    body: string;
}
export interface IWebConfig {
    hosturl: string;
    subjectsListName: string;
    requestedItemsListName: string;
    contractTypeListName: string;
    AddrListName: string;
    DeptsListName: string;
    StaffDeptListName: string;
    SystemName: string;
    CreatedByMeListPage: string;
    NewContractPage: string;
    InapprovalListPage: string;
    ApprovalPage: string;
    EmailToApprovalTemplate: IEmailTemplate;
    EmailToMeTemplate: IEmailTemplate;
    EmailResultTemplate: IEmailTemplate;
    EmailToLawyerTemplate: IEmailTemplate;
    MyCusCssUrl: string;
    AdminGroupName: string;
}
export declare const CurrentUrl: string;
export declare const WebConfig: IWebConfig;
