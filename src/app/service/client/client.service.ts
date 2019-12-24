import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions ={ 
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

 
   getListClients(){ 
    return this.http.get('/server/clients');
  }

  deleteclient(id){
    return this.http.delete('/server/clients/'+id);
  }
}
