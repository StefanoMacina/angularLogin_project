import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private _http : HttpClient) { }
 


  //Metodo per inserimento dati nel db
  addUser(url : string, body : User){
    return this._http.post(url , body )
  }

  getAllUsers(url : string){
    return this._http.get(url)
  }

}
