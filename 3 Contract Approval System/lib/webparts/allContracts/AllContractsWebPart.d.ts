import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";
import "@pnp/polyfill-ie11";
export interface IAllContractsWebPartProps {
    description: string;
}
export default class AllContractsWebPart extends BaseClientSideWebPart<IAllContractsWebPartProps> {
    onInit(): Promise<void>;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
