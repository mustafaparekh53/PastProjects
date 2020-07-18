import { WebConfig } from "./webconfig";
import "@pnp/polyfill-ie11";
export function injectCss() {
    var cssUrl = WebConfig.MyCusCssUrl;
    if (cssUrl) {
        // inject the style sheet
        var head = document.getElementsByTagName("head")[0] || document.documentElement;
        var customStyle = document.createElement("link");
        customStyle.href = cssUrl;
        customStyle.rel = "stylesheet";
        customStyle.type = "text/css";
        head.insertAdjacentElement("beforeEnd", customStyle);
    }
}
export function GetFileRandName(fileName, subjoin) {
    var indx = fileName.lastIndexOf(".");
    var perName = fileName;
    var extName = "";
    if (indx > 0) {
        perName = fileName.substr(0, indx);
        extName = fileName.substr(indx);
    }
    var T = new Date();
    perName +=
        "" +
            T.getFullYear() +
            (T.getMonth() + 1) +
            T.getDate() +
            T.getHours() +
            T.getMinutes() +
            T.getSeconds();
    return perName + (subjoin ? subjoin : "") + extName;
}
export var FieldNames = [
    {
        AuthorId: "CreatedById",
        Created: "Created"
    },
    {
        AuthorId: encodeURIComponent("创建者Id"),
        Created: encodeURIComponent("创建时间")
    }
];

//# sourceMappingURL=comutil.js.map
