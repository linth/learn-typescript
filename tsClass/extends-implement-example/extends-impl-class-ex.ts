/**
 * extends, implements, class example.
 * 
 */

{
	class A {
		greet() {
			console.log('Hello from A.');			
		}
	}

	class B extends A {
		// B繼承A, 並覆寫
		greet(): void {
			console.log('Hello from B.');
		}
	}

	interface C {
		greet(): void;
	}

	class D extends A implements C {
		greet(): void {
			console.log('Hello from A implementing C.');
		}
	}

	const instance = new B();
	instance.greet(); // Hello from B.

	const instance2 = new D(); 
	instance2.greet(); // Hello from A implementing C.
}