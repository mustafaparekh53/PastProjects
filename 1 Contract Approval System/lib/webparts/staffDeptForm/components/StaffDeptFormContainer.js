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
import StaffDeptForm from "./StaffDeptForm";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { WebConfig } from "../../ComComponents/webconfig";
import * as moment from "moment";
var StaffDeptFormContainer = (function (_super) {
    __extends(StaffDeptFormContainer, _super);
    function StaffDeptFormContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.fetchStaffItems = function () {
            sp.web.lists
                .getByTitle(WebConfig.StaffDeptListName)
                .items.select("*", "Author/Title", "Staff/Title", "Dept/Title")
                .expand("Author", "Staff", "Dept/Id")
                .orderBy("Modified", false)
                .getAll()
                .then(function (result) {
                //staffItems
                var staffItems = [];
                result.map(function (item) {
                    staffItems.push({
                        key: item.Id,
                        Staff: item.Staff ? item.Staff.Title : "",
                        Dept: item.Dept.Title,
                        Created: moment(item.Created, moment.ISO_8601).format("YYYY/MM/DD HH:mm:ss"),
                        Author: item.Author.Title
                    });
                });
                _this.setState({ staffItems: staffItems });
            })
                .catch(function (error) {
                console.log(error);
            });
        };
        _this.updateContractItems = function (StaffId, DeptId) {
            sp.web.lists
                .getByTitle(WebConfig.requestedItemsListName)
                .items.filter("AuthorId eq " + StaffId)
                .orderBy("Id", false)
                .getAll()
                .then(function (items) {
                var list = sp.web.lists.getByTitle(WebConfig.requestedItemsListName);
                var batch = sp.web.createBatch();
                items.map(function (item) {
                    list.items
                        .getById(item.Id)
                        .inBatch(batch)
                        .update({ StaffDeptId: DeptId })
                        .then(function () {
                        console.log("更新" + item.Id + "成功");
                    });
                });
                return batch
                    .execute()
                    .then(function () { return console.log("update completed"); })
                    .catch(function (error) { return console.log(error); });
            });
        };
        _this.deleteStaffItems = function (staffItems) {
            var list = sp.web.lists.getByTitle(WebConfig.StaffDeptListName);
            var batch = sp.web.createBatch();
            staffItems.map(function (item) {
                list.items
                    .getById(item.key)
                    .inBatch(batch)
                    .delete()
                    .then(function () {
                    console.log("delete " + item.Staff);
                })
                    .catch(function (error) { return console.log(error); });
            });
            return batch.execute().then(function () {
                _this.fetchStaffItems();
                console.log("deletion completed");
            });
        };
        _this.addStaffItem = function (staffId, deptId, shouldChangeExisting) {
            return sp.web.lists
                .getByTitle(WebConfig.StaffDeptListName)
                .items.add({
                StaffId: staffId,
                DeptId: deptId
            })
                .then(function () {
                if (shouldChangeExisting) {
                    _this.updateContractItems(staffId, deptId);
                }
                _this.fetchStaffItems();
            });
        };
        _this.updateStaffItem = function (staffItemId, staffId, deptId, shouldChangeExisting) {
            return sp.web.lists
                .getByTitle(WebConfig.StaffDeptListName)
                .items.getById(staffItemId)
                .update({
                StaffId: staffId,
                DeptId: deptId
            })
                .then(function () {
                if (shouldChangeExisting) {
                    _this.updateContractItems(staffId, deptId);
                }
                _this.fetchStaffItems();
            });
        };
        _this.state = {
            deptOptions: [],
            staffItems: []
        };
        return _this;
    }
    StaffDeptFormContainer.prototype.render = function () {
        return (React.createElement(StaffDeptForm, { deptOptions: this.state.deptOptions, staffItems: this.state.staffItems, updateContractItems: this.updateContractItems, deleteStaffItems: this.deleteStaffItems, addStaffItem: this.addStaffItem, updateStaffItem: this.updateStaffItem }));
    };
    StaffDeptFormContainer.prototype.componentDidMount = function () {
        this.fetchDeptOptions();
        this.fetchStaffItems();
    };
    StaffDeptFormContainer.prototype.fetchDeptOptions = function () {
        var _this = this;
        sp.web.currentUser.get().then(function (u) {
            sp.web.lists
                .getByTitle(WebConfig.DeptsListName)
                .items.get()
                .then(function (items) {
                var deptOptions = [];
                items.map(function (item) {
                    deptOptions.push({ key: item.Id, text: item.Title });
                });
                _this.setState({ deptOptions: deptOptions });
            });
        });
    };
    return StaffDeptFormContainer;
}(React.Component));
export default StaffDeptFormContainer;

//# sourceMappingURL=StaffDeptFormContainer.js.map
