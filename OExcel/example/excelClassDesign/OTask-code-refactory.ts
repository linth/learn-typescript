import { Workbook, Worksheet } from "exceljs";
import path from "path";
import { Column } from "./types/excelType/column-data";
import { IExcelTask } from "./interface/excelTask.interface";


export abstract class AbsExcelTask<T> implements IExcelTask<T> {
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

	abstract execute(): Promise<void>;

	setHeader(headers: Column<T>[]): this {
		this.headers = headers;
		return this;
	}

	setData(data: T[]): this {
		this.data = data;
		return this;
	}

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



