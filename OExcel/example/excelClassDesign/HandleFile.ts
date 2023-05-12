/**
 * definition for handling file, i.e., read, write, set up the path of file, ..., etc.
 * 
 */
import * as fs from 'fs';


interface File {

}

class HandleFile implements File {
  protected readonly filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }
}

export class HandleXmlFile extends HandleFile {
  
}

export class HandleJsonFile extends HandleFile {
  constructor(filePath: string) {
    super(filePath);
    return this;
  }

  readData(): void {
    fs.readFile(this.filePath, 'utf-8', (err, data) => {
      if (err) {
        console.log('Error reading JSON file: ', err);
        return;
      }
  
      try {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
      } catch (error) {
        console.log('Error parsing JSON:', error);
      }      
    })
  }

  writeData(): void {
    //TODO: write data.
  }
}