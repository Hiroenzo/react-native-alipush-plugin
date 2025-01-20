import { TurboModuleRegistry } from 'react-native';

import type { TurboModule } from 'react-native';

export interface IPushResult {
  code: string;
  errorMsg?: string;
  aliasList?: string;
  tagsList?: string;
}

export interface ICreateChannelParams {
  id: string;
  name: string;
  importance: number;
  desc: string;
  groupId?: string;
  allowBubbles?: boolean;
  light?: boolean;
  lightColor?: number;
  showBadge?: boolean;
  soundPath?: string;
  soundUsage?: number;
  soundContentType?: number;
  soundFlag?: number;
  vibration?: boolean;
}

export interface Spec extends TurboModule {
  initPush(appKey?: string, appSecret?: string): Promise<IPushResult>;
  getDeviceId(): Promise<string>;
  bindAccount(account: string): Promise<IPushResult>;
  unbindAccount(): Promise<IPushResult>;
  addAlias(alias: string): Promise<IPushResult>;
  removeAlias(alias: string): Promise<IPushResult>;
  listAlias(): Promise<IPushResult>;
  bindTag(tags: string[], target: number, alias?: string): Promise<IPushResult>;
  unbindTag(
    tags: string[],
    target: number,
    alias?: string
  ): Promise<IPushResult>;
  listTags(target: number): Promise<IPushResult>;
  setPluginLogEnabled(enabled: boolean): void;

  ////////////////////////////////////
  //
  // ANDROID ONLY
  //

  initThirdPush(): Promise<IPushResult>;
  closePushLog(): Promise<IPushResult>;
  setLogLevel(level: number): Promise<IPushResult>;
  bindPhoneNumber(phone: string): Promise<IPushResult>;
  unbindPhoneNumber(): Promise<IPushResult>;
  setNotificationInGroup(inGroup: boolean): Promise<IPushResult>;
  clearNotifications(): Promise<IPushResult>;
  createChannel(params?: ICreateChannelParams): Promise<IPushResult>;
  createChannelGroup(
    id: string,
    name: string,
    desc: string
  ): Promise<IPushResult>;
  isNotificationEnabled(id?: string): Promise<boolean>;
  jumpToNotificationSettings(id?: string): void;

  //
  ////////////////////////////////////

  ////////////////////////////////////
  //
  // IOS ONLY
  //

  closeCCPChannel(): Promise<IPushResult>;
  turnOnDebug(): Promise<IPushResult>;
  setBadgeNum(num: number): Promise<IPushResult>;
  syncBadgeNum(num: number): Promise<IPushResult>;
  getApnsDeviceToken(): Promise<string>;
  isChannelOpened(): Promise<boolean>;
  showNoticeWhenForeground(enabled: boolean): Promise<IPushResult>;

  //
  ////////////////////////////////////

  addListener: (eventType: string) => void;
  removeListeners: (count: number) => void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('AliyunPush');
