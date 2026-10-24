import { UserDataEntity } from './entity/UserDataEntity';
export type * from './UserDataScraperTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { UserDataScraperEntityBase } from './UserDataScraperEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class UserDataScraperSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    UserData(entopts?: Record<string, any>): UserDataEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): UserDataScraperSDK;
    tester(testopts?: any, sdkopts?: any): UserDataScraperSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof UserDataScraperSDK;
export { stdutil, config, BaseFeature, UserDataScraperEntityBase, UserDataScraperSDK, SDK, };
export type { DirectResult };
