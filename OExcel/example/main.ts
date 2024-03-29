import { EverlightTask } from "./excelClassDesign/OTask";
import { FileHandler, OFile } from "./excelClassDesign/FileHandler";
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

  const elt = new EverlightTask()
    .exceute();
  const o = new OTask();
  o.exceute();

  console.log('-----');
  
  // TODO: 搬移到task部分
  // 設定OFile檔案
  const of = new OFile()
    .setFilePath('c:\\tmp')
    .setSaveFilePath('d:\\tmp');
  // 設定FileHandler
  const f = new FileHandler()
    .setOFile(of)
    .getOFile()?.getFilePath()
    .getSaveFilePath();
}


main()