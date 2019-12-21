import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vendeur } from 'src/app/models/vendeur';

const httpOptions ={ 
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  //GET
  getListVendeurs(){ 
    return this.http.get('/server/admin/vendeurs');
  }

  getListClients(){ 
    return this.http.get('/server/admin/clients');
  }

  getListProducts(){ 
    return this.http.get('/server/admin/produits');
  }
  getListadminByLoginAndPassword(login:string, password:string ){ 
    return this.http.get('/server/admin/'+login+"/and/"+password);
  }


  ///reviser 
  deleteUser (id){
    return this.http.delete('/server/vendeurs/'+id);
  }

  //POST = creation
  createUser(data){
    let body = JSON.stringify(data);
    return this.http.post('/server/vendeurs', body, httpOptions);
  }

  
  //PUT
  updateUser(id:number){
    
    return this.http.post('/server/admin/edit/'+ id,httpOptions);
  }

  updateVendeur(data) {
    let body = JSON.stringify(data);
    return this.http.post('/server/admin/edit/'+body, httpOptions);
  }
}
