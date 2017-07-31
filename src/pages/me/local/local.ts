import { NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player';

@Component({
    templateUrl: 'local.html'
})
export class LocalPage {
    username: number;
    data:any;
    constructor(
        public navCtrl: NavController,
        public loadingCtrl:LoadingController,
        public videoPlayer:VideoPlayer,
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
                "url":'assets/video/test1.mp4',
                "title":'test1',
                "progress":'20%'
            },
            {
                "url":'assets/video/test2.mp4',
                "title":'test2',
                "progress":'50%'
            }
        ]
    }

    /**
     * play
     */
    public play(url) {
        // Playing a video.
        this.videoPlayer.play(url);
        // .then(() => {
        //     console.log('video completed');
        // }).catch(err => {
        //     console.log(err);
        // });
    }


}
