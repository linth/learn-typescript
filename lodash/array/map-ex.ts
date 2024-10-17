

{
	// map
	const a: any[] = [1, 2, 3, 4, 5, 'ha'];

	// 寫法1:
	const res = a.map( n => n*2);
	console.log('res', res); // res [ 2, 4, 6, 8, 10, NaN ]

	// 寫法2:
	const res2 = a.map( (n) => {
		return n*2;
	});
	console.log('res2', res2); // res2 [ 2, 4, 6, 8, 10, NaN ]	

	// 寫法3: 隱式返回
	const res3 = a.map( n => (n*2));
	console.log('res3', res3); // res3 [ 2, 4, 6, 8, 10, NaN ]
}
