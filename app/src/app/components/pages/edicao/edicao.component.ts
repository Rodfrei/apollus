import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/interfaces/Usuario';
import { ErroService } from 'src/app/services/erro/erro.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css'],
})
export class EdicaoComponent implements OnInit {
  botaoSalvar: string = 'Salvar';
  botaoCancelar: string = 'Cancelar';

  usuarioForm!: FormGroup;

  usuarioId!: number;
  usuario!: Usuario;

  isLoading: boolean = true;

  isAdmin: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private messagesService: MessagesService,
    private usuarioService: UsuarioService,
    private actvatedRoute: ActivatedRoute,
    private erroService: ErroService
  ) {
    const usuarioAutenticado = localStorage.getItem('user');

    if (usuarioAutenticado) {
      this.isAdmin = JSON.parse(usuarioAutenticado).funcao === 'ADMIN';
    }
  }

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.loginService.logout();
    }

    this.usuarioId = this.actvatedRoute.snapshot.params['id'];

    if (isNaN(this.usuarioId)) {
      this.router.navigate(['/perfil']);
      return;
    }

    this.usuarioService.getUsuario(this.usuarioId).subscribe({
      next: (user) => {
        this.usuario = user;
        this.formInit();
        if (!this.isAdmin) {
          this.botaoCancelar = 'Voltar';
          this.bloquearCampos();
        }

        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.erroService.tratar(error);

        this.router.navigate(['/usuarios']);
      },
    });
  }

  formInit(): void {
    this.usuarioForm = new FormGroup({
      nome: new FormControl(this.usuario?.nome || '', [Validators.required]),
      email: new FormControl(this.usuario?.email || '', [
        Validators.required,
        Validators.email,
      ]),
      cpf: new FormControl(this.usuario?.cpf || '', [Validators.required]),
      telefone: new FormControl(this.usuario?.telefone || '', [
        Validators.required,
      ]),
      dataNascimento: new FormControl(this.usuario?.dataNascimento || ''),
      funcao: new FormControl(this.usuario?.permissao || '', [
        Validators.required,
      ]),
      ativo: new FormControl(this.usuario?.status || '', [Validators.required]),
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

  get ativo() {
    return this.usuarioForm.get('ativo')!;
  }

  get funcao() {
    return this.usuarioForm.get('funcao')!;
  }

  submit(): void {
    if (this.usuarioForm.invalid) {
      return;
    }

    this.isLoading = true;

    this.usuarioService
      .editarUsuario(this.usuarioForm, this.usuarioId)
      .subscribe({
        next: () => {
          this.messagesService.add('Usuario editado com sucesso.', 0);
          this.isLoading = false;
          this.router.navigate(['/usuarios']);
        },
        error: (error) => {
          this.isLoading = false;
          this.erroService.tratar(error);
        },
      });
  }

  cancelar(): void {
    this.router.navigate(['/usuarios']);
  }

  bloquearCampos(): void {
    Object.keys(this.usuarioForm.controls).forEach((controlName) => {
      const control = this.usuarioForm.get(controlName);
      if (control) {
        control.disable();
      }
    });
  }
}
