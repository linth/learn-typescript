


export class Lifecycle {
	private isInitialized = false;
	private isStarted = false;

	constructor() {}

	// init
	public initialize(): void {
		if (!this.isInitialized) {
			console.log("Initializing...");
			this.onInitialize();
			this.isInitialized = true;
		} else {
			console.warn("Already initialized!");
		}
	}

	// start
	public start(): void {
		if (this.isInitialized && !this.isStarted) {
			console.log("Starting...");
			this.onStart();
			this.isStarted = true;
		} else if (!this.isInitialized) {
			console.warn("Cannot start before initialization!");
		} else {
			console.warn("Already started!");
		}
	}

	// stop
	public stop(): void {
		if (this.isStarted) {
			console.log("Stopping...");
			this.onStop();
			this.isStarted = false;
		} else {
			console.warn("Cannot stop before starting!");
		}
	}

	// destroy
	public destroy(): void {
		if (this.isInitialized) {
			if (this.isStarted) {
				this.stop(); // 確保停止再銷毀
			}
			console.log("Destroying...");
			this.onDestroy();
			this.isInitialized = false;
		} else {
			console.warn("Cannot destroy before initialization!");
		}
	}


	// provide sub-class to override it.
	protected onInitialize(): void {
		// 可在子類別中實作初始化邏輯
	}

	protected onStart(): void {
		// 可在子類別中實作啟動邏輯
	}

	protected onStop(): void {
		// 可在子類別中實作停止邏輯
	}

	protected onDestroy(): void {
		// 可在子類別中實作銷毀邏輯
	}
}


