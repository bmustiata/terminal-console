const ANSI_REGEXP = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/g;

/**
 * Removes all the ANSI codes from the given message, returning only the actual
 * string.
 */
function removeAnsiCode(message: string) : string {
	return message.replace(ANSI_REGEXP, "");
}
