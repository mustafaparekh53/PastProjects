import { SPHttpClient } from '@microsoft/sp-http';
export enum RequestFormMode {
  Requester,
  Approver,
  Admin,
}
export interface IContractFormProps {
  spHttpClient: SPHttpClient;
  siteUrl: string;
  id: string;
  mode: RequestFormMode;
}
