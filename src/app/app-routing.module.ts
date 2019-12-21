import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './component/vendeur/vendeur.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { CreateSellerComponent } from './component/create-seller/create-seller.component';
import { EditSellerComponent } from './component/edit-seller/edit-seller.component';
import { ListProductsComponent } from './component/list-products/list-products.component';
import { AdministrateurComponent } from './component/administrateur/administrateur.component';


const routes: Routes = [
  {path:' ', component: AccueilComponent },
  {path:'sellers', component: UserComponent },
  {path:'createSeller', component: CreateSellerComponent },
  {path:'edit/:id', component: EditSellerComponent },
  {path:'products', component: ListProductsComponent },
  {path:'admin', component: AdministrateurComponent },
  {path:'admin/vendeurs', component: AdministrateurComponent },
  {path:'admin/produits', component: AdministrateurComponent },
  {path:'admin/clients', component: AdministrateurComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
