import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LocationStrategy } from '@angular/common';
import { HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { BuscaComponent } from './components/pages/busca/busca.component';
import { BotaoPrincipalComponent } from './components/botao-principal/botao-principal.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalAlterarSenhaComponent } from './components/modal-alterar-senha/modal-alterar-senha.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { EdicaoComponent } from './components/pages/edicao/edicao.component';
import { PaginadorComponent } from './components/paginador/paginador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PerfilComponent,
    BuscaComponent,
    BotaoPrincipalComponent,
    MessagesComponent,
    LoaderComponent,
    ModalAlterarSenhaComponent,
    CadastroComponent,
    EdicaoComponent,
    PaginadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
