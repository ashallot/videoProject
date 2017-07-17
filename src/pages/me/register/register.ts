import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';


@Component({
    templateUrl: 'register.html'
})
export class RegisterPage {

    constructor(public navParams: NavParams, public viewCtrl: ViewController) {
        // If we navigated to this page, we will have an item available as a nav param
        // this.selectedItem = navParams.get('item');
        console.log('UserId', navParams.get('userId'));
    }

    public register() {
        console.log("register...");
    }

    public dismiss() {
        let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    }
}
