import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'choiceness',
  templateUrl: 'choiceness.html'
})
export class Choiceness {
  data:any = [
    {
        "id": '1',
        "url": 'assets/redian/redian1.png',
        "title": '热点1',
        "address":'https://v.qq.com/x/page/y050752zj1k.html'
    },
    {
        "id": '2',
        "url": 'assets/redian/redian2.png',
        "title": '热点2',
        "address":'https://v.qq.com/x/page/x0501bfv7uz.html'
    },
    {
        "id": '3',
        "url": 'assets/redian/redian3.png',
        "title": '热点3',
        "address":'https://v.qq.com/x/page/z05037k7tdi.html'
    },
    {
        "id": 4,
        "url": 'assets/redian/redian4.png',
        "title": '热点4',
        "address":'https://v.qq.com/x/cover/klxw5azgqvwv05z/d0509kjodhi.html'
    }
]
  constructor(public navCtrl: NavController) {

  }
}
