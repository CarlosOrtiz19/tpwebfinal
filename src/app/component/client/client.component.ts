import { Component, OnInit } from '@angular/core';
import { Vendeur } from 'src/app/models/vendeur';
import { ProductService } from 'src/app/service/produit-service/produit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  listeProduits : any =[];

  constructor(    private productService: ProductService ) { }

  ngOnInit() {
    this.getlisteProduits();
  }
  
getlisteProduits(){
  return this.productService.getListProduct().subscribe(
    res=> {this.listeProduits = res},
    ()=> console.log(this.listeProduits),
  )
}



retourner(id){
  return this.productService.updateVendu(id)
  .subscribe(data => this.getlisteProduits(), error => console.log(error));
}


}



