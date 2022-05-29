export class Logger {
    constructor(className) {
        this.className = className;
    }

    error(text) {
        let output = `${new Date().toLocaleTimeString({hour12: false})} ${LOG_TYPES.ERROR} [${this.className}] ${text}`;
        console.log(output);
    }

    info(text) {
        let output = `${new Date().toLocaleTimeString({hour12: false})} ${LOG_TYPES.INFO} [${this.className}] ${text}`;
        console.log(output);
    }

    trace(name, text) {
        let output = `${new Date().toLocaleTimeString({hour12: false})} ${LOG_TYPES.TRACE} [${this.className}] ${name}= `;
        console.log(output);
        console.log(text);
    }
}

export const LOG_TYPES = {
    INFO: "[INFO]",
    DEBUG: "[DEBUG]",
    ERROR: "[ERROR]",
    TRACE: "[TRACE]",
};