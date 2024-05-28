/**
 * thing, topics 封裝資料範例
 * 
 */

namespace ThingTopicManagement {
  
  interface App {
    id: string;
    name: string;
  }

  interface Project {
    id: string;
    name: string;
    appId: string;
  }

  interface Topics {
    alertList: Record<string, number[]>; // alert
    sohList: Record<string, number[]>;  // state of health.
    socList: Record<string, number[]>; // state of charge list.
  }

  /**
   * Thing: gateway (device) or IPC
   */
  interface IThing {
    id: string;
    reportInterval: number;
    commsTimeout: number;
    disconnectTimeout: number;
    topics: Topics;

    appId: string;
    projectId: string;
  }

  export class Thing {
    private _things: IThing;

    constructor(things: IThing) {
      this._things = things;
    }

    get things(): IThing {
      return this._things;
    }

    set things(value: IThing) {
      this._things = value;
    }
  }

  // 使用factory design pattern.
  export class ThingFactory {
    static createThing(id: string, reportInterval: number, commsTimeout: number, disconnectTimeout: number, topics: Topics, appId: string, projectId: string): Thing {
      const things: IThing = {
        id,
        reportInterval,
        commsTimeout,
        disconnectTimeout,
        topics,
        appId,
        projectId,
      };
      return new Thing(things);
    }
  }

  // interface ThingReport {
  //   thingId: string;
  //   timestamp: Date;
  //   data: any;
  // }

  // interface Alert {
  //   type: string;
  //   thingId: string;
  //   message: string;
  //   timestamp: Date;
  // }
}

const ttm = new ThingTopicManagement.Thing({
  id: '1',
  reportInterval: 1,
  commsTimeout: 2,
  disconnectTimeout: 3,
  topics: {
    alertList: {},
    sohList: {},
    socList: {}
  },
  appId: '1',
  projectId: '1',
});

console.log(ttm.things.appId); // 1
console.log(ttm.things.topics.alertList); // {}


const tf = ThingTopicManagement.ThingFactory.createThing('2', 4, 4, 2, {alertList: {}, sohList: {}, socList: {}}, '2', '2');
console.log(tf.things.appId); // 2
console.log(tf.things.reportInterval); // 4
