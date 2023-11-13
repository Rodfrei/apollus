import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css'],
})
export class PaginadorComponent {
  @Input() paginaAtual!: number;
  @Input() totalPaginas!: number;
  @Input() ultimaPagina!: boolean;
  @Input() primeiraPagina!: boolean;

  @Output() maisClick: EventEmitter<any> = new EventEmitter();
  @Output() menosClick: EventEmitter<any> = new EventEmitter();

  faPlus = faPlus;
  faMinus = faMinus;

  constructor() {}

  handleMaisClick(): void {
    if (this.ultimaPagina) {
      return;
    }

    const pagina = this.paginaAtual + 1;
    this.maisClick.emit(pagina);
  }

  handleMenosClick(): void {
    if (this.primeiraPagina) {
      return;
    }
    const pagina = this.paginaAtual - 1;
    this.menosClick.emit(pagina);
  }
}
