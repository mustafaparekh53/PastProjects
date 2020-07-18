import {
  PeoplePickerEntity,
  WebEnsureUserResult,
  SiteUserProps
} from "@pnp/sp";
import "@pnp/polyfill-ie11";

import { IPersona } from "office-ui-fabric-react/lib/Persona";

export class SharePointUserPersona implements IPersona {
  constructor(entity: PeoplePickerEntity, result: WebEnsureUserResult) {
    this.text = entity.DisplayText;
    this.secondaryText = entity.EntityData.Title;
    this.imageUrl = `/_layouts/15/userphoto.aspx?size=S&accountname=${entity.Key.substr(
      entity.Key.lastIndexOf("|") + 1
    )}`;
    this.user = result.data;
  }

  public user?: SiteUserProps;
  public text: string;
  public secondaryText: string;
  public imageUrl: string;
}
