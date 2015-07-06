/// <reference path="../typings/node/supports-color.d.ts" />
export declare const RESET: string;
/**
 * Removes all the ANSI codes from the given message, returning only the actual
 * string.
 */
export declare function removeAnsiCode(message: string): string;
/**
 * Returns the ANSI move up code, that is going to do the actual cursor move.
 * In case colors are not available for STDOUT, just return an empty string.
 */
export declare function moveCursorUp(rowCount: number): string;
