/// <reference types="react" />
import React = require("react");
import { ICollapseProps } from "./ICollapseProps";
import { ICollapseState } from "./ICollapseState";
import "rc-collapse/assets/index.css";
export default class CollapsePanel extends React.Component<ICollapseProps, ICollapseState> {
    constructor(props: any);
    render(): React.ReactElement<ICollapseProps>;
}
