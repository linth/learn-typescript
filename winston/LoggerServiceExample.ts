import winston from "winston";
import { format, transports } from 'winston';
import { TransformableInfo } from 'logform';


interface LoggerService {
	system(): winston.Logger;
	mqtt(): winston.Logger;
	api(): winston.Logger;
	thirdParty(): winston.Logger;
}


export class LoggerServiceImpl implements LoggerService {
	private loggerMap = new Map<string, winston.Logger>();

	constructor() {
		// register logger. (使用 factory design pattern.)
		this.registerLogger('system');
		this.registerLogger('mqtt');
		this.registerLogger('api');
		this.registerLogger('thirdParty');
	}

	/**
	 * 取得指定 logger instance.
	 */
	public get(type: string): winston.Logger {
		if (!this.loggerMap.has(type)) {
			this.registerLogger(type);
		}
		return this.loggerMap.get(type);
	}

	public system(): winston.Logger {
		return this.get('system');
	}

	public mqtt(): winston.Logger {
		return this.get('mqtt');
	}

	public api(): winston.Logger {
		return this.get('api');
	}

	public thirdParty(): winston.Logger {
		return this.get('thirdParty');
	}

	private registerLogger(type: string): void {
		const logger = winston.createLogger({
			level: 'silly',
			format: format.combine(
				format.colorize({ all: true }),
				format.timestamp({ format: 'MM/DD/YYYY HH:mm:ss Z' }),
				format.label({ label: type.toUpperCase() }),
        format.printf(this.formatConsoleMessage),
			),
			transports: [new transports.Console()],
		});

		this.loggerMap.set(type, logger);
	}

	/**
	 * 自訂格式
	 */
	private formatConsoleMessage(info: TransformableInfo): string {
		const { label, timestamp, level, message, ...meta } = info;
		const metaStr = Object.keys(meta).length > 0 ? ` ${JSON.stringify(meta)}` : '';
		return `[${label}] - ${timestamp} [${level}]: ${message}${metaStr}`;
	}
}