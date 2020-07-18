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
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { WebConfig } from "../../../ComComponents/webconfig";
import { Dialog, DialogFooter, DialogType } from "office-ui-fabric-react/lib/Dialog";
import { PrimaryButton, DefaultButton } from "office-ui-fabric-react/lib/Button";
import { autobind } from "office-ui-fabric-react/lib/Utilities";
var Attachments = (function (_super) {
    __extends(Attachments, _super);
    function Attachments(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            attitems: props.defaultatts || [],
            hideDialog: true
        };
        return _this;
    }
    Attachments.prototype.componentDidMount = function () {
        this.initAttlist();
    };
    Attachments.prototype.initAttlist = function () {
        var _this = this;
        var docid = this.props.docid;
        var listName = this.props.listName && this.props.listName.trim() !== ""
            ? this.props.listName.trim()
            : WebConfig.requestedItemsListName;
        if (docid > 0 && this.state.attitems.length === 0) {
            var atts = void 0;
            sp.web.lists
                .getByTitle(listName)
                .items.getById(docid)
                .attachmentFiles.get()
                .then(function (data) {
                _this.setState({
                    attitems: data
                });
            });
        }
    };
    Attachments.prototype.DeleteAtt = function (name) {
        // console.log(name);
        this.setState({
            deletingFileName: name,
            hideDialog: false
        });
    };
    Attachments.prototype.render = function () {
        var _this = this;
        // console.log(this.state.attitems);
        return (React.createElement("div", null,
            React.createElement("ul", null, this.state.attitems &&
                this.state.attitems.map(function (item, index) {
                    return (React.createElement("li", null,
                        React.createElement("a", { href: item.ServerRelativeUrl, target: "_blank" }, item.FileName),
                        _this.props.deleteenable ||
                            (_this.props.listName === WebConfig.requestedItemsListName &&
                                _this.getDeleteEnable(item)) ? (React.createElement("a", { "aria-label": "Delete icon", className: "btn_delete", onClick: function (data) {
                                _this.DeleteAtt(item.FileName);
                            } },
                            React.createElement("i", { className: "ms-Icon ms-Icon--Delete x-hidden-focus", title: "删除附件", "aria-hidden": "true" }))) : null));
                })),
            React.createElement(Dialog, { hidden: this.state.hideDialog, onDismiss: this._closeDialog, dialogContentProps: {
                    type: DialogType.normal,
                    title: "删除确认",
                    subText: "确认要删除此附件吗？"
                }, modalProps: {
                    titleAriaId: "myLabelId",
                    subtitleAriaId: "mySubTextId",
                    isBlocking: false,
                    containerClassName: "ms-dialogMainOverride"
                } },
                React.createElement(DialogFooter, null,
                    React.createElement(PrimaryButton, { onClick: this._confirmDialog, text: "是" }),
                    React.createElement(DefaultButton, { onClick: this._closeDialog, text: "否" })))));
    };
    Attachments.prototype._confirmDialog = function () {
        var _this = this;
        if (this.state.deletingFileName && this.state.deletingFileName.length > 0) {
            var docid = this.props.docid;
            // this.setState({deletingFileName:null});
            var name_1 = this.state.deletingFileName;
            var listName = this.props.listName && this.props.listName.trim() !== ""
                ? this.props.listName.trim()
                : WebConfig.requestedItemsListName;
            sp.web.lists
                .getByTitle(listName)
                .items.getById(docid)
                .attachmentFiles.deleteMultiple(name_1)
                .then(function () {
                // this.initAttlist();
                var data = _this.state.attitems.filter(function (item, i) {
                    return item.FileName !== name_1;
                });
                _this.setState({
                    hideDialog: true,
                    attitems: data,
                    deletingFileName: null
                }, function () {
                    if (_this.props.setAtts) {
                        _this.props.setAtts(data);
                    }
                });
            })
                .catch(function (err) {
                console.log(err);
                alert("删除失败。");
                // this.setState({ hideDialog: true });
            });
        }
        else {
            this.setState({ hideDialog: true });
        }
    };
    Attachments.prototype._closeDialog = function () {
        this.setState({ deletingFileName: null, hideDialog: true });
    };
    Attachments.prototype.getDeleteEnable = function (item) {
        // console.log(item);
        var fileName = item.FileName;
        var addrIndex = fileName.lastIndexOf(".");
        if (addrIndex > 2) {
            fileName = fileName.substr(addrIndex - 2, 2);
            // console.log(fileName);
            return fileName === "_s";
        }
        return false;
    };
    Attachments.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            attitems: nextProps.defaultatts
        });
    };
    __decorate([
        autobind
    ], Attachments.prototype, "_confirmDialog", null);
    __decorate([
        autobind
    ], Attachments.prototype, "_closeDialog", null);
    __decorate([
        autobind
    ], Attachments.prototype, "getDeleteEnable", null);
    return Attachments;
}(React.Component));
export { Attachments };

//# sourceMappingURL=Attachments.js.map
