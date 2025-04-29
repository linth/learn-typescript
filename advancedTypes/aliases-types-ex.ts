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


{
	// 職員
	type Staff = {
		id: string;
		name: string;
		age: number;
	}

	// 職員1, 職員2, 職員3
	const s1: Staff = {
		id: 's1',
		name: 'ssss1',
		age: 22,
	}

	const s2: Staff = {
		id: 's2',
		name: 'ssss2',
		age: 12,
	}

	const s3: Staff = {
		id: 's3',
		name: 'ssss3',
		age: 56,
	}

	console.log(`id: ${s1.id}, name: ${s1.name}, age: ${s1.age}`);
	console.log(`id: ${s2.id}, name: ${s2.name}, age: ${s2.age}`);
	console.log(`id: ${s3.id}, name: ${s3.name}, age: ${s3.age}`);
	
	let arr = new Array<Staff>;
	arr.push(s1);
	arr.push(s2);
	arr.push(s3);

	console.log(arr);
}