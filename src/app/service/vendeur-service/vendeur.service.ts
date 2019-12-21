import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vendeur } from '../../models/vendeur';


const httpOptions ={ 
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VendeurService {

  constructor(private http: HttpClient) { }

  //GET
  getListUsers(){ 
    return this.http.get('/server/vendeurs');
  }
  getListUsersByid(id : number){ 
    return this.http.get('/server/vendeurs/'+id);
  }

  deleteUser (id){
    return this.http.delete('/server/vendeurs/'+id);
  }

  //POST = creation
  createUser(data){
    let body = JSON.stringify(data);
    return this.http.post('/server/vendeurs', body, httpOptions);
  }

  
  //PUT
  updateUser(id:number,data){
    let body = JSON.stringify(data);
    return this.http.put('/server/vendeurs/edit/'+id, data,httpOptions);
  }

  updateItem(id:number, item: Vendeur) {
    return this.http.put('/server/vendeurs/edit/'+id, JSON.stringify(item))
  }
}
