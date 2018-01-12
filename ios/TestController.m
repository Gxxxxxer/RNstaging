//
//  TestController.m
//  MTCAPP
//
//  Created by 王君 on 2017/12/19.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestController.h"
#import "NextViewController.h"
#import <React/RCTBridgeModule.h>
#import <React/RCTEventDispatcher.h>

@interface TestController ()<RCTBridgeModule>

@end

@implementation TestController

RCT_EXPORT_MODULE()

- (void)viewDidLoad {
  [super viewDidLoad];
  self.navigationItem.title = @"我是原生页面哟~";
  self.navigationController.navigationBarHidden = NO;
  self.view.backgroundColor = [UIColor redColor];
  // Do any additional setup after loading the view.
  UIButton * btn = [UIButton buttonWithType:UIButtonTypeRoundedRect];
  btn.frame = CGRectMake(0, 0, 100, 50);
  btn.center = self.view.center;
  [btn setTitle:@"click" forState:UIControlStateNormal];
  [self.view addSubview:btn];
  [btn setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
  [btn addTarget:self action:@selector(btnClick) forControlEvents:UIControlEventTouchUpInside];
}

- (void)btnClick{
  NextViewController *nvc = [[NextViewController alloc] init];
  [self.navigationController pushViewController:nvc animated:YES];
//  [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder" body:@{@"name":@"ahhha",@"errorCode":@"0",@"msg":@"成功"}];
}

- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
  // Dispose of any resources that can be recreated.
}

- (void)viewWillDisappear:(BOOL)animated{
  [super viewWillDisappear:animated];
  [self.navigationController setNavigationBarHidden:YES animated:YES];
}

/*
 #pragma mark - Navigation
 
 // In a storyboard-based application, you will often want to do a little preparation before navigation
 - (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
 // Get the new view controller using [segue destinationViewController].
 // Pass the selected object to the new view controller.
 }
 */

@end
