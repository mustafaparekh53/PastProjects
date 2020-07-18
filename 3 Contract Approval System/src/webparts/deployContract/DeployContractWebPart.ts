import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "DeployContractWebPartStrings";
import DeployContract from "./components/DeployContract";
import { IDeployContractProps } from "./components/IDeployContractProps";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";

export interface IDeployContractWebPartProps {
  description: string;
}

export default class DeployContractWebPart extends BaseClientSideWebPart<
  IDeployContractWebPartProps
> {
  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      // other init code may be present
      sp.setup({
        spfxContext: this.context
      });
    });
  }
  public render(): void {
    const element: React.ReactElement<
      IDeployContractProps
    > = React.createElement(DeployContract, {
      description: this.properties.description
    });

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
