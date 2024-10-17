

{

	const array = [1, 2, 3, 4, 4, 5];
  const firstGreaterThanThree = array.find(n => n >= 3);
  
	console.log(firstGreaterThanThree); // 4  //! 當如果錯誤, 後面就不會執行

	// 範例1：找到第一個偶數
	const findFirstEven = array.find(n => n % 2 === 0);
	console.log('第一個偶數：', findFirstEven); // 2

	// 範例2：找到第一個大於3的數
	const findFirstGreaterThanThree = array.find(n => n > 3);
	console.log('第一個大於3的數：', findFirstGreaterThanThree); // 4

	// 範例3：找到第一個是5的倍數的數
	const findFirstMultipleOfFive = array.find(n => n % 5 === 0);
	console.log('第一個是5的倍數的數：', findFirstMultipleOfFive); // 5

	// 測試
	const testArray = [10, 20, 30, 40, 50];
	
	// 測試1：找到第一個大於25的數
	console.log('測試1結果：', testArray.find(n => n > 25)); // 30

	// 測試2：找到第一個小於15的數
	console.log('測試2結果：', testArray.find(n => n < 15)); // 10

	// 測試3：找到第一個是100的倍數的數（不存在）
	console.log('測試3結果：', testArray.find(n => n % 100 === 0)); // undefined
}