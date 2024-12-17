"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
exports.logger = {
    log: (color, type, message) => {
        console.log(`\x1b[${color}m[${type}]:\x1b[0m ${message}`);
    },
    info: (message) => {
        exports.logger.log("32" /* LogColor.Green */, "INFO", message);
    },
    error: (message) => {
        exports.logger.log("31" /* LogColor.Red */, "ERROR", message);
    },
    warn: (message) => {
        exports.logger.log("33" /* LogColor.Yellow */, "WARN", message);
    },
};
