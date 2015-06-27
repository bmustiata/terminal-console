///<reference path="../../../typings/node/node.d.ts"/>
var util = require("util");
var AnsiUtil = require("./AnsiUtil");
var watcher = require("./TerminalSizeWatcher");
/**
 * A class that allows relogging the previously written message by using the
 * ANSI up code.
 */
var TerminalConsole = (function () {
    /**
     * Constructs the console.
     */
    function TerminalConsole() {
        this._lastMessageLength = 0;
    }
    /**
     * Logs the given arguments, and keeps track of the last written text.
     */
    TerminalConsole.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log(this._print.apply(this, arguments));
    };
    /**
     * Relogs the given message, by clearing first the previous message.
     */
    TerminalConsole.prototype.relog = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log(this._reprint.apply(this, arguments));
    };
    /**
     * Logs the given arguments, and keeps track of the last written text.
     */
    TerminalConsole.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.error(this._print.apply(this, arguments));
    };
    /**
     * Relogs the given message, by clearing first the previous message.
     */
    TerminalConsole.prototype.reerror = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.error(this._reprint.apply(this, arguments));
    };
    /**
     * Logs the given arguments, and keeps track of the last written text.
     */
    TerminalConsole.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.info(this._print.apply(this, arguments));
    };
    /**
     * Relogs the given message, by clearing first the previous message.
     */
    TerminalConsole.prototype.reinfo = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.info(this._reprint.apply(this, arguments));
    };
    /**
     * Logs the given arguments, and keeps track of the last written text.
     */
    TerminalConsole.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log(this._print.apply(this, arguments));
    };
    /**
     * Relogs the given message, by clearing first the previous message.
     */
    TerminalConsole.prototype.rewarn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log(this._reprint.apply(this, arguments));
    };
    /**
     * Formats the text for printing it, and memorize its length
     */
    TerminalConsole.prototype._print = function () {
        // format the text like a regular console, figure out the actual size of the text, 
        // and memorize it, and after just return the text.
        var loggedText = util.format.apply(util.format, arguments);
        var pureText = AnsiUtil.removeAnsiCode(loggedText);
        this._lastMessageLength = pureText.length;
        return loggedText;
    };
    /**
     * its length.
     * Formats the text for reprinting it (by moving the cursor up) and memorize
     */
    TerminalConsole.prototype._reprint = function () {
        var rowCount = Math.floor(this._lastMessageLength / TerminalConsole._SIZE_WATCHER.columns) + 1;
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
    };
    TerminalConsole._SIZE_WATCHER = new watcher.TerminalSizeWatcher();
    return TerminalConsole;
})();
module.exports = new TerminalConsole();
module.exports.console = module.exports;
module.exports.TerminalConsole = TerminalConsole;
//# sourceMappingURL=TerminalConsole.js.map