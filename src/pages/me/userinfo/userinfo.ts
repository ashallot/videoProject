import { NicknamePage } from './nickname/nickname';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavParams, ViewController, NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { BirthPage } from "./birth/birth";
import { SignPage } from "./sign/sign";
import { SafePage } from "./safe/safe";


@Component({
    templateUrl: 'userinfo.html'
})
export class UserinfoPage {
    username: number;
    password: string = '';
    usersex: string = '';
    images: Array<{ src: String }>;
    birthday: any;
    constructor(
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        public storage: Storage,
        public actionSheetCtrl: ActionSheetController,
        private camera: Camera,
    ) {
        this.images = [];
    }
    /**
     * 头像
     */
    public photo() {
        let actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: '从相册选择',
                    handler: () => {
                        this.choosePhoto();
                    }
                },
                {
                    text: '拍照',
                    handler: () => {
                        this.takephoto();
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        console.log('取消');
                    }
                }
            ]
        });

        actionSheet.present();
    }
    /**
     * 拍照
     */
    public takephoto() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            mediaType: this.camera.MediaType.PICTURE
        }
        this.camera.getPicture(options).then((ImageData) => {
            let base64Image = 'data:image/jpeg;base64,' + ImageData;
            this.images.unshift({
                src: base64Image
            })
        }, (err) => { });
    }
    /**
     * 选择照片
     */
    choosePhoto() {
        var options = {
            // Some common settings are 20, 50, and 100
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            // In this app, dynamically set the picture source, Camera or photo gallery
            sourceType: 0,//0对应的值为PHOTOLIBRARY ，即打开相册
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true  //Corrects Android orientation quirks
        }
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + ImageData;
            this.images.unshift({
                src: base64Image
            })
        }, (err) => { });
    }
    /**
     * 昵称
     */
    public nickname() {
        this.navCtrl.push(NicknamePage);
    }
    /**
     * 性别
     */
    public sex() {
        let actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: '男',
                    handler: () => {
                        this.usersex = "man";
                        //http请求  服务
                    }
                },
                {
                    text: '女',
                    handler: () => {
                        this.usersex = "woman";
                        //http请求  服务
                    }
                },
                {
                    text: '保密',
                    handler: () => {
                        this.usersex = "secret";
                        //http请求  服务
                    }
                }
            ]
        });

        actionSheet.present();
    }

    /**
     * 出生年月
     */
    public birth() {
        this.navCtrl.push(BirthPage);
    }
    /**
     * 个性签名
     */
    public tosign() {
        this.navCtrl.push(SignPage);
    }
    /**
     * 安全中心
     */
    public security() {
        this.navCtrl.push(SafePage);
    }
    /**
     * 注销
     */
    public logout() {
        let alert = this.alertCtrl.create({
            title: '真的要退出登录吗？',
            // message: '',
            buttons: [
                {
                    text: '手滑',
                    role: 'cancel',
                    handler: () => {
                        console.log('手滑');
                    }
                },
                {
                    text: '注销',
                    handler: () => {
                        //http服务 向服务端发送注销请求  并返回注销状态
                        this.setstorage(false);
                        this.navCtrl.popToRoot();
                    }
                }
            ]
        });
        alert.present();
    }
    /**
     * 注销清除本地数据
     */
    public setstorage(status) {
        this.storage.ready().then(() => {
            this.storage.set('islogin', status);
        });
        this.storage.ready().then(() => {
            this.storage.remove('username');
        });
        this.storage.ready().then(() => {
            this.storage.remove('nickname');
        });
        // this.storage.ready().then(() => {
        //     this.storage.set('username', undefined);
        // });
    }

}
