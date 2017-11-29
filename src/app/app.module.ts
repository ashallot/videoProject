import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RecommendPage } from '../pages/recommendPage/recommendPage';
import { Opera } from './../pages/recommendPage/opera/opera';
import { Choiceness } from './../pages/recommendPage/choiceness/choiceness';
import { ListPage } from '../pages/list/list';

import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VideoPlayer } from "@ionic-native/video-player";
import { File } from '@ionic-native/file';

import { MePage } from "../pages/me/me";
import { HttpModule, JsonpModule } from "@angular/http";
import { RegisterPage } from "../pages/me/motal/register/register";
import { CheckedPage } from "../pages/me/motal/checked/checked";
import { SetpwdPage } from "../pages/me/motal/setpwd/setpwd";
import { LoginPage } from "../pages/me/motal/login/login";
import { UserinfoPage } from "../pages/me/userinfo/userinfo";

import { NicknamePage } from "../pages/me/userinfo/nickname/nickname";
import { BirthPage } from "../pages/me/userinfo/birth/birth";
import { SignPage } from "../pages/me/userinfo/sign/sign";
import { SafePage } from "../pages/me/userinfo/safe/safe";
import { SettingPage } from "../pages/me/setting/setting";
import { HistoryPage } from "../pages/me/history/history";
import { LocalPage } from "../pages/me/local/local";
import { PlayPage } from "../pages/util/play/play";
import { GamePage } from '../pages/game/game';
import { ClassifyPage } from '../pages/classify/classify';
@NgModule({
  declarations: [
    MyApp,
    RecommendPage,
    MePage,
    GamePage,
    ClassifyPage,
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
    HistoryPage,
    LocalPage,
    PlayPage
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
    GamePage,
    ClassifyPage,
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
    HistoryPage,
    LocalPage,
    PlayPage
  ],
  providers: [
    VideoPlayer,
    Camera,
    File,
    FileTransfer,
    FileTransferObject,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
