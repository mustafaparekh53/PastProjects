"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var React = require("react");
var sp_1 = require("@pnp/sp");
require("@pnp/polyfill-ie11");
var CusPeoplePicker_module_scss_1 = require("./CusPeoplePicker.module.scss");
var Pickers_1 = require("office-ui-fabric-react/lib/Pickers");
var suggestionProps = {
    suggestionsHeaderText: "建议结果",
    mostRecentlyUsedHeaderText: "匹配到的结果",
    noResultsFoundText: "没有找到",
    loadingText: "加载中",
    showRemoveButtons: true,
    suggestionsAvailableAlertText: "选择建议",
    suggestionsContainerAriaLabel: "匹配到的结果"
};
var objectAssign = require("object-assign");
var CusPeoplePicker = (function (_super) {
    __extends(CusPeoplePicker, _super);
    function CusPeoplePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.people = [];
        _this._onFilterChanged = function (filterText, currentPersonas, limitResults) {
            if (filterText) {
                return _this._filterPersonasByText(filterText, limitResults).then(function () {
                    return _this.people;
                });
            }
            else {
                return [];
            }
        };
        _this._returnMostRecentlyUsed = function (currentPersonas) {
            var mostRecentlyUsed = _this.state.mostRecentlyUsed;
            mostRecentlyUsed = _this._removeDuplicates(mostRecentlyUsed, currentPersonas);
            return mostRecentlyUsed;
        };
        _this.SelectedChanged = function (items) {
            // const newps:IPersonaProps[]=items;
            // const processedItem =objectAssign({}, items);
            // console.log(items);
            _this.setState({ currentSelectedItems: items });
            if (_this.props.SelectedChanged) {
                _this.props.SelectedChanged(items);
            }
        };
        _this._onRemoveSuggestion = function (item) {
            var _a = _this.state, peopleList = _a.peopleList, currentSelectedItems = _a.currentSelectedItems, mruState = _a.mostRecentlyUsed;
            var indexPeopleList = peopleList.indexOf(item);
            var indexMostRecentlyUsed = mruState.indexOf(item);
            if (indexPeopleList >= 0) {
                var newPeople = peopleList
                    .slice(0, indexPeopleList)
                    .concat(peopleList.slice(indexPeopleList + 1));
                _this.setState({ peopleList: newPeople });
            }
            if (indexMostRecentlyUsed >= 0) {
                var newSuggestedPeople = mruState
                    .slice(0, indexMostRecentlyUsed)
                    .concat(mruState.slice(indexMostRecentlyUsed + 1));
                _this.setState({ mostRecentlyUsed: newSuggestedPeople });
            }
        };
        _this._validateInput = function (input) {
            if (input.indexOf("@") !== -1) {
                return Pickers_1.ValidationState.valid;
            }
            else if (input.length > 1) {
                return Pickers_1.ValidationState.warning;
            }
            else {
                return Pickers_1.ValidationState.invalid;
            }
        };
        _this._onItemSelected = function (item) {
            var processedItem = objectAssign({}, item);
            processedItem.text = "" + item.text;
            return new Promise(function (resolve, reject) {
                return setTimeout(function () { return resolve(processedItem); }, 250);
            });
        };
        if (_this.state === undefined) {
            _this.state = {
                currentPicker: _this.props.currentPicker,
                delayResults: false,
                peopleList: [],
                mostRecentlyUsed: [],
                currentSelectedItems: props.selectedItems || undefined
            };
        }
        return _this;
        // console.log(this.state);
    }
    CusPeoplePicker.prototype.render = function () {
        return (React.createElement("div", { className: CusPeoplePicker_module_scss_1.default["ms-Picker-container"] },
            this.props.label && this.props.label.trim() !== "" ? (React.createElement("label", { className: CusPeoplePicker_module_scss_1.default["ms-Label"] },
                this.props.label,
                this.props.required === true ? (React.createElement("span", { style: { color: "red" } }, "*")) : (""))) : (""),
            React.createElement("div", { "aria-expanded": "false", "aria-live": "assertive", "aria-disabled": "true", className: CusPeoplePicker_module_scss_1.default["ms-TextField-fieldGroup"] },
                React.createElement(Pickers_1.NormalPeoplePicker, { onResolveSuggestions: this._onFilterChanged, onEmptyInputFocus: this._returnMostRecentlyUsed, getTextFromItem: this._getTextFromItem, pickerSuggestionsProps: suggestionProps, className: "ms-PeoplePicker", key: "normal", onRemoveSuggestion: this._onRemoveSuggestion, onValidateInput: this._validateInput, removeButtonAriaLabel: "Remove", itemLimit: this.props.itemLimit, onItemSelected: this._onItemSelected, inputProps: {
                        onBlur: function (ev) {
                            return console.log("onBlur called");
                        },
                        onFocus: function (ev) {
                            return console.log("onFocus called");
                        },
                        "aria-label": this.props.label
                    }, onInputChange: this._onInputChange, selectedItems: this.state.currentSelectedItems, onChange: this.SelectedChanged }))));
    };
    CusPeoplePicker.prototype._getTextFromItem = function (persona) {
        return persona.text;
    };
    CusPeoplePicker.prototype._onInputChange = function (input) {
        var outlookRegEx = /<.*>/g;
        var emailAddress = outlookRegEx.exec(input);
        if (emailAddress && emailAddress[0]) {
            return emailAddress[0].substring(1, emailAddress[0].length - 1);
        }
        return input;
    };
    CusPeoplePicker.prototype._removeDuplicates = function (personas, possibleDupes) {
        var _this = this;
        return personas.filter(function (persona) { return !_this._listContainsPersona(persona, possibleDupes); });
    };
    CusPeoplePicker.prototype._filterPersonasByText = function (filterText, limitResults) {
        var _this = this;
        this.people.length = 0;
        var topnum = limitResults ? limitResults : 5;
        //console.log(`filterText:${filterText}`);
        return sp_1.sp.web.siteUsers
            .filter("substringof('" + filterText + "',Title) or substringof('" + filterText + "',LoginName)")
            .top(topnum)
            .get()
            .then(function (users) {
            users.map(function (user) {
                //  console.log(user);
                _this.people.push({ key: user.Id, text: user.Title });
            });
        });
    };
    CusPeoplePicker.prototype._listContainsPersona = function (persona, personas) {
        if (!personas || !personas.length || personas.length === 0) {
            return false;
        }
        return personas.filter(function (item) { return item.text === persona.text; }).length > 0;
    };
    CusPeoplePicker.prototype._getpersonbyid = function (id) {
        return sp_1.sp.web.siteUsers
            .getById(id)
            .get()
            .then(function (user) {
            var per = {
                key: user.Id,
                text: user.Title
            };
            var arrpers = [];
            arrpers.push(per);
            return arrpers;
        });
    };
    CusPeoplePicker.prototype.componentWillReceiveProps = function (nextProps) {
        // console.log(nextProps);
        if (this.props.SelectedChanged && nextProps.selectedItems) {
            this.setState({ currentSelectedItems: nextProps.selectedItems });
        }
    };
    CusPeoplePicker.prototype.componentDidMount = function () {
        var _this = this;
        // tslint:disable-next-line:no-empty
        if (this.state.currentPicker && this.state.currentPicker > 0) {
        }
        else {
            if (this.props.defaultMe) {
                sp_1.sp.web.currentUser.get().then(function (user) {
                    var per = {
                        key: user.Id,
                        text: user.Title
                    };
                    var arrpers = [];
                    arrpers.push(per);
                    /* arrpers.push({ key: 2,
                  text: "test"} as  IPersonaProps & { key: string | number });*/
                    _this.setState({
                        currentPicker: user.Id,
                        currentSelectedItems: arrpers
                    });
                });
            }
            //  console.log(this.props.selectedItems);
            // console.log(this.state);
        }
    };
    return CusPeoplePicker;
}(Utilities_1.BaseComponent));
exports.default = CusPeoplePicker;

//# sourceMappingURL=CusPeoplePicker.js.map
