import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/administrateur-service/admin.service';
import { VendeurService } from 'src/app/service/vendeur-service/vendeur.service';
import { Routes, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
  constructor(private fb: FormBuilder,private adminService: AdminService, private vendeurService: VendeurService, route: Router) { }

 admin:any;

  loginAndPassword = this.fb.group({
    login :[''],
    password: [''],
  })

  ngOnInit() {

  }

  onSubmitForm(){
    this.adminService.getListadminByLoginAndPassword(this.loginAndPassword.get("login").value,this.loginAndPassword.get("password").value).subscribe(
      res=> {console.log(res)},
      ()=> console.log(this.admin),
    )
    if(!this.admin == null){
      console.log("soy el lnull")
    }

    
  }

}
