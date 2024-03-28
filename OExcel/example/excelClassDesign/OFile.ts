
interface IFile {
  filePath: string;
}

class OFile implements IFile {
  filePath: string;
  
  constructor(filePath: string) {
    console.log('OFile constructor creation.');
    this.filePath = filePath;
  }
}

/**
 * 億光檔案
 */
class EverlightFile extends OFile {

}

/**
 * 遠傳檔案
 */
class FETFile extends OFile {

}




