/// <reference types="react" />
import { ICusPeoplePickerState } from "./ICusPeoplePickerState";
import { BaseComponent } from "office-ui-fabric-react/lib/Utilities";
import React = require("react");
import "@pnp/polyfill-ie11";
export default class CusPeoplePicker extends BaseComponent<any, ICusPeoplePickerState> {
    private people;
    constructor(props: any);
    render(): React.ReactElement<any>;
    private _onFilterChanged;
    private _returnMostRecentlyUsed;
    private _getTextFromItem(persona);
    private SelectedChanged;
    private _onRemoveSuggestion;
    private _validateInput;
    private _onInputChange(input);
    private _removeDuplicates(personas, possibleDupes);
    private _filterPersonasByText(filterText, limitResults?);
    private _listContainsPersona(persona, personas);
    private _onItemSelected;
    private _getpersonbyid(id);
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
}
