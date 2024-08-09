import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from '@environments/environment';
import { User } from '@shared/models/user.model';
import { chekToken } from '@interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);
  private tokenService = inject(TokenService);
  apiUrl = environment.API_URL;

  getUsers(){
    return this.http.get<User[]>(`${this.apiUrl}/api/v1/users`, { context : chekToken()});
  }
}
