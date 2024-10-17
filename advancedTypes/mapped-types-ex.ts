/**
 * Mapped Types
 * 
 * 
 */

{
	type Readonly<T> = {
		readonly [P in keyof T]: T[P];
	};

	
}