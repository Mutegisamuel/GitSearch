import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitsearchService {

  private username: string;
  private clientid = 'cce3b4e87318a826f466';
  private clientsecret = '5207ffb9824d9fb741e9c7bb92f5d5e1de80eec0';

  constructor(private http: Http) {
    console.log("service works!");
    this.username = '';
  }

  getProfileInfo() {
    return this.http.get('https://api.github.com/users' + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());

  }

}
