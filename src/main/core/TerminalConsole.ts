///<reference path="../../../typings/node/node.d.ts"/>

import util = require("util");
import AnsiUtil = require("./AnsiUtil");
import watcher = require("./TerminalSizeWatcher");

var actualConsole = global.console;

/**
 * A class that allows relogging the previously written message by using the
 * ANSI up code.
 * @inmodule "terminal-console"
 */
export class TerminalConsole {
	private _lastMessageLength : number = 0;
	
	private static _SIZE_WATCHER = new watcher.TerminalSizeWatcher();
	
	/**
	 * Constructs the console.
	 */
	constructor() {
	}

	/**
	 * Logs the given arguments, and keeps track of the last written text.
	 */
	public log(message?: any, ...optionalParams: any[]): void {
		actualConsole.log(this._print.apply(this, arguments));
	}

	/**
	 * Relogs the given message, by clearing first the previous message.
	 */
	public relog(message?: any, ...optionalParams: any[]): void {
		actualConsole.log(this._reprint.apply(this, arguments));
	}
	
	/**
	 * Logs the given arguments, and keeps track of the last written text.
	 */
	public error(message?: any, ...optionalParams: any[]): void {
		actualConsole.error(this._print.apply(this, arguments));
	}

	/**
	 * Relogs the given message, by clearing first the previous message.
	 */
	public reerror(message?: any, ...optionalParams: any[]): void {
		actualConsole.error(this._reprint.apply(this, arguments));
	}


	/**
	 * Logs the given arguments, and keeps track of the last written text.
	 */
	public info(message?: any, ...optionalParams: any[]): void {
		actualConsole.info(this._print.apply(this, arguments));
	}

	/**
	 * Relogs the given message, by clearing first the previous message.
	 */
	public reinfo(message?: any, ...optionalParams: any[]): void {
		actualConsole.info(this._reprint.apply(this, arguments));
	}

	/**
	 * Logs the given arguments, and keeps track of the last written text.
	 */
	public warn(message?: any, ...optionalParams: any[]): void {
		actualConsole.log(this._print.apply(this, arguments));
	}

	/**
	 * Relogs the given message, by clearing first the previous message.
	 */
	public rewarn(message?: any, ...optionalParams: any[]): void {
		actualConsole.log(this._reprint.apply(this, arguments));
	}


	/**
	 * Formats the text for printing it, and memorize its length
	 */
	private _print() : string {
		// format the text like a regular console, figure out the actual size of the text, 
		// and memorize it, and after just return the text.

		var loggedText = util.format.apply(util.format, arguments);
		var pureText = AnsiUtil.removeAnsiCode(loggedText);
		
		this._lastMessageLength = pureText.length;
		
		return loggedText;
	}

	/**
	 * its length.
	 * Formats the text for reprinting it (by moving the cursor up) and memorize
	 */
	private _reprint() : string {
		var rowCount = Math.floor( this._lastMessageLength / TerminalConsole._SIZE_WATCHER.columns ) + 1;
		
		//FIXME: depending on the strategy, the space cleanup might be needed
		var loggedText = AnsiUtil.moveCursorUp(rowCount) +
						 util.format.apply(util.format, arguments);
		var pureText = AnsiUtil.removeAnsiCode(loggedText);
		
		if (pureText.length < this._lastMessageLength) {
			// new text is shorter than previously printed text, so we need to
			// fill the old text with spaces.
			var spaces = "";
			
			for (var i = pureText.length; i < this._lastMessageLength; i++) {
				spaces += " ";
			}

			loggedText += AnsiUtil.RESET + spaces;
			pureText += spaces;
		}
		
		this._lastMessageLength = pureText.length;
		
		return loggedText;
	}

}

export var console = new TerminalConsole();
