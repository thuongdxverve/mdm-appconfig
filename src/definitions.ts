declare module '@capacitor/core' {
  interface PluginRegistry {
    MDMAppConfig: MDMAppConfigPlugin;
  }
}

export interface MDMAppConfigPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  getValue(options: getValueOptions): Promise<GetValueResult>;

}
// tslint:disable-next-line:class-name
export interface getValueOptions {
    /**
     * The key (or variable name)
     *
     * @since 1.0.0
     */
    key: string;
}
export interface GetValueResult {
    /**
     * The value
     *
     * @since 1.0.0
     */
    value: string;
}
