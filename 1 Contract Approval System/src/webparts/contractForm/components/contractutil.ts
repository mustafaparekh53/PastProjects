import { String, StringBuilder } from "typescript-string-operations";
import { WebConfig, CurrentUrl } from "../../ComComponents/webconfig";
import { EmailUtil } from "../../ComComponents/Email/EmailUtil";
export class ContractUtil {
  public sendEmail(emailbodys: any, curUser: any): void {
    let subject: string = "";
    let body: string = "";
    let mybodystr: string = "";
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
    Object.keys(emailbodys).map(key => {
      subject = String.Format(
        WebConfig.EmailToApprovalTemplate.subject,
        curUser.Title
      );
      body = String.Format(
        WebConfig.EmailToApprovalTemplate.body,
        EmailUtil.getsystemlink(),
        this._getcontractlistlink(emailbodys[key], false)
      );
      EmailUtil.SendEmailbyId(parseInt(key, 10), body, subject);
      mybodystr += this._getcontractlistlink(emailbodys[key], true);
    });
    subject = WebConfig.EmailToMeTemplate.subject;
    body = String.Format(
      WebConfig.EmailToMeTemplate.body,
      this._getmyctrlistlink(),
      mybodystr
    );
    EmailUtil.SendEmail(curUser.Email, body, subject);
  }
  private _getmyctrlistlink(): string {
    let url: string = CurrentUrl;
    url =
      url.substr(0, url.lastIndexOf("/") + 1) + WebConfig.CreatedByMeListPage;
    return `<a href=${url}>点击</a>`;
  }
  private _getcontractlistlink(cont: any[], sendtome: boolean): string {
    let url: string = CurrentUrl;
    const page: string = sendtome
      ? WebConfig.NewContractPage
      : WebConfig.ApprovalPage;
    url = url.substr(0, url.lastIndexOf("/") + 1) + page;
    if (cont && cont.length > 0) {
      if (sendtome) {
        // console.log(cont);
        return `<tr><td>${cont.map(
          (item, index): string => {
            return `<a href=${url}?request=${item.id}>${item.requestNo}</a>${
              index % 2 > 0 ? "<br>" : ""
            }`;
          }
        )}</td><td>${cont[0].person}</td></tr>`;
      } else {
        return `<div>待审批合同清单：</div><ol>${cont
          .map(
            (item): string => {
              return `<li>${item.type}:<a href=${url}?request=${item.id}>${
                item.title
              }</a></li>`;
            }
          )
          .join("")}</ol>`;
      }
    }
    return "";
  }
}
export default new ContractUtil();
