import React = require("react");
import { ICollapseProps } from "./ICollapseProps";
import { ICollapseState } from "./ICollapseState";
import "rc-collapse/assets/index.css";
// tslint:disable-next-line:typedef
import Collapse  from "rc-collapse";
// tslint:disable-next-line:typedef
var Panel = Collapse.Panel;
export default class CollapsePanel extends React.Component<ICollapseProps, ICollapseState> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
      }
      public render(): React.ReactElement<ICollapseProps> {
return (this.props.isHidden===true?null: <Collapse accordion={true}>
    <Panel header={this.props.headerText} headerClass="my-header-class">{this.props.children}</Panel>
  </Collapse>);
      }
}