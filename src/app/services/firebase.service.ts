import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private _http: HttpClient, private _authService: AuthService) {}

  //Metodo per inserimento dati nel db
  addUser(url: string, body: any) {
    return this._http.post(url, body);
  }

  // autorizzo le chiamate se è presente il token di un utente
  getAllUsers(url: string) {
    return this._http.get(`${url}?auth=${this._authService.user?.token}`);
  }

  getUserById(url: string, id: string) {
    return this._http.get(`${url}/${id}.json`);
  }

  deleteUser(url: string, id: string) {
    return this._http.delete(`${url}/${id}.json`);
  }

  editUser(url: string, id: string, body: {}) {
    return this._http.patch(`${url}/${id}.json`, body);
  }
}
