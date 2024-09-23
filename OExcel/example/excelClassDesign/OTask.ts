import { Workbook, Worksheet } from "exceljs";
import { ITask } from "./interface/task.interface";
import path from "path";

// data type: json for worksheet's columns.
export type Column = {
	header: string;
	key: string;
	width: number;
}

export type Data = {
	name: string;
	age: number;
	email: string;
}

// type Column<T> = {
// 	header: string;
// 	key: keyof T;
// 	width: number;
// };


// 專注新增任務與任務行為
export abstract class AbsTask implements ITask {
	excute(): void {}
}


/**
 * excel tasks.
 */
export abstract class AbsExcelTask implements ITask {
	wb: Workbook;
	ws: Worksheet;
	header?: Column[];
	data?: Data[];

	constructor(wb: Workbook, ws: Worksheet) {
		this.wb = wb;
		this.ws = ws;
	}

	setHeader(h: Column[]): this {
		this.header = h;
		return this;
	}

	setData(data: Data[]): this {
		this.data = data;
		return this;
	}

	gen_crud(): void {} // task: generate crud tasks.
	excute(): void {} // empty excute task.
}

export class OTask extends AbsExcelTask {
	fileName: string;
	filePath: string;
	saveFilePath?: string;
	samePath?: boolean = true;

	/**
	 * 絕對路徑: __dirname
	 * 絕對路徑 + 檔案名稱: __filename
	 */

	constructor(wb: Workbook, ws: Worksheet, fn?: string, fp?: string) {
		super(wb, ws);
		this.fileName = fn || `myWorkbook-${Date.now()}`;
		this.filePath = fp || path.join(`OExcel/example/${this.fileName}.xlsx`);
	}

	save() {		
		this.wb.xlsx.writeFile(this.filePath)
		.then(() => {
			console.log('Workbook saved successfully!');
		})
		.catch((error) => {
			console.log('Error saving workbook:', error);
		})
	}

	excute(): void {
		// add header to the worksheet (headers)
		if (this.header) {
			this.ws.columns = this.header;
		}

		// add data to the worksheet (data)
		if (this.data) {
			for (let i=0; i<this.data.length; i++) {
				this.ws.addRow(this.data[i]);
			}
		}

		this.save();
	}
}