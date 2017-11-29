import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'game.html'
})
export class GamePage {
    data:any = [
        {
            "id": '1',
            "url": 'assets/game/game1.png',
            "title": '推荐游戏1',
            "address":'https://www.vipcn.com/zt/mhxysy/xiazai/'
        },
        {
            "id": '2',
            "url": 'assets/game/game2.png',
            "title": '推荐游戏2',
            "address":'http://my.163.com/'
        },
        {
            "id": '3',
            "url": 'assets/game/game3.png',
            "title": '推荐游戏3',
            "address":'http://hy.163.com/'
        }
    ]
    constructor(
        public navCtrl: NavController
    ) { }
    


}
