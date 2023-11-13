import { Injectable } from '@angular/core';

import { enviroment } from 'src/enviroments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/Usuario';
import { Pageable } from 'src/app/interfaces/Pageable';

import { FormGroup } from '@angular/forms';
import { UsuarioResumido } from 'src/app/interfaces/UsuarioResumido';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseApiUrl = enviroment.baseApiUrl;
  authToken: String = '';

  constructor(private http: HttpClient) {}

  buildHeader(): HttpHeaders {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.authToken = user.token;
    }

    return new HttpHeaders({
      Authorization: `Bearer ${this.authToken}`,
      'Content-Type': 'application/json',
    });
  }

  getUsuarios(
    texto: string,
    campo: string,
    pagina: number
  ): Observable<Pageable<UsuarioResumido>> {
    const headers = this.buildHeader();

    return this.http.get<Pageable<UsuarioResumido>>(
      `${this.baseApiUrl}/usuario?page=${pagina}&size=10&sort=${campo},asc&busca=${texto}`,
      {
        headers,
      }
    );
  }

  getUsuario(id: number): Observable<Usuario> {
    const headers = this.buildHeader();

    return this.http.get<Usuario>(`${this.baseApiUrl}/usuario/${id}`, {
      headers,
    });
  }

  cadastrarUsuario(formGroup: FormGroup) {
    const dados = {
      nome: formGroup.value.nome,
      email: formGroup.value.email,
      cpf: formGroup.value.cpf,
      telefone: formGroup.value.telefone,
      dataNascimento: formGroup.value.dataNascimento,
      senha: formGroup.value.senha,
      funcao: formGroup.value.funcao,
      status: 'ATIVO',
    };

    const headers = this.buildHeader();

    return this.http.post<Usuario>(`${this.baseApiUrl}/usuario`, dados, {
      headers,
    });
  }

  editarUsuario(formGroup: FormGroup, id: number) {
    const dados = {
      nome: formGroup.value.nome,
      email: formGroup.value.email,
      cpf: formGroup.value.cpf,
      telefone: formGroup.value.telefone,
      dataNascimento: formGroup.value.dataNascimento,
      status: formGroup.value.ativo,
      funcao: formGroup.value.funcao,
    };

    const headers = this.buildHeader();

    return this.http.put<Usuario>(`${this.baseApiUrl}/usuario/${id}`, dados, {
      headers,
    });
  }

  deletarUsuario(id: number) {
    const headers = this.buildHeader();

    return this.http.delete<Usuario>(`${this.baseApiUrl}/usuario/${id}`, {
      headers,
    });
  }

  alterarSenha(formGroup: FormGroup) {
    const dados = {
      senhaAntiga: formGroup.value.senhaAntiga,
      novaSenha: formGroup.value.novaSenha,
    };

    const headers = this.buildHeader();

    return this.http.put<Usuario>(
      `${this.baseApiUrl}/usuario/alterar-senha`,
      dados,
      {
        headers,
      }
    );
  }
}
