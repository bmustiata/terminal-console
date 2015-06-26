///<reference path="AnsiRemover.ts"/>

/**
 * How should the relog happen.
 *
 * If the message has the same length, using MOVE_CURSOR (the default)
 * is faster, since it doesn't need to first clear the previous message
 * with spaces.
 *
 * MOVE_CURSOR_AND_CLEAR will move the cursor, and then fill the overwrite
 * the previous text wih spaces.
 */
enum RelogMode {
	MOVE_CURSOR,
	MOVE_CURSOR_AND_CLEAR
}

/**
 * A class that allows relogging the previously written message by using the
 * ANSI up code, and monitoring the size of the window.
 */
class TerminalConsole {
	/**
	 * Constructs the console.
	 */
	constructor(public relogMode : RelogMode = RelogMode.MOVE_CURSOR) {
	}

	/**
	 * Logs the given arguments, and keeps track of the last written text.
	 */
	public log(...args) {
		console.log.apply(console, args);
	}

	/**
	 * Relogs the given message, by clearing first the previous message.
	 */
	public relog(...args) {
		console.log.apply(console, args);
	}
}
