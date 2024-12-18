const enum LogColor {
    Red = "31",
    Green = "32",
    Yellow = "33",
    Blue = "34",
    White = "37",
}

export const logger = {
    _log: (color: LogColor, type: string, message: string) => {
        console.log(`\x1b[${color}m[${type}]:\x1b[0m ${message}`);
    },
    info: (message: string) => {
        logger._log(LogColor.Green, "INFO", message);
    },
    error: (message: string) => {
        logger._log(LogColor.Red, "ERROR", message);
    },
    warn: (message: string) => {
        logger._log(LogColor.Yellow, "WARN", message);
    },
};
