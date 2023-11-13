import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  exibirMenu: boolean = false;
  isAdmin: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.exibirMenu = false;
        } else {
          const idUsuarioAutenticado = localStorage.getItem('user');
          if (idUsuarioAutenticado) {
            this.isAdmin = JSON.parse(idUsuarioAutenticado).funcao === 'ADMIN';
          }

          this.exibirMenu = true;
        }
      }
    });
  }

  logout(): void {
    this.loginService.logout();
  }
}
