import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserComponent } from '../vendeur/vendeur.component';
import { Vendeur } from 'src/app/models/vendeur';
import { VendeurService } from 'src/app/service/vendeur-service/vendeur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styleUrls: ['./create-seller.component.css']
})
export class CreateSellerComponent implements OnInit {

  submitted = false;
  vendeur = new Vendeur();
  constructor(private fb :FormBuilder, private serService:VendeurService, private route: Router) { }

  newUser = this.fb.group({
    nom :[''],
    prenom :[''],
    telephone: [''],
    email :[''],
    password :[''],
  })

  ngOnInit() {
    console.log(this.newUser)
  }
 
  save() {
  
    this.vendeur.nom = this.newUser.get("nom").value;
    this.vendeur.prenom = this.newUser.get("prenom").value;
    this.vendeur.telephone = this.newUser.get("telephone").value;
    this.vendeur.email = this.newUser.get("email").value;
    this.vendeur.password = this.newUser.get("password").value;
    this.vendeur.etat = true;
  
    this.serService.createUser(this.vendeur)
    .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  onSubmit() {
    console.log(this.vendeur)
    this.submitted = true;
    this.save();    
  }

  gotoList(){
    this.route.navigate(['/sellers']);
  }
}
