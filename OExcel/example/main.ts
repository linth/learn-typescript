import { Workbook } from "exceljs";
import { Column, Data, OExcelConcreteTask, OTask } from "./excelClassDesign/OTask";


// declare global {
//   interface Array<T> {
//     pushChain(...items: T[]): this;
//   }  
// }

// Array.prototype.pushChain = function<T>(...items: T[]): this {
//   this.push(...items);
//   return this;
// };


function main(showLog: boolean = false) {
  // excel initial.
  const wb = new Workbook();
  const ws = wb.addWorksheet('My Sheet')

  // add header. 
  // TODO: different data type, custom data type, 產生data header (給欄位名稱/順序)
  // TODO: using ollama
  const header: Column[] = [
    { header: 'Name', key: 'name', width: 20 },
    { header: 'Age', key: 'age', width: 10 },
    { header: 'Email', key: 'email', width: 30 }
  ];

  // add data.
  // TODO: different data stucture, 產生data header (給欄位名稱/順序)
  // TODO: using ollama
  const data: Data[] = [
    { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' }
  ];

  // tasks.
  // const o = new OTask(wb, ws)
  //   .setHeader(header)
  //   .setData(data)
  //   .excute();

  const fileName = 'haha'; // if we don't set it up, and the default value is `new_excel-${Date.now()}`.
  const oect = new OExcelConcreteTask(wb, ws, fileName)
    .setHeader(header)
    .setData(data)
    .excute();
}


main()

