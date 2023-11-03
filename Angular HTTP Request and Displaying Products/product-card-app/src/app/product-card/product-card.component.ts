import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  products: any[] = [];
  isLoading = true;
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://fakestoreapi.com/products').pipe(
      catchError((error) => {
        this.errorMessage = error.message || 'An error occurred';
        this.isLoading = false;
        return throwError(error);
      })
    ).subscribe((data: any) => {
      this.products = data;
      this.isLoading = false;
    });
  }

  showProductDetails(product: any) {
    console.log('Clicked on product:', product);
    // Add your logic to show additional details or navigate to a details page.
  }
}
