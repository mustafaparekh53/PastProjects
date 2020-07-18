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
import * as React from "react";
import { people } from "./PeoplePickerExampleData";
import { Environment, EnvironmentType } from "@microsoft/sp-core-library";
import { SharePointUserPersona } from "../models/OfficeUiFabricPeoplePicker";
import { sp, stringIsNullOrEmpty } from "@pnp/pnpjs";
import "@pnp/polyfill-ie11";
import { OfficeUiFabricPeoplePicker } from "./OfficeUiFabricPeoplePicker";
var OfficeUiFabricPeoplePickerContainer = (function (_super) {
    __extends(OfficeUiFabricPeoplePickerContainer, _super);
    function OfficeUiFabricPeoplePickerContainer(props) {
        var _this = _super.call(this, props) || this;
        _this._fetchSelectionByEmail = function (selections) {
            var batch = sp.web.createBatch();
            var entities = [];
            selections.map(function (selection) {
                batch.addResolveBatchDependency(sp.profiles
                    .clientPeoplePickerSearchUser(_this._getQueryParams(selection.email))
                    .then(function (result) {
                    if (result.length === 1) {
                        entities.push(result[0]);
                    }
                    else {
                        console.log("multiple entities fetched");
                    }
                }));
            });
            batch.execute().then(function (_) {
                _this._getSharePointUserPersonas(entities).then(function (personas) {
                    _this.setState({ selectedItems: personas });
                });
            });
        };
        _this._onSelectionChange = function (selections) {
            _this.setState({
                selectedItems: selections
            }, function () {
                var pickerSelections = [];
                selections.map(function (selection) {
                    pickerSelections.push({
                        id: selection.user.Id,
                        email: selection.user.Email
                    });
                });
                _this.props.onChange(pickerSelections);
            });
        };
        _this._onFilterChanged = function (filterText) {
            if (stringIsNullOrEmpty(filterText)) {
                return [];
            }
            else {
                if (filterText.length > 2) {
                    return _this._searchPeople(filterText);
                }
            }
        };
        _this.state = {
            selectedItems: undefined
        };
        return _this;
    }
    OfficeUiFabricPeoplePickerContainer.prototype.render = function () {
        return (React.createElement(OfficeUiFabricPeoplePicker, { label: this.props.label, itemLimit: this.props.itemLimit, onResolveSuggestions: this._onFilterChanged, selectedItems: this.state.selectedItems, onChange: this._onSelectionChange }));
    };
    OfficeUiFabricPeoplePickerContainer.prototype.componentDidMount = function () {
        if (Environment.type === EnvironmentType.Local) {
        }
        else {
            if (this.props.selections !== undefined) {
                this._fetchSelectionByEmail(this.props.selections);
            }
        }
    };
    OfficeUiFabricPeoplePickerContainer.prototype.componentWillReceiveProps = function (newProps) {
        // If component is not currently controlled and defaultValue changes, set value to new defaultValue.
        if (newProps.selections !== this.props.selections &&
            newProps.selections !== undefined) {
            this._fetchSelectionByEmail(newProps.selections);
        }
    };
    OfficeUiFabricPeoplePickerContainer.prototype._getSharePointUserPersonas = function (entities) {
        var batch = sp.web.createBatch();
        var personas = [];
        entities.map(function (entity) {
            batch.addResolveBatchDependency(sp.web
                .inBatch(batch)
                .ensureUser(entity.EntityData.Email)
                .then(function (result) {
                personas.push(new SharePointUserPersona(entity, result));
            })
                .catch(function (error) {
                console.log(error);
            }));
        });
        return batch.execute().then(function (_) {
            return personas;
        });
    };
    OfficeUiFabricPeoplePickerContainer.prototype._getQueryParams = function (terms) {
        var principalType = 0;
        if (this.props.principalTypeUser === true) {
            principalType += 1;
        }
        if (this.props.principalTypeSharePointGroup === true) {
            principalType += 8;
        }
        if (this.props.principalTypeSecurityGroup === true) {
            principalType += 4;
        }
        if (this.props.principalTypeDistributionList === true) {
            principalType += 2;
        }
        return {
            AllowEmailAddresses: true,
            AllowMultipleEntities: false,
            AllUrlZones: false,
            MaximumEntitySuggestions: this.props.maximumEntitySuggestions,
            PrincipalSource: 15,
            // PrincipalType controls the type of entities that are returned in the results.
            // Choices are All - 15, Distribution List - 2 , Security Groups - 4, SharePoint Groups - 8, User - 1.
            // These values can be combined (example: 13 is security + SP groups + users)
            PrincipalType: principalType,
            QueryString: terms
        };
    };
    /**
     * @function
     * Returns fake people results for the Mock mode
     */
    OfficeUiFabricPeoplePickerContainer.prototype.searchPeopleFromMock = function (terms) {
        return people.filter(function (value) {
            if (value.text.toLowerCase().indexOf(terms.toLowerCase()) !== -1) {
                return value;
            }
        });
    };
    /**
     * @function
     * Returns people results after a REST API call
     */
    OfficeUiFabricPeoplePickerContainer.prototype._searchPeople = function (terms) {
        var _this = this;
        if (Environment.type === EnvironmentType.Local) {
            // If the running environment is local, load the data from the mock
            return this.searchPeopleFromMock(terms);
        }
        else {
            return sp.profiles
                .clientPeoplePickerSearchUser(this._getQueryParams(terms))
                .then(function (entities) {
                return _this._getSharePointUserPersonas(entities);
            })
                .catch(function (error) {
                console.log(error);
                return [];
            });
        }
    };
    return OfficeUiFabricPeoplePickerContainer;
}(React.Component));
export { OfficeUiFabricPeoplePickerContainer };

//# sourceMappingURL=OfficeUiFabricPeoplePickerContainer.js.map
