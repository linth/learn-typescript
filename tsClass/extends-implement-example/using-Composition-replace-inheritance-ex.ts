/**
 * 使用 composition 代替繼承
 * 
 * pros: 組合優於繼承, 是常見的設計原則, 避免深度繼承層次, 減少耦合, 並容易測試和擴展。
 * cons:
 */

{
	
	class GreetService {
		greet(): string {
			return 'Hello from GreetService';
		}
	}

	class A {
		private greetService = new GreetService();

		greet() {
			return this.greetService.greet() + ' and class A.';
		}
	}

	const gs = new GreetService();
	console.log(gs.greet());	// Hello from GreetService

	const instance = new A();
	console.log(instance.greet());	// Hello from GreetService and class A.
}
