import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ErroService } from 'src/app/services/erro/erro.service';
import { Usuario } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  botaoSalvar: string = 'Salvar';
  botaoCancelar: string = 'Cancelar';

  usuarioForm!: FormGroup;

  isLoading: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private messagesService: MessagesService,
    private usuarioService: UsuarioService,
    private errorService: ErroService
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.loginService.logout();
      this.router.navigate(['/perfil']);
    }

    this.usuarioForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl(''),
      senha: new FormControl('', [Validators.required]),
      funcao: new FormControl('', [Validators.required]),
    });
  }

  get nome() {
    return this.usuarioForm.get('nome')!;
  }

  get email() {
    return this.usuarioForm.get('email')!;
  }

  get cpf() {
    return this.usuarioForm.get('cpf')!;
  }

  get telefone() {
    return this.usuarioForm.get('telefone')!;
  }

  get dataNascimento() {
    return this.usuarioForm.get('dataNascimento')!;
  }

  get senha() {
    return this.usuarioForm.get('senha')!;
  }

  get funcao() {
    return this.usuarioForm.get('funcao')!;
  }

  cancelar(): void {
    this.router.navigate(['/usuarios']);
  }

  submit(): void {
    if (this.usuarioForm.invalid) {
      return;
    }

    this.isLoading = true;

    this.usuarioService.cadastrarUsuario(this.usuarioForm).subscribe({
      next: () => {
        this.messagesService.add('Usuario cadastrado com sucesso.', 0);
        this.isLoading = false;
        this.router.navigate(['/usuarios']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorService.tratar(error);
      },
    });
  }
}
