import { Component } from 'react';
import { EventHandler } from './EventHandler';
export declare const state: EventHandler;
export declare class sComponent extends Component<{
    [key: string]: any;
}> {
    statemgr: EventHandler;
    state_subs: {};
    UPDATED: any;
    unique: string;
    react_setState: any;
    constructor(props?: {
        [key: string]: any;
        state?: EventHandler;
        doNotSubscribe?: string[];
    });
    __subscribeComponent(prop: any, onEvent?: (value: any) => void): number | undefined;
    __unsubscribeComponent(prop?: any): void;
}
