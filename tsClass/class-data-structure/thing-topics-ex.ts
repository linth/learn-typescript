/**
 * thing, topics 封裝資料範例
 * 
 */

{
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

  class Thing {
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


  interface ThingReport {
    thingId: string;
    timestamp: Date;
    data: any;
  }

  interface Alert {
    type: string;
    thingId: string;
    message: string;
    timestamp: Date;
  }

  const t = new Thing({
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

  console.log(t.things.appId); // 1
  console.log(t.things.topics.alertList); // {}
  
}


