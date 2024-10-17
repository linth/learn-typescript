

{
	const a: number[] = [1, 2, 3, 4, 5];
	
  const sum: number = a.reduce((acc, n) => {
		console.log(`acc: ${acc}`);
		console.log(`n: ${n}`);
		return acc + n
	}, 100);

	console.log(sum);	
}