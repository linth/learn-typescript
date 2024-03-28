import { FileHandler } from "./excelClassDesign/FileHandler";
import { ITask } from "./excelClassDesign/interface/ITask";
import { OTask } from "./excelClassDesign/OTask";
import { ParserHandler } from "./excelClassDesign/ParserHandler";
import { TaskHandler } from "./excelClassDesign/TaskHandler";


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
  // let isShowLog: boolean = showLog;

  /**
   * 抓取資料來源
   */
  // const result = new JsonParser('./OExcel/example/example.json')
  // .getFullData();

  // if (isShowLog) {
  //   console.log(result);
  // }

  // const JasonData = new HandleTask()
  // .getJasonData();
  // console.log('JasonData', JasonData);

  const o = new OTask();
  o.exceute();

}


main()