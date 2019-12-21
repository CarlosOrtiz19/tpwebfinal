import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendeurComponent } from './component/vendeur/vendeur.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { CreateSellerComponent } from './component/create-seller/create-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditSellerComponent } from './component/edit-seller/edit-seller.component';
import { ListProductsComponent } from './component/list-products/list-products.component';
import { AdministrateurComponent } from './component/administrateur/administrateur.component';
import { LoginComponent } from './component/login/login.component';
import { ClientComponent } from './component/client/client.component';






@NgModule({
  declarations: [
    AppComponent,
    VendeurComponent,
    AccueilComponent,
    CreateSellerComponent,
    EditSellerComponent,
    ListProductsComponent,
    AdministrateurComponent,
    LoginComponent,
    ClientComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
