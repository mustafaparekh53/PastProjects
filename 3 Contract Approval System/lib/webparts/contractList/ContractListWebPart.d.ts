import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from "@microsoft/sp-webpart-base";
import "@pnp/polyfill-ie11";
export interface IContractListWebPartProps {
    description: string;
}
export default class ContractListWebPart extends BaseClientSideWebPart<IContractListWebPartProps> {
    onInit(): Promise<void>;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
