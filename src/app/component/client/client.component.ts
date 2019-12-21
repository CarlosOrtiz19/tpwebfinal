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

  id: number;
  seller: Vendeur;
  listeProduits : any =[];

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  produit = new Produit
  submitted = false;
  produitsVendeur: any = [];

  sellerAux: any = {
    id: 0,
    nom: ' ',
    prenom: ' ',
    telephone: ' ',
    email: ' ',
    password: ' ',
  }

  newProduct = this.fb.group({
    nom: [''],
    description: [''],
    prix: [''],
    image: [''],
    vendeurId: [''],
  })

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getlisteProduits();
   
  }

  save() {
    this.produit.nom = this.newProduct.get("nom").value;
    this.produit.description = this.newProduct.get("description").value;
    this.produit.prix = this.newProduct.get("prix").value;
    this.produit.vendeurId = this.id;
    this.produit.active = true;
    this.produit.vendu = false;

    this.productService.createProduct(this.produit)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  creerProduit() {
  this.save();
   this.ngOnInit();
   this.submitted = true;
  }


  cacherProduit(id){
    return this.productService.updateEtat(id)
    .subscribe(data => this.ngOnInit(), error => console.log(error));

}

getlisteProduits(){
  return this.productService.getListProduct().subscribe(
    res=> {this.listeProduits = res},
    ()=> console.log(this.listeProduits),
  )
}


}



