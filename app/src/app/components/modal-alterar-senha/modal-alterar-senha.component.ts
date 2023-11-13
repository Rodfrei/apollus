import { Component, OnInit } from '@angular/core';
import { AlterarSenhaService } from 'src/app/services/alterar-senha/alterar-senha.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ErroService } from 'src/app/services/erro/erro.service';
import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-modal-alterar-senha',
  templateUrl: './modal-alterar-senha.component.html',
  styleUrls: ['./modal-alterar-senha.component.css'],
})
export class ModalAlterarSenhaComponent implements OnInit {
  botaoSalvar: string = 'Salvar';
  botaoCancelar: string = 'Cancelar';

  alterarSenhaForm!: FormGroup;

  confirmacaoInvalida: boolean = false;

  ngOnInit() {
    this.alterarSenhaForm = new FormGroup({
      senhaAntiga: new FormControl('', [Validators.required]),
      novaSenha: new FormControl('', [Validators.required]),
      confirmar: new FormControl('', [Validators.required]),
    });
  }

  constructor(
    public alterarSenhaService: AlterarSenhaService,
    private usuarioService: UsuarioService,
    private errorService: ErroService,
    private menssagesService: MessagesService
  ) {}

  get senhaAntiga() {
    return this.alterarSenhaForm.get('senhaAntiga')!;
  }

  get novaSenha() {
    return this.alterarSenhaForm.get('novaSenha')!;
  }

  get confirmar() {
    return this.alterarSenhaForm.get('confirmar')!;
  }

  submit() {
    if (this.alterarSenhaForm.invalid) {
      return;
    }

    if (
      this.alterarSenhaForm.value.novaSenha !==
      this.alterarSenhaForm.value.confirmar
    ) {
      this.confirmacaoInvalida = true;
      return;
    } else {
      this.confirmacaoInvalida = false;
    }

    this.usuarioService.alterarSenha(this.alterarSenhaForm).subscribe({
      next: () => {
        this.menssagesService.add('Senha atualizada com suceso.', 0);
        this.cancelar();
      },
      error: (error) => {
        this.errorService.tratar(error);
      },
    });
  }

  cancelar() {
    this.alterarSenhaForm.reset();
    this.alterarSenhaService.cancelar();
  }
}
