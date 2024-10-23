/**
 * 如果為 object, 也可以使用 for ...of.
 * 
 * array
 * Array
 * 
 */

{
	const arr = [1, 2, 3, 4, 5];
	console.log(typeof arr); // object
	
	for (const item of arr) {
		console.log(item);	// 1, 2, 3, 4, 5	
	}
}

/**
 * 使用 Array.from()
 */
{
	function* infiniteSequence() {
		let i = 0;
		while (true) {
			yield i++;
		}
	}
	
	const numbers = Array.from(infiniteSequence(), x => x * x).slice(0, 5);
	console.log(numbers); // [0, 1, 4, 9, 16]
}