import { Router, CommonNavigationAction, NavigationState } from '@react-navigation/routers';
export declare type MockActions = CommonNavigationAction | {
    type: 'NOOP' | 'UPDATE';
};
export declare const MockRouterKey: {
    current: number;
};
export default function MockRouter(): Router<NavigationState, MockActions>;
