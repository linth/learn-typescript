/**
 * Singleton + Lifecycle example
 * 
 */


class SingletonLifecycle {
	private static instance: SingletonLifecycle;
	private  isInitialized = false;

	private constructor() {}

	public static getInstance(): SingletonLifecycle {
		if (!SingletonLifecycle.instance) {
			SingletonLifecycle.instance = new SingletonLifecycle();
			SingletonLifecycle.instance.initialize();
		}
		return SingletonLifecycle.instance;
	}

	private initialize(): void {
		if (!this.isInitialized) {
			console.log("Singleton initializing...");
			this.isInitialized = true;
			// 其他初始化邏輯
		}
	}
}

{
	const singleton1 = SingletonLifecycle.getInstance();
	const singleton2 = SingletonLifecycle.getInstance();

	console.log(singleton1 === singleton2); // true.	
}