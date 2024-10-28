import { Workbook } from "exceljs";
import { Column } from "./excelClassDesign/types/excelType/column-data";
import { ConcreteExcelTask } from "./excelClassDesign/OTask-code-refactory";
import * as readline from 'readline';
// import { Column, Data, OExcelConcreteTask, OTask } from "./excelClassDesign/OTask";


// declare global {
//   interface Array<T> {
//     pushChain(...items: T[]): this;
//   }  
// }

// Array.prototype.pushChain = function<T>(...items: T[]): this {
//   this.push(...items);
//   return this;
// };

async function main(showLog: boolean = false) {
  /**
   * 流程: 
   *  - Generater data -> llm
   *  - 封裝 header, data -> type, data structure.
   *  - 產生 excel
   */

  // parameters
  const sheetName = 'My Sheet';
  const excelFileName = 'george-doc';
  const excelFilePath = ''; // OExcel/example/${excelFileName}.xlsx


  // excel initial.
  const wb = new Workbook();
  const ws = wb.addWorksheet(sheetName);

  // // add header. 
  // // TODO: different data type, custom data type, 產生data header (給欄位名稱/順序)
  // // TODO: using ollama
  // const header: Column[] = [
  //   { header: 'Name', key: 'name', width: 20 },
  //   { header: 'Age', key: 'age', width: 10 },
  //   { header: 'Email', key: 'email', width: 30 }
  // ];

  // // add data.
  // // TODO: different data stucture, 產生data header (給欄位名稱/順序)
  // // TODO: using ollama
  // const data: Data[] = [
  //   { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  //   { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' }
  // ];

  // tasks.
  // const o = new OTask(wb, ws)
  //   .setHeader(header)
  //   .setData(data)
  //   .excute();

  // const fileName = 'haha'; // if we don't set it up, and the default value is `new_excel-${Date.now()}`.
  // const oect = new OExcelConcreteTask(wb, ws, fileName)
  //   .setHeader(header)
  //   .setData(data)
  //   .excute();


  /**
   * data structure
   *  - data type
   *  - data structure for header, i.e., [{}, {}, {}, {}]
   *  - data structure for data, i.e., [{}, {}, {}, {}]
   */

  // define data type
  interface ExampleData {
    name: string;
    age: number;
    email: string;
  }

  // define headers
	const h: Column<ExampleData>[] = [
		{ header: 'name', key: 'name', width: 20 },
		{ header: 'age', key: 'age', width: 10 },
		{ header: 'email', key: 'email', width: 30 }
	];

	// define data.
	const d: ExampleData[] = [
		{ name: 'zhangsan', age: 30, email: 'zhangsan@example.com' },
		{ name: 'lisi', age: 25, email: 'lisi@example.com' },
		{ name: 'wangwu', age: 35, email: 'wangwu@example.com' }
	];

  const excelTask = new ConcreteExcelTask<ExampleData>(wb, ws, excelFileName)
    .configure({
      headers: h,
      data: d
    })
    .execute()
		.then(() => console.log('Excel document generating successfully ....'))
		.catch(error => console.error('Generate Excel document something wrong:', error));
}


main()

