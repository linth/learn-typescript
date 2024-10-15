/**
 * Symbol example.
 * 	- 唯一性：每個 Symbol 值都是唯一的，即使使用相同的描述字符串創建多個 Symbol 也不會相等。
 *  - 不可變性：Symbol 一旦創建就無法改變。
 * 	- 用於對象屬性：可以用作對象的鍵，這樣可以避免與其他屬性發生衝突。
 * 
 */

{	
	let sym1 = Symbol();
	let sym2 = Symbol("foo");
	let sym3 = Symbol("foo");

	console.log(sym2); // Symbol(foo)
	console.log(sym3); // Symbol(foo)

	console.log(sym2 === sym3); // 輸出: false
}


{
	// 使用 Symbol 作為對象屬性: Symbol 可以用來定義對象的屬性，這樣可以確保該屬性不會被其他代碼意外覆蓋

	const mySymbol = Symbol('mySymbol');
	const obj = {
		[mySymbol]: 'This is a unique value.'
	};

	console.log(obj[mySymbol]); // This is a unique value.
}


// unique symbol
// TypeScript 還引入了 unique symbol 類型，這是一種特殊的 Symbol 類型，只能與 const 聲明或只讀屬性一起使用。這提供了更嚴格的唯一性和類型安全：
declare const uniqueSym: unique symbol;

const anotherSym: typeof uniqueSym = uniqueSym; // correct 
// const wrongSym: typeof uniqueSym = Symbol(); // wrong: 不能將新創建的 Symbol 賦值給 unique symbol

