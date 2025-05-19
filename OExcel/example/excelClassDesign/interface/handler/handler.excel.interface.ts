import { Workbook, Worksheet } from "exceljs";
import { Column } from "../../types/excelType/column-data";
import { IHandler } from "./handler.interface";
import path from "path";



export interface ExcelHandlerOption<T> {
	headers?: Column<T>[];
	data?: T[];
	fileName?: string;
	filePath?: string;
}


/**
 * ! 這實作方式似乎會連帶修改其他部分。
 */
// export abstract class ExcelHeaderHandlerOption<T> implements ExcelHandlerOption<T> {
// 	/**
// 	 * handle excel header of ExcelHandlerOption.
// 	 */
// }

// export abstract class ExcelDataHandlerOption<T> implements ExcelHandlerOption<T> {
// 	/**
// 	 * handle excel data of ExcelHandlerOption.
// 	 */
// }


export interface IExcelHandler<T> extends IHandler {
	
}


export abstract class AbsExcelHandler<T> implements IExcelHandler<T> {
	protected wb: Workbook;
	protected ws: Worksheet;
	protected headers: Column<T>[] = [];
	protected data: T[] = [];
	protected fileName: string;
	protected filePath: string;

	constructor(wb: Workbook, ws: Worksheet, fileName?: string, filePath?: string) {
		this.wb = wb;
		this.ws = ws;
		this.fileName = fileName || `new_excel-${Date.now()}`;
		this.filePath = filePath || path.join(`OExcel/example/${this.fileName}.xlsx`);
	}

	// set up parameters 
	configure(options: ExcelHandlerOption<T>): this {
		if (options.headers) this.headers = options.headers;
		if (options.data) this.data = options.data;
		if (options.fileName) this.fileName = options.fileName;
		if (options.filePath) this.filePath = options.filePath;
		return this;
	}

	/** for builder */
	abstract setHanders(headers: Column<T>[]): this;
	abstract setData(data: T[]): this;
	abstract setFileName(fileName: string): this;
	abstract setFilePath(filePath: string): this;
	abstract writeDate(): this;
	// abstract execute(): Promise<void>;

	async save(): Promise<void> {
		await this.wb.xlsx.writeFile(this.filePath);
	}
}

