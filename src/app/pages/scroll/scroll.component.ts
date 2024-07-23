import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';

interface Product{
  id: string;
  title: string;
  price: number;
  images: string[];
}

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [ NavbarComponent, HttpClientModule, ScrollingModule ],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {

  products = signal<Product[]>([]);

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
