/**
 * abstract, extends, class example.
 * 
 */

{
	abstract class C {
		// 具體實現的方法
		commonMethod(): string {
			return 'This is a common method from class C';
		}

		// 抽象方法, 需由sub-class實現
		abstract greet(): string;
	}

	class B extends C {
		greet(): string {
			return 'Hello from class B';
		}
	}

	class A extends B {

	}

	const instance = new A();
	console.log(instance.commonMethod()); // This is a common method from class C
	console.log(instance.greet()); // Hello from class B
}