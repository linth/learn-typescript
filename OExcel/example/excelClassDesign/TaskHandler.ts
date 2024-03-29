// import { JsonFileHandler } from "./FileHandler";
import { ITask } from "./interface/ITask";



/**
 * 專注任務的串接 chain function: 請命名 xxxxxxHandler
 * 
 * taskhandler -> execute()
 * [task1, task2, ...]
 * 
 */
export class TaskHandler {
  private tasks: ITask[];

  constructor(tasks: ITask[]) {
    this.tasks = tasks;
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