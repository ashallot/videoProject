import { NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'history.html'
})
export class HistoryPage {
    username: number;
    data:any;
    constructor(
        public navCtrl: NavController,
        public loadingCtrl:LoadingController
    ) { }

    /**
    * 刷新页面or切换页面
    */
    ionViewWillEnter(){
        this.load(this.username);
    }
    /**
     * load
     */
    public load(u) {
        let loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            duration: 1000
        });

        loading.onDidDismiss(() => {
            this.request(u);
            console.log('Dismissed loading');
        });

        loading.present();
    }
    /**
     * request
     */
    public request(u) {
        //http
        // this.name = "username=" + this.username;
        // this.service.postuser(this.name).subscribe(
        //     res => {
        //         this.data = res;
        //     },
        //     error => { console.log(error) },
        //     () => { }
        // );
        this.data=[
            {
                "id":'1',
                "url":'assets/img/123.png',
                "title":'夏目友人帐1',
                "progress":'20%'
            },
            {
                "id":'2',
                "url":'assets/img/123.png',
                "title":'夏目友人帐2',
                "progress":'50%'
            }
        ]
    }

    /**
     * play
     */
    public play(id) {
        console.log('playing...video'+id);
    }
}
