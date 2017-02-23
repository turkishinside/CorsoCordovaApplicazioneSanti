import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SantiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SantiService {

  constructor(public http: Http) {
    console.log('Hello SantiService Provider');
  }

  load() {
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    myHeaders.set('Accept', 'application/json');
    opt = new RequestOptions({
      headers: myHeaders
    });

    var url = 'http://santieicone.azurewebsites.net/saints';
    var response = this.http.get(url,opt).map(res => res.json());
    return response;
  }

  getSaint(santoName) {
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    myHeaders.set('Accept', 'application/json');
    opt = new RequestOptions({
      headers: myHeaders
    });

    var url = 'http://santieicone.azurewebsites.net/search/' + santoName;
    var response = this.http.get(url,opt).map(res => res.json());
    return response;
  }

  getSaintByDate(mese,giorno) {
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    myHeaders.set('Accept', 'application/json');
    opt = new RequestOptions({
      headers: myHeaders
    });

    var url = 'http://santieicone.azurewebsites.net/saints/' + mese + '/' + giorno;
    var response = this.http.get(url,opt).map(res => res.json());
    return response;
  }

}
