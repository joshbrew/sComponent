export declare class EventHandler {
    data: {
        [key: string]: any;
    };
    triggers: {
        [key: string]: {
            sub: number;
            onchange: Function;
            [key: string]: any;
        }[];
    };
    ctr: number;
    STATESUBKEY: string;
    useLocalStorage: boolean;
    localStorageKeys?: string[];
    constructor(data?: {
        [key: string]: any;
    }, useLocalStorage?: boolean, //persist between sessions?
    localStorageKeys?: string[]);
    setState: (updateObj: {
        [key: string]: any;
    }) => {
        [key: string]: any;
    };
    setValue: (key: any, value: any) => void;
    triggerEvent: (key: any, value: any) => void;
    subscribeState: (onchange: (res: any) => void) => number;
    unsubscribeState: (sub: number) => boolean;
    subscribeEvent: (key: string, onchange: (res: any) => void, refObject?: {
        [key: string]: any;
    }, refKey?: string) => number;
    unsubscribeEvent: (key: string, sub?: number) => boolean;
    subscribeEventOnce: (key: string, onchange: (res: any) => void) => any;
    getEvent: (key: any, sub?: any) => {
        [key: string]: any;
        sub: number;
        onchange: Function;
    } | {
        [key: string]: any;
        sub: number;
        onchange: Function;
    }[];
    getSnapshot: () => void;
    onRemoved: (trigger: {
        sub: number;
        onchange: Function;
    }) => void;
    updateLocalStorage(keys?: string[]): void;
    restoreLocalStorage(keys?: string[]): {};
}
