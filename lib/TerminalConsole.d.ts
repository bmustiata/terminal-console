/// <reference path="../typings/node/node.d.ts" />
/**
 * A class that allows relogging the previously written message by using the
 * ANSI up code.
 * @inmodule "terminal-console"
 */
export declare class TerminalConsole {
    private _lastMessageLength;
    private static _SIZE_WATCHER;
    /**
     * Constructs the console.
     */
    constructor();
    /**
     * Logs the given arguments, and keeps track of the last written text.
     */
    log(message?: any, ...optionalParams: any[]): void;
    /**
     * Relogs the given message, by clearing first the previous message.
     */
    relog(message?: any, ...optionalParams: any[]): void;
    /**
     * Logs the given arguments, and keeps track of the last written text.
     */
    error(message?: any, ...optionalParams: any[]): void;
    /**
     * Relogs the given message, by clearing first the previous message.
     */
    reerror(message?: any, ...optionalParams: any[]): void;
    /**
     * Logs the given arguments, and keeps track of the last written text.
     */
    info(message?: any, ...optionalParams: any[]): void;
    /**
     * Relogs the given message, by clearing first the previous message.
     */
    reinfo(message?: any, ...optionalParams: any[]): void;
    /**
     * Logs the given arguments, and keeps track of the last written text.
     */
    warn(message?: any, ...optionalParams: any[]): void;
    /**
     * Relogs the given message, by clearing first the previous message.
     */
    rewarn(message?: any, ...optionalParams: any[]): void;
    /**
     * Formats the text for printing it, and memorize its length
     */
    private _print();
    /**
     * its length.
     * Formats the text for reprinting it (by moving the cursor up) and memorize
     */
    private _reprint();
}
