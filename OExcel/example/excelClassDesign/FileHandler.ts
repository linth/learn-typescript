/**
 * definition for handling file, i.e., read, write, set up the path of file, ..., etc.
 * 
 */
import * as fs from 'fs';
import { ITask } from './interface/ITask';


/**
 * 處理檔案的hander流程
 */
export class FileHandler implements ITask {
  // private oFile: OFile;

  constructor() { // oFile: OFile
    console.log('call FileHandler constructor().');
    // this.oFile = oFile;
  }

  exceute(): void {
    
  }

  // TODO: 增加後續的handler動作
}

/**
 * XML handler
 */
class XmlFileHandler extends FileHandler {
  
}

/**
 * JSON handler
 */
class JSONFileHandler extends FileHandler {

}

/**
 * CSV handler
 */
class CSVFileHandler extends FileHandler {

}

/**
 * TXT handler
 */
class TxtFileHandler extends FileHandler {

}


// export class JsonFileHandler extends FileHandler {
//   constructor(filePath: string) {
//     super(filePath);
//     return this;
//   }

//   readData(): void {
//     fs.readFile(this.filePath, 'utf-8', (err, data) => {
//       if (err) {
//         console.log('Error reading JSON file: ', err);
//         return;
//       }
  
//       try {
//         const jsonData = JSON.parse(data);
//         console.log(jsonData);
//       } catch (error) {
//         console.log('Error parsing JSON:', error);
//       }      
//     })
//   }

//   writeData(): void {
//     //TODO: write data.
//   }
// }