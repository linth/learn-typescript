// import { JsonFileHandler } from "./FileHandler";
import { ExcelFileHnadler } from "./FileHandler";
import { ITask } from "./interface/ITask";
import { OTask } from "./OTask";
import { ParserHandler } from "./ParserHandler";


/**
 * 專注任務的串接 chain function: 請命名 xxxxxxHandler
 * 
 * taskhandler -> execute()
 * [task1, task2, ...]
 * 
 */
export class TaskHandler {
  public tasks: ITask[] = [];
  private otask: OTask;

  constructor() {
    // this.tasks = tasks;
    this.otask = new OTask();
  }

  add(t: ITask): this {
    this.tasks.push(t);
    return this;
  }
  
  createExcelFileHnadlerAndPushToTasks(): this {
    this.otask.efh = new ExcelFileHnadler();
    this.add(this.otask.efh);
    return this;
  }

  createParserHandlerAndPushToTasks(): this {
    this.otask.ph = new ParserHandler();
    this.add(this.otask.ph);
    return this;
  }

  exceute(): void {
    for (const task of this.tasks) {
      try {
        task.exceute();
      } catch (error) {
        console.error(`Error executing task: ${error}`);
        // 在出現錯誤時可以採取適當的措施，例如跳過當前任務並繼續執行後續的任務
        // 或者停止執行後續的任務，根據實際情況決定
      }
    }
  }
}


// export class TasksContainer {
//   tasks: ITask[] = [];
//   otask: OTask;

//   constructor() {
//     this.otask = new OTask();
//   }

//   add(t: ITask): this {
//     this.tasks.push(t);
//     return this;
//   }

//   addHandler(t: ITask): this {
//     this.tasks.push(t);
//     return this;
//   }

//   createExcelFileHnadlerAndPushToTasks(): this {
//     this.otask.efh = new ExcelFileHnadler();
//     this.addHandler(this.otask.efh);
//     return this;
//   }

//   createParserHandlerAndPushToTasks(): this {
//     this.otask.ph = new ParserHandler();
//     this.addHandler(this.otask.ph);
//     return this;
//   }
// }


/**
 * 桃園億光任務流處理
 */
class EverlightTaskHandler extends TaskHandler {
  
}


/**
 * 遠傳任務流處理
 */
class FETTaskHandler extends TaskHandler {

}