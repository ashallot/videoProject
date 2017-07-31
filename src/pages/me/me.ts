import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

import { RegisterPage } from "./motal/register/register";
import { LoginPage } from "./motal/login/login";
import { UserinfoPage } from "./userinfo/userinfo";
import { SettingPage } from "./setting/setting";
import { HistoryPage } from "./history/history";


@Component({
  templateUrl: 'me.html',
})
export class MePage {

  islogin: boolean = false;
  userstatus: boolean = false;
  username: number;
  nickname: string;
  regstatus: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public storage: Storage
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('item');
  }
  /**
   * 刷新页面or切换页面
   */
  ionViewWillEnter() {
    this.storage.ready().then(() => {
      this.storage.get('islogin').then((val) => {
        this.userstatus = val;
        if (!this.userstatus && this.islogin) {
          this.logoutsuccess();
        }
        this.islogin = this.userstatus;
      })
    });
    this.storage.ready().then(() => {
      this.storage.get('nickname').then((val) => {
        this.nickname = val;
        // console.log('nickname', this.nickname);
      })
    });
    this.storage.ready().then(() => {
      this.storage.get('username').then((val) => {
        this.username = val;
        // console.log('username', this.username);
      })
    });
    this.storage.ready().then(() => {
      this.storage.get('regstatus').then((val) => {
        this.regstatus = val;
        // console.log('regstatus', this.regstatus);
      })
    });
  }
  /**
   * 设置
   */
  public setting() {
    this.navCtrl.push(SettingPage);
  }
  /**
   * 个人信息
   */
  public userinfo() {
    this.navCtrl.push(UserinfoPage, { username: this.username });
  }
  /**
   * 注册
   */
  public register() {
    let registerModal = this.modalCtrl.create(RegisterPage);
    registerModal.onDidDismiss(data => {
      if (data != false) {
        if (this.regstatus != false) {
          this.registersuccess();
        } else {
          this.registerfailed();
        }
      }
    });
    registerModal.present();
  }
  /**
   * 登录
   */
  public login() {
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.onDidDismiss(data => {
      if (data) {
        //模态框消失后 该页面应该获取的值
        this.islogin = data.islogin;
        this.username = data.username;
        this.nickname = data.nickname;
        this.setstorage(data);
      } else if (data != '') {
        this.setstorage(data);
        this.loginfailed();
      }
    });
    loginModal.present();
  }
  /**
   * 各种反馈状态
   */
  //登录失败
  public loginfailed() {
    let alert = this.alertCtrl.create({
      title: '登录失败',
      subTitle: '用户名或密码错误！',
      buttons: ['确认']
    });
    alert.present();
  }
  //注册成功
  public registersuccess() {
    let alert = this.alertCtrl.create({
      title: '注册成功请登录!',
      buttons: ['确认']
    });
    alert.onDidDismiss(data => {
      this.storage.ready().then(() => {
        this.storage.remove('regstatus');
      });
    });
    alert.present();
  }
  //注册失败
  public registerfailed() {
    let alert = this.alertCtrl.create({
      title: '注册失败',
      subTitle: '服务器错误！',
      buttons: ['确认']
    });
    alert.onDidDismiss(data => {
      this.storage.ready().then(() => {
        this.storage.remove('regstatus');
      });
    });
    alert.present();
  }
  //注销成功
  public logoutsuccess() {
    let alert = this.alertCtrl.create({
      title: '注销成功！',
      // subTitle: '已注销用户！',
      buttons: ['确认']
    });
    alert.present();
  }
  /**
   * 存储登录信息到本地缓存
   */
  public setstorage(data) {
    this.storage.ready().then(() => {
      this.storage.set('islogin', data.islogin);
    });
    this.storage.ready().then(() => {
      this.storage.set('username', data.username);
    });
    this.storage.ready().then(() => {
      this.storage.set('nickname', data.nickname);
    });
  }

  /**
   * history
   */
  public history() {
    this.navCtrl.push(HistoryPage);
  }





}
