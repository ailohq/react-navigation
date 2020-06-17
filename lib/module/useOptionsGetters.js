import * as React from 'react';
import NavigationStateContext from './NavigationStateContext';
export default function useOptionsGetters({
  key,
  getOptions,
  getState
}) {
  let [numberOfChildrenListeners, setNumberOfChildrenListeners] = React.useState(0);
  const optionsGettersFromChild = React.useRef({});
  const {
    addOptionsGetter: parentAddOptionsGetter
  } = React.useContext(NavigationStateContext);
  const getOptionsFromListener = React.useCallback(() => {
    for (let key in optionsGettersFromChild.current) {
      if (optionsGettersFromChild.current.hasOwnProperty(key)) {
        var _optionsGettersFromCh, _optionsGettersFromCh2;

        const result = (_optionsGettersFromCh = (_optionsGettersFromCh2 = optionsGettersFromChild.current)[key]) === null || _optionsGettersFromCh === void 0 ? void 0 : _optionsGettersFromCh.call(_optionsGettersFromCh2); // null means unfocused route

        if (result !== null) {
          return result;
        }
      }
    }

    return null;
  }, []);
  const getCurrentOptions = React.useCallback(() => {
    var _getOptions;

    if (getState) {
      const state = getState();

      if (state.routes[state.index].key !== key) {
        // null means unfocused route
        return null;
      }
    }

    const optionsFromListener = getOptionsFromListener();

    if (optionsFromListener !== null) {
      return optionsFromListener;
    }

    return (_getOptions = getOptions === null || getOptions === void 0 ? void 0 : getOptions()) !== null && _getOptions !== void 0 ? _getOptions : undefined;
  }, [getState, getOptionsFromListener, getOptions, key]);
  React.useEffect(() => {
    return parentAddOptionsGetter === null || parentAddOptionsGetter === void 0 ? void 0 : parentAddOptionsGetter(key, getCurrentOptions);
  }, [getCurrentOptions, parentAddOptionsGetter, key]);
  const addOptionsGetter = React.useCallback((key, getter) => {
    optionsGettersFromChild.current[key] = getter;
    setNumberOfChildrenListeners(prev => prev + 1);
    return () => {
      setNumberOfChildrenListeners(prev => prev - 1); // eslint-disable-next-line @typescript-eslint/no-dynamic-delete

      delete optionsGettersFromChild.current[key];
    };
  }, []);
  const hasAnyChildListener = React.useMemo(() => numberOfChildrenListeners > 0, [numberOfChildrenListeners]);
  return {
    addOptionsGetter,
    getCurrentOptions,
    hasAnyChildListener
  };
}
//# sourceMappingURL=useOptionsGetters.js.map