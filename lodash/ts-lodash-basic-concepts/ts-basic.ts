/**
 * type 可以運用在幾個情境:
 * 	- if/else
 * 	- string or tuple 新增/修改/刪除
 * 	- and & or & not 
 * 	- 多條件下的 and & or & not 
 * 	- 判斷相等 ==, === (IsEqual, toString, ..., etc.)
 * 	- for, while, do...while
 * 	- 兩數相加/相減, 比較大小
 * 	- js封裝工具類型: stringify, getchars, split, getstringlength, charat, cibcat, includes, startswith, endswith, indexof, lastindexof, replace, replaceall, repeat, padstart, padend, trimleft, trim, touppercase, 
 * 
 * 
 * 可參考 tsBasicTypes 資料夾
 * 
 * Reference:
 * 	- https://juejin.cn/post/7061556434692997156
 */

{
	// type A = 1;
	// type B = 2;

	type A = 1;
	type B = 1;
	type C = 3;
	type D = 2;

	type Example = A extends B ? true : false; // true.
	type Example2 = C extends D ? true : false; // false.

	const n: Example = true;
	const n2: Example2 = false;
	
	console.log(n); // true
	console.log(n2); // false	
}

{
	// C means Condition.
	// type And<C1 extends boolean, C2 extends boolean> = C1 extends true ? C2 extends true
}

