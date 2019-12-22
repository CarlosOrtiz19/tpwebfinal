import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions ={ 
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  //GET
  getListProduct(){ 
    return this.http.get('/server/produits');
  }

  getListProductByid(id : number){ 
    return this.http.get('/server/produits/'+id);
  }

  getListProductByVendeur(id : number){ 
    return this.http.get('/server/produits/vendeur/'+id);
  }

  deleteProduit (id){
    return this.http.delete('/server/produits/'+id);
  }

  deleteParVendeurId (id){
    return this.http.delete('/server/produits/effacerDeVendeur/'+id);
  }

  //POST = creation
  createProduct(data){
    let body = JSON.stringify(data);
    return this.http.post('/server/produits', body, httpOptions);
  }

  
  //PUT
  updateProduct(id,data){
    let body = JSON.stringify(data);
    return this.http.put('/server/produits/edit/'+ id, data,httpOptions);
  }

   //PUT
   updateEtat(id:number){
    return this.http.post('/server/produits/edit/'+ id,httpOptions);
  }

  updateVendu(id:number){
    console.log(id)
    return this.http.post('/server/produits/vendu/'+ id,httpOptions);
  }

}
