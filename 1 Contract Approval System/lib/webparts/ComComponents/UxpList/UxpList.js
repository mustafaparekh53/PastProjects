var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import styles from "./UxpList.module.scss";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, ColumnActionsMode } from "office-ui-fabric-react/lib/DetailsList";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { Label } from "office-ui-fabric-react/lib/Label";
//import emitter from "../../ComComponents/ev";
import * as _ from "lodash";
var UxpList = (function (_super) {
    __extends(UxpList, _super);
    function UxpList(props) {
        var _this = _super.call(this, props) || this;
        _this._selection = new Selection({
            onSelectionChanged: function () {
                _this.setState({
                    selectionDetails: _this._getSelectionDetails()
                });
                if (_this.props.onSelectedChanged) {
                    //  console.log("this.props.onSelectedChanged");
                    var states = _this.props.onSelectedChanged(_this._selection.getSelection());
                    // this.selectEmit(states);
                    _this.setState({
                        ishiddenEditButton: states.ishiddenEditButton,
                        ishiddenNewButton: states.ishiddenNewButton
                    });
                }
                else {
                    //  console.log("no this.props.onSelectedChanged");
                }
            }
        });
        _this.state = {
            selectionDetails: _this._getSelectionDetails(),
            items: _this._getItems(props),
            ishiddenNewButton: _this.props.ishiddenNewButton === true ? true : false,
            hasCols: _this._getColumns()
            // upDateTime: 0
        };
        return _this;
    }
    UxpList.prototype.render = function () {
        return this.props.visible !== undefined &&
            this.props.visible === false ? null : (React.createElement("div", { className: styles.uxpList },
            this.props.label.length > 0 ? (React.createElement(Label, { style: { marginLeft: "20px" } },
                React.createElement("h4", { style: { margin: "0", padding: "0" } }, this.props.label))) : (""),
            React.createElement(CommandBar, { isSearchBoxVisible: false, items: this._getCommandBarItems(), farItems: this._getCommandBarFarItems() }),
            React.createElement(DetailsList, { className: styles.detailsList, items: this.state.items, columns: this.state.hasCols, layoutMode: DetailsListLayoutMode.justified, selection: this._selection, selectionPreservedOnEmptyClick: true, selectionMode: this.props.selectionMode === undefined
                    ? SelectionMode.single
                    : this.props.selectionMode, onItemInvoked: this.props.onItemInvoked, onRenderItemColumn: this.props.onRenderItemColumn })));
    };
    // tslint:disable-next-line:no-empty
    UxpList.prototype.componentDidMount = function () { };
    UxpList.prototype.selectEmit = function (value) {
        // console.log(value);
        //emitter.emit("setIsLaywer",value);
    };
    UxpList.prototype.componentWillReceiveProps = function (nextProps) {
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
    };
    UxpList.prototype._getCommandBarItems = function () {
        var _this = this;
        var items = [];
        // console.log(this.state.ishiddenNewButton);
        if (this._selection.getSelectedCount() === 0 &&
            this.props.onNewButtonClicked !== undefined &&
            !this.state.ishiddenNewButton) {
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
                if (this.state.ishiddenEditButton !== undefined &&
                    this.state.ishiddenEditButton) {
                }
                else {
                    items.push({
                        key: "editItem",
                        name: this.props.editButtonTitle || "编辑",
                        icon: "Edit",
                        onClick: function () {
                            if (_this.props.selectionMode !== undefined &&
                                _this.props.selectionMode === SelectionMode.multiple &&
                                _this.props.onMultEditClicked) {
                                _this.props.onMultEditClicked(_this._selection.getSelection());
                            }
                            else {
                                _this.props.onEditButtonClicked(_this._selection.getSelection()[0], _this._selection.getSelectedIndices()[0]);
                            }
                        }
                    });
                }
            }
            if (this.props.onNewButtonClicked !== undefined &&
                !this.state.ishiddenNewButton) {
                items.push({
                    key: "newItem",
                    name: this.props.newButtonTitle || "新建",
                    icon: "Add",
                    onClick: function () {
                        _this.props.onNewButtonClicked(_this._selection.getSelection()[0]);
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
                    onClick: function () {
                        if (_this.props.onDeleteButtonClicked) {
                            _this.props.onDeleteButtonClicked(_this._selection.getSelection());
                        }
                    }
                });
            }
            if (this.props.onMultEditClicked !== undefined) {
                // tslint:disable-next-line:no-empty
                if (this.state.ishiddenEditButton !== undefined &&
                    this.state.ishiddenEditButton) {
                }
                else {
                    items.push({
                        key: "editItem",
                        name: this.props.editButtonTitle || "编辑",
                        icon: "Edit",
                        onClick: function () {
                            if (_this.props.selectionMode !== undefined &&
                                _this.props.selectionMode === SelectionMode.multiple) {
                                _this.props.onMultEditClicked(_this._selection.getSelection());
                            }
                        }
                    });
                }
            }
        }
        return items;
    };
    UxpList.prototype._getCommandBarFarItems = function () {
        var items = [];
        if (this._selection.getSelectedCount() > 0) {
            items.push({
                key: "cancelSelection",
                name: "" + this._getSelectionDetails(),
                icon: "Cancel",
                onClick: this._cancelSelection
            });
        }
        return items;
    };
    UxpList.prototype._getSelectionDetails = function () {
        return "\u5DF2\u9009\u62E9" + this._selection.getSelectedCount() + "\u6761\u8BB0\u5F55";
    };
    UxpList.prototype._cancelSelection = function () {
        this._selection.setAllSelected(false);
    };
    UxpList.prototype._getItems = function (props) {
        var _this = this;
        var items = [];
        //  console.log(props.data,props.schemaFields);
        if (props.data && props.schemaFields) {
            var rows = props.data; //.Row;
            var fields_1 = props.schemaFields;
            rows.map(function (row) {
                var item = {};
                fields_1.map(function (field) {
                    var name = field.Name;
                    var type = field.Type;
                    switch (type) {
                        case "User":
                            if (row[name] instanceof Array) {
                                var displayNames_1 = [];
                                var users = row[name];
                                users.map(function (user) {
                                    displayNames_1.push(user.title);
                                });
                                item[name] = displayNames_1.join(", ");
                            }
                            break;
                        case "linkArray":
                            if (row[name]) {
                                item[name] = row[name].map(function (link) {
                                    return React.createElement("A", { href: link.ServerRelativeUrl }, link.FileName);
                                });
                            }
                            else {
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
                if (_this.props.hiddenFields !== undefined &&
                    _this.props.hiddenFields.length > 0) {
                    _this.props.hiddenFields.map(function (key) {
                        item[key] = row[key];
                    });
                }
                items.push(item);
            });
        }
        return items;
    };
    UxpList.prototype._getColumns = function () {
        var columns = [];
        if (this.props.schemaFields) {
            // let fields: any[] = this.props.schema.Field;
            // console.log(this.props.schemaFields);
            this.props.schemaFields.map(function (field, index) {
                columns.push({
                    key: index + "",
                    name: field.ariaLabel,
                    fieldName: field.Name,
                    columnActionsMode: field.columnActionsMode || ColumnActionsMode.disabled,
                    minWidth: field.minWidth && 75,
                    maxWidth: field.maxWidth && 200,
                    isResizable: true
                });
            });
        }
        return columns;
    };
    UxpList.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_.isEqual(this.props, nextProps) ||
            !_.isEqual(this.state, nextState)) {
            //console.log("shouldComponentUpdate is true");
            return true;
        }
        else {
            // console.log("shouldComponentUpdate is false");
            return false;
        }
    };
    __decorate([
        autobind
    ], UxpList.prototype, "_cancelSelection", null);
    __decorate([
        autobind
    ], UxpList.prototype, "_getItems", null);
    __decorate([
        autobind
    ], UxpList.prototype, "_getColumns", null);
    return UxpList;
}(React.PureComponent));
export default UxpList;

//# sourceMappingURL=UxpList.js.map
