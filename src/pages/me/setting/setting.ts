import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    templateUrl: 'setting.html'
})
export class SettingPage {
    username: number;
    constructor(
        public storage: Storage,
        public navCtrl: NavController
    ) { }

    public save() {
        this.storage.ready().then(() => {
            this.storage.get('username').then((val) => {
                this.username = val;
                //http 通过username 存储birthday

                this.navCtrl.pop();
            })
        });
    }


}
