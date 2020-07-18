export interface IAppresult {
    description: string;
    result: boolean;
    position: string;
    Created: string;
    Author: string;
    AttachmentFiles?: any[];
}
export interface IAppresultstate {
    historyItem: IAppresult[];
}
