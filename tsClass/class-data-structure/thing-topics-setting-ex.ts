/**
 * thing, topics 封裝資料範例
 * 
 */

namespace ThingTopicSettingManagement {
  
  class Topics {
    alertList: Record<string, number[]>;
    sohList: Record<string, number[]>;
    socList: Record<string, number[]>;
  
    constructor(alertList: Record<string, number[]>, sohList: Record<string, number[]>, socList: Record<string, number[]>) {
      this.alertList = alertList;
      this.sohList = sohList;
      this.socList = socList;
    }
  }


  class Thing {
    id: string;
    appId: string;
    projectId: string;
    topics: Topics;

    constructor(id: string, appId: string, projectId: string, topics: Topics) {
      this.id = id;
      this.appId = appId;
      this.projectId = projectId;
      this.topics = topics;
    }
  }


  class ThingSetting {
    id: string;
    reportInterval: number; // 回報週期
    commsTimeout: number; // 通訊異常
    disconnectTimeout: number; // 設備失聯
  
    constructor(id: string, reportInterval: number, commsTimeout: number, disconnectTimeout: number) {
      this.id = id;
      this.reportInterval = reportInterval;
      this.commsTimeout = commsTimeout;
      this.disconnectTimeout = disconnectTimeout;
    }
  }


  class RuleEngine {
    things: Thing[];
    settings: Map<string, ThingSetting>;
    data: Map<string, any[]>;
    lastReportTimes: Map<string, Date>;
  
    constructor(things: Thing[], settings: ThingSetting[]) {
      this.things = things;
      this.settings = new Map(settings.map(setting => [setting.id, setting]));
      this.data = new Map();
      this.lastReportTimes = new Map();
    }
  
    // 数据缺失检查
    checkDataLoss(thing: Thing): boolean {
      const setting = this.settings.get(thing.id);
      if (!setting) return false;
  
      const expectedReports = 24 * 60 * 60 / setting.reportInterval; // 假设一天的秒数
      const thingData = this.data.get(thing.id) || [];
      return thingData.length < expectedReports;
    }
  
    // 通讯异常检查
    checkCommunicationFailure(thing: Thing): boolean {
      const setting = this.settings.get(thing.id);
      if (!setting) return false;
  
      const lastReportTime = this.lastReportTimes.get(thing.id) || new Date();
      const now = new Date();
      return (now.getTime() - lastReportTime.getTime()) > setting.commsTimeout;
    }
  
    // 设备失联检查
    checkDeviceDisconnection(thing: Thing): boolean {
      const setting = this.settings.get(thing.id);
      if (!setting) return false;
  
      const lastReportTime = this.lastReportTimes.get(thing.id) || new Date();
      const now = new Date();
      return (now.getTime() - lastReportTime.getTime()) > setting.disconnectTimeout;
    }
  
    // 设备异常检查
    checkDeviceAlerts(thing: Thing): boolean {
      const { alertList } = thing.topics;
      for (const module in alertList) {
        if (alertList[module].length > 0) {
          return true;
        }
      }
      return false;
    }
  
    // 运行检查
    runChecks() {
      for (const thing of this.things) {
        if (this.checkDataLoss(thing)) {
          console.log(`Data loss detected for thing ${thing.id}`);
        }
  
        if (this.checkCommunicationFailure(thing)) {
          console.log(`Communication failure detected for thing ${thing.id}`);
        }
  
        if (this.checkDeviceDisconnection(thing)) {
          console.log(`Device disconnection detected for thing ${thing.id}`);
        }
  
        if (this.checkDeviceAlerts(thing)) {
          console.log(`Device alerts detected for thing ${thing.id}`);
        }
      }
    }
  
    // 更新设备数据
    updateThingData(thingId: string, newData: any) {
      const thingData = this.data.get(thingId) || [];
      thingData.push(newData);
      this.data.set(thingId, thingData);
      this.lastReportTimes.set(thingId, new Date());
    }

    // @Cron('*/1 * * * * *')
    handleCron() {
      this.runChecks();
    }

    // getCheckResults$() {
    //   return this.checkResults$.asObservable();
    // }
  }
}

