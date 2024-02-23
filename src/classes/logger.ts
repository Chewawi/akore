enum MessageType {
	ERROR = "ERROR",
	WARN = "WARN",
	DEBUG = "DEBUG",
	INFO = "INFO",
}

export class Logger {
	private static readonly AKITA_TAG = "\x1b[34m[AKITA]\x1b[0m";
	private static readonly PATH_TAG = "\x1b[90m[${PATH}]\x1b[0m";

	static error(message: string, path: string = ""): never {
		console.error(
			`${Logger.AKITA_TAG} ${Logger.PATH_TAG.replace("${PATH}", path)} ${Logger.getTag(
				MessageType.ERROR
			)} ${message}`
		);
		throw new Error(message);
	}

	static warn(message: string, path: string = "") {
		console.warn(
			`${Logger.AKITA_TAG} ${Logger.PATH_TAG.replace("${PATH}", path)} ${Logger.getTag(
				MessageType.WARN
			)} ${message}`
		);
	}

	static debug(message: unknown, path: string = "") {
		console.debug(
			`${Logger.AKITA_TAG} ${Logger.PATH_TAG.replace("${PATH}", path)} ${Logger.getTag(
				MessageType.DEBUG
			)} ${message}`
		);
	}

	static info(message: string, path: string = "") {
		console.info(
			`${Logger.AKITA_TAG} ${Logger.PATH_TAG.replace("${PATH}", path)} ${Logger.getTag(
				MessageType.INFO
			)} ${message}`
		);
	}

	private static getTag(type: MessageType): string {
		switch (type) {
			case MessageType.ERROR:
				return "\x1b[31m[ERROR]\x1b[0m";
			case MessageType.WARN:
				return "\x1b[33m[WARN]\x1b[0m";
			case MessageType.DEBUG:
				return "\x1b[36m[DEBUG]\x1b[0m";
			case MessageType.INFO:
				return "\x1b[32m[INFO]\x1b[0m";
			default:
				return "";
		}
	}
}