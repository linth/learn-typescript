import { Column } from "../types/excelType/column-data";


// 定義一個通用的任務介面
export interface IExcelTask<T> {
	execute(): Promise<void>;
	setHeader(headers: Column<T>[]): this;
	setData(data: T[]): this;
	save(): Promise<void>;
}