import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SaintDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-saint-detail',
  templateUrl: 'saint-detail.html'
})
export class SaintDetailPage {

  santo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.santo = navParams.get('santoSelected');
  }

}
