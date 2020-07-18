import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { CurrentUrl, WebConfig } from "../webconfig";
var objectToSPKeyValueCollection = function (obj) {
    return {
        __metadata: {
            type: "Collection(SP.KeyValue)"
        },
        results: Object.keys(obj).map(function (key) {
            return {
                __metadata: {
                    type: "SP.KeyValue"
                },
                Key: key,
                Value: obj[key],
                ValueType: "Edm.String"
            };
        })
    };
};
export var EmailUtil = {
    SendEmailbyId: function (to, body, subject) {
        var _this = this;
        return sp.web
            .getUserById(to)
            .get()
            .then(function (user) {
            // console.log(user);
            return _this.SendEmail(user.Email, body, subject);
        });
    },
    SendEmail: function (to, body, subject) {
        var tos = [];
        tos.push(to);
        var headers = objectToSPKeyValueCollection({
            "content-type": "text/html"
        });
        var emlprop = {
            To: tos,
            // CC?: string[];
            //  BCC?: string[];
            Subject: subject,
            Body: body,
            AdditionalHeaders: headers
        };
        return sp.utility.sendEmail(emlprop);
    },
    getsystemlink: function () {
        var url = CurrentUrl;
        url =
            url.substr(0, url.lastIndexOf("/") + 1) + WebConfig.InapprovalListPage;
        return "<a href=" + url + ">" + WebConfig.SystemName + "</a>";
    }
};

//# sourceMappingURL=EmailUtil.js.map
