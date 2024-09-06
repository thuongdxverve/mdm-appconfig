import { WebPlugin } from '@capacitor/core';
import { getValueOptions, GetValueResult, MDMAppConfigPlugin } from './definitions';
export declare class MDMAppConfigWeb extends WebPlugin implements MDMAppConfigPlugin {
    constructor();
    getValue(options: getValueOptions): Promise<GetValueResult>;
}
declare const MDMAppConfig: MDMAppConfigWeb;
export { MDMAppConfig };
