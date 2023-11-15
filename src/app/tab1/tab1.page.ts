import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  url : string = 'https://loginprova-ff37d-default-rtdb.europe-west1.firebasedatabase.app/users.json'

  constructor(private formBuilder: FormBuilder, private _service : FirebaseService) {
    
  }

  profileForm = this.formBuilder.nonNullable.group({
    name : ['', Validators.required],
    email : ['', Validators.required],
    gender : ['', Validators.required]
  })

  onSubmit(){
    this._service.addUser(this.url, this.profileForm.value).subscribe(()=> {
      console.log('success')
    })
  
  }
 
}
