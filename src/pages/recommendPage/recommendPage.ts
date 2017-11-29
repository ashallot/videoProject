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
  data11:any = [
    {
        "id": '1',
        "url": 'assets/jx/jx1.png',
        "title": '热点1',
        "address":'http://www.iqiyi.com/v_19rrduxqxw.html'
    },
    {
        "id": '2',
        "url": 'assets/jx/jx2.png',
        "title": '热点2',
        "address":'http://www.iqiyi.com/v_19rrdriib0.html'
    },{
      "id": '3',
      "url": 'assets/jx/jx3.png',
      "title": '热点3',
      "address":'http://www.iqiyi.com/v_19rr8s9o0k.html'
  }
]
data12:any = [
{
    "id": 4,
    "url": 'assets/jx/jx4.png',
    "title": '热点4',
    "address":'http://www.iqiyi.com/v_19rrefmn4w.html'
},
{
  "id": 5,
  "url": 'assets/jx/jx5.png',
  "title": '热点4',
  "address":'http://www.iqiyi.com/v_19rrdofx3w.html'
},
{
  "id": 6,
  "url": 'assets/jx/jx6.png',
  "title": '热点4',
  "address":'http://www.iqiyi.com/v_19rreixzio.html'
}
]
data21:any = [
  {
      "id": '1',
      "url": 'assets/fj/fj1.png',
      "title": '番剧1',
      "address":'http://www.iqiyi.com/v_19rrel6y60.html'
  },
  {
      "id": '2',
      "url": 'assets/fj/fj2.png',
      "title": '番剧2',
      "address":'http://www.iqiyi.com/v_19rremm8nk.html'
  },{
    "id": '3',
    "url": 'assets/fj/fj3.png',
    "title": '番剧3',
    "address":'http://www.iqiyi.com/v_19rrelz73k.html'
}
]
data22:any = [
{
  "id": 4,
  "url": 'assets/fj/fj4.png',
  "title": '番剧4',
  "address":'http://www.iqiyi.com/v_19rrenz628.html'
},
{
"id": 5,
"url": 'assets/fj/fj5.png',
"title": '番剧4',
"address":'http://www.iqiyi.com/v_19rrdxyaaw.html'
},
{
"id": 6,
"url": 'assets/fj/fj6.png',
"title": '番剧4',
"address":'http://www.iqiyi.com/v_19rrenz6vk.html'
}
]
  constructor() { }
}
