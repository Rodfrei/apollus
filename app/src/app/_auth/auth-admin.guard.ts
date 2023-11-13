import { CanActivateFn } from '@angular/router';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const usuarioAutenticado = localStorage.getItem('user');
  if (usuarioAutenticado) {
    const isAdmin = JSON.parse(usuarioAutenticado).funcao === 'ADMIN';
    return isAdmin;
  }

  return false;
};
