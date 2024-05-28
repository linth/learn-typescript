/**
 * Simple rule engine.
 * 
 * 
 */

{
  interface Topics {
    alertList: Record<string, number[]>;
    sohList: Record<string, number[]>;
    socList: Record<string, number[]>;
  };

  class Thing {
    id: string;
    reportingInterval: number; // 回報週期
    communicationTimeout: number; // 多久時間將會判斷為通訊異常?
    disconnectionTimeout: number; // 多久時間將會判斷為設備失聯?
    topics: Topics;

    constructor(id: string, reportingInterval: number, communicationTimeout: number, disconnectionTimeout: number, topics: Topics) {
      this.id = id;
      this.reportingInterval = reportingInterval;
      this.communicationTimeout = communicationTimeout;
      this.disconnectionTimeout = disconnectionTimeout;
      this.topics = topics;
    }
  }

  // define several interface class to deal with different kinds of rule engine.

  class RuleEngine {
    things: Thing[];
    data: Map<string, any[]>; // data.
    lastReportTimes: Map<string, Date>; 
    dataLossThreshold: number; // 資料缺失 threshold
    communicationFailureThreshold: number; // 通訊失敗異常 threshold
    deviceDisconnectionThreshold: number; // 設備失聯 threshold

    constructor(things: Thing[], dataLossThreshold: number, communicationFailureThreshold: number, deviceDisconnectionThreshold: number) {
      this.things = things;
      this.data = new Map();
      this.lastReportTimes = new Map();
      this.dataLossThreshold = dataLossThreshold;
      this.communicationFailureThreshold = communicationFailureThreshold;
      this.deviceDisconnectionThreshold = deviceDisconnectionThreshold;
    }

    runChecks() {
      for (const thing of this.things) {
        const thingData = this.data.get(thing.id) || [];
        const lastReportTime = this.lastReportTimes.get(thing.id) || new Date();
  
        if (this.checkDataLoss(thing, thingData)) {
          console.log(`Data loss detected for thing ${thing.id}`);
        }
  
        if (this.checkCommunicationFailure(thing, lastReportTime)) {
          console.log(`Communication failure detected for thing ${thing.id}`);
        }
  
        if (this.checkDeviceDisconnection(thing, lastReportTime)) {
          console.log(`Device disconnection detected for thing ${thing.id}`);
        }
  
        if (this.checkDeviceAlerts(thing)) {
          console.log(`Device alerts detected for thing ${thing.id}`);
        }
      }
    }
  
    updateThingData(thingId: string, newData: any) {
      const thingData = this.data.get(thingId) || [];
      thingData.push(newData);
      this.data.set(thingId, thingData);
      this.lastReportTimes.set(thingId, new Date());
    }
  
    private checkDataLoss(thing: Thing, data: any[]): boolean {
      const expectedReports = 24 * 60 * 60 / thing.reportingInterval; // 假設一天的秒數
      return data.length < expectedReports * this.dataLossThreshold;
    }
  
    private checkCommunicationFailure(thing: Thing, lastReportTime: Date): boolean {
      const now = new Date();
      return (now.getTime() - lastReportTime.getTime()) > thing.communicationTimeout * this.communicationFailureThreshold;
    }
  
    private checkDeviceDisconnection(thing: Thing, lastReportTime: Date): boolean {
      const now = new Date();
      return (now.getTime() - lastReportTime.getTime()) > thing.disconnectionTimeout * this.deviceDisconnectionThreshold;
    }
  
    private checkDeviceAlerts(thing: Thing): boolean {
      for (const module in thing.topics.alertList) {
        if (thing.topics.alertList[module].length > 0) {
          return true;
        }
      }
      return false;
    }
  }

  // 初始化一些 Thing 对象
  const things: Thing[] = [
    new Thing('thing1', 60, 300, 600, {
      alertList: { 'module_1': [], 'module_2': [] },
      sohList: { 'module_1': [], 'module_2': [] },
      socList: { 'module_1': [], 'module_2': [] }
    }),
    new Thing('thing2', 120, 600, 1200, {
      alertList: { 'module_1': [], 'module_2': [] },
      sohList: { 'module_1': [], 'module_2': [] },
      socList: { 'module_1': [], 'module_2': [] }
    })
  ];

  const ruleEngine = new RuleEngine(things, 0.9, 1.1, 1.2);

  ruleEngine.updateThingData('thing1', { /* data */ });

  ruleEngine.runChecks();
}



