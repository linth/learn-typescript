/**
 * definition for handling file, i.e., read, write, set up the path of file, ..., etc.
 * 
 */
import * as fs from 'fs';
import { ITask } from './interface/ITask';


/**
 * 處理檔案的hander流程
 */
class FileHandler implements ITask {
  
  constructor() {
    console.log('call FileHandler constructor().');
  }

  exceute(): void {
    
  }

  // TODO: 增加後續的handler動作
}

/**
 * Excel handler
 */
export class ExcelFileHnadler extends FileHandler {
  constructor() {
    console.log('call ExcelFileHnadler constructor().');    
    super();
  }
}

/**
 * XML handler
 */
export class XmlFileHandler extends FileHandler {
  constructor() {
    console.log('call XmlFileHandler constructor().');    
    super();
  }
}

/**
 * JSON handler
 */
export class JSONFileHandler extends FileHandler {
  constructor() {
    console.log('call JSONFileHandler constructor().');    
    super();
  }
}

/**
 * CSV handler
 */
export class CSVFileHandler extends FileHandler {
  constructor() {
    console.log('call CSVFileHandler constructor().');    
    super();
  }
}

/**
 * TXT handler
 */
export class TxtFileHandler extends FileHandler {
  constructor() {
    console.log('call TxtFileHandler constructor().');    
    super();
  }
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