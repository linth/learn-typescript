/**
 * definition for handling file, i.e., read, write, set up the path of file, ..., etc.
 * 
 */
import * as fs from 'fs';
import { ITask } from './interface/ITask';


interface IFile {
  setFilePath(filePath: string): this;
  setSaveFilePath(saveFilePath: string): this;
  setTheSamePath(saveSamePath: string): this;
}

export class OFile implements IFile {
  filePath?: string;
  saveFilePath?: string;

  constructor() {
    console.log('call OFile constructor().');
  }

  /**
   * 設定 file path (欲抓取的檔案路徑)
   * @returns 
   */
  getFilePath(): this {
    console.log(`file path: ${this.filePath}`);
    return this;
  }

  /**
   * 設定 save file path (儲存後的檔案路徑)
   * @returns 
   */
  getSaveFilePath(): this {
    console.log(`save file path: ${this.saveFilePath}`);
    return this;
  }

  /**
   * 設定 filePath value.
   * @param filePath 
   */
   setFilePath(filePath: string): this {
    this.filePath = filePath;
    return this;
  }

  /**
   * 設定 saveFilePath value.
   * @param saveFilePath 
   * @returns 
   */
  setSaveFilePath(saveFilePath: string): this {
    this.saveFilePath = saveFilePath;
    return this;
  }

  /**
   * 設定 filePath & saveFilePath 相同的路徑
   * @param saveSamePath 
   * @returns 
   */
  setTheSamePath(saveSamePath: string): this {
    this.filePath = saveSamePath;
    this.saveFilePath = saveSamePath;
    return this;
  }
}

/**
 * 處理檔案的hander流程
 */
export class FileHandler implements ITask {
  private oFile?: OFile;

  constructor() {
    console.log('call FileHandler constructor().');
  }

  getOFile(): OFile | undefined {
    console.log(`oFile: ${this.oFile}`);
    return this.oFile;
  }

  exceute(): void {
    
  }

  // TODO: 增加後續的handler動作
  /**
   * 設定 oFile 物件
   * @param oFile 
   * @returns 
   */
  setOFile(oFile: OFile): this {
    this.oFile = oFile;
    return this;
  }
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