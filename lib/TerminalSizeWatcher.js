///<reference path="../../../typings/node/node.d.ts"/>
/**
 * Monitors the size of the terminal. It always contains the current size
 * of the terminal
 */
var TerminalSizeWatcher = (function () {
    /**
     * Register itself for terminal size changes.
     */
    function TerminalSizeWatcher() {
        var _this = this;
        this.rows = process.stdout.rows ? process.stdout.rows : 25;
        this.columns = process.stdout.columns ? process.stdout.columns : 80;
        this._storeSize = function () {
            _this.rows = process.stdout.rows ? process.stdout.rows : 25;
            _this.columns = process.stdout.columns ? process.stdout.columns : 80;
        };
        process.stdout.on("resize", this._storeSize);
    }
    return TerminalSizeWatcher;
})();
exports.TerminalSizeWatcher = TerminalSizeWatcher;
//# sourceMappingURL=TerminalSizeWatcher.js.map