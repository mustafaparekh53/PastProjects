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
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import styles from "./Apprhistory.module.scss";
import { WebConfig } from "../../../ComComponents/webconfig";
import * as moment from "moment";
import "moment/locale/zh-cn";
var Apprhistory = (function (_super) {
    __extends(Apprhistory, _super);
    function Apprhistory(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { historyItem: [] };
        return _this;
    }
    Apprhistory.prototype.render = function () {
        if (this.state.historyItem.length > 0) {
            return (React.createElement("table", { className: "table " + styles.tbhistory },
                React.createElement("colgroup", null,
                    React.createElement("col", { style: { width: "20%" } }),
                    React.createElement("col", { style: { width: "15%" } }),
                    React.createElement("col", { style: { width: "25%" } }),
                    React.createElement("col", { style: { width: "15%" } }),
                    React.createElement("col", { style: { width: "25%" } })),
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { className: "title", colSpan: 5 },
                            "\u5386\u53F2\u5BA1\u6279\u60C5\u51B5",
                            " ")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u5BA1\u6279\u6B65\u9AA4"),
                        React.createElement("td", null, "\u5BA1\u6279\u7ED3\u679C"),
                        React.createElement("td", null, "\u5BA1\u6279\u610F\u89C1"),
                        React.createElement("td", null, "\u5BA1\u6279\u65E5\u671F"),
                        React.createElement("td", null, "\u5BA1\u6279\u4EBA"))),
                this.state.historyItem.map(function (hitem) {
                    return (React.createElement("tr", null,
                        React.createElement("td", null, hitem.position + "审批"),
                        React.createElement("td", null, hitem.result
                            ? hitem.position.indexOf("审价") >= 0
                                ? "价格已审"
                                : "合同已审"
                            : "驳回"),
                        React.createElement("td", { className: "descCont", dangerouslySetInnerHTML: {
                                __html: hitem.description +
                                    (hitem.AttachmentFiles
                                        ? "<div>" +
                                            hitem.AttachmentFiles.map(function (item) {
                                                return "<a href=" + item.ServerRelativeUrl + " target=\"_blank\">\n                                " + item.FileName + "\n                              </a>";
                                            }).join(",") +
                                            "</div>"
                                        : "")
                            } }),
                        React.createElement("td", null, hitem.Created),
                        React.createElement("td", { className: "tdUserName" }, hitem.Author)));
                })));
        }
        return (React.createElement("div", null,
            React.createElement("label", null, "\u6682\u65E0\u5BA1\u6279\u8BB0\u5F55")));
    };
    Apprhistory.prototype.componentDidMount = function () {
        var _this = this;
        //  console.log("apprhistory log。。。。");
        var itemid = this.props.contractitemid;
        sp.web.lists
            .getByTitle(WebConfig.AddrListName)
            .items.filter("itemidId eq " + itemid + " and submited eq 1")
            .orderBy("Id", true)
            .select("*", "Author/Title", "AttachmentFiles")
            .expand("Author", "AttachmentFiles")
            .get()
            .then(function (items) {
            // console.log(items);
            var datas = [];
            items.map(function (item, index) {
                datas.push({
                    description: item.description,
                    result: item.result,
                    position: item.Title,
                    Created: moment(item.Created, moment.ISO_8601).format("YYYY/MM/DD HH:mm:ss"),
                    AttachmentFiles: item.AttachmentFiles.map(function (fileinfo) {
                        return {
                            ServerRelativeUrl: fileinfo.ServerRelativeUrl,
                            FileName: fileinfo.FileName
                        };
                    }),
                    Author: item.Author.Title
                });
            });
            _this.setState({ historyItem: datas });
        });
    };
    return Apprhistory;
}(React.Component));
export { Apprhistory };

//# sourceMappingURL=Apprhistory.js.map
