import * as React from "react";
import styles from "./UxpList.module.scss";
import { IUxpListProps } from "./IUxpListProps";
import { IUxpListState } from "./IUxpListState";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  IColumn,
  SelectionMode,
  ColumnActionsMode
} from "office-ui-fabric-react/lib/DetailsList";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import { Label } from "office-ui-fabric-react/lib/Label";
//import emitter from "../../ComComponents/ev";
import * as _ from "lodash";
export default class UxpList extends React.PureComponent<
  IUxpListProps,
  IUxpListState
> {
  private _selection: Selection = new Selection({
    onSelectionChanged: () => {
      this.setState({
        selectionDetails: this._getSelectionDetails()
      });
      if (this.props.onSelectedChanged) {
        //  console.log("this.props.onSelectedChanged");
        let states: any = this.props.onSelectedChanged(
          this._selection.getSelection()
        );
        // this.selectEmit(states);
        this.setState({
          ishiddenEditButton: states.ishiddenEditButton,
          ishiddenNewButton: states.ishiddenNewButton
        });
      } else {
        //  console.log("no this.props.onSelectedChanged");
      }
    }
  });

  constructor(props: any) {
    super(props);
    this.state = {
      selectionDetails: this._getSelectionDetails(),
      items: this._getItems(props),
      ishiddenNewButton: this.props.ishiddenNewButton === true ? true : false,
      hasCols: this._getColumns()
      // upDateTime: 0
    };
  }

  public render(): React.ReactElement<IUxpListProps> {
    return this.props.visible !== undefined &&
      this.props.visible === false ? null : (
      <div className={styles.uxpList}>
        {this.props.label.length > 0 ? (
          <Label style={{ marginLeft: "20px" }}>
            <h4 style={{ margin: "0", padding: "0" }}>{this.props.label}</h4>
          </Label>
        ) : (
          ""
        )}
        <CommandBar
          isSearchBoxVisible={false}
          items={this._getCommandBarItems()}
          farItems={this._getCommandBarFarItems()}
        />
        <DetailsList
          className={styles.detailsList}
          items={this.state.items}
          columns={this.state.hasCols}
          layoutMode={DetailsListLayoutMode.justified}
          selection={this._selection}
          selectionPreservedOnEmptyClick={true}
          selectionMode={
            this.props.selectionMode === undefined
              ? SelectionMode.single
              : this.props.selectionMode
          }
          onItemInvoked={this.props.onItemInvoked}
          onRenderItemColumn={this.props.onRenderItemColumn}
        />
      </div>
    );
  }

  // tslint:disable-next-line:no-empty
  public componentDidMount(): void {}
  public selectEmit(value: any): void {
    // console.log(value);
    //emitter.emit("setIsLaywer",value);
  }
  public componentWillReceiveProps(nextProps: IUxpListProps): void {
    //console.log(nextProps);
    // this._getColumns();
    //let ctime: number = new Date().getTime();
    //let difTime: number = ctime - this.state.upDateTime;
    //console.log(difTime);
    //  if (difTime > 4000 || difTime < 100) {
    this.setState({
      // upDateTime: new Date().getTime(),
      items: this._getItems(nextProps),
      hasCols: this._getColumns()
    });
    //}
  }

  private _getCommandBarItems(): IContextualMenuItem[] {
    var items: IContextualMenuItem[] = [];
    // console.log(this.state.ishiddenNewButton);
    if (
      this._selection.getSelectedCount() === 0 &&
      this.props.onNewButtonClicked !== undefined &&
      !this.state.ishiddenNewButton
    ) {
      items.push({
        key: "newItem",
        name: this.props.newButtonTitle || "新建",
        icon: "Add",
        onClick: this.props.onNewButtonClicked
      });
    }

    if (this._selection.getSelectedCount() === 1) {
      if (this.props.onEditButtonClicked !== undefined) {
        // tslint:disable-next-line:no-empty
        if (
          this.state.ishiddenEditButton !== undefined &&
          this.state.ishiddenEditButton
        ) {
        } else {
          items.push({
            key: "editItem",
            name: this.props.editButtonTitle || "编辑",
            icon: "Edit",
            onClick: () => {
              if (
                this.props.selectionMode !== undefined &&
                this.props.selectionMode === SelectionMode.multiple &&
                this.props.onMultEditClicked
              ) {
                this.props.onMultEditClicked(this._selection.getSelection());
              } else {
                this.props.onEditButtonClicked(
                  this._selection.getSelection()[0],
                  this._selection.getSelectedIndices()[0]
                );
              }
            }
          });
        }
      }
      if (
        this.props.onNewButtonClicked !== undefined &&
        !this.state.ishiddenNewButton
      ) {
        items.push({
          key: "newItem",
          name: this.props.newButtonTitle || "新建",
          icon: "Add",
          onClick: () => {
            this.props.onNewButtonClicked(this._selection.getSelection()[0]);
          }
        });
      }
    }
    if (this._selection.getSelectedCount() > 0) {
      if (this.props.onDeleteButtonClicked !== undefined) {
        items.push({
          key: "deletItem",
          name: "删除",
          icon: "Delete",
          onClick: () => {
            if (this.props.onDeleteButtonClicked) {
              this.props.onDeleteButtonClicked(this._selection.getSelection());
            }
          }
        });
      }
      if (this.props.onMultEditClicked !== undefined) {
        // tslint:disable-next-line:no-empty
        if (
          this.state.ishiddenEditButton !== undefined &&
          this.state.ishiddenEditButton
        ) {
        } else {
          items.push({
            key: "editItem",
            name: this.props.editButtonTitle || "编辑",
            icon: "Edit",
            onClick: () => {
              if (
                this.props.selectionMode !== undefined &&
                this.props.selectionMode === SelectionMode.multiple
              ) {
                this.props.onMultEditClicked(this._selection.getSelection());
              }
            }
          });
        }
      }
    }
    return items;
  }

  private _getCommandBarFarItems(): IContextualMenuItem[] {
    var items: IContextualMenuItem[] = [];

    if (this._selection.getSelectedCount() > 0) {
      items.push({
        key: "cancelSelection",
        name: `${this._getSelectionDetails()}`,
        icon: "Cancel",
        onClick: this._cancelSelection
      });
    }

    return items;
  }

  private _getSelectionDetails(): string {
    return `已选择${this._selection.getSelectedCount()}条记录`;
  }

  @autobind
  private _cancelSelection() {
    this._selection.setAllSelected(false);
  }
  @autobind
  private _getItems(props: IUxpListProps): any[] {
    let items: any[] = [];
    //  console.log(props.data,props.schemaFields);
    if (props.data && props.schemaFields) {
      let rows: any[] = props.data; //.Row;
      let fields: any[] = props.schemaFields;

      rows.map((row: any) => {
        let item: {} = {};

        fields.map((field: any) => {
          let name = field.Name;
          let type = field.Type;
          switch (type) {
            case "User":
              if (row[name] instanceof Array) {
                let displayNames = [];
                let users: any[] = row[name];

                users.map((user: any) => {
                  displayNames.push(user.title);
                });
                item[name] = displayNames.join(", ");
              }
              break;
            case "linkArray":
              if (row[name]) {
                item[name] = row[name].map(link => {
                  return React.createElement(
                    "A",
                    { href: link.ServerRelativeUrl },
                    link.FileName
                  );
                });
              } else {
                item[name] = null;
              }
              break;
            case "Calculated":
              item[name] = "";
              break;
            default:
              item[name] = row[name] + "";
              break;
          }
        });
        if (
          this.props.hiddenFields !== undefined &&
          this.props.hiddenFields.length > 0
        ) {
          this.props.hiddenFields.map(key => {
            item[key] = row[key];
          });
        }
        items.push(item);
      });
    }

    return items;
  }
  @autobind
  private _getColumns(): IColumn[] {
    let columns: IColumn[] = [];
    if (this.props.schemaFields) {
      // let fields: any[] = this.props.schema.Field;
      // console.log(this.props.schemaFields);
      this.props.schemaFields.map((field: any, index: number) => {
        columns.push({
          key: index + "",
          name: field.ariaLabel,
          fieldName: field.Name,
          columnActionsMode:
            field.columnActionsMode || ColumnActionsMode.disabled,
          minWidth: field.minWidth && 75,
          maxWidth: field.maxWidth && 200,
          isResizable: true
        });
      });
    }
    return columns;
  }
  public shouldComponentUpdate(nextProps, nextState): boolean {
    if (
      !_.isEqual(this.props, nextProps) ||
      !_.isEqual(this.state, nextState)
    ) {
      //console.log("shouldComponentUpdate is true");
      return true;
    } else {
      // console.log("shouldComponentUpdate is false");
      return false;
    }
  }
}
