import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlterarSenhaService {
  isAlterandoSenha: boolean = false;

  constructor() {}

  alterarSenha(): void {
    document.body.classList.add('modal-open');
    this.isAlterandoSenha = true;
  }

  cancelar(): void {
    document.body.classList.remove('modal-open');
    this.isAlterandoSenha = false;
  }
}
