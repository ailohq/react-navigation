"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SceneView;

var React = _interopRequireWildcard(require("react"));

var _NavigationStateContext = _interopRequireDefault(require("./NavigationStateContext"));

var _StaticContainer = _interopRequireDefault(require("./StaticContainer"));

var _EnsureSingleNavigator = _interopRequireDefault(require("./EnsureSingleNavigator"));

var _useOptionsGetters = _interopRequireDefault(require("./useOptionsGetters"));

var _NavigationBuilderContext = _interopRequireDefault(require("./NavigationBuilderContext"));

var _useFocusEffect = _interopRequireDefault(require("./useFocusEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Component which takes care of rendering the screen for a route.
 * It provides all required contexts and applies optimizations when applicable.
 */
function SceneView({
  screen,
  route,
  navigation,
  getState,
  setState,
  options
}) {
  const navigatorKeyRef = React.useRef();
  const {
    onOptionsChange
  } = React.useContext(_NavigationBuilderContext.default);
  const getKey = React.useCallback(() => navigatorKeyRef.current, []);
  const optionsRef = React.useRef(options);
  const getOptions = React.useCallback(() => optionsRef.current, []);
  const {
    addOptionsGetter,
    hasAnyChildListener
  } = (0, _useOptionsGetters.default)({
    key: route.key,
    getState,
    getOptions
  });
  const optionsChange = React.useCallback(() => {
    optionsRef.current = options;

    if (!hasAnyChildListener) {
      onOptionsChange(options);
    }
  }, [onOptionsChange, options, hasAnyChildListener]);
  (0, _useFocusEffect.default)(optionsChange);
  const setKey = React.useCallback(key => {
    navigatorKeyRef.current = key;
  }, []);
  const getCurrentState = React.useCallback(() => {
    const state = getState();
    const currentRoute = state.routes.find(r => r.key === route.key);
    return currentRoute ? currentRoute.state : undefined;
  }, [getState, route.key]);
  const setCurrentState = React.useCallback(child => {
    const state = getState();
    setState(_objectSpread(_objectSpread({}, state), {}, {
      routes: state.routes.map(r => r.key === route.key ? _objectSpread(_objectSpread({}, r), {}, {
        state: child
      }) : r)
    }));
  }, [getState, route.key, setState]);
  const context = React.useMemo(() => ({
    state: route.state,
    getState: getCurrentState,
    setState: setCurrentState,
    getKey,
    setKey,
    addOptionsGetter
  }), [getCurrentState, getKey, route.state, setCurrentState, setKey, addOptionsGetter]);
  return /*#__PURE__*/React.createElement(_NavigationStateContext.default.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(_EnsureSingleNavigator.default, null, /*#__PURE__*/React.createElement(_StaticContainer.default, {
    name: screen.name // @ts-ignore
    ,
    render: screen.component || screen.children,
    navigation: navigation,
    route: route
  }, 'component' in screen && screen.component !== undefined ?
  /*#__PURE__*/
  // @ts-ignore
  React.createElement(screen.component, {
    navigation: navigation,
    route: route
  }) : 'children' in screen && screen.children !== undefined ? // @ts-ignore
  screen.children({
    navigation,
    route
  }) : null)));
}
//# sourceMappingURL=SceneView.js.map