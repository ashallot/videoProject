import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
    templateUrl: 'play.html'
})
export class PlayPage {
    url:any;
    safeurl:any;
    constructor(
        public navparams:NavParams,
        private sanitizer: DomSanitizer
    ) { 
        this.url = navparams.get('url');
        this.safeurl = sanitizer.bypassSecurityTrustResourceUrl(this.url);
     }

}
