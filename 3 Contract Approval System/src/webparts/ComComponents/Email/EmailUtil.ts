import { sp, EmailProperties } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { TypedHash } from "@pnp/common";
import { IEmailUtil } from "./IEmailUtil";
import { CurrentUrl, WebConfig } from "../webconfig";
const objectToSPKeyValueCollection: (obj: any) => any = (obj: any) => {
  return {
    __metadata: {
      type: "Collection(SP.KeyValue)"
    },
    results: Object.keys(obj).map(key => {
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
export const EmailUtil: IEmailUtil = {
  SendEmailbyId(to: number, body: string, subject: string): Promise<void> {
    return sp.web
      .getUserById(to)
      .get()
      .then(user => {
        // console.log(user);
        return this.SendEmail(user.Email, body, subject);
      });
  },
  SendEmail(to: string, body: string, subject: string): Promise<void> {
    const tos: string[] = [];
    tos.push(to);
    const headers: TypedHash<string> = objectToSPKeyValueCollection({
      "content-type": "text/html"
    });
    let emlprop: EmailProperties = {
      To: tos,
      // CC?: string[];
      //  BCC?: string[];
      Subject: subject,
      Body: body,
      AdditionalHeaders: headers
    } as EmailProperties;
    return sp.utility.sendEmail(emlprop);
  },
  getsystemlink(): string {
    let url: string = CurrentUrl;
    url =
      url.substr(0, url.lastIndexOf("/") + 1) + WebConfig.InapprovalListPage;
    return `<a href=${url}>${WebConfig.SystemName}</a>`;
  }
};
