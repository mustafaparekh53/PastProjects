define("ddffc4a3-785e-4512-97ed-59d9262e6384_0.0.1", ["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-webpart-base","DeployContractWebPartStrings"], function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_111__, __WEBPACK_EXTERNAL_MODULE_259__, __WEBPACK_EXTERNAL_MODULE_982__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 981);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: []
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: []
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
exports.setVirtualParent = setVirtualParent;
/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && isVirtualElement(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
exports.getVirtualParent = getVirtualParent;
/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return child && (allowVirtualParents && getVirtualParent(child) ||
        child.parentNode && child.parentNode);
}
exports.getParent = getParent;
/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent
 * @param allowVirtualChildren
 */
function getChildren(parent, allowVirtualChildren) {
    if (allowVirtualChildren === void 0) { allowVirtualChildren = true; }
    var children = [];
    if (parent) {
        for (var i = 0; i < parent.children.length; i++) {
            children.push(parent.children.item(i));
        }
        if (allowVirtualChildren && isVirtualElement(parent)) {
            children.push.apply(children, parent._virtual.children);
        }
    }
    return children;
}
exports.getChildren = getChildren;
/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            isContained = false;
            while (child) {
                var nextParent = getParent(child);
                if (nextParent === parent) {
                    isContained = true;
                    break;
                }
                child = nextParent;
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
exports.elementContains = elementContains;
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
exports.setSSR = setSSR;
/**
 * Helper to get the window object.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_isSSR || typeof window === 'undefined') {
        return undefined;
    }
    else {
        return (rootElement &&
            rootElement.ownerDocument &&
            rootElement.ownerDocument.defaultView ?
            rootElement.ownerDocument.defaultView :
            window);
    }
}
exports.getWindow = getWindow;
/**
 * Helper to get the document object.
 *
 * @public
 */
function getDocument(rootElement) {
    if (_isSSR || typeof document === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
    }
}
exports.getDocument = getDocument;
/**
 * Helper to get bounding client rect, works with window.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
exports.getRect = getRect;
/**
 * Finds the first parent element where the matchFunction returns true
 * @param element element to start searching at
 * @param matchFunction the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
function findElementRecursive(element, matchFunction) {
    if (!element || element === document.body) {
        return null;
    }
    return matchFunction(element) ? element : findElementRecursive(getParent(element), matchFunction);
}
exports.findElementRecursive = findElementRecursive;
/**
 * Determines if an element, or any of its ancestors, contian the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
function elementContainsAttribute(element, attribute) {
    var elementMatch = findElementRecursive(element, function (testElement) { return testElement.hasAttribute(attribute); });
    return elementMatch && elementMatch.getAttribute(attribute);
}
exports.elementContainsAttribute = elementContainsAttribute;
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_111__;

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(63), exports);
tslib_1.__exportStar(__webpack_require__(264), exports);
tslib_1.__exportStar(__webpack_require__(68), exports);
tslib_1.__exportStar(__webpack_require__(274), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(275), exports);
tslib_1.__exportStar(__webpack_require__(277), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(278), exports);
tslib_1.__exportStar(__webpack_require__(45), exports);
tslib_1.__exportStar(__webpack_require__(279), exports);
tslib_1.__exportStar(__webpack_require__(280), exports);
tslib_1.__exportStar(__webpack_require__(281), exports);
tslib_1.__exportStar(__webpack_require__(282), exports);
tslib_1.__exportStar(__webpack_require__(283), exports);
tslib_1.__exportStar(__webpack_require__(284), exports);
tslib_1.__exportStar(__webpack_require__(285), exports);
tslib_1.__exportStar(__webpack_require__(286), exports);
tslib_1.__exportStar(__webpack_require__(287), exports);
tslib_1.__exportStar(__webpack_require__(10), exports);
tslib_1.__exportStar(__webpack_require__(288), exports);
tslib_1.__exportStar(__webpack_require__(289), exports);
tslib_1.__exportStar(__webpack_require__(71), exports);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(290), exports);
tslib_1.__exportStar(__webpack_require__(69), exports);
tslib_1.__exportStar(__webpack_require__(76), exports);
tslib_1.__exportStar(__webpack_require__(292), exports);
tslib_1.__exportStar(__webpack_require__(293), exports);
tslib_1.__exportStar(__webpack_require__(41), exports);
tslib_1.__exportStar(__webpack_require__(294), exports);
tslib_1.__exportStar(__webpack_require__(295), exports);
tslib_1.__exportStar(__webpack_require__(296), exports);
tslib_1.__exportStar(__webpack_require__(297), exports);
tslib_1.__exportStar(__webpack_require__(64), exports);
tslib_1.__exportStar(__webpack_require__(299), exports);
tslib_1.__exportStar(__webpack_require__(300), exports);
tslib_1.__exportStar(__webpack_require__(42), exports);


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(22);
var invariant = __webpack_require__(5);
var warning = __webpack_require__(7);
var assign = __webpack_require__(9);

var ReactPropTypesSecret = __webpack_require__(70);
var checkPropTypes = __webpack_require__(276);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("dev" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/**
 * Injection mode for the stylesheet.
 *
 * @public
 */
var InjectionMode;
(function (InjectionMode) {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    InjectionMode[InjectionMode["none"] = 0] = "none";
    /**
     * Inserts rules using the insertRule api.
     */
    InjectionMode[InjectionMode["insertNode"] = 1] = "insertNode";
    /**
     * Appends rules using appendChild.
     */
    InjectionMode[InjectionMode["appendChild"] = 2] = "appendChild";
})(InjectionMode = exports.InjectionMode || (exports.InjectionMode = {}));
var STYLESHEET_SETTING = '__stylesheet__';
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = /** @class */ (function () {
    function Stylesheet(config) {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._keyToClassName = {};
        // tslint:disable-next-line:no-any
        this._classNameToArgs = {};
        this._config = tslib_1.__assign({ injectionMode: 1 /* insertNode */, defaultPrefix: 'css' }, config);
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        // tslint:disable-next-line:no-any
        var win = typeof window !== 'undefined' ? window : {};
        _stylesheet = win[STYLESHEET_SETTING];
        if (!_stylesheet) {
            // tslint:disable-next-line:no-string-literal
            var fabricConfig = (win && win['FabricConfig']) || {};
            _stylesheet = win[STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
        }
        return _stylesheet;
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = tslib_1.__assign({}, this._config, config);
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var prefix = displayName || this._config.defaultPrefix;
        return prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return (entry && entry.args);
    };
    /**
   * Gets the arguments associated with a given classname which was
   * previously registered using cacheClassName.
   */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return (entry && entry.rules);
    };
    /**
     * Inserts a css rule into the stylesheet.
     */
    Stylesheet.prototype.insertRule = function (rule) {
        var injectionMode = this._config.injectionMode;
        var element = injectionMode !== 0 /* none */ ? this._getStyleElement() : undefined;
        if (element) {
            switch (this._config.injectionMode) {
                case 1 /* insertNode */:
                    var sheet = element.sheet;
                    try {
                        sheet.insertRule(rule, sheet.cssRules.length);
                    }
                    catch (e) {
                        // The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
                        // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
                        // which could be slower and bulkier.
                    }
                    break;
                case 2 /* appendChild */:
                    element.appendChild(document.createTextNode(rule));
                    break;
            }
        }
        else {
            this._rules.push(rule);
        }
        if (this._config.onInsertRule) {
            this._config.onInsertRule(rule);
        }
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function () {
        return (this._rules.join('') || '') + (this._rulesToInsert.join('') || '');
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
    };
    // Forces the regeneration of incoming styles without totally resetting the stylesheet.
    Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
    };
    Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = this._createStyleElement();
            // Reset the style element on the next frame.
            window.requestAnimationFrame(function () {
                _this._styleElement = undefined;
            });
        }
        return this._styleElement;
    };
    Stylesheet.prototype._createStyleElement = function () {
        var styleElement = document.createElement('style');
        styleElement.setAttribute('data-merge-styles', 'true');
        styleElement.type = 'text/css';
        if (this._lastStyleElement && this._lastStyleElement.nextElementSibling) {
            document.head.insertBefore(styleElement, this._lastStyleElement.nextElementSibling);
        }
        else {
            document.head.appendChild(styleElement);
        }
        this._lastStyleElement = styleElement;
        return styleElement;
    };
    return Stylesheet;
}());
exports.Stylesheet = Stylesheet;


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=60)}([function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){var n=r(35)("wks"),o=r(22),i=r(0).Symbol,s="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=n},function(t,e,r){"use strict";var n=r(7);t.exports=function(t){if(!n(t))throw new TypeError("Cannot use null or undefined");return t}},function(t,e,r){"use strict";t.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}},function(t,e,r){"use strict";t.exports=r(108)()?Symbol:r(109)},function(t,e,r){var n=r(12);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){"use strict";var n=r(31),o=r(57),i=r(104),s=r(58);(t.exports=function(t,e){var r,i,u,c,a;return arguments.length<2||"string"!=typeof t?(c=e,e=t,t=null):c=arguments[2],null==t?(r=u=!0,i=!1):(r=s.call(t,"c"),i=s.call(t,"e"),u=s.call(t,"w")),a={value:e,configurable:r,enumerable:i,writable:u},c?n(o(c),a):a}).gs=function(t,e,r){var u,c,a,f;return"string"!=typeof t?(a=r,r=e,e=t,t=null):a=arguments[3],null==e?e=void 0:i(e)?null==r?r=void 0:i(r)||(a=r,r=void 0):(a=e,e=r=void 0),null==t?(u=!0,c=!1):(u=s.call(t,"c"),c=s.call(t,"e")),f={get:e,set:r,configurable:u,enumerable:c},a?n(o(a),f):f}},function(t,e,r){"use strict";var n=r(53)();t.exports=function(t){return t!==n&&null!==t}},function(t,e,r){var n=r(14);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(11),o=r(25);t.exports=r(13)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(5),o=r(61),i=r(62),s=Object.defineProperty;e.f=r(13)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){t.exports=!r(36)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e){t.exports={}},function(t,e,r){"use strict";t.exports=r(55)()?Object.setPrototypeOf:r(56)},function(t,e,r){"use strict";var n=Object.prototype.toString,o=n.call(function(){return arguments}());t.exports=function(t){return n.call(t)===o}},function(t,e,r){"use strict";var n=Object.prototype.toString,o=n.call("");t.exports=function(t){return"string"==typeof t||t&&"object"==typeof t&&(t instanceof String||n.call(t)===o)||!1}},function(t,e){t.exports=!1},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e,r){var n=r(0),o=r(9),i=r(10),s=r(26),u=r(8),c=function(t,e,r){var a,f,l,p,h=t&c.F,_=t&c.G,y=t&c.S,d=t&c.P,v=t&c.B,b=_?n:y?n[e]||(n[e]={}):(n[e]||{}).prototype,m=_?o:o[e]||(o[e]={}),x=m.prototype||(m.prototype={});for(a in _&&(r=e),r)l=((f=!h&&b&&void 0!==b[a])?b:r)[a],p=v&&f?u(l,n):d&&"function"==typeof l?u(Function.call,l):l,b&&s(b,a,l,t&c.U),m[a]!=l&&i(m,a,p),d&&x[a]!=l&&(x[a]=l)};n.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,r){var n=r(12),o=r(0).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(0),o=r(10),i=r(16),s=r(22)("src"),u=Function.toString,c=(""+u).split("toString");r(9).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,r,u){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",e)),t[e]!==r&&(a&&(i(r,s)||o(r,s,t[e]?""+t[e]:c.join(String(e)))),t===n?t[e]=r:u?t[e]?t[e]=r:o(t,e,r):(delete t[e],o(t,e,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||u.call(this)})},function(t,e,r){var n=r(39),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(11).f,o=r(16),i=r(1)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){var n=r(75),o=r(46);t.exports=function(t){return n(o(t))}},function(t,e,r){var n=r(35)("keys"),o=r(22);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e,r){"use strict";t.exports=r(99)()?Object.assign:r(100)},function(t,e,r){"use strict";var n,o=r(52),i=r(31),s=r(3),u=r(2),c=r(6),a=r(116),f=r(4),l=Object.defineProperty,p=Object.defineProperties;t.exports=n=function(t,e){if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");p(this,{__list__:c("w",u(t)),__context__:c("w",e),__nextIndex__:c("w",0)}),e&&(s(e.on),e.on("_add",this._onAdd),e.on("_delete",this._onDelete),e.on("_clear",this._onClear))},delete n.prototype.constructor,p(n.prototype,i({_next:c(function(){var t;if(this.__list__)return this.__redo__&&void 0!==(t=this.__redo__.shift())?t:this.__nextIndex__<this.__list__.length?this.__nextIndex__++:void this._unBind()}),next:c(function(){return this._createResult(this._next())}),_createResult:c(function(t){return void 0===t?{done:!0,value:void 0}:{done:!1,value:this._resolve(t)}}),_resolve:c(function(t){return this.__list__[t]}),_unBind:c(function(){this.__list__=null,delete this.__redo__,this.__context__&&(this.__context__.off("_add",this._onAdd),this.__context__.off("_delete",this._onDelete),this.__context__.off("_clear",this._onClear),this.__context__=null)}),toString:c(function(){return"[object "+(this[f.toStringTag]||"Object")+"]"})},a({_onAdd:c(function(t){t>=this.__nextIndex__||(++this.__nextIndex__,this.__redo__?(this.__redo__.forEach(function(e,r){e>=t&&(this.__redo__[r]=++e)},this),this.__redo__.push(t)):l(this,"__redo__",c("c",[t])))}),_onDelete:c(function(t){var e;t>=this.__nextIndex__||(--this.__nextIndex__,this.__redo__&&(-1!==(e=this.__redo__.indexOf(t))&&this.__redo__.splice(e,1),this.__redo__.forEach(function(e,r){e>t&&(this.__redo__[r]=--e)},this)))}),_onClear:c(function(){this.__redo__&&o.call(this.__redo__),this.__nextIndex__=0})}))),l(n.prototype,f.iterator,c(function(){return this}))},function(t,e,r){"use strict";var n,o,i,s,u=r(21),c=r(0),a=r(8),f=r(34),l=r(23),p=r(12),h=r(14),_=r(63),y=r(64),d=r(65),v=r(41).set,b=r(67)(),m=r(43),x=r(68),g=r(69),w=r(70),O=c.TypeError,j=c.process,P=j&&j.versions,S=P&&P.v8||"",A=c.Promise,E="process"==f(j),T=function(){},k=o=m.f,M=!!function(){try{var t=A.resolve(1),e=(t.constructor={})[r(1)("species")]=function(t){t(T,T)};return(E||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e&&0!==S.indexOf("6.6")&&-1===g.indexOf("Chrome/66")}catch(t){}}(),D=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},B=function(t,e){if(!t._n){t._n=!0;var r=t._c;b(function(){for(var n=t._v,o=1==t._s,i=0,s=function(e){var r,i,s,u=o?e.ok:e.fail,c=e.resolve,a=e.reject,f=e.domain;try{u?(o||(2==t._h&&C(t),t._h=1),!0===u?r=n:(f&&f.enter(),r=u(n),f&&(f.exit(),s=!0)),r===e.promise?a(O("Promise-chain cycle")):(i=D(r))?i.call(r,c,a):c(r)):a(n)}catch(t){f&&!s&&f.exit(),a(t)}};r.length>i;)s(r[i++]);t._c=[],t._n=!1,e&&!t._h&&I(t)})}},I=function(t){v.call(c,function(){var e,r,n,o=t._v,i=F(t);if(i&&(e=x(function(){E?j.emit("unhandledRejection",o,t):(r=c.onunhandledrejection)?r({promise:t,reason:o}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",o)}),t._h=E||F(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},F=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){v.call(c,function(){var e;E?j.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},R=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),B(e,!0))},U=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw O("Promise can't be resolved itself");(e=D(t))?b(function(){var n={_w:r,_d:!1};try{e.call(t,a(U,n,1),a(R,n,1))}catch(t){R.call(n,t)}}):(r._v=t,r._s=1,B(r,!1))}catch(t){R.call({_w:r,_d:!1},t)}}};M||(A=function(t){_(this,A,"Promise","_h"),h(t),n.call(this);try{t(a(U,this,1),a(R,this,1))}catch(t){R.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(71)(A.prototype,{then:function(t,e){var r=k(d(this,A));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=E?j.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&B(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new n;this.promise=t,this.resolve=a(U,t,1),this.reject=a(R,t,1)},m.f=k=function(t){return t===A||t===s?new i(t):o(t)}),l(l.G+l.W+l.F*!M,{Promise:A}),r(28)(A,"Promise"),r(72)("Promise"),s=r(9).Promise,l(l.S+l.F*!M,"Promise",{reject:function(t){var e=k(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(u||!M),"Promise",{resolve:function(t){return w(u&&this===s?A:this,t)}}),l(l.S+l.F*!(M&&r(44)(function(t){A.all(t).catch(T)})),"Promise",{all:function(t){var e=this,r=k(e),n=r.resolve,o=r.reject,i=x(function(){var r=[],i=0,s=1;y(t,!1,function(t){var u=i++,c=!1;r.push(void 0),s++,e.resolve(t).then(function(t){c||(c=!0,r[u]=t,--s||n(r))},o)}),--s||n(r)});return i.e&&o(i.v),r.promise},race:function(t){var e=this,r=k(e),n=r.reject,o=x(function(){y(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return o.e&&n(o.v),r.promise}})},function(t,e,r){var n=r(15),o=r(1)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?r:i?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,r){var n=r(9),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(21)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){var n=r(5);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},function(t,e,r){var n=r(17),o=r(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||i[o]===t)}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){var n=r(34),o=r(1)("iterator"),i=r(17);t.exports=r(9).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[n(t)]}},function(t,e,r){var n,o,i,s=r(8),u=r(66),c=r(42),a=r(24),f=r(0),l=f.process,p=f.setImmediate,h=f.clearImmediate,_=f.MessageChannel,y=f.Dispatch,d=0,v={},b=function(){var t=+this;if(v.hasOwnProperty(t)){var e=v[t];delete v[t],e()}},m=function(t){b.call(t.data)};p&&h||(p=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return v[++d]=function(){u("function"==typeof t?t:Function(t),e)},n(d),d},h=function(t){delete v[t]},"process"==r(15)(l)?n=function(t){l.nextTick(s(b,t,1))}:y&&y.now?n=function(t){y.now(s(b,t,1))}:_?(i=(o=new _).port2,o.port1.onmessage=m,n=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(t){f.postMessage(t+"","*")},f.addEventListener("message",m,!1)):n="onreadystatechange"in a("script")?function(t){c.appendChild(a("script")).onreadystatechange=function(){c.removeChild(this),b.call(t)}}:function(t){setTimeout(s(b,t,1),0)}),t.exports={set:p,clear:h}},function(t,e,r){var n=r(0).document;t.exports=n&&n.documentElement},function(t,e,r){"use strict";var n=r(14);t.exports.f=function(t){return new function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=n(e),this.reject=n(r)}(t)}},function(t,e,r){var n=r(1)("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i=[7],s=i[n]();s.next=function(){return{done:r=!0}},i[n]=function(){return s},t(i)}catch(t){}return r}},function(t,e,r){"use strict";var n=r(73),o=r(74),i=r(17),s=r(29);t.exports=r(76)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){var n=r(46);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";var n=r(8),o=r(23),i=r(48),s=r(37),u=r(38),c=r(27),a=r(85),f=r(40);o(o.S+o.F*!r(44)(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,o,l,p=i(t),h="function"==typeof this?this:Array,_=arguments.length,y=_>1?arguments[1]:void 0,d=void 0!==y,v=0,b=f(p);if(d&&(y=n(y,_>2?arguments[2]:void 0,2)),void 0==b||h==Array&&u(b))for(r=new h(e=c(p.length));e>v;v++)a(r,v,d?y(p[v],v):p[v]);else for(l=b.call(p),r=new h;!(o=l.next()).done;v++)a(r,v,d?s(l,y,[o.value,v],!0):o.value);return r.length=v,r}})},function(t,e,r){"use strict";r.d(e,"b",function(){return a}),r.d(e,"c",function(){return d}),r.d(e,"d",function(){return b}),r.d(e,"a",function(){return x}),r.d(e,"e",function(){return g});var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function a(t){this.map={},t instanceof a?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function p(t){var e=new FileReader,r=l(e);return e.readAsArrayBuffer(t),r}function h(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&function(t){return t&&DataView.prototype.isPrototypeOf(t)}(t)?(this._bodyArrayBuffer=h(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?this._bodyArrayBuffer=h(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=l(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}a.prototype.append=function(t,e){t=s(t),e=u(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},a.prototype.delete=function(t){delete this.map[s(t)]},a.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},a.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},a.prototype.set=function(t,e){this.map[s(t)]=u(e)},a.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},a.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),c(t)},a.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),c(t)},a.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),c(t)},n.iterable&&(a.prototype[Symbol.iterator]=a.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function d(t,e){var r=(e=e||{}).body;if(t instanceof d){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new a(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new a(e.headers)),this.method=function(t){var e=t.toUpperCase();return y.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function v(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function b(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new a(e.headers),this.url=e.url||"",this._initBody(t)}d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},_.call(d.prototype),_.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new a(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var m=[301,302,303,307,308];b.redirect=function(t,e){if(-1===m.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})};var x=self.DOMException;try{new x}catch(t){(x=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),x.prototype.constructor=x}function g(t,e){return new Promise(function(r,o){var i=new d(t,e);if(i.signal&&i.signal.aborted)return o(new x("Aborted","AbortError"));var s=new XMLHttpRequest;function u(){s.abort()}s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:function(t){var e=new a;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}(s.getAllResponseHeaders()||"")};t.url="responseURL"in s?s.responseURL:t.headers.get("X-Request-URL");var e="response"in s?s.response:s.responseText;r(new b(e,t))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new x("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&n.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),i.signal&&(i.signal.addEventListener("abort",u),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",u)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})}g.polyfill=!0,self.fetch||(self.fetch=g,self.Headers=a,self.Request=d,self.Response=b)},function(t,e,r){"use strict";r(86)()||Object.defineProperty(r(87),"Map",{value:r(88),configurable:!0,enumerable:!1,writable:!0})},function(t,e,r){"use strict";var n=r(2);t.exports=function(){return n(this).length=0,this}},function(t,e,r){"use strict";t.exports=function(){}},function(t,e,r){"use strict";var n=r(93),o=Math.max;t.exports=function(t){return o(0,n(t))}},function(t,e,r){"use strict";var n=Object.create,o=Object.getPrototypeOf,i={};t.exports=function(){var t=Object.setPrototypeOf,e=arguments[0]||n;return"function"==typeof t&&o(t(e(null),i))===i}},function(t,e,r){"use strict";var n,o=r(97),i=r(2),s=Object.prototype.isPrototypeOf,u=Object.defineProperty,c={configurable:!0,enumerable:!1,writable:!0,value:void 0};n=function(t,e){if(i(t),null===e||o(e))return t;throw new TypeError("Prototype must be null or an object")},t.exports=function(t){var e,r;return t?(2===t.level?t.set?(r=t.set,e=function(t,e){return r.call(n(t,e),e),t}):e=function(t,e){return n(t,e).__proto__=e,t}:e=function t(e,r){var o;return n(e,r),(o=s.call(t.nullPolyfill,e))&&delete t.nullPolyfill.__proto__,null===r&&(r=t.nullPolyfill),e.__proto__=r,o&&u(t.nullPolyfill,"__proto__",c),e},Object.defineProperty(e,"level",{configurable:!1,enumerable:!1,writable:!1,value:t.level})):null}(function(){var t,e=Object.create(null),r={},n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");if(n){try{(t=n.set).call(e,r)}catch(t){}if(Object.getPrototypeOf(e)===r)return{set:t,level:2}}return e.__proto__=r,Object.getPrototypeOf(e)===r?{level:2}:((e={}).__proto__=r,Object.getPrototypeOf(e)===r&&{level:1})}()),r(98)},function(t,e,r){"use strict";var n=r(7),o=Array.prototype.forEach,i=Object.create;t.exports=function(t){var e=i(null);return o.call(arguments,function(t){n(t)&&function(t,e){var r;for(r in t)e[r]=t[r]}(Object(t),e)}),e}},function(t,e,r){"use strict";t.exports=r(105)()?String.prototype.contains:r(106)},function(t,e,r){"use strict";var n=r(112);t.exports=function(t){if(!n(t))throw new TypeError(t+" is not iterable");return t}},function(t,e,r){"use strict";r.r(e);var n=r(33);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);var i=r(45);for(var o in i)"default"!==o&&function(t){r.d(e,t,function(){return i[t]})}(o);var s=r(49);for(var o in s)"default"!==o&&function(t){r.d(e,t,function(){return s[t]})}(o);var u=r(50);r.d(e,"Headers",function(){return u.b}),r.d(e,"Request",function(){return u.c}),r.d(e,"Response",function(){return u.d}),r.d(e,"DOMException",function(){return u.a}),r.d(e,"fetch",function(){return u.e});var c=r(51);for(var o in c)["Headers","Request","Response","DOMException","fetch","default"].indexOf(o)<0&&function(t){r.d(e,t,function(){return c[t]})}(o)},function(t,e,r){t.exports=!r(13)&&!r(36)(function(){return 7!=Object.defineProperty(r(24)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(12);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,e,r){var n=r(8),o=r(37),i=r(38),s=r(5),u=r(27),c=r(40),a={},f={};(e=t.exports=function(t,e,r,l,p){var h,_,y,d,v=p?function(){return t}:c(t),b=n(r,l,e?2:1),m=0;if("function"!=typeof v)throw TypeError(t+" is not iterable!");if(i(v)){for(h=u(t.length);h>m;m++)if((d=e?b(s(_=t[m])[0],_[1]):b(t[m]))===a||d===f)return d}else for(y=v.call(t);!(_=y.next()).done;)if((d=o(y,b,_.value,e))===a||d===f)return d}).BREAK=a,e.RETURN=f},function(t,e,r){var n=r(5),o=r(14),i=r(1)("species");t.exports=function(t,e){var r,s=n(t).constructor;return void 0===s||void 0==(r=n(s)[i])?e:o(r)}},function(t,e){t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},function(t,e,r){var n=r(0),o=r(41).set,i=n.MutationObserver||n.WebKitMutationObserver,s=n.process,u=n.Promise,c="process"==r(15)(s);t.exports=function(){var t,e,r,a=function(){var n,o;for(c&&(n=s.domain)&&n.exit();t;){o=t.fn,t=t.next;try{o()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(c)r=function(){s.nextTick(a)};else if(!i||n.navigator&&n.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);r=function(){f.then(a)}}else r=function(){o.call(n,a)};else{var l=!0,p=document.createTextNode("");new i(a).observe(p,{characterData:!0}),r=function(){p.data=l=!l}}return function(n){var o={fn:n,next:void 0};e&&(e.next=o),t||(t=o,r()),e=o}}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,r){var n=r(0).navigator;t.exports=n&&n.userAgent||""},function(t,e,r){var n=r(5),o=r(12),i=r(43);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},function(t,e,r){var n=r(26);t.exports=function(t,e,r){for(var o in e)n(t,o,e[o],r);return t}},function(t,e,r){"use strict";var n=r(0),o=r(11),i=r(13),s=r(1)("species");t.exports=function(t){var e=n[t];i&&e&&!e[s]&&o.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,r){var n=r(1)("unscopables"),o=Array.prototype;void 0==o[n]&&r(10)(o,n,{}),t.exports=function(t){o[n][t]=!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){var n=r(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){"use strict";var n=r(21),o=r(23),i=r(26),s=r(10),u=r(17),c=r(77),a=r(28),f=r(84),l=r(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,r,_,y,d,v){c(r,e,_);var b,m,x,g=function(t){if(!p&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},w=e+" Iterator",O="values"==y,j=!1,P=t.prototype,S=P[l]||P["@@iterator"]||y&&P[y],A=S||g(y),E=y?O?g("entries"):A:void 0,T="Array"==e&&P.entries||S;if(T&&(x=f(T.call(new t)))!==Object.prototype&&x.next&&(a(x,w,!0),n||"function"==typeof x[l]||s(x,l,h)),O&&S&&"values"!==S.name&&(j=!0,A=function(){return S.call(this)}),n&&!v||!p&&!j&&P[l]||s(P,l,A),u[e]=A,u[w]=h,y)if(b={values:O?A:g("values"),keys:d?A:g("keys"),entries:E},v)for(m in b)m in P||i(P,m,b[m]);else o(o.P+o.F*(p||j),e,b);return b}},function(t,e,r){"use strict";var n=r(78),o=r(25),i=r(28),s={};r(10)(s,r(1)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(s,{next:o(1,r)}),i(t,e+" Iterator")}},function(t,e,r){var n=r(5),o=r(79),i=r(47),s=r(30)("IE_PROTO"),u=function(){},c=function(){var t,e=r(24)("iframe"),n=i.length;for(e.style.display="none",r(42).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[i[n]];return c()};t.exports=Object.create||function(t,e){var r;return null!==t?(u.prototype=n(t),r=new u,u.prototype=null,r[s]=t):r=c(),void 0===e?r:o(r,e)}},function(t,e,r){var n=r(11),o=r(5),i=r(80);t.exports=r(13)?Object.defineProperties:function(t,e){o(t);for(var r,s=i(e),u=s.length,c=0;u>c;)n.f(t,r=s[c++],e[r]);return t}},function(t,e,r){var n=r(81),o=r(47);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){var n=r(16),o=r(29),i=r(82)(!1),s=r(30)("IE_PROTO");t.exports=function(t,e){var r,u=o(t),c=0,a=[];for(r in u)r!=s&&n(u,r)&&a.push(r);for(;e.length>c;)n(u,r=e[c++])&&(~i(a,r)||a.push(r));return a}},function(t,e,r){var n=r(29),o=r(27),i=r(83);t.exports=function(t){return function(e,r,s){var u,c=n(e),a=o(c.length),f=i(s,a);if(t&&r!=r){for(;a>f;)if((u=c[f++])!=u)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}}},function(t,e,r){var n=r(39),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},function(t,e,r){var n=r(16),o=r(48),i=r(30)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,r){"use strict";var n=r(11),o=r(25);t.exports=function(t,e,r){e in t?n.f(t,e,o(0,r)):t[e]=r}},function(t,e,r){"use strict";t.exports=function(){var t,e;if("function"!=typeof Map)return!1;try{t=new Map([["raz","one"],["dwa","two"],["trzy","three"]])}catch(t){return!1}return"[object Map]"===String(t)&&(3===t.size&&("function"==typeof t.clear&&("function"==typeof t.delete&&("function"==typeof t.entries&&("function"==typeof t.forEach&&("function"==typeof t.get&&("function"==typeof t.has&&("function"==typeof t.keys&&("function"==typeof t.set&&("function"==typeof t.values&&(!1===(e=t.entries().next()).done&&(!!e.value&&("raz"===e.value[0]&&"one"===e.value[1])))))))))))))}},function(t,e){t.exports=function(){return this}()},function(t,e,r){"use strict";var n,o=r(52),i=r(89),s=r(18),u=r(3),c=r(2),a=r(6),f=r(107),l=r(4),p=r(59),h=r(113),_=r(126),y=r(129),d=Function.prototype.call,v=Object.defineProperties,b=Object.getPrototypeOf;t.exports=n=function(){var t,e,r,o=arguments[0];if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");return r=y&&s&&Map!==n?s(new Map,b(this)):this,null!=o&&p(o),v(r,{__mapKeysData__:a("c",t=[]),__mapValuesData__:a("c",e=[])}),o?(h(o,function(r){var n=c(r)[0];r=r[1],-1===i.call(t,n)&&(t.push(n),e.push(r))},r),r):r},y&&(s&&s(n,Map),n.prototype=Object.create(Map.prototype,{constructor:a(n)})),f(v(n.prototype,{clear:a(function(){this.__mapKeysData__.length&&(o.call(this.__mapKeysData__),o.call(this.__mapValuesData__),this.emit("_clear"))}),delete:a(function(t){var e=i.call(this.__mapKeysData__,t);return-1!==e&&(this.__mapKeysData__.splice(e,1),this.__mapValuesData__.splice(e,1),this.emit("_delete",e,t),!0)}),entries:a(function(){return new _(this,"key+value")}),forEach:a(function(t){var e,r,n=arguments[1];for(u(t),r=(e=this.entries())._next();void 0!==r;)d.call(t,n,this.__mapValuesData__[r],this.__mapKeysData__[r],this),r=e._next()}),get:a(function(t){var e=i.call(this.__mapKeysData__,t);if(-1!==e)return this.__mapValuesData__[e]}),has:a(function(t){return-1!==i.call(this.__mapKeysData__,t)}),keys:a(function(){return new _(this,"key")}),set:a(function(t,e){var r,n=i.call(this.__mapKeysData__,t);return-1===n&&(n=this.__mapKeysData__.push(t)-1,r=!0),this.__mapValuesData__[n]=e,r&&this.emit("_add",n,t),this}),size:a.gs(function(){return this.__mapKeysData__.length}),values:a(function(){return new _(this,"value")}),toString:a(function(){return"[object Map]"})})),Object.defineProperty(n.prototype,l.iterator,a(function(){return this.entries()})),Object.defineProperty(n.prototype,l.toStringTag,a("c","Map"))},function(t,e,r){"use strict";var n=r(90),o=r(54),i=r(2),s=Array.prototype.indexOf,u=Object.prototype.hasOwnProperty,c=Math.abs,a=Math.floor;t.exports=function(t){var e,r,f,l;if(!n(t))return s.apply(this,arguments);for(r=o(i(this).length),f=arguments[1],e=f=isNaN(f)?0:f>=0?a(f):o(this.length)-a(c(f));e<r;++e)if(u.call(this,e)&&(l=this[e],n(l)))return e;return-1}},function(t,e,r){"use strict";t.exports=r(91)()?Number.isNaN:r(92)},function(t,e,r){"use strict";t.exports=function(){var t=Number.isNaN;return"function"==typeof t&&(!t({})&&t(NaN)&&!t(34))}},function(t,e,r){"use strict";t.exports=function(t){return t!=t}},function(t,e,r){"use strict";var n=r(94),o=Math.abs,i=Math.floor;t.exports=function(t){return isNaN(t)?0:0!==(t=Number(t))&&isFinite(t)?n(t)*i(o(t)):t}},function(t,e,r){"use strict";t.exports=r(95)()?Math.sign:r(96)},function(t,e,r){"use strict";t.exports=function(){var t=Math.sign;return"function"==typeof t&&(1===t(10)&&-1===t(-20))}},function(t,e,r){"use strict";t.exports=function(t){return t=Number(t),isNaN(t)||0===t?t:t>0?1:-1}},function(t,e,r){"use strict";var n=r(7),o={function:!0,object:!0};t.exports=function(t){return n(t)&&o[typeof t]||!1}},function(t,e,r){"use strict";var n,o=Object.create;r(55)()||(n=r(56)),t.exports=function(){var t,e,r;return n?1!==n.level?o:(t={},e={},r={configurable:!1,enumerable:!1,writable:!0,value:void 0},Object.getOwnPropertyNames(Object.prototype).forEach(function(t){e[t]="__proto__"!==t?r:{configurable:!0,enumerable:!1,writable:!0,value:void 0}}),Object.defineProperties(t,e),Object.defineProperty(n,"nullPolyfill",{configurable:!1,enumerable:!1,writable:!1,value:t}),function(e,r){return o(null===e?t:e,r)}):o}()},function(t,e,r){"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(e(t={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},function(t,e,r){"use strict";var n=r(101),o=r(2),i=Math.max;t.exports=function(t,e){var r,s,u,c=i(arguments.length,2);for(t=Object(o(t)),u=function(n){try{t[n]=e[n]}catch(t){r||(r=t)}},s=1;s<c;++s)e=arguments[s],n(e).forEach(u);if(void 0!==r)throw r;return t}},function(t,e,r){"use strict";t.exports=r(102)()?Object.keys:r(103)},function(t,e,r){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},function(t,e,r){"use strict";var n=r(7),o=Object.keys;t.exports=function(t){return o(n(t)?Object(t):t)}},function(t,e,r){"use strict";t.exports=function(t){return"function"==typeof t}},function(t,e,r){"use strict";var n="razdwatrzy";t.exports=function(){return"function"==typeof n.contains&&(!0===n.contains("dwa")&&!1===n.contains("foo"))}},function(t,e,r){"use strict";var n=String.prototype.indexOf;t.exports=function(t){return n.call(this,t,arguments[1])>-1}},function(t,e,r){"use strict";var n,o,i,s,u,c,a,f=r(6),l=r(3),p=Function.prototype.apply,h=Function.prototype.call,_=Object.create,y=Object.defineProperty,d=Object.defineProperties,v=Object.prototype.hasOwnProperty,b={configurable:!0,enumerable:!1,writable:!0};u={on:n=function(t,e){var r;return l(e),v.call(this,"__ee__")?r=this.__ee__:(r=b.value=_(null),y(this,"__ee__",b),b.value=null),r[t]?"object"==typeof r[t]?r[t].push(e):r[t]=[r[t],e]:r[t]=e,this},once:o=function(t,e){var r,o;return l(e),o=this,n.call(this,t,r=function(){i.call(o,t,r),p.call(e,this,arguments)}),r.__eeOnceListener__=e,this},off:i=function(t,e){var r,n,o,i;if(l(e),!v.call(this,"__ee__"))return this;if(!(r=this.__ee__)[t])return this;if("object"==typeof(n=r[t]))for(i=0;o=n[i];++i)o!==e&&o.__eeOnceListener__!==e||(2===n.length?r[t]=n[i?0:1]:n.splice(i,1));else n!==e&&n.__eeOnceListener__!==e||delete r[t];return this},emit:s=function(t){var e,r,n,o,i;if(v.call(this,"__ee__")&&(o=this.__ee__[t]))if("object"==typeof o){for(r=arguments.length,i=new Array(r-1),e=1;e<r;++e)i[e-1]=arguments[e];for(o=o.slice(),e=0;n=o[e];++e)p.call(n,this,i)}else switch(arguments.length){case 1:h.call(o,this);break;case 2:h.call(o,this,arguments[1]);break;case 3:h.call(o,this,arguments[1],arguments[2]);break;default:for(r=arguments.length,i=new Array(r-1),e=1;e<r;++e)i[e-1]=arguments[e];p.call(o,this,i)}}},c={on:f(n),once:f(o),off:f(i),emit:f(s)},a=d({},c),t.exports=e=function(t){return null==t?_(a):d(Object(t),c)},e.methods=u},function(t,e,r){"use strict";var n={object:!0,symbol:!0};t.exports=function(){var t;if("function"!=typeof Symbol)return!1;t=Symbol("test symbol");try{String(t)}catch(t){return!1}return!!n[typeof Symbol.iterator]&&(!!n[typeof Symbol.toPrimitive]&&!!n[typeof Symbol.toStringTag])}},function(t,e,r){"use strict";var n,o,i,s,u=r(6),c=r(110),a=Object.create,f=Object.defineProperties,l=Object.defineProperty,p=Object.prototype,h=a(null);if("function"==typeof Symbol){n=Symbol;try{String(n()),s=!0}catch(t){}}var _=function(){var t=a(null);return function(e){for(var r,n,o=0;t[e+(o||"")];)++o;return t[e+=o||""]=!0,l(p,r="@@"+e,u.gs(null,function(t){n||(n=!0,l(this,r,u(t)),n=!1)})),r}}();i=function(t){if(this instanceof i)throw new TypeError("Symbol is not a constructor");return o(t)},t.exports=o=function t(e){var r;if(this instanceof t)throw new TypeError("Symbol is not a constructor");return s?n(e):(r=a(i.prototype),e=void 0===e?"":String(e),f(r,{__description__:u("",e),__name__:u("",_(e))}))},f(o,{for:u(function(t){return h[t]?h[t]:h[t]=o(String(t))}),keyFor:u(function(t){var e;for(e in c(t),h)if(h[e]===t)return e}),hasInstance:u("",n&&n.hasInstance||o("hasInstance")),isConcatSpreadable:u("",n&&n.isConcatSpreadable||o("isConcatSpreadable")),iterator:u("",n&&n.iterator||o("iterator")),match:u("",n&&n.match||o("match")),replace:u("",n&&n.replace||o("replace")),search:u("",n&&n.search||o("search")),species:u("",n&&n.species||o("species")),split:u("",n&&n.split||o("split")),toPrimitive:u("",n&&n.toPrimitive||o("toPrimitive")),toStringTag:u("",n&&n.toStringTag||o("toStringTag")),unscopables:u("",n&&n.unscopables||o("unscopables"))}),f(i.prototype,{constructor:u(o),toString:u("",function(){return this.__name__})}),f(o.prototype,{toString:u(function(){return"Symbol ("+c(this).__description__+")"}),valueOf:u(function(){return c(this)})}),l(o.prototype,o.toPrimitive,u("",function(){var t=c(this);return"symbol"==typeof t?t:t.toString()})),l(o.prototype,o.toStringTag,u("c","Symbol")),l(i.prototype,o.toStringTag,u("c",o.prototype[o.toStringTag])),l(i.prototype,o.toPrimitive,u("c",o.prototype[o.toPrimitive]))},function(t,e,r){"use strict";var n=r(111);t.exports=function(t){if(!n(t))throw new TypeError(t+" is not a symbol");return t}},function(t,e,r){"use strict";t.exports=function(t){return!!t&&("symbol"==typeof t||!!t.constructor&&("Symbol"===t.constructor.name&&"Symbol"===t[t.constructor.toStringTag]))}},function(t,e,r){"use strict";var n=r(19),o=r(7),i=r(20),s=r(4).iterator,u=Array.isArray;t.exports=function(t){return!!o(t)&&(!!u(t)||(!!i(t)||(!!n(t)||"function"==typeof t[s])))}},function(t,e,r){"use strict";var n=r(19),o=r(3),i=r(20),s=r(114),u=Array.isArray,c=Function.prototype.call,a=Array.prototype.some;t.exports=function(t,e){var r,f,l,p,h,_,y,d,v=arguments[2];if(u(t)||n(t)?r="array":i(t)?r="string":t=s(t),o(e),l=function(){p=!0},"array"!==r)if("string"!==r)for(f=t.next();!f.done;){if(c.call(e,v,f.value,l),p)return;f=t.next()}else for(_=t.length,h=0;h<_&&(y=t[h],h+1<_&&(d=y.charCodeAt(0))>=55296&&d<=56319&&(y+=t[++h]),c.call(e,v,y,l),!p);++h);else a.call(t,function(t){return c.call(e,v,t,l),p})}},function(t,e,r){"use strict";var n=r(19),o=r(20),i=r(115),s=r(125),u=r(59),c=r(4).iterator;t.exports=function(t){return"function"==typeof u(t)[c]?t[c]():n(t)?new i(t):o(t)?new s(t):new i(t)}},function(t,e,r){"use strict";var n,o=r(18),i=r(58),s=r(6),u=r(4),c=r(32),a=Object.defineProperty;n=t.exports=function(t,e){if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");c.call(this,t),e=e?i.call(e,"key+value")?"key+value":i.call(e,"key")?"key":"value":"value",a(this,"__kind__",s("",e))},o&&o(n,c),delete n.prototype.constructor,n.prototype=Object.create(c.prototype,{_resolve:s(function(t){return"value"===this.__kind__?this.__list__[t]:"key+value"===this.__kind__?[t,this.__list__[t]]:t})}),a(n.prototype,u.toStringTag,s("c","Array Iterator"))},function(t,e,r){"use strict";var n,o=r(117),i=r(57),s=r(3),u=r(122),c=r(3),a=r(2),f=Function.prototype.bind,l=Object.defineProperty,p=Object.prototype.hasOwnProperty;n=function(t,e,r){var n,i=a(e)&&c(e.value);return delete(n=o(e)).writable,delete n.value,n.get=function(){return!r.overwriteDefinition&&p.call(this,t)?i:(e.value=f.call(i,r.resolveContext?r.resolveContext(this):this),l(this,t,e),this[t])},n},t.exports=function(t){var e=i(arguments[1]);return null!=e.resolveContext&&s(e.resolveContext),u(t,function(t,r){return n(r,t,e)})}},function(t,e,r){"use strict";var n=r(118),o=r(31),i=r(2);t.exports=function(t){var e=Object(i(t)),r=arguments[1],s=Object(arguments[2]);if(e!==t&&!r)return e;var u={};return r?n(r,function(e){(s.ensure||e in t)&&(u[e]=t[e])}):o(u,t),u}},function(t,e,r){"use strict";t.exports=r(119)()?Array.from:r(120)},function(t,e,r){"use strict";t.exports=function(){var t,e,r=Array.from;return"function"==typeof r&&(e=r(t=["raz","dwa"]),Boolean(e&&e!==t&&"dwa"===e[1]))}},function(t,e,r){"use strict";var n=r(4).iterator,o=r(19),i=r(121),s=r(54),u=r(3),c=r(2),a=r(7),f=r(20),l=Array.isArray,p=Function.prototype.call,h={configurable:!0,enumerable:!0,writable:!0,value:null},_=Object.defineProperty;t.exports=function(t){var e,r,y,d,v,b,m,x,g,w,O=arguments[1],j=arguments[2];if(t=Object(c(t)),a(O)&&u(O),this&&this!==Array&&i(this))e=this;else{if(!O){if(o(t))return 1!==(v=t.length)?Array.apply(null,t):((d=new Array(1))[0]=t[0],d);if(l(t)){for(d=new Array(v=t.length),r=0;r<v;++r)d[r]=t[r];return d}}d=[]}if(!l(t))if(void 0!==(g=t[n])){for(m=u(g).call(t),e&&(d=new e),x=m.next(),r=0;!x.done;)w=O?p.call(O,j,x.value,r):x.value,e?(h.value=w,_(d,r,h)):d[r]=w,x=m.next(),++r;v=r}else if(f(t)){for(v=t.length,e&&(d=new e),r=0,y=0;r<v;++r)w=t[r],r+1<v&&(b=w.charCodeAt(0))>=55296&&b<=56319&&(w+=t[++r]),w=O?p.call(O,j,w,y):w,e?(h.value=w,_(d,y,h)):d[y]=w,++y;v=y}if(void 0===v)for(v=s(t.length),e&&(d=new e(v)),r=0;r<v;++r)w=O?p.call(O,j,t[r],r):t[r],e?(h.value=w,_(d,r,h)):d[r]=w;return e&&(h.value=null,d.length=v),d}},function(t,e,r){"use strict";var n=Object.prototype.toString,o=n.call(r(53));t.exports=function(t){return"function"==typeof t&&n.call(t)===o}},function(t,e,r){"use strict";var n=r(3),o=r(123),i=Function.prototype.call;t.exports=function(t,e){var r={},s=arguments[2];return n(e),o(t,function(t,n,o,u){r[n]=i.call(e,s,t,n,o,u)}),r}},function(t,e,r){"use strict";t.exports=r(124)("forEach")},function(t,e,r){"use strict";var n=r(3),o=r(2),i=Function.prototype.bind,s=Function.prototype.call,u=Object.keys,c=Object.prototype.propertyIsEnumerable;t.exports=function(t,e){return function(r,a){var f,l=arguments[2],p=arguments[3];return r=Object(o(r)),n(a),f=u(r),p&&f.sort("function"==typeof p?i.call(p,r):void 0),"function"!=typeof t&&(t=f[t]),s.call(t,f,function(t,n){return c.call(r,t)?s.call(a,l,r[t],t,r,n):e})}}},function(t,e,r){"use strict";var n,o=r(18),i=r(6),s=r(4),u=r(32),c=Object.defineProperty;n=t.exports=function(t){if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");t=String(t),u.call(this,t),c(this,"__length__",i("",t.length))},o&&o(n,u),delete n.prototype.constructor,n.prototype=Object.create(u.prototype,{_next:i(function(){if(this.__list__)return this.__nextIndex__<this.__length__?this.__nextIndex__++:void this._unBind()}),_resolve:i(function(t){var e,r=this.__list__[t];return this.__nextIndex__===this.__length__?r:(e=r.charCodeAt(0))>=55296&&e<=56319?r+this.__list__[this.__nextIndex__++]:r})}),c(n.prototype,s.toStringTag,i("c","String Iterator"))},function(t,e,r){"use strict";var n,o=r(18),i=r(6),s=r(32),u=r(4).toStringTag,c=r(127),a=Object.defineProperties,f=s.prototype._unBind;n=t.exports=function(t,e){if(!(this instanceof n))return new n(t,e);s.call(this,t.__mapKeysData__,t),e&&c[e]||(e="key+value"),a(this,{__kind__:i("",e),__values__:i("w",t.__mapValuesData__)})},o&&o(n,s),n.prototype=Object.create(s.prototype,{constructor:i(n),_resolve:i(function(t){return"value"===this.__kind__?this.__values__[t]:"key"===this.__kind__?this.__list__[t]:[this.__list__[t],this.__values__[t]]}),_unBind:i(function(){this.__values__=null,f.call(this)}),toString:i(function(){return"[object Map Iterator]"})}),Object.defineProperty(n.prototype,u,i("c","Map Iterator"))},function(t,e,r){"use strict";t.exports=r(128)("key","value","key+value")},function(t,e,r){"use strict";var n=Array.prototype.forEach,o=Object.create;t.exports=function(t){var e=o(null);return n.call(arguments,function(t){e[t]=!0}),e}},function(t,e,r){"use strict";t.exports="undefined"!=typeof Map&&"[object Map]"===Object.prototype.toString.call(new Map)}])});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(114), exports);


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "odataUrlFrom", function() { return odataUrlFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spODataEntity", function() { return spODataEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spODataEntityArray", function() { return spODataEntityArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryable", function() { return SharePointQueryable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryableInstance", function() { return SharePointQueryableInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryableCollection", function() { return SharePointQueryableCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryableSecurable", function() { return SharePointQueryableSecurable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFolderShared", function() { return FileFolderShared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryableShareable", function() { return SharePointQueryableShareable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryableShareableFile", function() { return SharePointQueryableShareableFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryableShareableFolder", function() { return SharePointQueryableShareableFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryableShareableItem", function() { return SharePointQueryableShareableItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePointQueryableShareableWeb", function() { return SharePointQueryableShareableWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCatalog", function() { return AppCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPBatch", function() { return SPBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return ContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypes", function() { return ContentTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldLink", function() { return FieldLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldLinks", function() { return FieldLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fields", function() { return Fields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinType", function() { return CheckinType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPartsPersonalizationScope", function() { return WebPartsPersonalizationScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveOperations", function() { return MoveOperations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateFileType", function() { return TemplateFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Files", function() { return Files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folders", function() { return Folders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPHttpClient", function() { return SPHttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVersion", function() { return ItemVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVersions", function() { return ItemVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedItemCollection", function() { return PagedItemCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationNodes", function() { return NavigationNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationNode", function() { return NavigationNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lists", function() { return Lists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionalSettings", function() { return RegionalSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalledLanguages", function() { return InstalledLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeZone", function() { return TimeZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeZones", function() { return TimeZones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sp", function() { return sp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRest", function() { return SPRest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDefinitionBindings", function() { return RoleDefinitionBindings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchQueryBuilder", function() { return SearchQueryBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResults", function() { return SearchResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderingRuleMatchType", function() { return ReorderingRuleMatchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryPropertyValueType", function() { return QueryPropertyValueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBuiltInSourceId", function() { return SearchBuiltInSourceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSuggest", function() { return SearchSuggest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Site", function() { return Site; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileQuery", function() { return UserProfileQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toAbsoluteUrl", function() { return toAbsoluteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractWebUrl", function() { return extractWebUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityMethod", function() { return UtilityMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFields", function() { return ViewFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPartDefinitions", function() { return WebPartDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPartDefinition", function() { return WebPartDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPart", function() { return WebPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web", function() { return Web; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotedState", function() { return PromotedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSidePage", function() { return ClientSidePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasSection", function() { return CanvasSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasControl", function() { return CanvasControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasColumn", function() { return CanvasColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSidePart", function() { return ClientSidePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSideText", function() { return ClientSideText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSideWebpart", function() { return ClientSideWebpart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comments", function() { return Comments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replies", function() { return Replies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialQuery", function() { return SocialQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySocialQuery", function() { return MySocialQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialActorType", function() { return SocialActorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialActorTypes", function() { return SocialActorTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialFollowResult", function() { return SocialFollowResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialStatusCode", function() { return SocialStatusCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMode", function() { return ControlMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldTypes", function() { return FieldTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFieldFormatType", function() { return DateTimeFieldFormatType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFieldOptions", function() { return AddFieldOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarType", function() { return CalendarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlFieldFormatType", function() { return UrlFieldFormatType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionKind", function() { return PermissionKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalType", function() { return PrincipalType$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalSource", function() { return PrincipalSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleType", function() { return RoleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingLinkKind", function() { return SharingLinkKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingRole", function() { return SharingRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingOperationStatusCode", function() { return SharingOperationStatusCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPSharedObjectType", function() { return SPSharedObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingDomainRestrictionMode", function() { return SharingDomainRestrictionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderListDataOptions", function() { return RenderListDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldUserSelectionMode", function() { return FieldUserSelectionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceFieldFormatType", function() { return ChoiceFieldFormatType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlZone", function() { return UrlZone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pnp_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pnp_logging__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pnp_odata__ = __webpack_require__(59);
/**
@license
 * @pnp/sp v1.2.3 - pnp - provides a fluent api for working with SharePoint REST
 * MIT (https://github.com/pnp/pnpjs/blob/master/LICENSE)
 * Copyright (c) 2018 Microsoft
 * docs: https://pnp.github.io/pnpjs/
 * source: https:github.com/pnp/pnpjs
 * bugs: https://github.com/pnp/pnpjs/issues
 */





function extractWebUrl(candidateUrl) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["B" /* stringIsNullOrEmpty */])(candidateUrl)) {
        return "";
    }
    var index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substr(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}

function odataUrlFrom(candidate) {
    var parts = [];
    var s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata"];
    if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the editLink
        if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(candidate, s[1])) {
            parts.push(candidate[s[1]]);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(candidate, s[3]) && Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            parts.push(extractWebUrl(candidate[s[3]]), "_api", candidate[s[1]]);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("No uri information found in ODataEntity parsing, chaining will fail for this object.", 2 /* Warning */);
        return "";
    }
    return __WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */].apply(void 0, parts);
}
var SPODataEntityParserImpl = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SPODataEntityParserImpl, _super);
    function SPODataEntityParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            var o = new _this.factory(odataUrlFrom(d), null);
            return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(o, d);
        };
        return _this;
    }
    SPODataEntityParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            var o = new _this.factory(odataUrlFrom(d), null);
            return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(o, d);
        });
    };
    return SPODataEntityParserImpl;
}(__WEBPACK_IMPORTED_MODULE_3__pnp_odata__["ODataParserBase"]));
var SPODataEntityArrayParserImpl = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SPODataEntityArrayParserImpl, _super);
    function SPODataEntityArrayParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            return d.map(function (v) {
                var o = new _this.factory(odataUrlFrom(v), null);
                return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(o, v);
            });
        };
        return _this;
    }
    SPODataEntityArrayParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            return d.map(function (v) {
                var o = new _this.factory(odataUrlFrom(v), null);
                return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(o, v);
            });
        });
    };
    return SPODataEntityArrayParserImpl;
}(__WEBPACK_IMPORTED_MODULE_3__pnp_odata__["ODataParserBase"]));
function spODataEntity(factory) {
    return new SPODataEntityParserImpl(factory);
}
function spODataEntityArray(factory) {
    return new SPODataEntityArrayParserImpl(factory);
}

function setup(config) {
    __WEBPACK_IMPORTED_MODULE_0__pnp_common__["f" /* RuntimeConfig */].extend(config);
}
var SPRuntimeConfigImpl = /** @class */ (function () {
    function SPRuntimeConfigImpl() {
    }
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "headers", {
        get: function () {
            var spPart = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["f" /* RuntimeConfig */].get("sp");
            if (spPart !== undefined && spPart.headers !== undefined) {
                return spPart.headers;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "baseUrl", {
        get: function () {
            var spPart = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["f" /* RuntimeConfig */].get("sp");
            if (spPart !== undefined && spPart.baseUrl !== undefined) {
                return spPart.baseUrl;
            }
            if (__WEBPACK_IMPORTED_MODULE_0__pnp_common__["f" /* RuntimeConfig */].spfxContext !== undefined && __WEBPACK_IMPORTED_MODULE_0__pnp_common__["f" /* RuntimeConfig */].spfxContext !== null) {
                return __WEBPACK_IMPORTED_MODULE_0__pnp_common__["f" /* RuntimeConfig */].spfxContext.pageContext.web.absoluteUrl;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRuntimeConfigImpl.prototype, "fetchClientFactory", {
        get: function () {
            var spPart = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["f" /* RuntimeConfig */].get("sp");
            // use a configured factory firt
            if (spPart !== undefined && spPart.fetchClientFactory !== undefined) {
                return spPart.fetchClientFactory;
            }
            else {
                return function () { return new __WEBPACK_IMPORTED_MODULE_0__pnp_common__["c" /* FetchClient */](); };
            }
        },
        enumerable: true,
        configurable: true
    });
    return SPRuntimeConfigImpl;
}());
var SPRuntimeConfig = new SPRuntimeConfigImpl();

var CachedDigest = /** @class */ (function () {
    function CachedDigest() {
    }
    return CachedDigest;
}());
// allows for the caching of digests across all HttpClient's which each have their own DigestCache wrapper.
var digests = new Map();
var DigestCache = /** @class */ (function () {
    function DigestCache(_httpClient, _digests) {
        if (_digests === void 0) { _digests = digests; }
        this._httpClient = _httpClient;
        this._digests = _digests;
    }
    DigestCache.prototype.getDigest = function (webUrl) {
        var _this = this;
        var cachedDigest = this._digests.get(webUrl);
        if (cachedDigest !== undefined) {
            var now = new Date();
            if (now < cachedDigest.expiration) {
                return Promise.resolve(cachedDigest.value);
            }
        }
        var url = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(webUrl, "/_api/contextinfo");
        var headers = {
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose;charset=utf-8",
        };
        return this._httpClient.fetchRaw(url, {
            cache: "no-cache",
            credentials: "same-origin",
            headers: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(headers, SPRuntimeConfig.headers, true),
            method: "POST",
        }).then(function (response) {
            var parser = new __WEBPACK_IMPORTED_MODULE_3__pnp_odata__["ODataDefaultParser"]();
            return parser.parse(response).then(function (d) { return d.GetContextWebInformation; });
        }).then(function (data) {
            var newCachedDigest = new CachedDigest();
            newCachedDigest.value = data.FormDigestValue;
            var seconds = data.FormDigestTimeoutSeconds;
            var expiration = new Date();
            expiration.setTime(expiration.getTime() + 1000 * seconds);
            newCachedDigest.expiration = expiration;
            _this._digests.set(webUrl, newCachedDigest);
            return newCachedDigest.value;
        });
    };
    DigestCache.prototype.clear = function () {
        this._digests.clear();
    };
    return DigestCache;
}());

var SPHttpClient = /** @class */ (function () {
    function SPHttpClient(_impl) {
        if (_impl === void 0) { _impl = SPRuntimeConfig.fetchClientFactory(); }
        this._impl = _impl;
        this._digestCache = new DigestCache(this);
    }
    SPHttpClient.prototype.fetch = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var opts = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(options, { cache: "no-cache", credentials: "same-origin" }, true);
        var headers = new Headers();
        // first we add the global headers so they can be overwritten by any passed in locally to this call
        Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["u" /* mergeHeaders */])(headers, SPRuntimeConfig.headers);
        // second we add the local options so we can overwrite the globals
        Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["u" /* mergeHeaders */])(headers, options.headers);
        // lastly we apply any default headers we need that may not exist
        if (!headers.has("Accept")) {
            headers.append("Accept", "application/json");
        }
        if (!headers.has("Content-Type")) {
            headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
        }
        if (!headers.has("X-ClientService-ClientTag")) {
            headers.append("X-ClientService-ClientTag", "PnPCoreJS:@pnp-1.2.3");
        }
        if (!headers.has("User-Agent")) {
            // this marks the requests for understanding by the service
            headers.append("User-Agent", "NONISV|SharePointPnP|PnPCoreJS/1.2.3");
        }
        opts = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(opts, { headers: headers });
        if (opts.method && opts.method.toUpperCase() !== "GET") {
            // if we have either a request digest or an authorization header we don't need a digest
            if (!headers.has("X-RequestDigest") && !headers.has("Authorization")) {
                return this._digestCache.getDigest(extractWebUrl(url))
                    .then(function (digest) {
                    headers.append("X-RequestDigest", digest);
                    return _this.fetchRaw(url, opts);
                });
            }
        }
        return this.fetchRaw(url, opts);
    };
    SPHttpClient.prototype.fetchRaw = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // here we need to normalize the headers
        var rawHeaders = new Headers();
        Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["u" /* mergeHeaders */])(rawHeaders, options.headers);
        options = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(options, { headers: rawHeaders });
        var retry = function (ctx) {
            // handles setting the proper timeout for a retry
            var setRetry = function (response) {
                var delay;
                if (response.headers.has("Retry-After")) {
                    // if we have gotten a header, use that value as the delay value
                    delay = parseInt(response.headers.get("Retry-After"), 10);
                }
                else {
                    // grab our current delay
                    delay = ctx.delay;
                    // Increment our counters.
                    ctx.delay *= 2;
                }
                ctx.attempts++;
                // If we have exceeded the retry count, reject.
                if (ctx.retryCount <= ctx.attempts) {
                    ctx.reject(Error("Retry count exceeded (" + ctx.retryCount + ") for request. Response status: [" + response.status + "] " + response.statusText));
                }
                else {
                    // Set our retry timeout for {delay} milliseconds.
                    setTimeout(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["l" /* getCtxCallback */])(_this, retry, ctx), delay);
                }
            };
            // send the actual request
            _this._impl.fetch(url, options).then(function (response) {
                if (response.status === 429) {
                    // we have been throttled
                    setRetry(response);
                }
                else {
                    ctx.resolve(response);
                }
            }).catch(function (response) {
                if (response.status === 503) {
                    // http status code 503, we can retry this
                    setRetry(response);
                }
                else {
                    ctx.reject(response);
                }
            });
        };
        return new Promise(function (resolve, reject) {
            var retryContext = {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            };
            retry.call(_this, retryContext);
        });
    };
    SPHttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(options, { method: "GET" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(options, { method: "POST" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(options, { method: "PATCH" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(options, { method: "DELETE" });
        return this.fetch(url, opts);
    };
    return SPHttpClient;
}());

var global$1 = (typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {});

/**
 * Ensures that a given url is absolute for the current web based on context
 *
 * @param candidateUrl The url to make absolute
 *
 */
function toAbsoluteUrl(candidateUrl) {
    return new Promise(function (resolve) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["s" /* isUrlAbsolute */])(candidateUrl)) {
            // if we are already absolute, then just return the url
            return resolve(candidateUrl);
        }
        if (SPRuntimeConfig.baseUrl !== null) {
            // base url specified either with baseUrl of spfxContext config property
            return resolve(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(SPRuntimeConfig.baseUrl, candidateUrl));
        }
        if (global$1._spPageContextInfo !== undefined) {
            // operating in classic pages
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(global$1._spPageContextInfo, "webAbsoluteUrl")) {
                return resolve(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(global$1._spPageContextInfo.webAbsoluteUrl, candidateUrl));
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(global$1._spPageContextInfo, "webServerRelativeUrl")) {
                return resolve(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(global$1._spPageContextInfo.webServerRelativeUrl, candidateUrl));
            }
        }
        // does window.location exist and have a certain path part in it?
        if (global$1.location !== undefined) {
            var baseUrl_1 = global$1.location.toString().toLowerCase();
            ["/_layouts/", "/siteassets/"].forEach(function (s) {
                var index = baseUrl_1.indexOf(s);
                if (index > 0) {
                    return resolve(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(baseUrl_1.substr(0, index), candidateUrl));
                }
            });
        }
        return resolve(candidateUrl);
    });
}

function metadata(type) {
    return {
        "__metadata": { "type": type },
    };
}

/**
 * SharePointQueryable Base Class
 *
 */
var SharePointQueryable = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SharePointQueryable, _super);
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param baseUrl A string or SharePointQueryable that should form the base part of the url
     *
     */
    function SharePointQueryable(baseUrl, path) {
        var _this = _super.call(this) || this;
        _this._forceCaching = false;
        if (typeof baseUrl === "string") {
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["s" /* isUrlAbsolute */])(baseUrl) || baseUrl.lastIndexOf("/") < 0) {
                _this._parentUrl = baseUrl;
                _this._url = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(baseUrl, path);
            }
            else if (baseUrl.lastIndexOf("/") > baseUrl.lastIndexOf("(")) {
                // .../items(19)/fields
                var index = baseUrl.lastIndexOf("/");
                _this._parentUrl = baseUrl.slice(0, index);
                path = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(baseUrl.slice(index), path);
                _this._url = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(_this._parentUrl, path);
            }
            else {
                // .../items(19)
                var index = baseUrl.lastIndexOf("(");
                _this._parentUrl = baseUrl.slice(0, index);
                _this._url = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(baseUrl, path);
            }
        }
        else {
            _this.extend(baseUrl, path);
            var target = baseUrl.query.get("@target");
            if (target !== undefined) {
                _this.query.set("@target", target);
            }
        }
        return _this;
    }
    /**
     * Creates a new instance of the supplied factory and extends this into that new instance
     *
     * @param factory constructor for the new SharePointQueryable
     */
    SharePointQueryable.prototype.as = function (factory) {
        var o = new factory(this._url, null);
        return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(o, this, true);
    };
    /**
     * Gets the full url with query information
     *
     */
    SharePointQueryable.prototype.toUrlAndQuery = function () {
        var aliasedParams = new Map(this.query);
        var url = this.toUrl().replace(/'!(@.*?)::(.*?)'/ig, function (match, labelName, value) {
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("Rewriting aliased parameter from match " + match + " to label: " + labelName + " value: " + value, 0 /* Verbose */);
            aliasedParams.set(labelName, "'" + value + "'");
            return labelName;
        });
        if (aliasedParams.size > 0) {
            var char = url.indexOf("?") > -1 ? "&" : "?";
            url += "" + char + Array.from(aliasedParams).map(function (v) { return v[0] + "=" + v[1]; }).join("&");
        }
        return url;
    };
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    SharePointQueryable.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this.query.set("$select", selects.join(","));
        }
        return this;
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    SharePointQueryable.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this.query.set("$expand", expands.join(","));
        }
        return this;
    };
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    SharePointQueryable.prototype.getParent = function (factory, baseUrl, path, batch) {
        if (baseUrl === void 0) { baseUrl = this.parentUrl; }
        var parent = new factory(baseUrl, path).configureFrom(this);
        var t = "@target";
        if (this.query.has(t)) {
            parent.query.set(t, this.query.get(t));
        }
        if (batch !== undefined) {
            parent = parent.inBatch(batch);
        }
        return parent;
    };
    /**
     * Clones this SharePointQueryable into a new SharePointQueryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     */
    SharePointQueryable.prototype.clone = function (factory, additionalPath, includeBatch) {
        if (includeBatch === void 0) { includeBatch = true; }
        var clone = new factory(this, additionalPath).configureFrom(this);
        var t = "@target";
        if (this.query.has(t)) {
            clone.query.set(t, this.query.get(t));
        }
        if (includeBatch && this.hasBatch) {
            clone = clone.inBatch(this.batch);
        }
        return clone;
    };
    /**
     * Converts the current instance to a request context
     *
     * @param verb The request verb
     * @param options The set of supplied request options
     * @param parser The supplied ODataParser instance
     * @param pipeline Optional request processing pipeline
     */
    SharePointQueryable.prototype.toRequestContext = function (verb, options, parser, pipeline) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var dependencyDispose = this.hasBatch ? this.addBatchDependency() : function () { return; };
        return toAbsoluteUrl(this.toUrlAndQuery()).then(function (url) {
            Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["w" /* mergeOptions */])(options, _this._options);
            // build our request context
            var context = {
                batch: _this.batch,
                batchDependency: dependencyDispose,
                cachingOptions: _this._cachingOptions,
                clientFactory: function () { return new SPHttpClient(); },
                isBatched: _this.hasBatch,
                isCached: _this._forceCaching || (_this._useCaching && /^get$/i.test(verb)),
                options: options,
                parser: parser,
                pipeline: pipeline,
                requestAbsoluteUrl: url,
                requestId: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["m" /* getGUID */])(),
                verb: verb,
            };
            return context;
        });
    };
    return SharePointQueryable;
}(__WEBPACK_IMPORTED_MODULE_3__pnp_odata__["ODataQueryable"]));
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
var SharePointQueryableCollection = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SharePointQueryableCollection, _super);
    function SharePointQueryableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    SharePointQueryableCollection.prototype.filter = function (filter) {
        this.query.set("$filter", filter);
        return this;
    };
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    SharePointQueryableCollection.prototype.orderBy = function (orderBy, ascending) {
        if (ascending === void 0) { ascending = true; }
        var o = "$orderby";
        var query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(orderBy + " " + (ascending ? "asc" : "desc"));
        this.query.set(o, query.join(","));
        return this;
    };
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    SharePointQueryableCollection.prototype.skip = function (skip) {
        this.query.set("$skip", skip.toString());
        return this;
    };
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    SharePointQueryableCollection.prototype.top = function (top) {
        this.query.set("$top", top.toString());
        return this;
    };
    return SharePointQueryableCollection;
}(SharePointQueryable));
/**
 * Represents an instance that can be selected
 *
 */
var SharePointQueryableInstance = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SharePointQueryableInstance, _super);
    function SharePointQueryableInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Curries the update function into the common pieces
     *
     * @param type
     * @param mapper
     */
    SharePointQueryableInstance.prototype._update = function (type, mapper) {
        var _this = this;
        return function (props) { return _this.postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata(type), props)),
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (d) { return mapper(d, props); }); };
    };
    /**
    * Deletes this instance
    *
    */
    SharePointQueryableInstance.prototype._delete = function () {
        return this.postCore({
            headers: {
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    /**
     * Deletes this instance with an etag value in the headers
     *
     * @param eTag eTag to delete
     */
    SharePointQueryableInstance.prototype._deleteWithETag = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.postCore({
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    return SharePointQueryableInstance;
}(SharePointQueryable));
/**
 * Decorator used to specify the default path for SharePointQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    return function (target) {
        return /** @class */ (function (_super) {
            Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.call(this, args[0], args.length > 1 && args[1] !== undefined ? args[1] : path) || this;
            }
            return class_1;
        }(target));
    };
}

/**
 * Describes a collection of all site collection users
 *
 */
var SiteUsers = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SiteUsers, _super);
    function SiteUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SiteUsers_1 = SiteUsers;
    /**
     * Gets a user from the collection by id
     *
     * @param id The id of the user to retrieve
     */
    SiteUsers.prototype.getById = function (id) {
        return new SiteUser(this, "getById(" + id + ")");
    };
    /**
     * Gets a user from the collection by email
     *
     * @param email The email address of the user to retrieve
     */
    SiteUsers.prototype.getByEmail = function (email) {
        return new SiteUser(this, "getByEmail('" + email + "')");
    };
    /**
     * Gets a user from the collection by login name
     *
     * @param loginName The login name of the user to retrieve
     */
    SiteUsers.prototype.getByLoginName = function (loginName) {
        var su = new SiteUser(this);
        su.concat("('!@v::" + encodeURIComponent(loginName) + "')");
        return su;
    };
    /**
     * Removes a user from the collection by id
     *
     * @param id The id of the user to remove
     */
    SiteUsers.prototype.removeById = function (id) {
        return this.clone(SiteUsers_1, "removeById(" + id + ")").postCore();
    };
    /**
     * Removes a user from the collection by login name
     *
     * @param loginName The login name of the user to remove
     */
    SiteUsers.prototype.removeByLoginName = function (loginName) {
        var o = this.clone(SiteUsers_1, "removeByLoginName(@v)");
        o.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return o.postCore();
    };
    /**
     * Adds a user to a group
     *
     * @param loginName The login name of the user to add to the group
     *
     */
    SiteUsers.prototype.add = function (loginName) {
        var _this = this;
        return this.clone(SiteUsers_1, null).postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("SP.User"), { LoginName: loginName })),
        }).then(function () { return _this.getByLoginName(loginName); });
    };
    var SiteUsers_1;
    SiteUsers = SiteUsers_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("siteusers")
    ], SiteUsers);
    return SiteUsers;
}(SharePointQueryableCollection));
/**
 * Describes a single user
 *
 */
var SiteUser = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SiteUser, _super);
    function SiteUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
        * Updates this user instance with the supplied properties
        *
        * @param properties A plain object of property names and values to update for the user
        */
        _this.update = _this._update("SP.User", function (data) { return ({ data: data, user: _this }); });
        /**
         * Delete this user
         *
         */
        _this.delete = _this._delete;
        return _this;
    }
    Object.defineProperty(SiteUser.prototype, "groups", {
        /**
         * Gets the groups for this user
         *
         */
        get: function () {
            return new SiteGroups(this, "groups");
        },
        enumerable: true,
        configurable: true
    });
    return SiteUser;
}(SharePointQueryableInstance));
/**
 * Represents the current user
 */
var CurrentUser = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(CurrentUser, _super);
    function CurrentUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentUser = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("currentuser")
    ], CurrentUser);
    return CurrentUser;
}(SharePointQueryableInstance));

/**
 * Principal Type enum
 *
 */
var PrincipalType;
(function (PrincipalType) {
    PrincipalType[PrincipalType["None"] = 0] = "None";
    PrincipalType[PrincipalType["User"] = 1] = "User";
    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType || (PrincipalType = {}));
/**
 * Describes a collection of site groups
 *
 */
var SiteGroups = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SiteGroups, _super);
    function SiteGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SiteGroups_1 = SiteGroups;
    /**
     * Gets a group from the collection by id
     *
     * @param id The id of the group to retrieve
     */
    SiteGroups.prototype.getById = function (id) {
        var sg = new SiteGroup(this);
        sg.concat("(" + id + ")");
        return sg;
    };
    /**
     * Adds a new group to the site collection
     *
     * @param props The group properties object of property names and values to be set for the group
     */
    SiteGroups.prototype.add = function (properties) {
        var _this = this;
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("SP.Group"), properties));
        return this.postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                group: _this.getById(data.Id),
            };
        });
    };
    /**
     * Gets a group from the collection by name
     *
     * @param groupName The name of the group to retrieve
     */
    SiteGroups.prototype.getByName = function (groupName) {
        return new SiteGroup(this, "getByName('" + groupName + "')");
    };
    /**
     * Removes the group with the specified member id from the collection
     *
     * @param id The id of the group to remove
     */
    SiteGroups.prototype.removeById = function (id) {
        return this.clone(SiteGroups_1, "removeById('" + id + "')").postCore();
    };
    /**
     * Removes the cross-site group with the specified name from the collection
     *
     * @param loginName The name of the group to remove
     */
    SiteGroups.prototype.removeByLoginName = function (loginName) {
        return this.clone(SiteGroups_1, "removeByLoginName('" + loginName + "')").postCore();
    };
    var SiteGroups_1;
    SiteGroups = SiteGroups_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("sitegroups")
    ], SiteGroups);
    return SiteGroups;
}(SharePointQueryableCollection));
/**
 * Describes a single group
 *
 */
var SiteGroup = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SiteGroup, _super);
    function SiteGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.update = _this._update("SP.Group", function (d, p) {
            var retGroup = _this;
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(p, "Title")) {
                /* tslint:disable-next-line no-string-literal */
                retGroup = _this.getParent(SiteGroup, _this.parentUrl, "getByName('" + p["Title"] + "')");
            }
            return {
                data: d,
                group: retGroup,
            };
        });
        return _this;
    }
    Object.defineProperty(SiteGroup.prototype, "users", {
        /**
         * Gets the users for this group
         *
         */
        get: function () {
            return new SiteUsers(this, "users");
        },
        enumerable: true,
        configurable: true
    });
    return SiteGroup;
}(SharePointQueryableInstance));

/**
 * Describes a set of role assignments for the current scope
 *
 */
var RoleAssignments = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(RoleAssignments, _super);
    function RoleAssignments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoleAssignments_1 = RoleAssignments;
    /**
     * Gets the role assignment associated with the specified principal id from the collection.
     *
     * @param id The id of the role assignment
     */
    RoleAssignments.prototype.getById = function (id) {
        var ra = new RoleAssignment(this);
        ra.concat("(" + id + ")");
        return ra;
    };
    /**
     * Adds a new role assignment with the specified principal and role definitions to the collection
     *
     * @param principalId The id of the user or group to assign permissions to
     * @param roleDefId The id of the role definition that defines the permissions to assign
     *
     */
    RoleAssignments.prototype.add = function (principalId, roleDefId) {
        return this.clone(RoleAssignments_1, "addroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")").postCore();
    };
    /**
     * Removes the role assignment with the specified principal and role definition from the collection
     *
     * @param principalId The id of the user or group in the role assignment
     * @param roleDefId The id of the role definition in the role assignment
     *
     */
    RoleAssignments.prototype.remove = function (principalId, roleDefId) {
        return this.clone(RoleAssignments_1, "removeroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")").postCore();
    };
    var RoleAssignments_1;
    RoleAssignments = RoleAssignments_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("roleassignments")
    ], RoleAssignments);
    return RoleAssignments;
}(SharePointQueryableCollection));
/**
 * Describes a role assignment
 *
 */
var RoleAssignment = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(RoleAssignment, _super);
    function RoleAssignment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Deletes this role assignment
         *
         */
        _this.delete = _this._delete;
        return _this;
    }
    Object.defineProperty(RoleAssignment.prototype, "groups", {
        /**
         * Gets the groups that directly belong to the access control list (ACL) for this securable object
         *
         */
        get: function () {
            return new SiteGroups(this, "groups");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleAssignment.prototype, "bindings", {
        /**
         * Gets the role definition bindings for this role assignment
         *
         */
        get: function () {
            return new RoleDefinitionBindings(this);
        },
        enumerable: true,
        configurable: true
    });
    return RoleAssignment;
}(SharePointQueryableInstance));
/**
 * Describes a collection of role definitions
 *
 */
var RoleDefinitions = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(RoleDefinitions, _super);
    function RoleDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the role definition with the specified id from the collection
     *
     * @param id The id of the role definition
     *
     */
    RoleDefinitions.prototype.getById = function (id) {
        return new RoleDefinition(this, "getById(" + id + ")");
    };
    /**
     * Gets the role definition with the specified name
     *
     * @param name The name of the role definition
     *
     */
    RoleDefinitions.prototype.getByName = function (name) {
        return new RoleDefinition(this, "getbyname('" + name + "')");
    };
    /**
     * Gets the role definition with the specified role type
     *
     * @param roleTypeKind The roletypekind of the role definition (None=0, Guest=1, Reader=2, Contributor=3, WebDesigner=4, Administrator=5, Editor=6, System=7)
     *
     */
    RoleDefinitions.prototype.getByType = function (roleTypeKind) {
        return new RoleDefinition(this, "getbytype(" + roleTypeKind + ")");
    };
    /**
     * Creates a role definition
     *
     * @param name The new role definition's name
     * @param description The new role definition's description
     * @param order The order in which the role definition appears
     * @param basePermissions The permissions mask for this role definition
     *
     */
    RoleDefinitions.prototype.add = function (name, description, order, basePermissions) {
        var _this = this;
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            BasePermissions: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({ __metadata: { type: "SP.BasePermissions" } }, basePermissions),
            Description: description,
            Name: name,
            Order: order,
            __metadata: { "type": "SP.RoleDefinition" },
        });
        return this.postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                definition: _this.getById(data.Id),
            };
        });
    };
    RoleDefinitions = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("roledefinitions")
    ], RoleDefinitions);
    return RoleDefinitions;
}(SharePointQueryableCollection));
/**
 * Describes a role definition
 *
 */
var RoleDefinition = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(RoleDefinition, _super);
    function RoleDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Deletes this role definition
         *
         */
        _this.delete = _this._delete;
        return _this;
        /* tslint:enable */
    }
    /**
     * Updates this role definition with the supplied properties
     *
     * @param properties A plain object hash of values to update for the role definition
     */
    /* tslint:disable no-string-literal */
    RoleDefinition.prototype.update = function (properties) {
        var _this = this;
        var s = ["BasePermissions"];
        if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(properties, s[0]) !== undefined) {
            properties[s[0]] = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({ __metadata: { type: "SP." + s[0] } }, properties[s[0]]);
        }
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("SP.RoleDefinition"), properties));
        return this.postCore({
            body: postBody,
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            var retDef = _this;
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(properties, "Name")) {
                var parent_1 = _this.getParent(RoleDefinitions, _this.parentUrl, "");
                retDef = parent_1.getByName(properties["Name"]);
            }
            return {
                data: data,
                definition: retDef,
            };
        });
    };
    return RoleDefinition;
}(SharePointQueryableInstance));
/**
 * Describes the role definitons bound to a role assignment object
 *
 */
var RoleDefinitionBindings = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(RoleDefinitionBindings, _super);
    function RoleDefinitionBindings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoleDefinitionBindings = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("roledefinitionbindings")
    ], RoleDefinitionBindings);
    return RoleDefinitionBindings;
}(SharePointQueryableCollection));

/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode || (ControlMode = {}));
/**
 * Specifies the type of the field.
 */
var FieldTypes;
(function (FieldTypes) {
    FieldTypes[FieldTypes["Invalid"] = 0] = "Invalid";
    FieldTypes[FieldTypes["Integer"] = 1] = "Integer";
    FieldTypes[FieldTypes["Text"] = 2] = "Text";
    FieldTypes[FieldTypes["Note"] = 3] = "Note";
    FieldTypes[FieldTypes["DateTime"] = 4] = "DateTime";
    FieldTypes[FieldTypes["Counter"] = 5] = "Counter";
    FieldTypes[FieldTypes["Choice"] = 6] = "Choice";
    FieldTypes[FieldTypes["Lookup"] = 7] = "Lookup";
    FieldTypes[FieldTypes["Boolean"] = 8] = "Boolean";
    FieldTypes[FieldTypes["Number"] = 9] = "Number";
    FieldTypes[FieldTypes["Currency"] = 10] = "Currency";
    FieldTypes[FieldTypes["URL"] = 11] = "URL";
    FieldTypes[FieldTypes["Computed"] = 12] = "Computed";
    FieldTypes[FieldTypes["Threading"] = 13] = "Threading";
    FieldTypes[FieldTypes["Guid"] = 14] = "Guid";
    FieldTypes[FieldTypes["MultiChoice"] = 15] = "MultiChoice";
    FieldTypes[FieldTypes["GridChoice"] = 16] = "GridChoice";
    FieldTypes[FieldTypes["Calculated"] = 17] = "Calculated";
    FieldTypes[FieldTypes["File"] = 18] = "File";
    FieldTypes[FieldTypes["Attachments"] = 19] = "Attachments";
    FieldTypes[FieldTypes["User"] = 20] = "User";
    FieldTypes[FieldTypes["Recurrence"] = 21] = "Recurrence";
    FieldTypes[FieldTypes["CrossProjectLink"] = 22] = "CrossProjectLink";
    FieldTypes[FieldTypes["ModStat"] = 23] = "ModStat";
    FieldTypes[FieldTypes["Error"] = 24] = "Error";
    FieldTypes[FieldTypes["ContentTypeId"] = 25] = "ContentTypeId";
    FieldTypes[FieldTypes["PageSeparator"] = 26] = "PageSeparator";
    FieldTypes[FieldTypes["ThreadIndex"] = 27] = "ThreadIndex";
    FieldTypes[FieldTypes["WorkflowStatus"] = 28] = "WorkflowStatus";
    FieldTypes[FieldTypes["AllDayEvent"] = 29] = "AllDayEvent";
    FieldTypes[FieldTypes["WorkflowEventType"] = 30] = "WorkflowEventType";
})(FieldTypes || (FieldTypes = {}));
var DateTimeFieldFormatType;
(function (DateTimeFieldFormatType) {
    DateTimeFieldFormatType[DateTimeFieldFormatType["DateOnly"] = 0] = "DateOnly";
    DateTimeFieldFormatType[DateTimeFieldFormatType["DateTime"] = 1] = "DateTime";
})(DateTimeFieldFormatType || (DateTimeFieldFormatType = {}));
/**
 * Specifies the control settings while adding a field.
 */
var AddFieldOptions;
(function (AddFieldOptions) {
    /**
     *  Specify that a new field added to the list must also be added to the default content type in the site collection
     */
    AddFieldOptions[AddFieldOptions["DefaultValue"] = 0] = "DefaultValue";
    /**
     * Specify that a new field added to the list must also be added to the default content type in the site collection.
     */
    AddFieldOptions[AddFieldOptions["AddToDefaultContentType"] = 1] = "AddToDefaultContentType";
    /**
     * Specify that a new field must not be added to any other content type
     */
    AddFieldOptions[AddFieldOptions["AddToNoContentType"] = 2] = "AddToNoContentType";
    /**
     *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
     */
    AddFieldOptions[AddFieldOptions["AddToAllContentTypes"] = 4] = "AddToAllContentTypes";
    /**
     * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
     */
    AddFieldOptions[AddFieldOptions["AddFieldInternalNameHint"] = 8] = "AddFieldInternalNameHint";
    /**
     * Specify that a new field that is added to the specified list must also be added to the default list view
     */
    AddFieldOptions[AddFieldOptions["AddFieldToDefaultView"] = 16] = "AddFieldToDefaultView";
    /**
     * Specify to confirm that no other field has the same display name
     */
    AddFieldOptions[AddFieldOptions["AddFieldCheckDisplayName"] = 32] = "AddFieldCheckDisplayName";
})(AddFieldOptions || (AddFieldOptions = {}));
var CalendarType;
(function (CalendarType) {
    CalendarType[CalendarType["Gregorian"] = 1] = "Gregorian";
    CalendarType[CalendarType["Japan"] = 3] = "Japan";
    CalendarType[CalendarType["Taiwan"] = 4] = "Taiwan";
    CalendarType[CalendarType["Korea"] = 5] = "Korea";
    CalendarType[CalendarType["Hijri"] = 6] = "Hijri";
    CalendarType[CalendarType["Thai"] = 7] = "Thai";
    CalendarType[CalendarType["Hebrew"] = 8] = "Hebrew";
    CalendarType[CalendarType["GregorianMEFrench"] = 9] = "GregorianMEFrench";
    CalendarType[CalendarType["GregorianArabic"] = 10] = "GregorianArabic";
    CalendarType[CalendarType["GregorianXLITEnglish"] = 11] = "GregorianXLITEnglish";
    CalendarType[CalendarType["GregorianXLITFrench"] = 12] = "GregorianXLITFrench";
    CalendarType[CalendarType["KoreaJapanLunar"] = 14] = "KoreaJapanLunar";
    CalendarType[CalendarType["ChineseLunar"] = 15] = "ChineseLunar";
    CalendarType[CalendarType["SakaEra"] = 16] = "SakaEra";
    CalendarType[CalendarType["UmAlQura"] = 23] = "UmAlQura";
})(CalendarType || (CalendarType = {}));
var UrlFieldFormatType;
(function (UrlFieldFormatType) {
    UrlFieldFormatType[UrlFieldFormatType["Hyperlink"] = 0] = "Hyperlink";
    UrlFieldFormatType[UrlFieldFormatType["Image"] = 1] = "Image";
})(UrlFieldFormatType || (UrlFieldFormatType = {}));
var PermissionKind;
(function (PermissionKind) {
    /**
     * Has no permissions on the Site. Not available through the user interface.
     */
    PermissionKind[PermissionKind["EmptyMask"] = 0] = "EmptyMask";
    /**
     * View items in lists, documents in document libraries, and Web discussion comments.
     */
    PermissionKind[PermissionKind["ViewListItems"] = 1] = "ViewListItems";
    /**
     * Add items to lists, documents to document libraries, and Web discussion comments.
     */
    PermissionKind[PermissionKind["AddListItems"] = 2] = "AddListItems";
    /**
     * Edit items in lists, edit documents in document libraries, edit Web discussion comments
     * in documents, and customize Web Part Pages in document libraries.
     */
    PermissionKind[PermissionKind["EditListItems"] = 3] = "EditListItems";
    /**
     * Delete items from a list, documents from a document library, and Web discussion
     * comments in documents.
     */
    PermissionKind[PermissionKind["DeleteListItems"] = 4] = "DeleteListItems";
    /**
     * Approve a minor version of a list item or document.
     */
    PermissionKind[PermissionKind["ApproveItems"] = 5] = "ApproveItems";
    /**
     * View the source of documents with server-side file handlers.
     */
    PermissionKind[PermissionKind["OpenItems"] = 6] = "OpenItems";
    /**
     * View past versions of a list item or document.
     */
    PermissionKind[PermissionKind["ViewVersions"] = 7] = "ViewVersions";
    /**
     * Delete past versions of a list item or document.
     */
    PermissionKind[PermissionKind["DeleteVersions"] = 8] = "DeleteVersions";
    /**
     * Discard or check in a document which is checked out to another user.
     */
    PermissionKind[PermissionKind["CancelCheckout"] = 9] = "CancelCheckout";
    /**
     * Create, change, and delete personal views of lists.
     */
    PermissionKind[PermissionKind["ManagePersonalViews"] = 10] = "ManagePersonalViews";
    /**
     * Create and delete lists, add or remove columns in a list, and add or remove public views of a list.
     */
    PermissionKind[PermissionKind["ManageLists"] = 12] = "ManageLists";
    /**
     * View forms, views, and application pages, and enumerate lists.
     */
    PermissionKind[PermissionKind["ViewFormPages"] = 13] = "ViewFormPages";
    /**
     * Make content of a list or document library retrieveable for anonymous users through SharePoint search.
     * The list permissions in the site do not change.
     */
    PermissionKind[PermissionKind["AnonymousSearchAccessList"] = 14] = "AnonymousSearchAccessList";
    /**
     * Allow users to open a Site, list, or folder to access items inside that container.
     */
    PermissionKind[PermissionKind["Open"] = 17] = "Open";
    /**
     * View pages in a Site.
     */
    PermissionKind[PermissionKind["ViewPages"] = 18] = "ViewPages";
    /**
     * Add, change, or delete HTML pages or Web Part Pages, and edit the Site using
     * a Windows SharePoint Services compatible editor.
     */
    PermissionKind[PermissionKind["AddAndCustomizePages"] = 19] = "AddAndCustomizePages";
    /**
     * Apply a theme or borders to the entire Site.
     */
    PermissionKind[PermissionKind["ApplyThemeAndBorder"] = 20] = "ApplyThemeAndBorder";
    /**
     * Apply a style sheet (.css file) to the Site.
     */
    PermissionKind[PermissionKind["ApplyStyleSheets"] = 21] = "ApplyStyleSheets";
    /**
     * View reports on Site usage.
     */
    PermissionKind[PermissionKind["ViewUsageData"] = 22] = "ViewUsageData";
    /**
     * Create a Site using Self-Service Site Creation.
     */
    PermissionKind[PermissionKind["CreateSSCSite"] = 23] = "CreateSSCSite";
    /**
     * Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.
     */
    PermissionKind[PermissionKind["ManageSubwebs"] = 24] = "ManageSubwebs";
    /**
     * Create a group of users that can be used anywhere within the site collection.
     */
    PermissionKind[PermissionKind["CreateGroups"] = 25] = "CreateGroups";
    /**
     * Create and change permission levels on the Site and assign permissions to users
     * and groups.
     */
    PermissionKind[PermissionKind["ManagePermissions"] = 26] = "ManagePermissions";
    /**
     * Enumerate files and folders in a Site using Microsoft Office SharePoint Designer
     * and WebDAV interfaces.
     */
    PermissionKind[PermissionKind["BrowseDirectories"] = 27] = "BrowseDirectories";
    /**
     * View information about users of the Site.
     */
    PermissionKind[PermissionKind["BrowseUserInfo"] = 28] = "BrowseUserInfo";
    /**
     * Add or remove personal Web Parts on a Web Part Page.
     */
    PermissionKind[PermissionKind["AddDelPrivateWebParts"] = 29] = "AddDelPrivateWebParts";
    /**
     * Update Web Parts to display personalized information.
     */
    PermissionKind[PermissionKind["UpdatePersonalWebParts"] = 30] = "UpdatePersonalWebParts";
    /**
     * Grant the ability to perform all administration tasks for the Site as well as
     * manage content, activate, deactivate, or edit properties of Site scoped Features
     * through the object model or through the user interface (UI). When granted on the
     * root Site of a Site Collection, activate, deactivate, or edit properties of
     * site collection scoped Features through the object model. To browse to the Site
     * Collection Features page and activate or deactivate Site Collection scoped Features
     * through the UI, you must be a Site Collection administrator.
     */
    PermissionKind[PermissionKind["ManageWeb"] = 31] = "ManageWeb";
    /**
     * Content of lists and document libraries in the Web site will be retrieveable for anonymous users through
     * SharePoint search if the list or document library has AnonymousSearchAccessList set.
     */
    PermissionKind[PermissionKind["AnonymousSearchAccessWebLists"] = 32] = "AnonymousSearchAccessWebLists";
    /**
     * Use features that launch client applications. Otherwise, users must work on documents
     * locally and upload changes.
     */
    PermissionKind[PermissionKind["UseClientIntegration"] = 37] = "UseClientIntegration";
    /**
     * Use SOAP, WebDAV, or Microsoft Office SharePoint Designer interfaces to access the Site.
     */
    PermissionKind[PermissionKind["UseRemoteAPIs"] = 38] = "UseRemoteAPIs";
    /**
     * Manage alerts for all users of the Site.
     */
    PermissionKind[PermissionKind["ManageAlerts"] = 39] = "ManageAlerts";
    /**
     * Create e-mail alerts.
     */
    PermissionKind[PermissionKind["CreateAlerts"] = 40] = "CreateAlerts";
    /**
     * Allows a user to change his or her user information, such as adding a picture.
     */
    PermissionKind[PermissionKind["EditMyUserInfo"] = 41] = "EditMyUserInfo";
    /**
     * Enumerate permissions on Site, list, folder, document, or list item.
     */
    PermissionKind[PermissionKind["EnumeratePermissions"] = 63] = "EnumeratePermissions";
    /**
     * Has all permissions on the Site. Not available through the user interface.
     */
    PermissionKind[PermissionKind["FullMask"] = 65] = "FullMask";
})(PermissionKind || (PermissionKind = {}));
/**
 * Specifies the type of a principal.
 */
/* tslint:disable:no-bitwise */
var PrincipalType$1;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type.
     */
    PrincipalType[PrincipalType["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies a user as the principal type.
     */
    PrincipalType[PrincipalType["User"] = 1] = "User";
    /**
     * Enumeration whose value specifies a distribution list as the principal type.
     */
    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type.
     */
    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
    /**
     * Enumeration whose value specifies a group as the principal type.
     */
    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
    /**
     * Enumeration whose value specifies all principal types.
     */
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType$1 || (PrincipalType$1 = {}));
/* tslint:enable:no-bitwise */
/**
 * Specifies the source of a principal.
 */
/* tslint:disable:no-bitwise */
var PrincipalSource;
(function (PrincipalSource) {
    /**
     * Enumeration whose value specifies no principal source.
     */
    PrincipalSource[PrincipalSource["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies user information list as the principal source.
     */
    PrincipalSource[PrincipalSource["UserInfoList"] = 1] = "UserInfoList";
    /**
     * Enumeration whose value specifies Active Directory as the principal source.
     */
    PrincipalSource[PrincipalSource["Windows"] = 2] = "Windows";
    /**
     * Enumeration whose value specifies the current membership provider as the principal source.
     */
    PrincipalSource[PrincipalSource["MembershipProvider"] = 4] = "MembershipProvider";
    /**
     * Enumeration whose value specifies the current role provider as the principal source.
     */
    PrincipalSource[PrincipalSource["RoleProvider"] = 8] = "RoleProvider";
    /**
     * Enumeration whose value specifies all principal sources.
     */
    PrincipalSource[PrincipalSource["All"] = 15] = "All";
})(PrincipalSource || (PrincipalSource = {}));
/* tslint:enable:no-bitwise */
var RoleType;
(function (RoleType) {
    RoleType[RoleType["None"] = 0] = "None";
    RoleType[RoleType["Guest"] = 1] = "Guest";
    RoleType[RoleType["Reader"] = 2] = "Reader";
    RoleType[RoleType["Contributor"] = 3] = "Contributor";
    RoleType[RoleType["WebDesigner"] = 4] = "WebDesigner";
    RoleType[RoleType["Administrator"] = 5] = "Administrator";
})(RoleType || (RoleType = {}));
var PageType;
(function (PageType) {
    PageType[PageType["Invalid"] = -1] = "Invalid";
    PageType[PageType["DefaultView"] = 0] = "DefaultView";
    PageType[PageType["NormalView"] = 1] = "NormalView";
    PageType[PageType["DialogView"] = 2] = "DialogView";
    PageType[PageType["View"] = 3] = "View";
    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
    PageType[PageType["EditForm"] = 6] = "EditForm";
    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
    PageType[PageType["NewForm"] = 8] = "NewForm";
    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
})(PageType || (PageType = {}));
var SharingLinkKind;
(function (SharingLinkKind) {
    /**
     * Uninitialized link
     */
    SharingLinkKind[SharingLinkKind["Uninitialized"] = 0] = "Uninitialized";
    /**
     * Direct link to the object being shared
     */
    SharingLinkKind[SharingLinkKind["Direct"] = 1] = "Direct";
    /**
     * Organization-shareable link to the object being shared with view permissions
     */
    SharingLinkKind[SharingLinkKind["OrganizationView"] = 2] = "OrganizationView";
    /**
     * Organization-shareable link to the object being shared with edit permissions
     */
    SharingLinkKind[SharingLinkKind["OrganizationEdit"] = 3] = "OrganizationEdit";
    /**
     * View only anonymous link
     */
    SharingLinkKind[SharingLinkKind["AnonymousView"] = 4] = "AnonymousView";
    /**
     * Read/Write anonymous link
     */
    SharingLinkKind[SharingLinkKind["AnonymousEdit"] = 5] = "AnonymousEdit";
    /**
     * Flexible sharing Link where properties can change without affecting link URL
     */
    SharingLinkKind[SharingLinkKind["Flexible"] = 6] = "Flexible";
})(SharingLinkKind || (SharingLinkKind = {}));
/**
 * Indicates the role of the sharing link
 */
var SharingRole;
(function (SharingRole) {
    SharingRole[SharingRole["None"] = 0] = "None";
    SharingRole[SharingRole["View"] = 1] = "View";
    SharingRole[SharingRole["Edit"] = 2] = "Edit";
    SharingRole[SharingRole["Owner"] = 3] = "Owner";
})(SharingRole || (SharingRole = {}));
var SharingOperationStatusCode;
(function (SharingOperationStatusCode) {
    /**
     * The share operation completed without errors.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CompletedSuccessfully"] = 0] = "CompletedSuccessfully";
    /**
     * The share operation completed and generated requests for access.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["AccessRequestsQueued"] = 1] = "AccessRequestsQueued";
    /**
     * The share operation failed as there were no resolved users.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["NoResolvedUsers"] = -1] = "NoResolvedUsers";
    /**
     * The share operation failed due to insufficient permissions.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["AccessDenied"] = -2] = "AccessDenied";
    /**
     * The share operation failed when attempting a cross site share, which is not supported.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CrossSiteRequestNotSupported"] = -3] = "CrossSiteRequestNotSupported";
    /**
     * The sharing operation failed due to an unknown error.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["UnknowError"] = -4] = "UnknowError";
    /**
     * The text you typed is too long. Please shorten it.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["EmailBodyTooLong"] = -5] = "EmailBodyTooLong";
    /**
     * The maximum number of unique scopes in the list has been exceeded.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["ListUniqueScopesExceeded"] = -6] = "ListUniqueScopesExceeded";
    /**
     * The share operation failed because a sharing capability is disabled in the site.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CapabilityDisabled"] = -7] = "CapabilityDisabled";
    /**
     * The specified object for the share operation is not supported.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["ObjectNotSupported"] = -8] = "ObjectNotSupported";
    /**
     * A SharePoint group cannot contain another SharePoint group.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["NestedGroupsNotSupported"] = -9] = "NestedGroupsNotSupported";
})(SharingOperationStatusCode || (SharingOperationStatusCode = {}));
var SPSharedObjectType;
(function (SPSharedObjectType) {
    SPSharedObjectType[SPSharedObjectType["Unknown"] = 0] = "Unknown";
    SPSharedObjectType[SPSharedObjectType["File"] = 1] = "File";
    SPSharedObjectType[SPSharedObjectType["Folder"] = 2] = "Folder";
    SPSharedObjectType[SPSharedObjectType["Item"] = 3] = "Item";
    SPSharedObjectType[SPSharedObjectType["List"] = 4] = "List";
    SPSharedObjectType[SPSharedObjectType["Web"] = 5] = "Web";
    SPSharedObjectType[SPSharedObjectType["Max"] = 6] = "Max";
})(SPSharedObjectType || (SPSharedObjectType = {}));
var SharingDomainRestrictionMode;
(function (SharingDomainRestrictionMode) {
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["None"] = 0] = "None";
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["AllowList"] = 1] = "AllowList";
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["BlockList"] = 2] = "BlockList";
})(SharingDomainRestrictionMode || (SharingDomainRestrictionMode = {}));
var RenderListDataOptions;
(function (RenderListDataOptions) {
    RenderListDataOptions[RenderListDataOptions["None"] = 0] = "None";
    RenderListDataOptions[RenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    RenderListDataOptions[RenderListDataOptions["ListData"] = 2] = "ListData";
    RenderListDataOptions[RenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    RenderListDataOptions[RenderListDataOptions["MenuView"] = 8] = "MenuView";
    RenderListDataOptions[RenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    RenderListDataOptions[RenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    RenderListDataOptions[RenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    RenderListDataOptions[RenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    RenderListDataOptions[RenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    RenderListDataOptions[RenderListDataOptions["Visualization"] = 512] = "Visualization";
    RenderListDataOptions[RenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    RenderListDataOptions[RenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    RenderListDataOptions[RenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    RenderListDataOptions[RenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    RenderListDataOptions[RenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    RenderListDataOptions[RenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
})(RenderListDataOptions || (RenderListDataOptions = {}));
var FieldUserSelectionMode;
(function (FieldUserSelectionMode) {
    FieldUserSelectionMode[FieldUserSelectionMode["PeopleAndGroups"] = 1] = "PeopleAndGroups";
    FieldUserSelectionMode[FieldUserSelectionMode["PeopleOnly"] = 0] = "PeopleOnly";
})(FieldUserSelectionMode || (FieldUserSelectionMode = {}));
var ChoiceFieldFormatType;
(function (ChoiceFieldFormatType) {
    ChoiceFieldFormatType[ChoiceFieldFormatType["Dropdown"] = 0] = "Dropdown";
    ChoiceFieldFormatType[ChoiceFieldFormatType["RadioButtons"] = 1] = "RadioButtons";
})(ChoiceFieldFormatType || (ChoiceFieldFormatType = {}));
/**
 * Specifies the originating zone of a request received.
 */
var UrlZone;
(function (UrlZone) {
    /**
     * Specifies the default zone used for requests unless another zone is specified.
     */
    UrlZone[UrlZone["DefaultZone"] = 0] = "DefaultZone";
    /**
     * Specifies an intranet zone.
     */
    UrlZone[UrlZone["Intranet"] = 1] = "Intranet";
    /**
     * Specifies an Internet zone.
     */
    UrlZone[UrlZone["Internet"] = 2] = "Internet";
    /**
     * Specifies a custom zone.
     */
    UrlZone[UrlZone["Custom"] = 3] = "Custom";
    /**
     * Specifies an extranet zone.
     */
    UrlZone[UrlZone["Extranet"] = 4] = "Extranet";
})(UrlZone || (UrlZone = {}));

var SharePointQueryableSecurable = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SharePointQueryableSecurable, _super);
    function SharePointQueryableSecurable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SharePointQueryableSecurable.prototype, "roleAssignments", {
        /**
         * Gets the set of role assignments for this item
         *
         */
        get: function () {
            return new RoleAssignments(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharePointQueryableSecurable.prototype, "firstUniqueAncestorSecurableObject", {
        /**
         * Gets the closest securable up the security hierarchy whose permissions are applied to this list item
         *
         */
        get: function () {
            return new SharePointQueryableInstance(this, "FirstUniqueAncestorSecurableObject");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the effective permissions for the user supplied
     *
     * @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
     */
    SharePointQueryableSecurable.prototype.getUserEffectivePermissions = function (loginName) {
        var q = this.clone(SharePointQueryable, "getUserEffectivePermissions(@user)");
        q.query.set("@user", "'" + encodeURIComponent(loginName) + "'");
        return q.get().then(function (r) {
            // handle verbose mode
            return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(r, "GetUserEffectivePermissions") ? r.GetUserEffectivePermissions : r;
        });
    };
    /**
     * Gets the effective permissions for the current user
     */
    SharePointQueryableSecurable.prototype.getCurrentUserEffectivePermissions = function () {
        var _this = this;
        // remove need to reference Web here, which created a circular build issue
        var w = new SharePointQueryableInstance("_api/web", "currentuser");
        return w.select("LoginName").get().then(function (user) {
            return _this.getUserEffectivePermissions(user.LoginName);
        });
    };
    /**
     * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
     *
     * @param copyRoleAssignments If true the permissions are copied from the current parent scope
     * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
     */
    SharePointQueryableSecurable.prototype.breakRoleInheritance = function (copyRoleAssignments, clearSubscopes) {
        if (copyRoleAssignments === void 0) { copyRoleAssignments = false; }
        if (clearSubscopes === void 0) { clearSubscopes = false; }
        return this.clone(SharePointQueryableSecurable, "breakroleinheritance(copyroleassignments=" + copyRoleAssignments + ", clearsubscopes=" + clearSubscopes + ")").postCore();
    };
    /**
     * Removes the local role assignments so that it re-inherit role assignments from the parent object.
     *
     */
    SharePointQueryableSecurable.prototype.resetRoleInheritance = function () {
        return this.clone(SharePointQueryableSecurable, "resetroleinheritance").postCore();
    };
    /**
     * Determines if a given user has the appropriate permissions
     *
     * @param loginName The user to check
     * @param permission The permission being checked
     */
    SharePointQueryableSecurable.prototype.userHasPermissions = function (loginName, permission) {
        var _this = this;
        return this.getUserEffectivePermissions(loginName).then(function (perms) {
            return _this.hasPermissions(perms, permission);
        });
    };
    /**
     * Determines if the current user has the requested permissions
     *
     * @param permission The permission we wish to check
     */
    SharePointQueryableSecurable.prototype.currentUserHasPermissions = function (permission) {
        var _this = this;
        return this.getCurrentUserEffectivePermissions().then(function (perms) {
            return _this.hasPermissions(perms, permission);
        });
    };
    /**
     * Taken from sp.js, checks the supplied permissions against the mask
     *
     * @param value The security principal's permissions on the given object
     * @param perm The permission checked against the value
     */
    /* tslint:disable:no-bitwise */
    SharePointQueryableSecurable.prototype.hasPermissions = function (value, perm) {
        if (!perm) {
            return true;
        }
        if (perm === PermissionKind.FullMask) {
            return (value.High & 32767) === 32767 && value.Low === 65535;
        }
        perm = perm - 1;
        var num = 1;
        if (perm >= 0 && perm < 32) {
            num = num << perm;
            return 0 !== (value.Low & num);
        }
        else if (perm >= 32 && perm < 64) {
            num = num << perm - 32;
            return 0 !== (value.High & num);
        }
        return false;
    };
    return SharePointQueryableSecurable;
}(SharePointQueryableInstance));

/**
 * Internal helper class used to augment classes to include sharing functionality
 */
var SharePointQueryableShareable = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SharePointQueryableShareable, _super);
    function SharePointQueryableShareable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a sharing link for the supplied
     *
     * @param kind The kind of link to share
     * @param expiration The optional expiration for this link
     */
    SharePointQueryableShareable.prototype.getShareLink = function (kind, expiration) {
        if (expiration === void 0) { expiration = null; }
        // date needs to be an ISO string or null
        var expString = expiration !== null ? expiration.toISOString() : null;
        // clone using the factory and send the request
        return this.clone(SharePointQueryableShareable, "shareLink").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                request: {
                    createLink: true,
                    emailData: null,
                    settings: {
                        expiration: expString,
                        linkKind: kind,
                    },
                },
            }),
        });
    };
    /**
     * Shares this instance with the supplied users
     *
     * @param loginNames Resolved login names to share
     * @param role The role
     * @param requireSignin True to require the user is authenticated, otherwise false
     * @param propagateAcl True to apply this share to all children
     * @param emailData If supplied an email will be sent with the indicated properties
     */
    SharePointQueryableShareable.prototype.shareWith = function (loginNames, role, requireSignin, propagateAcl, emailData) {
        var _this = this;
        if (requireSignin === void 0) { requireSignin = false; }
        if (propagateAcl === void 0) { propagateAcl = false; }
        // handle the multiple input types
        if (!Array.isArray(loginNames)) {
            loginNames = [loginNames];
        }
        var userStr = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(loginNames.map(function (login) { return { Key: login }; }));
        var roleFilter = role === SharingRole.Edit ? RoleType.Contributor : RoleType.Reader;
        // start by looking up the role definition id we need to set the roleValue
        // remove need to reference Web here, which created a circular build issue
        var w = new SharePointQueryableCollection("_api/web", "roledefinitions");
        return w.select("Id").filter("RoleTypeKind eq " + roleFilter).get().then(function (def) {
            if (!Array.isArray(def) || def.length < 1) {
                throw Error("Could not locate a role defintion with RoleTypeKind " + roleFilter);
            }
            var postBody = {
                includeAnonymousLinkInEmail: requireSignin,
                peoplePickerInput: userStr,
                propagateAcl: propagateAcl,
                roleValue: "role:" + def[0].Id,
                useSimplifiedRoles: true,
            };
            if (emailData !== undefined) {
                postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(postBody, {
                    emailBody: emailData.body,
                    emailSubject: emailData.subject !== undefined ? emailData.subject : "",
                    sendEmail: true,
                });
            }
            return _this.clone(SharePointQueryableShareable, "shareObject").postCore({
                body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(postBody),
            });
        });
    };
    /**
     * Shares an object based on the supplied options
     *
     * @param options The set of options to send to the ShareObject method
     * @param bypass If true any processing is skipped and the options are sent directly to the ShareObject method
     */
    SharePointQueryableShareable.prototype.shareObject = function (options, bypass) {
        var _this = this;
        if (bypass === void 0) { bypass = false; }
        if (bypass) {
            // if the bypass flag is set send the supplied parameters directly to the service
            return this.sendShareObjectRequest(options);
        }
        // extend our options with some defaults
        options = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(options, {
            group: null,
            includeAnonymousLinkInEmail: false,
            propagateAcl: false,
            useSimplifiedRoles: true,
        }, true);
        return this.getRoleValue(options.role, options.group).then(function (roleValue) {
            // handle the multiple input types
            if (!Array.isArray(options.loginNames)) {
                options.loginNames = [options.loginNames];
            }
            var userStr = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(options.loginNames.map(function (login) { return { Key: login }; }));
            var postBody = {
                peoplePickerInput: userStr,
                roleValue: roleValue,
                url: options.url,
            };
            if (options.emailData !== undefined && options.emailData !== null) {
                postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(postBody, {
                    emailBody: options.emailData.body,
                    emailSubject: options.emailData.subject !== undefined ? options.emailData.subject : "Shared with you.",
                    sendEmail: true,
                });
            }
            return _this.sendShareObjectRequest(postBody);
        });
    };
    /**
     * Calls the web's UnshareObject method
     *
     * @param url The url of the object to unshare
     */
    SharePointQueryableShareable.prototype.unshareObjectWeb = function (url) {
        return this.clone(SharePointQueryableShareable, "unshareObject").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                url: url,
            }),
        });
    };
    /**
     * Checks Permissions on the list of Users and returns back role the users have on the Item.
     *
     * @param recipients The array of Entities for which Permissions need to be checked.
     */
    SharePointQueryableShareable.prototype.checkPermissions = function (recipients) {
        return this.clone(SharePointQueryableShareable, "checkPermissions").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                recipients: recipients,
            }),
        });
    };
    /**
     * Get Sharing Information.
     *
     * @param request The SharingInformationRequest Object.
     */
    SharePointQueryableShareable.prototype.getSharingInformation = function (request) {
        if (request === void 0) { request = null; }
        return this.clone(SharePointQueryableShareable, "getSharingInformation").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                request: request,
            }),
        });
    };
    /**
     * Gets the sharing settings of an item.
     *
     * @param useSimplifiedRoles Determines whether to use simplified roles.
     */
    SharePointQueryableShareable.prototype.getObjectSharingSettings = function (useSimplifiedRoles) {
        if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
        return this.clone(SharePointQueryableShareable, "getObjectSharingSettings").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                useSimplifiedRoles: useSimplifiedRoles,
            }),
        });
    };
    /**
     * Unshares this object
     */
    SharePointQueryableShareable.prototype.unshareObject = function () {
        return this.clone(SharePointQueryableShareable, "unshareObject").postCore();
    };
    /**
     * Deletes a link by type
     *
     * @param kind Deletes a sharing link by the kind of link
     */
    SharePointQueryableShareable.prototype.deleteLinkByKind = function (kind) {
        return this.clone(SharePointQueryableShareable, "deleteLinkByKind").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({ linkKind: kind }),
        });
    };
    /**
     * Removes the specified link to the item.
     *
     * @param kind The kind of link to be deleted.
     * @param shareId
     */
    SharePointQueryableShareable.prototype.unshareLink = function (kind, shareId) {
        if (shareId === void 0) { shareId = "00000000-0000-0000-0000-000000000000"; }
        return this.clone(SharePointQueryableShareable, "unshareLink").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({ linkKind: kind, shareId: shareId }),
        });
    };
    /**
     * Calculates the roleValue string used in the sharing query
     *
     * @param role The Sharing Role
     * @param group The Group type
     */
    SharePointQueryableShareable.prototype.getRoleValue = function (role, group) {
        // we will give group precedence, because we had to make a choice
        if (group !== undefined && group !== null) {
            switch (group) {
                case RoleType.Contributor:
                    // remove need to reference Web here, which created a circular build issue
                    var memberGroup = new SharePointQueryableInstance("_api/web", "associatedmembergroup");
                    return memberGroup.select("Id").get().then(function (g) { return "group: " + g.Id; });
                case RoleType.Reader:
                case RoleType.Guest:
                    // remove need to reference Web here, which created a circular build issue
                    var visitorGroup = new SharePointQueryableInstance("_api/web", "associatedvisitorgroup");
                    return visitorGroup.select("Id").get().then(function (g) { return "group: " + g.Id; });
                default:
                    throw Error("Could not determine role value for supplied value. Contributor, Reader, and Guest are supported");
            }
        }
        else {
            var roleFilter = role === SharingRole.Edit ? RoleType.Contributor : RoleType.Reader;
            // remove need to reference Web here, which created a circular build issue
            var roleDefs = new SharePointQueryableCollection("_api/web", "roledefinitions");
            return roleDefs.select("Id").top(1).filter("RoleTypeKind eq " + roleFilter).get().then(function (def) {
                if (def.length < 1) {
                    throw Error("Could not locate associated role definition for supplied role. Edit and View are supported");
                }
                return "role: " + def[0].Id;
            });
        }
    };
    SharePointQueryableShareable.prototype.getShareObjectWeb = function (candidate) {
        return Promise.resolve(new SharePointQueryableInstance(extractWebUrl(candidate), "/_api/SP.Web.ShareObject"));
    };
    SharePointQueryableShareable.prototype.sendShareObjectRequest = function (options) {
        return this.getShareObjectWeb(this.toUrl()).then(function (web) {
            return web.expand("UsersWithAccessRequests", "GroupsSharedWith").as(SharePointQueryableShareable).postCore({
                body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(options),
            });
        });
    };
    return SharePointQueryableShareable;
}(SharePointQueryable));
var SharePointQueryableShareableWeb = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SharePointQueryableShareableWeb, _super);
    function SharePointQueryableShareableWeb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shares this web with the supplied users
     * @param loginNames The resolved login names to share
     * @param role The role to share this web
     * @param emailData Optional email data
     */
    SharePointQueryableShareableWeb.prototype.shareWith = function (loginNames, role, emailData) {
        var _this = this;
        if (role === void 0) { role = SharingRole.View; }
        var dependency = this.addBatchDependency();
        // remove need to reference Web here, which created a circular build issue
        var web = new SharePointQueryableInstance(extractWebUrl(this.toUrl()), "/_api/web/url");
        return web.get().then(function (url) {
            dependency();
            return _this.shareObject(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(url, "/_layouts/15/aclinv.aspx?forSharing=1&mbypass=1"), loginNames, role, emailData);
        });
    };
    /**
     * Provides direct access to the static web.ShareObject method
     *
     * @param url The url to share
     * @param loginNames Resolved loginnames string[] of a single login name string
     * @param roleValue Role value
     * @param emailData Optional email data
     * @param groupId Optional group id
     * @param propagateAcl
     * @param includeAnonymousLinkInEmail
     * @param useSimplifiedRoles
     */
    SharePointQueryableShareableWeb.prototype.shareObject = function (url, loginNames, role, emailData, group, propagateAcl, includeAnonymousLinkInEmail, useSimplifiedRoles) {
        if (propagateAcl === void 0) { propagateAcl = false; }
        if (includeAnonymousLinkInEmail === void 0) { includeAnonymousLinkInEmail = false; }
        if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
        return this.clone(SharePointQueryableShareable, null).shareObject({
            emailData: emailData,
            group: group,
            includeAnonymousLinkInEmail: includeAnonymousLinkInEmail,
            loginNames: loginNames,
            propagateAcl: propagateAcl,
            role: role,
            url: url,
            useSimplifiedRoles: useSimplifiedRoles,
        });
    };
    /**
     * Supplies a method to pass any set of arguments to ShareObject
     *
     * @param options The set of options to send to ShareObject
     */
    SharePointQueryableShareableWeb.prototype.shareObjectRaw = function (options) {
        return this.clone(SharePointQueryableShareable, null).shareObject(options, true);
    };
    /**
     * Unshares the object
     *
     * @param url The url of the object to stop sharing
     */
    SharePointQueryableShareableWeb.prototype.unshareObject = function (url) {
        return this.clone(SharePointQueryableShareable, null).unshareObjectWeb(url);
    };
    return SharePointQueryableShareableWeb;
}(SharePointQueryableSecurable));
var SharePointQueryableShareableItem = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SharePointQueryableShareableItem, _super);
    function SharePointQueryableShareableItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a link suitable for sharing for this item
     *
     * @param kind The type of link to share
     * @param expiration The optional expiration date
     */
    SharePointQueryableShareableItem.prototype.getShareLink = function (kind, expiration) {
        if (kind === void 0) { kind = SharingLinkKind.OrganizationView; }
        if (expiration === void 0) { expiration = null; }
        return this.clone(SharePointQueryableShareable, null).getShareLink(kind, expiration);
    };
    /**
     * Shares this item with one or more users
     *
     * @param loginNames string or string[] of resolved login names to which this item will be shared
     * @param role The role (View | Edit) applied to the share
     * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
     */
    SharePointQueryableShareableItem.prototype.shareWith = function (loginNames, role, requireSignin, emailData) {
        if (role === void 0) { role = SharingRole.View; }
        if (requireSignin === void 0) { requireSignin = false; }
        return this.clone(SharePointQueryableShareable, null).shareWith(loginNames, role, requireSignin, false, emailData);
    };
    /**
     * Checks Permissions on the list of Users and returns back role the users have on the Item.
     *
     * @param recipients The array of Entities for which Permissions need to be checked.
     */
    SharePointQueryableShareableItem.prototype.checkSharingPermissions = function (recipients) {
        return this.clone(SharePointQueryableShareable, null).checkPermissions(recipients);
    };
    /**
     * Get Sharing Information.
     *
     * @param request The SharingInformationRequest Object.
     */
    SharePointQueryableShareableItem.prototype.getSharingInformation = function (request) {
        if (request === void 0) { request = null; }
        return this.clone(SharePointQueryableShareable, null).getSharingInformation(request);
    };
    /**
     * Gets the sharing settings of an item.
     *
     * @param useSimplifiedRoles Determines whether to use simplified roles.
     */
    SharePointQueryableShareableItem.prototype.getObjectSharingSettings = function (useSimplifiedRoles) {
        if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
        return this.clone(SharePointQueryableShareable, null).getObjectSharingSettings(useSimplifiedRoles);
    };
    /**
     * Unshare this item
     */
    SharePointQueryableShareableItem.prototype.unshare = function () {
        return this.clone(SharePointQueryableShareable, null).unshareObject();
    };
    /**
     * Deletes a sharing link by kind
     *
     * @param kind Deletes a sharing link by the kind of link
     */
    SharePointQueryableShareableItem.prototype.deleteSharingLinkByKind = function (kind) {
        return this.clone(SharePointQueryableShareable, null).deleteLinkByKind(kind);
    };
    /**
     * Removes the specified link to the item.
     *
     * @param kind The kind of link to be deleted.
     * @param shareId
     */
    SharePointQueryableShareableItem.prototype.unshareLink = function (kind, shareId) {
        return this.clone(SharePointQueryableShareable, null).unshareLink(kind, shareId);
    };
    return SharePointQueryableShareableItem;
}(SharePointQueryableSecurable));
var FileFolderShared = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(FileFolderShared, _super);
    function FileFolderShared() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a link suitable for sharing
     *
     * @param kind The kind of link to get
     * @param expiration Optional, an expiration for this link
     */
    FileFolderShared.prototype.getShareLink = function (kind, expiration) {
        if (kind === void 0) { kind = SharingLinkKind.OrganizationView; }
        if (expiration === void 0) { expiration = null; }
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.getShareLink(kind, expiration);
        });
    };
    /**
         * Checks Permissions on the list of Users and returns back role the users have on the Item.
         *
         * @param recipients The array of Entities for which Permissions need to be checked.
         */
    FileFolderShared.prototype.checkSharingPermissions = function (recipients) {
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.checkPermissions(recipients);
        });
    };
    /**
     * Get Sharing Information.
     *
     * @param request The SharingInformationRequest Object.
     */
    FileFolderShared.prototype.getSharingInformation = function (request) {
        if (request === void 0) { request = null; }
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.getSharingInformation(request);
        });
    };
    /**
     * Gets the sharing settings of an item.
     *
     * @param useSimplifiedRoles Determines whether to use simplified roles.
     */
    FileFolderShared.prototype.getObjectSharingSettings = function (useSimplifiedRoles) {
        if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.getObjectSharingSettings(useSimplifiedRoles);
        });
    };
    /**
     * Unshare this item
     */
    FileFolderShared.prototype.unshare = function () {
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.unshareObject();
        });
    };
    /**
     * Deletes a sharing link by the kind of link
     *
     * @param kind The kind of link to be deleted.
     */
    FileFolderShared.prototype.deleteSharingLinkByKind = function (kind) {
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.deleteLinkByKind(kind);
        });
    };
    /**
     * Removes the specified link to the item.
     *
     * @param kind The kind of link to be deleted.
     * @param shareId The share id to delete
     */
    FileFolderShared.prototype.unshareLink = function (kind, shareId) {
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.unshareLink(kind, shareId);
        });
    };
    /**
     * For files and folders we need to use the associated item end point
     */
    FileFolderShared.prototype.getShareable = function () {
        var _this = this;
        // sharing only works on the item end point, not the file one - so we create a folder instance with the item url internally
        return this.clone(SharePointQueryableShareableFile, "listItemAllFields", false).select("odata.id").get().then(function (d) {
            var shareable = new SharePointQueryableShareable(odataUrlFrom(d));
            // we need to handle batching
            if (_this.hasBatch) {
                shareable = shareable.inBatch(_this.batch);
            }
            return shareable;
        });
    };
    return FileFolderShared;
}(SharePointQueryableInstance));
var SharePointQueryableShareableFile = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SharePointQueryableShareableFile, _super);
    function SharePointQueryableShareableFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shares this item with one or more users
     *
     * @param loginNames string or string[] of resolved login names to which this item will be shared
     * @param role The role (View | Edit) applied to the share
     * @param shareEverything Share everything in this folder, even items with unique permissions.
     * @param requireSignin If true the user must signin to view link, otherwise anyone with the link can access the resource
     * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
     */
    SharePointQueryableShareableFile.prototype.shareWith = function (loginNames, role, requireSignin, emailData) {
        if (role === void 0) { role = SharingRole.View; }
        if (requireSignin === void 0) { requireSignin = false; }
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.shareWith(loginNames, role, requireSignin, false, emailData);
        });
    };
    return SharePointQueryableShareableFile;
}(FileFolderShared));
var SharePointQueryableShareableFolder = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SharePointQueryableShareableFolder, _super);
    function SharePointQueryableShareableFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shares this item with one or more users
     *
     * @param loginNames string or string[] of resolved login names to which this item will be shared
     * @param role The role (View | Edit) applied to the share
     * @param shareEverything Share everything in this folder, even items with unique permissions.
     * @param requireSignin If true the user must signin to view link, otherwise anyone with the link can access the resource
     * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
     */
    SharePointQueryableShareableFolder.prototype.shareWith = function (loginNames, role, requireSignin, shareEverything, emailData) {
        if (role === void 0) { role = SharingRole.View; }
        if (requireSignin === void 0) { requireSignin = false; }
        if (shareEverything === void 0) { shareEverything = false; }
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.shareWith(loginNames, role, requireSignin, shareEverything, emailData);
        });
    };
    return SharePointQueryableShareableFolder;
}(FileFolderShared));

var LimitedWebPartManager = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(LimitedWebPartManager, _super);
    function LimitedWebPartManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LimitedWebPartManager.prototype, "webparts", {
        /**
         * Gets the set of web part definitions contained by this web part manager
         *
         */
        get: function () {
            return new WebPartDefinitions(this, "webparts");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Exports a webpart definition
     *
     * @param id the GUID id of the definition to export
     */
    LimitedWebPartManager.prototype.export = function (id) {
        return this.clone(LimitedWebPartManager, "ExportWebPart").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({ webPartId: id }),
        });
    };
    /**
     * Imports a webpart
     *
     * @param xml webpart definition which must be valid XML in the .dwp or .webpart format
     */
    LimitedWebPartManager.prototype.import = function (xml) {
        return this.clone(LimitedWebPartManager, "ImportWebPart").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({ webPartXml: xml }),
        });
    };
    return LimitedWebPartManager;
}(SharePointQueryable));
var WebPartDefinitions = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(WebPartDefinitions, _super);
    function WebPartDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a web part definition from the collection by id
     *
     * @param id The storage ID of the SPWebPartDefinition to retrieve
     */
    WebPartDefinitions.prototype.getById = function (id) {
        return new WebPartDefinition(this, "getbyid('" + id + "')");
    };
    /**
     * Gets a web part definition from the collection by storage id
     *
     * @param id The WebPart.ID of the SPWebPartDefinition to retrieve
     */
    WebPartDefinitions.prototype.getByControlId = function (id) {
        return new WebPartDefinition(this, "getByControlId('" + id + "')");
    };
    return WebPartDefinitions;
}(SharePointQueryableCollection));
var WebPartDefinition = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(WebPartDefinition, _super);
    function WebPartDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WebPartDefinition.prototype, "webpart", {
        /**
         * Gets the webpart information associated with this definition
         */
        get: function () {
            return new WebPart(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Saves changes to the Web Part made using other properties and methods on the SPWebPartDefinition object
     */
    WebPartDefinition.prototype.saveChanges = function () {
        return this.clone(WebPartDefinition, "SaveWebPartChanges").postCore();
    };
    /**
     * Moves the Web Part to a different location on a Web Part Page
     *
     * @param zoneId The ID of the Web Part Zone to which to move the Web Part
     * @param zoneIndex A Web Part zone index that specifies the position at which the Web Part is to be moved within the destination Web Part zone
     */
    WebPartDefinition.prototype.moveTo = function (zoneId, zoneIndex) {
        return this.clone(WebPartDefinition, "MoveWebPartTo(zoneID='" + zoneId + "', zoneIndex=" + zoneIndex + ")").postCore();
    };
    /**
     * Closes the Web Part. If the Web Part is already closed, this method does nothing
     */
    WebPartDefinition.prototype.close = function () {
        return this.clone(WebPartDefinition, "CloseWebPart").postCore();
    };
    /**
     * Opens the Web Part. If the Web Part is already closed, this method does nothing
     */
    WebPartDefinition.prototype.open = function () {
        return this.clone(WebPartDefinition, "OpenWebPart").postCore();
    };
    /**
     * Removes a webpart from a page, all settings will be lost
     */
    WebPartDefinition.prototype.delete = function () {
        return this.clone(WebPartDefinition, "DeleteWebPart").postCore();
    };
    return WebPartDefinition;
}(SharePointQueryableInstance));
var WebPart = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(WebPart, _super);
    function WebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebPart = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("webpart")
    ], WebPart);
    return WebPart;
}(SharePointQueryableInstance));

/**
 * Describes a collection of Folder objects
 *
 */
var Folders = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Folders, _super);
    function Folders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Folders_1 = Folders;
    /**
     * Gets a folder by folder name
     *
     */
    Folders.prototype.getByName = function (name) {
        var f = new Folder(this);
        f.concat("('" + name + "')");
        return f;
    };
    /**
     * Adds a new folder to the current folder (relative) or any folder (absolute)
     *
     * @param url The relative or absolute url where the new folder will be created. Urls starting with a forward slash are absolute.
     * @returns The new Folder and the raw response.
     */
    Folders.prototype.add = function (url) {
        var _this = this;
        return this.clone(Folders_1, "add('" + url + "')").postCore().then(function (response) {
            return {
                data: response,
                folder: _this.getByName(url),
            };
        });
    };
    var Folders_1;
    Folders = Folders_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("folders")
    ], Folders);
    return Folders;
}(SharePointQueryableCollection));
/**
 * Describes a single Folder instance
 *
 */
var Folder = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Folder, _super);
    function Folder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.update = _this._update("SP.Folder", function (data) { return ({ data: data, folder: _this }); });
        return _this;
    }
    Object.defineProperty(Folder.prototype, "contentTypeOrder", {
        /**
         * Specifies the sequence in which content types are displayed.
         *
         */
        get: function () {
            return new SharePointQueryableCollection(this, "contentTypeOrder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "files", {
        /**
         * Gets this folder's files
         *
         */
        get: function () {
            return new Files(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "folders", {
        /**
         * Gets this folder's sub folders
         *
         */
        get: function () {
            return new Folders(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "listItemAllFields", {
        /**
         * Gets this folder's list item field values
         *
         */
        get: function () {
            return new SharePointQueryableInstance(this, "listItemAllFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "parentFolder", {
        /**
         * Gets the parent folder, if available
         *
         */
        get: function () {
            return new Folder(this, "parentFolder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "properties", {
        /**
         * Gets this folder's properties
         *
         */
        get: function () {
            return new SharePointQueryableInstance(this, "properties");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "serverRelativeUrl", {
        /**
         * Gets this folder's server relative url
         *
         */
        get: function () {
            return new SharePointQueryable(this, "serverRelativeUrl");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "uniqueContentTypeOrder", {
        /**
         * Gets a value that specifies the content type order.
         *
         */
        get: function () {
            return new SharePointQueryableCollection(this, "uniqueContentTypeOrder");
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Delete this folder
    *
    * @param eTag Value used in the IF-Match header, by default "*"
    */
    Folder.prototype.delete = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.clone(Folder, null).postCore({
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    Folder.prototype.recycle = function () {
        return this.clone(Folder, "recycle").postCore();
    };
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    Folder.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        var q = this.listItemAllFields;
        return q.select.apply(q, selects).get().then(function (d) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(new Item(odataUrlFrom(d)), d);
        });
    };
    /**
     * Moves a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    Folder.prototype.moveTo = function (destUrl) {
        var _this = this;
        return this.select("ServerRelativeUrl").get().then(function (_a) {
            var srcUrl = _a.ServerRelativeUrl;
            var client = new SPHttpClient();
            var webBaseUrl = _this.toUrl().split("/_api")[0];
            var hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
            var methodUrl = webBaseUrl + "/_api/SP.MoveCopyUtil.MoveFolder()";
            return client.post(methodUrl, {
                body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                    destUrl: destUrl.indexOf("http") === 0 ? destUrl : "" + hostUrl + destUrl,
                    srcUrl: "" + hostUrl + srcUrl,
                }),
            }).then(function (r) { return r.json(); });
        });
    };
    return Folder;
}(SharePointQueryableShareableFolder));

/**
 * Describes a collection of content types
 *
 */
var ContentTypes = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ContentTypes, _super);
    function ContentTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentTypes_1 = ContentTypes;
    /**
     * Adds an existing contenttype to a content type collection
     *
     * @param contentTypeId in the following format, for example: 0x010102
     */
    ContentTypes.prototype.addAvailableContentType = function (contentTypeId) {
        var _this = this;
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            "contentTypeId": contentTypeId,
        });
        return this.clone(ContentTypes_1, "addAvailableContentType").postCore({ body: postBody }).then(function (data) {
            return {
                contentType: _this.getById(data.id),
                data: data,
            };
        });
    };
    /**
     * Gets a ContentType by content type id
     */
    ContentTypes.prototype.getById = function (id) {
        var ct = new ContentType(this);
        ct.concat("('" + id + "')");
        return ct;
    };
    /**
     * Adds a new content type to the collection
     *
     * @param id The desired content type id for the new content type (also determines the parent content type)
     * @param name The name of the content type
     * @param description The description of the content type
     * @param group The group in which to add the content type
     * @param additionalSettings Any additional settings to provide when creating the content type
     *
     */
    ContentTypes.prototype.add = function (id, name, description, group, additionalSettings) {
        var _this = this;
        if (description === void 0) { description = ""; }
        if (group === void 0) { group = "Custom Content Types"; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object.assign(metadata("SP.ContentType"), {
            "Description": description,
            "Group": group,
            "Id": { "StringValue": id },
            "Name": name,
        }, additionalSettings));
        return this.postCore({ body: postBody }).then(function (data) {
            return { contentType: _this.getById(data.id), data: data };
        });
    };
    var ContentTypes_1;
    ContentTypes = ContentTypes_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("contenttypes")
    ], ContentTypes);
    return ContentTypes;
}(SharePointQueryableCollection));
/**
 * Describes a single ContentType instance
 *
 */
var ContentType = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ContentType, _super);
    function ContentType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Delete this content type
         */
        _this.delete = _this._delete;
        return _this;
    }
    Object.defineProperty(ContentType.prototype, "fieldLinks", {
        /**
         * Gets the column (also known as field) references in the content type.
        */
        get: function () {
            return new FieldLinks(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentType.prototype, "fields", {
        /**
         * Gets a value that specifies the collection of fields for the content type.
         */
        get: function () {
            return new SharePointQueryableCollection(this, "fields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentType.prototype, "parent", {
        /**
         * Gets the parent content type of the content type.
         */
        get: function () {
            return new ContentType(this, "parent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentType.prototype, "workflowAssociations", {
        /**
         * Gets a value that specifies the collection of workflow associations for the content type.
         */
        get: function () {
            return new SharePointQueryableCollection(this, "workflowAssociations");
        },
        enumerable: true,
        configurable: true
    });
    return ContentType;
}(SharePointQueryableInstance));
/**
 * Represents a collection of field link instances
 */
var FieldLinks = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(FieldLinks, _super);
    function FieldLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a FieldLink by GUID id
     *
     * @param id The GUID id of the field link
     */
    FieldLinks.prototype.getById = function (id) {
        var fl = new FieldLink(this);
        fl.concat("(guid'" + id + "')");
        return fl;
    };
    FieldLinks = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("fieldlinks")
    ], FieldLinks);
    return FieldLinks;
}(SharePointQueryableCollection));
/**
 * Represents a field link instance
 */
var FieldLink = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(FieldLink, _super);
    function FieldLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FieldLink;
}(SharePointQueryableInstance));

/**
 * Describes a collection of Item objects
 *
 */
var AttachmentFiles = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(AttachmentFiles, _super);
    function AttachmentFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AttachmentFiles_1 = AttachmentFiles;
    /**
     * Gets a Attachment File by filename
     *
     * @param name The name of the file, including extension.
     */
    AttachmentFiles.prototype.getByName = function (name) {
        var f = new AttachmentFile(this);
        f.concat("('" + name + "')");
        return f;
    };
    /**
     * Adds a new attachment to the collection. Not supported for batching.
     *
     * @param name The name of the file, including extension.
     * @param content The Base64 file content.
     */
    AttachmentFiles.prototype.add = function (name, content) {
        var _this = this;
        return this.clone(AttachmentFiles_1, "add(FileName='" + name + "')", false).postCore({
            body: content,
        }).then(function (response) {
            return {
                data: response,
                file: _this.getByName(name),
            };
        });
    };
    /**
     * Adds multiple new attachment to the collection. Not supported for batching.
     *
     * @files name The collection of files to add
     */
    AttachmentFiles.prototype.addMultiple = function (files) {
        var _this = this;
        // add the files in series so we don't get update conflicts
        return files.reduce(function (chain, file) { return chain.then(function () { return _this.clone(AttachmentFiles_1, "add(FileName='" + file.name + "')", false).postCore({
            body: file.content,
        }); }); }, Promise.resolve());
    };
    /**
     * Delete multiple attachments from the collection. Not supported for batching.
     *
     * @files name The collection of files to delete
     */
    AttachmentFiles.prototype.deleteMultiple = function () {
        var _this = this;
        var files = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            files[_i] = arguments[_i];
        }
        return files.reduce(function (chain, file) { return chain.then(function () { return _this.getByName(file).delete(); }); }, Promise.resolve());
    };
    var AttachmentFiles_1;
    AttachmentFiles = AttachmentFiles_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("AttachmentFiles")
    ], AttachmentFiles);
    return AttachmentFiles;
}(SharePointQueryableCollection));
/**
 * Describes a single attachment file instance
 *
 */
var AttachmentFile = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(AttachmentFile, _super);
    function AttachmentFile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = _this._deleteWithETag;
        return _this;
    }
    /**
     * Gets the contents of the file as text
     *
     */
    AttachmentFile.prototype.getText = function () {
        return this.getParsed(new __WEBPACK_IMPORTED_MODULE_3__pnp_odata__["TextParser"]());
    };
    /**
     * Gets the contents of the file as a blob, does not work in Node.js
     *
     */
    AttachmentFile.prototype.getBlob = function () {
        return this.getParsed(new __WEBPACK_IMPORTED_MODULE_3__pnp_odata__["BlobParser"]());
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    AttachmentFile.prototype.getBuffer = function () {
        return this.getParsed(new __WEBPACK_IMPORTED_MODULE_3__pnp_odata__["BufferParser"]());
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    AttachmentFile.prototype.getJSON = function () {
        return this.getParsed(new __WEBPACK_IMPORTED_MODULE_3__pnp_odata__["JSONParser"]());
    };
    /**
     * Sets the content of a file. Not supported for batching
     *
     * @param content The value to set for the file contents
     */
    AttachmentFile.prototype.setContent = function (content) {
        var _this = this;
        return this.clone(AttachmentFile, "$value", false).postCore({
            body: content,
            headers: {
                "X-HTTP-Method": "PUT",
            },
        }).then(function (_) { return new AttachmentFile(_this); });
    };
    // /**
    //  * Delete this attachment file
    //  *
    //  * @param eTag Value used in the IF-Match header, by default "*"
    //  */
    // public delete(eTag = "*"): Promise<void> {
    //     return this.postCore({
    //         headers: {
    //             "IF-Match": eTag,
    //             "X-HTTP-Method": "DELETE",
    //         },
    //     });
    // }
    AttachmentFile.prototype.getParsed = function (parser) {
        return this.clone(AttachmentFile, "$value", false).get(parser);
    };
    return AttachmentFile;
}(SharePointQueryableInstance));

/**
 * Describes the views available in the current context
 *
 */
var Views = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Views, _super);
    function Views() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Views_1 = Views;
    /**
     * Gets a view by guid id
     *
     * @param id The GUID id of the view
     */
    Views.prototype.getById = function (id) {
        var v = new View(this);
        v.concat("('" + id + "')");
        return v;
    };
    /**
     * Gets a view by title (case-sensitive)
     *
     * @param title The case-sensitive title of the view
     */
    Views.prototype.getByTitle = function (title) {
        return new View(this, "getByTitle('" + title + "')");
    };
    /**
     * Adds a new view to the collection
     *
     * @param title The new views's title
     * @param personalView True if this is a personal view, otherwise false, default = false
     * @param additionalSettings Will be passed as part of the view creation body
     */
    Views.prototype.add = function (title, personalView, additionalSettings) {
        var _this = this;
        if (personalView === void 0) { personalView = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object.assign(metadata("SP.View"), {
            "PersonalView": personalView,
            "Title": title,
        }, additionalSettings));
        return this.clone(Views_1, null).postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                view: _this.getById(data.Id),
            };
        });
    };
    var Views_1;
    Views = Views_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("views")
    ], Views);
    return Views;
}(SharePointQueryableCollection));
/**
 * Describes a single View instance
 *
 */
var View = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(View, _super);
    function View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Updates this view intance with the supplied properties
         *
         * @param properties A plain object hash of values to update for the view
         */
        _this.update = _this._update("SP.View", function (data) { return ({ data: data, view: _this }); });
        /**
         * Delete this view
         *
         */
        _this.delete = _this._delete;
        return _this;
    }
    Object.defineProperty(View.prototype, "fields", {
        get: function () {
            return new ViewFields(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the list view as HTML.
     *
     */
    View.prototype.renderAsHtml = function () {
        return this.clone(SharePointQueryable, "renderashtml").get();
    };
    return View;
}(SharePointQueryableInstance));
var ViewFields = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ViewFields, _super);
    function ViewFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewFields_1 = ViewFields;
    /**
     * Gets a value that specifies the XML schema that represents the collection.
     */
    ViewFields.prototype.getSchemaXml = function () {
        return this.clone(SharePointQueryable, "schemaxml").get();
    };
    /**
     * Adds the field with the specified field internal name or display name to the collection.
     *
     * @param fieldTitleOrInternalName The case-sensitive internal name or display name of the field to add.
     */
    ViewFields.prototype.add = function (fieldTitleOrInternalName) {
        return this.clone(ViewFields_1, "addviewfield('" + fieldTitleOrInternalName + "')").postCore();
    };
    /**
     * Moves the field with the specified field internal name to the specified position in the collection.
     *
     * @param fieldInternalName The case-sensitive internal name of the field to move.
     * @param index The zero-based index of the new position for the field.
     */
    ViewFields.prototype.move = function (fieldInternalName, index) {
        return this.clone(ViewFields_1, "moveviewfieldto").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({ "field": fieldInternalName, "index": index }),
        });
    };
    /**
     * Removes all the fields from the collection.
     */
    ViewFields.prototype.removeAll = function () {
        return this.clone(ViewFields_1, "removeallviewfields").postCore();
    };
    /**
     * Removes the field with the specified field internal name from the collection.
     *
     * @param fieldInternalName The case-sensitive internal name of the field to remove from the view.
     */
    ViewFields.prototype.remove = function (fieldInternalName) {
        return this.clone(ViewFields_1, "removeviewfield('" + fieldInternalName + "')").postCore();
    };
    var ViewFields_1;
    ViewFields = ViewFields_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("viewfields")
    ], ViewFields);
    return ViewFields;
}(SharePointQueryableCollection));

/**
 * Describes a collection of Field objects
 *
 */
var Fields = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Fields, _super);
    function Fields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fields_1 = Fields;
    /**
     * Gets a field from the collection by id
     *
     * @param id The Id of the list
     */
    Fields.prototype.getById = function (id) {
        var f = new Field(this);
        f.concat("('" + id + "')");
        return f;
    };
    /**
     * Gets a field from the collection by title
     *
     * @param title The case-sensitive title of the field
     */
    Fields.prototype.getByTitle = function (title) {
        return new Field(this, "getByTitle('" + title + "')");
    };
    /**
     * Gets a field from the collection by using internal name or title
     *
     * @param name The case-sensitive internal name or title of the field
     */
    Fields.prototype.getByInternalNameOrTitle = function (name) {
        return new Field(this, "getByInternalNameOrTitle('" + name + "')");
    };
    /**
     * Creates a field based on the specified schema
     */
    Fields.prototype.createFieldAsXml = function (xml) {
        var _this = this;
        var info;
        if (typeof xml === "string") {
            info = { SchemaXml: xml };
        }
        else {
            info = xml;
        }
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            "parameters": Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("SP.XmlSchemaFieldCreationInformation"), info),
        });
        return this.clone(Fields_1, "createfieldasxml").postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                field: _this.getById(data.Id),
            };
        });
    };
    /**
     * Adds a new field to the collection
     *
     * @param title The new field's title
     * @param fieldType The new field's type (ex: SP.FieldText)
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.add = function (title, fieldType, properties) {
        var _this = this;
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object.assign(metadata(fieldType), {
            "Title": title,
        }, properties));
        return this.clone(Fields_1, null).postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                field: _this.getById(data.Id),
            };
        });
    };
    /**
     * Adds a new SP.FieldText to the collection
     *
     * @param title The field title
     * @param maxLength The maximum number of characters allowed in the value of the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addText = function (title, maxLength, properties) {
        if (maxLength === void 0) { maxLength = 255; }
        var props = {
            FieldTypeKind: 2,
            MaxLength: maxLength,
        };
        return this.add(title, "SP.FieldText", Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(props, properties));
    };
    /**
     * Adds a new SP.FieldCalculated to the collection
     *
     * @param title The field title.
     * @param formula The formula for the field.
     * @param dateFormat The date and time format that is displayed in the field.
     * @param outputType Specifies the output format for the field. Represents a FieldType value.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addCalculated = function (title, formula, dateFormat, outputType, properties) {
        if (outputType === void 0) { outputType = FieldTypes.Text; }
        var props = {
            DateFormat: dateFormat,
            FieldTypeKind: 17,
            Formula: formula,
            OutputType: outputType,
        };
        return this.add(title, "SP.FieldCalculated", Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(props, properties));
    };
    /**
     * Adds a new SP.FieldDateTime to the collection
     *
     * @param title The field title
     * @param displayFormat The format of the date and time that is displayed in the field.
     * @param calendarType Specifies the calendar type of the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addDateTime = function (title, displayFormat, calendarType, friendlyDisplayFormat, properties) {
        if (displayFormat === void 0) { displayFormat = DateTimeFieldFormatType.DateOnly; }
        if (calendarType === void 0) { calendarType = CalendarType.Gregorian; }
        if (friendlyDisplayFormat === void 0) { friendlyDisplayFormat = 0; }
        var props = {
            DateTimeCalendarType: calendarType,
            DisplayFormat: displayFormat,
            FieldTypeKind: 4,
            FriendlyDisplayFormat: friendlyDisplayFormat,
        };
        return this.add(title, "SP.FieldDateTime", Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(props, properties));
    };
    /**
     * Adds a new SP.FieldNumber to the collection
     *
     * @param title The field title
     * @param minValue The field's minimum value
     * @param maxValue The field's maximum value
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addNumber = function (title, minValue, maxValue, properties) {
        var props = { FieldTypeKind: 9 };
        if (minValue !== undefined) {
            props = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({ MinimumValue: minValue }, props);
        }
        if (maxValue !== undefined) {
            props = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({ MaximumValue: maxValue }, props);
        }
        return this.add(title, "SP.FieldNumber", Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(props, properties));
    };
    /**
     * Adds a new SP.FieldCurrency to the collection
     *
     * @param title The field title
     * @param minValue The field's minimum value
     * @param maxValue The field's maximum value
     * @param currencyLocalId Specifies the language code identifier (LCID) used to format the value of the field
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addCurrency = function (title, minValue, maxValue, currencyLocalId, properties) {
        if (currencyLocalId === void 0) { currencyLocalId = 1033; }
        var props = {
            CurrencyLocaleId: currencyLocalId,
            FieldTypeKind: 10,
        };
        if (minValue !== undefined) {
            props = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({ MinimumValue: minValue }, props);
        }
        if (maxValue !== undefined) {
            props = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({ MaximumValue: maxValue }, props);
        }
        return this.add(title, "SP.FieldCurrency", Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(props, properties));
    };
    /**
     * Adds a new SP.FieldMultiLineText to the collection
     *
     * @param title The field title
     * @param numberOfLines Specifies the number of lines of text to display for the field.
     * @param richText Specifies whether the field supports rich formatting.
     * @param restrictedMode Specifies whether the field supports a subset of rich formatting.
     * @param appendOnly Specifies whether all changes to the value of the field are displayed in list forms.
     * @param allowHyperlink Specifies whether a hyperlink is allowed as a value of the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     *
     */
    Fields.prototype.addMultilineText = function (title, numberOfLines, richText, restrictedMode, appendOnly, allowHyperlink, properties) {
        if (numberOfLines === void 0) { numberOfLines = 6; }
        if (richText === void 0) { richText = true; }
        if (restrictedMode === void 0) { restrictedMode = false; }
        if (appendOnly === void 0) { appendOnly = false; }
        if (allowHyperlink === void 0) { allowHyperlink = true; }
        var props = {
            AllowHyperlink: allowHyperlink,
            AppendOnly: appendOnly,
            FieldTypeKind: 3,
            NumberOfLines: numberOfLines,
            RestrictedMode: restrictedMode,
            RichText: richText,
        };
        return this.add(title, "SP.FieldMultiLineText", Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(props, properties));
    };
    /**
     * Adds a new SP.FieldUrl to the collection
     *
     * @param title The field title
     */
    Fields.prototype.addUrl = function (title, displayFormat, properties) {
        if (displayFormat === void 0) { displayFormat = UrlFieldFormatType.Hyperlink; }
        var props = {
            DisplayFormat: displayFormat,
            FieldTypeKind: 11,
        };
        return this.add(title, "SP.FieldUrl", Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(props, properties));
    };
    /** Adds a user field to the colleciton
    *
    * @param title The new field's title
    * @param selectionMode The selection mode of the field
    * @param selectionGroup Value that specifies the identifier of the SharePoint group whose members can be selected as values of the field
    * @param properties
    */
    Fields.prototype.addUser = function (title, selectionMode, properties) {
        var props = {
            FieldTypeKind: 20,
            SelectionMode: selectionMode,
        };
        return this.add(title, "SP.FieldUser", Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(props, properties));
    };
    /**
     * Adds a SP.FieldLookup to the collection
     *
     * @param title The new field's title
     * @param lookupListId The guid id of the list where the source of the lookup is found
     * @param lookupFieldName The internal name of the field in the source list
     * @param properties Set of additional properties to set on the new field
     */
    Fields.prototype.addLookup = function (title, lookupListId, lookupFieldName, properties) {
        var _this = this;
        var props = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({
            FieldTypeKind: 7,
            LookupFieldName: lookupFieldName,
            LookupListId: lookupListId,
            Title: title,
        }, properties);
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            "parameters": Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("SP.FieldCreationInformation"), props),
        });
        return this.clone(Fields_1, "addfield").postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                field: _this.getById(data.Id),
            };
        });
    };
    /**
     * Adds a new SP.FieldChoice to the collection
     *
     * @param title The field title.
     * @param choices The choices for the field.
     * @param format The display format of the available options for the field.
     * @param fillIn Specifies whether the field allows fill-in values.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addChoice = function (title, choices, format, fillIn, properties) {
        if (format === void 0) { format = ChoiceFieldFormatType.Dropdown; }
        var props = {
            Choices: {
                results: choices,
            },
            EditFormat: format,
            FieldTypeKind: 6,
            FillInChoice: fillIn,
        };
        return this.add(title, "SP.FieldChoice", Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(props, properties));
    };
    /**
     * Adds a new SP.FieldMultiChoice to the collection
     *
     * @param title The field title.
     * @param choices The choices for the field.
     * @param fillIn Specifies whether the field allows fill-in values.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addMultiChoice = function (title, choices, fillIn, properties) {
        var props = {
            Choices: {
                results: choices,
            },
            FieldTypeKind: 15,
            FillInChoice: fillIn,
        };
        return this.add(title, "SP.FieldMultiChoice", Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(props, properties));
    };
    /**
     * Adds a new SP.FieldBoolean to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addBoolean = function (title, properties) {
        var props = {
            FieldTypeKind: 8,
        };
        return this.add(title, "SP.Field", Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(props, properties));
    };
    var Fields_1;
    Fields = Fields_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("fields")
    ], Fields);
    return Fields;
}(SharePointQueryableCollection));
/**
 * Describes a single of Field instance
 *
 */
var Field = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Field, _super);
    function Field() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Delete this fields
         *
         */
        _this.delete = _this._delete;
        return _this;
    }
    /**
     * Updates this field intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param fieldType The type value, required to update child field type properties
     */
    Field.prototype.update = function (properties, fieldType) {
        var _this = this;
        if (fieldType === void 0) { fieldType = "SP.Field"; }
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata(fieldType), properties));
        return this.postCore({
            body: postBody,
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            return {
                data: data,
                field: _this,
            };
        });
    };
    /**
     * Sets the value of the ShowInDisplayForm property for this field.
     */
    Field.prototype.setShowInDisplayForm = function (show) {
        return this.clone(Field, "setshowindisplayform(" + show + ")").postCore();
    };
    /**
     * Sets the value of the ShowInEditForm property for this field.
     */
    Field.prototype.setShowInEditForm = function (show) {
        return this.clone(Field, "setshowineditform(" + show + ")").postCore();
    };
    /**
     * Sets the value of the ShowInNewForm property for this field.
     */
    Field.prototype.setShowInNewForm = function (show) {
        return this.clone(Field, "setshowinnewform(" + show + ")").postCore();
    };
    return Field;
}(SharePointQueryableInstance));

/**
 * Describes a collection of Field objects
 *
 */
var Forms = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Forms, _super);
    function Forms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a form by id
     *
     * @param id The guid id of the item to retrieve
     */
    Forms.prototype.getById = function (id) {
        var i = new Form(this);
        i.concat("('" + id + "')");
        return i;
    };
    Forms = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("forms")
    ], Forms);
    return Forms;
}(SharePointQueryableCollection));
/**
 * Describes a single of Form instance
 *
 */
var Form = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Form, _super);
    function Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Form;
}(SharePointQueryableInstance));

/**
 * Describes a collection of webhook subscriptions
 *
 */
var Subscriptions = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Subscriptions, _super);
    function Subscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns all the webhook subscriptions or the specified webhook subscription
     *
     * @param subscriptionId The id of a specific webhook subscription to retrieve, omit to retrieve all the webhook subscriptions
     */
    Subscriptions.prototype.getById = function (subscriptionId) {
        var s = new Subscription(this);
        s.concat("('" + subscriptionId + "')");
        return s;
    };
    /**
     * Creates a new webhook subscription
     *
     * @param notificationUrl The url to receive the notifications
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
     * @param clientState A client specific string (defaults to pnp-js-core-subscription when omitted)
     */
    Subscriptions.prototype.add = function (notificationUrl, expirationDate, clientState) {
        var _this = this;
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            "clientState": clientState || "pnp-js-core-subscription",
            "expirationDateTime": expirationDate,
            "notificationUrl": notificationUrl,
            "resource": this.toUrl(),
        });
        return this.postCore({ body: postBody, headers: { "Content-Type": "application/json" } }).then(function (result) {
            return { data: result, subscription: _this.getById(result.id) };
        });
    };
    Subscriptions = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("subscriptions")
    ], Subscriptions);
    return Subscriptions;
}(SharePointQueryableCollection));
/**
 * Describes a single webhook subscription instance
 *
 */
var Subscription = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Subscription, _super);
    function Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renews this webhook subscription
     *
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
     */
    Subscription.prototype.update = function (expirationDate) {
        var _this = this;
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            "expirationDateTime": expirationDate,
        });
        return this.patchCore({ body: postBody, headers: { "Content-Type": "application/json" } }).then(function (data) {
            return { data: data, subscription: _this };
        });
    };
    /**
     * Removes this webhook subscription
     *
     */
    Subscription.prototype.delete = function () {
        return _super.prototype.deleteCore.call(this);
    };
    return Subscription;
}(SharePointQueryableInstance));

/**
 * Describes a collection of user custom actions
 *
 */
var UserCustomActions = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(UserCustomActions, _super);
    function UserCustomActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserCustomActions_1 = UserCustomActions;
    /**
     * Returns the user custom action with the specified id
     *
     * @param id The GUID id of the user custom action to retrieve
     */
    UserCustomActions.prototype.getById = function (id) {
        var uca = new UserCustomAction(this);
        uca.concat("('" + id + "')");
        return uca;
    };
    /**
     * Creates a user custom action
     *
     * @param properties The information object of property names and values which define the new user custom action
     *
     */
    UserCustomActions.prototype.add = function (properties) {
        var _this = this;
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({ __metadata: { "type": "SP.UserCustomAction" } }, properties));
        return this.postCore({ body: postBody }).then(function (data) {
            return {
                action: _this.getById(data.Id),
                data: data,
            };
        });
    };
    /**
     * Deletes all user custom actions in the collection
     *
     */
    UserCustomActions.prototype.clear = function () {
        return this.clone(UserCustomActions_1, "clear").postCore();
    };
    var UserCustomActions_1;
    UserCustomActions = UserCustomActions_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("usercustomactions")
    ], UserCustomActions);
    return UserCustomActions;
}(SharePointQueryableCollection));
/**
 * Describes a single user custom action
 *
 */
var UserCustomAction = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(UserCustomAction, _super);
    function UserCustomAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
        * Updates this user custom action with the supplied properties
        *
        * @param properties An information object of property names and values to update for this user custom action
        */
        _this.update = _this._update("SP.UserCustomAction", function (data) { return ({ data: data, action: _this }); });
        return _this;
    }
    /**
    * Removes this user custom action
    *
    */
    UserCustomAction.prototype.delete = function () {
        return _super.prototype.deleteCore.call(this);
    };
    return UserCustomAction;
}(SharePointQueryableInstance));

/**
 * Describes a collection of List objects
 *
 */
var Lists = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Lists, _super);
    function Lists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lists_1 = Lists;
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    Lists.prototype.getById = function (id) {
        var list = new List(this);
        list.concat("('" + id + "')");
        return list;
    };
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    Lists.prototype.getByTitle = function (title) {
        return new List(this, "getByTitle('" + title + "')");
    };
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    Lists.prototype.add = function (title, description, template, enableContentTypes, additionalSettings) {
        var _this = this;
        if (description === void 0) { description = ""; }
        if (template === void 0) { template = 100; }
        if (enableContentTypes === void 0) { enableContentTypes = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        var addSettings = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({
            "AllowContentTypes": enableContentTypes,
            "BaseTemplate": template,
            "ContentTypesEnabled": enableContentTypes,
            "Description": description,
            "Title": title,
            "__metadata": { "type": "SP.List" },
        }, additionalSettings);
        return this.postCore({ body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(addSettings) }).then(function (data) {
            return { data: data, list: _this.getByTitle(addSettings.Title) };
        });
    };
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    Lists.prototype.ensure = function (title, description, template, enableContentTypes, additionalSettings) {
        var _this = this;
        if (description === void 0) { description = ""; }
        if (template === void 0) { template = 100; }
        if (enableContentTypes === void 0) { enableContentTypes = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        if (this.hasBatch) {
            throw Error("The ensure list method is not supported for use in a batch.");
        }
        return new Promise(function (resolve, reject) {
            var addOrUpdateSettings = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(additionalSettings, { Title: title, Description: description, ContentTypesEnabled: enableContentTypes }, true);
            var list = _this.getByTitle(addOrUpdateSettings.Title);
            list.get().then(function (_) {
                list.update(addOrUpdateSettings).then(function (d) {
                    resolve({ created: false, data: d, list: _this.getByTitle(addOrUpdateSettings.Title) });
                }).catch(function (e) { return reject(e); });
            }).catch(function (_) {
                _this.add(title, description, template, enableContentTypes, addOrUpdateSettings).then(function (r) {
                    resolve({ created: true, data: r.data, list: _this.getByTitle(addOrUpdateSettings.Title) });
                }).catch(function (e) { return reject(e); });
            });
        });
    };
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    Lists.prototype.ensureSiteAssetsLibrary = function () {
        return this.clone(Lists_1, "ensuresiteassetslibrary").postCore().then(function (json) {
            return new List(odataUrlFrom(json));
        });
    };
    /**
     * Gets a list that is the default location for wiki pages.
     */
    Lists.prototype.ensureSitePagesLibrary = function () {
        return this.clone(Lists_1, "ensuresitepageslibrary").postCore().then(function (json) {
            return new List(odataUrlFrom(json));
        });
    };
    var Lists_1;
    Lists = Lists_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("lists")
    ], Lists);
    return Lists;
}(SharePointQueryableCollection));
/**
 * Describes a single List instance
 *
 */
var List = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(List.prototype, "contentTypes", {
        /**
         * Gets the content types in this list
         *
         */
        get: function () {
            return new ContentTypes(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "items", {
        /**
         * Gets the items in this list
         *
         */
        get: function () {
            return new Items(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "views", {
        /**
         * Gets the views in this list
         *
         */
        get: function () {
            return new Views(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "fields", {
        /**
         * Gets the fields in this list
         *
         */
        get: function () {
            return new Fields(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "forms", {
        /**
         * Gets the forms in this list
         *
         */
        get: function () {
            return new Forms(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "defaultView", {
        /**
         * Gets the default view of this list
         *
         */
        get: function () {
            return new View(this, "DefaultView");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "userCustomActions", {
        /**
         * Get all custom actions on a site collection
         *
         */
        get: function () {
            return new UserCustomActions(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions of this list
         *
         */
        get: function () {
            return new SharePointQueryable(this, "EffectiveBasePermissions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "eventReceivers", {
        /**
         * Gets the event receivers attached to this list
         *
         */
        get: function () {
            return new SharePointQueryableCollection(this, "EventReceivers");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "relatedFields", {
        /**
         * Gets the related fields of this list
         *
         */
        get: function () {
            return new SharePointQueryable(this, "getRelatedFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "informationRightsManagementSettings", {
        /**
         * Gets the IRM settings for this list
         *
         */
        get: function () {
            return new SharePointQueryable(this, "InformationRightsManagementSettings");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "subscriptions", {
        /**
         * Gets the webhook subscriptions of this list
         *
         */
        get: function () {
            return new Subscriptions(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "rootFolder", {
        /**
         * The root folder of the list
         */
        get: function () {
            return new Folder(this, "rootFolder");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a view by view guid id
     *
     */
    List.prototype.getView = function (viewId) {
        return new View(this, "getView('" + viewId + "')");
    };
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    /* tslint:disable no-string-literal */
    List.prototype.update = function (properties, eTag) {
        var _this = this;
        if (eTag === void 0) { eTag = "*"; }
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({
            "__metadata": { "type": "SP.List" },
        }, properties));
        return this.postCore({
            body: postBody,
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            var retList = _this;
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(properties, "Title")) {
                retList = _this.getParent(List, _this.parentUrl, "getByTitle('" + properties["Title"] + "')");
            }
            return {
                data: data,
                list: retList,
            };
        });
    };
    /* tslint:enable */
    /**
     * Delete this list
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    List.prototype.delete = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.postCore({
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     */
    List.prototype.getChanges = function (query) {
        return this.clone(List, "getchanges").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({ "query": Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({ "__metadata": { "type": "SP.ChangeQuery" } }, query) }),
        });
    };
    /**
     * Returns a collection of items from the list based on the specified query.
     *
     * @param CamlQuery The Query schema of Collaborative Application Markup
     * Language (CAML) is used in various ways within the context of Microsoft SharePoint Foundation
     * to define queries against list data.
     * see:
     *
     * https://msdn.microsoft.com/en-us/library/office/ms467521.aspx
     *
     * @param expands A URI with a $expand System Query Option indicates that Entries associated with
     * the Entry or Collection of Entries identified by the Resource Path
     * section of the URI must be represented inline (i.e. eagerly loaded).
     * see:
     *
     * https://msdn.microsoft.com/en-us/library/office/fp142385.aspx
     *
     * http://www.odata.org/documentation/odata-version-2-0/uri-conventions/#ExpandSystemQueryOption
     */
    List.prototype.getItemsByCAMLQuery = function (query) {
        var expands = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            expands[_i - 1] = arguments[_i];
        }
        var q = this.clone(List, "getitems");
        return q.expand.apply(q, expands).postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({ "query": Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({ "__metadata": { "type": "SP.CamlQuery" } }, query) }),
        });
    };
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     */
    List.prototype.getListItemChangesSinceToken = function (query) {
        return this.clone(List, "getlistitemchangessincetoken").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({ "query": Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({ "__metadata": { "type": "SP.ChangeLogItemQuery" } }, query) }),
        }, { parse: function (r) { return r.text(); } });
    };
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    List.prototype.recycle = function () {
        return this.clone(List, "recycle").postCore().then(function (data) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(data, "Recycle")) {
                return data.Recycle;
            }
            else {
                return data;
            }
        });
    };
    /**
     * Renders list data based on the view xml provided
     */
    List.prototype.renderListData = function (viewXml) {
        var q = this.clone(List, "renderlistdata(@viewXml)");
        q.query.set("@viewXml", "'" + viewXml + "'");
        return q.postCore().then(function (data) {
            // data will be a string, so we parse it again
            return JSON.parse(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(data, "RenderListData") ? data.RenderListData : data);
        });
    };
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParameters The parameters that are used to override and extend the regular SPRenderListDataParameters.
     */
    List.prototype.renderListDataAsStream = function (parameters, overrideParameters) {
        if (overrideParameters === void 0) { overrideParameters = null; }
        var postBody = {
            overrideParameters: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("SP.RenderListDataOverrideParameters"), overrideParameters),
            parameters: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("SP.RenderListDataParameters"), parameters),
        };
        return this.clone(List, "RenderListDataAsStream", true).postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(postBody),
        });
    };
    /**
     * Gets the field values and field schema attributes for a list item.
     */
    List.prototype.renderListFormData = function (itemId, formId, mode) {
        return this.clone(List, "renderlistformdata(itemid=" + itemId + ", formid='" + formId + "', mode='" + mode + "')").postCore().then(function (data) {
            // data will be a string, so we parse it again
            return JSON.parse(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(data, "RenderListFormData") ? data.RenderListFormData : data);
        });
    };
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    List.prototype.reserveListItemId = function () {
        return this.clone(List, "reservelistitemid").postCore().then(function (data) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(data, "ReserveListItemId")) {
                return data.ReserveListItemId;
            }
            else {
                return data;
            }
        });
    };
    /**
     * Returns the ListItemEntityTypeFullName for this list, used when adding/updating list items. Does not support batching.
     *
     */
    List.prototype.getListItemEntityTypeFullName = function () {
        return this.clone(List, null, false).select("ListItemEntityTypeFullName").get().then(function (o) { return o.ListItemEntityTypeFullName; });
    };
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     */
    List.prototype.addValidateUpdateItemUsingPath = function (formValues, decodedUrl, bNewDocumentUpdate, checkInComment) {
        if (bNewDocumentUpdate === void 0) { bNewDocumentUpdate = false; }
        return this.clone(List, "AddValidateUpdateItemUsingPath()").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                bNewDocumentUpdate: bNewDocumentUpdate,
                checkInComment: checkInComment,
                formValues: formValues,
                listItemCreateInfo: {
                    FolderPath: {
                        DecodedUrl: decodedUrl,
                        __metadata: { type: "SP.ResourcePath" },
                    },
                    __metadata: { type: "SP.ListItemCreationInformationUsingPath" },
                },
            }),
        }).then(function (res) {
            if (typeof res.AddValidateUpdateItemUsingPath !== "undefined") {
                return res.AddValidateUpdateItemUsingPath.results;
            }
            return res;
        });
    };
    return List;
}(SharePointQueryableSecurable));

/**
 * Represents a Collection of comments
 */
var Comments = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Comments, _super);
    function Comments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Comments_1 = Comments;
    /**
     * Adds a new comment to this collection
     *
     * @param info Comment information to add
     */
    Comments.prototype.add = function (info) {
        var _this = this;
        if (typeof info === "string") {
            info = { text: info };
        }
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("Microsoft.SharePoint.Comments.comment"), info));
        return this.clone(Comments_1, null).postCore({ body: postBody }).then(function (d) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(_this.getById(d.id), d);
        });
    };
    /**
     * Gets a comment by id
     *
     * @param id Id of the comment to load
     */
    Comments.prototype.getById = function (id) {
        var c = new Comment(this);
        c.concat("(" + id + ")");
        return c;
    };
    /**
     * Deletes all the comments in this collection
     */
    Comments.prototype.clear = function () {
        return this.clone(Comments_1, "DeleteAll").postCore();
    };
    var Comments_1;
    Comments = Comments_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("comments")
    ], Comments);
    return Comments;
}(SharePointQueryableCollection));
/**
 * Represents a comment
 */
var Comment = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Comment.prototype, "replies", {
        get: function () {
            return new Replies(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Likes the comment as the current user
     */
    Comment.prototype.like = function () {
        return this.clone(Comment, "Like").postCore();
    };
    /**
     * Unlikes the comment as the current user
     */
    Comment.prototype.unlike = function () {
        return this.clone(Comment, "Unlike").postCore();
    };
    /**
     * Deletes this comment
     */
    Comment.prototype.delete = function () {
        return this.clone(Comment, "DeleteComment").postCore();
    };
    return Comment;
}(SharePointQueryableInstance));
/**
 * Represents a Collection of comments
 */
var Replies = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Replies, _super);
    function Replies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Replies_1 = Replies;
    /**
     * Adds a new reply to this collection
     *
     * @param info Comment information to add
     */
    Replies.prototype.add = function (info) {
        if (typeof info === "string") {
            info = { text: info };
        }
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("Microsoft.SharePoint.Comments.comment"), info));
        return this.clone(Replies_1, null).postCore({ body: postBody }).then(function (d) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(new Comment(odataUrlFrom(d)), d);
        });
    };
    var Replies_1;
    Replies = Replies_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("replies")
    ], Replies);
    return Replies;
}(SharePointQueryableCollection));

/**
 * Describes a collection of Item objects
 *
 */
var Items = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Items, _super);
    function Items() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Items_1 = Items;
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    Items.prototype.getById = function (id) {
        var i = new Item(this);
        i.concat("(" + id + ")");
        return i;
    };
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    Items.prototype.getItemByStringId = function (stringId) {
        // creates an item with the parent list path and append out method call
        return new Item(this.parentUrl, "getItemByStringId('" + stringId + "')");
    };
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    Items.prototype.skip = function (skip, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (reverse) {
            this.query.set("$skiptoken", encodeURIComponent("Paged=TRUE&PagedPrev=TRUE&p_ID=" + skip));
        }
        else {
            this.query.set("$skiptoken", encodeURIComponent("Paged=TRUE&p_ID=" + skip));
        }
        return this;
    };
    /**
     * Gets a collection designed to aid in paging through data
     *
     */
    Items.prototype.getPaged = function () {
        return this.get(new PagedItemCollectionParser(this));
    };
    /**
     * Gets all the items in a list, regardless of count. Does not support batching or caching
     *
     *  @param requestSize Number of items to return in each request (Default: 2000)
     *  @param acceptHeader Allows for setting the value of the Accept header for SP 2013 support
     */
    Items.prototype.getAll = function (requestSize, acceptHeader) {
        if (requestSize === void 0) { requestSize = 2000; }
        if (acceptHeader === void 0) { acceptHeader = "application/json;odata=nometadata"; }
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("Calling items.getAll should be done sparingly. Ensure this is the correct choice. If you are unsure, it is not.", 2 /* Warning */);
        // this will be used for the actual query
        // and we set no metadata here to try and reduce traffic
        var items = new Items_1(this, "").top(requestSize).configure({
            headers: {
                "Accept": acceptHeader,
            },
        });
        // let's copy over the odata query params that can be applied
        // $top - allow setting the page size this way (override what we did above)
        // $select - allow picking the return fields (good behavior)
        // $filter - allow setting a filter, though this may fail due for large lists
        this.query.forEach(function (v, k) {
            if (/^\$select|filter|top|expand$/i.test(k)) {
                items.query.set(k, v);
            }
        });
        // give back the promise
        return new Promise(function (resolve, reject) {
            // this will eventually hold the items we return
            var itemsCollector = [];
            // action that will gather up our results recursively
            var gatherer = function (last) {
                // collect that set of results
                [].push.apply(itemsCollector, last.results);
                // if we have more, repeat - otherwise resolve with the collected items
                if (last.hasNext) {
                    last.getNext().then(gatherer).catch(reject);
                }
                else {
                    resolve(itemsCollector);
                }
            };
            // start the cycle
            items.getPaged().then(gatherer).catch(reject);
        });
    };
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    Items.prototype.add = function (properties, listItemEntityTypeFullName) {
        var _this = this;
        if (properties === void 0) { properties = {}; }
        if (listItemEntityTypeFullName === void 0) { listItemEntityTypeFullName = null; }
        var removeDependency = this.addBatchDependency();
        return this.ensureListItemEntityTypeName(listItemEntityTypeFullName).then(function (listItemEntityType) {
            var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata(listItemEntityType), properties));
            var promise = _this.clone(Items_1, "").postCore({ body: postBody }).then(function (data) {
                return {
                    data: data,
                    item: _this.getById(data.Id),
                };
            });
            removeDependency();
            return promise;
        });
    };
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    Items.prototype.ensureListItemEntityTypeName = function (candidatelistItemEntityTypeFullName) {
        return candidatelistItemEntityTypeFullName ?
            Promise.resolve(candidatelistItemEntityTypeFullName) :
            this.getParent(List).getListItemEntityTypeFullName();
    };
    var Items_1;
    Items = Items_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("items")
    ], Items);
    return Items;
}(SharePointQueryableCollection));
/**
 * Descrines a single Item instance
 *
 */
var Item = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Delete this item
         *
         * @param eTag Value used in the IF-Match header, by default "*"
         */
        _this.delete = _this._deleteWithETag;
        return _this;
    }
    Object.defineProperty(Item.prototype, "attachmentFiles", {
        /**
         * Gets the set of attachments for this item
         *
         */
        get: function () {
            return new AttachmentFiles(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "contentType", {
        /**
         * Gets the content type for this item
         *
         */
        get: function () {
            return new ContentType(this, "ContentType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "comments", {
        /**
         * Gets the collection of comments associated with this list item
         */
        get: function () {
            return new Comments(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions for the item
         *
         */
        get: function () {
            return new SharePointQueryable(this, "EffectiveBasePermissions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "effectiveBasePermissionsForUI", {
        /**
         * Gets the effective base permissions for the item in a UI context
         *
         */
        get: function () {
            return new SharePointQueryable(this, "EffectiveBasePermissionsForUI");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "fieldValuesAsHTML", {
        /**
         * Gets the field values for this list item in their HTML representation
         *
         */
        get: function () {
            return new SharePointQueryableInstance(this, "FieldValuesAsHTML");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "fieldValuesAsText", {
        /**
         * Gets the field values for this list item in their text representation
         *
         */
        get: function () {
            return new SharePointQueryableInstance(this, "FieldValuesAsText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "fieldValuesForEdit", {
        /**
         * Gets the field values for this list item for use in editing controls
         *
         */
        get: function () {
            return new SharePointQueryableInstance(this, "FieldValuesForEdit");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "folder", {
        /**
         * Gets the folder associated with this list item (if this item represents a folder)
         *
         */
        get: function () {
            return new Folder(this, "folder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "file", {
        /**
         * Gets the folder associated with this list item (if this item represents a folder)
         *
         */
        get: function () {
            return new File(this, "file");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "versions", {
        /**
         * Gets the collection of versions associated with this item
         */
        get: function () {
            return new ItemVersions(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    Item.prototype.update = function (properties, eTag, listItemEntityTypeFullName) {
        var _this = this;
        if (eTag === void 0) { eTag = "*"; }
        if (listItemEntityTypeFullName === void 0) { listItemEntityTypeFullName = null; }
        return new Promise(function (resolve, reject) {
            var removeDependency = _this.addBatchDependency();
            return _this.ensureListItemEntityTypeName(listItemEntityTypeFullName).then(function (listItemEntityType) {
                var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata(listItemEntityType), properties));
                removeDependency();
                return _this.postCore({
                    body: postBody,
                    headers: {
                        "IF-Match": eTag,
                        "X-HTTP-Method": "MERGE",
                    },
                }, new ItemUpdatedParser()).then(function (data) {
                    resolve({
                        data: data,
                        item: _this,
                    });
                });
            }).catch(function (e) { return reject(e); });
        });
    };
    /**
     * Gets the collection of people who have liked this item
     */
    Item.prototype.getLikedBy = function () {
        return this.clone(Item, "likedBy").postCore();
    };
    /**
     * Likes this item as the current user
     */
    Item.prototype.like = function () {
        return this.clone(Item, "like").postCore();
    };
    /**
     * Unlikes this item as the current user
     */
    Item.prototype.unlike = function () {
        return this.clone(Item, "unlike").postCore();
    };
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    Item.prototype.recycle = function () {
        return this.clone(Item, "recycle").postCore();
    };
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    Item.prototype.getWopiFrameUrl = function (action) {
        if (action === void 0) { action = 0; }
        var i = this.clone(Item, "getWOPIFrameUrl(@action)");
        i.query.set("@action", action);
        return i.postCore().then(function (data) {
            // handle verbose mode
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(data, "GetWOPIFrameUrl")) {
                return data.GetWOPIFrameUrl;
            }
            return data;
        });
    };
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param newDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    Item.prototype.validateUpdateListItem = function (formValues, newDocumentUpdate) {
        if (newDocumentUpdate === void 0) { newDocumentUpdate = false; }
        return this.clone(Item, "validateupdatelistitem").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({ "formValues": formValues, bNewDocumentUpdate: newDocumentUpdate }),
        });
    };
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    Item.prototype.ensureListItemEntityTypeName = function (candidatelistItemEntityTypeFullName) {
        return candidatelistItemEntityTypeFullName ?
            Promise.resolve(candidatelistItemEntityTypeFullName) :
            this.getParent(List, this.parentUrl.substr(0, this.parentUrl.lastIndexOf("/"))).getListItemEntityTypeFullName();
    };
    return Item;
}(SharePointQueryableShareableItem));
/**
 * Describes a collection of Version objects
 *
 */
var ItemVersions = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ItemVersions, _super);
    function ItemVersions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    ItemVersions.prototype.getById = function (versionId) {
        var v = new ItemVersion(this);
        v.concat("(" + versionId + ")");
        return v;
    };
    ItemVersions = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("versions")
    ], ItemVersions);
    return ItemVersions;
}(SharePointQueryableCollection));
/**
 * Describes a single Version instance
 *
 */
var ItemVersion = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ItemVersion, _super);
    function ItemVersion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
        * Delete a specific version of a file.
        *
        * @param eTag Value used in the IF-Match header, by default "*"
        */
        _this.delete = _this._deleteWithETag;
        return _this;
    }
    return ItemVersion;
}(SharePointQueryableInstance));
/**
 * Provides paging functionality for list items
 */
var PagedItemCollection = /** @class */ (function () {
    function PagedItemCollection(parent, nextUrl, results) {
        this.parent = parent;
        this.nextUrl = nextUrl;
        this.results = results;
    }
    Object.defineProperty(PagedItemCollection.prototype, "hasNext", {
        /**
         * If true there are more results available in the set, otherwise there are not
         */
        get: function () {
            return typeof this.nextUrl === "string" && this.nextUrl.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the next set of results, or resolves to null if no results are available
     */
    PagedItemCollection.prototype.getNext = function () {
        if (this.hasNext) {
            var items = new Items(this.nextUrl, null).configureFrom(this.parent);
            return items.getPaged();
        }
        return new Promise(function (r) { return r(null); });
    };
    return PagedItemCollection;
}());
var PagedItemCollectionParser = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(PagedItemCollectionParser, _super);
    function PagedItemCollectionParser(_parent) {
        var _this = _super.call(this) || this;
        _this._parent = _parent;
        return _this;
    }
    PagedItemCollectionParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                r.json().then(function (json) {
                    var nextUrl = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(json, "d") && Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(json.d, "__next") ? json.d.__next : json["odata.nextLink"];
                    resolve(new PagedItemCollection(_this._parent, nextUrl, _this.parseODataJSON(json)));
                });
            }
        });
    };
    return PagedItemCollectionParser;
}(__WEBPACK_IMPORTED_MODULE_3__pnp_odata__["ODataParserBase"]));
var ItemUpdatedParser = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ItemUpdatedParser, _super);
    function ItemUpdatedParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemUpdatedParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                resolve({
                    "odata.etag": r.headers.get("etag"),
                });
            }
        });
    };
    return ItemUpdatedParser;
}(__WEBPACK_IMPORTED_MODULE_3__pnp_odata__["ODataParserBase"]));

/**
 * Describes a collection of File objects
 *
 */
var Files = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Files, _super);
    function Files() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Files_1 = Files;
    /**
     * Gets a File by filename
     *
     * @param name The name of the file, including extension.
     */
    Files.prototype.getByName = function (name) {
        var f = new File(this);
        f.concat("('" + name + "')");
        return f;
    };
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The file contents blob.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
     * @returns The new File and the raw response.
     */
    Files.prototype.add = function (url, content, shouldOverWrite) {
        var _this = this;
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return new Files_1(this, "add(overwrite=" + shouldOverWrite + ",url='" + url + "')")
            .postCore({
            body: content,
        }).then(function (response) {
            return {
                data: response,
                file: _this.getByName(url),
            };
        });
    };
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The Blob file content to add
     * @param progress A callback function which can be used to track the progress of the upload
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     * @returns The new File and the raw response.
     */
    Files.prototype.addChunked = function (url, content, progress, shouldOverWrite, chunkSize) {
        var _this = this;
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        if (chunkSize === void 0) { chunkSize = 10485760; }
        var adder = this.clone(Files_1, "add(overwrite=" + shouldOverWrite + ",url='" + url + "')", false);
        return adder.postCore()
            .then(function () { return _this.getByName(url); })
            .then(function (file) { return file.setContentChunked(content, progress, chunkSize); });
    };
    /**
     * Adds a ghosted file to an existing list or document library. Not supported for batching.
     *
     * @param fileUrl The server-relative url where you want to save the file.
     * @param templateFileType The type of use to create the file.
     * @returns The template file that was added and the raw response.
     */
    Files.prototype.addTemplateFile = function (fileUrl, templateFileType) {
        var _this = this;
        return this.clone(Files_1, "addTemplateFile(urloffile='" + fileUrl + "',templatefiletype=" + templateFileType + ")", false)
            .postCore().then(function (response) {
            return {
                data: response,
                file: _this.getByName(fileUrl),
            };
        });
    };
    var Files_1;
    Files = Files_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("files")
    ], Files);
    return Files;
}(SharePointQueryableCollection));
/**
 * Describes a single File instance
 *
 */
var File = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(File, _super);
    function File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(File.prototype, "listItemAllFields", {
        /**
         * Gets a value that specifies the list item field values for the list item corresponding to the file.
         *
         */
        get: function () {
            return new SharePointQueryableInstance(this, "listItemAllFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "versions", {
        /**
         * Gets a collection of versions
         *
         */
        get: function () {
            return new Versions(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Approves the file submitted for content approval with the specified comment.
     * Only documents in lists that are enabled for content approval can be approved.
     *
     * @param comment The comment for the approval.
     */
    File.prototype.approve = function (comment) {
        if (comment === void 0) { comment = ""; }
        return this.clone(File, "approve(comment='" + comment + "')").postCore();
    };
    /**
     * Stops the chunk upload session without saving the uploaded data. Does not support batching.
     * If the file doesn’t already exist in the library, the partially uploaded file will be deleted.
     * Use this in response to user action (as in a request to cancel an upload) or an error or exception.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     */
    File.prototype.cancelUpload = function (uploadId) {
        return this.clone(File, "cancelUpload(uploadId=guid'" + uploadId + "')", false).postCore();
    };
    /**
     * Checks the file in to a document library based on the check-in type.
     *
     * @param comment A comment for the check-in. Its length must be <= 1023.
     * @param checkinType The check-in type for the file.
     */
    File.prototype.checkin = function (comment, checkinType) {
        if (comment === void 0) { comment = ""; }
        if (checkinType === void 0) { checkinType = CheckinType.Major; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return this.clone(File, "checkin(comment='" + comment + "',checkintype=" + checkinType + ")").postCore();
    };
    /**
     * Checks out the file from a document library.
     */
    File.prototype.checkout = function () {
        return this.clone(File, "checkout").postCore();
    };
    /**
     * Copies the file to the destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     */
    File.prototype.copyTo = function (url, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return this.clone(File, "copyTo(strnewurl='" + url + "',boverwrite=" + shouldOverWrite + ")").postCore();
    };
    /**
     * Delete this file.
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    File.prototype.delete = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.clone(File, null).postCore({
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    /**
     * Denies approval for a file that was submitted for content approval.
     * Only documents in lists that are enabled for content approval can be denied.
     *
     * @param comment The comment for the denial.
     */
    File.prototype.deny = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return this.clone(File, "deny(comment='" + comment + "')").postCore();
    };
    /**
     * Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
     * An exception is thrown if the file is not an ASPX page.
     *
     * @param scope The WebPartsPersonalizationScope view on the Web Parts page.
     */
    File.prototype.getLimitedWebPartManager = function (scope) {
        if (scope === void 0) { scope = WebPartsPersonalizationScope.Shared; }
        return new LimitedWebPartManager(this, "getLimitedWebPartManager(scope=" + scope + ")");
    };
    /**
     * Moves the file to the specified destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to move to.
     * @param moveOperations The bitwise MoveOperations value for how to move the file.
     */
    File.prototype.moveTo = function (url, moveOperations) {
        if (moveOperations === void 0) { moveOperations = MoveOperations.Overwrite; }
        return this.clone(File, "moveTo(newurl='" + url + "',flags=" + moveOperations + ")").postCore();
    };
    /**
     * Submits the file for content approval with the specified comment.
     *
     * @param comment The comment for the published file. Its length must be <= 1023.
     */
    File.prototype.publish = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return this.clone(File, "publish(comment='" + comment + "')").postCore();
    };
    /**
     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     *
     * @returns The GUID of the recycled file.
     */
    File.prototype.recycle = function () {
        return this.clone(File, "recycle").postCore();
    };
    /**
     * Reverts an existing checkout for the file.
     *
     */
    File.prototype.undoCheckout = function () {
        return this.clone(File, "undoCheckout").postCore();
    };
    /**
     * Removes the file from content approval or unpublish a major version.
     *
     * @param comment The comment for the unpublish operation. Its length must be <= 1023.
     */
    File.prototype.unpublish = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return this.clone(File, "unpublish(comment='" + comment + "')").postCore();
    };
    /**
     * Gets the contents of the file as text. Not supported in batching.
     *
     */
    File.prototype.getText = function () {
        return this.clone(File, "$value", false).get(new __WEBPACK_IMPORTED_MODULE_3__pnp_odata__["TextParser"](), { headers: { "binaryStringResponseBody": "true" } });
    };
    /**
     * Gets the contents of the file as a blob, does not work in Node.js. Not supported in batching.
     *
     */
    File.prototype.getBlob = function () {
        return this.clone(File, "$value", false).get(new __WEBPACK_IMPORTED_MODULE_3__pnp_odata__["BlobParser"](), { headers: { "binaryStringResponseBody": "true" } });
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    File.prototype.getBuffer = function () {
        return this.clone(File, "$value", false).get(new __WEBPACK_IMPORTED_MODULE_3__pnp_odata__["BufferParser"](), { headers: { "binaryStringResponseBody": "true" } });
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    File.prototype.getJSON = function () {
        return this.clone(File, "$value", false).get(new __WEBPACK_IMPORTED_MODULE_3__pnp_odata__["JSONParser"](), { headers: { "binaryStringResponseBody": "true" } });
    };
    /**
     * Sets the content of a file, for large files use setContentChunked. Not supported in batching.
     *
     * @param content The file content
     *
     */
    File.prototype.setContent = function (content) {
        var _this = this;
        return this.clone(File, "$value", false).postCore({
            body: content,
            headers: {
                "X-HTTP-Method": "PUT",
            },
        }).then(function (_) { return new File(_this); });
    };
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    File.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        var q = this.listItemAllFields;
        return q.select.apply(q, selects).get().then(function (d) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(new Item(odataUrlFrom(d)), d);
        });
    };
    /**
     * Sets the contents of a file using a chunked upload approach. Not supported in batching.
     *
     * @param file The file to upload
     * @param progress A callback function which can be used to track the progress of the upload
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     */
    File.prototype.setContentChunked = function (file, progress, chunkSize) {
        var _this = this;
        if (chunkSize === void 0) { chunkSize = 10485760; }
        if (progress === undefined) {
            progress = function () { return null; };
        }
        var fileSize = file.size;
        var blockCount = parseInt((file.size / chunkSize).toString(), 10) + ((file.size % chunkSize === 0) ? 1 : 0);
        var uploadId = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["m" /* getGUID */])();
        // start the chain with the first fragment
        progress({ uploadId: uploadId, blockNumber: 1, chunkSize: chunkSize, currentPointer: 0, fileSize: fileSize, stage: "starting", totalBlocks: blockCount });
        var chain = this.startUpload(uploadId, file.slice(0, chunkSize));
        var _loop_1 = function (i) {
            chain = chain.then(function (pointer) {
                progress({ uploadId: uploadId, blockNumber: i, chunkSize: chunkSize, currentPointer: pointer, fileSize: fileSize, stage: "continue", totalBlocks: blockCount });
                return _this.continueUpload(uploadId, pointer, file.slice(pointer, pointer + chunkSize));
            });
        };
        // skip the first and last blocks
        for (var i = 2; i < blockCount; i++) {
            _loop_1(i);
        }
        return chain.then(function (pointer) {
            progress({ uploadId: uploadId, blockNumber: blockCount, chunkSize: chunkSize, currentPointer: pointer, fileSize: fileSize, stage: "finishing", totalBlocks: blockCount });
            return _this.finishUpload(uploadId, pointer, file.slice(pointer));
        });
    };
    /**
     * Starts a new chunk upload session and uploads the first fragment.
     * The current file content is not changed when this method completes.
     * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
     * The upload session ends either when you use the CancelUpload method or when you successfully
     * complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
     * The StartUpload and ContinueUpload methods return the size of the running total of uploaded data in bytes,
     * so you can pass those return values to subsequent uses of ContinueUpload and FinishUpload.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fragment The file contents.
     * @returns The size of the total uploaded data in bytes.
     */
    File.prototype.startUpload = function (uploadId, fragment) {
        return this.clone(File, "startUpload(uploadId=guid'" + uploadId + "')", false)
            .postCore({ body: fragment })
            .then(function (n) {
            // When OData=verbose the payload has the following shape:
            // { StartUpload: "10485760" }
            if (typeof n === "object") {
                n = n.StartUpload;
            }
            return parseFloat(n);
        });
    };
    /**
     * Continues the chunk upload session with an additional fragment.
     * The current file content is not changed.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fileOffset The size of the offset into the file where the fragment starts.
     * @param fragment The file contents.
     * @returns The size of the total uploaded data in bytes.
     */
    File.prototype.continueUpload = function (uploadId, fileOffset, fragment) {
        return this.clone(File, "continueUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")", false)
            .postCore({ body: fragment })
            .then(function (n) {
            // When OData=verbose the payload has the following shape:
            // { ContinueUpload: "20971520" }
            if (typeof n === "object") {
                n = n.ContinueUpload;
            }
            return parseFloat(n);
        });
    };
    /**
     * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fileOffset The size of the offset into the file where the fragment starts.
     * @param fragment The file contents.
     * @returns The newly uploaded file.
     */
    File.prototype.finishUpload = function (uploadId, fileOffset, fragment) {
        return this.clone(File, "finishUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")", false)
            .postCore({ body: fragment })
            .then(function (response) {
            return {
                data: response,
                file: new File(odataUrlFrom(response)),
            };
        });
    };
    return File;
}(SharePointQueryableShareableFile));
/**
 * Describes a collection of Version objects
 *
 */
var Versions = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Versions, _super);
    function Versions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Versions_1 = Versions;
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    Versions.prototype.getById = function (versionId) {
        var v = new Version(this);
        v.concat("(" + versionId + ")");
        return v;
    };
    /**
     * Deletes all the file version objects in the collection.
     *
     */
    Versions.prototype.deleteAll = function () {
        return new Versions_1(this, "deleteAll").postCore();
    };
    /**
     * Deletes the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    Versions.prototype.deleteById = function (versionId) {
        return this.clone(Versions_1, "deleteById(vid=" + versionId + ")").postCore();
    };
    /**
     * Recycles the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    Versions.prototype.recycleByID = function (versionId) {
        return this.clone(Versions_1, "recycleByID(vid=" + versionId + ")").postCore();
    };
    /**
     * Deletes the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    Versions.prototype.deleteByLabel = function (label) {
        return this.clone(Versions_1, "deleteByLabel(versionlabel='" + label + "')").postCore();
    };
    /**
     * Recycles the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    Versions.prototype.recycleByLabel = function (label) {
        return this.clone(Versions_1, "recycleByLabel(versionlabel='" + label + "')").postCore();
    };
    /**
     * Creates a new file version from the file specified by the version label.
     *
     * @param label The version label of the file version to restore, for example: 1.2
     */
    Versions.prototype.restoreByLabel = function (label) {
        return this.clone(Versions_1, "restoreByLabel(versionlabel='" + label + "')").postCore();
    };
    var Versions_1;
    Versions = Versions_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("versions")
    ], Versions);
    return Versions;
}(SharePointQueryableCollection));
/**
 * Describes a single Version instance
 *
 */
var Version = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Version, _super);
    function Version() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
        * Delete a specific version of a file.
        *
        * @param eTag Value used in the IF-Match header, by default "*"
        */
        _this.delete = _this._deleteWithETag;
        return _this;
        // /**
        // * Delete a specific version of a file.
        // *
        // * @param eTag Value used in the IF-Match header, by default "*"
        // */
        // public delete(eTag = "*"): Promise<void> {
        //     return this.postCore({
        //         headers: {
        //             "IF-Match": eTag,
        //             "X-HTTP-Method": "DELETE",
        //         },
        //     });
        // }
    }
    return Version;
}(SharePointQueryableInstance));
var CheckinType;
(function (CheckinType) {
    CheckinType[CheckinType["Minor"] = 0] = "Minor";
    CheckinType[CheckinType["Major"] = 1] = "Major";
    CheckinType[CheckinType["Overwrite"] = 2] = "Overwrite";
})(CheckinType || (CheckinType = {}));
var WebPartsPersonalizationScope;
(function (WebPartsPersonalizationScope) {
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["User"] = 0] = "User";
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["Shared"] = 1] = "Shared";
})(WebPartsPersonalizationScope || (WebPartsPersonalizationScope = {}));
var MoveOperations;
(function (MoveOperations) {
    MoveOperations[MoveOperations["Overwrite"] = 1] = "Overwrite";
    MoveOperations[MoveOperations["AllowBrokenThickets"] = 8] = "AllowBrokenThickets";
})(MoveOperations || (MoveOperations = {}));
var TemplateFileType;
(function (TemplateFileType) {
    TemplateFileType[TemplateFileType["StandardPage"] = 0] = "StandardPage";
    TemplateFileType[TemplateFileType["WikiPage"] = 1] = "WikiPage";
    TemplateFileType[TemplateFileType["FormPage"] = 2] = "FormPage";
    TemplateFileType[TemplateFileType["ClientSidePage"] = 3] = "ClientSidePage";
})(TemplateFileType || (TemplateFileType = {}));

/**
 * Represents an app catalog
 */
var AppCatalog = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(AppCatalog, _super);
    function AppCatalog(baseUrl, path) {
        if (path === void 0) { path = "_api/web/tenantappcatalog/AvailableApps"; }
        return _super.call(this, extractWebUrl(typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl()), path) || this;
    }
    /**
     * Get details of specific app from the app catalog
     * @param id - Specify the guid of the app
     */
    AppCatalog.prototype.getAppById = function (id) {
        return new App(this, "getById('" + id + "')");
    };
    /**
     * Uploads an app package. Not supported for batching
     *
     * @param filename Filename to create.
     * @param content app package data (eg: the .app or .sppkg file).
     * @param shouldOverWrite Should an app with the same name in the same location be overwritten? (default: true)
     * @returns Promise<AppAddResult>
     */
    AppCatalog.prototype.add = function (filename, content, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        // you don't add to the availableapps collection
        var adder = new AppCatalog(extractWebUrl(this.toUrl()), "_api/web/tenantappcatalog/add(overwrite=" + shouldOverWrite + ",url='" + filename + "')");
        return adder.postCore({
            body: content,
        }).then(function (r) {
            return {
                data: r,
                file: new File(odataUrlFrom(r)),
            };
        });
    };
    return AppCatalog;
}(SharePointQueryableCollection));
/**
 * Represents the actions you can preform on a given app within the catalog
 */
var App = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method deploys an app on the app catalog.  It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    App.prototype.deploy = function () {
        return this.clone(App, "Deploy").postCore();
    };
    /**
     * This method retracts a deployed app on the app catalog.  It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    App.prototype.retract = function () {
        return this.clone(App, "Retract").postCore();
    };
    /**
     * This method allows an app which is already deployed to be installed on a web
     */
    App.prototype.install = function () {
        return this.clone(App, "Install").postCore();
    };
    /**
     * This method allows an app which is already insatlled to be uninstalled on a web
     */
    App.prototype.uninstall = function () {
        return this.clone(App, "Uninstall").postCore();
    };
    /**
     * This method allows an app which is already insatlled to be upgraded on a web
     */
    App.prototype.upgrade = function () {
        return this.clone(App, "Upgrade").postCore();
    };
    /**
     * This method removes an app from the app catalog.  It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    App.prototype.remove = function () {
        return this.clone(App, "Remove").postCore();
    };
    return App;
}(SharePointQueryableInstance));

/**
 * Manages a batch of OData operations
 */
var SPBatch = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SPBatch, _super);
    function SPBatch(baseUrl) {
        var _this = _super.call(this) || this;
        _this.baseUrl = baseUrl;
        return _this;
    }
    /**
     * Parses the response from a batch request into an array of Response instances
     *
     * @param body Text body of the response from the batch request
     */
    SPBatch.ParseResponse = function (body) {
        return new Promise(function (resolve, reject) {
            var responses = [];
            var header = "--batchresponse_";
            // Ex. "HTTP/1.1 500 Internal Server Error"
            var statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
            var lines = body.split("\n");
            var state = "batch";
            var status;
            var statusText;
            for (var i = 0; i < lines.length; ++i) {
                var line = lines[i];
                switch (state) {
                    case "batch":
                        if (line.substr(0, header.length) === header) {
                            state = "batchHeaders";
                        }
                        else {
                            if (line.trim() !== "") {
                                throw Error("Invalid response, line " + i);
                            }
                        }
                        break;
                    case "batchHeaders":
                        if (line.trim() === "") {
                            state = "status";
                        }
                        break;
                    case "status":
                        var parts = statusRegExp.exec(line);
                        if (parts.length !== 3) {
                            throw Error("Invalid status, line " + i);
                        }
                        status = parseInt(parts[1], 10);
                        statusText = parts[2];
                        state = "statusHeaders";
                        break;
                    case "statusHeaders":
                        if (line.trim() === "") {
                            state = "body";
                        }
                        break;
                    case "body":
                        responses.push((status === 204) ? new Response() : new Response(line, { status: status, statusText: statusText }));
                        state = "batch";
                        break;
                }
            }
            if (state !== "status") {
                reject(Error("Unexpected end of input"));
            }
            resolve(responses);
        });
    };
    SPBatch.prototype.executeImpl = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Executing batch with " + this.requests.length + " requests.", 1 /* Info */);
        // if we don't have any requests, don't bother sending anything
        // this could be due to caching further upstream, or just an empty batch
        if (this.requests.length < 1) {
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("Resolving empty batch.", 1 /* Info */);
            return Promise.resolve();
        }
        // creating the client here allows the url to be populated for nodejs client as well as potentially
        // any other hacks needed for other types of clients. Essentially allows the absoluteRequestUrl
        // below to be correct
        var client = new SPHttpClient();
        // due to timing we need to get the absolute url here so we can use it for all the individual requests
        // and for sending the entire batch
        return toAbsoluteUrl(this.baseUrl).then(function (absoluteRequestUrl) {
            // build all the requests, send them, pipe results in order to parsers
            var batchBody = [];
            var currentChangeSetId = "";
            for (var i = 0; i < _this.requests.length; i++) {
                var reqInfo = _this.requests[i];
                if (reqInfo.method === "GET") {
                    if (currentChangeSetId.length > 0) {
                        // end an existing change set
                        batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
                        currentChangeSetId = "";
                    }
                    batchBody.push("--batch_" + _this.batchId + "\n");
                }
                else {
                    if (currentChangeSetId.length < 1) {
                        // start new change set
                        currentChangeSetId = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["m" /* getGUID */])();
                        batchBody.push("--batch_" + _this.batchId + "\n");
                        batchBody.push("Content-Type: multipart/mixed; boundary=\"changeset_" + currentChangeSetId + "\"\n\n");
                    }
                    batchBody.push("--changeset_" + currentChangeSetId + "\n");
                }
                // common batch part prefix
                batchBody.push("Content-Type: application/http\n");
                batchBody.push("Content-Transfer-Encoding: binary\n\n");
                var headers = new Headers();
                // this is the url of the individual request within the batch
                var url = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["s" /* isUrlAbsolute */])(reqInfo.url) ? reqInfo.url : Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(absoluteRequestUrl, reqInfo.url);
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Adding request " + reqInfo.method + " " + url + " to batch.", 0 /* Verbose */);
                if (reqInfo.method !== "GET") {
                    var method = reqInfo.method;
                    var castHeaders = reqInfo.options.headers;
                    if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(reqInfo, "options") && Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(reqInfo.options, "headers") && castHeaders["X-HTTP-Method"] !== undefined) {
                        method = castHeaders["X-HTTP-Method"];
                        delete castHeaders["X-HTTP-Method"];
                    }
                    batchBody.push(method + " " + url + " HTTP/1.1\n");
                    headers.set("Content-Type", "application/json;odata=verbose;charset=utf-8");
                }
                else {
                    batchBody.push(reqInfo.method + " " + url + " HTTP/1.1\n");
                }
                // merge global config headers
                Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["u" /* mergeHeaders */])(headers, SPRuntimeConfig.headers);
                // merge per-request headers
                if (reqInfo.options) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["u" /* mergeHeaders */])(headers, reqInfo.options.headers);
                }
                // lastly we apply any default headers we need that may not exist
                if (!headers.has("Accept")) {
                    headers.append("Accept", "application/json");
                }
                if (!headers.has("Content-Type")) {
                    headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                }
                if (!headers.has("X-ClientService-ClientTag")) {
                    headers.append("X-ClientService-ClientTag", "PnPCoreJS:@pnp-1.2.3");
                }
                // write headers into batch body
                headers.forEach(function (value, name) {
                    batchBody.push(name + ": " + value + "\n");
                });
                batchBody.push("\n");
                if (reqInfo.options.body) {
                    batchBody.push(reqInfo.options.body + "\n\n");
                }
            }
            if (currentChangeSetId.length > 0) {
                // Close the changeset
                batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
                currentChangeSetId = "";
            }
            batchBody.push("--batch_" + _this.batchId + "--\n");
            var batchOptions = {
                "body": batchBody.join(""),
                "headers": {
                    "Content-Type": "multipart/mixed; boundary=batch_" + _this.batchId,
                },
                "method": "POST",
            };
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Sending batch request.", 1 /* Info */);
            return client.fetch(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(absoluteRequestUrl, "/_api/$batch"), batchOptions)
                .then(function (r) { return r.text(); })
                .then(SPBatch.ParseResponse)
                .then(function (responses) {
                if (responses.length !== _this.requests.length) {
                    throw Error("Could not properly parse responses to match requests in batch.");
                }
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched requests.", 1 /* Info */);
                return responses.reduce(function (chain, response, index) {
                    var request = _this.requests[index];
                    __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("[" + request.id + "] (" + (new Date()).getTime() + ") Resolving request in batch " + _this.batchId + ".", 1 /* Info */);
                    return chain.then(function (_) { return request.parser.parse(response).then(request.resolve).catch(request.reject); });
                }, Promise.resolve());
            });
        });
    };
    return SPBatch;
}(__WEBPACK_IMPORTED_MODULE_3__pnp_odata__["ODataBatch"]));

/**
 * Page promotion state
 */
var PromotedState;
(function (PromotedState) {
    /**
     * Regular client side page
     */
    PromotedState[PromotedState["NotPromoted"] = 0] = "NotPromoted";
    /**
     * Page that will be promoted as news article after publishing
     */
    PromotedState[PromotedState["PromoteOnPublish"] = 1] = "PromoteOnPublish";
    /**
     * Page that is promoted as news article
     */
    PromotedState[PromotedState["Promoted"] = 2] = "Promoted";
})(PromotedState || (PromotedState = {}));
/**
 * Gets the next order value 1 based for the provided collection
 *
 * @param collection Collection of orderable things
 */
function getNextOrder(collection) {
    if (collection.length < 1) {
        return 1;
    }
    return Math.max.apply(null, collection.map(function (i) { return i.order; })) + 1;
}
/**
 * After https://stackoverflow.com/questions/273789/is-there-a-version-of-javascripts-string-indexof-that-allows-for-regular-expr/274094#274094
 *
 * @param this Types the called context this to a string in which the search will be conducted
 * @param regex A regex or string to match
 * @param startpos A starting position from which the search will begin
 */
function regexIndexOf(regex, startpos) {
    if (startpos === void 0) { startpos = 0; }
    var indexOf = this.substring(startpos).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos)) : indexOf;
}
/**
 * Finds bounded blocks of markup bounded by divs, ensuring to match the ending div even with nested divs in the interstitial markup
 *
 * @param html HTML to search
 * @param boundaryStartPattern The starting pattern to find, typically a div with attribute
 * @param collector A func to take the found block and provide a way to form it into a useful return that is added into the return array
 */
function getBoundedDivMarkup(html, boundaryStartPattern, collector) {
    var blocks = [];
    if (html === undefined || html === null) {
        return blocks;
    }
    // remove some extra whitespace if present
    var cleanedHtml = html.replace(/[\t\r\n]/g, "");
    // find the first div
    var startIndex = regexIndexOf.call(cleanedHtml, boundaryStartPattern);
    if (startIndex < 0) {
        // we found no blocks in the supplied html
        return blocks;
    }
    // this loop finds each of the blocks
    while (startIndex > -1) {
        // we have one open div counting from the one found above using boundaryStartPattern so we need to ensure we find it's close
        var openCounter = 1;
        var searchIndex = startIndex + 1;
        var nextDivOpen = -1;
        var nextCloseDiv = -1;
        // this loop finds the </div> tag that matches the opening of the control
        while (true) {
            // find both the next opening and closing div tags from our current searching index
            nextDivOpen = regexIndexOf.call(cleanedHtml, /<div[^>]*>/i, searchIndex);
            nextCloseDiv = regexIndexOf.call(cleanedHtml, /<\/div>/i, searchIndex);
            if (nextDivOpen < 0) {
                // we have no more opening divs, just set this to simplify checks below
                nextDivOpen = cleanedHtml.length + 1;
            }
            // determine which we found first, then increment or decrement our counter
            // and set the location to begin searching again
            if (nextDivOpen < nextCloseDiv) {
                openCounter++;
                searchIndex = nextDivOpen + 1;
            }
            else if (nextCloseDiv < nextDivOpen) {
                openCounter--;
                searchIndex = nextCloseDiv + 1;
            }
            // once we have no open divs back to the level of the opening control div
            // meaning we have all of the markup we intended to find
            if (openCounter === 0) {
                // get the bounded markup, +6 is the size of the ending </div> tag
                var markup = cleanedHtml.substring(startIndex, nextCloseDiv + 6).trim();
                // save the control data we found to the array
                blocks.push(collector(markup));
                // get out of our while loop
                break;
            }
            if (openCounter > 1000 || openCounter < 0) {
                // this is an arbitrary cut-off but likely we will not have 1000 nested divs
                // something has gone wrong above and we are probably stuck in our while loop
                // let's get out of our while loop and not hang everything
                throw Error("getBoundedDivMarkup exceeded depth parameters.");
            }
        }
        // get the start of the next control
        startIndex = regexIndexOf.call(cleanedHtml, boundaryStartPattern, nextCloseDiv);
    }
    return blocks;
}
/**
 * Normalizes the order value for all the sections, columns, and controls to be 1 based and stepped (1, 2, 3...)
 *
 * @param collection The collection to normalize
 */
function reindex(collection) {
    for (var i = 0; i < collection.length; i++) {
        collection[i].order = i + 1;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(collection[i], "columns")) {
            reindex(collection[i].columns);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(collection[i], "controls")) {
            reindex(collection[i].controls);
        }
    }
}
/**
 * Represents the data and methods associated with client side "modern" pages
 */
var ClientSidePage = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ClientSidePage, _super);
    /**
     * Creates a new instance of the ClientSidePage class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this web collection
     * @param commentsDisabled Indicates if comments are disabled, not valid until load is called
     */
    function ClientSidePage(file, sections, commentsDisabled) {
        if (sections === void 0) { sections = []; }
        if (commentsDisabled === void 0) { commentsDisabled = false; }
        var _this = _super.call(this, file) || this;
        _this.sections = sections;
        _this.commentsDisabled = commentsDisabled;
        return _this;
    }
    /**
     * Creates a new blank page within the supplied library
     *
     * @param library The library in which to create the page
     * @param pageName Filename of the page, such as "page.aspx"
     * @param title The display title of the page
     * @param pageLayoutType Layout type of the page to use
     */
    ClientSidePage.create = function (library, pageName, title, pageLayoutType) {
        if (pageLayoutType === void 0) { pageLayoutType = "Article"; }
        // see if file exists, if not create it
        return library.rootFolder.files.select("Name").filter("Name eq '" + pageName + "'").get().then(function (fs) {
            if (fs.length > 0) {
                throw Error("A file with the name '" + pageName + "' already exists in the library '" + library.toUrl() + "'.");
            }
            // get our server relative path
            return library.rootFolder.select("ServerRelativePath").get().then(function (path) {
                var pageServerRelPath = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])("/", path.ServerRelativePath.DecodedUrl, pageName);
                // add the template file
                return library.rootFolder.files.addTemplateFile(pageServerRelPath, TemplateFileType.ClientSidePage).then(function (far) {
                    // get the item associated with the file
                    return far.file.getItem().then(function (i) {
                        // update the item to have the correct values to create the client side page
                        return i.update({
                            BannerImageUrl: {
                                Url: "/_layouts/15/images/sitepagethumbnail.png",
                            },
                            CanvasContent1: "",
                            ClientSideApplicationId: "b6917cb1-93a0-4b97-a84d-7cf49975d4ec",
                            ContentTypeId: "0x0101009D1CB255DA76424F860D91F20E6C4118",
                            PageLayoutType: pageLayoutType,
                            PromotedState: 0 /* NotPromoted */,
                            Title: title,
                        }).then(function (iar) { return new ClientSidePage(iar.item.file, iar.item.CommentsDisabled); });
                    });
                });
            });
        });
    };
    /**
     * Creates a new ClientSidePage instance from the provided html content string
     *
     * @param html HTML markup representing the page
     */
    ClientSidePage.fromFile = function (file) {
        var page = new ClientSidePage(file);
        return page.load().then(function (_) { return page; });
    };
    /**
     * Converts a json object to an escaped string appropriate for use in attributes when storing client-side controls
     *
     * @param json The json object to encode into a string
     */
    ClientSidePage.jsonToEscapedString = function (json) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(json)
            .replace(/"/g, "&quot;")
            .replace(/:/g, "&#58;")
            .replace(/{/g, "&#123;")
            .replace(/}/g, "&#125;")
            .replace(/\[/g, "\[")
            .replace(/\]/g, "\]")
            .replace(/\./g, "\.");
    };
    /**
     * Converts an escaped string from a client-side control attribute to a json object
     *
     * @param escapedString
     */
    ClientSidePage.escapedStringToJson = function (escapedString) {
        var unespace = function (escaped) {
            var mapDict = [
                [/&quot;/g, "\""], [/&#58;/g, ":"], [/&#123;/g, "{"], [/&#125;/g, "}"],
                [/\\\\/g, "\\"], [/\\\?/g, "?"], [/\\\./g, "."], [/\\\[/g, "["], [/\\\]/g, "]"],
                [/\\\(/g, "("], [/\\\)/g, ")"], [/\\\|/g, "|"], [/\\\+/g, "+"],
            ];
            return mapDict.reduce(function (r, m) { return r.replace(m[0], m[1]); }, escaped);
        };
        return JSON.parse(unespace(escapedString));
    };
    /**
     * Add a section to this page
     */
    ClientSidePage.prototype.addSection = function () {
        var section = new CanvasSection(this, getNextOrder(this.sections));
        this.sections.push(section);
        return section;
    };
    /**
     * Converts this page's content to html markup
     */
    ClientSidePage.prototype.toHtml = function () {
        // trigger reindex of the entire tree
        reindex(this.sections);
        var html = [];
        html.push("<div>");
        for (var i = 0; i < this.sections.length; i++) {
            html.push(this.sections[i].toHtml());
        }
        html.push("</div>");
        return html.join("");
    };
    /**
     * Loads this page instance's content from the supplied html
     *
     * @param html html string representing the page's content
     */
    ClientSidePage.prototype.fromHtml = function (html) {
        var _this = this;
        // reset sections
        this.sections = [];
        // gather our controls from the supplied html
        getBoundedDivMarkup(html, /<div\b[^>]*data-sp-canvascontrol[^>]*?>/i, function (markup) {
            // get the control type
            var ct = /controlType&quot;&#58;(\d*?),/i.exec(markup);
            // if no control type is present this is a column which we give type 0 to let us process it
            var controlType = ct == null || ct.length < 2 ? 0 : parseInt(ct[1], 10);
            var control = null;
            switch (controlType) {
                case 0:
                    // empty canvas column
                    control = new CanvasColumn(null, 0);
                    control.fromHtml(markup);
                    _this.mergeColumnToTree(control);
                    break;
                case 3:
                    // client side webpart
                    control = new ClientSideWebpart("");
                    control.fromHtml(markup);
                    _this.mergePartToTree(control);
                    break;
                case 4:
                    // client side text
                    control = new ClientSideText();
                    control.fromHtml(markup);
                    _this.mergePartToTree(control);
                    break;
            }
        });
        // refresh all the orders within the tree
        reindex(this.sections);
        return this;
    };
    /**
     * Loads this page's content from the server
     */
    ClientSidePage.prototype.load = function () {
        var _this = this;
        return this.getItem("CanvasContent1", "CommentsDisabled").then(function (item) {
            _this.fromHtml(item.CanvasContent1);
            _this.commentsDisabled = item.CommentsDisabled;
        });
    };
    /**
     * Persists the content changes (sections, columns, and controls)
     */
    ClientSidePage.prototype.save = function () {
        return this.updateProperties({ CanvasContent1: this.toHtml() });
    };
    /**
     * Enables comments on this page
     */
    ClientSidePage.prototype.enableComments = function () {
        var _this = this;
        return this.setCommentsOn(true).then(function (r) {
            _this.commentsDisabled = false;
            return r;
        });
    };
    /**
     * Disables comments on this page
     */
    ClientSidePage.prototype.disableComments = function () {
        var _this = this;
        return this.setCommentsOn(false).then(function (r) {
            _this.commentsDisabled = true;
            return r;
        });
    };
    /**
     * Finds a control by the specified instance id
     *
     * @param id Instance id of the control to find
     */
    ClientSidePage.prototype.findControlById = function (id) {
        return this.findControl(function (c) { return c.id === id; });
    };
    /**
     * Finds a control within this page's control tree using the supplied predicate
     *
     * @param predicate Takes a control and returns true or false, if true that control is returned by findControl
     */
    ClientSidePage.prototype.findControl = function (predicate) {
        // check all sections
        for (var i = 0; i < this.sections.length; i++) {
            // check all columns
            for (var j = 0; j < this.sections[i].columns.length; j++) {
                // check all controls
                for (var k = 0; k < this.sections[i].columns[j].controls.length; k++) {
                    // check to see if the predicate likes this control
                    if (predicate(this.sections[i].columns[j].controls[k])) {
                        return this.sections[i].columns[j].controls[k];
                    }
                }
            }
        }
        // we found nothing so give nothing back
        return null;
    };
    /**
     * Sets the comments flag for a page
     *
     * @param on If true comments are enabled, false they are disabled
     */
    ClientSidePage.prototype.setCommentsOn = function (on) {
        return this.getItem().then(function (i) {
            var updater = new Item(i, "SetCommentsDisabled(" + !on + ")");
            return updater.update({});
        });
    };
    /**
     * Merges the control into the tree of sections and columns for this page
     *
     * @param control The control to merge
     */
    ClientSidePage.prototype.mergePartToTree = function (control) {
        var section = null;
        var column = null;
        var sections = this.sections.filter(function (s) { return s.order === control.controlData.position.zoneIndex; });
        if (sections.length < 1) {
            section = new CanvasSection(this, control.controlData.position.zoneIndex);
            this.sections.push(section);
        }
        else {
            section = sections[0];
        }
        var columns = section.columns.filter(function (c) { return c.order === control.controlData.position.sectionIndex; });
        if (columns.length < 1) {
            column = new CanvasColumn(section, control.controlData.position.sectionIndex, control.controlData.position.sectionFactor);
            section.columns.push(column);
        }
        else {
            column = columns[0];
        }
        control.column = column;
        column.addControl(control);
    };
    /**
     * Merges the supplied column into the tree
     *
     * @param column Column to merge
     * @param position The position data for the column
     */
    ClientSidePage.prototype.mergeColumnToTree = function (column) {
        var section = null;
        var sections = this.sections.filter(function (s) { return s.order === column.controlData.position.zoneIndex; });
        if (sections.length < 1) {
            section = new CanvasSection(this, column.controlData.position.zoneIndex);
            this.sections.push(section);
        }
        else {
            section = sections[0];
        }
        column.section = section;
        section.columns.push(column);
    };
    /**
     * Updates the properties of the underlying ListItem associated with this ClientSidePage
     *
     * @param properties Set of properties to update
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    ClientSidePage.prototype.updateProperties = function (properties, eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.getItem().then(function (i) { return i.update(properties, eTag); });
    };
    return ClientSidePage;
}(File));
var CanvasSection = /** @class */ (function () {
    function CanvasSection(page, order, columns) {
        if (columns === void 0) { columns = []; }
        this.page = page;
        this.order = order;
        this.columns = columns;
        this._memId = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["m" /* getGUID */])();
    }
    Object.defineProperty(CanvasSection.prototype, "defaultColumn", {
        /**
         * Default column (this.columns[0]) for this section
         */
        get: function () {
            if (this.columns.length < 1) {
                this.addColumn(12);
            }
            return this.columns[0];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new column to this section
     */
    CanvasSection.prototype.addColumn = function (factor) {
        var column = new CanvasColumn(this, getNextOrder(this.columns), factor);
        this.columns.push(column);
        return column;
    };
    /**
     * Adds a control to the default column for this section
     *
     * @param control Control to add to the default column
     */
    CanvasSection.prototype.addControl = function (control) {
        this.defaultColumn.addControl(control);
        return this;
    };
    CanvasSection.prototype.toHtml = function () {
        var html = [];
        for (var i = 0; i < this.columns.length; i++) {
            html.push(this.columns[i].toHtml());
        }
        return html.join("");
    };
    /**
     * Removes this section and all contained columns and controls from the collection
     */
    CanvasSection.prototype.remove = function () {
        var _this = this;
        this.page.sections = this.page.sections.filter(function (section) { return section._memId !== _this._memId; });
        reindex(this.page.sections);
    };
    return CanvasSection;
}());
var CanvasControl = /** @class */ (function () {
    function CanvasControl(controlType, dataVersion, column, order, id, controlData) {
        if (column === void 0) { column = null; }
        if (order === void 0) { order = 1; }
        if (id === void 0) { id = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["m" /* getGUID */])(); }
        if (controlData === void 0) { controlData = null; }
        this.controlType = controlType;
        this.dataVersion = dataVersion;
        this.column = column;
        this.order = order;
        this.id = id;
        this.controlData = controlData;
    }
    Object.defineProperty(CanvasControl.prototype, "jsonData", {
        /**
         * Value of the control's "data-sp-controldata" attribute
         */
        get: function () {
            return ClientSidePage.jsonToEscapedString(this.getControlData());
        },
        enumerable: true,
        configurable: true
    });
    CanvasControl.prototype.fromHtml = function (html) {
        this.controlData = ClientSidePage.escapedStringToJson(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["k" /* getAttrValueFromString */])(html, "data-sp-controldata"));
        this.dataVersion = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["k" /* getAttrValueFromString */])(html, "data-sp-canvasdataversion");
        this.controlType = this.controlData.controlType;
        this.id = this.controlData.id;
    };
    return CanvasControl;
}());
var CanvasColumn = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(CanvasColumn, _super);
    function CanvasColumn(section, order, factor, controls, dataVersion) {
        if (factor === void 0) { factor = 12; }
        if (controls === void 0) { controls = []; }
        if (dataVersion === void 0) { dataVersion = "1.0"; }
        var _this = _super.call(this, 0, dataVersion) || this;
        _this.section = section;
        _this.order = order;
        _this.factor = factor;
        _this.controls = controls;
        return _this;
    }
    CanvasColumn.prototype.addControl = function (control) {
        control.column = this;
        this.controls.push(control);
        return this;
    };
    CanvasColumn.prototype.getControl = function (index) {
        return this.controls[index];
    };
    CanvasColumn.prototype.toHtml = function () {
        var html = [];
        if (this.controls.length < 1) {
            html.push("<div data-sp-canvascontrol=\"\" data-sp-canvasdataversion=\"" + this.dataVersion + "\" data-sp-controldata=\"" + this.jsonData + "\"></div>");
        }
        else {
            for (var i = 0; i < this.controls.length; i++) {
                html.push(this.controls[i].toHtml(i + 1));
            }
        }
        return html.join("");
    };
    CanvasColumn.prototype.fromHtml = function (html) {
        _super.prototype.fromHtml.call(this, html);
        this.controlData = ClientSidePage.escapedStringToJson(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["k" /* getAttrValueFromString */])(html, "data-sp-controldata"));
        this.factor = this.controlData.position.sectionFactor;
        this.order = this.controlData.position.sectionIndex;
    };
    CanvasColumn.prototype.getControlData = function () {
        return {
            displayMode: 2,
            position: {
                sectionFactor: this.factor,
                sectionIndex: this.order,
                zoneIndex: this.section.order,
            },
        };
    };
    /**
     * Removes this column and all contained controls from the collection
     */
    CanvasColumn.prototype.remove = function () {
        var _this = this;
        this.section.columns = this.section.columns.filter(function (column) { return column.id !== _this.id; });
        reindex(this.column.controls);
    };
    return CanvasColumn;
}(CanvasControl));
/**
 * Abstract class with shared functionality for parts
 */
var ClientSidePart = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ClientSidePart, _super);
    function ClientSidePart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Removes this column and all contained controls from the collection
     */
    ClientSidePart.prototype.remove = function () {
        var _this = this;
        this.column.controls = this.column.controls.filter(function (control) { return control.id !== _this.id; });
        reindex(this.column.controls);
    };
    return ClientSidePart;
}(CanvasControl));
var ClientSideText = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ClientSideText, _super);
    function ClientSideText(text) {
        if (text === void 0) { text = ""; }
        var _this = _super.call(this, 4, "1.0") || this;
        _this.text = text;
        return _this;
    }
    Object.defineProperty(ClientSideText.prototype, "text", {
        /**
         * The text markup of this control
         */
        get: function () {
            return this._text;
        },
        set: function (text) {
            if (!text.startsWith("<p>")) {
                text = "<p>" + text + "</p>";
            }
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    ClientSideText.prototype.getControlData = function () {
        return {
            controlType: this.controlType,
            editorType: "CKEditor",
            id: this.id,
            position: {
                controlIndex: this.order,
                sectionFactor: this.column.factor,
                sectionIndex: this.column.order,
                zoneIndex: this.column.section.order,
            },
        };
    };
    ClientSideText.prototype.toHtml = function (index) {
        // set our order to the value passed in
        this.order = index;
        var html = [];
        html.push("<div data-sp-canvascontrol=\"\" data-sp-canvasdataversion=\"" + this.dataVersion + "\" data-sp-controldata=\"" + this.jsonData + "\">");
        html.push("<div data-sp-rte=\"\">");
        html.push("" + this.text);
        html.push("</div>");
        html.push("</div>");
        return html.join("");
    };
    ClientSideText.prototype.fromHtml = function (html) {
        var _this = this;
        _super.prototype.fromHtml.call(this, html);
        this.text = "";
        getBoundedDivMarkup(html, /<div[^>]*data-sp-rte[^>]*>/i, function (s) {
            // now we need to grab the inner text between the divs
            var match = /<div[^>]*data-sp-rte[^>]*>(.*?)<\/div>$/i.exec(s);
            _this.text = match.length > 1 ? match[1] : "";
        });
    };
    return ClientSideText;
}(ClientSidePart));
var ClientSideWebpart = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ClientSideWebpart, _super);
    function ClientSideWebpart(title, description, propertieJson, webPartId, htmlProperties, serverProcessedContent, canvasDataVersion) {
        if (description === void 0) { description = ""; }
        if (propertieJson === void 0) { propertieJson = {}; }
        if (webPartId === void 0) { webPartId = ""; }
        if (htmlProperties === void 0) { htmlProperties = ""; }
        if (serverProcessedContent === void 0) { serverProcessedContent = null; }
        if (canvasDataVersion === void 0) { canvasDataVersion = "1.0"; }
        var _this = _super.call(this, 3, "1.0") || this;
        _this.title = title;
        _this.description = description;
        _this.propertieJson = propertieJson;
        _this.webPartId = webPartId;
        _this.htmlProperties = htmlProperties;
        _this.serverProcessedContent = serverProcessedContent;
        _this.canvasDataVersion = canvasDataVersion;
        return _this;
    }
    ClientSideWebpart.fromComponentDef = function (definition) {
        var part = new ClientSideWebpart("");
        part.import(definition);
        return part;
    };
    ClientSideWebpart.prototype.import = function (component) {
        this.webPartId = component.Id.replace(/^\{|\}$/g, "").toLowerCase();
        var manifest = JSON.parse(component.Manifest);
        this.title = manifest.preconfiguredEntries[0].title.default;
        this.description = manifest.preconfiguredEntries[0].description.default;
        this.dataVersion = "1.0";
        this.propertieJson = this.parseJsonProperties(manifest.preconfiguredEntries[0].properties);
    };
    ClientSideWebpart.prototype.setProperties = function (properties) {
        this.propertieJson = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(this.propertieJson, properties);
        return this;
    };
    ClientSideWebpart.prototype.getProperties = function () {
        return this.propertieJson;
    };
    ClientSideWebpart.prototype.toHtml = function (index) {
        // set our order to the value passed in
        this.order = index;
        // will form the value of the data-sp-webpartdata attribute
        var data = {
            dataVersion: this.dataVersion,
            description: this.description,
            id: this.webPartId,
            instanceId: this.id,
            properties: this.propertieJson,
            serverProcessedContent: this.serverProcessedContent,
            title: this.title,
        };
        var html = [];
        html.push("<div data-sp-canvascontrol=\"\" data-sp-canvasdataversion=\"" + this.canvasDataVersion + "\" data-sp-controldata=\"" + this.jsonData + "\">");
        html.push("<div data-sp-webpart=\"\" data-sp-webpartdataversion=\"" + this.dataVersion + "\" data-sp-webpartdata=\"" + ClientSidePage.jsonToEscapedString(data) + "\">");
        html.push("<div data-sp-componentid>");
        html.push(this.webPartId);
        html.push("</div>");
        html.push("<div data-sp-htmlproperties=\"\">");
        html.push(this.renderHtmlProperties());
        html.push("</div>");
        html.push("</div>");
        html.push("</div>");
        return html.join("");
    };
    ClientSideWebpart.prototype.fromHtml = function (html) {
        _super.prototype.fromHtml.call(this, html);
        var webPartData = ClientSidePage.escapedStringToJson(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["k" /* getAttrValueFromString */])(html, "data-sp-webpartdata"));
        this.title = webPartData.title;
        this.description = webPartData.description;
        this.webPartId = webPartData.id;
        this.canvasDataVersion = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["k" /* getAttrValueFromString */])(html, "data-sp-canvasdataversion").replace(/\\\./, ".");
        this.dataVersion = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["k" /* getAttrValueFromString */])(html, "data-sp-webpartdataversion").replace(/\\\./, ".");
        this.setProperties(webPartData.properties);
        if (webPartData.serverProcessedContent !== undefined) {
            this.serverProcessedContent = webPartData.serverProcessedContent;
        }
        // get our html properties
        var htmlProps = getBoundedDivMarkup(html, /<div\b[^>]*data-sp-htmlproperties[^>]*?>/i, function (markup) {
            return markup.replace(/^<div\b[^>]*data-sp-htmlproperties[^>]*?>/i, "").replace(/<\/div>$/i, "");
        });
        this.htmlProperties = htmlProps.length > 0 ? htmlProps[0] : "";
    };
    ClientSideWebpart.prototype.getControlData = function () {
        return {
            controlType: this.controlType,
            id: this.id,
            position: {
                controlIndex: this.order,
                sectionFactor: this.column.factor,
                sectionIndex: this.column.order,
                zoneIndex: this.column.section.order,
            },
            webPartId: this.webPartId,
        };
    };
    ClientSideWebpart.prototype.renderHtmlProperties = function () {
        var html = [];
        if (this.serverProcessedContent === undefined || this.serverProcessedContent === null) {
            html.push(this.htmlProperties);
        }
        else if (this.serverProcessedContent !== undefined) {
            if (this.serverProcessedContent.searchablePlainTexts !== undefined) {
                var keys = Object.keys(this.serverProcessedContent.searchablePlainTexts);
                for (var i = 0; i < keys.length; i++) {
                    html.push("<div data-sp-prop-name=\"" + keys[i] + "\" data-sp-searchableplaintext=\"true\">");
                    html.push(this.serverProcessedContent.searchablePlainTexts[keys[i]]);
                    html.push("</div>");
                }
            }
            if (this.serverProcessedContent.imageSources !== undefined) {
                var keys = Object.keys(this.serverProcessedContent.imageSources);
                for (var i = 0; i < keys.length; i++) {
                    html.push("<img data-sp-prop-name=\"" + keys[i] + "\" src=\"" + this.serverProcessedContent.imageSources[keys[i]] + "\" />");
                }
            }
            if (this.serverProcessedContent.links !== undefined) {
                var keys = Object.keys(this.serverProcessedContent.links);
                for (var i = 0; i < keys.length; i++) {
                    html.push("<a data-sp-prop-name=\"" + keys[i] + "\" href=\"" + this.serverProcessedContent.links[keys[i]] + "\"></a>");
                }
            }
        }
        return html.join("");
    };
    ClientSideWebpart.prototype.parseJsonProperties = function (props) {
        // If the web part has the serverProcessedContent property then keep this one as it might be needed as input to render the web part HTML later on
        if (props.webPartData !== undefined && props.webPartData.serverProcessedContent !== undefined) {
            this.serverProcessedContent = props.webPartData.serverProcessedContent;
        }
        else if (props.serverProcessedContent !== undefined) {
            this.serverProcessedContent = props.serverProcessedContent;
        }
        else {
            this.serverProcessedContent = null;
        }
        if (props.webPartData !== undefined && props.webPartData.properties !== undefined) {
            return props.webPartData.properties;
        }
        else if (props.properties !== undefined) {
            return props.properties;
        }
        else {
            return props;
        }
    };
    return ClientSideWebpart;
}(ClientSidePart));

/**
 * Represents a collection of navigation nodes
 *
 */
var NavigationNodes = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(NavigationNodes, _super);
    function NavigationNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a navigation node by id
     *
     * @param id The id of the node
     */
    NavigationNodes.prototype.getById = function (id) {
        var node = new NavigationNode(this);
        node.concat("(" + id + ")");
        return node;
    };
    /**
     * Adds a new node to the collection
     *
     * @param title Display name of the node
     * @param url The url of the node
     * @param visible If true the node is visible, otherwise it is hidden (default: true)
     */
    NavigationNodes.prototype.add = function (title, url, visible) {
        var _this = this;
        if (visible === void 0) { visible = true; }
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("SP.NavigationNode"), {
            IsVisible: visible,
            Title: title,
            Url: url,
        }));
        return this.clone(NavigationNodes, null).postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                node: _this.getById(data.Id),
            };
        });
    };
    /**
     * Moves a node to be after another node in the navigation
     *
     * @param nodeId Id of the node to move
     * @param previousNodeId Id of the node after which we move the node specified by nodeId
     */
    NavigationNodes.prototype.moveAfter = function (nodeId, previousNodeId) {
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            nodeId: nodeId,
            previousNodeId: previousNodeId,
        });
        return this.clone(NavigationNodes, "MoveAfter").postCore({ body: postBody });
    };
    return NavigationNodes;
}(SharePointQueryableCollection));
/**
 * Represents an instance of a navigation node
 *
 */
var NavigationNode = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(NavigationNode, _super);
    function NavigationNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NavigationNode.prototype, "children", {
        /**
         * Represents the child nodes of this node
         */
        get: function () {
            return new NavigationNodes(this, "Children");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Deletes this node and any child nodes
     */
    NavigationNode.prototype.delete = function () {
        return _super.prototype.deleteCore.call(this);
    };
    return NavigationNode;
}(SharePointQueryableInstance));
/**
 * Exposes the navigation components
 *
 */
var Navigation = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Navigation, _super);
    function Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Navigation.prototype, "quicklaunch", {
        /**
         * Gets the quicklaunch navigation nodes for the current context
         *
         */
        get: function () {
            return new NavigationNodes(this, "quicklaunch");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Navigation.prototype, "topNavigationBar", {
        /**
         * Gets the top bar navigation nodes for the current context
         *
         */
        get: function () {
            return new NavigationNodes(this, "topnavigationbar");
        },
        enumerable: true,
        configurable: true
    });
    Navigation = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("navigation")
    ], Navigation);
    return Navigation;
}(SharePointQueryable));
/**
 * Represents the top level navigation service
 */
var NavigationService = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(NavigationService, _super);
    function NavigationService(path) {
        if (path === void 0) { path = null; }
        return _super.call(this, "_api/navigation", path) || this;
    }
    /**
     * The MenuState service operation returns a Menu-State (dump) of a SiteMapProvider on a site.
     *
     * @param menuNodeKey MenuNode.Key of the start node within the SiteMapProvider If no key is provided the SiteMapProvider.RootNode will be the root of the menu state.
     * @param depth Depth of the dump. If no value is provided a dump with the depth of 10 is returned
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     * @param customProperties comma seperated list of custom properties to be returned.
     */
    NavigationService.prototype.getMenuState = function (menuNodeKey, depth, mapProviderName, customProperties) {
        if (menuNodeKey === void 0) { menuNodeKey = null; }
        if (depth === void 0) { depth = 10; }
        if (mapProviderName === void 0) { mapProviderName = null; }
        if (customProperties === void 0) { customProperties = null; }
        return (new NavigationService("MenuState")).postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                customProperties: customProperties,
                depth: depth,
                mapProviderName: mapProviderName,
                menuNodeKey: menuNodeKey,
            }),
        });
    };
    /**
     * Tries to get a SiteMapNode.Key for a given URL within a site collection.
     *
     * @param currentUrl A url representing the SiteMapNode
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     */
    NavigationService.prototype.getMenuNodeKey = function (currentUrl, mapProviderName) {
        if (mapProviderName === void 0) { mapProviderName = null; }
        return (new NavigationService("MenuNodeKey")).postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                currentUrl: currentUrl,
                mapProviderName: mapProviderName,
            }),
        });
    };
    return NavigationService;
}(SharePointQueryable));

/**
 * Describes regional settings ODada object
 */
var RegionalSettings = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(RegionalSettings, _super);
    function RegionalSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RegionalSettings.prototype, "installedLanguages", {
        /**
         * Gets the collection of languages used in a server farm.
         */
        get: function () {
            return new InstalledLanguages(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionalSettings.prototype, "globalInstalledLanguages", {
        /**
         * Gets the collection of language packs that are installed on the server.
         */
        get: function () {
            return new InstalledLanguages(this, "globalinstalledlanguages");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionalSettings.prototype, "timeZone", {
        /**
         * Gets time zone
         */
        get: function () {
            return new TimeZone(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionalSettings.prototype, "timeZones", {
        /**
         * Gets time zones
         */
        get: function () {
            return new TimeZones(this);
        },
        enumerable: true,
        configurable: true
    });
    RegionalSettings = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("regionalsettings")
    ], RegionalSettings);
    return RegionalSettings;
}(SharePointQueryableInstance));
/**
 * Describes installed languages ODada queriable collection
 */
var InstalledLanguages = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(InstalledLanguages, _super);
    function InstalledLanguages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstalledLanguages = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("installedlanguages")
    ], InstalledLanguages);
    return InstalledLanguages;
}(SharePointQueryableCollection));
/**
 * Describes TimeZone ODada object
 */
var TimeZone = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(TimeZone, _super);
    function TimeZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeZone_1 = TimeZone;
    /**
     * Gets an Local Time by UTC Time
     *
     * @param utcTime UTC Time as Date or ISO String
     */
    TimeZone.prototype.utcToLocalTime = function (utcTime) {
        var dateIsoString;
        if (typeof utcTime === "string") {
            dateIsoString = utcTime;
        }
        else {
            dateIsoString = utcTime.toISOString();
        }
        return this.clone(TimeZone_1, "utctolocaltime('" + dateIsoString + "')")
            .postCore()
            .then(function (res) { return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(res, "UTCToLocalTime") ? res.UTCToLocalTime : res; });
    };
    /**
     * Gets an UTC Time by Local Time
     *
     * @param localTime Local Time as Date or ISO String
     */
    TimeZone.prototype.localTimeToUTC = function (localTime) {
        var dateIsoString;
        if (typeof localTime === "string") {
            dateIsoString = localTime;
        }
        else {
            dateIsoString = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["i" /* dateAdd */])(localTime, "minute", localTime.getTimezoneOffset() * -1).toISOString();
        }
        return this.clone(TimeZone_1, "localtimetoutc('" + dateIsoString + "')")
            .postCore()
            .then(function (res) { return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(res, "LocalTimeToUTC") ? res.LocalTimeToUTC : res; });
    };
    var TimeZone_1;
    TimeZone = TimeZone_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("timezone")
    ], TimeZone);
    return TimeZone;
}(SharePointQueryableInstance));
/**
 * Describes time zones queriable collection
 */
var TimeZones = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(TimeZones, _super);
    function TimeZones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeZones_1 = TimeZones;
    // https://msdn.microsoft.com/en-us/library/office/jj247008.aspx - timezones ids
    /**
     * Gets an TimeZone by id
     *
     * @param id The integer id of the timezone to retrieve
     */
    TimeZones.prototype.getById = function (id) {
        // do the post and merge the result into a TimeZone instance so the data and methods are available
        return this.clone(TimeZones_1, "GetById(" + id + ")").postCore({}, spODataEntity(TimeZone));
    };
    var TimeZones_1;
    TimeZones = TimeZones_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("timezones")
    ], TimeZones);
    return TimeZones;
}(SharePointQueryableCollection));

var funcs = new Map([
    ["text", "Querytext"],
    ["template", "QueryTemplate"],
    ["sourceId", "SourceId"],
    ["trimDuplicatesIncludeId", ""],
    ["startRow", ""],
    ["rowLimit", ""],
    ["rankingModelId", ""],
    ["rowsPerPage", ""],
    ["selectProperties", ""],
    ["culture", ""],
    ["timeZoneId", ""],
    ["refinementFilters", ""],
    ["refiners", ""],
    ["hiddenConstraints", ""],
    ["sortList", ""],
    ["timeout", ""],
    ["hithighlightedProperties", ""],
    ["clientType", ""],
    ["personalizationData", ""],
    ["resultsURL", ""],
    ["queryTag", ""],
    ["properties", ""],
    ["queryTemplatePropertiesUrl", ""],
    ["reorderingRules", ""],
    ["hitHighlightedMultivaluePropertyLimit", ""],
    ["collapseSpecification", ""],
    ["uiLanguage", ""],
    ["desiredSnippetLength", ""],
    ["maxSnippetLength", ""],
    ["summaryLength", ""],
]);
var props = new Map([]);
function toPropCase(str) {
    return str.replace(/^(.)/, function ($1) { return $1.toUpperCase(); });
}
/**
 * Creates a new instance of the SearchQueryBuilder
 *
 * @param queryText Initial query text
 * @param _query Any initial query configuration
 */
function SearchQueryBuilder(queryText, _query) {
    if (queryText === void 0) { queryText = ""; }
    if (_query === void 0) { _query = {}; }
    return new Proxy({
        query: Object.assign({
            Querytext: queryText,
        }, _query),
    }, {
        get: function (self, propertyKey, proxy) {
            var pk = propertyKey.toString();
            if (pk === "toSearchQuery") {
                return function () { return self.query; };
            }
            if (funcs.has(pk)) {
                return function () {
                    var value = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        value[_i] = arguments[_i];
                    }
                    var mappedPk = funcs.get(pk);
                    self.query[mappedPk.length > 0 ? mappedPk : toPropCase(pk)] = value.length > 1 ? value : value[0];
                    return proxy;
                };
            }
            var propKey = props.has(pk) ? props.get(pk) : toPropCase(pk);
            self.query[propKey] = true;
            return proxy;
        },
    });
}
/**
 * Describes the search API
 *
 */
var Search = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Search, _super);
    function Search() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns Promise
     */
    Search.prototype.execute = function (queryInit) {
        var _this = this;
        var query = this.parseQuery(queryInit);
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            request: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("Microsoft.Office.Server.Search.REST.SearchRequest"), Object.assign({}, query, {
                HitHighlightedProperties: this.fixArrProp(query.HitHighlightedProperties),
                Properties: this.fixArrProp(query.Properties),
                RefinementFilters: this.fixArrProp(query.RefinementFilters),
                ReorderingRules: this.fixArrProp(query.ReorderingRules),
                SelectProperties: this.fixArrProp(query.SelectProperties),
                SortList: this.fixArrProp(query.SortList),
            })),
        });
        // if we are using caching with this search request, then we need to handle some work upfront to enable that
        if (this._useCaching) {
            // force use of the cache for this request if .usingCaching was called
            this._forceCaching = true;
            // because all the requests use the same url they would collide in the cache we use a special key
            var cacheKey = "PnPjs.SearchWithCaching(" + Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["n" /* getHashCode */])(postBody) + ")";
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["x" /* objectDefinedNotNull */])(this._cachingOptions)) {
                // if our key ends in the postquery url we overwrite it
                if (/\/_api\/search\/postquery$/i.test(this._cachingOptions.key)) {
                    this._cachingOptions.key = cacheKey;
                }
            }
            else {
                this._cachingOptions = new __WEBPACK_IMPORTED_MODULE_3__pnp_odata__["CachingOptions"](cacheKey);
            }
        }
        return this.postCore({ body: postBody }).then(function (data) { return new SearchResults(data, _this.toUrl(), query); });
    };
    /**
     * Fix array property
     *
     * @param prop property to fix for container struct
     */
    Search.prototype.fixArrProp = function (prop) {
        if (typeof prop === "undefined") {
            return ({ results: [] });
        }
        prop = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["q" /* isArray */])(prop) ? prop : [prop];
        return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(prop, "results") ? prop : { results: prop };
    };
    /**
     * Translates one of the query initializers into a SearchQuery instance
     *
     * @param query
     */
    Search.prototype.parseQuery = function (query) {
        var finalQuery;
        if (typeof query === "string") {
            finalQuery = { Querytext: query };
        }
        else if (query.toSearchQuery) {
            finalQuery = query.toSearchQuery();
        }
        else {
            finalQuery = query;
        }
        return finalQuery;
    };
    Search = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("_api/search/postquery")
    ], Search);
    return Search;
}(SharePointQueryableInstance));
/**
 * Describes the SearchResults class, which returns the formatted and raw version of the query response
 */
var SearchResults = /** @class */ (function () {
    /**
     * Creates a new instance of the SearchResult class
     *
     */
    function SearchResults(rawResponse, _url, _query, _raw, _primary) {
        if (_raw === void 0) { _raw = null; }
        if (_primary === void 0) { _primary = null; }
        this._url = _url;
        this._query = _query;
        this._raw = _raw;
        this._primary = _primary;
        this._raw = rawResponse.postquery ? rawResponse.postquery : rawResponse;
    }
    Object.defineProperty(SearchResults.prototype, "ElapsedTime", {
        get: function () {
            return this.RawSearchResults.ElapsedTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "RowCount", {
        get: function () {
            return this.RawSearchResults.PrimaryQueryResult.RelevantResults.RowCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "TotalRows", {
        get: function () {
            return this.RawSearchResults.PrimaryQueryResult.RelevantResults.TotalRows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "TotalRowsIncludingDuplicates", {
        get: function () {
            return this.RawSearchResults.PrimaryQueryResult.RelevantResults.TotalRowsIncludingDuplicates;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "RawSearchResults", {
        get: function () {
            return this._raw;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "PrimarySearchResults", {
        get: function () {
            if (this._primary === null) {
                this._primary = this.formatSearchResults(this._raw.PrimaryQueryResult.RelevantResults.Table.Rows);
            }
            return this._primary;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a page of results
     *
     * @param pageNumber Index of the page to return. Used to determine StartRow
     * @param pageSize Optional, items per page (default = 10)
     */
    SearchResults.prototype.getPage = function (pageNumber, pageSize) {
        // if we got all the available rows we don't have another page
        if (this.TotalRows < this.RowCount) {
            return Promise.resolve(null);
        }
        // if pageSize is supplied, then we use that regardless of any previous values
        // otherwise get the previous RowLimit or default to 10
        var rows = pageSize !== undefined ? pageSize : Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(this._query, "RowLimit") ? this._query.RowLimit : 10;
        var query = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(this._query, {
            RowLimit: rows,
            StartRow: rows * (pageNumber - 1),
        });
        // we have reached the end
        if (query.StartRow > this.TotalRows) {
            return Promise.resolve(null);
        }
        var search = new Search(this._url, null);
        return search.execute(query);
    };
    /**
     * Formats a search results array
     *
     * @param rawResults The array to process
     */
    SearchResults.prototype.formatSearchResults = function (rawResults) {
        var results = new Array();
        var tempResults = rawResults.results ? rawResults.results : rawResults;
        for (var _i = 0, tempResults_1 = tempResults; _i < tempResults_1.length; _i++) {
            var tempResult = tempResults_1[_i];
            var cells = tempResult.Cells.results ? tempResult.Cells.results : tempResult.Cells;
            results.push(cells.reduce(function (res, cell) {
                Object.defineProperty(res, cell.Key, {
                    configurable: false,
                    enumerable: true,
                    value: cell.Value,
                    writable: false,
                });
                return res;
            }, {}));
        }
        return results;
    };
    return SearchResults;
}());
/**
 * defines the SortDirection enum
 */
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Ascending"] = 0] = "Ascending";
    SortDirection[SortDirection["Descending"] = 1] = "Descending";
    SortDirection[SortDirection["FQLFormula"] = 2] = "FQLFormula";
})(SortDirection || (SortDirection = {}));
/**
 * defines the ReorderingRuleMatchType  enum
 */
var ReorderingRuleMatchType;
(function (ReorderingRuleMatchType) {
    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultContainsKeyword"] = 0] = "ResultContainsKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleContainsKeyword"] = 1] = "TitleContainsKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleMatchesKeyword"] = 2] = "TitleMatchesKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlStartsWith"] = 3] = "UrlStartsWith";
    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlExactlyMatches"] = 4] = "UrlExactlyMatches";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ContentTypeIs"] = 5] = "ContentTypeIs";
    ReorderingRuleMatchType[ReorderingRuleMatchType["FileExtensionMatches"] = 6] = "FileExtensionMatches";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultHasTag"] = 7] = "ResultHasTag";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ManualCondition"] = 8] = "ManualCondition";
})(ReorderingRuleMatchType || (ReorderingRuleMatchType = {}));
/**
 * Specifies the type value for the property
 */
var QueryPropertyValueType;
(function (QueryPropertyValueType) {
    QueryPropertyValueType[QueryPropertyValueType["None"] = 0] = "None";
    QueryPropertyValueType[QueryPropertyValueType["StringType"] = 1] = "StringType";
    QueryPropertyValueType[QueryPropertyValueType["Int32Type"] = 2] = "Int32Type";
    QueryPropertyValueType[QueryPropertyValueType["BooleanType"] = 3] = "BooleanType";
    QueryPropertyValueType[QueryPropertyValueType["StringArrayType"] = 4] = "StringArrayType";
    QueryPropertyValueType[QueryPropertyValueType["UnSupportedType"] = 5] = "UnSupportedType";
})(QueryPropertyValueType || (QueryPropertyValueType = {}));
var SearchBuiltInSourceId = /** @class */ (function () {
    function SearchBuiltInSourceId() {
    }
    SearchBuiltInSourceId.Documents = "e7ec8cee-ded8-43c9-beb5-436b54b31e84";
    SearchBuiltInSourceId.ItemsMatchingContentType = "5dc9f503-801e-4ced-8a2c-5d1237132419";
    SearchBuiltInSourceId.ItemsMatchingTag = "e1327b9c-2b8c-4b23-99c9-3730cb29c3f7";
    SearchBuiltInSourceId.ItemsRelatedToCurrentUser = "48fec42e-4a92-48ce-8363-c2703a40e67d";
    SearchBuiltInSourceId.ItemsWithSameKeywordAsThisItem = "5c069288-1d17-454a-8ac6-9c642a065f48";
    SearchBuiltInSourceId.LocalPeopleResults = "b09a7990-05ea-4af9-81ef-edfab16c4e31";
    SearchBuiltInSourceId.LocalReportsAndDataResults = "203fba36-2763-4060-9931-911ac8c0583b";
    SearchBuiltInSourceId.LocalSharePointResults = "8413cd39-2156-4e00-b54d-11efd9abdb89";
    SearchBuiltInSourceId.LocalVideoResults = "78b793ce-7956-4669-aa3b-451fc5defebf";
    SearchBuiltInSourceId.Pages = "5e34578e-4d08-4edc-8bf3-002acf3cdbcc";
    SearchBuiltInSourceId.Pictures = "38403c8c-3975-41a8-826e-717f2d41568a";
    SearchBuiltInSourceId.Popular = "97c71db1-58ce-4891-8b64-585bc2326c12";
    SearchBuiltInSourceId.RecentlyChangedItems = "ba63bbae-fa9c-42c0-b027-9a878f16557c";
    SearchBuiltInSourceId.RecommendedItems = "ec675252-14fa-4fbe-84dd-8d098ed74181";
    SearchBuiltInSourceId.Wiki = "9479bf85-e257-4318-b5a8-81a180f5faa1";
    return SearchBuiltInSourceId;
}());

var SearchSuggest = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SearchSuggest, _super);
    function SearchSuggest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchSuggest.prototype.execute = function (query) {
        this.mapQueryToQueryString(query);
        return this.get().then(function (response) {
            var mapper = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(response, "suggest") ? function (s) { return response.suggest[s].results; } : function (s) { return response[s]; };
            return {
                PeopleNames: mapper("PeopleNames"),
                PersonalResults: mapper("PersonalResults"),
                Queries: mapper("Queries"),
            };
        });
    };
    SearchSuggest.prototype.mapQueryToQueryString = function (query) {
        var _this = this;
        var setProp = function (q) { return function (checkProp) { return function (sp) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(q, checkProp)) {
                _this.query.set(sp, q[checkProp].toString());
            }
        }; }; };
        this.query.set("querytext", "'" + query.querytext + "'");
        var querySetter = setProp(query);
        querySetter("count")("inumberofquerysuggestions");
        querySetter("personalCount")("inumberofresultsuggestions");
        querySetter("preQuery")("fprequerysuggestions");
        querySetter("hitHighlighting")("fhithighlighting");
        querySetter("capitalize")("fcapitalizefirstletters");
        querySetter("culture")("culture");
        querySetter("stemming")("enablestemming");
        querySetter("includePeople")("showpeoplenamesuggestions");
        querySetter("queryRules")("enablequeryrules");
        querySetter("prefixMatch")("fprefixmatchallterms");
    };
    SearchSuggest = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("_api/search/suggest")
    ], SearchSuggest);
    return SearchSuggest;
}(SharePointQueryableInstance));

/**
 * Describes a collection of List objects
 *
 */
var Features = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Features, _super);
    function Features() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Features_1 = Features;
    /**
     * Adds a new list to the collection
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature activation will be forced
     */
    Features.prototype.add = function (id, force) {
        var _this = this;
        if (force === void 0) { force = false; }
        return this.clone(Features_1, "add").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                featdefScope: 0,
                featureId: id,
                force: force,
            }),
        }).then(function (data) {
            return {
                data: data,
                feature: _this.getById(id),
            };
        });
    };
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the feature (GUID)
     */
    Features.prototype.getById = function (id) {
        var feature = new Feature(this);
        feature.concat("('" + id + "')");
        return feature;
    };
    /**
     * Removes (deactivates) a feature from the collection
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature deactivation will be forced
     */
    Features.prototype.remove = function (id, force) {
        if (force === void 0) { force = false; }
        return this.clone(Features_1, "remove").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                featureId: id,
                force: force,
            }),
        });
    };
    var Features_1;
    Features = Features_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("features")
    ], Features);
    return Features;
}(SharePointQueryableCollection));
var Feature = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Feature, _super);
    function Feature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Removes (deactivates) a feature from the collection
     *
     * @param force If true the feature deactivation will be forced
     */
    Feature.prototype.deactivate = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        var removeDependency = this.addBatchDependency();
        var idGet = new Feature(this).select("DefinitionId");
        return idGet.get().then(function (feature) {
            var promise = _this.getParent(Features, _this.parentUrl, "", _this.batch).remove(feature.DefinitionId, force);
            removeDependency();
            return promise;
        });
    };
    return Feature;
}(SharePointQueryableInstance));

var RelatedItemManagerImpl = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(RelatedItemManagerImpl, _super);
    function RelatedItemManagerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RelatedItemManagerImpl_1 = RelatedItemManagerImpl;
    RelatedItemManagerImpl.FromUrl = function (url) {
        if (url === null) {
            return new RelatedItemManagerImpl_1("");
        }
        var index = url.indexOf("_api/");
        if (index > -1) {
            return new RelatedItemManagerImpl_1(url.substr(0, index));
        }
        return new RelatedItemManagerImpl_1(url);
    };
    RelatedItemManagerImpl.prototype.getRelatedItems = function (sourceListName, sourceItemId) {
        var query = this.clone(RelatedItemManagerImpl_1, null);
        query.concat(".GetRelatedItems");
        return query.postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                SourceItemID: sourceItemId,
                SourceListName: sourceListName,
            }),
        });
    };
    RelatedItemManagerImpl.prototype.getPageOneRelatedItems = function (sourceListName, sourceItemId) {
        var query = this.clone(RelatedItemManagerImpl_1, null);
        query.concat(".GetPageOneRelatedItems");
        return query.postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                SourceItemID: sourceItemId,
                SourceListName: sourceListName,
            }),
        });
    };
    RelatedItemManagerImpl.prototype.addSingleLink = function (sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemID, targetWebUrl, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(RelatedItemManagerImpl_1, null);
        query.concat(".AddSingleLink");
        return query.postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                SourceItemID: sourceItemId,
                SourceListName: sourceListName,
                SourceWebUrl: sourceWebUrl,
                TargetItemID: targetItemID,
                TargetListName: targetListName,
                TargetWebUrl: targetWebUrl,
                TryAddReverseLink: tryAddReverseLink,
            }),
        });
    };
    /**
     * Adds a related item link from an item specified by list name and item id, to an item specified by url
     *
     * @param sourceListName The source list name or list id
     * @param sourceItemId The source item id
     * @param targetItemUrl The target item url
     * @param tryAddReverseLink If set to true try to add the reverse link (will not return error if it fails)
     */
    RelatedItemManagerImpl.prototype.addSingleLinkToUrl = function (sourceListName, sourceItemId, targetItemUrl, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(RelatedItemManagerImpl_1, null);
        query.concat(".AddSingleLinkToUrl");
        return query.postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                SourceItemID: sourceItemId,
                SourceListName: sourceListName,
                TargetItemUrl: targetItemUrl,
                TryAddReverseLink: tryAddReverseLink,
            }),
        });
    };
    /**
     * Adds a related item link from an item specified by url, to an item specified by list name and item id
     *
     * @param sourceItemUrl The source item url
     * @param targetListName The target list name or list id
     * @param targetItemId The target item id
     * @param tryAddReverseLink If set to true try to add the reverse link (will not return error if it fails)
     */
    RelatedItemManagerImpl.prototype.addSingleLinkFromUrl = function (sourceItemUrl, targetListName, targetItemId, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(RelatedItemManagerImpl_1, null);
        query.concat(".AddSingleLinkFromUrl");
        return query.postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                SourceItemUrl: sourceItemUrl,
                TargetItemID: targetItemId,
                TargetListName: targetListName,
                TryAddReverseLink: tryAddReverseLink,
            }),
        });
    };
    RelatedItemManagerImpl.prototype.deleteSingleLink = function (sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemId, targetWebUrl, tryDeleteReverseLink) {
        if (tryDeleteReverseLink === void 0) { tryDeleteReverseLink = false; }
        var query = this.clone(RelatedItemManagerImpl_1, null);
        query.concat(".DeleteSingleLink");
        return query.postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                SourceItemID: sourceItemId,
                SourceListName: sourceListName,
                SourceWebUrl: sourceWebUrl,
                TargetItemID: targetItemId,
                TargetListName: targetListName,
                TargetWebUrl: targetWebUrl,
                TryDeleteReverseLink: tryDeleteReverseLink,
            }),
        });
    };
    var RelatedItemManagerImpl_1;
    RelatedItemManagerImpl = RelatedItemManagerImpl_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("_api/SP.RelatedItemManager")
    ], RelatedItemManagerImpl);
    return RelatedItemManagerImpl;
}(SharePointQueryable));

/**
 * Describes a collection of webs
 *
 */
var Webs = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Webs, _super);
    function Webs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Webs_1 = Webs;
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    Webs.prototype.add = function (title, url, description, template, language, inheritPermissions) {
        if (description === void 0) { description = ""; }
        if (template === void 0) { template = "STS"; }
        if (language === void 0) { language = 1033; }
        if (inheritPermissions === void 0) { inheritPermissions = true; }
        var props = {
            Description: description,
            Language: language,
            Title: title,
            Url: url,
            UseSamePermissionsAsParentSite: inheritPermissions,
            WebTemplate: template,
        };
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            "parameters": Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({
                "__metadata": { "type": "SP.WebCreationInformation" },
            }, props),
        });
        return this.clone(Webs_1, "add").postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                web: new Web(odataUrlFrom(data).replace(/_api\/web\/?/i, "")),
            };
        });
    };
    var Webs_1;
    Webs = Webs_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("webs")
    ], Webs);
    return Webs;
}(SharePointQueryableCollection));
/**
 * Describes a collection of web infos
 *
 */
var WebInfos = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(WebInfos, _super);
    function WebInfos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebInfos = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("webinfos")
    ], WebInfos);
    return WebInfos;
}(SharePointQueryableCollection));
/**
 * Describes a web
 *
 */
var Web = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Web, _super);
    function Web() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Web_1 = Web;
    /**
     * Creates a new web instance from the given url by indexing the location of the /_api/
     * segment. If this is not found the method creates a new web with the entire string as
     * supplied.
     *
     * @param url
     */
    Web.fromUrl = function (url, path) {
        return new Web_1(extractWebUrl(url), path);
    };
    Object.defineProperty(Web.prototype, "webs", {
        /**
         * Gets this web's subwebs
         *
         */
        get: function () {
            return new Webs(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets this web's parent web and data
     *
     */
    Web.prototype.getParentWeb = function () {
        var _this = this;
        return this.select("ParentWeb/Id").expand("ParentWeb").get()
            .then(function (_a) {
            var ParentWeb = _a.ParentWeb;
            return new Site(_this.toUrlAndQuery().split("/_api")[0]).openWebById(ParentWeb.Id);
        });
    };
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    Web.prototype.getSubwebsFilteredForCurrentUser = function (nWebTemplateFilter, nConfigurationFilter) {
        if (nWebTemplateFilter === void 0) { nWebTemplateFilter = -1; }
        if (nConfigurationFilter === void 0) { nConfigurationFilter = -1; }
        return this.clone(Webs, "getSubwebsFilteredForCurrentUser(nWebTemplateFilter=" + nWebTemplateFilter + ",nConfigurationFilter=" + nConfigurationFilter + ")");
    };
    Object.defineProperty(Web.prototype, "allProperties", {
        /**
         * Allows access to the web's all properties collection
         */
        get: function () {
            return this.clone(SharePointQueryableCollection, "allproperties");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "webinfos", {
        /**
         * Gets a collection of WebInfos for this web's subwebs
         *
         */
        get: function () {
            return new WebInfos(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "contentTypes", {
        /**
         * Gets the content types available in this web
         *
         */
        get: function () {
            return new ContentTypes(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "lists", {
        /**
         * Gets the lists in this web
         *
         */
        get: function () {
            return new Lists(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "fields", {
        /**
         * Gets the fields in this web
         *
         */
        get: function () {
            return new Fields(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "features", {
        /**
         * Gets the active features for this web
         *
         */
        get: function () {
            return new Features(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "availablefields", {
        /**
         * Gets the available fields in this web
         *
         */
        get: function () {
            return new Fields(this, "availablefields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "navigation", {
        /**
         * Gets the navigation options in this web
         *
         */
        get: function () {
            return new Navigation(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "siteUsers", {
        /**
         * Gets the site users
         *
         */
        get: function () {
            return new SiteUsers(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "siteGroups", {
        /**
         * Gets the site groups
         *
         */
        get: function () {
            return new SiteGroups(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "siteUserInfoList", {
        /**
         * Gets site user info list
         *
         */
        get: function () {
            return new List(this, "siteuserinfolist");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "regionalSettings", {
        /**
         * Gets regional settings
         *
         */
        get: function () {
            return new RegionalSettings(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "currentUser", {
        /**
         * Gets the current user
         */
        get: function () {
            return new CurrentUser(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "folders", {
        /**
         * Gets the top-level folders in this web
         *
         */
        get: function () {
            return new Folders(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "userCustomActions", {
        /**
         * Gets all user custom actions for this web
         *
         */
        get: function () {
            return new UserCustomActions(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "roleDefinitions", {
        /**
         * Gets the collection of RoleDefinition resources
         *
         */
        get: function () {
            return new RoleDefinitions(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "relatedItems", {
        /**
         * Provides an interface to manage related items
         *
         */
        get: function () {
            return RelatedItemManagerImpl.FromUrl(this.toUrl());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new batch for requests within the context of this web
     *
     */
    Web.prototype.createBatch = function () {
        return new SPBatch(this.parentUrl);
    };
    Object.defineProperty(Web.prototype, "rootFolder", {
        /**
         * Gets the root folder of this web
         *
         */
        get: function () {
            return new Folder(this, "rootFolder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "associatedOwnerGroup", {
        /**
         * Gets the associated owner group for this web
         *
         */
        get: function () {
            return new SiteGroup(this, "associatedownergroup");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "associatedMemberGroup", {
        /**
         * Gets the associated member group for this web
         *
         */
        get: function () {
            return new SiteGroup(this, "associatedmembergroup");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "associatedVisitorGroup", {
        /**
         * Gets the associated visitor group for this web
         *
         */
        get: function () {
            return new SiteGroup(this, "associatedvisitorgroup");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "defaultDocumentLibrary", {
        /**
         * Gets the default document library for this web
         *
         */
        get: function () {
            return new List(this, "DefaultDocumentLibrary");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a folder by server relative url
     *
     * @param folderRelativeUrl The server relative path to the folder (including /sites/ if applicable)
     */
    Web.prototype.getFolderByServerRelativeUrl = function (folderRelativeUrl) {
        return new Folder(this, "getFolderByServerRelativeUrl('" + folderRelativeUrl + "')");
    };
    /**
     * Gets a folder by server relative relative path if your folder name contains # and % characters
     * you need to first encode the file name using encodeURIComponent() and then pass the url
     * let url = "/sites/test/Shared Documents/" + encodeURIComponent("%123");
     * This works only in SharePoint online.
     *
     * @param folderRelativeUrl The server relative path to the folder (including /sites/ if applicable)
     */
    Web.prototype.getFolderByServerRelativePath = function (folderRelativeUrl) {
        return new Folder(this, "getFolderByServerRelativePath(decodedUrl='" + folderRelativeUrl + "')");
    };
    /**
     * Gets a file by server relative url
     *
     * @param fileRelativeUrl The server relative path to the file (including /sites/ if applicable)
     */
    Web.prototype.getFileByServerRelativeUrl = function (fileRelativeUrl) {
        return new File(this, "getFileByServerRelativeUrl('" + fileRelativeUrl + "')");
    };
    /**
     * Gets a file by server relative url if your file name contains # and % characters
     * you need to first encode the file name using encodeURIComponent() and then pass the url
     * let url = "/sites/test/Shared Documents/" + encodeURIComponent("%123.docx");
     *
     * @param fileRelativeUrl The server relative path to the file (including /sites/ if applicable)
     */
    Web.prototype.getFileByServerRelativePath = function (fileRelativeUrl) {
        return new File(this, "getFileByServerRelativePath(decodedUrl='" + fileRelativeUrl + "')");
    };
    /**
     * Gets a list by server relative url (list's root folder)
     *
     * @param listRelativeUrl The server relative path to the list's root folder (including /sites/ if applicable)
     */
    Web.prototype.getList = function (listRelativeUrl) {
        return new List(this, "getList('" + listRelativeUrl + "')");
    };
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    Web.prototype.update = function (properties) {
        var _this = this;
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({
            "__metadata": { "type": "SP.Web" },
        }, properties));
        return this.postCore({
            body: postBody,
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            return {
                data: data,
                web: _this,
            };
        });
    };
    /**
     * Deletes this web
     *
     */
    Web.prototype.delete = function () {
        return _super.prototype.deleteCore.call(this);
    };
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    Web.prototype.applyTheme = function (colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            backgroundImageUrl: backgroundImageUrl,
            colorPaletteUrl: colorPaletteUrl,
            fontSchemeUrl: fontSchemeUrl,
            shareGenerated: shareGenerated,
        });
        return this.clone(Web_1, "applytheme").postCore({ body: postBody });
    };
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    Web.prototype.applyWebTemplate = function (template) {
        var q = this.clone(Web_1, "applywebtemplate");
        q.concat("(@t)");
        q.query.set("@t", template);
        return q.postCore();
    };
    /**
     * Checks whether the specified login name belongs to a valid user in the web. If the user doesn't exist, adds the user to the web.
     *
     * @param loginName The login name of the user (ex: i:0#.f|membership|user@domain.onmicrosoft.com)
     */
    Web.prototype.ensureUser = function (loginName) {
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            logonName: loginName,
        });
        return this.clone(Web_1, "ensureuser").postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                user: new SiteUser(odataUrlFrom(data)),
            };
        });
    };
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    Web.prototype.availableWebTemplates = function (language, includeCrossLanugage) {
        if (language === void 0) { language = 1033; }
        if (includeCrossLanugage === void 0) { includeCrossLanugage = true; }
        return new SharePointQueryableCollection(this, "getavailablewebtemplates(lcid=" + language + ", doincludecrosslanguage=" + includeCrossLanugage + ")");
    };
    /**
     * Returns the list gallery on the site
     *
     * @param type The gallery type - WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114,
     * MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125
     */
    Web.prototype.getCatalog = function (type) {
        return this.clone(Web_1, "getcatalog(" + type + ")").select("Id").get().then(function (data) {
            return new List(odataUrlFrom(data));
        });
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    Web.prototype.getChanges = function (query) {
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({ "query": Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])({ "__metadata": { "type": "SP.ChangeQuery" } }, query) });
        return this.clone(Web_1, "getchanges").postCore({ body: postBody });
    };
    Object.defineProperty(Web.prototype, "customListTemplate", {
        /**
         * Gets the custom list templates for the site
         *
         */
        get: function () {
            return new SharePointQueryableCollection(this, "getcustomlisttemplates");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the user corresponding to the specified member identifier for the current site
     *
     * @param id The id of the user
     */
    Web.prototype.getUserById = function (id) {
        return new SiteUser(this, "getUserById(" + id + ")");
    };
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    Web.prototype.mapToIcon = function (filename, size, progId) {
        if (size === void 0) { size = 0; }
        if (progId === void 0) { progId = ""; }
        return this.clone(Web_1, "maptoicon(filename='" + filename + "', progid='" + progId + "', size=" + size + ")").get();
    };
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    Web.prototype.getStorageEntity = function (key) {
        return this.clone(Web_1, "getStorageEntity('" + key + "')").get();
    };
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    Web.prototype.setStorageEntity = function (key, value, description, comments) {
        if (description === void 0) { description = ""; }
        if (comments === void 0) { comments = ""; }
        return this.clone(Web_1, "setStorageEntity").postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
                comments: comments,
                description: description,
                key: key,
                value: value,
            }),
        });
    };
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    Web.prototype.removeStorageEntity = function (key) {
        return this.clone(Web_1, "removeStorageEntity('" + key + "')").postCore();
    };
    /**
     * Gets the app catalog for this web
     *
     * @param url Optional url or web containing the app catalog (default: current web)
     */
    Web.prototype.getAppCatalog = function (url) {
        return new AppCatalog(url || this);
    };
    /**
     * Gets the collection of available client side web parts for this web instance
     */
    Web.prototype.getClientSideWebParts = function () {
        return this.clone(SharePointQueryableCollection, "GetClientSideWebParts").get();
    };
    /**
     * Creates a new client side page
     *
     * @param pageName Name of the new page
     * @param title Display title of the new page
     * @param libraryTitle Title of the library in which to create the new page. Default: "Site Pages"
     */
    Web.prototype.addClientSidePage = function (pageName, title, libraryTitle) {
        if (title === void 0) { title = pageName.replace(/\.[^/.]+$/, ""); }
        if (libraryTitle === void 0) { libraryTitle = "Site Pages"; }
        return ClientSidePage.create(this.lists.getByTitle(libraryTitle), pageName, title);
    };
    /**
     * Creates a new client side page using the library path
     *
     * @param pageName Name of the new page
     * @param listRelativePath The server relative path to the list's root folder (including /sites/ if applicable)
     * @param title Display title of the new page
     */
    Web.prototype.addClientSidePageByPath = function (pageName, listRelativePath, title) {
        if (title === void 0) { title = pageName.replace(/\.[^/.]+$/, ""); }
        return ClientSidePage.create(this.getList(listRelativePath), pageName, title);
    };
    var Web_1;
    Web = Web_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("_api/web")
    ], Web);
    return Web;
}(SharePointQueryableShareableWeb));

/**
 * Describes a site collection
 *
 */
var Site = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Site, _super);
    function Site() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Site_1 = Site;
    Object.defineProperty(Site.prototype, "rootWeb", {
        /**
         * Gets the root web of the site collection
         *
         */
        get: function () {
            return new Web(this, "rootweb");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Site.prototype, "features", {
        /**
         * Gets the active features for this site collection
         *
         */
        get: function () {
            return new Features(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Site.prototype, "userCustomActions", {
        /**
         * Gets all custom actions for this site collection
         *
         */
        get: function () {
            return new UserCustomActions(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    Site.prototype.getRootWeb = function () {
        return this.rootWeb.select("Url").get().then(function (web) { return new Web(web.Url); });
    };
    /**
     * Gets the context information for this site collection
     */
    Site.prototype.getContextInfo = function () {
        var q = new Site_1(this.parentUrl, "_api/contextinfo");
        return q.postCore().then(function (data) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(data, "GetContextWebInformation")) {
                var info = data.GetContextWebInformation;
                info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
                return info;
            }
            else {
                return data;
            }
        });
    };
    /**
     * Gets the document libraries on a site. Static method. (SharePoint Online only)
     *
     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
     */
    Site.prototype.getDocumentLibraries = function (absoluteWebUrl) {
        var q = new SharePointQueryable("", "_api/sp.web.getdocumentlibraries(@v)");
        q.query.set("@v", "'" + absoluteWebUrl + "'");
        return q.get().then(function (data) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(data, "GetDocumentLibraries")) {
                return data.GetDocumentLibraries;
            }
            else {
                return data;
            }
        });
    };
    /**
     * Gets the site url from a page url
     *
     * @param absolutePageUrl The absolute url of the page
     */
    Site.prototype.getWebUrlFromPageUrl = function (absolutePageUrl) {
        var q = new SharePointQueryable("", "_api/sp.web.getweburlfrompageurl(@v)");
        q.query.set("@v", "'" + absolutePageUrl + "'");
        return q.get().then(function (data) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(data, "GetWebUrlFromPageUrl")) {
                return data.GetWebUrlFromPageUrl;
            }
            else {
                return data;
            }
        });
    };
    /**
     * Creates a new batch for requests within the context of this site collection
     *
     */
    Site.prototype.createBatch = function () {
        return new SPBatch(this.parentUrl);
    };
    /**
     * Opens a web by id (using POST)
     *
     * @param webId The GUID id of the web to open
     */
    Site.prototype.openWebById = function (webId) {
        return this.clone(Site_1, "openWebById('" + webId + "')").postCore().then(function (d) { return ({
            data: d,
            web: Web.fromUrl(d["odata.id"] || d.__metadata.uri),
        }); });
    };
    var Site_1;
    Site = Site_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("_api/site")
    ], Site);
    return Site;
}(SharePointQueryableInstance));

var UserProfileQuery = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(UserProfileQuery, _super);
    /**
     * Creates a new instance of the UserProfileQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this user profile query
     */
    function UserProfileQuery(baseUrl, path) {
        if (path === void 0) { path = "_api/sp.userprofiles.peoplemanager"; }
        var _this = _super.call(this, baseUrl, path) || this;
        _this.clientPeoplePickerQuery = (new ClientPeoplePickerQuery(baseUrl)).configureFrom(_this);
        _this.profileLoader = (new ProfileLoader(baseUrl)).configureFrom(_this);
        return _this;
    }
    Object.defineProperty(UserProfileQuery.prototype, "editProfileLink", {
        /**
         * The url of the edit profile page for the current user
         */
        get: function () {
            return this.clone(UserProfileQuery, "EditProfileLink").get();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProfileQuery.prototype, "isMyPeopleListPublic", {
        /**
         * A boolean value that indicates whether the current user's "People I'm Following" list is public
         */
        get: function () {
            return this.clone(UserProfileQuery, "IsMyPeopleListPublic").get();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A boolean value that indicates whether the current user is being followed by the specified user
     *
     * @param loginName The account name of the user
     */
    UserProfileQuery.prototype.amIFollowedBy = function (loginName) {
        var q = this.clone(UserProfileQuery, "amifollowedby(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * A boolean value that indicates whether the current user is following the specified user
     *
     * @param loginName The account name of the user
     */
    UserProfileQuery.prototype.amIFollowing = function (loginName) {
        var q = this.clone(UserProfileQuery, "amifollowing(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Gets tags that the current user is following
     *
     * @param maxCount The maximum number of tags to retrieve (default is 20)
     */
    UserProfileQuery.prototype.getFollowedTags = function (maxCount) {
        if (maxCount === void 0) { maxCount = 20; }
        return this.clone(UserProfileQuery, "getfollowedtags(" + maxCount + ")").get();
    };
    /**
     * Gets the people who are following the specified user
     *
     * @param loginName The account name of the user
     */
    UserProfileQuery.prototype.getFollowersFor = function (loginName) {
        var q = this.clone(UserProfileQuery, "getfollowersfor(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    Object.defineProperty(UserProfileQuery.prototype, "myFollowers", {
        /**
         * Gets the people who are following the current user
         *
         */
        get: function () {
            return new SharePointQueryableCollection(this, "getmyfollowers");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProfileQuery.prototype, "myProperties", {
        /**
         * Gets user properties for the current user
         *
         */
        get: function () {
            return new UserProfileQuery(this, "getmyproperties");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the people who the specified user is following
     *
     * @param loginName The account name of the user.
     */
    UserProfileQuery.prototype.getPeopleFollowedBy = function (loginName) {
        var q = this.clone(UserProfileQuery, "getpeoplefollowedby(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Gets user properties for the specified user.
     *
     * @param loginName The account name of the user.
     */
    UserProfileQuery.prototype.getPropertiesFor = function (loginName) {
        var q = this.clone(UserProfileQuery, "getpropertiesfor(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    Object.defineProperty(UserProfileQuery.prototype, "trendingTags", {
        /**
         * Gets the 20 most popular hash tags over the past week, sorted so that the most popular tag appears first
         *
         */
        get: function () {
            var q = this.clone(UserProfileQuery, null);
            q.concat(".gettrendingtags");
            return q.get();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the specified user profile property for the specified user
     *
     * @param loginName The account name of the user
     * @param propertyName The case-sensitive name of the property to get
     */
    UserProfileQuery.prototype.getUserProfilePropertyFor = function (loginName, propertyName) {
        var q = this.clone(UserProfileQuery, "getuserprofilepropertyfor(accountname=@v, propertyname='" + propertyName + "')");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Removes the specified user from the user's list of suggested people to follow
     *
     * @param loginName The account name of the user
     */
    UserProfileQuery.prototype.hideSuggestion = function (loginName) {
        var q = this.clone(UserProfileQuery, "hidesuggestion(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.postCore();
    };
    /**
     * A boolean values that indicates whether the first user is following the second user
     *
     * @param follower The account name of the user who might be following the followee
     * @param followee The account name of the user who might be followed by the follower
     */
    UserProfileQuery.prototype.isFollowing = function (follower, followee) {
        var q = this.clone(UserProfileQuery, null);
        q.concat(".isfollowing(possiblefolloweraccountname=@v, possiblefolloweeaccountname=@y)");
        q.query.set("@v", "'" + encodeURIComponent(follower) + "'");
        q.query.set("@y", "'" + encodeURIComponent(followee) + "'");
        return q.get();
    };
    /**
     * Uploads and sets the user profile picture (Users can upload a picture to their own profile only). Not supported for batching.
     *
     * @param profilePicSource Blob data representing the user's picture in BMP, JPEG, or PNG format of up to 4.76MB
     */
    UserProfileQuery.prototype.setMyProfilePic = function (profilePicSource) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var buffer = null;
            var reader = new FileReader();
            reader.onload = function (e) { return buffer = e.target.result; };
            reader.readAsArrayBuffer(profilePicSource);
            var request = new UserProfileQuery(_this, "setmyprofilepicture");
            request.postCore({
                body: String.fromCharCode.apply(null, new Uint16Array(buffer)),
            }).then(function (_) { return resolve(); }).catch(function (e) { return reject(e); });
        });
    };
    /**
     * Sets single value User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValue Property value
     */
    UserProfileQuery.prototype.setSingleValueProfileProperty = function (accountName, propertyName, propertyValue) {
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            accountName: accountName,
            propertyName: propertyName,
            propertyValue: propertyValue,
        });
        return this.clone(UserProfileQuery, "SetSingleValueProfileProperty")
            .postCore({ body: postBody });
    };
    /**
     * Sets multi valued User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValues Property values
     */
    UserProfileQuery.prototype.setMultiValuedProfileProperty = function (accountName, propertyName, propertyValues) {
        var postBody = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            accountName: accountName,
            propertyName: propertyName,
            propertyValues: propertyValues,
        });
        return this.clone(UserProfileQuery, "SetMultiValuedProfileProperty")
            .postCore({ body: postBody });
    };
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
     *
     * @param emails The email addresses of the users to provision sites for
     */
    UserProfileQuery.prototype.createPersonalSiteEnqueueBulk = function () {
        var emails = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            emails[_i] = arguments[_i];
        }
        return this.profileLoader.createPersonalSiteEnqueueBulk(emails);
    };
    Object.defineProperty(UserProfileQuery.prototype, "ownerUserProfile", {
        /**
         * Gets the user profile of the site owner
         *
         */
        get: function () {
            return this.profileLoader.ownerUserProfile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProfileQuery.prototype, "userProfile", {
        /**
         * Gets the user profile for the current user
         */
        get: function () {
            return this.profileLoader.userProfile;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    UserProfileQuery.prototype.createPersonalSite = function (interactiveRequest) {
        if (interactiveRequest === void 0) { interactiveRequest = false; }
        return this.profileLoader.createPersonalSite(interactiveRequest);
    };
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private
     */
    UserProfileQuery.prototype.shareAllSocialData = function (share) {
        return this.profileLoader.shareAllSocialData(share);
    };
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    UserProfileQuery.prototype.clientPeoplePickerResolveUser = function (queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerResolveUser(queryParams);
    };
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    UserProfileQuery.prototype.clientPeoplePickerSearchUser = function (queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerSearchUser(queryParams);
    };
    return UserProfileQuery;
}(SharePointQueryableInstance));
var ProfileLoader = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ProfileLoader, _super);
    function ProfileLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfileLoader_1 = ProfileLoader;
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only) Doesn't support batching
     *
     * @param emails The email addresses of the users to provision sites for
     */
    ProfileLoader.prototype.createPersonalSiteEnqueueBulk = function (emails) {
        return this.clone(ProfileLoader_1, "createpersonalsiteenqueuebulk", false).postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({ "emailIDs": emails }),
        });
    };
    Object.defineProperty(ProfileLoader.prototype, "ownerUserProfile", {
        /**
         * Gets the user profile of the site owner.
         *
         */
        get: function () {
            var q = this.getParent(ProfileLoader_1, this.parentUrl, "_api/sp.userprofiles.profileloader.getowneruserprofile");
            if (this.hasBatch) {
                q = q.inBatch(this.batch);
            }
            return q.postCore();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileLoader.prototype, "userProfile", {
        /**
         * Gets the user profile of the current user.
         *
         */
        get: function () {
            return this.clone(ProfileLoader_1, "getuserprofile").postCore();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    ProfileLoader.prototype.createPersonalSite = function (interactiveRequest) {
        if (interactiveRequest === void 0) { interactiveRequest = false; }
        return this.clone(ProfileLoader_1, "getuserprofile/createpersonalsiteenque(" + interactiveRequest + ")").postCore();
    };
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private.
     */
    ProfileLoader.prototype.shareAllSocialData = function (share) {
        return this.clone(ProfileLoader_1, "getuserprofile/shareallsocialdata(" + share + ")").postCore();
    };
    var ProfileLoader_1;
    ProfileLoader = ProfileLoader_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("_api/sp.userprofiles.profileloader.getprofileloader")
    ], ProfileLoader);
    return ProfileLoader;
}(SharePointQueryable));
var ClientPeoplePickerQuery = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ClientPeoplePickerQuery, _super);
    function ClientPeoplePickerQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientPeoplePickerQuery_1 = ClientPeoplePickerQuery;
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    ClientPeoplePickerQuery.prototype.clientPeoplePickerResolveUser = function (queryParams) {
        var q = this.clone(ClientPeoplePickerQuery_1, null);
        q.concat(".clientpeoplepickerresolveuser");
        return q.postCore({
            body: this.createClientPeoplePickerQueryParametersRequestBody(queryParams),
        })
            .then(function (res) {
            if (typeof res === "object") {
                return res.ClientPeoplePickerResolveUser;
            }
            return res;
        })
            .then(JSON.parse);
    };
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    ClientPeoplePickerQuery.prototype.clientPeoplePickerSearchUser = function (queryParams) {
        var q = this.clone(ClientPeoplePickerQuery_1, null);
        q.concat(".clientpeoplepickersearchuser");
        return q.postCore({
            body: this.createClientPeoplePickerQueryParametersRequestBody(queryParams),
        })
            .then(function (res) {
            if (typeof res === "object") {
                return res.ClientPeoplePickerSearchUser;
            }
            return res;
        })
            .then(JSON.parse);
    };
    /**
     * Creates ClientPeoplePickerQueryParameters request body
     *
     * @param queryParams The query parameters to create request body
     */
    ClientPeoplePickerQuery.prototype.createClientPeoplePickerQueryParametersRequestBody = function (queryParams) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            "queryParams": Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters"), queryParams),
        });
    };
    var ClientPeoplePickerQuery_1;
    ClientPeoplePickerQuery = ClientPeoplePickerQuery_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("_api/sp.ui.applicationpages.clientpeoplepickerwebserviceinterface")
    ], ClientPeoplePickerQuery);
    return ClientPeoplePickerQuery;
}(SharePointQueryable));

/**
 * Exposes social following methods
 */
var SocialQuery = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(SocialQuery, _super);
    function SocialQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialQuery_1 = SocialQuery;
    Object.defineProperty(SocialQuery.prototype, "my", {
        get: function () {
            return new MySocialQuery(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a URI to a site that lists the current user's followed sites.
     */
    SocialQuery.prototype.getFollowedSitesUri = function () {
        return this.clone(SocialQuery_1, "FollowedSitesUri").get().then(function (r) {
            return r.FollowedSitesUri || r;
        });
    };
    /**
     * Gets a URI to a site that lists the current user's followed documents.
     */
    SocialQuery.prototype.getFollowedDocumentsUri = function () {
        return this.clone(SocialQuery_1, "FollowedDocumentsUri").get().then(function (r) {
            return r.FollowedDocumentsUri || r;
        });
    };
    /**
     * Makes the current user start following a user, document, site, or tag
     *
     * @param actorInfo The actor to start following
     */
    SocialQuery.prototype.follow = function (actorInfo) {
        return this.clone(SocialQuery_1, "follow").postCore({ body: this.createSocialActorInfoRequestBody(actorInfo) });
    };
    /**
     * Indicates whether the current user is following a specified user, document, site, or tag
     *
     * @param actorInfo The actor to find the following status for
     */
    SocialQuery.prototype.isFollowed = function (actorInfo) {
        return this.clone(SocialQuery_1, "isfollowed").postCore({ body: this.createSocialActorInfoRequestBody(actorInfo) });
    };
    /**
     * Makes the current user stop following a user, document, site, or tag
     *
     * @param actorInfo The actor to stop following
     */
    SocialQuery.prototype.stopFollowing = function (actorInfo) {
        return this.clone(SocialQuery_1, "stopfollowing").postCore({ body: this.createSocialActorInfoRequestBody(actorInfo) });
    };
    /**
     * Creates SocialActorInfo request body
     *
     * @param actorInfo The actor to create request body
     */
    SocialQuery.prototype.createSocialActorInfoRequestBody = function (actorInfo) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])({
            "actor": Object.assign(metadata("SP.Social.SocialActorInfo"), {
                Id: null,
            }, actorInfo),
        });
    };
    var SocialQuery_1;
    SocialQuery = SocialQuery_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("_api/social.following")
    ], SocialQuery);
    return SocialQuery;
}(SharePointQueryableInstance));
var MySocialQuery = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(MySocialQuery, _super);
    function MySocialQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySocialQuery_1 = MySocialQuery;
    /**
     * Gets users, documents, sites, and tags that the current user is following.
     *
     * @param types Bitwise set of SocialActorTypes to retrieve
     */
    MySocialQuery.prototype.followed = function (types) {
        return this.clone(MySocialQuery_1, "followed(types=" + types + ")").get().then(function (r) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(r, "Followed") ? r.Followed.results : r;
        });
    };
    /**
     * Gets the count of users, documents, sites, and tags that the current user is following.
     *
     * @param types Bitwise set of SocialActorTypes to retrieve
     */
    MySocialQuery.prototype.followedCount = function (types) {
        return this.clone(MySocialQuery_1, "followedcount(types=" + types + ")").get().then(function (r) {
            return r.FollowedCount || r;
        });
    };
    /**
     * Gets the users who are following the current user.
     */
    MySocialQuery.prototype.followers = function () {
        return this.clone(MySocialQuery_1, "followers").get().then(function (r) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(r, "Followers") ? r.Followers.results : r;
        });
    };
    /**
     * Gets users who the current user might want to follow.
     */
    MySocialQuery.prototype.suggestions = function () {
        return this.clone(MySocialQuery_1, "suggestions").get().then(function (r) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(r, "Suggestions") ? r.Suggestions.results : r;
        });
    };
    var MySocialQuery_1;
    MySocialQuery = MySocialQuery_1 = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        defaultPath("my")
    ], MySocialQuery);
    return MySocialQuery;
}(SharePointQueryableInstance));
/**
 * Social actor type
 *
 */
var SocialActorType;
(function (SocialActorType) {
    SocialActorType[SocialActorType["User"] = 0] = "User";
    SocialActorType[SocialActorType["Document"] = 1] = "Document";
    SocialActorType[SocialActorType["Site"] = 2] = "Site";
    SocialActorType[SocialActorType["Tag"] = 3] = "Tag";
})(SocialActorType || (SocialActorType = {}));
/**
 * Social actor type
 *
 */
/* tslint:disable:no-bitwise */
var SocialActorTypes;
(function (SocialActorTypes) {
    SocialActorTypes[SocialActorTypes["None"] = 0] = "None";
    SocialActorTypes[SocialActorTypes["User"] = 1] = "User";
    SocialActorTypes[SocialActorTypes["Document"] = 2] = "Document";
    SocialActorTypes[SocialActorTypes["Site"] = 4] = "Site";
    SocialActorTypes[SocialActorTypes["Tag"] = 8] = "Tag";
    /**
     * The set excludes documents and sites that do not have feeds.
     */
    SocialActorTypes[SocialActorTypes["ExcludeContentWithoutFeeds"] = 268435456] = "ExcludeContentWithoutFeeds";
    /**
     * The set includes group sites
     */
    SocialActorTypes[SocialActorTypes["IncludeGroupsSites"] = 536870912] = "IncludeGroupsSites";
    /**
     * The set includes only items created within the last 24 hours
     */
    SocialActorTypes[SocialActorTypes["WithinLast24Hours"] = 1073741824] = "WithinLast24Hours";
})(SocialActorTypes || (SocialActorTypes = {}));
/* tslint:enable */
/**
 * Result from following
 *
 */
var SocialFollowResult;
(function (SocialFollowResult) {
    SocialFollowResult[SocialFollowResult["Ok"] = 0] = "Ok";
    SocialFollowResult[SocialFollowResult["AlreadyFollowing"] = 1] = "AlreadyFollowing";
    SocialFollowResult[SocialFollowResult["LimitReached"] = 2] = "LimitReached";
    SocialFollowResult[SocialFollowResult["InternalError"] = 3] = "InternalError";
})(SocialFollowResult || (SocialFollowResult = {}));
/**
 * Specifies an exception or status code.
 */
var SocialStatusCode;
(function (SocialStatusCode) {
    /**
     * The operation completed successfully
     */
    SocialStatusCode[SocialStatusCode["OK"] = 0] = "OK";
    /**
     * The request is invalid.
     */
    SocialStatusCode[SocialStatusCode["InvalidRequest"] = 1] = "InvalidRequest";
    /**
     *  The current user is not authorized to perform the operation.
     */
    SocialStatusCode[SocialStatusCode["AccessDenied"] = 2] = "AccessDenied";
    /**
     * The target of the operation was not found.
     */
    SocialStatusCode[SocialStatusCode["ItemNotFound"] = 3] = "ItemNotFound";
    /**
     * The operation is invalid for the target's current state.
     */
    SocialStatusCode[SocialStatusCode["InvalidOperation"] = 4] = "InvalidOperation";
    /**
     * The operation completed without modifying the target.
     */
    SocialStatusCode[SocialStatusCode["ItemNotModified"] = 5] = "ItemNotModified";
    /**
     * The operation failed because an internal error occurred.
     */
    SocialStatusCode[SocialStatusCode["InternalError"] = 6] = "InternalError";
    /**
     * The operation failed because the server could not access the distributed cache.
     */
    SocialStatusCode[SocialStatusCode["CacheReadError"] = 7] = "CacheReadError";
    /**
     * The operation succeeded but the server could not update the distributed cache.
     */
    SocialStatusCode[SocialStatusCode["CacheUpdateError"] = 8] = "CacheUpdateError";
    /**
     * No personal site exists for the current user, and no further information is available.
     */
    SocialStatusCode[SocialStatusCode["PersonalSiteNotFound"] = 9] = "PersonalSiteNotFound";
    /**
     * No personal site exists for the current user, and a previous attempt to create one failed.
     */
    SocialStatusCode[SocialStatusCode["FailedToCreatePersonalSite"] = 10] = "FailedToCreatePersonalSite";
    /**
     * No personal site exists for the current user, and a previous attempt to create one was not authorized.
     */
    SocialStatusCode[SocialStatusCode["NotAuthorizedToCreatePersonalSite"] = 11] = "NotAuthorizedToCreatePersonalSite";
    /**
     * No personal site exists for the current user, and no attempt should be made to create one.
     */
    SocialStatusCode[SocialStatusCode["CannotCreatePersonalSite"] = 12] = "CannotCreatePersonalSite";
    /**
     * The operation was rejected because an internal limit had been reached.
     */
    SocialStatusCode[SocialStatusCode["LimitReached"] = 13] = "LimitReached";
    /**
     * The operation failed because an error occurred during the processing of the specified attachment.
     */
    SocialStatusCode[SocialStatusCode["AttachmentError"] = 14] = "AttachmentError";
    /**
     * The operation succeeded with recoverable errors; the returned data is incomplete.
     */
    SocialStatusCode[SocialStatusCode["PartialData"] = 15] = "PartialData";
    /**
     * A required SharePoint feature is not enabled.
     */
    SocialStatusCode[SocialStatusCode["FeatureDisabled"] = 16] = "FeatureDisabled";
    /**
     * The site's storage quota has been exceeded.
     */
    SocialStatusCode[SocialStatusCode["StorageQuotaExceeded"] = 17] = "StorageQuotaExceeded";
    /**
     * The operation failed because the server could not access the database.
     */
    SocialStatusCode[SocialStatusCode["DatabaseError"] = 18] = "DatabaseError";
})(SocialStatusCode || (SocialStatusCode = {}));

/**
 * Allows for calling of the static SP.Utilities.Utility methods by supplying the method name
 */
var UtilityMethod = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(UtilityMethod, _super);
    /**
     * Creates a new instance of the Utility method class
     *
     * @param baseUrl The parent url provider
     * @param methodName The static method name to call on the utility class
     */
    function UtilityMethod(baseUrl, methodName) {
        return _super.call(this, UtilityMethod.getBaseUrl(baseUrl), "_api/SP.Utilities.Utility." + methodName) || this;
    }
    UtilityMethod.getBaseUrl = function (candidate) {
        if (typeof candidate === "string") {
            return candidate;
        }
        var c = candidate;
        var url = c.toUrl();
        var index = url.indexOf("_api/");
        if (index < 0) {
            return url;
        }
        return url.substr(0, index);
    };
    UtilityMethod.prototype.excute = function (props) {
        return this.postCore({
            body: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["t" /* jsS */])(props),
        });
    };
    /**
     * Sends an email based on the supplied properties
     *
     * @param props The properties of the email to send
     */
    UtilityMethod.prototype.sendEmail = function (props) {
        var params = {
            properties: Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(metadata("SP.Utilities.EmailProperties"), {
                Body: props.Body,
                From: props.From,
                Subject: props.Subject,
            }),
        };
        if (props.To && props.To.length > 0) {
            params.properties = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(params.properties, {
                To: { results: props.To },
            });
        }
        if (props.CC && props.CC.length > 0) {
            params.properties = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(params.properties, {
                CC: { results: props.CC },
            });
        }
        if (props.BCC && props.BCC.length > 0) {
            params.properties = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(params.properties, {
                BCC: { results: props.BCC },
            });
        }
        if (props.AdditionalHeaders) {
            params.properties = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(params.properties, {
                AdditionalHeaders: props.AdditionalHeaders,
            });
        }
        return this.clone(UtilityMethod, "SendEmail", true).excute(params);
    };
    UtilityMethod.prototype.getCurrentUserEmailAddresses = function () {
        return this.clone(UtilityMethod, "GetCurrentUserEmailAddresses", true).excute({});
    };
    UtilityMethod.prototype.resolvePrincipal = function (input, scopes, sources, inputIsEmailOnly, addToUserInfoList, matchUserInfoList) {
        if (matchUserInfoList === void 0) { matchUserInfoList = false; }
        var params = {
            addToUserInfoList: addToUserInfoList,
            input: input,
            inputIsEmailOnly: inputIsEmailOnly,
            matchUserInfoList: matchUserInfoList,
            scopes: scopes,
            sources: sources,
        };
        return this.clone(UtilityMethod, "ResolvePrincipalInCurrentContext", true).excute(params);
    };
    UtilityMethod.prototype.searchPrincipals = function (input, scopes, sources, groupName, maxCount) {
        var params = {
            groupName: groupName,
            input: input,
            maxCount: maxCount,
            scopes: scopes,
            sources: sources,
        };
        return this.clone(UtilityMethod, "SearchPrincipalsUsingContextWeb", true).excute(params);
    };
    UtilityMethod.prototype.createEmailBodyForInvitation = function (pageAddress) {
        var params = {
            pageAddress: pageAddress,
        };
        return this.clone(UtilityMethod, "CreateEmailBodyForInvitation", true).excute(params);
    };
    UtilityMethod.prototype.expandGroupsToPrincipals = function (inputs, maxCount) {
        if (maxCount === void 0) { maxCount = 30; }
        var params = {
            inputs: inputs,
            maxCount: maxCount,
        };
        return this.clone(UtilityMethod, "ExpandGroupsToPrincipals", true).excute(params);
    };
    UtilityMethod.prototype.createWikiPage = function (info) {
        return this.clone(UtilityMethod, "CreateWikiPageInContextWeb", true).excute({
            parameters: info,
        }).then(function (r) {
            return {
                data: r,
                file: new File(odataUrlFrom(r)),
            };
        });
    };
    return UtilityMethod;
}(SharePointQueryable));

/**
 * Root of the SharePoint REST module
 */
var SPRest = /** @class */ (function () {
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    function SPRest(_options, _baseUrl) {
        if (_options === void 0) { _options = {}; }
        if (_baseUrl === void 0) { _baseUrl = ""; }
        this._options = _options;
        this._baseUrl = _baseUrl;
    }
    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    SPRest.prototype.configure = function (options, baseUrl) {
        if (baseUrl === void 0) { baseUrl = ""; }
        return new SPRest(options, baseUrl);
    };
    /**
     * Global SharePoint configuration options
     *
     * @param config The SharePoint configuration to apply
     */
    SPRest.prototype.setup = function (config) {
        setup(config);
    };
    /**
     * Executes a search against this web context
     *
     * @param query The SearchQuery definition
     */
    SPRest.prototype.searchSuggest = function (query) {
        var finalQuery;
        if (typeof query === "string") {
            finalQuery = { querytext: query };
        }
        else {
            finalQuery = query;
        }
        return this.create(SearchSuggest).execute(finalQuery);
    };
    /**
     * Executes a search against this web context
     *
     * @param query The SearchQuery definition
     */
    SPRest.prototype.search = function (query) {
        return this.create(Search).execute(query);
    };
    /**
     * Executes the provided search query, caching the results
     *
     * @param query The SearchQuery definition
     * @param options The set of caching options used to store the results
     */
    SPRest.prototype.searchWithCaching = function (query, options) {
        return this.create(Search).usingCaching(options).execute(query);
    };
    Object.defineProperty(SPRest.prototype, "site", {
        /**
         * Begins a site collection scoped REST request
         *
         */
        get: function () {
            return this.create(Site);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRest.prototype, "web", {
        /**
         * Begins a web scoped REST request
         *
         */
        get: function () {
            return this.create(Web);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRest.prototype, "profiles", {
        /**
         * Access to user profile methods
         *
         */
        get: function () {
            return this.create(UserProfileQuery);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRest.prototype, "social", {
        /**
         * Access to social methods
         */
        get: function () {
            return this.create(SocialQuery);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRest.prototype, "navigation", {
        /**
         * Access to the site collection level navigation service
         */
        get: function () {
            return new NavigationService();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new batch object for use with the SharePointQueryable.addToBatch method
     *
     */
    SPRest.prototype.createBatch = function () {
        return this.web.createBatch();
    };
    Object.defineProperty(SPRest.prototype, "utility", {
        /**
         * Static utilities methods from SP.Utilities.Utility
         */
        get: function () {
            return this.create(UtilityMethod, "");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handles creating and configuring the objects returned from this class
     *
     * @param fm The factory method used to create the instance
     * @param path Optional additional path information to pass to the factory method
     */
    SPRest.prototype.create = function (fm, path) {
        return new fm(this._baseUrl, path).configure(this._options);
    };
    return SPRest;
}());
var sp = new SPRest();



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdalClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return objectToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return mergeMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RuntimeConfigImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RuntimeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return mergeHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FetchClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BearerTokenFetchClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PnPClientStorageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PnPClientStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getCtxCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return dateAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return combine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getRandomString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return objectDefinedNotNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return isUrlAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return stringIsNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getAttrValueFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return sanitizeGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return jsS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return hOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getHashCode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_adal_angular_dist_adal_min_js__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_adal_angular_dist_adal_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_adal_angular_dist_adal_min_js__);
/**
@license
 * @pnp/common v1.2.3 - pnp - provides shared functionality across all pnp libraries
 * MIT (https://github.com/pnp/pnpjs/blob/master/LICENSE)
 * Copyright (c) 2018 Microsoft
 * docs: https://pnp.github.io/pnpjs/
 * source: https:github.com/pnp/pnpjs
 * bugs: https://github.com/pnp/pnpjs/issues
 */



var global$1 = (typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {});

/**
 * Gets a callback function which will maintain context across async calls.
 * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
 *
 * @param context The object that will be the 'this' value in the callback
 * @param method The method to which we will apply the context and parameters
 * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
 */
function getCtxCallback(context, method) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    return function () {
        method.apply(context, params);
    };
}
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    var ret = new Date(date); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine() {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    return paths
        .filter(function (path) { return !stringIsNullOrEmpty(path); })
        .map(function (path) { return path.replace(/^[\\|\/]/, "").replace(/[\\|\/]$/, ""); })
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    var text = new Array(chars);
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < chars; i++) {
        text[i] = possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* tslint:disable no-bitwise */
function getGUID() {
    var d = new Date().getTime();
    var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return guid;
}
/* tslint:enable */
/**
 * Determines if a given value is a function
 *
 * @param cf The thing to test for functionness
 */
function isFunc(cf) {
    return typeof cf === "function";
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    if (Array.isArray) {
        return Array.isArray(array);
    }
    return array && typeof array.length === "number" && array.constructor === Array;
}
/**
 * Provides functionality to extend the given object by doing a shallow copy
 *
 * @param target The object to which properties will be copied
 * @param source The source object from which properties will be copied
 * @param noOverwrite If true existing properties on the target are not overwritten from the source
 * @param filter If provided allows additional filtering on what properties are copied (propName: string) => boolean
 *
 */
function extend(target, source, noOverwrite, filter) {
    if (noOverwrite === void 0) { noOverwrite = false; }
    if (filter === void 0) { filter = function () { return true; }; }
    if (!objectDefinedNotNull(source)) {
        return target;
    }
    // ensure we don't overwrite things we don't want overwritten
    var check = noOverwrite ? function (o, i) { return !(i in o); } : function () { return true; };
    // final filter we will use
    var f = function (v) { return check(target, v) && filter(v); };
    return Object.getOwnPropertyNames(source)
        .filter(f)
        .reduce(function (t, v) {
        t[v] = source[v];
        return t;
    }, target);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return s === undefined || s === null || s.length < 1;
}
/**
 * Gets an attribute value from an html/xml string block. NOTE: if the input attribute value has
 * RegEx special characters they will be escaped in the returned string
 *
 * @param html HTML to search
 * @param attrName The name of the attribute to find
 */
function getAttrValueFromString(html, attrName) {
    // make the input safe for regex
    html = html.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var reg = new RegExp(attrName + "\\s*?=\\s*?(\"|')([^\\1]*?)\\1", "i");
    var match = reg.exec(html);
    return match !== null && match.length > 0 ? match[2] : null;
}
/**
 * Ensures guid values are represented consistently as "ea123463-137d-4ae3-89b8-cf3fc578ca05"
 *
 * @param guid The candidate guid
 */
function sanitizeGuid(guid) {
    if (stringIsNullOrEmpty(guid)) {
        return guid;
    }
    var matches = /([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})/i.exec(guid);
    return matches === null ? guid : matches[1];
}
/**
 * Shorthand for oToS
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * Generates a ~unique hash code for this ObjectPathQueue
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
// tslint:disable:no-bitwise
function getHashCode(s) {
    var hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (var i = 0; i < s.length; i++) {
        var chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
// tslint:enable:no-bitwise

function mergeHeaders(target, source) {
    if (source !== undefined && source !== null) {
        var temp = new Request("", { headers: source });
        temp.headers.forEach(function (value, name) {
            target.append(name, value);
        });
    }
}
function mergeOptions(target, source) {
    if (objectDefinedNotNull(source)) {
        var headers = extend(target.headers || {}, source.headers);
        target = extend(target, source);
        target.headers = headers;
    }
}
/**
 * Makes requests using the global/window fetch API
 */
var FetchClient = /** @class */ (function () {
    function FetchClient() {
    }
    FetchClient.prototype.fetch = function (url, options) {
        return global$1.fetch(url, options);
    };
    return FetchClient;
}());
/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
var BearerTokenFetchClient = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(BearerTokenFetchClient, _super);
    function BearerTokenFetchClient(_token) {
        var _this = _super.call(this) || this;
        _this._token = _token;
        return _this;
    }
    Object.defineProperty(BearerTokenFetchClient.prototype, "token", {
        get: function () {
            return this._token || "";
        },
        set: function (token) {
            this._token = token;
        },
        enumerable: true,
        configurable: true
    });
    BearerTokenFetchClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        var headers = new Headers();
        mergeHeaders(headers, options.headers);
        headers.set("Authorization", "Bearer " + this._token);
        options.headers = headers;
        return _super.prototype.fetch.call(this, url, options);
    };
    return BearerTokenFetchClient;
}(FetchClient));

/**
 * Azure AD Client for use in the browser
 */
var AdalClient = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */])(AdalClient, _super);
    /**
     * Creates a new instance of AdalClient
     * @param clientId Azure App Id
     * @param tenant Office 365 tenant (Ex: {tenant}.onmicrosoft.com)
     * @param redirectUri The redirect url used to authenticate the
     */
    function AdalClient(clientId, tenant, redirectUri) {
        var _this = _super.call(this, null) || this;
        _this.clientId = clientId;
        _this.tenant = tenant;
        _this.redirectUri = redirectUri;
        _this._displayCallback = null;
        _this._loginPromise = null;
        return _this;
    }
    /**
     * Creates a new AdalClient using the values of the supplied SPFx context
     *
     * @param spfxContext Current SPFx context
     * @param clientId Optional client id to use instead of the built-in SPFx id
     * @description Using this method and the default clientId requires that the features described in
     * this article https://docs.microsoft.com/en-us/sharepoint/dev/spfx/use-aadhttpclient are activated in the tenant. If not you can
     * creat your own app, grant permissions and use that clientId here along with the SPFx context
     */
    AdalClient.fromSPFxContext = function (spfxContext, cliendId) {
        if (cliendId === void 0) { cliendId = "c58637bb-e2e1-4312-8a00-04b5ffcd3403"; }
        // this "magic" client id is the one to which permissions are granted behind the scenes
        // this redirectUrl is the page as used by spfx
        return new AdalClient(cliendId, spfxContext.pageContext.aadInfo.tenantId.toString(), combine(window.location.origin, "/_forms/spfxsinglesignon.aspx"));
    };
    /**
     * Conducts the fetch opertation against the AAD secured resource
     *
     * @param url Absolute URL for the request
     * @param options Any fetch options passed to the underlying fetch implementation
     */
    AdalClient.prototype.fetch = function (url, options) {
        var _this = this;
        if (!isUrlAbsolute(url)) {
            throw Error("You must supply absolute urls to AdalClient.fetch.");
        }
        // the url we are calling is the resource
        return this.getToken(this.getResource(url)).then(function (token) {
            _this.token = token;
            return _super.prototype.fetch.call(_this, url, options);
        });
    };
    /**
     * Gets a token based on the current user
     *
     * @param resource The resource for which we are requesting a token
     */
    AdalClient.prototype.getToken = function (resource) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ensureAuthContext().then(function (_) { return _this.login(); }).then(function (_) {
                AdalClient._authContext.acquireToken(resource, function (message, token) {
                    if (message) {
                        return reject(Error(message));
                    }
                    resolve(token);
                });
            }).catch(reject);
        });
    };
    /**
     * Ensures we have created and setup the adal AuthenticationContext instance
     */
    AdalClient.prototype.ensureAuthContext = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (AdalClient._authContext === null) {
                AdalClient._authContext = Object(__WEBPACK_IMPORTED_MODULE_1_adal_angular_dist_adal_min_js__["inject"])({
                    clientId: _this.clientId,
                    displayCall: function (url) {
                        if (_this._displayCallback) {
                            _this._displayCallback(url);
                        }
                    },
                    navigateToLoginRequestUrl: false,
                    redirectUri: _this.redirectUri,
                    tenant: _this.tenant,
                });
            }
            resolve();
        });
    };
    /**
     * Ensures the current user is logged in
     */
    AdalClient.prototype.login = function () {
        var _this = this;
        if (this._loginPromise) {
            return this._loginPromise;
        }
        this._loginPromise = new Promise(function (resolve, reject) {
            if (AdalClient._authContext.getCachedUser()) {
                return resolve();
            }
            _this._displayCallback = function (url) {
                var popupWindow = window.open(url, "login", "width=483, height=600");
                if (!popupWindow) {
                    return reject(Error("Could not open pop-up window for auth. Likely pop-ups are blocked by the browser."));
                }
                if (popupWindow && popupWindow.focus) {
                    popupWindow.focus();
                }
                var pollTimer = window.setInterval(function () {
                    if (!popupWindow || popupWindow.closed || popupWindow.closed === undefined) {
                        window.clearInterval(pollTimer);
                    }
                    try {
                        if (popupWindow.document.URL.indexOf(_this.redirectUri) !== -1) {
                            window.clearInterval(pollTimer);
                            AdalClient._authContext.handleWindowCallback(popupWindow.location.hash);
                            popupWindow.close();
                            resolve();
                        }
                    }
                    catch (e) {
                        reject(e);
                    }
                }, 30);
            };
            // this triggers the login process
            _this.ensureAuthContext().then(function (_) {
                AdalClient._authContext._loginInProgress = false;
                AdalClient._authContext.login();
                _this._displayCallback = null;
            });
        });
        return this._loginPromise;
    };
    /**
     * Parses out the root of the request url to use as the resource when getting the token
     *
     * After: https://gist.github.com/jlong/2428561
     * @param url The url to parse
     */
    AdalClient.prototype.getResource = function (url) {
        var parser = document.createElement("a");
        parser.href = url;
        return parser.protocol + "//" + parser.hostname;
    };
    /**
     * Our auth context
     */
    AdalClient._authContext = null;
    return AdalClient;
}(BearerTokenFetchClient));

/**
 * Used to calculate the object properties, with polyfill if needed
 */
var objectEntries = isFunc(Object.entries) ? Object.entries : function (o) { return Object.keys(o).map(function (k) { return [k, o[k]]; }); };
/**
 * Converts the supplied object to a map
 *
 * @param o The object to map
 */
function objectToMap(o) {
    if (o !== undefined && o !== null) {
        return new Map(objectEntries(o));
    }
    return new Map();
}
/**
 * Merges to Map instances together, overwriting values in target with matching keys, last in wins
 *
 * @param target map into which the other maps are merged
 * @param maps One or more maps to merge into the target
 */
function mergeMaps(target) {
    var maps = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        maps[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < maps.length; i++) {
        maps[i].forEach(function (v, k) {
            target.set(k, v);
        });
    }
    return target;
}

function setup(config) {
    RuntimeConfig.extend(config);
}
// lable mapping for known config values
var s = [
    "defaultCachingStore",
    "defaultCachingTimeoutSeconds",
    "globalCacheDisable",
    "enableCacheExpiration",
    "cacheExpirationIntervalMilliseconds",
    "spfxContext",
];
var RuntimeConfigImpl = /** @class */ (function () {
    function RuntimeConfigImpl(_v) {
        if (_v === void 0) { _v = new Map(); }
        this._v = _v;
        // setup defaults
        this._v.set(s[0], "session");
        this._v.set(s[1], 60);
        this._v.set(s[2], false);
        this._v.set(s[3], false);
        this._v.set(s[4], 750);
        this._v.set(s[5], null);
    }
    /**
     *
     * @param config The set of properties to add to the globa configuration instance
     */
    RuntimeConfigImpl.prototype.extend = function (config) {
        this._v = mergeMaps(this._v, objectToMap(config));
    };
    RuntimeConfigImpl.prototype.get = function (key) {
        return this._v.get(key);
    };
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingStore", {
        get: function () {
            return this.get(s[0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingTimeoutSeconds", {
        get: function () {
            return this.get(s[1]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "globalCacheDisable", {
        get: function () {
            return this.get(s[2]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "enableCacheExpiration", {
        get: function () {
            return this.get(s[3]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "cacheExpirationIntervalMilliseconds", {
        get: function () {
            return this.get(s[4]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "spfxContext", {
        get: function () {
            return this.get(s[5]);
        },
        enumerable: true,
        configurable: true
    });
    return RuntimeConfigImpl;
}());
var _runtimeConfig = new RuntimeConfigImpl();
var RuntimeConfig = _runtimeConfig;

/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
var PnPClientStorageWrapper = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    function PnPClientStorageWrapper(store, defaultTimeoutMinutes) {
        if (defaultTimeoutMinutes === void 0) { defaultTimeoutMinutes = -1; }
        this.store = store;
        this.defaultTimeoutMinutes = defaultTimeoutMinutes;
        this.enabled = this.test();
        // if the cache timeout is enabled call the handler
        // this will clear any expired items and set the timeout function
        if (RuntimeConfig.enableCacheExpiration) {
            this.cacheExpirationHandler();
        }
    }
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    PnPClientStorageWrapper.prototype.get = function (key) {
        if (!this.enabled) {
            return null;
        }
        var o = this.store.getItem(key);
        if (!objectDefinedNotNull(o)) {
            return null;
        }
        var persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    };
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.put = function (key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    };
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    PnPClientStorageWrapper.prototype.delete = function (key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    };
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.getOrPut = function (key, getter, expire) {
        var _this = this;
        if (!this.enabled) {
            return getter();
        }
        return new Promise(function (resolve) {
            var o = _this.get(key);
            if (o == null) {
                getter().then(function (d) {
                    _this.put(key, d, expire);
                    resolve(d);
                });
            }
            else {
                resolve(o);
            }
        });
    };
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    PnPClientStorageWrapper.prototype.deleteExpired = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.enabled) {
                resolve();
            }
            try {
                for (var i = 0; i < _this.store.length; i++) {
                    var key = _this.store.key(i);
                    if (key !== null) {
                        // test the stored item to see if we stored it
                        if (/["|']?pnp["|']? ?: ?1/i.test(_this.store.getItem(key))) {
                            // get those items as get will delete from cache if they are expired
                            _this.get(key);
                        }
                    }
                }
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Used to determine if the wrapped storage is available currently
     */
    PnPClientStorageWrapper.prototype.test = function () {
        var str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * Creates the persistable to store
     */
    PnPClientStorageWrapper.prototype.createPersistable = function (o, expire) {
        if (expire === undefined) {
            // ensure we are by default inline with the global library setting
            var defaultTimeout = RuntimeConfig.defaultCachingTimeoutSeconds;
            if (this.defaultTimeoutMinutes > 0) {
                defaultTimeout = this.defaultTimeoutMinutes * 60;
            }
            expire = dateAdd(new Date(), "second", defaultTimeout);
        }
        return jsS({ pnp: 1, expiration: expire, value: o });
    };
    /**
     * Deletes expired items added by this library in this.store and sets a timeout to call itself
     */
    PnPClientStorageWrapper.prototype.cacheExpirationHandler = function () {
        var _this = this;
        this.deleteExpired().then(function (_) {
            // call ourself in the future
            setTimeout(getCtxCallback(_this, _this.cacheExpirationHandler), RuntimeConfig.cacheExpirationIntervalMilliseconds);
        }).catch(function (e) {
            console.error(e);
        });
    };
    return PnPClientStorageWrapper;
}());
/**
 * A thin implementation of in-memory storage for use in nodejs
 */
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage(_store) {
        if (_store === void 0) { _store = new Map(); }
        this._store = _store;
    }
    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: function () {
            return this._store.size;
        },
        enumerable: true,
        configurable: true
    });
    MemoryStorage.prototype.clear = function () {
        this._store.clear();
    };
    MemoryStorage.prototype.getItem = function (key) {
        return this._store.get(key);
    };
    MemoryStorage.prototype.key = function (index) {
        return Array.from(this._store)[index][0];
    };
    MemoryStorage.prototype.removeItem = function (key) {
        this._store.delete(key);
    };
    MemoryStorage.prototype.setItem = function (key, data) {
        this._store.set(key, data);
    };
    return MemoryStorage;
}());
/**
 * A class that will establish wrappers for both local and session storage
 */
var PnPClientStorage = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    function PnPClientStorage(_local, _session) {
        if (_local === void 0) { _local = null; }
        if (_session === void 0) { _session = null; }
        this._local = _local;
        this._session = _session;
    }
    Object.defineProperty(PnPClientStorage.prototype, "local", {
        /**
         * Provides access to the local storage of the browser
         */
        get: function () {
            if (this._local === null) {
                this._local = this.getStore("local");
            }
            return this._local;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PnPClientStorage.prototype, "session", {
        /**
         * Provides access to the session storage of the browser
         */
        get: function () {
            if (this._session === null) {
                this._session = this.getStore("session");
            }
            return this._session;
        },
        enumerable: true,
        configurable: true
    });
    PnPClientStorage.prototype.getStore = function (name) {
        if (name === "local") {
            return new PnPClientStorageWrapper(typeof (localStorage) === "undefined" ? new MemoryStorage() : localStorage);
        }
        return new PnPClientStorageWrapper(typeof (sessionStorage) === "undefined" ? new MemoryStorage() : sessionStorage);
    };
    return PnPClientStorage;
}());



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-string-literal */
var object_1 = __webpack_require__(41);
/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    // tslint:disable-next-line:no-any
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (
    // tslint:disable-next-line:no-any
    target, eventName, 
    // tslint:disable-next-line:no-any
    eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                object_1.assign(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
                // tslint:disable-next-line:no-any
            }
            else if (document['createEventObject']) { // IE8
                // tslint:disable-next-line:no-any
                var evObj = document['createEventObject'](eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    // tslint:disable-next-line:no-any
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    // tslint:disable-next-line:no-any
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    // tslint:disable-next-line:no-any
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else { // IE8
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return (!!target && (!!target.addEventListener ||
            (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement)));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, useCapture);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                useCapture: useCapture || false
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] = events[eventName] || {
                count: 0
            };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                // tslint:disable-next-line:no-any
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        /* ErrorHelper.log(e); */
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    /* tslint:disable:ban-native-functions */
                    target.addEventListener(eventName, processElementEvent, useCapture);
                    /* tslint:enable:ban-native-functions */
                }
                else if (target.attachEvent) { // IE8
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                // tslint:disable-next-line:no-any
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    // tslint:disable-next-line:no-any
    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                ((typeof useCapture !== 'boolean') || useCapture === eventRecord.useCapture)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
                    }
                    else if (eventRecord.target.detachEvent) { // IE8
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    // tslint:disable-next-line:no-inferrable-types
    EventGroup._uniqueId = 0;
    return EventGroup;
}());
exports.EventGroup = EventGroup;


/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_259__;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(14);
var kebabRules_1 = __webpack_require__(266);
var prefixRules_1 = __webpack_require__(267);
var provideUnits_1 = __webpack_require__(269);
var rtlifyRules_1 = __webpack_require__(65);
var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            // tslint:disable-next-line:no-any
            for (var prop in arg) {
                if (prop === 'selectors') {
                    // tslint:disable-next-line:no-any
                    var selectors = arg.selectors;
                    for (var newSelector in selectors) {
                        if (selectors.hasOwnProperty(newSelector)) {
                            var selectorValue = selectors[newSelector];
                            if (newSelector.indexOf(':global(') === 0) {
                                newSelector = newSelector.replace(/:global\(|\)$/g, '');
                            }
                            else if (newSelector.indexOf('@media') === 0) {
                                newSelector = newSelector + '{' + currentSelector;
                            }
                            else if (newSelector.indexOf(':') === 0) {
                                newSelector = currentSelector + newSelector;
                            }
                            else if (newSelector.indexOf('&') < 0) {
                                newSelector = currentSelector + ' ' + newSelector;
                            }
                            extractRules([selectorValue], rules, newSelector);
                        }
                    }
                }
                else {
                    // Else, add the rule to the currentSelector.
                    if (prop === 'margin' || prop === 'padding') {
                        // tslint:disable-next-line:no-any
                        expandQuads(currentRules, prop, arg[prop]);
                    }
                    else {
                        // tslint:disable-next-line:no-any
                        currentRules[prop] = arg[prop];
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = (typeof value === 'string') ? value.split(' ') : [value];
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(rules) {
    var serialized = [];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function serializeRuleEntries(ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        kebabRules_1.kebabRules(allEntries, i);
        provideUnits_1.provideUnits(allEntries, i);
        rtlifyRules_1.rtlifyRules(allEntries, i);
        prefixRules_1.prefixRules(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
exports.serializeRuleEntries = serializeRuleEntries;
function styleToRegistration() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(rules);
    if (key) {
        var stylesheet = Stylesheet_1.Stylesheet.getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
}
exports.styleToRegistration = styleToRegistration;
function applyRegistration(registration, classMap) {
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                // Fix selector using map.
                selector = selector.replace(/(&)|\$([\w-]+)\b/g, function (match, amp, cn) {
                    if (amp) {
                        return '.' + registration.className;
                    }
                    else if (cn) {
                        return '.' + ((classMap && classMap[cn]) || cn);
                    }
                    return '';
                });
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = selector + "{" + rules + "}" + ((selector.indexOf('@media') === 0) ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
exports.applyRegistration = applyRegistration;
function styleToClassName() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, args);
    if (registration) {
        applyRegistration(registration);
        return registration.className;
    }
    return '';
}
exports.styleToClassName = styleToClassName;


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = __extends;
/* unused harmony export __assign */
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ 261:
/***/ (function(module, exports) {

/*! adal-angular v1.0.17 2018-02-27 */
var AuthenticationContext=function(){"use strict";return AuthenticationContext=function(a){if(this.REQUEST_TYPE={LOGIN:"LOGIN",RENEW_TOKEN:"RENEW_TOKEN",UNKNOWN:"UNKNOWN"},this.RESPONSE_TYPE={ID_TOKEN_TOKEN:"id_token token",TOKEN:"token"},this.CONSTANTS={ACCESS_TOKEN:"access_token",EXPIRES_IN:"expires_in",ID_TOKEN:"id_token",ERROR_DESCRIPTION:"error_description",SESSION_STATE:"session_state",ERROR:"error",STORAGE:{TOKEN_KEYS:"adal.token.keys",ACCESS_TOKEN_KEY:"adal.access.token.key",EXPIRATION_KEY:"adal.expiration.key",STATE_LOGIN:"adal.state.login",STATE_RENEW:"adal.state.renew",NONCE_IDTOKEN:"adal.nonce.idtoken",SESSION_STATE:"adal.session.state",USERNAME:"adal.username",IDTOKEN:"adal.idtoken",ERROR:"adal.error",ERROR_DESCRIPTION:"adal.error.description",LOGIN_REQUEST:"adal.login.request",LOGIN_ERROR:"adal.login.error",RENEW_STATUS:"adal.token.renew.status",ANGULAR_LOGIN_REQUEST:"adal.angular.login.request"},RESOURCE_DELIMETER:"|",CACHE_DELIMETER:"||",LOADFRAME_TIMEOUT:6e3,TOKEN_RENEW_STATUS_CANCELED:"Canceled",TOKEN_RENEW_STATUS_COMPLETED:"Completed",TOKEN_RENEW_STATUS_IN_PROGRESS:"In Progress",LOGGING_LEVEL:{ERROR:0,WARN:1,INFO:2,VERBOSE:3},LEVEL_STRING_MAP:{0:"ERROR:",1:"WARNING:",2:"INFO:",3:"VERBOSE:"},POPUP_WIDTH:483,POPUP_HEIGHT:600},AuthenticationContext.prototype._singletonInstance)return AuthenticationContext.prototype._singletonInstance;if(AuthenticationContext.prototype._singletonInstance=this,this.instance="https://login.microsoftonline.com/",this.config={},this.callback=null,this.popUp=!1,this.isAngular=!1,this._user=null,this._activeRenewals={},this._loginInProgress=!1,this._acquireTokenInProgress=!1,this._renewStates=[],this._callBackMappedToRenewStates={},this._callBacksMappedToRenewStates={},this._openedWindows=[],this._requestType=this.REQUEST_TYPE.LOGIN,window._adalInstance=this,a.displayCall&&"function"!=typeof a.displayCall)throw new Error("displayCall is not a function");if(!a.clientId)throw new Error("clientId is required");this.config=this._cloneConfig(a),void 0===this.config.navigateToLoginRequestUrl&&(this.config.navigateToLoginRequestUrl=!0),this.config.popUp&&(this.popUp=!0),this.config.callback&&"function"==typeof this.config.callback&&(this.callback=this.config.callback),this.config.instance&&(this.instance=this.config.instance),this.config.loginResource||(this.config.loginResource=this.config.clientId),this.config.redirectUri||(this.config.redirectUri=window.location.href.split("?")[0].split("#")[0]),this.config.postLogoutRedirectUri||(this.config.postLogoutRedirectUri=window.location.href.split("?")[0].split("#")[0]),this.config.anonymousEndpoints||(this.config.anonymousEndpoints=[]),this.config.isAngular&&(this.isAngular=this.config.isAngular),this.config.loadFrameTimeout&&(this.CONSTANTS.LOADFRAME_TIMEOUT=this.config.loadFrameTimeout)},"undefined"!=typeof window&&(window.Logging={piiLoggingEnabled:!1,level:0,log:function(a){}}),AuthenticationContext.prototype.login=function(){if(this._loginInProgress)return void this.info("Login in progress");this._loginInProgress=!0;var a=this._guid();this.config.state=a,this._idTokenNonce=this._guid();var b=this._getItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST);b&&""!==b?this._saveItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST,""):b=window.location.href,this.verbose("Expected state: "+a+" startPage:"+b),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST,b),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN,a,!0),this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,this._idTokenNonce,!0),this._saveItem(this.CONSTANTS.STORAGE.ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"");var c=this._getNavigateUrl("id_token",null)+"&nonce="+encodeURIComponent(this._idTokenNonce);this.config.displayCall?this.config.displayCall(c):this.popUp?(this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN,""),this._renewStates.push(a),this.registerCallback(a,this.config.clientId,this.callback),this._loginPopup(c)):this.promptUser(c)},AuthenticationContext.prototype._openPopup=function(a,b,c,d){try{var e=window.screenLeft?window.screenLeft:window.screenX,f=window.screenTop?window.screenTop:window.screenY,g=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=g/2-c/2+e,j=h/2-d/2+f,k=window.open(a,b,"width="+c+", height="+d+", top="+j+", left="+i);return k.focus&&k.focus(),k}catch(a){return this.warn("Error opening popup, "+a.message),this._loginInProgress=!1,this._acquireTokenInProgress=!1,null}},AuthenticationContext.prototype._handlePopupError=function(a,b,c,d,e){this.warn(d),this._saveItem(this.CONSTANTS.STORAGE.ERROR,c),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,d),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,e),b&&this._activeRenewals[b]&&(this._activeRenewals[b]=null),this._loginInProgress=!1,this._acquireTokenInProgress=!1,a&&a(d,null,c)},AuthenticationContext.prototype._loginPopup=function(a,b,c){var d=this._openPopup(a,"login",this.CONSTANTS.POPUP_WIDTH,this.CONSTANTS.POPUP_HEIGHT),e=c||this.callback;if(null==d){var f="Popup Window is null. This can happen if you are using IE";return void this._handlePopupError(e,b,"Error opening popup",f,f)}if(this._openedWindows.push(d),-1!=this.config.redirectUri.indexOf("#"))var g=this.config.redirectUri.split("#")[0];else var g=this.config.redirectUri;var h=this,i=window.setInterval(function(){if(!d||d.closed||void 0===d.closed){var a="Popup Window closed",c="Popup Window closed by UI action/ Popup Window handle destroyed due to cross zone navigation in IE/Edge";return h.isAngular&&h._broadcast("adal:popUpClosed",c+h.CONSTANTS.RESOURCE_DELIMETER+a),h._handlePopupError(e,b,a,c,c),void window.clearInterval(i)}try{var f=d.location;if(-1!=encodeURI(f.href).indexOf(encodeURI(g)))return h.isAngular?h._broadcast("adal:popUpHashChanged",f.hash):h.handleWindowCallback(f.hash),window.clearInterval(i),h._loginInProgress=!1,h._acquireTokenInProgress=!1,h.info("Closing popup window"),h._openedWindows=[],void d.close()}catch(a){}},1)},AuthenticationContext.prototype._broadcast=function(a,b){!function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}if("function"==typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype,window.CustomEvent=a}();var c=new CustomEvent(a,{detail:b});window.dispatchEvent(c)},AuthenticationContext.prototype.loginInProgress=function(){return this._loginInProgress},AuthenticationContext.prototype._hasResource=function(a){var b=this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);return b&&!this._isEmpty(b)&&b.indexOf(a+this.CONSTANTS.RESOURCE_DELIMETER)>-1},AuthenticationContext.prototype.getCachedToken=function(a){if(!this._hasResource(a))return null;var b=this._getItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+a),c=this._getItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+a),d=this.config.expireOffsetSeconds||300;return c&&c>this._now()+d?b:(this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+a,""),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+a,0),null)},AuthenticationContext.prototype.getCachedUser=function(){if(this._user)return this._user;var a=this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);return this._user=this._createUser(a),this._user},AuthenticationContext.prototype.registerCallback=function(a,b,c){this._activeRenewals[b]=a,this._callBacksMappedToRenewStates[a]||(this._callBacksMappedToRenewStates[a]=[]);var d=this;this._callBacksMappedToRenewStates[a].push(c),this._callBackMappedToRenewStates[a]||(this._callBackMappedToRenewStates[a]=function(c,e,f,g){d._activeRenewals[b]=null;for(var h=0;h<d._callBacksMappedToRenewStates[a].length;++h)try{d._callBacksMappedToRenewStates[a][h](c,e,f,g)}catch(f){d.warn(f)}d._callBacksMappedToRenewStates[a]=null,d._callBackMappedToRenewStates[a]=null})},AuthenticationContext.prototype._renewToken=function(a,b,c){this.info("renewToken is called for resource:"+a);var d=this._addAdalFrame("adalRenewFrame"+a),e=this._guid()+"|"+a;this.config.state=e,this._renewStates.push(e),this.verbose("Renew token Expected state: "+e),c=c||"token";var f=this._urlRemoveQueryStringParameter(this._getNavigateUrl(c,a),"prompt");c===this.RESPONSE_TYPE.ID_TOKEN_TOKEN&&(this._idTokenNonce=this._guid(),this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,this._idTokenNonce,!0),f+="&nonce="+encodeURIComponent(this._idTokenNonce)),f+="&prompt=none",f=this._addHintParameters(f),this.registerCallback(e,a,b),this.verbosePii("Navigate to:"+f),d.src="about:blank",this._loadFrameTimeout(f,"adalRenewFrame"+a,a)},AuthenticationContext.prototype._renewIdToken=function(a,b){this.info("renewIdToken is called");var c=this._addAdalFrame("adalIdTokenFrame"),d=this._guid()+"|"+this.config.clientId;this._idTokenNonce=this._guid(),this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,this._idTokenNonce,!0),this.config.state=d,this._renewStates.push(d),this.verbose("Renew Idtoken Expected state: "+d);var e=null===b||void 0===b?null:this.config.clientId,b=b||"id_token",f=this._urlRemoveQueryStringParameter(this._getNavigateUrl(b,e),"prompt");f+="&prompt=none",f=this._addHintParameters(f),f+="&nonce="+encodeURIComponent(this._idTokenNonce),this.registerCallback(d,this.config.clientId,a),this.verbosePii("Navigate to:"+f),c.src="about:blank",this._loadFrameTimeout(f,"adalIdTokenFrame",this.config.clientId)},AuthenticationContext.prototype._urlContainsQueryStringParameter=function(a,b){return new RegExp("[\\?&]"+a+"=").test(b)},AuthenticationContext.prototype._urlRemoveQueryStringParameter=function(a,b){var c=new RegExp("(\\&"+b+"=)[^&]+");return a=a.replace(c,""),c=new RegExp("("+b+"=)[^&]+&"),a=a.replace(c,""),c=new RegExp("("+b+"=)[^&]+"),a=a.replace(c,"")},AuthenticationContext.prototype._loadFrameTimeout=function(a,b,c){this.verbose("Set loading state to pending for: "+c),this._saveItem(this.CONSTANTS.STORAGE.RENEW_STATUS+c,this.CONSTANTS.TOKEN_RENEW_STATUS_IN_PROGRESS),this._loadFrame(a,b);var d=this;setTimeout(function(){if(d._getItem(d.CONSTANTS.STORAGE.RENEW_STATUS+c)===d.CONSTANTS.TOKEN_RENEW_STATUS_IN_PROGRESS){d.verbose("Loading frame has timed out after: "+d.CONSTANTS.LOADFRAME_TIMEOUT/1e3+" seconds for resource "+c);var a=d._activeRenewals[c];a&&d._callBackMappedToRenewStates[a]&&d._callBackMappedToRenewStates[a]("Token renewal operation failed due to timeout",null,"Token Renewal Failed"),d._saveItem(d.CONSTANTS.STORAGE.RENEW_STATUS+c,d.CONSTANTS.TOKEN_RENEW_STATUS_CANCELED)}},d.CONSTANTS.LOADFRAME_TIMEOUT)},AuthenticationContext.prototype._loadFrame=function(a,b){var c=this;c.info("LoadFrame: "+b);var d=b;setTimeout(function(){var b=c._addAdalFrame(d);""!==b.src&&"about:blank"!==b.src||(b.src=a,c._loadFrame(a,d))},500)},AuthenticationContext.prototype.acquireToken=function(a,b){if(this._isEmpty(a))return this.warn("resource is required"),void b("resource is required",null,"resource is required");var c=this.getCachedToken(a);return c?(this.info("Token is already in cache for resource:"+a),void b(null,c,null)):this._user||this.config.extraQueryParameter&&-1!==this.config.extraQueryParameter.indexOf("login_hint")?void(this._activeRenewals[a]?this.registerCallback(this._activeRenewals[a],a,b):(this._requestType=this.REQUEST_TYPE.RENEW_TOKEN,a===this.config.clientId?this._user?(this.verbose("renewing idtoken"),this._renewIdToken(b)):(this.verbose("renewing idtoken and access_token"),this._renewIdToken(b,this.RESPONSE_TYPE.ID_TOKEN_TOKEN)):this._user?(this.verbose("renewing access_token"),this._renewToken(a,b)):(this.verbose("renewing idtoken and access_token"),this._renewToken(a,b,this.RESPONSE_TYPE.ID_TOKEN_TOKEN)))):(this.warn("User login is required"),void b("User login is required",null,"login required"))},AuthenticationContext.prototype.acquireTokenPopup=function(a,b,c,d){if(this._isEmpty(a))return this.warn("resource is required"),void d("resource is required",null,"resource is required");if(!this._user)return this.warn("User login is required"),void d("User login is required",null,"login required");if(this._acquireTokenInProgress)return this.warn("Acquire token interactive is already in progress"),void d("Acquire token interactive is already in progress",null,"Acquire token interactive is already in progress");var e=this._guid()+"|"+a;this.config.state=e,this._renewStates.push(e),this._requestType=this.REQUEST_TYPE.RENEW_TOKEN,this.verbose("Renew token Expected state: "+e);var f=this._urlRemoveQueryStringParameter(this._getNavigateUrl("token",a),"prompt");if(f+="&prompt=select_account",b&&(f+=b),c&&-1===f.indexOf("&claims"))f+="&claims="+encodeURIComponent(c);else if(c&&-1!==f.indexOf("&claims"))throw new Error("Claims cannot be passed as an extraQueryParameter");f=this._addHintParameters(f),this._acquireTokenInProgress=!0,this.info("acquireToken interactive is called for the resource "+a),this.registerCallback(e,a,d),this._loginPopup(f,a,d)},AuthenticationContext.prototype.acquireTokenRedirect=function(a,b,c){if(this._isEmpty(a))return this.warn("resource is required"),void d("resource is required",null,"resource is required");var d=this.callback;if(!this._user)return this.warn("User login is required"),void d("User login is required",null,"login required");if(this._acquireTokenInProgress)return this.warn("Acquire token interactive is already in progress"),void d("Acquire token interactive is already in progress",null,"Acquire token interactive is already in progress");var e=this._guid()+"|"+a;this.config.state=e,this.verbose("Renew token Expected state: "+e);var f=this._urlRemoveQueryStringParameter(this._getNavigateUrl("token",a),"prompt");if(f+="&prompt=select_account",b&&(f+=b),c&&-1===f.indexOf("&claims"))f+="&claims="+encodeURIComponent(c);else if(c&&-1!==f.indexOf("&claims"))throw new Error("Claims cannot be passed as an extraQueryParameter");f=this._addHintParameters(f),this._acquireTokenInProgress=!0,this.info("acquireToken interactive is called for the resource "+a),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST,window.location.href),this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW,e,!0),this.promptUser(f)},AuthenticationContext.prototype.promptUser=function(a){a?(this.infoPii("Navigate to:"+a),window.location.replace(a)):this.info("Navigate url is empty")},AuthenticationContext.prototype.clearCache=function(){this._saveItem(this.CONSTANTS.STORAGE.LOGIN_REQUEST,""),this._saveItem(this.CONSTANTS.STORAGE.ANGULAR_LOGIN_REQUEST,""),this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE,""),this._saveItem(this.CONSTANTS.STORAGE.STATE_LOGIN,""),this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW,""),this._renewStates=[],this._saveItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN,""),this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,""),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,"");var a=this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS);if(!this._isEmpty(a)){a=a.split(this.CONSTANTS.RESOURCE_DELIMETER);for(var b=0;b<a.length&&""!==a[b];b++)this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+a[b],""),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+a[b],0)}this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS,"")},AuthenticationContext.prototype.clearCacheForResource=function(a){this._saveItem(this.CONSTANTS.STORAGE.STATE_RENEW,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,""),this._hasResource(a)&&(this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+a,""),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+a,0))},AuthenticationContext.prototype.logOut=function(){this.clearCache(),this._user=null;var a;if(this.config.logOutUri)a=this.config.logOutUri;else{var b="common",c="";this.config.tenant&&(b=this.config.tenant),this.config.postLogoutRedirectUri&&(c="post_logout_redirect_uri="+encodeURIComponent(this.config.postLogoutRedirectUri)),a=this.instance+b+"/oauth2/logout?"+c}this.infoPii("Logout navigate to: "+a),this.promptUser(a)},AuthenticationContext.prototype._isEmpty=function(a){return void 0===a||!a||0===a.length},AuthenticationContext.prototype.getUser=function(a){if("function"!=typeof a)throw new Error("callback is not a function");if(this._user)return void a(null,this._user);var b=this._getItem(this.CONSTANTS.STORAGE.IDTOKEN);this._isEmpty(b)?(this.warn("User information is not available"),a("User information is not available",null)):(this.info("User exists in cache: "),this._user=this._createUser(b),a(null,this._user))},AuthenticationContext.prototype._addHintParameters=function(a){if(this._user&&this._user.profile)if(this._user.profile.sid&&-1!==a.indexOf("&prompt=none"))this._urlContainsQueryStringParameter("sid",a)||(a+="&sid="+encodeURIComponent(this._user.profile.sid));else if(this._user.profile.upn&&(this._urlContainsQueryStringParameter("login_hint",a)||(a+="&login_hint="+encodeURIComponent(this._user.profile.upn)),!this._urlContainsQueryStringParameter("domain_hint",a)&&this._user.profile.upn.indexOf("@")>-1)){var b=this._user.profile.upn.split("@");a+="&domain_hint="+encodeURIComponent(b[b.length-1])}return a},AuthenticationContext.prototype._createUser=function(a){var b=null,c=this._extractIdToken(a);return c&&c.hasOwnProperty("aud")&&(c.aud.toLowerCase()===this.config.clientId.toLowerCase()?(b={userName:"",profile:c},c.hasOwnProperty("upn")?b.userName=c.upn:c.hasOwnProperty("email")&&(b.userName=c.email)):this.warn("IdToken has invalid aud field")),b},AuthenticationContext.prototype._getHash=function(a){return a.indexOf("#/")>-1?a=a.substring(a.indexOf("#/")+2):a.indexOf("#")>-1&&(a=a.substring(1)),a},AuthenticationContext.prototype.isCallback=function(a){a=this._getHash(a);var b=this._deserialize(a);return b.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION)||b.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN)||b.hasOwnProperty(this.CONSTANTS.ID_TOKEN)},AuthenticationContext.prototype.getLoginError=function(){return this._getItem(this.CONSTANTS.STORAGE.LOGIN_ERROR)},AuthenticationContext.prototype.getRequestInfo=function(a){a=this._getHash(a);var b=this._deserialize(a),c={valid:!1,parameters:{},stateMatch:!1,stateResponse:"",requestType:this.REQUEST_TYPE.UNKNOWN};if(b&&(c.parameters=b,b.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION)||b.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN)||b.hasOwnProperty(this.CONSTANTS.ID_TOKEN))){c.valid=!0;var d="";if(!b.hasOwnProperty("state"))return this.warn("No state returned"),c;if(this.verbose("State: "+b.state),d=b.state,c.stateResponse=d,this._matchState(c))return c;if(!c.stateMatch&&window.parent){c.requestType=this._requestType;for(var e=this._renewStates,f=0;f<e.length;f++)if(e[f]===c.stateResponse){c.stateMatch=!0;break}}}return c},AuthenticationContext.prototype._matchNonce=function(a){var b=this._getItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN);if(b){b=b.split(this.CONSTANTS.CACHE_DELIMETER);for(var c=0;c<b.length;c++)if(b[c]===a.profile.nonce)return!0}return!1},AuthenticationContext.prototype._matchState=function(a){var b=this._getItem(this.CONSTANTS.STORAGE.STATE_LOGIN);if(b){b=b.split(this.CONSTANTS.CACHE_DELIMETER);for(var c=0;c<b.length;c++)if(b[c]===a.stateResponse)return a.requestType=this.REQUEST_TYPE.LOGIN,a.stateMatch=!0,!0}var d=this._getItem(this.CONSTANTS.STORAGE.STATE_RENEW);if(d){d=d.split(this.CONSTANTS.CACHE_DELIMETER);for(var c=0;c<d.length;c++)if(d[c]===a.stateResponse)return a.requestType=this.REQUEST_TYPE.RENEW_TOKEN,a.stateMatch=!0,!0}return!1},AuthenticationContext.prototype._getResourceFromState=function(a){if(a){var b=a.indexOf("|");if(b>-1&&b+1<a.length)return a.substring(b+1)}return""},AuthenticationContext.prototype.saveTokenFromHash=function(a){this.info("State status:"+a.stateMatch+"; Request type:"+a.requestType),this._saveItem(this.CONSTANTS.STORAGE.ERROR,""),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"");var b=this._getResourceFromState(a.stateResponse);if(a.parameters.hasOwnProperty(this.CONSTANTS.ERROR_DESCRIPTION))this.infoPii("Error :"+a.parameters.error+"; Error description:"+a.parameters[this.CONSTANTS.ERROR_DESCRIPTION]),this._saveItem(this.CONSTANTS.STORAGE.ERROR,a.parameters.error),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,a.parameters[this.CONSTANTS.ERROR_DESCRIPTION]),a.requestType===this.REQUEST_TYPE.LOGIN&&(this._loginInProgress=!1,this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,a.parameters.error_description));else if(a.stateMatch){this.info("State is right"),a.parameters.hasOwnProperty(this.CONSTANTS.SESSION_STATE)&&this._saveItem(this.CONSTANTS.STORAGE.SESSION_STATE,a.parameters[this.CONSTANTS.SESSION_STATE]);var c;a.parameters.hasOwnProperty(this.CONSTANTS.ACCESS_TOKEN)&&(this.info("Fragment has access token"),this._hasResource(b)||(c=this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS)||"",this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS,c+b+this.CONSTANTS.RESOURCE_DELIMETER)),this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+b,a.parameters[this.CONSTANTS.ACCESS_TOKEN]),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+b,this._expiresIn(a.parameters[this.CONSTANTS.EXPIRES_IN]))),a.parameters.hasOwnProperty(this.CONSTANTS.ID_TOKEN)&&(this.info("Fragment has id token"),this._loginInProgress=!1,this._user=this._createUser(a.parameters[this.CONSTANTS.ID_TOKEN]),this._user&&this._user.profile?this._matchNonce(this._user)?(this._saveItem(this.CONSTANTS.STORAGE.IDTOKEN,a.parameters[this.CONSTANTS.ID_TOKEN]),b=this.config.loginResource?this.config.loginResource:this.config.clientId,this._hasResource(b)||(c=this._getItem(this.CONSTANTS.STORAGE.TOKEN_KEYS)||"",this._saveItem(this.CONSTANTS.STORAGE.TOKEN_KEYS,c+b+this.CONSTANTS.RESOURCE_DELIMETER)),this._saveItem(this.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY+b,a.parameters[this.CONSTANTS.ID_TOKEN]),this._saveItem(this.CONSTANTS.STORAGE.EXPIRATION_KEY+b,this._user.profile.exp)):(this._saveItem(this.CONSTANTS.STORAGE.LOGIN_ERROR,"Nonce received: "+this._user.profile.nonce+" is not same as requested: "+this._getItem(this.CONSTANTS.STORAGE.NONCE_IDTOKEN)),this._user=null):(a.parameters.error="invalid id_token",a.parameters.error_description="Invalid id_token. id_token: "+a.parameters[this.CONSTANTS.ID_TOKEN],this._saveItem(this.CONSTANTS.STORAGE.ERROR,"invalid id_token"),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"Invalid id_token. id_token: "+a.parameters[this.CONSTANTS.ID_TOKEN])))}else a.parameters.error="Invalid_state",a.parameters.error_description="Invalid_state. state: "+a.stateResponse,this._saveItem(this.CONSTANTS.STORAGE.ERROR,"Invalid_state"),this._saveItem(this.CONSTANTS.STORAGE.ERROR_DESCRIPTION,"Invalid_state. state: "+a.stateResponse);this._saveItem(this.CONSTANTS.STORAGE.RENEW_STATUS+b,this.CONSTANTS.TOKEN_RENEW_STATUS_COMPLETED)},AuthenticationContext.prototype.getResourceForEndpoint=function(a){if(this.config&&this.config.anonymousEndpoints)for(var b=0;b<this.config.anonymousEndpoints.length;b++)if(a.indexOf(this.config.anonymousEndpoints[b])>-1)return null;if(this.config&&this.config.endpoints)for(var c in this.config.endpoints)if(a.indexOf(c)>-1)return this.config.endpoints[c];return a.indexOf("http://")>-1||a.indexOf("https://")>-1?this._getHostFromUri(a)===this._getHostFromUri(this.config.redirectUri)?this.config.loginResource:null:this.config.loginResource},AuthenticationContext.prototype._getHostFromUri=function(a){var b=String(a).replace(/^(https?:)\/\//,"");return b=b.split("/")[0]},AuthenticationContext.prototype.handleWindowCallback=function(a){if(null==a&&(a=window.location.hash),this.isCallback(a)){var b=null,c=!1;this._openedWindows.length>0&&this._openedWindows[this._openedWindows.length-1].opener&&this._openedWindows[this._openedWindows.length-1].opener._adalInstance?(b=this._openedWindows[this._openedWindows.length-1].opener._adalInstance,c=!0):window.parent&&window.parent._adalInstance&&(b=window.parent._adalInstance);var d,e,f=b.getRequestInfo(a),g=null;e=c||window.parent!==window?b._callBackMappedToRenewStates[f.stateResponse]:b.callback,b.info("Returned from redirect url"),b.saveTokenFromHash(f),f.requestType===this.REQUEST_TYPE.RENEW_TOKEN&&window.parent?(window.parent!==window?b.verbose("Window is in iframe, acquiring token silently"):b.verbose("acquiring token interactive in progress"),d=f.parameters[b.CONSTANTS.ACCESS_TOKEN]||f.parameters[b.CONSTANTS.ID_TOKEN],g=b.CONSTANTS.ACCESS_TOKEN):f.requestType===this.REQUEST_TYPE.LOGIN&&(d=f.parameters[b.CONSTANTS.ID_TOKEN],g=b.CONSTANTS.ID_TOKEN);var h=f.parameters[b.CONSTANTS.ERROR_DESCRIPTION],i=f.parameters[b.CONSTANTS.ERROR];try{e&&e(h,d,i,g)}catch(a){b.error("Error occurred in user defined callback function: "+a)}window.parent!==window||c||(b.config.navigateToLoginRequestUrl?window.location.href=b._getItem(b.CONSTANTS.STORAGE.LOGIN_REQUEST):window.location.hash="")}},AuthenticationContext.prototype._getNavigateUrl=function(a,b){var c="common";this.config.tenant&&(c=this.config.tenant);var d=this.instance+c+"/oauth2/authorize"+this._serialize(a,this.config,b)+this._addLibMetadata();return this.info("Navigate url:"+d),d},AuthenticationContext.prototype._extractIdToken=function(a){var b=this._decodeJwt(a);if(!b)return null;try{var c=b.JWSPayload,d=this._base64DecodeStringUrlSafe(c);return d?JSON.parse(d):(this.info("The returned id_token could not be base64 url safe decoded."),null)}catch(a){this.error("The returned id_token could not be decoded",a)}return null},AuthenticationContext.prototype._base64DecodeStringUrlSafe=function(a){return a=a.replace(/-/g,"+").replace(/_/g,"/"),window.atob?decodeURIComponent(escape(window.atob(a))):decodeURIComponent(escape(this._decode(a)))},AuthenticationContext.prototype._decode=function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a=String(a).replace(/=+$/,"");var c=a.length;if(c%4==1)throw new Error("The token to be decoded is not correctly encoded.");for(var d,e,f,g,h,i,j,k,l="",m=0;m<c;m+=4){if(d=b.indexOf(a.charAt(m)),e=b.indexOf(a.charAt(m+1)),f=b.indexOf(a.charAt(m+2)),g=b.indexOf(a.charAt(m+3)),m+2===c-1){h=d<<18|e<<12|f<<6,i=h>>16&255,j=h>>8&255,l+=String.fromCharCode(i,j);break}if(m+1===c-1){h=d<<18|e<<12,i=h>>16&255,l+=String.fromCharCode(i);break}h=d<<18|e<<12|f<<6|g,i=h>>16&255,j=h>>8&255,k=255&h,l+=String.fromCharCode(i,j,k)}return l},AuthenticationContext.prototype._decodeJwt=function(a){if(this._isEmpty(a))return null;var b=/^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/,c=b.exec(a);return!c||c.length<4?(this.warn("The returned id_token is not parseable."),null):{header:c[1],JWSPayload:c[2],JWSSig:c[3]}},AuthenticationContext.prototype._convertUrlSafeToRegularBase64EncodedString=function(a){return a.replace("-","+").replace("_","/")},AuthenticationContext.prototype._serialize=function(a,b,c){var d=[];if(null!==b){d.push("?response_type="+a),d.push("client_id="+encodeURIComponent(b.clientId)),c&&d.push("resource="+encodeURIComponent(c)),d.push("redirect_uri="+encodeURIComponent(b.redirectUri)),d.push("state="+encodeURIComponent(b.state)),b.hasOwnProperty("slice")&&d.push("slice="+encodeURIComponent(b.slice)),b.hasOwnProperty("extraQueryParameter")&&d.push(b.extraQueryParameter);var e=b.correlationId?b.correlationId:this._guid();d.push("client-request-id="+encodeURIComponent(e))}return d.join("&")},AuthenticationContext.prototype._deserialize=function(a){var b,c=/\+/g,d=/([^&=]+)=([^&]*)/g,e=function(a){return decodeURIComponent(a.replace(c," "))},f={};for(b=d.exec(a);b;)f[e(b[1])]=e(b[2]),b=d.exec(a);return f},AuthenticationContext.prototype._decimalToHex=function(a){for(var b=a.toString(16);b.length<2;)b="0"+b;return b},AuthenticationContext.prototype._guid=function(){var a=window.crypto||window.msCrypto;if(a&&a.getRandomValues){var b=new Uint8Array(16);return a.getRandomValues(b),b[6]|=64,b[6]&=79,b[8]|=128,b[8]&=191,this._decimalToHex(b[0])+this._decimalToHex(b[1])+this._decimalToHex(b[2])+this._decimalToHex(b[3])+"-"+this._decimalToHex(b[4])+this._decimalToHex(b[5])+"-"+this._decimalToHex(b[6])+this._decimalToHex(b[7])+"-"+this._decimalToHex(b[8])+this._decimalToHex(b[9])+"-"+this._decimalToHex(b[10])+this._decimalToHex(b[11])+this._decimalToHex(b[12])+this._decimalToHex(b[13])+this._decimalToHex(b[14])+this._decimalToHex(b[15])}for(var c="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",d="0123456789abcdef",e=0,f="",g=0;g<36;g++)"-"!==c[g]&&"4"!==c[g]&&(e=16*Math.random()|0),"x"===c[g]?f+=d[e]:"y"===c[g]?(e&=3,e|=8,f+=d[e]):f+=c[g];return f},AuthenticationContext.prototype._expiresIn=function(a){return a||(a=3599),this._now()+parseInt(a,10)},AuthenticationContext.prototype._now=function(){return Math.round((new Date).getTime()/1e3)},AuthenticationContext.prototype._addAdalFrame=function(a){if(void 0!==a){this.info("Add adal frame to document:"+a);var b=document.getElementById(a);if(!b){if(document.createElement&&document.documentElement&&(window.opera||-1===window.navigator.userAgent.indexOf("MSIE 5.0"))){var c=document.createElement("iframe");c.setAttribute("id",a),c.setAttribute("aria-hidden","true"),c.style.visibility="hidden",c.style.position="absolute",c.style.width=c.style.height=c.borderWidth="0px",b=document.getElementsByTagName("body")[0].appendChild(c)}else document.body&&document.body.insertAdjacentHTML&&document.body.insertAdjacentHTML("beforeEnd",'<iframe name="'+a+'" id="'+a+'" style="display:none"></iframe>');window.frames&&window.frames[a]&&(b=window.frames[a])}return b}},AuthenticationContext.prototype._saveItem=function(a,b,c){if(this.config&&this.config.cacheLocation&&"localStorage"===this.config.cacheLocation){if(!this._supportsLocalStorage())return this.info("Local storage is not supported"),!1;if(c){var d=this._getItem(a)||"";localStorage.setItem(a,d+b+this.CONSTANTS.CACHE_DELIMETER)}else localStorage.setItem(a,b);return!0}return this._supportsSessionStorage()?(sessionStorage.setItem(a,b),!0):(this.info("Session storage is not supported"),!1)},AuthenticationContext.prototype._getItem=function(a){return this.config&&this.config.cacheLocation&&"localStorage"===this.config.cacheLocation?this._supportsLocalStorage()?localStorage.getItem(a):(this.info("Local storage is not supported"),null):this._supportsSessionStorage()?sessionStorage.getItem(a):(this.info("Session storage is not supported"),null)},AuthenticationContext.prototype._supportsLocalStorage=function(){try{return!!window.localStorage&&(window.localStorage.setItem("storageTest","A"),"A"==window.localStorage.getItem("storageTest")&&(window.localStorage.removeItem("storageTest"),!window.localStorage.getItem("storageTest")))}catch(a){return!1}},AuthenticationContext.prototype._supportsSessionStorage=function(){try{return!!window.sessionStorage&&(window.sessionStorage.setItem("storageTest","A"),"A"==window.sessionStorage.getItem("storageTest")&&(window.sessionStorage.removeItem("storageTest"),!window.sessionStorage.getItem("storageTest")))}catch(a){return!1}},AuthenticationContext.prototype._cloneConfig=function(a){if(null===a||"object"!=typeof a)return a;var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},AuthenticationContext.prototype._addLibMetadata=function(){return"&x-client-SKU=Js&x-client-Ver="+this._libVersion()},AuthenticationContext.prototype.log=function(a,b,c,d){if(a<=Logging.level){if(!Logging.piiLoggingEnabled&&d)return;var e=(new Date).toUTCString(),f="";f=this.config.correlationId?e+":"+this.config.correlationId+"-"+this._libVersion()+"-"+this.CONSTANTS.LEVEL_STRING_MAP[a]+" "+b:e+":"+this._libVersion()+"-"+this.CONSTANTS.LEVEL_STRING_MAP[a]+" "+b,c&&(f+="\nstack:\n"+c.stack),Logging.log(f)}},AuthenticationContext.prototype.error=function(a,b){this.log(this.CONSTANTS.LOGGING_LEVEL.ERROR,a,b)},AuthenticationContext.prototype.warn=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.WARN,a,null)},AuthenticationContext.prototype.info=function(a){
this.log(this.CONSTANTS.LOGGING_LEVEL.INFO,a,null)},AuthenticationContext.prototype.verbose=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.VERBOSE,a,null)},AuthenticationContext.prototype.errorPii=function(a,b){this.log(this.CONSTANTS.LOGGING_LEVEL.ERROR,a,b,!0)},AuthenticationContext.prototype.warnPii=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.WARN,a,null,!0)},AuthenticationContext.prototype.infoPii=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.INFO,a,null,!0)},AuthenticationContext.prototype.verbosePii=function(a){this.log(this.CONSTANTS.LOGGING_LEVEL.VERBOSE,a,null,!0)},AuthenticationContext.prototype._libVersion=function(){return"1.0.17"},"undefined"!=typeof module&&module.exports&&(module.exports=AuthenticationContext,module.exports.inject=function(a){return new AuthenticationContext(a)}),AuthenticationContext}();

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (immutable) */ __webpack_exports__["a"] = __decorate;
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (immutable) */ __webpack_exports__["a"] = __decorate;
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventGroup_1 = __webpack_require__(25);
var scroll_1 = __webpack_require__(64);
var dom_1 = __webpack_require__(10);
var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER_HEIGHT = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 */
var AutoScroll = /** @class */ (function () {
    function AutoScroll(element) {
        this._events = new EventGroup_1.EventGroup(this);
        this._scrollableParent = scroll_1.findScrollableParent(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = dom_1.getRect(this._scrollableParent);
        // tslint:disable-next-line:no-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev.clientY);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev.touches[0].clientY);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (clientY) {
        if (!this._scrollRect) {
            return;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER_HEIGHT;
        if (clientY < (scrollRectTop + SCROLL_GUTTER_HEIGHT)) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER_HEIGHT - (clientY - scrollRectTop)) / SCROLL_GUTTER_HEIGHT));
        }
        else if (clientY > scrollClientBottom) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientY - scrollClientBottom) / SCROLL_GUTTER_HEIGHT));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());
exports.AutoScroll = AutoScroll;


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var styleToClassName_1 = __webpack_require__(26);
var extractStyleParts_1 = __webpack_require__(66);
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = extractStyleParts_1.extractStyleParts(args), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push(styleToClassName_1.styleToClassName(objects));
    }
    return classes.join(' ');
}
exports.mergeStyles = mergeStyles;


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function kebabRules(rulePairs, index) {
    rulePairs[index] = rulePairs[index].replace(/([A-Z])/g, '-$1').toLowerCase();
}
exports.kebabRules = kebabRules;


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getVendorSettings_1 = __webpack_require__(268);
var autoPrefixNames = {
    'user-select': 1
};
function prefixRules(rulePairs, index) {
    var vendorSettings = getVendorSettings_1.getVendorSettings();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}
exports.prefixRules = prefixRules;


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _vendorSettings;
function getVendorSettings() {
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent)))
            };
        }
    }
    return _vendorSettings;
}
exports.getVendorSettings = getVendorSettings;
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}
exports.setVendorSettings = setVendorSettings;


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex-basis',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom'
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var unit = (NON_PIXEL_NUMBER_PROPS.indexOf(name) === -1) ? 'px' : '';
        rulePairs[index + 1] = "" + value + unit;
    }
}
exports.provideUnits = provideUnits;


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(115)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var extractStyleParts_1 = __webpack_require__(66);
var concatStyleSets_1 = __webpack_require__(67);
var styleToClassName_1 = __webpack_require__(26);
/**
 * Allows you to pass in 1 or more sets of areas which will return a merged
 * set of classes.
 *
 * @public
 */
function mergeStyleSets() {
    var cssSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cssSets[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var classNameSet = {};
    var classMap = {};
    var cssSet = cssSets[0];
    if (cssSet) {
        if (cssSets.length > 1) {
            cssSet = concatStyleSets_1.concatStyleSets.apply(void 0, cssSets);
        }
        var registrations = [];
        for (var prop in cssSet) {
            if (cssSet.hasOwnProperty(prop)) {
                var args = cssSet[prop];
                // tslint:disable-next-line:no-any
                var _a = extractStyleParts_1.extractStyleParts(args), classes = _a.classes, objects = _a.objects;
                var registration = styleToClassName_1.styleToRegistration({ displayName: prop }, objects);
                registrations.push(registration);
                if (registration) {
                    classMap[prop] = registration.className;
                    classNameSet[prop] = classes.concat([registration.className]).join(' ');
                }
            }
        }
        for (var _b = 0, registrations_1 = registrations; _b < registrations_1.length; _b++) {
            var registration = registrations_1[_b];
            if (registration) {
                styleToClassName_1.applyRegistration(registration, classMap);
            }
        }
    }
    return classNameSet;
}
exports.mergeStyleSets = mergeStyleSets;


/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(14);
var styleToClassName_1 = __webpack_require__(26);
/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    Stylesheet_1.Stylesheet.getInstance().insertRule("@font-face{" + styleToClassName_1.serializeRuleEntries(font) + "}");
}
exports.fontFace = fontFace;


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(14);
var styleToClassName_1 = __webpack_require__(26);
/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var name = stylesheet.getClassName();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', styleToClassName_1.serializeRuleEntries(timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}");
    stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
    return name;
}
exports.keyframes = keyframes;


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(10);
function initializeDir(window) {
    var win = (window || dom_1.getWindow());
    if (win && !win.__hasInitializedDir__) {
        win.__hasInitializedDir__ = true;
        // Ensure that the documentElement has a 'dir' attribute.
        var documentElement = win.document.documentElement;
        if (!documentElement.hasAttribute('dir')) {
            documentElement.setAttribute('dir', 'ltr');
        }
    }
}
exports.initializeDir = initializeDir;


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(3);
function provideContext(contextTypes, mapPropsToContext) {
    var Provider = /** @class */ (function (_super) {
        tslib_1.__extends(Provider, _super);
        function Provider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Provider.prototype.getChildContext = function () {
            return mapPropsToContext(this.props);
        };
        Provider.prototype.render = function () {
            return React.Children.only(this.props.children);
        };
        Provider.childContextTypes = contextTypes;
        return Provider;
    }(React.Component));
    return Provider;
}
exports.provideContext = provideContext;


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(3);
var PropTypes = __webpack_require__(27);
var BaseComponent_1 = __webpack_require__(68);
/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator. This enables injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 */
var Customizer = /** @class */ (function (_super) {
    tslib_1.__extends(Customizer, _super);
    // tslint:disable-next-line:no-any
    function Customizer(props, context) {
        var _this = _super.call(this, props) || this;
        _this.state = _this._getCustomizations(props, context);
        return _this;
    }
    Customizer.prototype.getChildContext = function () {
        return this.state;
    };
    // tslint:disable-next-line:no-any
    Customizer.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this.setState(this._getCustomizations(newProps, newContext));
    };
    Customizer.prototype.render = function () {
        return React.Children.only(this.props.children);
    };
    Customizer.prototype._getCustomizations = function (props, context) {
        var _a = context.customizations, customizations = _a === void 0 ? { settings: {}, scopedSettings: {} } : _a;
        return {
            customizations: {
                settings: mergeSettings(customizations.settings, props.settings),
                scopedSettings: mergeScopedSettings(customizations.scopedSettings, props.scopedSettings),
            }
        };
    };
    Customizer.contextTypes = {
        customizations: PropTypes.object
    };
    Customizer.childContextTypes = Customizer.contextTypes;
    return Customizer;
}(BaseComponent_1.BaseComponent));
exports.Customizer = Customizer;
function mergeSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = isSettingsFunction(newSettings) ? newSettings : settingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function mergeScopedSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = isSettingsFunction(newSettings) ? newSettings : scopedSettingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function isSettingsFunction(settings) {
    return typeof settings === 'function';
}
function settingsMergeWith(newSettings) {
    return function (settings) { return newSettings ? tslib_1.__assign({}, newSettings, settings) : settings; };
}
function scopedSettingsMergeWith(scopedSettingsFromProps) {
    if (scopedSettingsFromProps === void 0) { scopedSettingsFromProps = {}; }
    return function (oldScopedSettings) {
        var newScopedSettings = tslib_1.__assign({}, oldScopedSettings);
        for (var scopeName in scopedSettingsFromProps) {
            if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
                newScopedSettings[scopeName] = tslib_1.__assign({}, oldScopedSettings[scopeName], scopedSettingsFromProps[scopeName]);
            }
        }
        return newScopedSettings;
    };
}


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(5);
  var warning = __webpack_require__(7);
  var ReactPropTypesSecret = __webpack_require__(70);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(3);
/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 */
var DelayedRender = /** @class */ (function (_super) {
    tslib_1.__extends(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = setTimeout(function () {
            _this.setState({
                isRendered: true
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? React.Children.only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0
    };
    return DelayedRender;
}(React.Component));
exports.DelayedRender = DelayedRender;


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 */
var FabricPerformance = /** @class */ (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        if (FabricPerformance._timeoutId) {
            FabricPerformance.setPeriodicReset();
        }
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: []
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance._timeoutId = NaN;
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());
exports.FabricPerformance = FabricPerformance;


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Const enum for keycodes.
 *
 * @public
 */
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["backspace"] = 8] = "backspace";
    KeyCodes[KeyCodes["tab"] = 9] = "tab";
    KeyCodes[KeyCodes["enter"] = 13] = "enter";
    KeyCodes[KeyCodes["shift"] = 16] = "shift";
    KeyCodes[KeyCodes["ctrl"] = 17] = "ctrl";
    KeyCodes[KeyCodes["alt"] = 18] = "alt";
    KeyCodes[KeyCodes["pauseBreak"] = 19] = "pauseBreak";
    KeyCodes[KeyCodes["capslock"] = 20] = "capslock";
    KeyCodes[KeyCodes["escape"] = 27] = "escape";
    KeyCodes[KeyCodes["space"] = 32] = "space";
    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
    KeyCodes[KeyCodes["end"] = 35] = "end";
    KeyCodes[KeyCodes["home"] = 36] = "home";
    KeyCodes[KeyCodes["left"] = 37] = "left";
    KeyCodes[KeyCodes["up"] = 38] = "up";
    KeyCodes[KeyCodes["right"] = 39] = "right";
    KeyCodes[KeyCodes["down"] = 40] = "down";
    KeyCodes[KeyCodes["insert"] = 45] = "insert";
    KeyCodes[KeyCodes["del"] = 46] = "del";
    KeyCodes[KeyCodes["zero"] = 48] = "zero";
    KeyCodes[KeyCodes["one"] = 49] = "one";
    KeyCodes[KeyCodes["two"] = 50] = "two";
    KeyCodes[KeyCodes["three"] = 51] = "three";
    KeyCodes[KeyCodes["four"] = 52] = "four";
    KeyCodes[KeyCodes["five"] = 53] = "five";
    KeyCodes[KeyCodes["six"] = 54] = "six";
    KeyCodes[KeyCodes["seven"] = 55] = "seven";
    KeyCodes[KeyCodes["eight"] = 56] = "eight";
    KeyCodes[KeyCodes["nine"] = 57] = "nine";
    KeyCodes[KeyCodes["a"] = 65] = "a";
    KeyCodes[KeyCodes["b"] = 66] = "b";
    KeyCodes[KeyCodes["c"] = 67] = "c";
    KeyCodes[KeyCodes["d"] = 68] = "d";
    KeyCodes[KeyCodes["e"] = 69] = "e";
    KeyCodes[KeyCodes["f"] = 70] = "f";
    KeyCodes[KeyCodes["g"] = 71] = "g";
    KeyCodes[KeyCodes["h"] = 72] = "h";
    KeyCodes[KeyCodes["i"] = 73] = "i";
    KeyCodes[KeyCodes["j"] = 74] = "j";
    KeyCodes[KeyCodes["k"] = 75] = "k";
    KeyCodes[KeyCodes["l"] = 76] = "l";
    KeyCodes[KeyCodes["m"] = 77] = "m";
    KeyCodes[KeyCodes["n"] = 78] = "n";
    KeyCodes[KeyCodes["o"] = 79] = "o";
    KeyCodes[KeyCodes["p"] = 80] = "p";
    KeyCodes[KeyCodes["q"] = 81] = "q";
    KeyCodes[KeyCodes["r"] = 82] = "r";
    KeyCodes[KeyCodes["s"] = 83] = "s";
    KeyCodes[KeyCodes["t"] = 84] = "t";
    KeyCodes[KeyCodes["u"] = 85] = "u";
    KeyCodes[KeyCodes["v"] = 86] = "v";
    KeyCodes[KeyCodes["w"] = 87] = "w";
    KeyCodes[KeyCodes["x"] = 88] = "x";
    KeyCodes[KeyCodes["y"] = 89] = "y";
    KeyCodes[KeyCodes["z"] = 90] = "z";
    KeyCodes[KeyCodes["leftWindow"] = 91] = "leftWindow";
    KeyCodes[KeyCodes["rightWindow"] = 92] = "rightWindow";
    KeyCodes[KeyCodes["select"] = 93] = "select";
    KeyCodes[KeyCodes["zero_numpad"] = 96] = "zero_numpad";
    KeyCodes[KeyCodes["one_numpad"] = 97] = "one_numpad";
    KeyCodes[KeyCodes["two_numpad"] = 98] = "two_numpad";
    KeyCodes[KeyCodes["three_numpad"] = 99] = "three_numpad";
    KeyCodes[KeyCodes["four_numpad"] = 100] = "four_numpad";
    KeyCodes[KeyCodes["five_numpad"] = 101] = "five_numpad";
    KeyCodes[KeyCodes["six_numpad"] = 102] = "six_numpad";
    KeyCodes[KeyCodes["seven_numpad"] = 103] = "seven_numpad";
    KeyCodes[KeyCodes["eight_numpad"] = 104] = "eight_numpad";
    KeyCodes[KeyCodes["nine_numpad"] = 105] = "nine_numpad";
    KeyCodes[KeyCodes["multiply"] = 106] = "multiply";
    KeyCodes[KeyCodes["add"] = 107] = "add";
    KeyCodes[KeyCodes["subtract"] = 109] = "subtract";
    KeyCodes[KeyCodes["decimalPoint"] = 110] = "decimalPoint";
    KeyCodes[KeyCodes["divide"] = 111] = "divide";
    KeyCodes[KeyCodes["f1"] = 112] = "f1";
    KeyCodes[KeyCodes["f2"] = 113] = "f2";
    KeyCodes[KeyCodes["f3"] = 114] = "f3";
    KeyCodes[KeyCodes["f4"] = 115] = "f4";
    KeyCodes[KeyCodes["f5"] = 116] = "f5";
    KeyCodes[KeyCodes["f6"] = 117] = "f6";
    KeyCodes[KeyCodes["f7"] = 118] = "f7";
    KeyCodes[KeyCodes["f8"] = 119] = "f8";
    KeyCodes[KeyCodes["f9"] = 120] = "f9";
    KeyCodes[KeyCodes["f10"] = 121] = "f10";
    KeyCodes[KeyCodes["f11"] = 122] = "f11";
    KeyCodes[KeyCodes["f12"] = 123] = "f12";
    KeyCodes[KeyCodes["numlock"] = 144] = "numlock";
    KeyCodes[KeyCodes["scrollLock"] = 145] = "scrollLock";
    KeyCodes[KeyCodes["semicolon"] = 186] = "semicolon";
    KeyCodes[KeyCodes["equalSign"] = 187] = "equalSign";
    KeyCodes[KeyCodes["comma"] = 188] = "comma";
    KeyCodes[KeyCodes["dash"] = 189] = "dash";
    KeyCodes[KeyCodes["period"] = 190] = "period";
    KeyCodes[KeyCodes["forwardSlash"] = 191] = "forwardSlash";
    KeyCodes[KeyCodes["graveAccent"] = 192] = "graveAccent";
    KeyCodes[KeyCodes["openBracket"] = 219] = "openBracket";
    KeyCodes[KeyCodes["backSlash"] = 220] = "backSlash";
    KeyCodes[KeyCodes["closeBracket"] = 221] = "closeBracket";
    KeyCodes[KeyCodes["singleQuote"] = 222] = "singleQuote";
})(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Rectangle helper class.
 *
 * @public
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // I'm fixing it to 4 decimal places because it allows enough precision and will handle cases when something should be rounded,
        // like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 */
function findIndex(array, cb) {
    var index = -1;
    for (var i = 0; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
exports.findIndex = findIndex;
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
exports.find = find;
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
exports.createArray = createArray;
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns {any[][]} - A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
exports.toMatrix = toMatrix;
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
exports.removeIndex = removeIndex;
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
exports.replaceElement = replaceElement;
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
exports.addElementAtIndex = addElementAtIndex;
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
exports.flatten = flatten;
/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns {boolean} True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
exports.arraysEqual = arraysEqual;


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}
exports.assertNever = assertNever;


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
 * so that they can be used in scenarios that simply require a function callback.
 * @deprecated This has been deprecated in favor of using arrow function properties
 */
// tslint:disable-next-line:no-any
function autobind(target, key, descriptor) {
    var fn = descriptor.value;
    var defining = false;
    return {
        configurable: true,
        get: function () {
            if (defining || (fn && this === fn.prototype) || this.hasOwnProperty(key)) {
                return fn;
            }
            // Bind method only once, and update the property to return the bound value from now on
            var fnBound = fn && fn.bind(this);
            defining = true;
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: fnBound
            });
            defining = false;
            return fnBound;
        },
        // tslint:disable-next-line:no-any
        set: function (newValue) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: newValue
            });
        }
    };
}
exports.autobind = autobind;


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(8);
/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 */
function classNamesFunction() {
    // TODO: memoize.
    return function (getStyles, styleProps) { return index_1.mergeStyleSets(getStyles && getStyles(styleProps)); };
}
exports.classNamesFunction = classNamesFunction;


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is a polyfill for the React.createRef() api.
 * For more info on React.createRef() see the official React documentation
 * on creating and accessing refs.
 * @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 * @see https://reactjs.org/docs/refs-and-the-dom.html#accessing-refs
 */
function createRef() {
    var refObject = (function (element) {
        refObject.current = element;
    });
    // This getter is here to support the deprecated value prop on the refObject.
    Object.defineProperty(refObject, 'value', {
        get: function () {
            return refObject.current;
        }
    });
    refObject.current = null;
    return refObject;
}
exports.createRef = createRef;


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if ((arg.hasOwnProperty('toString') && typeof (arg.toString) === 'function')) {
                classes.push(arg.toString());
            }
            else {
                // tslint:disable-next-line:no-any
                for (var key in arg) {
                    // tslint:disable-next-line:no-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}
exports.css = css;


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(3);
var PropTypes = __webpack_require__(27);
var Customizations_1 = __webpack_require__(44);
var hoistStatics_1 = __webpack_require__(71);
function customizable(scope, fields
// tslint:disable-next-line:no-any
) {
    // tslint:disable-next-line:no-shadowed-variable
    return function customizableFactory(
    // tslint:disable-next-line:no-any
    ComposedComponent
    // tslint:disable-next-line:no-any
    ) {
        var resultClass = (_a = /** @class */ (function (_super) {
                tslib_1.__extends(ComponentWithInjectedProps, _super);
                // tslint:disable-next-line:no-any
                function ComponentWithInjectedProps(props, context) {
                    var _this = _super.call(this, props, context) || this;
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    Customizations_1.Customizations.observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    Customizations_1.Customizations.unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var defaultProps = Customizations_1.Customizations.getSettings(fields, scope, this.context.customizations);
                    return (
                    // tslint:disable-next-line:no-any
                    React.createElement(ComposedComponent, tslib_1.__assign({}, defaultProps, this.props)));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(React.Component)),
            _a.displayName = 'Customized' + scope,
            _a.contextTypes = {
                customizations: PropTypes.object
            },
            _a);
        return hoistStatics_1.hoistStatics(ComposedComponent, resultClass);
        var _a;
    };
}
exports.customizable = customizable;


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-string-literal */
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(10);
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true, false, false, includeElementsInFocusZones);
}
exports.getFirstFocusable = getFirstFocusable;
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones);
}
exports.getLastFocusable = getLastFocusable;
/**
 * Gets the last tabbable element.
 *
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones, false, true);
}
exports.getLastTabbable = getLastTabbable;
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        focusAsync(element);
        return true;
    }
    return false;
}
exports.focusFirstChild = focusFirstChild;
/**
 * Traverse to find the previous element.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement ||
        (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren && isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            if ((tabbable && (isElementTabbable(childMatch, true))) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
exports.getPreviousElement = getPreviousElement;
/**
 * Traverse to find the next focusable element.
 *
 * @public
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot) {
    if (!currentElement ||
        (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal && isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot);
    }
    return null;
}
exports.getNextElement = getNextElement;
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // tslint:disable-next-line:no-any
        element.isVisible === true); // used as a workaround for testing.
}
exports.isElementVisible = isElementVisible;
/**
 * Determines if an element can receive focus.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            (element.tagName === 'BUTTON') ||
            (element.tagName === 'INPUT') ||
            (element.tagName === 'TEXTAREA') ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet ||
            element.getAttribute && element.getAttribute('role') === 'button');
    return checkTabIndex ? (tabIndex !== -1) && result : result;
}
exports.isElementTabbable = isElementTabbable;
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
exports.isElementFocusZone = isElementFocusZone;
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
exports.isElementFocusSubZone = isElementFocusSubZone;
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = dom_1.getDocument(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && dom_1.elementContains(element, currentActiveElement)) {
        return true;
    }
    return false;
}
exports.doesElementContainFocus = doesElementContainFocus;
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute) {
    return dom_1.elementContainsAttribute(element, noWrapDataAttribute) === 'true' ? false : true;
}
exports.shouldWrapFocus = shouldWrapFocus;
var targetToFocusOnNextRepaint = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element The element to focus
 */
function focusAsync(element) {
    if (element) {
        // An element was already queued to be focused, so replace that one with the new element
        if (targetToFocusOnNextRepaint) {
            targetToFocusOnNextRepaint = element;
            return;
        }
        targetToFocusOnNextRepaint = element;
        var win = dom_1.getWindow(element);
        if (win) {
            // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
            win.requestAnimationFrame(function () {
                targetToFocusOnNextRepaint && targetToFocusOnNextRepaint.focus();
                // We are done focusing for this frame, so reset the queued focus element
                targetToFocusOnNextRepaint = undefined;
            });
        }
    }
}
exports.focusAsync = focusAsync;


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
// tslint:disable-next-line:no-any
function hoistMethods(destination, source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            /* tslint:disable:no-function-expression */
            destination[methodName] = function () { source[methodName].apply(source, arguments); };
            /* tslint:enable */
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
exports.hoistMethods = hoistMethods;
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// tslint:disable-next-line:no-any
function unhoistMethods(source, methodNames) {
    methodNames
        .forEach(function (methodName) { return delete source[methodName]; });
}
exports.unhoistMethods = unhoistMethods;


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Regular expression matching characters to ignore when calculating the initials.
 * The first part matches characters within parenthesis, including the parenthesis.
 * The second part matches special ASCII characters except space, plus some unicode special characters.
 */
var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
var PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs, CJK Unified Ideographs Extension B
 */
/* tslint:disable:max-line-length */
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
/* tslint:enable:max-line-length */
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl, allowPhoneInitials) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    // For names containing CJK characters, and phone numbers, we don't display initials
    if (UNSUPPORTED_TEXT_REGEX.test(displayName) ||
        (!allowPhoneInitials && PHONENUMBER_REGEX.test(displayName))) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}
exports.getInitials = getInitials;


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.localStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
exports.getItem = getItem;
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        window.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
exports.setItem = setItem;


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines the distance between two points.
 *
 * @public
 */
function getDistanceBetweenPoints(point1, point2) {
    var distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    return distance;
}
exports.getDistanceBetweenPoints = getDistanceBetweenPoints;
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale
    };
}
exports.fitContentToBounds = fitContentToBounds;
/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value
 */
function calculatePrecision(value) {
    /**
     * Group 1:
     * [1-9]([0]+$) matches trailing zeros
     * Group 2:
     * \.([0-9]*) matches all digits after a decimal point.
     */
    var groups = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(value));
    if (!groups) {
        return 0;
    }
    if (groups[1]) {
        return -groups[1].length;
    }
    if (groups[2]) {
        return groups[2].length;
    }
    return 0;
}
exports.calculatePrecision = calculatePrecision;
/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value The value that is being rounded.
 * @param precision The number of decimal places to round the number to
 */
function precisionRound(value, precision, base) {
    if (base === void 0) { base = 10; }
    var exp = Math.pow(base, precision);
    return Math.round(value * exp) / exp;
}
exports.precisionRound = precisionRound;


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = (typeof WeakMap === 'undefined') ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
exports.setMemoizeWeakMap = setMemoizeWeakMap;
/**
 * Memoize decorator to be used on class methods. Note that the "this" reference
 * will be inaccessible within a memoized method, given that a cached method's this
 * would not be instance specific.
 *
 * @public
 */
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        }
    };
}
exports.memoize = memoize;
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    var rootNode;
    var cacheSize = 0;
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    // tslint:disable-next-line:no-function-expression
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined || (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        return currentNode.value;
    };
}
exports.memoizeFunction = memoizeFunction;
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null
    };
}


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
exports.hasHorizontalOverflow = hasHorizontalOverflow;
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
exports.hasVerticalOverflow = hasVerticalOverflow;
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}
exports.hasOverflow = hasOverflow;


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(41);
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
exports.baseElementEvents = [
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel'
];
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
exports.baseElementProperties = [
    'defaultChecked',
    'defaultValue',
    'accept',
    'acceptCharset',
    'accessKey',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'challenge',
    'checked',
    'children',
    'classID',
    'className',
    'cols',
    'colSpan',
    'content',
    'contentEditable',
    'contextMenu',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'dir',
    'download',
    'draggable',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'hidden',
    'high',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'icon',
    'id',
    'inputMode',
    'integrity',
    'is',
    'keyParams',
    'keyType',
    'kind',
    'lang',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'radioGroup',
    'readOnly',
    'rel',
    'required',
    'role',
    'rows',
    'rowSpan',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellCheck',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'style',
    'summary',
    'tabIndex',
    'title',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap'
];
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
exports.htmlElementProperties = exports.baseElementProperties.concat(exports.baseElementEvents);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
exports.anchorProperties = exports.htmlElementProperties.concat([
    'href',
    'target'
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
exports.buttonProperties = exports.htmlElementProperties.concat([
    'disabled'
]);
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
exports.divProperties = exports.htmlElementProperties.concat(['align', 'noWrap']);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
exports.inputProperties = exports.buttonProperties;
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
exports.textAreaProperties = exports.buttonProperties;
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
exports.imageProperties = exports.divProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */
function getNativeProps(props, allowedPropNames, excludedPropNames) {
    return object_1.filteredAssign(function (propName) {
        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) && ((propName.indexOf('data-') === 0) ||
            (propName.indexOf('aria-') === 0) ||
            (allowedPropNames.indexOf(propName) >= 0)));
    }, {}, props);
}
exports.getNativeProps = getNativeProps;


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
exports.getResourceUrl = getResourceUrl;
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}
exports.setBaseUrl = setBaseUrl;


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(10);
var sessionStorage_1 = __webpack_require__(298);
var rtlifyRules_1 = __webpack_require__(65);
var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL() {
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = sessionStorage_1.getItem(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = dom_1.getDocument();
        if (_isRTL === undefined && doc) {
            _isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
            rtlifyRules_1.setRTL(_isRTL);
        }
    }
    return !!_isRTL;
}
exports.getRTL = getRTL;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = dom_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        sessionStorage_1.setItem(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    rtlifyRules_1.setRTL(_isRTL);
}
exports.setRTL = setRTL;
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key) {
    if (getRTL()) {
        if (key === 37 /* left */) {
            key = 39 /* right */;
        }
        else if (key === 39 /* right */) {
            key = 37 /* left */;
        }
    }
    return key;
}
exports.getRTLSafeKeyCode = getRTLSafeKeyCode;


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.sessionStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
exports.getItem = getItem;
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    try {
        window.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
exports.setItem = setItem;


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * Example "I love {0} every {1}".format("CXP") will result in a Debug Exception.
 *
 * @public
 */
// tslint:disable-next-line:no-any
function format(s) {
    'use strict';
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replace_func(match) {
        // looks up in the args
        // tslint:disable-next-line:no-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return (s.replace(FORMAT_REGEX, replace_func));
}
exports.format = format;


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUrl = window.location.href.substr(0, window.location.href.indexOf("/", 10)) +
    window.location.pathname;
exports.WebConfig = {
    hosturl: "https://esquel.sharepoint.com",
    AdminGroupName: "CasSiteAdmin",
    MyCusCssUrl: document.location.href.indexOf("workbench.aspx") > 0
        ? "../../SiteAssets/MyCusCss.css"
        : "../SiteAssets/MyCusCss.css",
    subjectsListName: "Contract_Subjects",
    // requestsListName: "Contract_Requests",
    requestedItemsListName: "Contract_Items",
    contractTypeListName: "Contract_types",
    AddrListName: "Contract_Results",
    StaffDeptListName: "Contract_StaffDepts",
    DeptsListName: "Contract_Depts",
    SystemName: "合同审批系统",
    CreatedByMeListPage: "mycontracts.aspx",
    NewContractPage: "newcontract.aspx",
    InapprovalListPage: "inapprovallist.aspx",
    ApprovalPage: "approval.aspx",
    EmailToApprovalTemplate: {
        subject: "申请人{0}已提交合同审批单，请审批",
        body: "<div><div>亲爱的同事，</div><p>&nbsp;&nbsp;请在{0}中帮忙审批以下合同。谢谢 \
        </p><p>{1}</p>"
    },
    EmailToMeTemplate: {
        subject: "合同审批单已提交成功！",
        body: "<div>您的申请单已经提交成功，请尽快提交纸质版合同给审批人审批，可{0}看详情和审批情况。</div> \
<table border=1 cellspacing=0> \
<tr><td style='max-width:300px;word-break:break-all; '>合同审批单号</td><td>审批人</td></tr> \
{1} \
</table>"
    },
    EmailResultTemplate: {
        subject: "您提交的合同{0}审批单{1}已被{2}审批{3}！",
        body: "<div><div>亲爱的同事，</div><p>&nbsp;&nbsp;您提交的合同{0}审批单{1}已被{2}审批{3}! \
        </p>{4}<p>可在{5}中查看详情和审批情况。</p>"
    },
    EmailToLawyerTemplate: {
        subject: "申请人{0}提交的{1}合同审批单已通过审价，请您审批",
        body: "<div><div>亲爱的同事，</div><p>&nbsp;&nbsp;请在{0}中帮忙审批{1}，审批单号{2}。谢谢 \
    </p>"
    }
};



/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(3);
var index_1 = __webpack_require__(8);
/**
 * The styled HOC wrapper allows you to create a functional wrapper around a given component which will resolve
 * getStyles functional props, and mix customized props passed in using concatStyleSets. Example:
 *
 * ```tsx
 * export const Toggle = styled(
 *   ToggleBase,
 *   {
 *     getStyles: props => ({ root: { background: 'red' }})
 *   }
 * );
 * ```
 *
 */
function styled(Component, getBaseStyles, getProps) {
    var Wrapped = (function (componentProps) {
        var getStyles = function (styleProps) { return index_1.concatStyleSets(getBaseStyles && getBaseStyles(styleProps), componentProps && componentProps.getStyles && componentProps.getStyles(styleProps)); };
        var additionalProps = getProps ? getProps(componentProps) : {};
        return (React.createElement(Component, tslib_1.__assign({}, additionalProps, componentProps, { getStyles: getStyles })));
    });
    Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
    return Wrapped;
}
exports.styled = styled;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FunctionListener; });
/**
@license
 * @pnp/logging v1.2.3 - pnp - light-weight, subscribable logging framework
 * MIT (https://github.com/pnp/pnpjs/blob/master/LICENSE)
 * Copyright (c) 2018 Microsoft
 * docs: https://pnp.github.io/pnpjs/
 * source: https:github.com/pnp/pnpjs
 * bugs: https://github.com/pnp/pnpjs/issues
 */
/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Object.defineProperty(Logger, "activeLogLevel", {
        /**
         * Gets or sets the active log level to apply for log filtering
         */
        get: function () {
            return Logger.instance.activeLogLevel;
        },
        set: function (value) {
            Logger.instance.activeLogLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger, "instance", {
        get: function () {
            if (Logger._instance === undefined || Logger._instance === null) {
                Logger._instance = new LoggerImpl();
            }
            return Logger._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds ILogListener instances to the set of subscribed listeners
     *
     * @param listeners One or more listeners to subscribe to this log
     */
    Logger.subscribe = function () {
        var listeners = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            listeners[_i] = arguments[_i];
        }
        listeners.map(function (listener) { return Logger.instance.subscribe(listener); });
    };
    /**
     * Clears the subscribers collection, returning the collection before modifiction
     */
    Logger.clearSubscribers = function () {
        return Logger.instance.clearSubscribers();
    };
    Object.defineProperty(Logger, "count", {
        /**
         * Gets the current subscriber count
         */
        get: function () {
            return Logger.instance.count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param message The message to write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
     */
    Logger.write = function (message, level) {
        if (level === void 0) { level = 1 /* Info */; }
        Logger.instance.log({ level: level, message: message });
    };
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param json The json object to stringify and write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
     */
    Logger.writeJSON = function (json, level) {
        if (level === void 0) { level = 1 /* Info */; }
        this.write(JSON.stringify(json), level);
    };
    /**
     * Logs the supplied entry to the subscribed listeners
     *
     * @param entry The message to log
     */
    Logger.log = function (entry) {
        Logger.instance.log(entry);
    };
    /**
     * Logs an error object to the subscribed listeners
     *
     * @param err The error object
     */
    Logger.error = function (err) {
        Logger.instance.log({ data: err, level: 3 /* Error */, message: err.message });
    };
    return Logger;
}());
var LoggerImpl = /** @class */ (function () {
    function LoggerImpl(activeLogLevel, subscribers) {
        if (activeLogLevel === void 0) { activeLogLevel = 2 /* Warning */; }
        if (subscribers === void 0) { subscribers = []; }
        this.activeLogLevel = activeLogLevel;
        this.subscribers = subscribers;
    }
    LoggerImpl.prototype.subscribe = function (listener) {
        this.subscribers.push(listener);
    };
    LoggerImpl.prototype.clearSubscribers = function () {
        var s = this.subscribers.slice(0);
        this.subscribers.length = 0;
        return s;
    };
    Object.defineProperty(LoggerImpl.prototype, "count", {
        get: function () {
            return this.subscribers.length;
        },
        enumerable: true,
        configurable: true
    });
    LoggerImpl.prototype.write = function (message, level) {
        if (level === void 0) { level = 1 /* Info */; }
        this.log({ level: level, message: message });
    };
    LoggerImpl.prototype.log = function (entry) {
        if (entry !== undefined && this.activeLogLevel <= entry.level) {
            this.subscribers.map(function (subscriber) { return subscriber.log(entry); });
        }
    };
    return LoggerImpl;
}());

/**
 * A set of logging levels
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Off"] = 99] = "Off";
})(LogLevel || (LogLevel = {}));

/**
 * Implementation of LogListener which logs to the console
 *
 */
var ConsoleListener = /** @class */ (function () {
    function ConsoleListener() {
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    ConsoleListener.prototype.log = function (entry) {
        var msg = this.format(entry);
        switch (entry.level) {
            case 0 /* Verbose */:
            case 1 /* Info */:
                console.log(msg);
                break;
            case 2 /* Warning */:
                console.warn(msg);
                break;
            case 3 /* Error */:
                console.error(msg);
                break;
        }
    };
    /**
     * Formats the message
     *
     * @param entry The information to format into a string
     */
    ConsoleListener.prototype.format = function (entry) {
        var msg = [];
        msg.push("Message: " + entry.message);
        if (entry.data !== undefined) {
            msg.push(" Data: " + JSON.stringify(entry.data));
        }
        return msg.join("");
    };
    return ConsoleListener;
}());
/**
 * Implementation of LogListener which logs to the supplied function
 *
 */
var FunctionListener = /** @class */ (function () {
    /**
     * Creates a new instance of the FunctionListener class
     *
     * @constructor
     * @param  method The method to which any logging data will be passed
     */
    function FunctionListener(method) {
        this.method = method;
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    FunctionListener.prototype.log = function (entry) {
        this.method(entry);
    };
    return FunctionListener;
}());




/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// tslint:disable-next-line:no-any
var _global = (typeof window !== 'undefined' && window) || process;
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
// tslint:disable-next-line:no-any
function checkProperties(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || (b[propName] !== a[propName])) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Compares a to b and b to a.
 *
 * @public
 */
function shallowCompare(a, b) {
    return checkProperties(a, b) && checkProperties(b, a);
}
exports.shallowCompare = shallowCompare;
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
exports.assign = assign;
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) &&
                    (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
exports.filteredAssign = filteredAssign;
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix || DEFAULT_ID_STRING) + index;
}
exports.getId = getId;
/* Takes an enum and iterates over each value of the enum (as a string), running the callback on each, returning a mapped array.
 * The callback takes as a first parameter the string that represents the name of the entry, and the second parameter is the
 * value of that entry, which is the value you'd normally use when using the enum (usually a number).
 * */
function mapEnumByName(
// tslint:disable-next-line:no-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum).map(function (p) {
        if (String(Number(p)) !== p) { // if the property is not just a number (because enums in TypeScript will map both ways)
            return callback(p, theEnum[p]);
        }
    }).filter(function (v) { return !!v; }); // only return elements with values
}
exports.mapEnumByName = mapEnumByName;
/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// tslint:disable-next-line:no-any
function values(obj) {
    return Object.keys(obj).reduce(function (arr, key) {
        arr.push(obj[key]);
        return arr;
    }, []);
}
exports.values = values;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _warningCallback = undefined;
/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    for (var propName in deprecationMap) {
        if (props && propName in props) {
            var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
            var replacementPropName = deprecationMap[propName];
            if (replacementPropName) {
                deprecationMessage += " Use '" + replacementPropName + "' instead.";
            }
            warn(deprecationMessage);
        }
    }
}
exports.warnDeprecations = warnDeprecations;
/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    for (var propName in exclusiveMap) {
        if (props && propName in props) {
            var propInExclusiveMapValue = exclusiveMap[propName];
            if (propInExclusiveMapValue && propInExclusiveMapValue in props) {
                warn(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. Use one or the other.");
            }
        }
    }
}
exports.warnMutuallyExclusive = warnMutuallyExclusive;
/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
*/
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true) {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                warn(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}
exports.warnConditionallyRequiredProps = warnConditionallyRequiredProps;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback) {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
exports.warn = warn;
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}
exports.setWarningCallback = setWarningCallback;


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(10);
var keyboard_1 = __webpack_require__(69);
exports.IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'is-focusVisible' classname
 *    to the document body.
 * 3. When the user clicks a mouse button, we remove the classname if it exists.
 *
 * This logic allows components on the page to conditionally render focus treatments only
 * if the global classname exists, which simplifies logic overall.
 *
 * @param window
 */
function initializeFocusRects(window) {
    var win = (window || dom_1.getWindow());
    if (win && !win.__hasInitializeFocusRects__) {
        win.__hasInitializeFocusRects__ = true;
        win.addEventListener('mousedown', _onMouseDown, true);
        win.addEventListener('keydown', _onKeyDown, true);
    }
}
exports.initializeFocusRects = initializeFocusRects;
function _onMouseDown(ev) {
    var win = dom_1.getWindow(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (classList.contains(exports.IsFocusVisibleClassName)) {
            classList.remove(exports.IsFocusVisibleClassName);
        }
    }
}
function _onKeyDown(ev) {
    var win = dom_1.getWindow(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (keyboard_1.isDirectionalKeyCode(ev.which) && !classList.contains(exports.IsFocusVisibleClassName)) {
            classList.add(exports.IsFocusVisibleClassName);
        }
    }
}


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var GlobalSettings_1 = __webpack_require__(45);
var EventGroup_1 = __webpack_require__(25);
var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {} };
var _allSettings = GlobalSettings_1.GlobalSettings.getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {}
});
var _events = new EventGroup_1.EventGroup(_allSettings);
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    // tslint:disable-next-line:no-any
    Customizations.applySettings = function (settings) {
        _allSettings.settings = tslib_1.__assign({}, _allSettings.settings, settings);
        Customizations._raiseChange();
    };
    // tslint:disable-next-line:no-any
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = tslib_1.__assign({}, _allSettings.scopedSettings[scopeName], settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings
    // tslint:disable-next-line:no-any
    ) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        // tslint:disable-next-line:no-any
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] = (localScopedSettings[property] ||
                localSettings.settings[property] ||
                globalScopedSettings[property] ||
                _allSettings.settings[property]);
        }
        return settings;
    };
    Customizations.observe = function (onChange) {
        _events.on(_allSettings, 'change', onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events.off(_allSettings, 'change', onChange);
    };
    Customizations._raiseChange = function () {
        _events.raise('change');
    };
    return Customizations;
}());
exports.Customizations = Customizations;


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
// tslint:disable-next-line:no-any
var _globalSettings = {};
var _counter = 0;
if (typeof window !== 'undefined') {
    // tslint:disable-next-line:no-any
    var win = window;
    _globalSettings = win[GLOBAL_SETTINGS_PROP_NAME] = win[GLOBAL_SETTINGS_PROP_NAME] || (_a = {},
        _a[CALLBACK_STATE_PROP_NAME] = {},
        _a);
}
var _callbacks = _globalSettings[CALLBACK_STATE_PROP_NAME];
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        if (_globalSettings[key] === undefined) {
            _globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return _globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var oldValue = _globalSettings[key];
        if (value !== oldValue) {
            _globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key
            };
            for (var id in _callbacks) {
                if (_callbacks.hasOwnProperty(id)) {
                    _callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        _callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        delete _callbacks[cb.__id__];
    };
    return GlobalSettings;
}());
exports.GlobalSettings = GlobalSettings;
var _a;


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingOptions", function() { return CachingOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingParserWrapper", function() { return CachingParserWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestError", function() { return HttpRequestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataParserBase", function() { return ODataParserBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataDefaultParser", function() { return ODataDefaultParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextParser", function() { return TextParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlobParser", function() { return BlobParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONParser", function() { return JSONParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferParser", function() { return BufferParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LambdaParser", function() { return LambdaParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setResult", function() { return setResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestPipelineMethod", function() { return requestPipelineMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineMethods", function() { return PipelineMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultPipeline", function() { return getDefaultPipeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queryable", function() { return Queryable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataQueryable", function() { return ODataQueryable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ODataBatch", function() { return ODataBatch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pnp_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pnp_logging__ = __webpack_require__(31);
/**
@license
 * @pnp/odata v1.2.3 - pnp - provides shared odata functionality and base classes
 * MIT (https://github.com/pnp/pnpjs/blob/master/LICENSE)
 * Copyright (c) 2018 Microsoft
 * docs: https://pnp.github.io/pnpjs/
 * source: https:github.com/pnp/pnpjs
 * bugs: https://github.com/pnp/pnpjs/issues
 */




var CachingOptions = /** @class */ (function () {
    function CachingOptions(key) {
        this.key = key;
        this.expiration = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["i" /* dateAdd */])(new Date(), "second", __WEBPACK_IMPORTED_MODULE_0__pnp_common__["f" /* RuntimeConfig */].defaultCachingTimeoutSeconds);
        this.storeName = __WEBPACK_IMPORTED_MODULE_0__pnp_common__["f" /* RuntimeConfig */].defaultCachingStore;
    }
    Object.defineProperty(CachingOptions.prototype, "store", {
        get: function () {
            if (this.storeName === "local") {
                return CachingOptions.storage.local;
            }
            else {
                return CachingOptions.storage.session;
            }
        },
        enumerable: true,
        configurable: true
    });
    CachingOptions.storage = new __WEBPACK_IMPORTED_MODULE_0__pnp_common__["d" /* PnPClientStorage */]();
    return CachingOptions;
}());
var CachingParserWrapper = /** @class */ (function () {
    function CachingParserWrapper(parser, cacheOptions) {
        this.parser = parser;
        this.cacheOptions = cacheOptions;
    }
    CachingParserWrapper.prototype.parse = function (response) {
        var _this = this;
        return this.parser.parse(response).then(function (r) { return _this.cacheData(r); });
    };
    CachingParserWrapper.prototype.cacheData = function (data) {
        if (this.cacheOptions.store !== null) {
            this.cacheOptions.store.put(this.cacheOptions.key, data, this.cacheOptions.expiration);
        }
        return data;
    };
    return CachingParserWrapper;
}());

var HttpRequestError = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(HttpRequestError, _super);
    function HttpRequestError(message, response, status, statusText) {
        if (status === void 0) { status = response.status; }
        if (statusText === void 0) { statusText = response.statusText; }
        var _this = _super.call(this, message) || this;
        _this.response = response;
        _this.status = status;
        _this.statusText = statusText;
        _this.isHttpRequestError = true;
        return _this;
    }
    return HttpRequestError;
}(Error));
var ODataParserBase = /** @class */ (function () {
    function ODataParserBase() {
    }
    ODataParserBase.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                _this.parseImpl(r, resolve, reject);
            }
        });
    };
    ODataParserBase.prototype.parseImpl = function (r, resolve, reject) {
        var _this = this;
        if ((r.headers.has("Content-Length") && parseFloat(r.headers.get("Content-Length")) === 0) || r.status === 204) {
            resolve({});
        }
        else {
            // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
            r.text()
                .then(function (txt) { return txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {}; })
                .then(function (json) { return resolve(_this.parseODataJSON(json)); })
                .catch(function (e) { return reject(e); });
        }
    };
    /**
     * Handles a response with ok === false by parsing the body and creating a ProcessHttpClientResponseException
     * which is passed to the reject delegate. This method returns true if there is no error, otherwise false
     *
     * @param r Current response object
     * @param reject reject delegate for the surrounding promise
     */
    ODataParserBase.prototype.handleError = function (r, reject) {
        if (!r.ok) {
            reject(new HttpRequestError("Error making HttpClient request in queryable: [" + r.status + "] " + r.statusText, r.clone()));
        }
        return r.ok;
    };
    /**
     * Normalizes the json response by removing the various nested levels
     *
     * @param json json object to parse
     */
    ODataParserBase.prototype.parseODataJSON = function (json) {
        var result = json;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(json, "d")) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(json.d, "results")) {
                result = json.d.results;
            }
            else {
                result = json.d;
            }
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(json, "value")) {
            result = json.value;
        }
        return result;
    };
    return ODataParserBase;
}());
var ODataDefaultParser = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ODataDefaultParser, _super);
    function ODataDefaultParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ODataDefaultParser;
}(ODataParserBase));
var TextParser = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(TextParser, _super);
    function TextParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextParser.prototype.parseImpl = function (r, resolve) {
        r.text().then(resolve);
    };
    return TextParser;
}(ODataParserBase));
var BlobParser = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(BlobParser, _super);
    function BlobParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlobParser.prototype.parseImpl = function (r, resolve) {
        r.blob().then(resolve);
    };
    return BlobParser;
}(ODataParserBase));
var JSONParser = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(JSONParser, _super);
    function JSONParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONParser.prototype.parseImpl = function (r, resolve) {
        r.json().then(resolve);
    };
    return JSONParser;
}(ODataParserBase));
var BufferParser = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(BufferParser, _super);
    function BufferParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BufferParser.prototype.parseImpl = function (r, resolve) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["r" /* isFunc */])(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        else {
            r.buffer().then(resolve);
        }
    };
    return BufferParser;
}(ODataParserBase));
var LambdaParser = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(LambdaParser, _super);
    function LambdaParser(parser) {
        var _this = _super.call(this) || this;
        _this.parser = parser;
        return _this;
    }
    LambdaParser.prototype.parseImpl = function (r, resolve) {
        this.parser(r).then(resolve);
    };
    return LambdaParser;
}(ODataParserBase));

/**
 * Resolves the context's result value
 *
 * @param context The current context
 */
function returnResult(context) {
    __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].log({
        data: __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].activeLogLevel === 0 /* Verbose */ ? context.result : {},
        level: 1 /* Info */,
        message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Returning result from pipeline. Set logging to verbose to see data.",
    });
    return Promise.resolve(context.result);
}
/**
 * Sets the result on the context
 */
function setResult(context, value) {
    return new Promise(function (resolve) {
        context.result = value;
        context.hasResult = true;
        resolve(context);
    });
}
/**
 * Invokes the next method in the provided context's pipeline
 *
 * @param c The current request context
 */
function next(c) {
    if (c.pipeline.length > 0) {
        return c.pipeline.shift()(c);
    }
    else {
        return Promise.resolve(c);
    }
}
/**
 * Executes the current request context's pipeline
 *
 * @param context Current context
 */
function pipe(context) {
    if (context.pipeline.length < 1) {
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Request pipeline contains no methods!", 2 /* Warning */);
    }
    var promise = next(context).then(function (ctx) { return returnResult(ctx); }).catch(function (e) {
        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].error(e);
        throw e;
    });
    if (context.isBatched) {
        // this will block the batch's execute method from returning until the child requets have been resolved
        context.batch.addResolveBatchDependency(promise);
    }
    return promise;
}
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
function requestPipelineMethod(alwaysRun) {
    if (alwaysRun === void 0) { alwaysRun = false; }
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // if we have a result already in the pipeline, pass it along and don't call the tagged method
            if (!alwaysRun && args.length > 0 && Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(args[0], "hasResult") && args[0].hasResult) {
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Skipping request pipeline method " + propertyKey + ", existing result in pipeline.", 0 /* Verbose */);
                return Promise.resolve(args[0]);
            }
            // apply the tagged method
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Calling request pipeline method " + propertyKey + ".", 0 /* Verbose */);
            // then chain the next method in the context's pipeline - allows for dynamic pipeline
            return method.apply(target, args).then(function (ctx) { return next(ctx); });
        };
    };
}
/**
 * Contains the methods used within the request pipeline
 */
var PipelineMethods = /** @class */ (function () {
    function PipelineMethods() {
    }
    /**
     * Logs the start of the request
     */
    PipelineMethods.logStart = function (context) {
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].log({
                data: __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].activeLogLevel === 1 /* Info */ ? {} : context,
                level: 1 /* Info */,
                message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Beginning " + context.verb + " request (" + context.requestAbsoluteUrl + ")",
            });
            resolve(context);
        });
    };
    /**
     * Handles caching of the request
     */
    PipelineMethods.caching = function (context) {
        return new Promise(function (resolve) {
            // handle caching, if applicable
            if (context.isCached) {
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Caching is enabled for request, checking cache...", 1 /* Info */);
                var cacheOptions = new CachingOptions(context.requestAbsoluteUrl.toLowerCase());
                if (context.cachingOptions !== undefined) {
                    cacheOptions = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(cacheOptions, context.cachingOptions);
                }
                // we may not have a valid store
                if (cacheOptions.store !== null) {
                    // check if we have the data in cache and if so resolve the promise and return
                    var data = cacheOptions.store.get(cacheOptions.key);
                    if (data !== null) {
                        // ensure we clear any held batch dependency we are resolving from the cache
                        __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].log({
                            data: __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].activeLogLevel === 1 /* Info */ ? {} : data,
                            level: 1 /* Info */,
                            message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Value returned from cache.",
                        });
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["r" /* isFunc */])(context.batchDependency)) {
                            context.batchDependency();
                        }
                        // handle the case where a parser needs to take special actions with a cached result
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["p" /* hOP */])(context.parser, "hydrate")) {
                            data = context.parser.hydrate(data);
                        }
                        return setResult(context, data).then(function (ctx) { return resolve(ctx); });
                    }
                }
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Value not found in cache.", 1 /* Info */);
                // if we don't then wrap the supplied parser in the caching parser wrapper
                // and send things on their way
                context.parser = new CachingParserWrapper(context.parser, cacheOptions);
            }
            return resolve(context);
        });
    };
    /**
     * Sends the request
     */
    PipelineMethods.send = function (context) {
        return new Promise(function (resolve, reject) {
            // send or batch the request
            if (context.isBatched) {
                // we are in a batch, so add to batch, remove dependency, and resolve with the batch's promise
                var p = context.batch.add(context.requestAbsoluteUrl, context.verb, context.options, context.parser, context.requestId);
                // we release the dependency here to ensure the batch does not execute until the request is added to the batch
                if (Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["r" /* isFunc */])(context.batchDependency)) {
                    context.batchDependency();
                }
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Batching request in batch " + context.batch.batchId + ".", 1 /* Info */);
                // we set the result as the promise which will be resolved by the batch's execution
                resolve(setResult(context, p));
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Sending request.", 1 /* Info */);
                // we are not part of a batch, so proceed as normal
                var client = context.clientFactory();
                var opts = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["j" /* extend */])(context.options || {}, { method: context.verb });
                client.fetch(context.requestAbsoluteUrl, opts)
                    .then(function (response) { return context.parser.parse(response); })
                    .then(function (result) { return setResult(context, result); })
                    .then(function (ctx) { return resolve(ctx); })
                    .catch(function (e) { return reject(e); });
            }
        });
    };
    /**
     * Logs the end of the request
     */
    PipelineMethods.logEnd = function (context) {
        return new Promise(function (resolve) {
            if (context.isBatched) {
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].log({
                    data: __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") " + context.verb + " request will complete in batch " + context.batch.batchId + ".",
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].log({
                    data: __WEBPACK_IMPORTED_MODULE_2__pnp_logging__["d" /* Logger */].activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Completing " + context.verb + " request.",
                });
            }
            resolve(context);
        });
    };
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        requestPipelineMethod(true)
    ], PipelineMethods, "logStart", null);
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        requestPipelineMethod()
    ], PipelineMethods, "caching", null);
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        requestPipelineMethod()
    ], PipelineMethods, "send", null);
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["a" /* __decorate */])([
        requestPipelineMethod(true)
    ], PipelineMethods, "logEnd", null);
    return PipelineMethods;
}());
function getDefaultPipeline() {
    return [
        PipelineMethods.logStart,
        PipelineMethods.caching,
        PipelineMethods.send,
        PipelineMethods.logEnd,
    ].slice(0);
}

var Queryable = /** @class */ (function () {
    function Queryable() {
        this._query = new Map();
        this._options = {};
        this._url = "";
        this._parentUrl = "";
        this._useCaching = false;
        this._cachingOptions = null;
    }
    /**
    * Gets the currentl url
    *
    */
    Queryable.prototype.toUrl = function () {
        return this._url;
    };
    /**
     * Directly concatonates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatonate to the url
     */
    Queryable.prototype.concat = function (pathPart) {
        this._url += pathPart;
        return this;
    };
    Object.defineProperty(Queryable.prototype, "query", {
        /**
         * Provides access to the query builder for this url
         *
         */
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets custom options for current object and all derived objects accessible via chaining
     *
     * @param options custom options
     */
    Queryable.prototype.configure = function (options) {
        Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["w" /* mergeOptions */])(this._options, options);
        return this;
    };
    /**
     * Configures this instance from the configure options of the supplied instance
     *
     * @param o Instance from which options should be taken
     */
    Queryable.prototype.configureFrom = function (o) {
        Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["w" /* mergeOptions */])(this._options, o._options);
        return this;
    };
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    Queryable.prototype.usingCaching = function (options) {
        if (!__WEBPACK_IMPORTED_MODULE_0__pnp_common__["f" /* RuntimeConfig */].globalCacheDisable) {
            this._useCaching = true;
            if (options !== undefined) {
                this._cachingOptions = options;
            }
        }
        return this;
    };
    Queryable.prototype.getCore = function (parser, options) {
        if (parser === void 0) { parser = new JSONParser(); }
        if (options === void 0) { options = {}; }
        return this.toRequestContext("GET", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    Queryable.prototype.postCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new JSONParser(); }
        return this.toRequestContext("POST", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    Queryable.prototype.patchCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new JSONParser(); }
        return this.toRequestContext("PATCH", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    Queryable.prototype.deleteCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new JSONParser(); }
        return this.toRequestContext("DELETE", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    Queryable.prototype.putCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new JSONParser(); }
        return this.toRequestContext("PUT", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    /**
     * Appends the given string and normalizes "/" chars
     *
     * @param pathPart The string to append
     */
    Queryable.prototype.append = function (pathPart) {
        this._url = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(this._url, pathPart);
    };
    Object.defineProperty(Queryable.prototype, "parentUrl", {
        /**
         * Gets the parent url used when creating this instance
         *
         */
        get: function () {
            return this._parentUrl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Extends this queryable from the provided parent
     *
     * @param parent Parent queryable from which we will derive a base url
     * @param path Additional path
     */
    Queryable.prototype.extend = function (parent, path) {
        this._parentUrl = parent._url;
        this._url = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["h" /* combine */])(this._parentUrl, path || "");
        this.configureFrom(parent);
    };
    return Queryable;
}());
var ODataQueryable = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(ODataQueryable, _super);
    function ODataQueryable() {
        var _this = _super.call(this) || this;
        _this._batch = null;
        return _this;
    }
    /**
     * Adds this query to the supplied batch
     *
     * @example
     * ```
     *
     * let b = pnp.sp.createBatch();
     * pnp.sp.web.inBatch(b).get().then(...);
     * b.execute().then(...)
     * ```
     */
    ODataQueryable.prototype.inBatch = function (batch) {
        if (this.batch !== null) {
            throw Error("This query is already part of a batch.");
        }
        this._batch = batch;
        return this;
    };
    /**
     * Gets the currentl url
     *
     */
    ODataQueryable.prototype.toUrl = function () {
        return this._url;
    };
    /**
     * Executes the currently built request
     *
     * @param parser Allows you to specify a parser to handle the result
     * @param getOptions The options used for this request
     */
    ODataQueryable.prototype.get = function (parser, options) {
        if (parser === void 0) { parser = new ODataDefaultParser(); }
        if (options === void 0) { options = {}; }
        return this.getCore(parser, options);
    };
    ODataQueryable.prototype.getCore = function (parser, options) {
        if (parser === void 0) { parser = new ODataDefaultParser(); }
        if (options === void 0) { options = {}; }
        return this.toRequestContext("GET", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    ODataQueryable.prototype.postCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new ODataDefaultParser(); }
        return this.toRequestContext("POST", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    ODataQueryable.prototype.patchCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new ODataDefaultParser(); }
        return this.toRequestContext("PATCH", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    ODataQueryable.prototype.deleteCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new ODataDefaultParser(); }
        return this.toRequestContext("DELETE", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    ODataQueryable.prototype.putCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new ODataDefaultParser(); }
        return this.toRequestContext("PUT", options, parser, getDefaultPipeline()).then(function (context) { return pipe(context); });
    };
    /**
     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
    */
    ODataQueryable.prototype.addBatchDependency = function () {
        if (this._batch !== null) {
            return this._batch.addDependency();
        }
        return function () { return null; };
    };
    Object.defineProperty(ODataQueryable.prototype, "hasBatch", {
        /**
         * Indicates if the current query has a batch associated
         *
         */
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["x" /* objectDefinedNotNull */])(this._batch);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ODataQueryable.prototype, "batch", {
        /**
         * The batch currently associated with this query or null
         *
         */
        get: function () {
            return this.hasBatch ? this._batch : null;
        },
        enumerable: true,
        configurable: true
    });
    return ODataQueryable;
}(Queryable));

var ODataBatch = /** @class */ (function () {
    function ODataBatch(_batchId) {
        if (_batchId === void 0) { _batchId = Object(__WEBPACK_IMPORTED_MODULE_0__pnp_common__["m" /* getGUID */])(); }
        this._batchId = _batchId;
        this._reqs = [];
        this._deps = [];
        this._rDeps = [];
    }
    Object.defineProperty(ODataBatch.prototype, "batchId", {
        get: function () {
            return this._batchId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ODataBatch.prototype, "requests", {
        /**
         * The requests contained in this batch
         */
        get: function () {
            return this._reqs;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @param url Request url
     * @param method Request method (GET, POST, etc)
     * @param options Any request options
     * @param parser The parser used to handle the eventual return from the query
     * @param id An identifier used to track a request within a batch
     */
    ODataBatch.prototype.add = function (url, method, options, parser, id) {
        var info = {
            id: id,
            method: method.toUpperCase(),
            options: options,
            parser: parser,
            reject: null,
            resolve: null,
            url: url,
        };
        var p = new Promise(function (resolve, reject) {
            info.resolve = resolve;
            info.reject = reject;
        });
        this._reqs.push(info);
        return p;
    };
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    ODataBatch.prototype.addDependency = function () {
        var resolver = function () { return void (0); };
        this._deps.push(new Promise(function (resolve) {
            resolver = resolve;
        }));
        return resolver;
    };
    /**
     * The batch's execute method will not resolve util any promises added here resolve
     *
     * @param p The dependent promise
     */
    ODataBatch.prototype.addResolveBatchDependency = function (p) {
        this._rDeps.push(p);
    };
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    ODataBatch.prototype.execute = function () {
        var _this = this;
        // we need to check the dependencies twice due to how different engines handle things.
        // We can get a second set of promises added during the first set resolving
        return Promise.all(this._deps)
            .then(function () { return Promise.all(_this._deps); })
            .then(function () { return _this.executeImpl(); })
            .then(function () { return Promise.all(_this._rDeps); })
            .then(function () { return void (0); });
    };
    return ODataBatch;
}());




/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () { };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            /* tslint:disable:ban-native-functions */
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearTimeout(id);
            delete this._timeoutIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     */
    Async.prototype.clearImmediate = function (id) {
        if (this._immediateIds && this._immediateIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
            delete this._immediateIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            /* tslint:disable:ban-native-functions */
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearInterval(id);
            delete this._intervalIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof (options.leading) === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof (options.trailing) === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = (new Date).getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () { return; };
            /* tslint:disable:no-any */
            noOpFunction.flush = (function () { return null; });
            /* tslint:enable:no-any */
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = (new Date).getTime();
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof (options.leading) === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof (options.trailing) === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof (options.maxWait) === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = (new Date).getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(new Date().getTime());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(new Date().getTime());
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback) {
        var _this = this;
        var animationFrameId = 0;
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = window.requestAnimationFrame ?
                window.requestAnimationFrame(animationFrameCallback) :
                window.setTimeout(animationFrameCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id) {
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete this._animationFrameIds[id];
        }
    };
    // tslint:disable-next-line:no-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());
exports.Async = Async;


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(10);
var index_1 = __webpack_require__(8);
var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
var DisabledScrollClassName = index_1.mergeStyles({
    overflow: 'hidden !important'
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
exports.DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = dom_1.getDocument();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(DisabledScrollClassName);
    }
    _bodyScrollDisabledCount++;
}
exports.disableBodyScroll = disableBodyScroll;
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = dom_1.getDocument();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(DisabledScrollClassName);
        }
        _bodyScrollDisabledCount--;
    }
}
exports.enableBodyScroll = enableBodyScroll;
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    // First do a quick scan for the scrollable attribute.
    while (el && el !== document.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== document.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === document.body) {
        // tslint:disable-next-line:no-any
        el = window;
    }
    return el;
}
exports.findScrollableParent = findScrollableParent;


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(14);
var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (_a = {},
    _a[LEFT] = RIGHT,
    _a[RIGHT] = LEFT,
    _a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize'
};
var _rtl = getRTL();
/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    if (_rtl !== isRTL) {
        Stylesheet_1.Stylesheet.getInstance().resetKeys();
        _rtl = isRTL;
    }
}
exports.setRTL = setRTL;
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl = (typeof document !== 'undefined' &&
            !!document.documentElement &&
            document.documentElement.getAttribute('dir') === 'rtl');
    }
    return _rtl;
}
exports.getRTL = getRTL;
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(rulePairs, index) {
    if (getRTL()) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
exports.rtlifyRules = rtlifyRules;
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}
var _a;


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(14);
/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects
    };
}
exports.extractStyleParts = extractStyleParts;


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Combine a set of styles together (but does not register css classes.)
 * @public
 */
function concatStyleSets() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var mergedSet = {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var currentSet = args_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = (Array.isArray(mergedValue) ? mergedValue : [mergedValue]).concat((Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    return mergedSet;
}
exports.concatStyleSets = concatStyleSets;


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(3);
var Async_1 = __webpack_require__(63);
var EventGroup_1 = __webpack_require__(25);
var warn_1 = __webpack_require__(42);
var initializeFocusRects_1 = __webpack_require__(43);
var initializeDir_1 = __webpack_require__(273);
/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 */
var BaseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BaseComponent, _super);
    // tslint:enable:variable-name
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // tslint:disable-next-line:no-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Ensure basic assumptions about the environment.
        initializeFocusRects_1.initializeFocusRects();
        initializeDir_1.initializeDir();
        _this._shouldUpdateComponentRef = true;
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentWillMount',
            'componentDidMount',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentWillReceiveProps',
            'render',
            'componentDidUpdate',
            'componentWillUnmount'
        ]);
        return _this;
    }
    /**
     * When the component will receive props, make sure the componentRef is updated.
     */
    // tslint:disable-next-line:no-any
    BaseComponent.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this._updateComponentRef(this.props, newProps);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._updateComponentRef(undefined, this.props);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = (funcNameRegex).exec((this).constructor.toString());
                this.__className = (results && results.length > 1) ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new Async_1.Async(this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new EventGroup_1.EventGroup(this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from `@uifabric/utilities`
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            // tslint:disable-next-line:no-any
            this.__resolves[refName] = function (ref) {
                // tslint:disable-next-line:no-any
                return _this[refName] = ref;
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        if (this._shouldUpdateComponentRef &&
            ((!currentProps && newProps.componentRef) ||
                (currentProps && currentProps.componentRef !== newProps.componentRef))) {
            if (currentProps && currentProps.componentRef) {
                currentProps.componentRef(null);
            }
            if (newProps.componentRef) {
                newProps.componentRef(this);
            }
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        warn_1.warnDeprecations(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        warn_1.warnMutuallyExclusive(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        warn_1.warnConditionallyRequiredProps(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    return BaseComponent;
}(React.Component));
exports.BaseComponent = BaseComponent;
/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
function _makeSafe(obj, prototype, methodName) {
    // tslint:disable:no-any
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    // tslint:enable:no-any
    if (classMethod || prototypeMethod) {
        // tslint:disable-next-line:no-any
        obj[methodName] = function () {
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, arguments);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, arguments);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() { return null; }
exports.nullRender = nullRender;


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DirectionalKeyCodes = (_a = {},
    _a[38 /* up */] = 1,
    _a[40 /* down */] = 1,
    _a[37 /* left */] = 1,
    _a[39 /* right */] = 1,
    _a[36 /* home */] = 1,
    _a[35 /* end */] = 1,
    _a[9 /* tab */] = 1,
    _a[33 /* pageUp */] = 1,
    _a[34 /* pageDown */] = 1,
    _a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
exports.isDirectionalKeyCode = isDirectionalKeyCode;
var _a;


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(22);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
Object.defineProperty(exports, "__esModule", { value: true });
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // tslint:disable-next-line:no-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}
exports.hoistStatics = hoistStatics;


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(10);
var localStorage_1 = __webpack_require__(291);
// Default to undefined so that we initialize on first read.
var _language;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 *
 * @public
 */
function getLanguage() {
    if (_language === undefined) {
        var doc = dom_1.getDocument();
        var savedLanguage = localStorage_1.getItem('language');
        if (savedLanguage !== null) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
exports.getLanguage = getLanguage;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 *
 * @public
 */
function setLanguage(language, avoidPersisting) {
    if (avoidPersisting === void 0) { avoidPersisting = false; }
    var doc = dom_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    if (!avoidPersisting) {
        localStorage_1.setItem('language', language);
    }
    _language = language;
}
exports.setLanguage = setLanguage;


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeStyles_1 = __webpack_require__(265);
exports.mergeStyles = mergeStyles_1.mergeStyles;
var mergeStyleSets_1 = __webpack_require__(270);
exports.mergeStyleSets = mergeStyleSets_1.mergeStyleSets;
var concatStyleSets_1 = __webpack_require__(67);
exports.concatStyleSets = concatStyleSets_1.concatStyleSets;
var fontFace_1 = __webpack_require__(271);
exports.fontFace = fontFace_1.fontFace;
var keyframes_1 = __webpack_require__(272);
exports.keyframes = keyframes_1.keyframes;
var Stylesheet_1 = __webpack_require__(14);
exports.InjectionMode = Stylesheet_1.InjectionMode;
exports.Stylesheet = Stylesheet_1.Stylesheet;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(3);
var ReactDom = __webpack_require__(20);
var sp_core_library_1 = __webpack_require__(111);
var sp_webpart_base_1 = __webpack_require__(259);
var strings = __webpack_require__(982);
var DeployContract_1 = __webpack_require__(983);
var sp_1 = __webpack_require__(21);
__webpack_require__(16);
var DeployContractWebPart = (function (_super) {
    __extends(DeployContractWebPart, _super);
    function DeployContractWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeployContractWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            // other init code may be present
            sp_1.sp.setup({
                spfxContext: _this.context
            });
        });
    };
    DeployContractWebPart.prototype.render = function () {
        var element = React.createElement(DeployContract_1.default, {
            description: this.properties.description
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(DeployContractWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    DeployContractWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return DeployContractWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = DeployContractWebPart;



/***/ }),

/***/ 982:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_982__;

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var DeployContract_module_scss_1 = __webpack_require__(984);
var sp_1 = __webpack_require__(21);
__webpack_require__(16);
var webconfig_1 = __webpack_require__(30);
var Utilities_1 = __webpack_require__(2);
var objectAssign = __webpack_require__(9);
var DeployContract = (function (_super) {
    __extends(DeployContract, _super);
    function DeployContract(props) {
        var _this = _super.call(this, props) || this;
        _this.statusText = [
            "(待执行)",
            "(正在执行)",
            "(完成)",
            "(有错误)",
            "(列表已存在，跳过)"
        ];
        _this.state = {
            step1: 0,
            step2: 0,
            step3: 0,
            step4: 0,
            step5: 0,
            step6: 0,
            step7: 0,
            messages: []
        };
        return _this;
    }
    DeployContract.prototype.render = function () {
        return (React.createElement("div", { className: DeployContract_module_scss_1.default.deployContract },
            React.createElement("script", { src: "http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" }),
            React.createElement("div", { className: DeployContract_module_scss_1.default.container },
                React.createElement("div", { className: DeployContract_module_scss_1.default.row },
                    React.createElement("div", { className: DeployContract_module_scss_1.default.column },
                        React.createElement("div", null,
                            React.createElement("button", { type: "button", id: "btnStart", onClick: this.startDeploy }, "\u5F00\u59CB\u90E8\u7F72")),
                        React.createElement("div", { id: "dccontents" },
                            React.createElement("div", { id: "dcstep_5", className: "dcstep" },
                                "1.\u521B\u5EFA\u5217\u8868",
                                webconfig_1.WebConfig.StaffDeptListName,
                                React.createElement("span", { className: "StepStus", id: "stepstatus_5" }, this.statusText[this.state.step5])),
                            React.createElement("div", { id: "dcstep_1", className: "dcstep" },
                                "2.\u521B\u5EFA\u5217\u8868",
                                webconfig_1.WebConfig.contractTypeListName,
                                React.createElement("span", { className: "StepStus", id: "stepstatus_1" }, this.statusText[this.state.step1])),
                            React.createElement("div", { id: "dcstep_2", className: "dcstep" },
                                "3.\u521B\u5EFA\u5217\u8868",
                                webconfig_1.WebConfig.subjectsListName,
                                React.createElement("span", { className: "StepStus", id: "stepstatus_2" }, this.statusText[this.state.step2])),
                            React.createElement("div", { id: "dcstep_3", className: "dcstep" },
                                "4.\u521B\u5EFA\u5217\u8868",
                                webconfig_1.WebConfig.requestedItemsListName,
                                React.createElement("span", { className: "StepStus", id: "stepstatus_3" }, this.statusText[this.state.step3])),
                            React.createElement("div", { id: "dcstep_4", className: "dcstep" },
                                "5.\u521B\u5EFA\u5217\u8868",
                                webconfig_1.WebConfig.AddrListName,
                                React.createElement("span", { className: "StepStus", id: "stepstatus_4" }, this.statusText[this.state.step4])),
                            React.createElement("div", { id: "dcstep_6", className: "dcstep" },
                                "6.\u6DFB\u52A0\u5217\u8868",
                                webconfig_1.WebConfig.subjectsListName,
                                "\u6570\u636E",
                                React.createElement("span", { className: "StepStus", id: "stepstatus_6" }, this.statusText[this.state.step6])),
                            React.createElement("div", { id: "dcstep_7", className: "dcstep" },
                                "7.\u6DFB\u52A0\u5217\u8868",
                                webconfig_1.WebConfig.contractTypeListName,
                                "\u6570\u636E",
                                React.createElement("span", { className: "StepStus", id: "stepstatus_7" }, this.statusText[this.state.step7]))))),
                React.createElement("div", { className: DeployContract_module_scss_1.default.row },
                    React.createElement("div", null,
                        React.createElement("ol", null, this.state.messages.map(function (msg) {
                            return "<li>" + msg + "</li>";
                        })))))));
    };
    DeployContract.prototype.startDeploy = function () {
        this.runStep5();
        this.runStep2();
    };
    DeployContract.prototype.runStep1 = function (DeptsGuid) {
        var _this = this;
        this.setState({ step1: 1 });
        sp_1.sp.web.lists
            .ensure(webconfig_1.WebConfig.contractTypeListName, "合同类别设置")
            .then(function (ler) {
            console.log(ler);
            if (ler.created) {
                console.log("list exists");
                //do some awesome stuff with the list
                /*  ler.list.fields
                  .getByInternalNameOrTitle("Title")
                  .get()
                  .then(field => {
                    console.log(field);
                  });*/
                ler.list.fields
                    .getByInternalNameOrTitle("Title")
                    .update({
                    Title: "Title",
                    MaxLength: 50,
                    Indexed: true,
                    EnforceUniqueValues: true
                }, "SP.FieldText") // .update({Title:"Title",})
                    .then(function (filedresult) {
                    console.log(filedresult);
                    ler.list.fields
                        .addUser("pricecenterId", sp_1.FieldUserSelectionMode.PeopleOnly, {
                        Title: "pricecenter"
                    })
                        .then(function (ft2) {
                        console.log(ft2);
                        ler.list.fields
                            .addUser("laywerId", sp_1.FieldUserSelectionMode.PeopleOnly, {
                            Title: "laywer"
                        })
                            .then(function (ft1) {
                            console.log(ft1);
                            ler.list.fields
                                .addUser("otherpricecentersId", sp_1.FieldUserSelectionMode.PeopleOnly, {
                                Title: "otherpricecenters",
                                AllowMultipleValues: true
                            })
                                .then(function (ft0) {
                                console.log(ft0);
                                ler.list.fields
                                    .addUser("otherlawyersId", sp_1.FieldUserSelectionMode.PeopleOnly, {
                                    Title: "otherlawyers",
                                    AllowMultipleValues: true
                                })
                                    .then(function (frst0) {
                                    console.log(frst0);
                                    ler.list.fields
                                        .addBoolean("ToPriceCenter", {
                                        Description: "送审价吗"
                                    })
                                        .then(function (frst) {
                                        console.log(frst);
                                        ler.list.fields
                                            .getByTitle("ToPriceCenter")
                                            .update({ DefaultValue: "No" }, "SP.FieldChoice")
                                            .then(function (fresult) {
                                            console.log(fresult);
                                        });
                                        _this.setState({ step1: 2 });
                                        _this.runStep3(ler.data.Id, DeptsGuid);
                                    });
                                });
                            });
                        });
                    });
                })
                    .catch(function (err) {
                    var msgs = [];
                    objectAssign(msgs, _this.state.messages);
                    msgs.push(err.message);
                    _this.setState({ step1: 3, messages: msgs });
                });
                // ler.list.fields.getByTitle("ToPriceCenter").update()
            }
            else {
                console.log(webconfig_1.WebConfig.contractTypeListName + " has exists");
                _this.setState({ step1: 4 });
                sp_1.sp.web.lists
                    .getByTitle(webconfig_1.WebConfig.contractTypeListName)
                    .get()
                    .then(function (list) {
                    console.log(list);
                    _this.runStep3(list.Id, DeptsGuid);
                });
                /*ler.list.fields
                  .getByTitle("otherpricecenters")
                  .get()
                  .then(filedresult => {
                    console.log(filedresult);
                  });*/
            }
        });
    };
    DeployContract.prototype.runStep2 = function () {
        var _this = this;
        this.setState({ step2: 1 });
        sp_1.sp.web.lists
            .ensure(webconfig_1.WebConfig.subjectsListName, "合同主体设置")
            .then(function (ler) {
            if (ler.created) {
                ler.list.fields
                    .getByInternalNameOrTitle("Title")
                    .update({
                    Title: "Title",
                    MaxLength: 50,
                    Indexed: true,
                    EnforceUniqueValues: true
                }, "SP.FieldText")
                    .then(function (filedresult) {
                    ler.list.fields.addText("abbreviation", 10).then(function (fresult) {
                        _this.setState({ step2: 2 });
                        _this.runStep6();
                    });
                });
            }
            else {
                _this.setState({ step2: 4 });
                _this.runStep6();
            }
        });
    };
    DeployContract.prototype.runStep3 = function (ContractTypeGuid, DeptGuid) {
        var _this = this;
        this.setState({ step3: 1 });
        sp_1.sp.web.lists
            .ensure(webconfig_1.WebConfig.requestedItemsListName, "合同申请列表")
            .then(function (ler) {
            if (ler.created) {
                ler.list.fields
                    .getByInternalNameOrTitle("Title")
                    .update({
                    Title: "Title",
                    Description: "合同名称",
                    MaxLength: 100
                }, "SP.FieldText")
                    .then(function (filedresult) {
                    ler.list.fields
                        .addText("ContractNo", 64, {
                        Description: "合同编号",
                        Indexed: true,
                        EnforceUniqueValues: true
                    })
                        .then(function (fresult) {
                        console.log(ContractTypeGuid);
                        ler.list.fields
                            .addLookup("ContractType", ContractTypeGuid, "Title")
                            .then(function (f0) {
                            ler.list.fields
                                .addText("ContractObject", 100)
                                .then(function (fx) {
                                ler.list.fields
                                    .addNumber("Money", 0, 999999999, {
                                    Description: "金额"
                                })
                                    .then(function (f1) {
                                    ler.list.fields
                                        .addChoice("Currency", ["RMB", "USD", "EUR", "N/A"], undefined, true, { Required: true })
                                        .then(function (f6) {
                                        ler.list.fields
                                            .addText("PayWay", 50, {
                                            Required: true,
                                            Description: "支付方式"
                                        })
                                            .then(function (f7) {
                                            ler.list.fields
                                                .addBoolean("NeedApproval", {
                                                Description: "是否送审价中心审批",
                                                Required: true
                                            })
                                                .then(function (f8) {
                                                ler.list.fields
                                                    .addText("remarks", 255, {
                                                    Description: "备注信息"
                                                })
                                                    .then(function (f9) {
                                                    ler.list.fields
                                                        .addUser("lawyer", sp_1.FieldUserSelectionMode.PeopleOnly, { Title: "lawyer" })
                                                        .then(function (f10) {
                                                        ler.list.fields
                                                            .addUser("pricingcenter", sp_1.FieldUserSelectionMode.PeopleOnly)
                                                            .then(function (f11) {
                                                            ler.list.fields
                                                                .addText("requestNo", 20, {
                                                                EnforceUniqueValues: true,
                                                                Description: "编号",
                                                                Indexed: true
                                                            })
                                                                .then(function (f12) {
                                                                ler.list.fields
                                                                    .addText("mainbody", 50, {
                                                                    Description: "合同主体"
                                                                })
                                                                    .then(function (f5) {
                                                                    ler.list.fields
                                                                        .addText("RelativeParty", 50, {
                                                                        Description: "合同相对方"
                                                                    })
                                                                        .then(function (f4) {
                                                                        ler.list.fields
                                                                            .addText("FactoryDept", 50, {
                                                                            Description: "厂部"
                                                                        })
                                                                            .then(function (f3) {
                                                                            ler.list.fields
                                                                                .addText("status", 10, {
                                                                                Description: "状态"
                                                                            })
                                                                                .then(function (f2) {
                                                                                ler.list.fields
                                                                                    .addDateTime("signingDate", sp_1.DateTimeFieldFormatType.DateOnly, sp_1.CalendarType.ChineseLunar, undefined, {
                                                                                    Description: "合同签订日期"
                                                                                })
                                                                                    .then(function (f1x) {
                                                                                    ler.list.fields
                                                                                        .addUser("representative", sp_1.FieldUserSelectionMode.PeopleOnly, {
                                                                                        Description: "合同签订人"
                                                                                    })
                                                                                        .then(function (f20) {
                                                                                        ler.list.fields
                                                                                            .addLookup("StaffDept", DeptGuid, "Title")
                                                                                            .then(function (f21) {
                                                                                            ler.list.fields
                                                                                                .addText("applog", 200, {})
                                                                                                .then(function (f22) {
                                                                                                console.log("created applog");
                                                                                                _this.setState({
                                                                                                    step3: 2
                                                                                                });
                                                                                                _this.runStep4(ler
                                                                                                    .data
                                                                                                    .Id);
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                })
                    .catch(function (err) {
                    var msgs = [];
                    objectAssign(msgs, _this.state.messages);
                    msgs.push(err.message);
                    _this.setState({ step3: 3, messages: msgs });
                });
            }
            else {
                _this.setState({ step3: 4 });
                _this.runStep4(ler.data.Id);
            }
        });
    };
    DeployContract.prototype.runStep4 = function (ContractItemGuid) {
        var _this = this;
        this.setState({ step4: 1 });
        sp_1.sp.web.lists
            .ensure(webconfig_1.WebConfig.AddrListName, "审批结果列表")
            .then(function (ler) {
            if (ler.created) {
                ler.list.fields
                    .getByInternalNameOrTitle("Title")
                    .update({
                    Title: "title",
                    MaxLength: 10
                }, "SP.FieldText")
                    .then(function (filedresult) {
                    ler.list.fields
                        .addBoolean("result", { Description: "是否通过" })
                        .then(function (fresult) {
                        ler.list.fields
                            .addBoolean("submited", { Description: "是否已提交" })
                            .then(function (fsubmited) {
                            ler.list.fields
                                .addMultilineText("description", 10, true, true, true, true, {
                                Description: "审批意见"
                                // SchemaXml:
                                // tslint:disable-next-line:max-line-length
                                //   '<Field DisplayName="description" Type="Note" Required="true" ID="{87e93b22-d3d1-4614-8716-3b529e38912e}" SourceID="{5727f1c4-148f-43c1-81b0-a8189913998b}" StaticName="description" Name="description" ColName="ntext2" RowOrdinal="0" AllowHyperlink="TRUE" AppendOnly="true" NumLines="10" RestrictedMode="TRUE" RichText="TRUE" Description="" Version="2" CustomFormatter="" EnforceUniqueValues="true" Indexed="true" RichTextMode="FullHtml" IsolateStyles="TRUE" />'
                            })
                                .then(function (f0) {
                                console.log(f0);
                                var schxml = f0.data.SchemaXml;
                                schxml = schxml.replace("Version=\"1\"", "Version=\"2\"");
                                schxml = schxml.replace("/>", "CustomFormatter=\"\"  EnforceUniqueValues=\"false\" Indexed=\"false\" RichTextMode=\"FullHtml\" IsolateStyles=\"TRUE\" />");
                                f0.field.update({ SchemaXml: schxml }).then(function (r) {
                                    console.log(r);
                                    ler.list.fields
                                        .addLookup("itemid", ContractItemGuid, "Title", {
                                        Required: true
                                    })
                                        .then(function (f1) {
                                        ler.list.fields
                                            .addText("sendtype", 20, {
                                            Description: "寄取方式"
                                        })
                                            .then(function (f2) {
                                            _this.setState({ step4: 2 });
                                            _this.runStep7();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                // this.runStep5();
            }
            else {
                _this.setState({ step4: 4 });
                // this.runStep5();
            }
        });
    };
    DeployContract.prototype.runStep5 = function () {
        var _this = this;
        this.setState({ step5: 1 });
        sp_1.sp.web.lists
            .ensure(webconfig_1.WebConfig.DeptsListName, "部门配置表")
            .then(function (ler) {
            if (ler.created) {
                ler.list.fields
                    .getByInternalNameOrTitle("Title")
                    .update({
                    Title: "title",
                    MaxLength: 20,
                    Indexed: true,
                    EnforceUniqueValues: true
                }, "SP.FieldText")
                    .then(function (s0) {
                    ler.list.items.add({ Title: "采购部" }).then(function (its) {
                        console.log("已添加采购部");
                    });
                    sp_1.sp.web.lists
                        .ensure(webconfig_1.WebConfig.StaffDeptListName, "申请人部门配置表")
                        .then(function (ler2) {
                        if (ler2.created) {
                            ler2.list.fields
                                .getByInternalNameOrTitle("Title")
                                .update({
                                Title: "title",
                                Required: true,
                                Hidden: true
                            }, "SP.FieldText")
                                .then(function (sd0) {
                                ler2.list.fields
                                    .addUser("Staff", sp_1.FieldUserSelectionMode.PeopleOnly, {
                                    Description: "申请人",
                                    Indexed: true,
                                    EnforceUniqueValues: true
                                })
                                    .then(function (s1) {
                                    ler2.list.fields
                                        .addLookup("Dept", ler.data.Id, "Title")
                                        .then(function (s2) {
                                        _this.setState({ step5: 2 });
                                        _this.runStep1(ler.data.Id);
                                    });
                                });
                            });
                        }
                    });
                });
            }
            else {
                _this.setState({ step5: 4 });
                _this.runStep1(ler.data.Id);
            }
        })
            .catch(function (err) {
            var msgs = [];
            objectAssign(msgs, _this.state.messages);
            msgs.push(err.message);
            _this.setState({ step5: 3, messages: msgs });
        });
    };
    DeployContract.prototype.runStep6 = function () {
        this.setState({ step6: 1 });
        var factors = [
            { Title: "广东溢达纺织有限公司", abbreviation: "GET" },
            { Title: "桂林溢达纺织有限公司", abbreviation: "GLE" },
            { Title: "溢达企业有限公司", abbreviation: "EEL" },
            { Title: "新疆丰达农业有限公司", abbreviation: "WFC" },
            { Title: "新疆溢达纺织有限公司", abbreviation: "XJE" },
            { Title: "吐鲁番溢达纺织有限公司", abbreviation: "TPE" },
            { Title: "昌吉溢达纺织有限公司", abbreviation: "CJE" },
            { Title: "阿克苏溢达农业发展有限公司", abbreviation: "AEA" },
            { Title: "阿克苏溢达棉业有限公司", abbreviation: "AEC" },
            { Title: "新疆溢达农业科技有限公司", abbreviation: "XEA" },
            { Title: "常州溢达服装有限公司", abbreviation: "CEG" },
            { Title: "常州溢达针织品有限公司", abbreviation: "CEK" },
            { Title: "宁波溢达服装有限公司", abbreviation: "NBO" },
            { Title: "奉化溢达服装有限公司", abbreviation: "FEG" },
            { Title: "泰州溢达服装有限公司", abbreviation: "TEG" }
        ];
        this.appendSubjects(factors);
    };
    DeployContract.prototype.appendSubjects = function (factors) {
        var _this = this;
        var curFactor = factors.shift();
        sp_1.sp.web.lists
            .getByTitle(webconfig_1.WebConfig.subjectsListName)
            .items.add(curFactor)
            .then(function (f) {
            console.log(f);
            if (factors.length === 0) {
                _this.setState({ step6: 2 });
                return;
            }
            _this.appendSubjects(factors);
        })
            .catch(function (err) {
            var msgs = [];
            objectAssign(msgs, _this.state.messages);
            msgs.push(err.message);
            _this.setState({ step6: 3, messages: msgs });
        });
    };
    DeployContract.prototype.runStep7 = function () {
        this.setState({ step7: 1 });
        var contracttypes = [
            { Title: "成衣销售合同", ToPriceCenter: false },
            { Title: "其他采购合同", ToPriceCenter: true },
            { Title: "基建合同", ToPriceCenter: true },
            { Title: "工程合同", ToPriceCenter: true },
            { Title: "外发加工单次合同", ToPriceCenter: true },
            { Title: "运输合同", ToPriceCenter: true },
            { Title: "培训合同", ToPriceCenter: true },
            { Title: "招聘服务合同", ToPriceCenter: true },
            { Title: "合作开发协议", ToPriceCenter: true },
            { Title: "保密协议", ToPriceCenter: false },
            { Title: "棉纱销售合同", ToPriceCenter: false },
            { Title: "面料销售合同", ToPriceCenter: false },
            { Title: "辅料销售合同", ToPriceCenter: false },
            { Title: "棉纱采购总合同", ToPriceCenter: false },
            { Title: "棉纱采购单次合同", ToPriceCenter: false },
            { Title: "外发加工总合同", ToPriceCenter: false },
            { Title: "面料外发加工单次合同", ToPriceCenter: false },
            { Title: "辅料采购总合同", ToPriceCenter: false },
            { Title: "安全管理协议", ToPriceCenter: false },
            { Title: "检测服务合同", ToPriceCenter: true },
            { Title: "搬运服务承揽合同", ToPriceCenter: true },
            { Title: "垃圾清理服务合同", ToPriceCenter: true },
            { Title: "服务合同", ToPriceCenter: true },
            { Title: "影视制作合同", ToPriceCenter: true },
            { Title: "房屋租赁合同", ToPriceCenter: true },
            { Title: "棉花种植合同", ToPriceCenter: true },
            { Title: "棉花采购合同", ToPriceCenter: true },
            { Title: "棉花物流服务合同", ToPriceCenter: true },
            { Title: "挑修加工单次合同", ToPriceCenter: true },
            { Title: "设备租赁合同", ToPriceCenter: true },
            { Title: "设备采购合同", ToPriceCenter: true },
            { Title: "零配件采购总合同", ToPriceCenter: true },
            { Title: "燃煤采购合同", ToPriceCenter: true },
            { Title: "维修保养服务合同", ToPriceCenter: true },
            { Title: "隔热涂层施工合同", ToPriceCenter: true },
            { Title: "废弃物处理合同", ToPriceCenter: true },
            { Title: "污泥处理合同", ToPriceCenter: true },
            { Title: "仓库租赁合同", ToPriceCenter: true },
            { Title: "叉车租赁合同", ToPriceCenter: true },
            { Title: "库存衣服销售合同", ToPriceCenter: true },
            { Title: "库存布销售合同", ToPriceCenter: true },
            { Title: "二手设备销售合同", ToPriceCenter: true },
            { Title: "废品销售合同", ToPriceCenter: true },
            { Title: "寄售合同", ToPriceCenter: true },
            { Title: "试用协议", ToPriceCenter: true },
            { Title: "赠与合同", ToPriceCenter: true },
            { Title: "技术开发项目合作协议", ToPriceCenter: true },
            { Title: "补充协议", ToPriceCenter: true },
            { Title: "终止协议", ToPriceCenter: true }
        ];
        this.appendContypes(contracttypes);
    };
    DeployContract.prototype.appendContypes = function (types) {
        var _this = this;
        var curType = types.shift();
        sp_1.sp.web.lists
            .getByTitle(webconfig_1.WebConfig.contractTypeListName)
            .items.add(curType)
            .then(function (f) {
            console.log(f);
            if (types.length === 0) {
                _this.setState({ step7: 2 });
                return;
            }
            _this.appendContypes(types);
        })
            .catch(function (err) {
            var msgs = [];
            objectAssign(msgs, _this.state.messages);
            msgs.push(err.message);
            _this.setState({ step7: 3, messages: msgs });
        });
    };
    DeployContract.prototype.componentDidMount = function () {
        sp_1.sp.web.lists
            .getByTitle(webconfig_1.WebConfig.AddrListName)
            .fields.getByTitle("description")
            .get()
            .then(function (r) {
            console.log(r);
        });
    };
    __decorate([
        Utilities_1.autobind
    ], DeployContract.prototype, "startDeploy", null);
    return DeployContract;
}(React.Component));
exports.default = DeployContract;



/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
__webpack_require__(985);
var styles = {
    deployContract: 'deployContract_8a3b1d6b',
    container: 'container_8a3b1d6b',
    row: 'row_8a3b1d6b',
    column: 'column_8a3b1d6b',
    'ms-Grid': 'ms-Grid_8a3b1d6b',
    title: 'title_8a3b1d6b',
    subTitle: 'subTitle_8a3b1d6b',
    description: 'description_8a3b1d6b',
    button: 'button_8a3b1d6b',
    label: 'label_8a3b1d6b',
};
exports.default = styles;
/* tslint:enable */ 



/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(986);
var loader = __webpack_require__(48);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, ".deployContract_8a3b1d6b .container_8a3b1d6b{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.deployContract_8a3b1d6b .row_8a3b1d6b{margin:0 -8px;box-sizing:border-box;color:\"[theme:white, default: #ffffff]\";background-color:\"[theme:themeDark, default: #005a9e]\";padding:20px}.deployContract_8a3b1d6b .row_8a3b1d6b:after,.deployContract_8a3b1d6b .row_8a3b1d6b:before{display:table;content:\"\";line-height:0}.deployContract_8a3b1d6b .row_8a3b1d6b:after{clear:both}.deployContract_8a3b1d6b .column_8a3b1d6b{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .deployContract_8a3b1d6b .column_8a3b1d6b{float:left}[dir=rtl] .deployContract_8a3b1d6b .column_8a3b1d6b{float:right}.deployContract_8a3b1d6b .column_8a3b1d6b .ms-Grid_8a3b1d6b{padding:0}@media (min-width:640px){.deployContract_8a3b1d6b .column_8a3b1d6b{width:83.33333333333334%}}@media (min-width:1024px){.deployContract_8a3b1d6b .column_8a3b1d6b{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .deployContract_8a3b1d6b .column_8a3b1d6b{left:16.66667%}[dir=rtl] .deployContract_8a3b1d6b .column_8a3b1d6b{right:16.66667%}}@media (min-width:640px){[dir=ltr] .deployContract_8a3b1d6b .column_8a3b1d6b{left:8.33333%}[dir=rtl] .deployContract_8a3b1d6b .column_8a3b1d6b{right:8.33333%}}.deployContract_8a3b1d6b .title_8a3b1d6b{font-size:21px;font-weight:100;color:\"[theme:white, default: #ffffff]\"}.deployContract_8a3b1d6b .description_8a3b1d6b,.deployContract_8a3b1d6b .subTitle_8a3b1d6b{font-size:17px;font-weight:300;color:\"[theme:white, default: #ffffff]\"}.deployContract_8a3b1d6b .button_8a3b1d6b{text-decoration:none;height:32px;min-width:80px;background-color:\"[theme:themePrimary, default: #0078d7]\";border-color:\"[theme:themePrimary, default: #0078d7]\";color:\"[theme:white, default: #ffffff]\";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.deployContract_8a3b1d6b .button_8a3b1d6b .label_8a3b1d6b{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}", ""]);

// exports


/***/ })

/******/ })});;
//# sourceMappingURL=deploy-contract-web-part.js.map