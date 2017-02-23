import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SaintDetailPage } from '../saint-detail/saint-detail';

import { SantiService } from '../../providers/santi-service';

import { Santo } from '../../models/santo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [SantiService]
})
export class AboutPage {

  santi: Santo[] = [];
  constructor(public navCtrl: NavController, public service: SantiService) {
    /*for(var i = 0;i<10;i++){
      this.santi.push({Nome: "Santo" + i, id: i});
    }*/
    
  }

  ionViewWillEnter() {
    this.service.load().subscribe(
        data => {
            this.santi = data;
        },
        err => {
            console.log(err);
        },
        () => console.log('ok')
    );
  }

  itemSelected(santo) {
    this.navCtrl.push(SaintDetailPage, {santoSelected: santo});
  }

}
