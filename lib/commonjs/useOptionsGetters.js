"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useOptionsGetters;

var React = _interopRequireWildcard(require("react"));

var _NavigationStateContext = _interopRequireDefault(require("./NavigationStateContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useOptionsGetters({
  key,
  getOptions,
  getState
}) {
  let [numberOfChildrenListeners, setNumberOfChildrenListeners] = React.useState(0);
  const optionsGettersFromChild = React.useRef({});
  const {
    addOptionsGetter: parentAddOptionsGetter
  } = React.useContext(_NavigationStateContext.default);
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