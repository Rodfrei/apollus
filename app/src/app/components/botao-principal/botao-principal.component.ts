import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-principal',
  templateUrl: './botao-principal.component.html',
  styleUrls: ['./botao-principal.component.css'],
})
export class BotaoPrincipalComponent implements OnInit {
  @Input() text: string = '';
  @Output() cliqueBotaoPrincipal: EventEmitter<any> = new EventEmitter();

  botaoSecundario: boolean = false;

  ngOnInit(): void {
    if (this.text === 'Cancelar' || this.text === 'Voltar') {
      this.botaoSecundario = true;
    }
  }

  handleClick(): void {
    this.cliqueBotaoPrincipal.emit();
  }
}
