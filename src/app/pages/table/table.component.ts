import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {CdkTableModule} from '@angular/cdk/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ NavbarComponent, CdkTableModule, HttpClientModule, CommonModule ],
  templateUrl: './table.component.html'
})
export class TableComponent {
  products = signal<Product[]>([]);
  columns = signal(['id', 'title', 'price']);
  total = signal(0);

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe({
      next: (products)=>{
        this.products.set(products);
        this.total.set(products.map(item => item.price).reduce((price, total) => price + total, 0));
      },
      error: () => {

      }
    });
  }
}
