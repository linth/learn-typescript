/**
 * union types (聯合類型) & keyof 觀念
 * 
 * 
 */

{
	let value: string | number;

	value = 1;
	console.log(typeof value); // number

	value = 'hello world.';
	console.log(typeof value); // string
	
}


{
	interface Person {
		name: string;
		age: number;
		email?: string;
	}

	type personKeys = keyof Person; // personKeys 為一個 type 的 key

	const p: Person = {
		name: 'george',
		age: 33,
		email: 'george@example.com',
	}

	function getProperty(p: Person, key: personKeys) {
		return p[key];
	}	

	console.log(getProperty(p, 'name')); // george
	console.log(getProperty(p, 'email')); // george@example.com
}

{
	// combine with keyof and union type.
	type Coordinate = {
		x: number;
		y: number;
	};

	type CoordinateKey = keyof Coordinate; // 'x' | 'y'

	function getCoordinate(p: Coordinate, key: CoordinateKey) {
		return p[key];
	}

	const p: Coordinate = {
		x: 10,
		y: 20
	};

	console.log(getCoordinate(p, 'x')); // 10
	console.log(getCoordinate(p, 'y')); // 20
}