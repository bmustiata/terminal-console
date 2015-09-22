declare module 'terminal-console/lib/AnsiUtil' {
	/// <reference path="../typings/node/supports-color.d.ts" />
	export const RESET: string;
	/**
	 * Removes all the ANSI codes from the given message, returning only the actual
	 * string.
	 */
	export function removeAnsiCode(message: string): string;
	/**
	 * Returns the ANSI move up code, that is going to do the actual cursor move.
	 * In case colors are not available for STDOUT, just return an empty string.
	 */
	export function moveCursorUp(rowCount: number): string;

}
declare module 'terminal-console/lib/TerminalConsole' {
	/// <reference path="../typings/node/node.d.ts" />
	/**
	 * A class that allows relogging the previously written message by using the
	 * ANSI up code.
	 * @inmodule "terminal-console"
	 */
	export class TerminalConsole {
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
	export var console: TerminalConsole;

}
declare module 'terminal-console/lib/TerminalSizeWatcher' {
	/// <reference path="../typings/node/node.d.ts" />
	/**
	 * Monitors the size of the terminal. It always contains the current size
	 * of the terminal
	 */
	export class TerminalSizeWatcher {
	    rows: number;
	    columns: number;
	    /**
	     * Register itself for terminal size changes.
	     */
	    constructor();
	    _storeSize: () => void;
	}

}
declare module 'terminal-console' {
	import main = require('terminal-console/lib/TerminalConsole');
	export = main;
}
