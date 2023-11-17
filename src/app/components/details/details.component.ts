import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user.interface';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  presentingElement : undefined | null | Element;
  url =
  'https://loginprova-ff37d-default-rtdb.europe-west1.firebasedatabase.app/users';
  userId! : string 
  user : any
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _service: FirebaseService,
    private actionSheetCtrl: ActionSheetController,
    private formBuilder: FormBuilder
    ) {
   
    //  this._activatedRoute.params.subscribe((data) => this.userId = data['id'])
    this.userId = this._activatedRoute.snapshot.params['id']
  }
  
  ngOnInit(){
    this.presentingElement = document.querySelector('.ion-page');
    
  }
  
  ionViewWillEnter() {
    
    this._service
    .getUserById(this.url, this.userId)
    .subscribe((user) => {
      this.user = user

      // Passare dati di default dell'utente nella compilazione del form
      this.editUserForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        gender: this.user.gender,
      });
    });
  };
  
  
   editUserForm = this.formBuilder.group({
    name : [],
    email : ['', Validators.required],
    gender : ['']
  })

  onSubmitEditForm(){
    // console.log(this.editUserForm.value)
    this._service.editUser(this.url, this.userId, 
      this.editUserForm.value
      ).subscribe(x => this.user = x)
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
  
}
