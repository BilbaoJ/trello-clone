import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { TokenService } from './token.service';
import { ResponseLogin } from '@shared/models/auth.model';
import { User } from '@shared/models/user.model';
import { MeService } from './me.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient = inject(HttpClient);
  private tokenService: TokenService = inject(TokenService);
  private meService: MeService = inject(MeService);
  apiUrl: string = environment.API_URL;
  user$ = new BehaviorSubject<User | null>(null);

  getDataUser(){
    return this.user$.getValue();
  }

  login(email: string, password: string){
    return this.http.post<ResponseLogin>(`${this.apiUrl}/api/v1/auth/login`, {
      email,
      password
    })
    .pipe(
      tap(response => {
        this.tokenService.saveToken(response.access_token);
        this.tokenService.saveRefreshToken(response.refresh_token);
      })
    );
  }

  refreshToken(refreshToken: string){
    return this.http.post<ResponseLogin>(`${this.apiUrl}/api/v1/auth/refresh-token`, {refreshToken})
    .pipe(
      tap(response => {
        this.tokenService.saveToken(response.access_token);
        this.tokenService.saveRefreshToken(response.refresh_token);
      })
    );
  }

  register(name: string, email: string, password: string){
    return this.http.post(`${this.apiUrl}/api/v1/auth/register`, {
      name,
      email,
      password
    });
  }

  registerAndLogin(name: string, email: string, password: string){
    return this.register(name, email, password)
    .pipe(
      switchMap(()=> this.login(email, password))
    );
  }

  isAvailable(email: string){
    return this.http.post<{isAvailable: boolean}>(`${this.apiUrl}/api/v1/auth/is-available`, {email});
  }

  recovery(email: string){
    return this.http.post(`${this.apiUrl}/api/v1/auth/recovery`, {email});
  }

  changePassword(token: string, newPassword: string){
    return this.http.post(`${this.apiUrl}/api/v1/auth/change-password`, {token, newPassword});
  }

  getProfile(){
    return this.meService.getProfile()
    .pipe(
      tap(user => {
        this.user$.next(user);
      })
    );
  }

  logOut(){
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }
}
