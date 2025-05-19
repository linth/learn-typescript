import { Workbook, Worksheet } from "exceljs";
import { ConcreteHandler } from "./interface/handler/handler.interface";
import { AbsExcelHandler } from "./interface/handler/handler.excel.interface";
import { Column } from "./types/excelType/column-data";


export class DataHander extends ConcreteHandler {
	// data header.
}


export class DataBody extends ConcreteHandler {
	// data body.
} 


export class OHandler extends ConcreteHandler {

}


/**
 * 要減少在繼承 AbsExcelHandler 的每個新 ConcreteExcelHandler 類別中重複撰寫 
 * constructor 和其參數，可以在父類別 AbsExcelHandler 中實現工廠方法。
 * 這樣子類別就不需要自定義 constructor，只需要透過工廠方法來建立物件。
 * 
 * 	- 方法 1：使用靜態工廠方法
 * 	- 方法 2：在 ConcreteExcelHandler 中省略 Constructor
 */
export class ConcreteExcelHandler<T> extends AbsExcelHandler<T> {
	
	// 使用靜態工廠方法
	// static createInstance<T>(wb: Workbook, ws: Worksheet, fileName?: string, filePath?: string): AbsExcelHandler<T> {
	// 	return new ConcreteExcelHandler(wb, ws, fileName, filePath);
	// }

	// 省略 constructor
	// constructor(wb: Workbook, ws: Worksheet, fileName?: string, filePath?: string) {
	// 	super(wb, ws, fileName, filePath);
	// }

	setHanders(headers: Column<T>[]): this {
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

	writeDate(): this {
		if (this.headers) this.ws.columns = this.headers;
		if (this.data) this.ws.addRows(this.data);
		return this;
	}
}
