import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  user: UserModel | null | undefined;

  constructor(private _authService: AuthService, private _router : Router, private _activRoute : ActivatedRoute) {}

  ionViewWillEnter() {
    this.user = this._authService.user;
  }

  goToSignUp() {
    this._authService.goToSignUp();
  }

  // Elimino i dati dell'utente dal localstorage e ripulisco le variabili
  logout() {
    this._authService.user = null;
    this._authService.isLoggedIn = false;
    localStorage.removeItem('user');
    this._router.navigateByUrl('/login')
  }

  goToLogin() {
    this._authService.goToLogin();
  }
}
