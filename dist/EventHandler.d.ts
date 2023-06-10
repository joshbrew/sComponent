export declare class EventHandler {
    data: {
        [key: string]: any;
    };
    triggers: {
        [key: string]: {
            [key: string]: any;
            sub: number;
            onchange: Function;
        }[];
    };
    ctr: number;
    constructor(data?: {
        [key: string]: any;
    });
    setState: (updateObj: {
        [key: string]: any;
    }) => {
        [key: string]: any;
    };
    setValue: (key: any, value: any) => void;
    triggerEvent: (key: any, value: any) => void;
    subscribeState: (onchange: (res: any) => void) => number | undefined;
    unsubscribeState: (sub: number) => true | undefined;
    subscribeEvent: (key: string, onchange: (res: any) => void, refObject?: {
        [key: string]: any;
    } | undefined, refKey?: string) => number | undefined;
    unsubscribeEvent: (key: string, sub?: number) => true | undefined;
    subscribeEventOnce: (key: string, onchange: (res: any) => void) => number | undefined;
    getEvent: (key: any, sub: any) => {
        [key: string]: any;
        sub: number;
        onchange: Function;
    } | undefined;
    getSnapshot: () => void;
    onRemoved: (trigger: {
        sub: number;
        onchange: Function;
    }) => void;
}
