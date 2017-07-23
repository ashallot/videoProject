import { Component } from '@angular/core';

import { NavParams, ViewController, NavController, AlertController, App } from 'ionic-angular';


@Component({
    templateUrl: 'safe.html'
})
export class SafePage {
    username: number;
    oldpassword: string = '';
    newpassword: string = '';
    newpwd: string = '';
    constructor(
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public navCtrl: NavController,
        public appCtrl: App,
        private alertCtrl: AlertController
    ) {
        this.username = navParams.get('username');
        console.log(this.username);
    }

    public done() {
        if (this.newpassword != this.newpwd) {
            let alert = this.alertCtrl.create({
                title: '输入密码不一致！',
                subTitle: '请确认两次密码输入一致！',
                buttons: ['确认']
            });
            alert.present();
        } else {
            //http服务   将用户名、密码传给服务端  并返回truefalse 执行下面
            //返回上级
        }

    }
}
