import * as React from "react";
import { IOfficeUiFabricPeoplePickerProps } from "./IOfficeUiFabricPeoplePickerProps";
import { NormalPeoplePicker } from "office-ui-fabric-react/lib/Pickers";
import { Label } from "office-ui-fabric-react/lib/Label";

export class OfficeUiFabricPeoplePicker extends React.Component<
  IOfficeUiFabricPeoplePickerProps,
  {}
> {
  public render(): React.ReactElement<IOfficeUiFabricPeoplePickerProps> {
    return (
      <div>
        <Label>{this.props.label}</Label>
        <NormalPeoplePicker
          onChange={this.props.onChange}
          onResolveSuggestions={this.props.onResolveSuggestions}
          selectedItems={this.props.selectedItems}
          itemLimit={this.props.itemLimit}
        />
      </div>
    );
  }
}
