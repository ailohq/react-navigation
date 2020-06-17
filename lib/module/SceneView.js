function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import NavigationStateContext from './NavigationStateContext';
import StaticContainer from './StaticContainer';
import EnsureSingleNavigator from './EnsureSingleNavigator';
import useOptionsGetters from './useOptionsGetters';
import NavigationBuilderContext from './NavigationBuilderContext';
import useFocusEffect from './useFocusEffect';

/**
 * Component which takes care of rendering the screen for a route.
 * It provides all required contexts and applies optimizations when applicable.
 */
export default function SceneView({
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
  } = React.useContext(NavigationBuilderContext);
  const getKey = React.useCallback(() => navigatorKeyRef.current, []);
  const optionsRef = React.useRef(options);
  const getOptions = React.useCallback(() => optionsRef.current, []);
  const {
    addOptionsGetter,
    hasAnyChildListener
  } = useOptionsGetters({
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
  useFocusEffect(optionsChange);
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
  return /*#__PURE__*/React.createElement(NavigationStateContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(EnsureSingleNavigator, null, /*#__PURE__*/React.createElement(StaticContainer, {
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