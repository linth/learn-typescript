// header
export type Column<T> = {
	header: string;
	key: Extract<keyof T, string>;
	// TODO: set a default value.
	width: number; // the width of cell. 
}

// data 
export type Data<T> = T;