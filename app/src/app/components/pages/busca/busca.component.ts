import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/interfaces/Usuario';
import { Pageable } from 'src/app/interfaces/Pageable';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { ErroService } from 'src/app/services/erro/erro.service';
import { UsuarioResumido } from 'src/app/interfaces/UsuarioResumido';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css'],
})
export class BuscaComponent implements OnInit {
  usuariosPageable!: Pageable<UsuarioResumido>;
  usuarios!: UsuarioResumido[];

  buscarForm!: FormGroup;

  isLoading: boolean = true;

  faTrash = faTrash;

  isAdmin: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private errorService: ErroService,
    private messageService: MessagesService
  ) {
    const idUsuarioAutenticado = localStorage.getItem('user');
    if (idUsuarioAutenticado) {
      this.isAdmin = JSON.parse(idUsuarioAutenticado).funcao === 'ADMIN';
    }
  }

  ngOnInit(): void {
    this.buscarUsuarios();

    this.buscarForm = new FormGroup({
      textoBuscado: new FormControl(''),
      campoOrdenacao: new FormControl('nome'),
      paginaAtual: new FormControl(0),
    });

    this.buscarForm.valueChanges.subscribe((busca) => {
      this.usuarioService
        .getUsuarios(
          busca.textoBuscado,
          busca.campoOrdenacao,
          busca.paginaAtual
        )
        .subscribe((users) => {
          this.usuariosPageable = users;
          this.usuarios = users.content;
          console.log(this.usuariosPageable);
          if (this.usuariosPageable.content.length === 0) {
            this.buscarForm.get('paginaAtual')?.setValue(0);
          }
        });
    });
  }

  get textoBuscado() {
    return this.buscarForm.get('textoBuscado')!;
  }

  get paginaAtual() {
    return this.buscarForm.get('paginaAtual')!;
  }

  get campoOrdenacao() {
    return this.buscarForm.get('campoOrdenacao')!;
  }

  buscarUsuarios(): void {
    this.usuarioService.getUsuarios('', 'nome', 0).subscribe({
      next: (user) => {
        this.usuariosPageable = user;
        this.usuarios = user.content;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorService.tratar(error);
      },
    });
  }

  voltarPagina(pagina: number): void {
    this.buscarForm.get('paginaAtual')?.setValue(pagina);
  }

  avancarPagina(pagina: number): void {
    this.buscarForm.get('paginaAtual')?.setValue(pagina);
  }

  handleClick(id?: number): void {
    this.router.navigate([`/usuarios/${id}`]);
  }

  handleExcluir(id?: number): void {
    if (id) {
      this.usuarioService.deletarUsuario(id).subscribe({
        next: () => {
          this.buscarUsuarios();
          this.messageService.add('Registro excluido com sucesso!', 0);
        },
        error: (error) => {
          this.errorService.tratar(error);
        },
      });
    }
  }
}
