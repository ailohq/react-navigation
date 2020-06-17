import * as React from 'react';
import { NavigationState, PartialState } from '@react-navigation/routers';
declare const _default: React.Context<{
    isDefault?: true | undefined;
    state?: NavigationState | PartialState<NavigationState> | undefined;
    getKey: () => string | undefined;
    setKey: (key: string) => void;
    getState: () => NavigationState | PartialState<NavigationState> | undefined;
    setState: (state: NavigationState | PartialState<NavigationState> | undefined) => void;
    addOptionsGetter?: ((key: string, getter: () => object | undefined | null) => void) | undefined;
}>;
export default _default;