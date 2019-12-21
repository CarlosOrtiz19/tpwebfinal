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

  deleteProduct (id){
    return this.http.delete('/server/produits/'+id);
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

}
