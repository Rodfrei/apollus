import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  message: string = '';
  messageType: string = '';
  classe: string = '';
  type: string[] = ['Sucesso!', 'Erro!', 'Atenção!'];
  messageClass: string[] = [
    'message-sucess',
    'message-error',
    'message-attention',
  ];

  constructor() {}

  add(message: string, type: number) {
    this.message = message;
    this.messageType = this.type[type];
    this.classe = this.messageClass[type];

    setTimeout(() => {
      this.clear();
    }, 2000);
  }

  clear() {
    this.message = '';
  }

  getMessage(): String {
    return this.message;
  }

  getMessageType(): String {
    return this.messageType;
  }

  getClasse(): String {
    return this.classe;
  }
}
