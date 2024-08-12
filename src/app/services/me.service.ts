import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from '@shared/models/user.model';
import { checkToken } from '@interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  private http = inject(HttpClient);
  apiUrl = environment.API_URL;

  getProfile() {
    return this.http.get<User>(`${this.apiUrl}/api/v1/me/profile`, { context: checkToken() })
  }

  getBoards() {
    return this.http.get<User>(`${this.apiUrl}/api/v1/me/boards`, { context: checkToken() })
  }
}
