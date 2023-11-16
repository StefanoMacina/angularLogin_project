import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private _http : HttpClient) { }
 


  //Metodo per inserimento dati nel db
  addUser(url : string, body : any){
    return this._http.post(url , body )
  }

  getAllUsers(url : string){
    return this._http.get(url)
  }

  getUserById(url : string, id : string){
    return this._http.get(`${url}/${id}.json`)
  }

  deleteUser(url: string, id: string) {
    return this._http.delete(`${url}/${id}.json`)
      
    ;
  }


}
