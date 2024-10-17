

{
	
	function checkNumberIsEqualLargerLessZero(a: number) {
		if (a > 0) {
			console.log(`大於 0`);			
		} else if (a === 0) {
			console.log(`等於 0`);			
		} else {
			console.log(`小於 0`);			
		}
	}
	
	// test function.
	checkNumberIsEqualLargerLessZero(10);
	checkNumberIsEqualLargerLessZero(0);
	checkNumberIsEqualLargerLessZero(-1);
}