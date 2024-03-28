

/**
 * Parser Interface: 定義所有 parser 的共同方法
 */
interface IParser {
  parse(data: string): any[];
}

/**
 * 定義 OParser
 */
class OParser implements IParser {
  private oFile: OFile;

  constructor(oFile: OFile) {
    this.oFile = oFile;
  }
  
  parse(data: string): any[] {
    return [];
  }
}


/**
 * JSON parser
 */
export class JSONParser extends OParser {
  parse(data: string): any[] {
    console.info('call JSONParser: parse function.');
    // TODO: 解析 JSON 格式資料
    return JSON.parse(data);
  }
}

/**
 * CSV parser
 */
export class CSVParser extends OParser {
  parse(data: string): any[] {
    // TODO: 解析 CSV 格式資料
    // TODO: 實作 CSV 解析邏輯
    return [];
  }
}

/**
 * Excel parser
 */
export class ExcelParser extends OParser {
  parse(data: string): any[] {
    console.info('call ExcelParser: parse function.');
    // TODO: 解析 Excel 格式資料
    // TODO: 實作 Excel 解析邏輯
    return [];
  }
}

/**
 * TXT parser
 */
export class TXTParser extends OParser {
  parse(data: string): any[] {
    // TODO: 解析 TXT 格式資料
    // TODO: 實作 TXT 解析邏輯
    return [];
  }
}