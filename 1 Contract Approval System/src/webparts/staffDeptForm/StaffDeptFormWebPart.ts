import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "StaffDeptFormWebPartStrings";
import StaffDeptFormContainer from "./components/StaffDeptFormContainer";
import { IStaffDeptFormContainerProps } from "./components/IStaffDeptFormContainerProps";
import { sp } from "@pnp/sp";
import "@pnp/polyfill-ie11";

export interface IStaffDeptFormWebPartProps {}

export default class StaffDeptFormWebPart extends BaseClientSideWebPart<
  IStaffDeptFormWebPartProps
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
      IStaffDeptFormContainerProps
    > = React.createElement(StaffDeptFormContainer, {});

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
              groupFields: []
            }
          ]
        }
      ]
    };
  }
}
