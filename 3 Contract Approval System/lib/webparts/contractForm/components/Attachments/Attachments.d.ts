/// <reference types="react" />
import { IAttachmentprop } from "./IAttachmentprop";
import { IAttachmentState } from "./IAttachmentState";
import React = require("react");
import "@pnp/polyfill-ie11";
export declare class Attachments extends React.Component<IAttachmentprop, IAttachmentState> {
    constructor(props: IAttachmentprop);
    componentDidMount(): void;
    private initAttlist();
    private DeleteAtt(name);
    render(): JSX.Element;
    private _confirmDialog();
    private _closeDialog();
    private getDeleteEnable(item);
    componentWillReceiveProps(nextProps: IAttachmentprop): void;
}
