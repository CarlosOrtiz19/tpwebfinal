import { Component, OnInit, Input } from '@angular/core';
import { VendeurService } from 'src/app/service/vendeur-service/vendeur.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/produit-service/produit.service';
import { AdminService } from 'src/app/service/administrateur-service/admin.service';
import { Vendeur } from 'src/app/models/vendeur';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {
  isListeVendeurs = false;
  islisteProduits = false;
  islisteClients= false;
 
  montrer : boolean = false;
  id:number;
  listeVendeurs: any = [];
  listProduits: any =[];
  listClients: any =[];
  
  vendeur :Vendeur;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private adminService : AdminService,
                private vendeurService : VendeurService) { }

  ngOnInit() {
    this.getListeVendeurs();
    this.getListeProduits();
    this.getListeClients();
  }



  getListeVendeurs(){
    return this.adminService.getListVendeurs().subscribe(
      data=> {this.listeVendeurs = data},
      () =>console.log("liste vendeurs charge")
    )
  }

  getListeProduits(){
    return this.adminService.getListProducts().subscribe(
      data=> {this.listProduits= data},
      () =>console.log("liste produits charge")
    )
  }

  getListeClients(){
    return this.adminService.getListClients().subscribe(
      data=> {this.listClients = data},
      () =>console.log("liste clients charge")
    )
  }

  bloquerVendeur(id){
           return this.adminService.updateUser(id)
    .subscribe(data => this.getListeVendeurs(), error => console.log(error));
    
   }

   debloquerVendeur(id){
       return this.adminService.updateUser(id)
    .subscribe(data => this.getListeVendeurs(), error => console.log(error));
   }

   deleteUser(seller : Vendeur){
    return this.vendeurService.deleteUser(seller.id).subscribe( Response => {
      //Update list after delete is successful
      this.getListeVendeurs(),
      err => console.error(err),
     () => console.log('liste vendeurs apres supression')
    });
    
}


afficherVendeurs(){
  this.isListeVendeurs = true;
  this.islisteProduits = false;
  this.islisteClients= false;
}
afficherClients(){
  this.isListeVendeurs = false;
  this.islisteProduits = false;
  this.islisteClients= true;
}

afficherProduits(){
  this.isListeVendeurs = false;
  this.islisteProduits = true;
  this.islisteClients= false;
}
afficherTout(){
  this.isListeVendeurs = true;
  this.islisteProduits = true;
  this.islisteClients= true;
}

}
