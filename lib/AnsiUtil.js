///<reference path="../../../typings/node/supports-color.d.ts"/>
var supportsColor = require("supports-color");
var ANSI_REGEXP = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/g;
/**
 * Removes all the ANSI codes from the given message, returning only the actual
 * string.
 */
function removeAnsiCode(message) {
    return message.replace(ANSI_REGEXP, "");
}
exports.removeAnsiCode = removeAnsiCode;
/**
 * Returns the ANSI move up code, that is going to do the actual cursor move.
 * In case colors are not available for STDOUT, just return an empty string.
 */
function moveCursorUp(rowCount) {
    if (!supportsColor) {
        return "";
    }
    return '\x1b[' + rowCount + 'A';
}
exports.moveCursorUp = moveCursorUp;
//# sourceMappingURL=AnsiUtil.js.map