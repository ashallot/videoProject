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
        private file:File
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
        //file
        // this.name = "username=" + this.username;
        // this.service.postuser(this.name).subscribe(
        //     res => {
        //         this.data = res;
        //     },
        //     error => { console.log(error) },
        //     () => { }
        // );
        
        this.file.checkDir(this.file.externalDataDirectory, 'Movies')
            .then(_=> this.qqqq = '11111')
            .catch(err => this.wwww = '22222');
        this.file.listDir('/mnt/sdcard/Movies', 'Movies')
            .then((list) => {
                this.data=list;
                this.eeee = '33333';
            })
            .catch(err => this.rrrr = '44444');
        // this.file.checkDir(this.file.externalRootDirectory, 'assets')
        //     .then(_=> console.log('Directory exist'))
        //     .catch(err => console.log('Directory doesnt exist'));
        // this.file.listDir('D:\ng4\vp\videoProject\src\assets', 'assets')
        //     .then(list => {
        //         this.data=list;
        //         console.log(list);
        //     })
        //     .catch(err => console.log('Directory doesnt exist'));
            
        // this.data=[
        //     {
        //         "url":'assets/video/test1.mp4',
        //         "title":'test1',
        //         "progress":'20%'
        //     },
        //     {
        //         "url":'assets/video/test2.mp4',
        //         "title":'test2',
        //         "progress":'50%'
        //     },
        //     {
        //         "url":'http://baidu.ku6.com/watch/08427054594434063760.html?&recFrom=site&fr=ps_ala11',
        //         "title":'test2',
        //         "progress":'50%'
        //     }
        // ]
    }

    /**
     * play
     */
    public play(url) {
        this.navCtrl.push(PlayPage,{url:url});
        // Playing a video.
        // this.videoPlayer.play(url);
        // .then(() => {
        //     console.log('video completed');
        // }).catch(err => {
        //     console.log(err);
        // });
    }


}
