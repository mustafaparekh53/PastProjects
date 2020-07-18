export interface IAttachmentprop {
    docid: number;
    deleteenable: boolean;
    defaultatts: any[];
    setAtts?: (items: any[]) => void;
    listName?: string;
}
