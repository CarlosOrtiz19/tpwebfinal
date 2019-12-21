import { Component, OnInit } from '@angular/core';
import { VendeurService } from 'src/app/service/vendeur-service/vendeur.service';
import { Vendeur } from 'src/app/models/vendeur';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './vendeur.component.html',
  styleUrls: ['./vendeur.component.css']
})
export class VendeurComponent implements OnInit {

  id: number;
  seller: any;
  listeUsers: any = [];


  constructor(private serService: VendeurService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id']; 
    this.getListeUsers();

   

  }

  getListeUsers(){
    return this.serService.getListUsers().subscribe(
      data=> {this.listeUsers = data},
      () =>console.log("this.listeUsers")
    )
  }

  deleteUser(seller : Vendeur){
    return this.serService.deleteUser(seller.id).subscribe( Response => {
      //Update list after delete is successful
      this.getListeUsers(),
      err => console.error(err),
     () => console.log('liste vendeurs apres supression')
    });
    
}

editUser(){
  return this.serService.updateItem(this.id, this.seller).subscribe(
    response => { this.router.navigate(['/sellers'])}
  );

}


}
