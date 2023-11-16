import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, find, map, toArray } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  user: any;

  url =
    'https://loginprova-ff37d-default-rtdb.europe-west1.firebasedatabase.app';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _service: FirebaseService
  ) {}

  ngOnInit() {
    
  }
}
