/**
 * 基本型別 (primitive types)
 * 	- string: 字串
 * 	- number: 數字 (支援 int、float、bigint)
 * 	- boolean:布林值 (true / false)
 * 	- symbol: ES6 Symbol
 * 	- null: 空值
 * 	- undefined: 未定義
 */

{
	let str: string = "TypeScript";
	let num: number = 42;
	let bool: boolean = true;

	// let bigNum: bigint = 9007199254740991n;  // 使用 `n` 表示 BigInt
	let uniqueId: symbol = Symbol("id");

	let emptyValue: null = null;
	let notAssigned: undefined = undefined;

}