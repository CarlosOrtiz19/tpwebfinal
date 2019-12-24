import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/administrateur-service/admin.service';
import { VendeurService } from 'src/app/service/vendeur-service/vendeur.service';
import { Routes, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Administrateur } from 'src/app/models/administrateur';

@Component({
  selector: 'app-login',
  templateUrl: './fake-login.component.html',
  styleUrls: ['./fake-login.component.css']
})
export class LoginComponent implements OnInit {

  
  
  constructor(private fb: FormBuilder,private adminService: AdminService, private vendeurService: VendeurService, route: Router) {
    const _this = this;
   }

  admin: any;
  

 vendeur:any


  loginAndPassword = this.fb.group({
    login :[''],
    password: [''],
  })

  ngOnInit() {

  }

  onSubmitForm(){
 
   
    this.adminService.getListadminByLoginAndPassword(this.loginAndPassword.get("login").value,this.loginAndPassword.get("password").value).subscribe(
      res=> { this.admin = res[0]},
      ()=>console.log(this.admin)
      
     )


    

console.log(this.admin)
    


    if(this.admin == null){
      console.log("soy el lnull")
    } else if(this.vendeur == null) {
      console.log("soy el lnull vendeur")
    }

    
  }

}
