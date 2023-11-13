import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login/login.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  textoBotao: string = 'Enviar';

  loginForm!: FormGroup;

  usuarioAutenticado!: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });

    if (localStorage.getItem('user')) {
      this.router.navigate(['/perfil']);
    }
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get senha() {
    return this.loginForm.get('senha')!;
  }

  async submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.login(this.loginForm).subscribe({
      next: (user) => {
        this.usuarioAutenticado = user;
        localStorage.setItem('user', JSON.stringify(this.usuarioAutenticado));
        this.router.navigate(['/perfil']);
      },
      error: (error) => {
        this.messagesService.add('Email ou senha incorretos.', 2);
      },
    });
  }
}
