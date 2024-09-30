import { CronJob } from 'cron';
import { exec } from 'child_process';
/**
 * CronJob 參數解釋
 * 
 * cronTime: 設定任務的執行時間，使用 Cron 語法（例如：'* * * * * *' 表示每秒執行）。
 * onTick: 每次執行任務時調用的函數，包含要執行的具體操作。
 * start: 指定工作是否在創建後立即啟動，設置為 true 則自動啟動。
 * timeZone: 設定任務執行的時區，使用有效的時區名稱（例如：'America/Los_Angeles'）。
 * context:	提供上下文對象，通常用於傳遞額外的參數或狀態。
 * runOnInit: 在初始化時是否立即運行一次任務，設置為 true 則會在創建後立即執行一次。
 * maxRetries: 設定最大重試次數，如果任務失敗則會自動重試。
 * retryDelay: 設定重試之間的延遲時間（以毫秒為單位）。
 * startingDeadlineSeconds: 設定開始任務的截止時間（以秒為單位），如果錯過了這個時間將跳過該任務。
 * concurrencyPolicy: 設定並發策略，可以是 Allow、Forbid 或 Replace，控制同一時間內任務的執行方式。
 * 
 */


//  0 4 * * 1
//  | | | | |
//  | | | | 星期幾 (0-6, 0 代表星期日)
//  | | | 月份 (1-12)
//  | | 日期 (1-31)
//  | 小時 (0-23)
//  分鐘 (0-59)

{
  /**
   * user case: 每秒顯示 "Hello World"
   */

  // 使用 from 方法創建一個新的 CronJob
  // const job = CronJob.from({
  //   cronTime: '* * * * * *', // 每秒執行
  //   onTick: function () {
  //     console.log('Hello World'); // 每秒顯示的訊息
  //   },
  //   start: true, // 開始時啟動工作
  //   timeZone: 'America/Los_Angeles' // 設定時區
  // });

  const job = new CronJob(
    '* * * * * *', 
    () => {
      console.log('Hello World');
    }, 
    null, 
    true, 
    'Asia/Taipei');

  // 如果需要，可以在這裡啟動或停止工作
  job.start();
  // job.stop();
}

{
  /**
   * user case: 每天凌晨 2 點備份資料庫
   */
  
  const backupDatabaseJob = new CronJob(
    '* * * * 5', 
    () => {
      exec('', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error backing up database: ${error}`);
          return;
        }
        console.log(`Database backup completed successfully.`);      
      });
    }, 
    null, 
    true, 
    'Asia/Taipei');

  // backupDatabaseJob.start();
  // backupDatabaseJob.stop();
}

{
  /**
   * 每小時清理臨時檔案
   */
   const cleanTempFilesJob = new CronJob(
    '0 * * * *', 
    () => {
      exec('rm -rf /home/user/tmp/*', (error) => {
        if (error) {
          console.error(`Error cleaning temp files: ${error}`);
          return;
        }
        console.log('Temporary files cleaned successfully.');
      });
    }, 
    null, 
    true, 
    'America/Los_Angeles');

  // cleanTempFilesJob.start();
  // cleanTempFilesJob.stop();
}

{
  /**
   * 每月生成報告: 每月的第一天凌晨 3 點生成業務報告
   */
  const generateReportJob = new CronJob(
    '0 3 1 * *', 
    () => {
      exec('/usr/local/bin/generate_report.sh', (error) => {
        if (error) {
          console.error(`Error generating report: ${error}`);
          return;
        }
        console.log('Monthly report generated successfully.');
      });
    }, 
    null, 
    true, 
    'America/Los_Angeles');

    generateReportJob.start();
    generateReportJob.stop();
}

{
  /**
   * 每週同步文件到備份伺服器: 每週一的凌晨 4 點將指定目錄中的文件同步到備份伺服器
   */
  const syncFilesToBackupServerJob = new CronJob(
    '0 4 * * 1', 
    () => {
      exec('rsync -av /path/to/local/files/ user@backupserver:/path/to/backup/', (error) => {
        if (error) {
          console.error(`Error syncing files: ${error}`);
          return;
        }
        console.log('Files synced to backup server successfully.');
      });
    }, 
    null, 
    true, 
    'America/Los_Angeles');

  syncFilesToBackupServerJob.start();
  syncFilesToBackupServerJob.stop();
}