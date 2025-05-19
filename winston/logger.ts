import winston from "winston";
import DailyRotateFile from 'winston-daily-rotate-file';


const { combine, timestamp, printf, colorize } = winston.format;
const logFormat = printf(({ level, message, timestamp}) => {
	return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});


const logger = winston.createLogger({
  level: 'info', // 記錄 info 以上的級別 (info, warn, error)
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
  transports: [
    // 終端機輸出（帶顏色）
    new winston.transports.Console({
      format: combine(colorize(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
    }),

    // 每日輪替的應用程式日誌
    new winston.transports.DailyRotateFile({
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d', // 保留 14 天
    }),

    // 錯誤日誌
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),
  ],
});

export default logger;