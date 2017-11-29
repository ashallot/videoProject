import { VideoPlayer } from '@ionic-native/video-player';
import { NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { PlayPage } from "../../util/play/play";
import { File } from '@ionic-native/file';

@Component({
    templateUrl: 'local.html'
})
export class LocalPage {
    username: number;
    data:any;
    qqqq:any;
    wwww:any;
    eeee:any;
    rrrr:any;
    constructor(
        public navCtrl: NavController,
        public loadingCtrl:LoadingController,
        private file:File,
        public  videoPlayer:VideoPlayer
    ) { }

   /**
    * 刷新页面or切换页面
    */
    ionViewWillEnter(){
        this.request();
    }
    /**
     * request local
     */
    public request() {
        //file
        
        this.file.checkDir(this.file.externalRootDirectory, 'Movies')
            .then(_=> this.qqqq = '11111')
            .catch(err => this.wwww = '22222');
        this.file.listDir(this.file.externalRootDirectory, 'Movies')
            .then((list) => {
                this.data=list;
                // this.data.forEach(element => {
                //     element.img = this.file.externalRootDirectory+'Movies/.'+element.name.substring(0, element.name.lastIndexOf("."))+'.png';
                // });
                this.eeee = '33333';
            })
            .catch(err => this.rrrr = '44444');
    }

    /**
     * play
     */
    public play(url) {
        // this.navCtrl.push(PlayPage,{url:url});
        // Playing a video.
        this.videoPlayer.play(this.file.externalRootDirectory+'Movies/'+url)
        .then(() => {
            console.log('video completed');
        }).catch(err => {
            console.log(err);
        });
    }


}
