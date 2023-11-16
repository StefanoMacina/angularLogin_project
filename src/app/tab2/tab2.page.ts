import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { FirebaseService } from '../services/firebase.service';
import { IonRefresher, RefresherEventDetail, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  refreshEvent: CustomEvent<RefresherEventDetail> | null = null;
  usersList: User[] = [];
  url =
    'https://loginprova-ff37d-default-rtdb.europe-west1.firebasedatabase.app/users.json';

  constructor(
    private _service: FirebaseService,
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private toastController: ToastController

  ) {}

  ngOnInit() {
    this.getAllUsersFunction();
  }

  ionViewWillEnter() {
    this.getAllUsersFunction();
  }

  /** Invio al child component List
   * Questa funzione serve per richiedere i dati nel db usando il service
   *
   * @param event evento preso dal componente di refresh di ionic, impostato come opzionale perchè la funzione
   * viene richiamata da più parti (ngOnInit) , dove non viene passato nessun evento
   * al completamento dell'observable deve essere aggiunto il complete()
   *
   */
  getAllUsersFunction(event? : CustomEvent<RefresherEventDetail>) {
    this._service
      .getAllUsers(this.url)

      .subscribe(
        (users: any) => {
          users
            ? (this.usersList = Object.keys(users).map((key) => {
                users[key]['id'] = key;
                return users[key];
              }))
            : (this.usersList = []);

          if (event) {
            event.detail.complete();
          }
        },
        (error) => {
          console.log(`There was an error in getAllUsersFunction : ${error}`);
        },
        () => {
          console.log('completed getAllUsers');
        }
      );
  }



  // Ricevo dal child component list
  showDetails(id: string) {
    this.router.navigate(['details', `${id}`], {
      relativeTo: this._activatedRoute,
    });
  }

  // Ricevo dal child component list
  deleteUser(user: User) {
    this._service
      .deleteUser(
        'https://loginprova-ff37d-default-rtdb.europe-west1.firebasedatabase.app/users',
        user.id
      )
      .subscribe(() => {
        this.presentToast('top' , user.email)
        this.getAllUsersFunction();
      });
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', userEmail : string) {
    const toast = await this.toastController.create({
      message: `User ${userEmail} successfully deleted`,
      duration: 1500,
      position: position,
      color : 'success'
    });

    await toast.present();
  }
}
