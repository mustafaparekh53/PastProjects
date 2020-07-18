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
import { FileUpload } from "./FileUpload";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { WebConfig } from "../../../ComComponents/webconfig";
import { GetFileRandName } from "../../../ComComponents/comutil";
var CpsFileUpload = (function (_super) {
    __extends(CpsFileUpload, _super);
    function CpsFileUpload(props) {
        var _this = _super.call(this, props) || this;
        _this.readUploadedFileAsBuffer = function (inputFile) {
            var temporaryFileReader = new FileReader();
            return new Promise(function (resolve, reject) {
                temporaryFileReader.onerror = function (ev) {
                    temporaryFileReader.abort();
                    reject(ev);
                    // reject(new DOMException("Problem parsing input file."));
                };
                temporaryFileReader.onload = function () {
                    resolve(temporaryFileReader.result);
                };
                temporaryFileReader.readAsArrayBuffer(inputFile);
            });
        };
        if (props.doUpload === undefined) {
            props.doUpload = _this.doUpload;
        }
        _this.state = {
            file: null,
            ContractItemId: _this.props.docid,
            errMsg: _this.props.errMsg
        };
        return _this;
    }
    CpsFileUpload.prototype.render = function () {
        //  console.log(this.props);
        return (React.createElement(FileUpload, { options: this.props },
            this.state.errMsg && this.state.errMsg.length > 1 ? (React.createElement("div", null,
                React.createElement("span", { className: "errmMessage" }, this.state.errMsg))) : null,
            this.props.Enable && !this.props.AutoUpload ? (React.createElement("button", { ref: "uploadBtn" }, "\u4E0A\u4F20")) : ("")));
    };
    CpsFileUpload.prototype.componentWillReceiveProps = function (newProps) {
        this.setState({ errMsg: newProps.errMsg });
    };
    CpsFileUpload.prototype.doUpload = function (files, mill) {
        // in case of multiple files,iterate or else upload the first file.
        var file = files[0];
        if (file !== undefined || file !== null) {
            var item_1 = sp.web.lists
                .getByTitle(WebConfig.requestedItemsListName)
                .items.getById(this.state.ContractItemId);
            var fileReader_1 = new FileReader();
            fileReader_1.onloadend = function (event) {
                var data = fileReader_1.result;
                var newfileName = GetFileRandName(file.name);
                item_1.attachmentFiles.add(newfileName, data).then(function (v) {
                    console.log(v);
                });
            };
            fileReader_1.readAsArrayBuffer(file);
        }
    };
    return CpsFileUpload;
}(React.Component));
export { CpsFileUpload };

//# sourceMappingURL=CpsFileUpload.js.map
