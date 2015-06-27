///<reference path="../../../typings/node/supports-color.d.ts"/>

import supportsColor = require("supports-color");

const ANSI_REGEXP = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/g;

export const RESET = supportsColor ? '\x1b[0m' : ''; // should be 0, 41 is red for test

/**
 * Removes all the ANSI codes from the given message, returning only the actual
 * string.
 */
export function removeAnsiCode(message: string) : string {
	return message.replace(ANSI_REGEXP, "");
}

/**
 * Returns the ANSI move up code, that is going to do the actual cursor move.
 * In case colors are not available for STDOUT, just return an empty string.
 */
export function moveCursorUp(rowCount: number) : string {
	if (!supportsColor) {
		return "";
	}
	
	return '\x1b[' + rowCount + 'A';
}
