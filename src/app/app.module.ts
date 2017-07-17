import { Opera } from './../pages/recommendPage/opera/opera';
import { Choiceness } from './../pages/recommendPage/choiceness/choiceness';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RecommendPage } from '../pages/recommendPage/recommendPage';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MePage } from "../pages/me/me";
import { RegisterPage } from "../pages/me/register/register";
import { LoginPage } from "../pages/me/login/login";

@NgModule({
  declarations: [
    MyApp,
    RecommendPage,
    MePage,
    ListPage,
    Choiceness,
    Opera,
    RegisterPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
