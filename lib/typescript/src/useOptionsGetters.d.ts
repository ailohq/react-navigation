import { NavigationState } from '@react-navigation/routers';
export default function useOptionsGetters({ key, getOptions, getState, }: {
    key?: string;
    getOptions?: () => object | undefined;
    getState?: () => NavigationState;
}): {
    addOptionsGetter: (key: string, getter: () => object | undefined | null) => () => void;
    getCurrentOptions: () => object | null | undefined;
    hasAnyChildListener: boolean;
};
