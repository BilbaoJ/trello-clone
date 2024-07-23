import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {CdkTableModule} from '@angular/cdk/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from '../../components/btn/btn.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ NavbarComponent, CdkTableModule, HttpClientModule, CommonModule, BtnComponent ],
  templateUrl: './table.component.html'
})
export class TableComponent {
  dataSource = new DataSourceProduct();
  columns = signal(['id', 'title', 'price', 'actions']);
  total = signal(0);

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe({
      next: (products)=>{
        this.dataSource.init(products);
        this.total.set(this.dataSource.getTotal());
      },
      error: () => {

      }
    });
  }

  update(product: Product){
    this.dataSource.update(product.id, {price: 20});
  }
}
