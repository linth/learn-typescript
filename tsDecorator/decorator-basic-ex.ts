
/**
 * Basic decorator example.
 * 	- class decorator (類裝飾器)
 * 	- attribute, property decorator: 利用decorator function來修改屬性的行為 (屬性裝飾器)
 * 	- function decorator (方法裝飾器)
 * 	- parameter decorator (參數裝飾器)
 * 
 */
{
	// class decorator (類裝飾器)
	function LogClass(target: Function) {
		console.log(`Class  ${target.name} is created.`);		
	}

	@LogClass
	class User {
		constructor(public name: string) {}
	}

	const user = new User('george');
	console.log(`user name: ${user.name}`);	
}

{
	// attribute, property decorator (屬性裝飾器)
	function LogProperty(target: any, propertyKey: string): void {
		let value = target[propertyKey];

		const getter = () => {
			console.log(`Getting value: ${value}`);
			return value;
		}

		// TODO: need to check.
		// Object.defineProperties(target, propertyKey, {
		// 	get: getter,
		// 	set: setter,
		// 	enumerable: true,
		// 	configurable: true
		// });
	}

	class User {
		@LogProperty
		public email: string;

		constructor(email: string) {
			this.email = email;
		}
	}

	const user = new User('george@example.com');
	user.email = 'haha@example.com'; // trigger the setter.
	console.log(user.email);	// trigger the getter.
}

{
	// function decorator (方法裝飾器)
	// 方法裝飾器是一個函數，接受三個參數：目標對象、方法名稱和描述符。它可以用來修改方法的行為。
	function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;

		descriptor.value = function (...args: any[]) {
			console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
			return originalMethod.apply(this, args);
		};
	}

	class User {
		constructor(public name: string) {}

		@LogMethod
		greet(greeting: string) {
			return `${greeting}, ${this.name}!`;
		}
	}

	const user = new User('george');
	console.log(user.greet('hello')); // trigger LogMethod decorator.
}


{
	// parameter decorator (參數裝飾器)
	// 參數裝飾器是一個函數，接受三個參數：目標對象、方法名稱和參數索引。它可以用來修改方法參數的行為。
	function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
		console.log(`target: ${JSON.stringify(target)}`);
		console.log(`Parameter at index ${parameterIndex} in method ${propertyKey} is decorated.`);
	}

	class User {
		constructor(public name: string) {}

		greet(
			@LogParameter
			greeting: string
		) {
			return `${greeting}, ${this.name}!`;
		}
	}

	const user = new User('george');
	console.log(user.greet('hello')); // trigger LogParameter decorator.
}
