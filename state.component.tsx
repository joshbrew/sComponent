import React, { Component } from 'react';
import { EventHandler } from './EventHandler';

export const state = new EventHandler(); // import this anywhere for direct manipulation of state components from script

export class sComponent<
    P extends { state?: EventHandler; doNotSubscribe?: string[] } = {},
    S extends Record<string, any> = {}
> extends Component<P, S> {
    // React-managed state
    state = {} as any;

    // Global or injected EventHandler
    __statemgr: EventHandler;

    // Subscription tokens
    __state_subs: Record<string, number> = {};

    // Keys just updated by setState (to suppress echoes)
    __updated: string[] = [];

    // Unique identifier for debugging or DOM-keying
    __unique = `component${Math.floor(Math.random() * 1e15)}`;

    /**
     * Promise-based setState that relays once to your EventHandler
     */
    //@ts-ignore
    setState(
        partialState: Partial<S>,
        callback?: () => void
    ): Promise<void> {
        return new Promise(resolve => {
            super.setState(partialState as any, () => {
                // record which keys were updated
                this.__updated = Object.keys(partialState);
                // relay the entire object to EventHandler in one call
                this.__statemgr.setState(partialState);
                // user callback
                if (callback) callback();
                resolve();
            });
        });
    }

    constructor(
        props: P & { state?: EventHandler; doNotSubscribe?: string[] } = {} as P
    ) {
        super(props);
        // use injected or global state manager
        this.__statemgr = props.state ?? state;

        // ── Hydrate initial state from EventHandler.data
        const initial: Partial<S> = {};
        for (const prop in this.state) {
            if (props.doNotSubscribe?.includes(prop)) continue;
            if (prop in this.__statemgr.data) {
                initial[prop as keyof S] = this.__statemgr.data[prop];
            }
        }
        if (Object.keys(initial).length) {
            Object.assign(this.state, initial);
        }

        // ── Hydrate from localStorage if enabled
        if (this.__statemgr.useLocalStorage) {
            this.__restoreLocalStorage();
        }

        // ── Defer subscription & final override to next tick
        setTimeout(() => {
            const override: Partial<S> = {};
            for (const prop in this.state) {
                if (props.doNotSubscribe?.includes(prop)) continue;
                if (prop in this.__statemgr.data) {
                    override[prop as keyof S] = this.__statemgr.data[prop];
                }
                this.__subscribeComponent(prop);
            }
            if (Object.keys(override).length) {
                super.setState(override as any);
            }
        }, 0);
    }

    /**
     * Subscribe to a single state property
     */
    __subscribeComponent(
        prop: string,
        onEvent?: (value: any) => void
    ) {
        const token = this.__statemgr.subscribeEvent(prop, (res) => {
            if (onEvent) onEvent(res);
            const idx = this.__updated.indexOf(prop);
            if (idx > -1) {
                // this update came from us, suppress echo
                this.__updated.splice(idx, 1);
            } else {
                super.setState({ [prop]: res } as Pick<S, keyof S>);
            }
        }) as number;

        this.__state_subs[prop] = token;
        return token;
    }

    /**
     * Unsubscribe from one or all properties
     */
    __unsubscribeComponent(prop?: string) {
        if (prop) {
            this.__statemgr.unsubscribeEvent(prop, this.__state_subs[prop]);
        } else {
            for (const key in this.__state_subs) {
                this.__statemgr.unsubscribeEvent(key, this.__state_subs[key]);
            }
            this.__state_subs = {};
        }
    }

    /**
     * Toggle localStorage syncing at runtime
     */
    __setUseLocalStorage(use: boolean) {
        this.__statemgr.useLocalStorage = use;
        this.__restoreLocalStorage();
    }

    /**
     * Restore persisted values into this.state
     */
    __restoreLocalStorage() {
        const result = this.__statemgr.restoreLocalStorage(
            Object.keys(this.state)
        );
        if (result) {
            Object.assign(this.state, result);
        }
    }
}
