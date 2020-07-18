import { IColumn } from "office-ui-fabric-react/lib/DetailsList";
export interface IUxpListState {
    selectionDetails: string;
    items: any[];
    ishiddenEditButton?: boolean;
    ishiddenNewButton?: boolean;
    hasCols?: IColumn[];
    upDateTime?: number;
}
