import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {CdkTableModule} from '@angular/cdk/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ NavbarComponent, CdkTableModule, HttpClientModule ],
  templateUrl: './table.component.html'
})
export class TableComponent {
  products = signal<Product[]>([]);
  columns = signal(['id', 'title', 'price']);

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe({
      next: (products)=>{
        this.products.set(products);
      },
      error: () => {

      }
    });
  }
}
