import { Column } from "../types/excelType/column-data";


// 定義一個通用的任務介面
export interface IExcelTask<T> {
	execute(): Promise<void>;
	setHeader(headers: Column<T>[]): this;
	setData(data: T[]): this;
	save(): Promise<void>;
}


// define a generic interface task for code refactory.
export interface ReFIExcelTask<T> {
	execute(): Promise<void>;
	save(): Promise<void>;

	//! 把 setup的部分拿掉, 使用另個 interface 來提供設定, 更簡化。
	// setHeader(headers: Column<T>[]): this;
	// setData(data: T[]): this;
}