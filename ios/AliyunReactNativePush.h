// iOS 10 notification
#import <UserNotifications/UserNotifications.h>
#import <React/RCTEventEmitter.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <RNAliyunReactNativePushSpec/RNAliyunReactNativePushSpec.h>

NS_ASSUME_NONNULL_BEGIN

@interface AliyunPush : RCTEventEmitter <NativeAliyunReactNativePushSpec>

NS_ASSUME_NONNULL_END

#else
#import <React/RCTBridgeModule.h>

@interface AliyunPush : RCTEventEmitter <RCTBridgeModule>
#endif

typedef void (^AliyunPushRemoteNotificationCallback)(UIBackgroundFetchResult result);
typedef void (^AliyunPushForeReceiveNoticeCallback)(UNNotificationPresentationOptions);
typedef void (^AliyunPushNotificationActionCallback)(void);

+ (void) didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken;
+ (void) didFailToRegisterForRemoteNotificationsWithError:(NSError *)error;
+ (void) didReceiveRemoteNotification:(NSDictionary *)userInfo;
+ (void) didReceiveRemoteNotifiaction:(NSDictionary *)userInfo fetchCompletionHandler:(AliyunPushRemoteNotificationCallback)completionHandler;
+ (void) userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler;
+ (void) userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler;

@end
