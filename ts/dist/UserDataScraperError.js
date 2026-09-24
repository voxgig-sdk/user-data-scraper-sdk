"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataScraperError = void 0;
class UserDataScraperError extends Error {
    isUserDataScraperError = true;
    sdk = 'UserDataScraper';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.UserDataScraperError = UserDataScraperError;
//# sourceMappingURL=UserDataScraperError.js.map