import { Context } from './Context';
declare class UserDataScraperError extends Error {
    isUserDataScraperError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { UserDataScraperError };
