import { UserDataScraperEntityBase } from '../UserDataScraperEntityBase';
import type { UserDataScraperSDK } from '../UserDataScraperSDK';
import type { Control } from '../types';
import type { UserData, UserDataListMatch } from '../UserDataScraperTypes';
declare class UserDataEntity extends UserDataScraperEntityBase<UserData> {
    constructor(client: UserDataScraperSDK, entopts: any);
    make(this: UserDataEntity): UserDataEntity;
    list(this: any, reqmatch?: UserDataListMatch, ctrl?: Control): Promise<UserDataEntity[]>;
}
export { UserDataEntity };
