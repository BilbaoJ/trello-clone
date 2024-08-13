import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { checkToken } from '@interceptors/token.interceptor';
import { Board } from '@shared/models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private http = inject(HttpClient);
  apiUrl = environment.API_URL;

  getBoard(id: Board['id']){
    return this.http.get<Board>(`${this.apiUrl}/api/v1/boards/${id}`, {
      context : checkToken()
    });
  }
}
