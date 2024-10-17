/**
 * Function Types (函數類型) & Generics (範型)
 * 
 */

{
	// function types.
	type MathFunc = (x: number, y: number) => number;

	const add: MathFunc = (x, y) => x + y;
	const subtract: MathFunc = (x, y) => x - y;
	
	console.log(`type: ${typeof add}, sum: ${add(5, 3)}`); // type: function, sum: 8
	console.log(`type: ${typeof subtract}, difference: ${subtract(10, 4)}`); // type: function, difference: 6
}


{
	// generics
	function identity<T>(arg: T): T {
		return arg;
	}

	const numberIdentity = identity<number>(42);
	const stringIdentity = identity<string>("Hello, 範型!");
	const booleanIdentity = identity<boolean>(true);

	console.log(`數字類型: ${numberIdentity}, 類型: ${typeof numberIdentity}`); // 數字類型: 42, 類型: number
	console.log(`字串類型: ${stringIdentity}, 類型: ${typeof stringIdentity}`); // 字串類型: Hello, 泛型!, 類型: string
	console.log(`布林類型: ${booleanIdentity}, 類型: ${typeof booleanIdentity}`); // 布林類型: true, 類型: boolean


	const a = 1111;

	if (typeof identity<number>(a) === 'number') {
		console.log('identity<number>(a) 的類型是 number');
	} else {
		console.log('identity<number>(a) 的類型不是 number'); // identity<number>(a) 的類型是 number
	}
}
