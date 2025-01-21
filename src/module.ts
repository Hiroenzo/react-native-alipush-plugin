import { NativeEventEmitter, NativeModules, Platform } from 'react-native';
import type { Spec } from './NativeAliyunReactNativePush';

const LINKING_ERROR =
  `The package 'react-native-alipush-plugin' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const Module = isTurboModuleEnabled
  ? require('./NativeAliyunReactNativePush').default
  : NativeModules.AliyunPush;

const AliyunReactNativePushModule = Module
  ? Module
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export const ModuleEventEmitter = new NativeEventEmitter(Module);

export default AliyunReactNativePushModule as Spec;
