import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SaintDetailPage } from '../saint-detail/saint-detail';

import { SantiService } from '../../providers/santi-service';

import { Santo } from '../../models/santo';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [SantiService]
})
export class ContactPage {

  searchQuery: string = '';
  santi: Santo[] = [];

  constructor(public navCtrl: NavController, public service: SantiService) {
    
  }

  searchSanti(ev: any) {
    let val = ev.target.value;
    console.log('val [' + val + ']');

    if(val && val.trim() != ''){
      this.service.getSaint(val).subscribe(
          data => {
            if(data){
              this.santi = data.filter((item) => {
                return (item.Nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
              })
            } 
          },
          err => {
              console.log(err);
          },
          () => console.log('ok')
      );
    } else {
      this.santi = [];
    }
  }

  itemSelected(santo) {
    this.navCtrl.push(SaintDetailPage, {santoSelected: santo});
  }

}
