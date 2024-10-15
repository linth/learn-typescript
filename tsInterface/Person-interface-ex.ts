/**
 * Person interface example.
 * 
 */

{
	interface Person {
		name: string;
		bool?: boolean;
		age?: number;
		readonly timestamp: number;
		readonly arr: ReadonlyArray<number>; 
	}

	let g: Person = {
		name: 'george',
		bool: true,
		timestamp: + new Date(), // 設定只能讀取
		arr: [1, 2, 3],
	};

	let g2: Person = {
		name: 'george',
		age: 33,
		timestamp: - new Date(),
		arr: [11, 2, 45, 100],
	}

	console.log(g);
	console.log(g2);
}