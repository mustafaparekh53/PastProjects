import { String } from "typescript-string-operations";
import { WebConfig, CurrentUrl } from "../../ComComponents/webconfig";
import { EmailUtil } from "../../ComComponents/Email/EmailUtil";
var ContractUtil = (function () {
    function ContractUtil() {
    }
    ContractUtil.prototype.sendEmail = function (emailbodys, curUser) {
        var _this = this;
        var subject = "";
        var body = "";
        var mybodystr = "";
        //  console.log(emailbodys);
        /**
             * id
    :
    77
    person
    :
    undefined
    requestNo
    :
    "BCD20180711001"
    title
    :
    "测试合同名称"
    type
    :
    undefined
             */
        Object.keys(emailbodys).map(function (key) {
            subject = String.Format(WebConfig.EmailToApprovalTemplate.subject, curUser.Title);
            body = String.Format(WebConfig.EmailToApprovalTemplate.body, EmailUtil.getsystemlink(), _this._getcontractlistlink(emailbodys[key], false));
            EmailUtil.SendEmailbyId(parseInt(key, 10), body, subject);
            mybodystr += _this._getcontractlistlink(emailbodys[key], true);
        });
        subject = WebConfig.EmailToMeTemplate.subject;
        body = String.Format(WebConfig.EmailToMeTemplate.body, this._getmyctrlistlink(), mybodystr);
        EmailUtil.SendEmail(curUser.Email, body, subject);
    };
    ContractUtil.prototype._getmyctrlistlink = function () {
        var url = CurrentUrl;
        url =
            url.substr(0, url.lastIndexOf("/") + 1) + WebConfig.CreatedByMeListPage;
        return "<a href=" + url + ">\u70B9\u51FB</a>";
    };
    ContractUtil.prototype._getcontractlistlink = function (cont, sendtome) {
        var url = CurrentUrl;
        var page = sendtome
            ? WebConfig.NewContractPage
            : WebConfig.ApprovalPage;
        url = url.substr(0, url.lastIndexOf("/") + 1) + page;
        if (cont && cont.length > 0) {
            if (sendtome) {
                // console.log(cont);
                return "<tr><td>" + cont.map(function (item, index) {
                    return "<a href=" + url + "?request=" + item.id + ">" + item.requestNo + "</a>" + (index % 2 > 0 ? "<br>" : "");
                }) + "</td><td>" + cont[0].person + "</td></tr>";
            }
            else {
                return "<div>\u5F85\u5BA1\u6279\u5408\u540C\u6E05\u5355\uFF1A</div><ol>" + cont
                    .map(function (item) {
                    return "<li>" + item.type + ":<a href=" + url + "?request=" + item.id + ">" + item.title + "</a></li>";
                })
                    .join("") + "</ol>";
            }
        }
        return "";
    };
    return ContractUtil;
}());
export { ContractUtil };
export default new ContractUtil();

//# sourceMappingURL=contractutil.js.map
