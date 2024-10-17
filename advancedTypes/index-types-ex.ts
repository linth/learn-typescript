/**
 * index types
 * 
 */

{
	type Index = 'a' | 'b' | 'c';
	type FromIndex = { 
		[k in Index]?: number 
	};

	// 示例
	const obj: FromIndex = { 
		a: 1, 
		b: 2 
	};

	console.log(obj.a); // 1
	console.log(obj.b); // 2
	console.log(obj.c); // undefined
}


{
	// [key: string]是全部類型, 如果屬性中有其他類型, 如: number, 則需要額外增加 [key: string]: string | number
	type Staff = {
		name: string,
		age: number,
		[key: string]: string | number,
	}

	let employee: Staff = {
		name: 'george',
		age: 33,
		position: 'engineer',
		department: 'IT'
	}

	console.log(employee.age);
	console.log(employee.department, employee.position);
}
