import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { checkToken } from '@interceptors/token.interceptor';
import { Card, CreateCardDTO, UpdateCardDto } from '@shared/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private http: HttpClient = inject(HttpClient);
  apiUrl: string = environment.API_URL;

  createCard(dto: CreateCardDTO){
    return this.http.post<Card>(`${this.apiUrl}/api/v1/cards`, dto, {
      context: checkToken()
    })
  }

  update(id: Card['id'], changes: UpdateCardDto) {
    return this.http.put<Card>(`${this.apiUrl}/api/v1/cards/${id}`, changes, {
      context: checkToken()
    });
  }
}
