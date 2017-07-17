import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';


@Component({
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navParams: NavParams, public viewCtrl: ViewController) {
        // If we navigated to this page, we will have an item available as a nav param
        // this.selectedItem = navParams.get('item');
        console.log('UserId', navParams.get('userId'));
    }

    public login() {
        console.log("login...");
    }

    public dismiss() {
        let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    }
}
