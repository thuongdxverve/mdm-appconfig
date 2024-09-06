import { WebPlugin } from '@capacitor/core';
import {getValueOptions, GetValueResult, MDMAppConfigPlugin} from './definitions';

export class MDMAppConfigWeb extends WebPlugin implements MDMAppConfigPlugin {
  constructor() {
    super({
      name: 'MDMAppConfig',
      platforms: ['web'],
    });
  }

  async getValue(options: getValueOptions): Promise<GetValueResult> {
      console.log('ECHO', options);
      return {value: '123'};
  }


}

const MDMAppConfig = new MDMAppConfigWeb();

export { MDMAppConfig };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(MDMAppConfig);
