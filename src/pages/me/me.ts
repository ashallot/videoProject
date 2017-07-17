import { Component } from '@angular/core';

import { NavController, NavParams, ModalController } from 'ionic-angular';
import { RegisterPage } from "./register/register";
import { LoginPage } from "./login/login";


@Component({
  templateUrl: 'me.html'
})
export class MePage {
  userstatus: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('item');
  }

  public setting() {
    console.log("setting...");
  }

  public register() {
    console.log("register...");
    let registerModal = this.modalCtrl.create(RegisterPage, { userId: 8675309 });
    registerModal.present();
  }

  public login() {
    console.log("login...");
    let loginModal = this.modalCtrl.create(LoginPage, { userId: 8675309 });
    loginModal.present();
  }

  public userinfo() {
    console.log("userinfo...");
  }
}
