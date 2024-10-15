/**
 * 使用 symbol 來處理 user 的案例
 * 
 * 
 */

{
	// 定義一個 Symbol 作為 password 的鍵
	const passwordSymbol = Symbol('password');

	class User {
		private [passwordSymbol]: string;

		constructor(password: string) {
			this[passwordSymbol] = password;
		}

		public getPassword(): string {
			return this[passwordSymbol];
		}
	}

	const user = new User('mySecretPassword');
	console.log(user.getPassword()); //	mySecretPassword
	console.log(user[passwordSymbol]); // 嘗試直接訪問 passwordSymbol 屬性
}


{
	// 確保唯一性
	// 因為每次創建 Symbol 時都會生成一個唯一的值，所以即使在不同的文件或模塊中使用相同的描述，這些 Symbol 仍然是不同的：

	const anotherPasswordSymbol = Symbol('password');

	class AnotherUser {
		private [anotherPasswordSymbol]: string;

		constructor(password: string) {
			this[anotherPasswordSymbol] = password;
		}

		public getPassword(): string {
			return this[anotherPasswordSymbol];
		}
	}

	const anotherUser = new AnotherUser('anotherSecret');
	console.log('anotherUser: ', anotherUser.getPassword()); // 
	
}
