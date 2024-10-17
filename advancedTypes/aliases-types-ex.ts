/**
 * Type Aliases (類型別名)
 * 
 */

{
	type Point = {
		x: number;
		y: number;
	};


	const f: Point = {
		x: 100,
		y: 100,
	}

	// error case:
	// const f2: Point = {
	// 	x: 'hi',
	// 	y: '11',
	// }

	console.log(f.x, f.y); // 100 100	
}