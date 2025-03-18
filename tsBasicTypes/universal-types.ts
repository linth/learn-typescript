/**
 * 通用型別 (universal types)
 * 	- any: 可以是任何型別，失去 TypeScript 型別保護
 * 	- unknown: 可以是任何型別，但不能直接使用，需先進行型別縮小 (type narrowing)
 * 	- void: 無回傳值的函式
 * 	- never: 永遠不會有返回值的函式（例如：錯誤拋出）
 * 
 */

{
	let anything: any = 'hello'; // 允許任何型別
	console.log(anything, typeof anything); // hello string
	anything = 42;
	console.log(anything, typeof anything); // 42 number
	anything = true;
	console.log(anything, typeof anything); // true boolean


	// unknown example.
	let unknownVar: unknown = 'hello';
	if (typeof unknownVar === 'string') {
		console.log(unknownVar.toUpperCase()); // HELLO
	}

	// void
	function logMessage(): void {
		console.log('Logging...');		
	}

	// never
	function throwError(): never {
		throw new Error('something went wrong!');
	}

	logMessage();
	// throwError();
}


{
	/**
	 * never 表示程式執行到某個點後 永遠不會繼續執行或返回結果。
	 * 常見於 錯誤處理（throw new Error） 或 無窮迴圈（while(true)）。
	 */

	// 錯誤處理（throw new Error）
	function throwErrorFunc(message: string): never {
		throw new Error(message); // 直接拋出錯誤，function不會返回
	}

	// throwErrorFunc('something went wrong!'); // 呼叫後，程式會崩潰!!


	// 無窮迴圈（while(true)
	function infiniteLoop(): never {
		while (true) {	// 這裡是一個無限迴圈
			console.log('Running...');			
		}
	}
}

{
	type Status = 'success' | 'error' | 'loading';

	function checkStatus(status: Status) {
		switch (status) {
			case 'success':
				console.log('success!');
				break;
			case 'error':
				console.log('error!');
				break;
			case 'loading':
				console.log('loading...');
				break;
			default:
				const unexpected: never = status; // typescript 會報錯
				throw new Error(`Unexpected status: ${unexpected}`);
		}
	}

	// ✅ never 代表 函式永遠不會有返回值
	// ✅ 常見於 錯誤拋出 (throw Error()) 或 無窮迴圈 (while(true))
	// ✅ never 與 void 不同，void 是「沒有回傳值」，但 never 是「不可能回傳」
	// ✅ 可用來檢查 不應該發生的情況（TypeScript 型別保護）
}