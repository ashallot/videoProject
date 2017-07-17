import { Opera } from './opera/opera';
import { Component } from '@angular/core';
import { Choiceness } from "./choiceness/choiceness";
@Component({
  templateUrl: 'recommendPage.html'
})
export class RecommendPage {
  choiceness: any = Choiceness;
  opera: any = Opera;

  types: any = "choiceness";

  constructor() {

  }
}
