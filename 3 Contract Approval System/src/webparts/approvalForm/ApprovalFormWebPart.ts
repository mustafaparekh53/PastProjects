import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "ApprovalFormWebPartStrings";
import ApprovalForm from "./components/ApprovalForm";
import { IApprovalFormProps } from "./components/IApprovalFormProps";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";

export interface IApprovalFormWebPartProps {
  description: string;
}

export default class ApprovalFormWebPart extends BaseClientSideWebPart<
  IApprovalFormWebPartProps
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
    const url: URL = new URL(document.URL);
    const element: React.ReactElement<IApprovalFormProps> = React.createElement(
      ApprovalForm,
      {
        description: this.properties.description,
        id: url.searchParams.get("request")
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
