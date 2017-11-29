import { HotPage } from './../pages/hot/hot';
import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

import { RecommendPage } from '../pages/recommendPage/recommendPage';
import { ListPage } from '../pages/list/list';
import { MePage } from "../pages/me/me";
import { GamePage } from '../pages/game/game';
import { ClassifyPage } from '../pages/classify/classify';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  recommendPage: any = RecommendPage;
  listPage: any = ListPage;
  mePage: any = MePage;
  gamePage:any = GamePage;
  classifyPage:any = ClassifyPage;
  hotPage:any = HotPage;
  constructor(
    public platform: Platform
  ) {
    console.log(this.platform.platforms());
    console.log("ios", this.platform.is("ios"));
    console.log("android", this.platform.is("android"));
    console.log("windows", this.platform.is("windows"));
    console.log("core", this.platform.is("core"));

  }




}
