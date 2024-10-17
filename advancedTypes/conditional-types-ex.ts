/**
 * Conditional Types (條件類型)
 * 
 * 
 */

import { result } from "lodash";
import { string } from "typescript-lodash";


{
	// 條件類型示例
	type Check<T> = T extends string ? '字串' : '非字串';

	// 使用示例
	type Result1 = Check<string>;  // 類型為 '字串'
	type Result2 = Check<number>;  // 類型為 '非字串'
	type Result3 = Check<boolean>; // 類型為 '非字串'

	// 實際應用
	function printType<T>(value: T): Check<T> {
		return typeof value === 'string' ? '字串' as Check<T> : '非字串' as Check<T>;
	}

	console.log(printType('你好')); // 輸出: 字串
	console.log(printType(123));   // 輸出: 非字串
	console.log(printType(true));  // 輸出: 非字串


	// chatgpt question:
	// 
	// 為什麼在這個例子中，'字串' 和 '非字串' 後面都需要 as Check<T>。
	// 1. 首先，讓我們回顧一下 Check<T> 的定義：
	// 2. 函數的返回類型被聲明為 Check<T>：
	// 現在，讓我們看看為什麼需要類型斷言： conditional-types-ex.ts
	// 需要使用 as Check<T> 的原因是：
	// TypeScript 無法在運行時確定 T 的具體類型。
	// 沒有類型斷言，TypeScript 只能推斷返回類型為 '字串' | '非字串'。
	// 但函數聲明的返回類型是 Check<T>，這是一個條件類型。
	// 
	// 如果我們不使用 as Check<T>，TypeScript 編譯器可能會報錯，因為 '字串' | '非字串' 類型不能直接賦值給 Check<T> 類型。
	// 使用 as Check<T> 告訴編譯器："相信我，這個值符合 Check<T> 類型"。這樣可以確保返回值的類型與函數聲明的返回類型一致。
	// 總結：
	// 是的，在這種情況下，'字串' 和 '非字串' 後面都需要 as Check<T>。
	// 這是因為我們需要將具體的字符串值轉換為條件類型 Check<T>。
}


{
	
	type CheckString<T> = T extends string ? 'is string' : 'not string';

	function printType<T>(value: T): CheckString<T> {
		return typeof value === 'string' ? 'is string' as CheckString<T> : 'not string' as CheckString<T>;
	}

	console.log(printType(33)); // not string
	console.log(printType('hello world'));	// is string
	
}


{
	// code refactory for 'as CheckString<T>', 'as Check<T>' (重構)
	type Check<T> = T extends string ? 'is string' : 'not string';

	function printType<T>(value: T): Check<T> {
		const result: 'is string' | 'not string' = typeof value === string ? 'is string' : 'not string';
		return result as Check<T>;
	}

}