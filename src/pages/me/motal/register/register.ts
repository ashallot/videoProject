import { Component } from '@angular/core';

import { NavParams, ViewController, NavController, AlertController } from 'ionic-angular';
import { CheckedPage } from "../checked/checked";


@Component({
    templateUrl: 'register.html'
})
export class RegisterPage {
    // contrycode: string = '+86';//根据需求更改
    username: number;
    password:number;
    repassword:number;
    islast: boolean = false;
    constructor(
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public navCtrl: NavController,
        public alertCtrl: AlertController,
    ) {
        // If we navigated to this page, we will have an item available as a nav param
        // this.selectedItem = navParams.get('item');
        // console.log('UserId', navParams.get('userId'));
        // this.islast = navParams.get('islast');
    }
    /**
   * 刷新页面or切换页面
   */
    // ionViewWillEnter() {
    //     if (this.islast) {
    //         this.dismiss();
    //     }

    // }
    public register() {
        //1.http服务  向服务端发送username&password

        //2.根据服务端返回的参数true/false执行下面的跳转或提示
        

        let alert = this.alertCtrl.create({
            title: '注册成功',
            // message: '',
            buttons: [
                {
                    text: '确认',
                    role: 'cancel',
                    handler: () => {
                        console.log('手滑');
                        this.dismiss();
                    }
                }
            ]
        });
        alert.present();

        // this.navCtrl.push(CheckedPage, {
        //     username: this.username,
        //     // contrycode: this.contrycode
        // });
    }
    /**
     * 关闭注册模态
     */
    public dismiss() {
        this.viewCtrl.dismiss(false);
    }
}
