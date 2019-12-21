import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductService } from 'src/app/service/produit-service/produit.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @HostBinding ('class') classes ="row";

  listProduits: any =[];
  constructor(private productService:ProductService ) { }

  ngOnInit() {
    this.getlisteProduits();
  }

  getlisteProduits(){
    return this.productService.getListProduct().subscribe(
      res=> {this.listProduits = res},
      ()=> console.log(this.listProduits),
    )
  }

}
