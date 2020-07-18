/// <reference types="react" />
import * as React from "react";
import { IDeployContractProps } from "./IDeployContractProps";
import "@pnp/polyfill-ie11";
export default class DeployContract extends React.Component<IDeployContractProps, any> {
    private statusText;
    constructor(props: any);
    render(): React.ReactElement<IDeployContractProps>;
    private startDeploy();
    private runStep1(DeptsGuid);
    private runStep2();
    private runStep3(ContractTypeGuid, DeptGuid);
    private runStep4(ContractItemGuid);
    private runStep5();
    private runStep6();
    private appendSubjects(factors);
    private runStep7();
    private appendContypes(types);
    componentDidMount(): void;
}
