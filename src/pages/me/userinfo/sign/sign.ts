import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    templateUrl: 'sign.html'
})
export class SignPage {
    username: number;
    sign: string = '';
    constructor(
        public storage: Storage,
        public navCtrl: NavController
    ) { }

    public save() {
        this.storage.ready().then(() => {
            this.storage.get('username').then((val) => {
                this.username = val;
                console.log(this.username, this.sign)
                //http 通过username 存储birthday

                this.navCtrl.pop();
            })
        });
    }


}
