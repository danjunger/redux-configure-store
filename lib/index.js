"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _history = require("history");

var _redux = require("redux");

var _connectedReactRouter = require("connected-react-router");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function configureStore(middlewares, rootReducer) {
  var enableDevTools = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var composer = enableDevTools ? _reduxDevtoolsExtension.composeWithDevTools : _redux.compose;
  var history = (0, _history.createBrowserHistory)();
  var store = (0, _redux.createStore)((0, _connectedReactRouter.connectRouter)(history)(rootReducer), composer(_redux.applyMiddleware.apply(void 0, [(0, _connectedReactRouter.routerMiddleware)(history)].concat(_toConsumableArray(middlewares)))));
  return {
    store: store,
    history: history
  };
}