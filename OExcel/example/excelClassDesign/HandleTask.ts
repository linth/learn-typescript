/**
 * deal with several tasks.
 *  - HandleFile.
 *  - JasonParser.
 *  - HandleExcel.
 */
import { HandleJsonFile } from "./HandleFile";


export class HandleTask {
  getJasonData() {

    const data = new HandleJsonFile('./OExcel/example/example.json')
      .readData();
    // console.log('data', data);    
    console.log('data', data);    
  }
}
