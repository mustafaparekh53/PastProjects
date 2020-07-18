import { PeoplePickerEntity, WebEnsureUserResult, SiteUserProps } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import { IPersona } from "office-ui-fabric-react/lib/Persona";
export declare class SharePointUserPersona implements IPersona {
    constructor(entity: PeoplePickerEntity, result: WebEnsureUserResult);
    user?: SiteUserProps;
    text: string;
    secondaryText: string;
    imageUrl: string;
}
