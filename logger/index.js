import { createLogger, format as _format, transports as _transports } from "winston";

const logger = createLogger({
    level: "warning",
    format: _format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        new _transports.Console(),
        new _transports.File({ filename: "error.log", level: "error" }),
        new _transports.File({ filename: "combined.log" })
    ]
});

export default logger;
