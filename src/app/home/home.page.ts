import { Component } from '@angular/core';
import { RestProviderService } from '../rest-provider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage   {
  users: any;

  constructor(public restProvider: RestProviderService) {
    this.getUsers();
  }

  getUsers(){
    this.restProvider.getPosts().then(data => {
      this.users = data;
      console.log(this.users);
    })
  }

}
