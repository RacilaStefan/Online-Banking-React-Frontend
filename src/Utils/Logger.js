export class Logger {
    constructor(locationName) {
        this.locationName = locationName;
    }

    error(text) {
        let output = `${getTime()} ${LOG_TYPES.ERROR} [%c${this.locationName}%c] ${text}`;
        console.log(output, "color:#f51e0f", "", "color:#9997fc", "");
    }

    apiError(err) { // from axios docs
        if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            let output = `${getTime()} ${LOG_TYPES.ERROR} [%c${this.locationName}%c]`;
            output += ` Request [${err.config.method.toString().toUpperCase()}] ${err.config.baseURL}${err.config.url}`;
            output += ` failed with status code ${err.response.status}`;

            console.log(output, "color:#f51e0f", "", "color:#9997fc", "");
            console.log(`Message "${err.response.data.error}"`);
        } else if (err.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            this.error(err.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            this.error(err.message);
        }
    }

    info(text) {
        let output = `${getTime()} ${LOG_TYPES.INFO} [%c${this.locationName}%c] ${text}`;
        console.log(output, "color:#02f20a", "", "color:#9997fc", "");
    }

    trace(name, text) {
        let output = `${getTime()} ${LOG_TYPES.TRACE} [%c${this.locationName}%c] ${name}= `;
        console.log(output, "color:yellow", "", "color:#9997fc", "");
        console.log(text);
    }
}

export const LOG_TYPES = {
    INFO: "[%cINFO%c]",
    DEBUG: "[%cDEBUG%c]",
    ERROR: "[%cERROR%c]",
    TRACE: "[%cTRACE%c]",
};

function getTime() {
    return new Date().toLocaleTimeString('en-US', { hour12: false });
}

const log = new Logger("Logger");

log.info("Loaded");