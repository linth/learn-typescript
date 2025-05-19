/**
 * 
 * 
 * 
 */


import { Workbook, Worksheet } from "exceljs";
import { AbsExcelHandler } from "./interface/handler/handler.excel.interface";
import { ConcreteExcelHandler } from "./OHandler";
import { Column } from "./types/excelType/column-data";



export class NewConcreteExcelTask<T> {
	private handler: AbsExcelHandler<T>; // excel handler.
	// private otherHandler: AbsExcelHandler<T>; // other handler.

	constructor(wb: Workbook, ws: Worksheet) {
		this.handler = new ConcreteExcelHandler<T>(wb, ws);
	}

	execute(h: Column<T>[], d: T[], excelFileName?: string, filePath?: string): void {
		console.log(`excelFileName: ${excelFileName}`);
		
		if (excelFileName) this.handler.setFileName(excelFileName);
		if (filePath) this.handler.setFilePath(filePath);

		// console.log(`${this.handler}`);
		
		this.handler
			.setHanders(h)
			.setData(d)
			.writeDate()
			.save();
	}

	// execute(h?:Column<T>[], d?: T[]): Promise<void> {
	// 	return this.excelHandler.configure({
	// 		headers: h,
	// 		data: d,
	// 	}).writeDate().save();
	// }
}