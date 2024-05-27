/**
 * 
 * 
 * 
 */


{
  

  interface Thing {
    id: string;
    reportInterval: number;
    commsTimeout: number;
    disconnectTimeout: number;
    topics: {
      alertList: Record<string, number[]>;
      sohList: Record<string, number[]>;
      socList: Record<string, number[]>;
    };
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

  class RuleEngine {
    private things: Thing[];
    private reports: ThingReport[];
    private alerts: Alert[];
  
    constructor(things: Thing[], reports: ThingReport[]) {
      this.things = things;
      this.reports = reports;
      this.alerts = [];
    }
  
    run() {
      this.checkDataMissing();
      this.checkCommunicationErrors();
      this.checkDeviceDisconnection();
      this.checkDeviceErrors();
    }
  
    private checkDataMissing() {
      const now = new Date();
      const startOfDay = new Date(now.setHours(0, 0, 0, 0));
      const endOfDay = new Date(now.setHours(23, 59, 59, 999));
  
      this.things.forEach(thing => {
        const expectedReports = Math.floor((24 * 60) / thing.reportInterval);
        const actualReports = this.reports.filter(report =>
          report.thingId === thing.id &&
          report.timestamp >= startOfDay &&
          report.timestamp <= endOfDay
        ).length;
  
        if (actualReports < expectedReports) {
          this.alerts.push({
            type: 'DataMissing',
            thingId: thing.id,
            message: 'Data missing for the expected period',
            timestamp: new Date()
          });
        }
      });
    }
  
    private checkCommunicationErrors() {
      const now = new Date();
  
      this.things.forEach(thing => {
        const lastReport = this.reports
          .filter(report => report.thingId === thing.id)
          .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())[0];
  
        if (lastReport) {
          const diffMinutes = (now.getTime() - lastReport.timestamp.getTime()) / (1000 * 60);
          if (diffMinutes > thing.commsTimeout) {
            this.alerts.push({
              type: 'CommunicationError',
              thingId: thing.id,
              message: 'Communication error detected',
              timestamp: new Date()
            });
          }
        }
      });
    }
  
    private checkDeviceDisconnection() {
      const now = new Date();
  
      this.things.forEach(thing => {
        const lastReport = this.reports
          .filter(report => report.thingId === thing.id)
          .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())[0];
  
        if (lastReport) {
          const diffMinutes = (now.getTime() - lastReport.timestamp.getTime()) / (1000 * 60);
          if (diffMinutes > thing.disconnectTimeout) {
            this.alerts.push({
              type: 'DeviceDisconnection',
              thingId: thing.id,
              message: 'Device disconnection detected',
              timestamp: new Date()
            });
          }
        }
      });
    }
  
    private checkDeviceErrors() {
      this.things.forEach(thing => {
        for (const moduleName in thing.topics.alertList) {
          if (thing.topics.alertList[moduleName].length > 0) {
            const existingAlert = this.alerts.find(alert => 
              alert.thingId === thing.id && 
              alert.type === 'DeviceError' && 
              alert.message.includes(moduleName)
            );
            
            if (!existingAlert) {
              this.alerts.push({
                type: 'DeviceError',
                thingId: thing.id,
                message: `Device error in module ${moduleName}`,
                timestamp: new Date()
              });
            }
          }
        }
      });
    }
  
    getAlerts(): Alert[] {
      return this.alerts;
    }
  }

  class AlertNotifier {
    static notify(alerts: Alert[]) {
      alerts.forEach(alert => {
        console.log(`Notify: ${alert.type} for thing ${alert.thingId}: ${alert.message}`);
      });
    }
  }


  var cron = require('node-cron');

  const things: Thing[] = [ /* thing 数据 */ ];
  const reports: ThingReport[] = [ /* report 数据 */ ];

  const ruleEngine = new RuleEngine(things, reports);

  // run task at 12:00 everyday.
  cron.schedule('0 0 * * *', () => {
    ruleEngine.run();
    const alerts = ruleEngine.getAlerts();
    console.log('Generated Alerts:', alerts);
    AlertNotifier.notify(alerts);
  });

  
}