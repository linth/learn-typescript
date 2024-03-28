import { FileHandler } from "./FileHandler";
import { ITask } from "./interface/ITask";
import { ParserHandler } from "./ParserHandler";
import { TaskHandler } from "./TaskHandler";

/**
 * 專注新增任務與任務行為
 */
export class OTask implements ITask {
  /**
   * 可建立一些functions, 方便後續直接使用此class的功能進行串接。
   */

  exceute(): void {
    console.log('OTask executed.');    
    
    const p = new ParserHandler();
    const f = new FileHandler();
    
    const arr: ITask[] = [];
    arr.push(f);
    arr.push(p);
    const t = new TaskHandler(arr);
  }
}


// class OTask implements ITask {

//   /**
//    * 讀取excel文件
//    * @param filePath 
//    * @returns 
//    */
//   public loadFile(filePath: string): this {
//     console.log('loadFile');
    
//     return this;
//   }

//   /**
//    * 處理excel資料
//    * @returns 
//    */
//   public processData(): this {
//     return this;
//   }

//   /**
//    * 將資料匯出到文件
//    * @param exportFilePath 
//    */
//   public exportToFile(exportFilePath: string): this {
//     return this;
//   }

//   public exceute(): void {
    
//   }
// }


/**
 * 桃園億光的任務
 */
class EverlightTask extends OTask {

}
