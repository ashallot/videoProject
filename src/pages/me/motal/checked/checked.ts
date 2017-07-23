import { SetpwdPage } from './../setpwd/setpwd';
import { Component } from '@angular/core';

import { NavParams, ViewController, NavController } from 'ionic-angular';


@Component({
    templateUrl: 'checked.html'
})
export class CheckedPage {
    contrycode: string;
    username: number;
    checkcode: number;
    constructor(
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public navCtrl: NavController
    ) {
        this.username = navParams.get('username');
        this.contrycode = navParams.get('contrycode');
    }

    public getcode() {
        //http服务  向服务端重新请求验证码 
    }
    public pwdpage() {
        //向服务端发送验证码，返回truefalse  执行下面跳转或提示
        this.navCtrl.push(SetpwdPage, {
            username: this.username
        });
    }
}
