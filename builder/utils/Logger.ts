const enum LogColor {
    Red = "31",
    Green = "32",
    Yellow = "33",
    Blue = "34",
    White = "37",
}

export const logger = {
    log: (color: LogColor, type: string, message: string) => {
        console.log(`\x1b[${color}m[${type}]:\x1b[0m ${message}`);
    },
    info: (message: string) => {
        logger.log(LogColor.Green, "INFO", message);
    },
    error: (message: string) => {
        logger.log(LogColor.Red, "ERROR", message);
    },
    warn: (message: string) => {
        logger.log(LogColor.Yellow, "WARN", message);
    },
};
