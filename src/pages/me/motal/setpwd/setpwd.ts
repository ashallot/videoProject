import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavParams, ViewController, NavController, AlertController, App, LoadingController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { MePage } from "../../me";
import { RegisterPage } from "../register/register";


@Component({
    templateUrl: 'setpwd.html'
})
export class SetpwdPage {
    username: number;
    password: string = '';
    pwd: string = '';
    regstatus: boolean = false;
    constructor(
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public navCtrl: NavController,
        public appCtrl: App,
        private alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public storage: Storage
    ) {
        this.username = navParams.get('username');
    }

    public done() {
        if (this.password != this.pwd) {
            let alert = this.alertCtrl.create({
                title: '输入密码不一致！',
                subTitle: '请确认两次密码输入一致！',
                buttons: ['确认']
            });
            alert.present();
        } else {
            this.loading();
        }

    }
    /**
     * 等待
     */
    public loading() {
        let loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            duration: 1000
        });

        loading.onDidDismiss(() => {
            this.request();
        });

        loading.present();
    }
    /**
     * http请求
     */
    public request() {
        //http请求
        // this.data = "username=" + this.username + "&password=" + this.password;
        // this.service.postuser(this.data).subscribe(
        //     res => {
        //      this.regstatus = res;
        //     },
        //     error => { console.log(error) },
        //     () => { }
        // );

        //注册成功  返回mepage
        this.regstatus = true;

        if (!this.regstatus) this.registerfailed();//注册失败

        this.setregstatus(true);
        this.navCtrl.setRoot(RegisterPage, { islast: true });
    }
    //注册失败
    public registerfailed() {
        let alert = this.alertCtrl.create({
            title: '注册失败',
            subTitle: '服务器错误！',
            buttons: ['确认']
        });
        alert.present();
    }
    /**
   * 存储注册成功信息到本地缓存
   */
    public setregstatus(regstatus) {
        this.storage.ready().then(() => {
            this.storage.set('regstatus', regstatus);
        });
    }
}
