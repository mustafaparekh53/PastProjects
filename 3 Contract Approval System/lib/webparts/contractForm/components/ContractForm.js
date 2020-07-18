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
import styles from "./ContractForm.module.scss";
import { RequestFormMode } from "./IContractFormProps";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import contractutil from "./contractutil";
import Modal from "office-ui-fabric-react/lib/Modal";
import CpsItemForm from "./ContractItemEditForm/CpsItemForm";
import UxpList from "../../ComComponents/UxpList/UxpList";
import { statusDesc } from "../../ComComponents/interfaces/IItem";
import { WebConfig } from "../../ComComponents/webconfig";
import { Button, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { SelectionMode } from "office-ui-fabric-react/lib/DetailsList";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
import { Label } from "office-ui-fabric-react/lib/Label";
// import { injectCss } from "../../ComComponents/comutil";
import * as objectAssign from "object-assign";
var ContractForm = (function (_super) {
    __extends(ContractForm, _super);
    function ContractForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            request: undefined,
            requestedItemsListFields: [
                {
                    ariaLabel: "申请编号",
                    Name: "requestNo"
                },
                {
                    ariaLabel: "合同类型",
                    Name: "ContractType"
                },
                {
                    ariaLabel: "合同编号",
                    Name: "ContractNo"
                },
                {
                    ariaLabel: "合同名称",
                    Name: "Title"
                },
                {
                    ariaLabel: "合同标的和数量",
                    Name: "ContractObject"
                },
                {
                    ariaLabel: "合同金额",
                    Name: "MoneyText"
                },
                {
                    ariaLabel: "付款方式",
                    Name: "PayWay"
                },
                {
                    ariaLabel: "备注",
                    Name: "remarks"
                },
                {
                    ariaLabel: "附件",
                    Type: "linkArray",
                    Name: "AttachmentFiles"
                },
                {
                    ariaLabel: "是否送审价中心审批",
                    Name: "NeedApproval_cn"
                }
                /* {
                  ariaLabel: "状态",
                  Name: "statusDesc"
                }*/
            ],
            requestedItems: [],
            SubjectOptions: [],
            TypeOptions: [],
            hideDeleteDialog: true,
            curUser: null,
            curItem: null,
            showModal: false,
            defaultSubjectId: undefined
        };
        return _this;
        // injectCss();
    }
    ContractForm.prototype.render = function () {
        return (React.createElement("div", { className: styles.contactForm },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: "ms-Grid" },
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(TextField, { label: "申请人", value: this.state.request &&
                                    this.state.request.Author &&
                                    this.state.request.Author.Title, disabled: true })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(Dropdown, { label: "合同主体", selectedKey: this.state.request
                                    ? this.state.request.ContractSubjectId
                                    : this.state.defaultSubjectId, options: this.state.SubjectOptions, onChanged: this.changeDropdownState, disabled: this._isSubjectDropDownDisabled() })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement("div", { className: "ms-Dropdown-container" },
                                React.createElement("label", { className: "ms-Label ms-Dropdown-label", style: { display: "inline-block", padding: "5px 0px" } }, "\u72B6\u6001"),
                                React.createElement("div", { "aria-expanded": "false", "aria-live": "assertive", "aria-disabled": "true", className: "ms-Dropdown root_44853ebf" },
                                    React.createElement(Label, { disabled: true }, "新建"))))),
                    React.createElement("div", { className: "ms-Grid-row" },
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(TextField, { style: { "font-size": "12px" }, label: "合同相对方", value: this.state.request ? this.state.request.RelativeParty : "", placeholder: "注：一个申请单只能填一个合同相对方", disabled: this._isSubjectDropDownDisabled(), required: false, onChanged: this._RelativePartyChanged })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" },
                            React.createElement(TextField, { label: "厂部", style: { "font-size": "12px" }, value: this.state.request ? this.state.request.FactoryDept : "", disabled: this._isSubjectDropDownDisabled(), onChanged: this._FactoryDeptChanged })),
                        React.createElement("div", { className: "ms-Grid-col ms-sm12 ms-md6 ms-lg4" }, "\u00A0")),
                    React.createElement("div", { className: styles.toolsrow },
                        React.createElement("h3", { className: styles.leftpanel }, "\u5DF2\u6DFB\u52A0\u7684\u5408\u540C"),
                        React.createElement("div", { className: styles.rightpanel }, this._getButtons())),
                    React.createElement(UxpList, { data: this.state.requestedItems, schemaFields: this.state.requestedItemsListFields, onItemInvoked: this._openRequestForm, onNewButtonClicked: this._NewRequestForm, onEditButtonClicked: this._openRequestForm, onDeleteButtonClicked: this._DeleteRequests, selectionMode: SelectionMode.multiple, newButtonTitle: "新建", hiddenFields: ["Id", "NeedApproval"], label: "" }),
                    React.createElement(Modal, { isOpen: this.state.showModal, onDismiss: this._closeModal, isBlocking: true, containerClassName: "ms-modalExample-container" },
                        React.createElement("div", { className: "ms-modalExample-header" },
                            React.createElement("span", null, "\u5408\u540C\u4FE1\u606F"),
                            React.createElement("i", { className: "ms-Icon ms-Icon--BoxMultiplySolid x-hidden-focus close", onClick: this._closeModal })),
                        React.createElement(CpsItemForm, { CurContractItem: this.state.curItem, requestedItemsListName: WebConfig.requestedItemsListName, onDeleted: this._removeItem, Typeoptions: this.state.TypeOptions, onUpdated: this._updatedItem, onAdded: this._addedItem, onClose: this.DeleteAndClose, subabbr: this.state.request && this.state.request.subabbr, AddrListName: WebConfig.AddrListName, request: this.state.request, SubjectOptions: this.state.SubjectOptions }))))));
    };
    ContractForm.prototype.changeDropdownState = function (item) {
        var newRequest = {};
        objectAssign(newRequest, this.state.request);
        newRequest.ContractSubject = item.text;
        newRequest.ContractSubjectId = item.key;
        var curoption = this.state.SubjectOptions.filter(function (op) {
            return op.key === item.key;
        })[0];
        newRequest.subabbr = curoption.subabbr;
        // console.log(this.state.SubjectOptions, newRequest);
        this.setState({
            request: newRequest
        });
    };
    ContractForm.prototype._updatedItem = function (item, doClose) {
        if (doClose === void 0) { doClose = true; }
        var newitems = [];
        objectAssign(newitems, this.state.requestedItems);
        var ItemExits = false;
        newitems.some(function (citem) {
            if (item.Id === citem.Id) {
                // citem=item;
                objectAssign(citem, item);
                citem.MoneyText =
                    citem.Currency === "N/A"
                        ? citem.Currency
                        : "" + citem.Currency + citem.Money;
                citem.statusDesc = statusDesc[citem.status];
                ItemExits = true;
                return true;
            }
            return false;
        });
        // 新建时上传附件后提交会走到这里，需添加到列表
        if (!ItemExits) {
            this._addedItem(item, true);
            return;
        }
        this.setState({ requestedItems: newitems });
        if (doClose) {
            this.setState({ showModal: false });
        }
    };
    ContractForm.prototype._addedItem = function (item, closeModal) {
        if (closeModal === void 0) { closeModal = true; }
        var newitems = [];
        objectAssign(newitems, this.state.requestedItems);
        // console.log(item);
        item.MoneyText =
            item.Currency === "N/A" ? item.Currency : "" + item.Currency + item.Money;
        item.statusDesc = statusDesc[item.status];
        newitems.push(item);
        this.setState({ requestedItems: newitems });
        if (closeModal) {
            this.setState({ showModal: false });
        }
    };
    /*
     * Requets Form Buttons related
     */
    ContractForm.prototype._submit = function () {
        var _this = this;
        var newRequest = {};
        objectAssign(newRequest, this.state.request);
        // if (!this.state.request.RelativeParty||this.state.request.RelativeParty.trim() === "") {
        // return;
        // }
        if (this.state.requestedItems.length === 0) {
            alert("请添加合同内容后提交。");
            return;
        }
        var witems = this.state.requestedItems.filter(function (item) {
            return item.status === "0";
        });
        if (witems.length === 0) {
            alert("没有待审批的合同，不能提交。");
            return;
        }
        var emailbodys = {};
        var copyItems = [];
        objectAssign(copyItems, witems);
        this._submitsubitem(witems, function () {
            copyItems.map(function (item) {
                var Key = item.NeedApproval
                    ? item.pricingcenterId + ""
                    : item.lawyerId + "";
                if (!emailbodys[Key]) {
                    emailbodys[Key] = [];
                }
                emailbodys[Key].push({
                    id: item.Id,
                    title: item.Title,
                    type: item.ContractType,
                    requestNo: item.requestNo,
                    person: item.NeedApproval ? item.Pricingcenter : item.Lawyer
                });
            });
            newRequest.state = "审批中";
            _this._updateRequest(emailbodys);
        }); // 更新单个合同状态
    };
    ContractForm.prototype._submitsubitem = function (items, callback) {
        var _this = this;
        var item = items.shift();
        var data = {
            status: item.NeedApproval ? "1" : "2"
        };
        sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.getById(item.Id)
            .update(data)
            .then(function (value) {
            console.log("\u5408\u540C\uFF1A" + item.Id + "\u63D0\u4EA4\u6210\u529F\u3002");
            if (items.length > 0) {
                _this._submitsubitem(items, callback);
            }
            else {
                callback();
            }
        });
    };
    ContractForm.prototype._isSubjectDropDownDisabled = function () {
        if (!this.state.request) {
            return true;
        }
        return false;
    };
    ContractForm.prototype._getButtons = function () {
        var buttons = [];
        if (this._isSubmitButtonHidden() === false) {
            buttons.push(React.createElement(PrimaryButton, { "data-automation-id": "test", text: "提交", onClick: this._submit }));
        }
        buttons.push(React.createElement(Button, { text: "关闭", onClick: function () {
                document.location.href = WebConfig.CreatedByMeListPage;
            } }));
        return buttons;
    };
    ContractForm.prototype._RelativePartyChanged = function (value) {
        var data = {};
        objectAssign(data, this.state.request);
        data.RelativeParty = value;
        this.setState({ request: data });
    };
    ContractForm.prototype._FactoryDeptChanged = function (value) {
        var data = {};
        objectAssign(data, this.state.request);
        data.FactoryDept = value;
        this.setState({ request: data });
    };
    ContractForm.prototype._isSubmitButtonHidden = function () {
        if (!this.state.request) {
            return true;
        }
        return false;
    };
    ContractForm.prototype._fetchRequestedItems = function (props) {
        var _this = this;
        if (this.state.request === undefined) {
            return;
        }
        // get all fields that is visible and editable in a list
        sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.filter("RequestIDId eq " + this.state.request.Id)
            .get()
            .then(function (response) {
            _this.setState({
                requestedItems: response
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ContractForm.prototype.jumpHomePage = function () {
        location.href = WebConfig.CreatedByMeListPage;
        //console.log(`go to ${WebConfig.CreatedByMeListPage}...`);
    };
    ContractForm.prototype._updateRequest = function (emailbodys) {
        var _this = this;
        this.setState({
            hideDeleteDialog: true
        });
        if (emailbodys) {
            contractutil.sendEmail(emailbodys, this.state.curUser);
        }
        console.log("正在删除草稿中的合同...");
        sp.web.lists
            .getByTitle(WebConfig.requestedItemsListName)
            .items.filter("AuthorId eq " + this.state.curUser.Id + " and status eq '0' ")
            .getAll()
            .then(function (items) {
            var count = items.length;
            if (count > 0) {
                count--;
                items.map(function (item, i) {
                    sp.web.lists
                        .getByTitle(WebConfig.requestedItemsListName)
                        .items.getById(item.Id)
                        .delete()
                        .then(function (v) {
                        console.log("已删除申请编号为:" + item.requestNo + "的合同");
                        if (i === count) {
                            _this.jumpHomePage();
                        }
                    })
                        .catch(function (err) {
                        console.log("删除申请编号为:" + item.requestNo + "的合同失败");
                        if (i === count) {
                            _this.jumpHomePage();
                        }
                    });
                });
            }
            else {
                _this.jumpHomePage();
            }
        });
    };
    ContractForm.prototype.componentDidMount = function () {
        var _this = this;
        sp.web.currentUser
            .get()
            .then((function (result) {
            // console.log(result);
            if (!result.Id) {
                sp.web.ensureUser(result.LoginName).then(function () {
                    _this.componentDidMount();
                    return;
                });
            }
            _this.setState({
                curUser: result
            });
            if (_this.props.mode === RequestFormMode.Requester) {
                // this._addRequest();
                var newRequest = {};
                newRequest.Author = result;
                newRequest.state = "新建";
                _this.setState({
                    request: newRequest
                });
            }
        }).bind(this))
            .catch(function (error) {
            console.log(error);
        });
        this._fetchSubjectOptions(this.props);
    };
    /*
    private _addRequest(callback?: () => void): void {
      const data: any = {
        ContractSubjectId: this.state.request.ContractSubjectId,
        RelativeParty: this.state.request.RelativeParty,
        state: this.state.request.state,
        subject: this.state.request.subabbr,
      };
  
      sp.web.lists.getByTitle(WebConfig.requestsListName).items.add(data).then(((iar: ItemAddResult) => {
        let curreq: IRequest = {} as IRequest;
        objectAssign(curreq, this.state.request);
        curreq.Id = iar.data.Id;
        console.log(iar);
        this.setState({
          request: curreq
        }, () => { if (callback) { callback(); } });
      }).bind(this)).catch((error: any) => {
        console.log(error);
      });
    }*/
    ContractForm.prototype.componentWillReceiveProps = function (nextProps) {
        this._fetchSubjectOptions(nextProps);
        this._fetchRequestedItems(nextProps);
    };
    ContractForm.prototype._fetchSubjectOptions = function (props) {
        var _this = this;
        // let w: Web = this._getweb();
        sp.web.lists
            .getByTitle(WebConfig.subjectsListName)
            .items.orderBy("Title")
            .getAll()
            .then(function (response) {
            var options = [];
            var subarr = "";
            var newRequest = {};
            objectAssign(newRequest, _this.state.request);
            response.map(function (item, i) {
                options.push({
                    key: item.Id,
                    text: item.Title,
                    subabbr: item.abbreviation
                });
                if (item.Title === "广东溢达纺织有限公司") {
                    subarr = item.abbreviation;
                    newRequest.ContractSubjectId = item.Id;
                    newRequest.subabbr = item.abbreviation;
                    newRequest.ContractSubject = item.Title;
                    _this.setState({ defaultSubjectId: item.Id });
                }
            });
            var typeoptions = [];
            sp.web.lists
                .getByTitle(WebConfig.contractTypeListName)
                .items.select("*", "pricecenter/Title", "laywer/Title")
                .expand("pricecenter", "laywer")
                .orderBy("Title")
                .getAll()
                .then(function (types) {
                //  console.log(types);
                var Msgs = [];
                types.map(function (typeitem) {
                    //  console.log(typeitem);
                    var isValid = true;
                    if (!typeitem.laywer || !typeitem.laywer.Title) {
                        Msgs.push(typeitem.Title + "\u7C7B\u522B\u7684\u5F8B\u5E08");
                        isValid = false;
                    }
                    if (!typeitem.pricecenter || !typeitem.pricecenter.Title) {
                        if (typeitem.ToPriceCenter) {
                            Msgs.push(typeitem.Title + "\u7C7B\u522B\u7684\u5BA1\u4EF7\u4EBA\u5458");
                            isValid = false;
                        }
                    }
                    if (isValid) {
                        typeoptions.push({
                            key: typeitem.Id,
                            text: typeitem.Title,
                            pricingcenterId: typeitem.pricecenterId,
                            lawyerId: typeitem.laywerId,
                            pricingcenter: typeitem.pricecenter
                                ? typeitem.pricecenter.Title
                                : "",
                            lawyer: typeitem.laywer ? typeitem.laywer.Title : "",
                            toprice: typeitem.ToPriceCenter
                        });
                    }
                });
                if (Msgs.length > 0) {
                    alert("请配置以下信息，否则无法提交该类别合同申请：\r\n" +
                        Msgs.join("\n"));
                }
                _this.setState({
                    SubjectOptions: options,
                    request: newRequest,
                    TypeOptions: typeoptions
                });
            })
                .catch(function (e) {
                console.log(e);
            });
        });
    };
    ContractForm.prototype._NewRequestForm = function () {
        var item = {
            Id: 0,
            status: "0",
            NeedApproval: true,
            NeedApproval_cn: "是",
            lawyerId: 0,
            pricingcenterId: 0
        };
        this.setState({ curItem: item });
        this._showModal();
    };
    ContractForm.prototype._DeleteRequests = function (items) {
        console.log(items);
        var newitems = [];
        var Ids = [];
        // objectAssign(newitems, this.state.requestedItems);
        items.map(function (item) {
            Ids.push(item.Id);
            sp.web.lists
                .getByTitle(WebConfig.requestedItemsListName)
                .items.getById(item.Id)
                .delete()
                .then(function (v) {
                console.log("已删除Id为：" + item.Id + "的记录");
            });
        });
        this.state.requestedItems.map(function (item2) {
            if (Ids.indexOf(item2.Id) < 0) {
                newitems.push(item2);
            }
        });
        this.setState({ requestedItems: newitems });
    };
    ContractForm.prototype._openRequestForm = function (item, index) {
        var mode = "";
        switch (this.props.mode) {
            case RequestFormMode.Requester:
                mode = "requester";
                break;
            case RequestFormMode.Admin:
                mode = "admin";
                break;
            case RequestFormMode.Approver:
                mode = "approver";
                break;
            default:
                break;
        }
        this.setState({ curItem: this.state.requestedItems[index] });
        // console.log(this.state.requestedItems[index]);
        // console.log(this.state.curItem);
        this._showModal();
        // window.open(`${this.props.requestFormUrl}/?request=${item.ID}&mode=${mode}`, '_self');
    };
    ContractForm.prototype._showModal = function () {
        this.setState({ showModal: true });
    };
    ContractForm.prototype.DeleteAndClose = function (id) {
        if (id > 0) {
            if (this.state.requestedItems.filter(function (item) {
                return item.Id === id;
            }).length === 0) {
                sp.web.lists
                    .getByTitle(WebConfig.requestedItemsListName)
                    .items.getById(id)
                    .delete()
                    .then(function () {
                    console.log("删除了记录：" + id);
                });
            }
        }
        this.setState({ showModal: false });
    };
    ContractForm.prototype._closeModal = function () {
        this.setState({ showModal: false });
    };
    ContractForm.prototype._removeItem = function (item) {
        var data = this.state.requestedItems.filter(function (it) {
            return it.Id !== item.Id;
        });
        this.setState({ requestedItems: data });
    };
    __decorate([
        autobind
    ], ContractForm.prototype, "changeDropdownState", null);
    __decorate([
        autobind
    ], ContractForm.prototype, "_updatedItem", null);
    __decorate([
        autobind
    ], ContractForm.prototype, "_addedItem", null);
    __decorate([
        autobind
    ], ContractForm.prototype, "_submit", null);
    __decorate([
        autobind
    ], ContractForm.prototype, "_RelativePartyChanged", null);
    __decorate([
        autobind
    ], ContractForm.prototype, "_FactoryDeptChanged", null);
    __decorate([
        autobind
    ], ContractForm.prototype, "_NewRequestForm", null);
    __decorate([
        autobind
    ], ContractForm.prototype, "_DeleteRequests", null);
    __decorate([
        autobind
    ], ContractForm.prototype, "_openRequestForm", null);
    __decorate([
        autobind
    ], ContractForm.prototype, "_showModal", null);
    __decorate([
        autobind
    ], ContractForm.prototype, "DeleteAndClose", null);
    __decorate([
        autobind
    ], ContractForm.prototype, "_closeModal", null);
    __decorate([
        autobind
    ], ContractForm.prototype, "_removeItem", null);
    return ContractForm;
}(React.Component));
export default ContractForm;

//# sourceMappingURL=ContractForm.js.map
