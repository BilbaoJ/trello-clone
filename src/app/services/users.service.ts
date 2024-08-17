import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from '@shared/models/user.model';
import { checkToken } from '@interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http: HttpClient = inject(HttpClient);
  apiUrl: string = environment.API_URL;

  getUsers(){
    return this.http.get<User[]>(`${this.apiUrl}/api/v1/users`, { context : checkToken()});
  }
}
