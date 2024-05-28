/**
 * thing, topics, 
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
    things: IThing;

    constructor(things: IThing) {
      this.things = things;
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


