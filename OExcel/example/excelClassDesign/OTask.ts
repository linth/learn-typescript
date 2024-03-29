import { ExcelFileHnadler } from "./FileHandler";
import { ITask } from "./interface/ITask";
import { ParserHandler } from "./ParserHandler";
import { TaskHandler } from "./TaskHandler";

/**
 * 專注新增任務與任務行為
 */
export class OTask implements ITask {
  ph?: ParserHandler;
  efh?: ExcelFileHnadler;

  /**
   * 可建立一些functions, 方便後續直接使用此class的功能進行串接。
   */
  createParserHandler(): this {
    this.ph = new ParserHandler();
    return this;
  }

  createExcelFileHnadler(): this {
    this.efh = new ExcelFileHnadler();
    return this;
  }

  exceute(): void {
    // console.log('OTask executed.');

    // const p = new ParserHandler();
    // const f = new FileHandler();
    
    // const arr: ITask[] = [];
    // arr.push(f);
    // arr.push(p);
    // const t = new TaskHandler(arr);
  }
}

/**
 * 桃園億光的任務
 */
export class EverlightTask extends OTask {

  exceute(): void {
    console.log('EverlightTask executed.');
    
    // const p = new ParserHandler();
    // const f = new ExcelFileHnadler();
    
    // const arr: ITask[] = [];
    // arr.push(this.createExcelFileHnadler());
    // arr.push(this.createParserHandler());

    /**
     * 新增任務, 並確認順序
     */
    const tc = new TasksContainer()
      .add(this.createExcelFileHnadler())
      .add(this.createParserHandler());

    const t = new TaskHandler(tc.tasks);
  }
}

export class TasksContainer {
  tasks: ITask[] = [];

  add(t: ITask): this {
    this.tasks.push(t);
    return this;
  }
}

export class CustomTask implements ITask {
  
  exceute(): void {
      
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

