/**
 * SRP for handler builder.
 */

import { Column } from "../../types/excelType/column-data";
import path from "path";

// define a builder to set up handler class.
export class ExcelHandlerBuilder<T> {
	private headers: Column<T>[] = [];
	private data: T[] = [];
	private fileName: string;
	private filePath: string;
	
	constructor(fileName?: string, filePath?: string) {
		this.fileName = fileName || `new_excel-${Date.now()}`;
		this.filePath = filePath || path.join(`OExcel/example/${this.fileName}.xlsx`);
	}

	setHeaders(headers: Column<T>[]): this {
		this.headers = headers;
		return this;
	}

	setData(data: T[]): this {
		this.data = data;
		return this;
	}

	setFileName(fileName: string): this {
		this.fileName = fileName;
		return this;
	}

	setFilePath(filePath: string): this {
		this.filePath = filePath;
		return this;
	}

	build() {

	}
}