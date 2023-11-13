import { CanActivateFn } from '@angular/router';

export const authUserGuard: CanActivateFn = (route, state) => {
  const usuarioAutenticado = localStorage.getItem('user');
  if (usuarioAutenticado) {
    const permissao = JSON.parse(usuarioAutenticado).funcao;
    const isAdmin = permissao === 'ADMIN' || permissao === 'USER';
    return isAdmin;
  }
  return false;
};
