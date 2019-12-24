import { Component, OnInit } from '@angular/core';
import { VendeurService } from 'src/app/service/vendeur-service/vendeur.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendeur } from 'src/app/models/vendeur';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/service/produit-service/produit.service';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-edit-seller',
  templateUrl: './edit-seller.component.html',
  styleUrls: ['./edit-seller.component.css']
})
export class EditSellerComponent implements OnInit {
  id: number;
  seller: Vendeur;

  constructor(private userService: VendeurService,
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
    this.getProductsVendeur(this.id);
    this.getVendeurById(this.id)
  }

  getVendeurById(id) {
    this.userService.getListUsersByid(this.id).subscribe(
      res => {
        console.log(res)
        this.sellerAux = res;
        error => console.log(error)
      });
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

  editUserFunction() {
    return this.userService.updateUser(this.id, this.sellerAux)
      .subscribe(data => console.log(data), error => console.log(error));
  }
  creerProduit() {
  this.save();
   this.ngOnInit();
   this.submitted = true;
  }

  getProductsVendeur(id) {
    return this.productService.getListProductByVendeur(id).subscribe(
      data => { this.produitsVendeur = data },
      () => console.log(this.produitsVendeur)
    )
  }

  cacherProduit(id){
    return this.productService.updateEtat(id)
    .subscribe(data => this.ngOnInit(), error => console.log(error));

}


deleteProduit(produit : Produit){
  return this.productService.deleteProduit(produit.id).subscribe( Response => {
    //Update list after delete is successful
    this.ngOnInit(),
    err => console.error(err),
   () => console.log('produit suprime ')
  });
}

eliminerVendeur(){
this.deletePVendeur();
this.deleteUser();
this.gotoRoute();
}

deletePVendeur(){
  console.log(this.id)
  return this.productService.deleteParVendeurId(this.id).subscribe( Response => {
    this.ngOnInit(),
    err => console.error(err)
  });
}

gotoRoute(){
  return this.router.navigate([' '])
}

deleteUser(){
  return this.userService.deleteUser(this.id).subscribe( Response => {
    () => console.log('liste vendeurs apres supression')
  });

}

}
