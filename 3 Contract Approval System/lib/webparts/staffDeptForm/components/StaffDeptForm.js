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
import * as React from "react";
import styles from "./StaffDeptForm.module.scss";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { WebConfig } from "../../ComComponents/webconfig";
import UxpList from "../../ComComponents/UxpList/UxpList";
import { SelectionMode } from "office-ui-fabric-react/lib/DetailsList";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Dialog, DialogFooter, DialogType } from "office-ui-fabric-react/lib/Dialog";
import { OfficeUiFabricPeoplePickerContainer } from "../../../components/officeUiFabricPeoplePicker";
var StaffDeptForm = (function (_super) {
    __extends(StaffDeptForm, _super);
    function StaffDeptForm(props) {
        var _this = _super.call(this, props) || this;
        _this._StaffChanged = function (staffs) {
            var itemId = 0;
            if (staffs.length > 0) {
                sp.web.lists
                    .getByTitle(WebConfig.StaffDeptListName)
                    .items.filter("StaffId eq " + staffs[0].id)
                    .get()
                    .then(function (staffItems) {
                    if (staffItems.length > 0) {
                        itemId = staffItems[0].Id;
                    }
                    _this.setState({ StaffIds: [staffs[0].id], curItemId: itemId });
                });
            }
            else {
                _this.setState({ StaffIds: [], curItemId: itemId });
            }
        };
        _this.changeDeptState = function (item) {
            _this.setState({ DeptId: item.key });
        };
        _this._onExistsChange = function (_, isChecked) {
            _this.setState({ ChangeExists: isChecked });
        };
        _this._AddClicked = function () {
            // console.log(this.state.StaffDept);
            if (_this.state.StaffIds.length === 0) {
                alert("请填写有效的员工邮箱。");
                return;
            }
            else if (_this.state.DeptId === undefined) {
                alert("请选择部门。");
                return;
            }
            if (_this.state.StaffIds.length > 0 && _this.state.DeptId) {
                if (_this.state.curItemId === 0) {
                    _this.props
                        .addStaffItem(_this.state.StaffIds[0], _this.state.DeptId, _this.state.ChangeExists)
                        .then(function () {
                        _this.setState({
                            StaffIds: [],
                            DeptId: undefined,
                            ChangeExists: false,
                            ErrMsg: "添加成功！",
                            selections: []
                        }, function () {
                            setTimeout(function () {
                                _this.setState(function () { return ({ ErrMsg: "" }); });
                            }, 2000);
                        });
                    })
                        .catch(function (error) {
                        var errMsg = error.data
                            ? error.data.responseBody["odata.error"].message.value
                            : error.message;
                        _this.setState({ ErrMsg: "添加失败:" + errMsg });
                    });
                }
                else {
                    _this.props
                        .updateStaffItem(_this.state.curItemId, _this.state.StaffIds[0], _this.state.DeptId, _this.state.ChangeExists)
                        .then(function (item) {
                        _this.setState({
                            StaffIds: [],
                            DeptId: null,
                            ChangeExists: false,
                            ErrMsg: "修改成功！",
                            selections: []
                        }, function () {
                            setTimeout(function () {
                                _this.setState(function () { return ({ ErrMsg: "" }); });
                            }, 2000);
                        });
                    })
                        .catch(function (error) {
                        var errMsg = error.data
                            ? error.data.responseBody["odata.error"].message.value
                            : error.message;
                        _this.setState({ ErrMsg: "修改失败:" + errMsg });
                    });
                }
            }
        };
        _this.onDeleteStaffs = function (items) {
            _this.setState({ hideDeleteDialog: false, selectedItems: items });
        };
        _this._closeDeleteDialog = function () {
            _this.setState({ hideDeleteDialog: true });
        };
        _this._deleteStaffs = function () {
            _this.props
                .deleteStaffItems(_this.state.selectedItems)
                .then(function () {
                _this._closeDeleteDialog();
            })
                .catch(function (error) {
                console.log(error);
                _this._closeDeleteDialog();
            });
        };
        _this.state = {
            StaffIds: [],
            DeptId: undefined,
            ChangeExists: false,
            ErrMsg: "",
            hideDeleteDialog: true,
            curItemId: 0,
            selectedItems: []
        };
        return _this;
    }
    StaffDeptForm.prototype.render = function () {
        return (React.createElement("div", { className: styles.staffDeptForm },
            React.createElement("div", { className: styles.container },
                React.createElement("fieldset", null,
                    React.createElement("legend", null,
                        React.createElement("h3", null, "\u65B0\u5EFA\u5458\u5DE5\u90E8\u95E8\u4FE1\u606F")),
                    React.createElement("div", { className: "ms-Grid" },
                        React.createElement("div", { className: "ms-Grid-row" },
                            React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg6", style: { paddingLeft: "10px", paddingRight: "20px" } },
                                React.createElement(OfficeUiFabricPeoplePickerContainer, { label: "员工邮箱", principalTypeUser: true, principalTypeSharePointGroup: false, principalTypeSecurityGroup: false, principalTypeDistributionList: false, itemLimit: 1, maximumEntitySuggestions: 5, onChange: this._StaffChanged, selections: this.state.selections })),
                            React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg6", style: { paddingLeft: "10px", paddingRight: "20px" } },
                                React.createElement(Dropdown, { label: "部门", selectedKey: this.state.DeptId ? this.state.DeptId : null, options: this.props.deptOptions, onChanged: this.changeDeptState }))),
                        React.createElement("div", { className: "ms-Grid-row", style: { marginTop: "10px" } },
                            React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg6", style: { paddingLeft: "10px", paddingRight: "20px" } },
                                React.createElement(Checkbox, { label: "变更已有合同申请", checked: this.state.ChangeExists, onChange: this._onExistsChange, ariaDescribedBy: "descriptionID" })),
                            React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg6" },
                                React.createElement(DefaultButton, { "data-automation-id": "btnApp", checked: true, text: this.state.curItemId === 0 ? "确认添加" : "确认修改", onClick: this._AddClicked }))),
                        React.createElement("div", { style: { width: "100%", textAlign: "center" } },
                            React.createElement("span", { style: { color: "Red" } }, this.state.ErrMsg)))),
                React.createElement("hr", null),
                React.createElement(UxpList, { data: this.props.staffItems, schemaFields: [
                        {
                            ariaLabel: "员工邮箱",
                            Name: "Staff"
                        },
                        {
                            ariaLabel: "部门",
                            Name: "Dept"
                        },
                        {
                            ariaLabel: "添加时间",
                            Name: "Created"
                        },
                        {
                            ariaLabel: "添加人",
                            Name: "Author"
                        }
                    ], onDeleteButtonClicked: this.onDeleteStaffs, selectionMode: SelectionMode.multiple, hiddenFields: ["key"], 
                    // newButtonTitle="新建"
                    label: "已添加的员工部门配置" })),
            React.createElement(Dialog, { hidden: this.state.hideDeleteDialog, onDismiss: this._closeDeleteDialog, dialogContentProps: {
                    type: DialogType.normal,
                    title: "删除确认",
                    subText: "你确认要删除选中记录吗?"
                }, modalProps: {
                    isBlocking: false
                } },
                React.createElement(DialogFooter, null,
                    React.createElement(PrimaryButton, { onClick: this._deleteStaffs, text: "删除记录" }),
                    React.createElement(DefaultButton, { onClick: this._closeDeleteDialog, text: "取消" })))));
    };
    return StaffDeptForm;
}(React.Component));
export default StaffDeptForm;

//# sourceMappingURL=StaffDeptForm.js.map
