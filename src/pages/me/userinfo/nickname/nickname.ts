import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    templateUrl: 'nickname.html'
})
export class NicknamePage {
    username: number;
    nickname: string = '';
    constructor(
        public storage: Storage,
        public navCtrl: NavController
    ) { }

    public save() {
        this.storage.ready().then(() => {
            this.storage.get('username').then((val) => {
                this.username = val;
                console.log(this.username, this.nickname)
                //http 通过username 存储nickname 返回存储成功 执行下面
                this.setnickname(this.nickname);
                this.navCtrl.pop();
            })
        });
    }
    /**
       * 存储nickname到本地缓存
       */
    public setnickname(n) {
        this.storage.ready().then(() => {
            this.storage.set('nickname', n);
        });
    }

}
