/**
 * Test for lifecycle.
 */

import { Lifecycle } from "./Lifecycle";

{
	class MyComponent extends Lifecycle {
		protected onInitialize(): void {
			console.log("MyComponent: Custom initialization logic.");
		}
	
		protected onStart(): void {
			console.log("MyComponent: Custom start logic.");
		}
	
		protected onStop(): void {
			console.log("MyComponent: Custom stop logic.");
		}
	
		protected onDestroy(): void {
			console.log("MyComponent: Custom destroy logic.");
		}
	}
	
	const component = new MyComponent();
	component.initialize();
	component.start();
	component.stop();
	component.destroy();
}


