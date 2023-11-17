import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private _authService: AuthService) {}

  // Quando viene inizializzato il componente app controllo se è presente il token e lo assegno a user in authservice 
  ngOnInit() {
    const userString = localStorage.getItem('user');
    if (userString) {
      const { email, id, _token, _expirationDate } = JSON.parse(userString);
      this._authService.createUser(email, id, _token, _expirationDate);
    }
  }
}
