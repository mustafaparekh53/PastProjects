import { WebConfig } from "./webconfig";
import { IFieldName } from "./interfaces/IFieldName";
import { sp, Items, Web, PagedItemCollection } from "@pnp/sp";
import "@pnp/polyfill-ie11";
export function injectCss(): void {
  const cssUrl: string = WebConfig.MyCusCssUrl;
  if (cssUrl) {
    // inject the style sheet
    const head: any =
      document.getElementsByTagName("head")[0] || document.documentElement;
    let customStyle: HTMLLinkElement = document.createElement("link");
    customStyle.href = cssUrl;
    customStyle.rel = "stylesheet";
    customStyle.type = "text/css";
    head.insertAdjacentElement("beforeEnd", customStyle);
  }
}
export function GetFileRandName(fileName: string, subjoin?: string): string {
  let indx: number = fileName.lastIndexOf(".");
  let perName: string = fileName;
  let extName: string = "";
  if (indx > 0) {
    perName = fileName.substr(0, indx);
    extName = fileName.substr(indx);
  }
  let T: Date = new Date();
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

export const FieldNames: IFieldName[] = [
  {
    AuthorId: "CreatedById",
    Created: "Created"
  },
  {
    AuthorId: encodeURIComponent("创建者Id"),
    Created: encodeURIComponent("创建时间")
  }
];
