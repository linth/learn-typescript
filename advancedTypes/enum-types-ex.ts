/**
 * enum Types (枚舉類型)
 * 
 */

{
	enum Color {
		Red, 
		Green,
		Blue,
	}

	console.log(Color.Blue); // 2

	enum AdvancedColor {
		Red = 'red',
		Green = 'green',
		Blue = 'blue',
	}

	console.log(AdvancedColor.Blue); // blue
	
}