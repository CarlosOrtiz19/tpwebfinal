import { Component, OnInit } from '@angular/core';
import { VendeurService } from 'src/app/service/vendeur-service/vendeur.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendeur } from 'src/app/models/vendeur';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-seller',
  templateUrl: './edit-seller.component.html',
  styleUrls: ['./edit-seller.component.css']
})
export class EditSellerComponent implements OnInit {
  id: number;
  seller: Vendeur;

  constructor(private userService: VendeurService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private fb :FormBuilder ) { }

 

  sellerAux : any = {
    id : 0,
    nom: ' ',
    prenom: ' ',
    telephone:' ',
    email:' ',
    password : ' ',
   }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(typeof this.id); 
    
      this.userService.getListUsersByid(this.id).subscribe(
        res => { 
        console.log(res)
        this.sellerAux = res;
        error => console.log(error)
        });
  }


  editUserFunction(){
   return this.userService.updateUser(this.id,this.sellerAux)
    .subscribe(data => console.log(data), error => console.log(error));
  }

}
