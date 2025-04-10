import { LoggerServiceImpl } from "./LoggerServiceExample";


function main() {
  const logger = new LoggerServiceImpl();

  logger.api().info('API called.');
  logger.get('device').warn('Device offline'); // 動態建立
  logger.system().error('Critical failure', { code: 503 })
}


main();