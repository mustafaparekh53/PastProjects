import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "AllContractsWebPartStrings";
import AllContracts from "./components/AllContracts";
import { IAllContractsProps } from "./components/IAllContractsProps";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";

export interface IAllContractsWebPartProps {
  description: string;
}

export default class AllContractsWebPart extends BaseClientSideWebPart<
  IAllContractsWebPartProps
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
    const element: React.ReactElement<IAllContractsProps> = React.createElement(
      AllContracts,
      {
        description: this.properties.description
      }
    );

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
