import { SPHttpClient } from '@microsoft/sp-http';
export declare enum RequestFormMode {
    Requester = 0,
    Approver = 1,
    Admin = 2,
}
export interface IContractFormProps {
    spHttpClient: SPHttpClient;
    siteUrl: string;
    id: string;
    mode: RequestFormMode;
}
