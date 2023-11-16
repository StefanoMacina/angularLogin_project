import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  user:any;

  url = 'https://loginprova-ff37d-default-rtdb.europe-west1.firebasedatabase.app/users';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _service: FirebaseService
  ) {}

  ionViewWillEnter() {
   this._activatedRoute.params.subscribe((data) => {
    this._service.getUserById(this.url, data['id']).subscribe((user) => this.user = user)
    // console.log('user id from routes : ' + data['id'])
    })
  

    /* this._service.getUserById(this.url, userId).subscribe((user : any) => {
      console.log(user)
    }) */
  }

}
