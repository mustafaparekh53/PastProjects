/// <reference types="react" />
import React = require("react");
import { IAppresultporp } from "./IAppresultprop";
import { IAppresultstate } from "./IAppresult";
import "@pnp/polyfill-ie11";
import "moment/locale/zh-cn";
export declare class Apprhistory extends React.Component<IAppresultporp, IAppresultstate> {
    constructor(props: any);
    render(): React.ReactElement<IAppresultporp>;
    componentDidMount(): void;
}
