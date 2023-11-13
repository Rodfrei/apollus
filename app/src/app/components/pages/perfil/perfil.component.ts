import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/interfaces/Usuario';
import { AlterarSenhaService } from 'src/app/services/alterar-senha/alterar-senha.service';
import { ErroService } from 'src/app/services/erro/erro.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  usuario!: Usuario;
  id: number = -1;
  isLoading: boolean = true;

  textoBotao: string = 'Alterar senha';

  requestOptions: any;

  constructor(
    private usuarioService: UsuarioService,
    private alterarSenhaService: AlterarSenhaService,
    private erroService: ErroService
  ) {}

  ngOnInit(): void {
    const usuarioAutenticado = localStorage.getItem('user');

    if (usuarioAutenticado) {
      this.id = JSON.parse(usuarioAutenticado).id;
    }

    this.usuarioService.getUsuario(this.id).subscribe({
      next: (user) => {
        this.usuario = user;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.erroService.tratar(error);
      },
    });
  }

  onCliqueBotaoPrincipal(): void {
    this.alterarSenhaService.alterarSenha();
  }
}
