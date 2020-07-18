import { IColumnField } from "../interfaces/IColumnField";
import { SelectionMode, IColumn } from "office-ui-fabric-react";
import { IItem } from "../interfaces/IItem";

export interface IUxpListProps {
  data: any; // response from renderListDataAsStream()
  schemaFields: any[]; // response from renderListDataAsStream()
  hiddenFields?: string[];
  onNewButtonClicked?: (selectedItem?: any) => void;
  onEditButtonClicked?: (selectedItem: any, index?: number) => void;
  onDeleteButtonClicked?: (selectedItems: any[]) => void;
  onItemInvoked?: (item?: any, index?: number, ev?: Event) => void;
  label: string;
  selectionMode?: SelectionMode;
  extdata?: any;
  onRenderItemColumn?: (
    item: any,
    index: number,
    column: IColumn
  ) => JSX.Element;
  editButtonTitle?: string;
  newButtonTitle?: string;
  onSelectedChanged?: (items: any[]) => boolean;
  onMultEditClicked?: (selectionItems: any[]) => void;
  visible?: boolean;
  refreshtime?: string;
  ishiddenNewButton?: boolean;
}
