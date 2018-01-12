//
//  TestAddNative.m
//  MTCAPP
//
//  Created by 王君 on 2017/12/19.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestAddNative.h"
#import "TestController.h"
#import <React/RCTEventDispatcher.h>
#import "AppDelegate.h"

@implementation TestAddNative

RCT_EXPORT_MODULE();
// 接收传过来的 NSString
RCT_EXPORT_METHOD(RNOpenOneVC:(NSString *)name){
  NSLog(@"%@", name);
  //跳转界面
  //主要这里必须使用主线程发送,不然有可能失效
  dispatch_async(dispatch_get_main_queue(), ^{
    TestController *one = [[TestController alloc]init];
    
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    [app.nav pushViewController:one animated:YES];
  });
}

RCT_EXPORT_METHOD(popToView:(NSString *)view)
{
  UIViewController * viewc = RCTPresentedViewController();
  UINavigationController * navi = (UINavigationController *)viewc;
  UIViewController * vc = navi.viewControllers.lastObject;
//  [vc.navigationController pop];
}
//OC调用RN
RCT_EXPORT_METHOD(VCOpenRN:(NSDictionary *)dictionary){
  NSString *value=[dictionary objectForKey:@"name"];
  if([value isEqualToString:@"jiangqq"]){
    [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder" body:@{@"name":[NSString stringWithFormat:@"%@",value],@"errorCode":@"0",@"msg":@"成功"}];
  }else{
    [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder" body:@{@"name":[NSString stringWithFormat:@"%@",value],@"errorCode":@"0",@"msg":@"输入的name不是jiangqq"}];
  }
}
@end
