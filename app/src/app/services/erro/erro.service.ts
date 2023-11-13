import { Injectable } from '@angular/core';
import { MessagesService } from '../messages/messages.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class ErroService {
  constructor(
    private menssagesService: MessagesService,
    private loginService: LoginService
  ) {}

  tratar(error: any): void {
    if (error.status === 403) {
      this.menssagesService.add('Realize login novamente.', 1);
      this.loginService.logout();
    }
    if (error.status === 400) {
      this.menssagesService.add(error.error.message, 2);
    }
  }
}
