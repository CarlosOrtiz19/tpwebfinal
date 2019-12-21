import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/vendeur/vendeur.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { CreateSellerComponent } from './component/create-seller/create-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditSellerComponent } from './component/edit-seller/edit-seller.component';
import { ListProductsComponent } from './component/list-products/list-products.component';
import { AdministrateurComponent } from './component/administrateur/administrateur.component';
import { LoginComponent } from './component/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AccueilComponent,
    CreateSellerComponent,
    EditSellerComponent,
    ListProductsComponent,
    AdministrateurComponent,
    LoginComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
