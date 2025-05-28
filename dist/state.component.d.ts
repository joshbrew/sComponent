import { Component } from 'react';
import { EventHandler } from './EventHandler';
export declare const state: EventHandler;
export declare class sComponent<P extends {
    state?: EventHandler;
    doNotBroadcast?: string[];
    [key: string]: any;
} = {}, S extends Record<string, any> = {}> extends Component<P, S> {
    /** React-managed state, linked to an external EventHandler for a cross-component persistent state */
    state: any;
    /**
     * Global or injected EventHandler
    */
    __statemgr: EventHandler;
    /** Subscription tokens*/
    __state_subs: Record<string, number>;
    /**Keys just updated by setState (to suppress echoes)*/
    __updated: string[];
    /** Unique identifier for debugging or DOM-keying*/
    __unique: string;
    /**
    * Keeps specified state keys unique to this component.
    */
    __doNotBroadcast?: string[];
    [key: string]: any;
    /**
     * Promise-based setState that relays once to your EventHandler,
     * and now also supports functional updaters + optional callbacks.
     */
    setState(partialState: Partial<S> | ((prevState: Readonly<S>) => Partial<S>), callback?: () => void): Promise<void>;
    constructor(props?: P & {
        state?: EventHandler;
        doNotBroadcast?: string[];
    });
    /**
     * Subscribe to a single state property
     */
    __subscribeComponent(prop: string, onEvent?: (value: any) => void): number;
    /**
     * Unsubscribe from one or all properties
     */
    __unsubscribeComponent(prop?: string): void;
    /**
     * Toggle localStorage syncing at runtime
     */
    __setUseLocalStorage(use: boolean): void;
    /**
     * Restore persisted values into this.state
     */
    __restoreLocalStorage(): void;
}
