import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "ContractFormWebPartStrings";
import ContractForm from "./components/ContractForm";
import {
  IContractFormProps,
  RequestFormMode
} from "./components/IContractFormProps";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";
import CpsItemForm from "./components/ContractItemEditForm/CpsItemForm";

export interface IContractFormWebPartProps {
  homepageUrl: string;
}

export default class ContractFormWebPart extends BaseClientSideWebPart<
  IContractFormWebPartProps
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
    let mode: RequestFormMode;
    switch (url.searchParams.get("mode")) {
      case "requester":
        mode = RequestFormMode.Requester;
        break;
      case "approver":
        mode = RequestFormMode.Approver;
        break;
      case "admin":
        mode = RequestFormMode.Admin;
        break;
      default:
        mode = RequestFormMode.Requester;
        break;
    }
    const idstr: string = url.searchParams.get("request");
    let id: number = parseInt(idstr, 10);
    id = isNaN(id) ? 0 : id;
    // console.log("Id="+id);
    const element: React.ReactElement<IContractFormProps> =
      id > 0
        ? React.createElement(CpsItemForm, {
            id: url.searchParams.get("request"),
            mode: mode
          })
        : React.createElement(ContractForm, {
            spHttpClient: this.context.spHttpClient,
            siteUrl: this.context.pageContext.web.absoluteUrl,
            id: url.searchParams.get("request"),
            mode: mode
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
