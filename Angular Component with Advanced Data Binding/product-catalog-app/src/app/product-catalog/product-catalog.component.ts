import { Component } from '@angular/core';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
  
})

export class ProductCatalogComponent {

}
export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  isFavorite: boolean;
}
