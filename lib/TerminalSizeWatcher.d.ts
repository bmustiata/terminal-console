/// <reference path="../typings/node/node.d.ts" />
/**
 * Monitors the size of the terminal. It always contains the current size
 * of the terminal
 */
export declare class TerminalSizeWatcher {
    rows: number;
    columns: number;
    /**
     * Register itself for terminal size changes.
     */
    constructor();
    _storeSize: () => void;
}
