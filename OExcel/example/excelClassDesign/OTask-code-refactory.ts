import { Workbook, Worksheet } from "exceljs";
import path from "path";
import { Column } from "./types/excelType/column-data";
import { IExcelTask, ReFIExcelTask } from "./interface/excelTask.interface";


// Options Object: add additional options can provide the setting of excel.
interface ExcelTaskOption<T> {
	headers?: Column<T>[];
	data?: T[];
	fileName?: string;
	filePath?: string;
}


export abstract class AbsExcelTask<T> implements ReFIExcelTask<T> {
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
	configure(options: ExcelTaskOption<T>): this {
		if (options.headers) this.headers = options.headers;
		if (options.data) this.data = options.data;
		if (options.fileName) this.fileName = options.fileName;
		if (options.filePath) this.filePath = options.filePath;
		return this;
	}

	abstract execute(): Promise<void>;

	async save(): Promise<void> {
		await this.wb.xlsx.writeFile(this.filePath);
	}
}


// 具體的Excel任務實現範例
export class ConcreteExcelTask<T> extends AbsExcelTask<T> {
	async execute(): Promise<void> {
		this.ws.columns = this.headers;
		this.ws.addRows(this.data);
		await this.save();
	}
}



