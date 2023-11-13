import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { BuscaComponent } from './components/pages/busca/busca.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { EdicaoComponent } from './components/pages/edicao/edicao.component';
import { authUserGuard } from './_auth/auth-user.guard';
import { authAdminGuard } from './_auth/auth-admin.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [authUserGuard] },
  { path: 'usuarios', component: BuscaComponent, canActivate: [authUserGuard] },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: [authAdminGuard],
  },
  {
    path: 'usuarios/:id',
    component: EdicaoComponent,
    canActivate: [authUserGuard],
  },
  { path: '**', redirectTo: '/perfil' },
  { path: '', redirectTo: '/perfil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
