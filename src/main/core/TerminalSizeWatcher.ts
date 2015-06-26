///<reference path="../../../typings/node/node.d.ts"/>

/**
 * Monitors the size of the terminal. It always contains the current size
 * of the terminal
 */
export class TerminalSizeWatcher {
	public rows : number = process.stdout.rows ? process.stdout.rows : 25;
	public columns : number =  process.stdout.columns ? process.stdout.columns : 80;

	/**
	 * Register itself for terminal size changes.
	 */	
	constructor() {
		process.stdout.on("resize", this._storeSize);
	}
	
	_storeSize = () => {
		this.rows = process.stdout.rows ? process.stdout.rows : 25;
		this.columns =  process.stdout.columns ? process.stdout.columns : 80;
	}
}

