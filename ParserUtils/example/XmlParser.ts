import * as fs from 'fs';
import * as xml2js from 'xml2js';

export class XmlParser {
  /** parse xml file. */

  // the path of xml file.
  path_of_file: string = './example.xml';
  xmlString: string = '';

  constructor(pof: string) {
    this.path_of_file = pof;
    this.xmlString = fs.readFileSync(this.path_of_file, 'utf-8');
    return this;
  }

  async getGenericXmlFullData(): Promise<any> {
    // parse xml file and get all information for data.
    try {
      const result = await xml2js.parseStringPromise(this.xmlString);
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  async getXmlData(): Promise<any> {
    // parse xml file and get the data from the attribute.
    const data = await this.getGenericXmlFullData();
    return data.root.element[0].data;
  }

  async getXmlAttribe(attribute: string): Promise<any> {
    // parse xml file and get the data by using custom attribute.
    const data = await this.getGenericXmlFullData();
    return data.root.element[0].attribute;
  }
}
