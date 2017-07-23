import { Component } from '@angular/core';

import { NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Service } from "../../../util/service/service";


@Component({
    templateUrl: 'login.html',
    providers: [Service]
})
export class LoginPage {
    username: number = null;
    nickname: string;
    password: string = '';
    // fromregister: boolean = false;
    data: string = '';

    constructor(
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public service: Service,
        public loadingCtrl: LoadingController
    ) {
        // If we navigated to this page, we will have an item available as a nav param 
        // this.fromregister = navParams.get('fromregister');
        // if (this.fromregister)
        //     this.username = navParams.get('username');
        // console.log('UserId', navParams.get('userId'));获取模态框传值
    }
    /**
     * 登录
     */
    public login() {
        // console.log(this.username);
        // console.log(this.password);
        this.loading(this.username, this.password);
    }
    /**
     * 取消
     */
    public dismiss() {
        this.viewCtrl.dismiss(false);
    }
    /**
     * 等待
     * @param u username
     * @param p password
     */
    public loading(u, p) {
        let loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            // content: `
            // <div class="custom-spinner-container">
            //     <div class="custom-spinner-box"></div>
            // </div>`,
            duration: 1000
        });

        loading.onDidDismiss(() => {
            this.request(u, p);
            console.log('Dismissed loading');
        });

        loading.present();
    }
    /**
     * http请求
     */
    public request(u, p) {
        //http请求
        // this.data = "username=" + this.username + "&password=" + this.password;
        // this.service.postuser(this.data).subscribe(
        //     res => {

        //     },
        //     error => { console.log(error) },
        //     () => { }
        // );

        //登录成功  返回nickname等
        console.log("request..true");
        console.log(u, p);
        this.nickname = '';//res.nickname
        let data = {
            'islogin': true,
            'username': u,
            'nickname': this.nickname
        }
        this.viewCtrl.dismiss(data);//****************是否登录成功   true false */
        console.log(data);
        //登录失败
        // let data = {
        //     'islogin': false,
        //     'username': u,
        //     'nickname': ''
        // }
        // this.viewCtrl.dismiss(data);
    }
}
