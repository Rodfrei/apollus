import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseApiUrl = enviroment.baseApiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  login(loginForm: FormGroup): Observable<Usuario> {
    const dados = {
      email: loginForm.value.email,
      senha: loginForm.value.senha,
    };

    return this.http.post<Usuario>(`${this.baseApiUrl}/login`, dados);
  }
}
