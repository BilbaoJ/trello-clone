import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { checkToken } from '@interceptors/token.interceptor';
import { CreateListDto, List } from '@shared/models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  private http = inject(HttpClient);
  apiUrl = environment.API_URL;

  create(dto: CreateListDto){
    return this.http.post<List>(`${this.apiUrl}/api/v1/lists`, dto, {
      context: checkToken()
    })
  }
}
