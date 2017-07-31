import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RecommendPage } from '../pages/recommendPage/recommendPage';
import { Opera } from './../pages/recommendPage/opera/opera';
import { Choiceness } from './../pages/recommendPage/choiceness/choiceness';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MePage } from "../pages/me/me";
import { HttpModule, JsonpModule } from "@angular/http";
import { RegisterPage } from "../pages/me/motal/register/register";
import { CheckedPage } from "../pages/me/motal/checked/checked";
import { SetpwdPage } from "../pages/me/motal/setpwd/setpwd";
import { LoginPage } from "../pages/me/motal/login/login";
import { UserinfoPage } from "../pages/me/userinfo/userinfo";

import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { NicknamePage } from "../pages/me/userinfo/nickname/nickname";
import { BirthPage } from "../pages/me/userinfo/birth/birth";
import { SignPage } from "../pages/me/userinfo/sign/sign";
import { SafePage } from "../pages/me/userinfo/safe/safe";
import { SettingPage } from "../pages/me/setting/setting";
import { HistoryPage } from "../pages/me/history/history";
@NgModule({
  declarations: [
    MyApp,
    RecommendPage,
    MePage,
    ListPage,
    Choiceness,
    Opera,
    RegisterPage,
    CheckedPage,
    SetpwdPage,
    LoginPage,
    UserinfoPage,
    NicknamePage,
    BirthPage,
    SignPage,
    SafePage,
    SettingPage,
    HistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
    }),
    HttpModule,
    JsonpModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['localstorage']
        //  , 'sqlite', 'indexeddb', 'websql'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecommendPage,
    MePage,
    ListPage,
    Choiceness,
    Opera,
    RegisterPage,
    CheckedPage,
    SetpwdPage,
    LoginPage,
    UserinfoPage,
    NicknamePage,
    BirthPage,
    SignPage,
    SafePage,
    SettingPage,
    HistoryPage
  ],
  providers: [
    Camera,
    FileTransfer,
    FileTransferObject,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
