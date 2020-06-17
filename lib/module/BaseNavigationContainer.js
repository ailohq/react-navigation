function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { CommonActions } from '@react-navigation/routers';
import EnsureSingleNavigator from './EnsureSingleNavigator';
import NavigationBuilderContext from './NavigationBuilderContext';
import { ScheduleUpdateContext } from './useScheduleUpdate';
import useFocusedListeners from './useFocusedListeners';
import useStateGetters from './useStateGetters';
import useOptionsGetters from './useOptionsGetters';
import useEventEmitter from './useEventEmitter';
import useSyncState from './useSyncState';
import isSerializable from './isSerializable';
import NavigationStateContext from './NavigationStateContext';
const NOT_INITIALIZED_ERROR = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
let hasWarnedForSerialization = false;
/**
 * Migration instructions for removal of devtools from core
 */

Object.defineProperty(global, 'REACT_NAVIGATION_REDUX_DEVTOOLS_EXTENSION_INTEGRATION_ENABLED', {
  set(_) {
    console.warn("Redux devtools extension integration can be enabled with the '@react-navigation/devtools' package. For more details, see https://reactnavigation.org/docs/devtools");
  }

});
/**
 * Remove `key` and `routeNames` from the state objects recursively to get partial state.
 *
 * @param state Initial state object.
 */

const getPartialState = state => {
  if (state === undefined) {
    return;
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  const {
    key,
    routeNames
  } = state,
        partialState = _objectWithoutProperties(state, ["key", "routeNames"]); // @ts-ignore


  return _objectSpread(_objectSpread({}, partialState), {}, {
    stale: true,
    routes: state.routes.map(route => {
      if (route.state === undefined) {
        return route;
      }

      return _objectSpread(_objectSpread({}, route), {}, {
        state: getPartialState(route.state)
      });
    })
  });
};
/**
 * Container component which holds the navigation state.
 * This should be rendered at the root wrapping the whole app.
 *
 * @param props.initialState Initial state object for the navigation tree.
 * @param props.onStateChange Callback which is called with the latest navigation state when it changes.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which refers to the navigation object containing helper methods.
 */


const BaseNavigationContainer = /*#__PURE__*/React.forwardRef(function BaseNavigationContainer({
  initialState,
  onStateChange,
  independent,
  children
}, ref) {
  const parent = React.useContext(NavigationStateContext);

  if (!parent.isDefault && !independent) {
    throw new Error("Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, pass 'independent={true}' explicitely. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.");
  }

  const [state, getState, setState, scheduleUpdate, flushUpdates] = useSyncState(() => getPartialState(initialState == null ? undefined : initialState));
  const isFirstMountRef = React.useRef(true);
  const navigatorKeyRef = React.useRef();
  const getKey = React.useCallback(() => navigatorKeyRef.current, []);
  const setKey = React.useCallback(key => {
    navigatorKeyRef.current = key;
  }, []);
  const {
    listeners,
    addListener: addFocusedListener
  } = useFocusedListeners();
  const {
    getStateForRoute,
    addStateGetter
  } = useStateGetters();

  const dispatch = action => {
    if (listeners[0] == null) {
      throw new Error(NOT_INITIALIZED_ERROR);
    }

    listeners[0](navigation => navigation.dispatch(action));
  };

  const canGoBack = () => {
    if (listeners[0] == null) {
      return false;
    }

    const {
      result,
      handled
    } = listeners[0](navigation => navigation.canGoBack());

    if (handled) {
      return result;
    } else {
      return false;
    }
  };

  const resetRoot = React.useCallback(state => {
    setState(state);
  }, [setState]);
  const getRootState = React.useCallback(() => {
    return getStateForRoute('root');
  }, [getStateForRoute]);
  const getCurrentRoute = React.useCallback(() => {
    let state = getRootState();

    if (state === undefined) {
      return undefined;
    }

    while (state.routes[state.index].state !== undefined) {
      state = state.routes[state.index].state;
    }

    return state.routes[state.index];
  }, [getRootState]);
  const emitter = useEventEmitter();
  const {
    addOptionsGetter,
    getCurrentOptions
  } = useOptionsGetters({});
  React.useImperativeHandle(ref, () => _objectSpread(_objectSpread(_objectSpread({}, Object.keys(CommonActions).reduce((acc, name) => {
    acc[name] = (...args) => dispatch(CommonActions[name]( // @ts-ignore
    ...args));

    return acc;
  }, {})), emitter.create('root')), {}, {
    resetRoot,
    dispatch,
    canGoBack,
    getRootState,
    dangerouslyGetState: () => state,
    dangerouslyGetParent: () => undefined,
    getCurrentRoute,
    getCurrentOptions
  }));
  const onDispatchAction = React.useCallback((action, noop) => {
    emitter.emit({
      type: '__unsafe_action__',
      data: {
        action,
        noop
      }
    });
  }, [emitter]);
  const onOptionsChange = React.useCallback(options => {
    emitter.emit({
      type: 'options',
      data: {
        options
      }
    });
  }, [emitter]);
  const builderContext = React.useMemo(() => ({
    addFocusedListener,
    addStateGetter,
    onDispatchAction,
    onOptionsChange
  }), [addFocusedListener, addStateGetter, onDispatchAction, onOptionsChange]);
  const scheduleContext = React.useMemo(() => ({
    scheduleUpdate,
    flushUpdates
  }), [scheduleUpdate, flushUpdates]);
  const context = React.useMemo(() => ({
    state,
    getState,
    setState,
    getKey,
    setKey,
    addOptionsGetter
  }), [getKey, getState, setKey, setState, state, addOptionsGetter]);
  const onStateChangeRef = React.useRef(onStateChange);
  React.useEffect(() => {
    onStateChangeRef.current = onStateChange;
  });
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      if (state !== undefined && !isSerializable(state) && !hasWarnedForSerialization) {
        hasWarnedForSerialization = true;
        console.warn("Non-serializable values were found in the navigation state, which can break usage such as persisting and restoring state. This might happen if you passed non-serializable values such as function, class instances etc. in params. If you need to use components with callbacks in your options, you can use 'navigation.setOptions' instead. See https://reactnavigation.org/docs/troubleshooting#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state for more details.");
      }
    }

    emitter.emit({
      type: 'state',
      data: {
        state
      }
    });

    if (!isFirstMountRef.current && onStateChangeRef.current) {
      onStateChangeRef.current(getRootState());
    }

    isFirstMountRef.current = false;
  }, [getRootState, emitter, state]);
  return /*#__PURE__*/React.createElement(ScheduleUpdateContext.Provider, {
    value: scheduleContext
  }, /*#__PURE__*/React.createElement(NavigationBuilderContext.Provider, {
    value: builderContext
  }, /*#__PURE__*/React.createElement(NavigationStateContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(EnsureSingleNavigator, null, children))));
});
export default BaseNavigationContainer;
//# sourceMappingURL=BaseNavigationContainer.js.map