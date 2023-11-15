import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { FirebaseService } from '../services/firebase.service';
import { map, toArray } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private _service : FirebaseService) {}

  users : User[]  = []
  
  url = 'https://loginprova-ff37d-default-rtdb.europe-west1.firebasedatabase.app/users.json'

  
 getAllUsersFunction(event? : any){
  this._service.getAllUsers(this.url)
  .pipe(
    map((data: User) => Object.values(data))
    )
    .subscribe((users: User[]) => {
      this.users = users;
      console.log(this.users)
      if(event){
        event.target.complete()
      }
    },
    ((error) => {
      console.log(`There was an error in getAllUsersFunction : ${error}`)
    }),
    (() => {
      console.log('completed getAllUsers')
    }));
  }

  ngOnInit() {
    this.getAllUsersFunction()
  }

}
