"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var Persona_1 = require("office-ui-fabric-react/lib/Persona");
/* tslint:enable */
var stylesImport = require("./PickerItemsCus.module.scss");
var styles = stylesImport;
exports.CusSelectedItem = function (peoplePickerItemProps) {
    var item = peoplePickerItemProps.item, onRemoveItem = peoplePickerItemProps.onRemoveItem, index = peoplePickerItemProps.index, selected = peoplePickerItemProps.selected, removeButtonAriaLabel = peoplePickerItemProps.removeButtonAriaLabel;
    // console.log(item);
    //item.coinProps=null;
    item.showUnknownPersonaCoin = false;
    var itemId = office_ui_fabric_react_1.getId();
    // tslint:disable-next-line:typedef
    var onClickIconButton = function (removeItem) {
        return function () {
            if (removeItem) {
                removeItem();
            }
        };
    };
    return (React.createElement("div", { className: office_ui_fabric_react_1.css("ms-PickerPersona-container", styles.personaContainer, (_a = {}, _a["is-selected " + styles.personaContainerIsSelected] = selected, _a), (_b = {},
            _b["is-invalid " + styles.validationError] = item.ValidationState === office_ui_fabric_react_1.ValidationState.warning,
            _b)), "data-is-focusable": true, "data-is-sub-focuszone": true, "data-selection-index": index, role: "listitem", "aria-labelledby": "selectedItemPersona-" + itemId },
        React.createElement("div", { className: office_ui_fabric_react_1.css("ms-PickerItem-content", styles.itemContent), id: "selectedItemPersona-" + itemId },
            React.createElement(Persona_1.Persona, __assign({}, item, { presence: item.presence !== undefined ? item.presence : office_ui_fabric_react_1.PersonaPresence.none, size: office_ui_fabric_react_1.PersonaSize.size28 }))),
        React.createElement(office_ui_fabric_react_1.IconButton, { onClick: onClickIconButton(onRemoveItem), iconProps: { iconName: "Cancel", style: { fontSize: "12px" } }, className: office_ui_fabric_react_1.css("ms-PickerItem-removeButton", styles.removeButton), ariaLabel: removeButtonAriaLabel })));
    var _a, _b;
};

//# sourceMappingURL=CusSelectedItem.js.map
