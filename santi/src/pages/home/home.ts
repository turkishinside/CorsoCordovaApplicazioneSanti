import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SaintDetailPage } from '../saint-detail/saint-detail';

import { SantiService } from '../../providers/santi-service';

import { Santo } from '../../models/santo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SantiService]
})
export class HomePage {

  saintDate: any;
  santi: Santo[] = [];

  constructor(public navCtrl: NavController, public service: SantiService) {
    this.saintDate = new Date().toISOString();
  }

  cercaSanto() {
    var dateNew = new Date(this.saintDate);

    this.service.getSaintByDate(dateNew.getMonth()+1, dateNew.getDate()).subscribe(
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
