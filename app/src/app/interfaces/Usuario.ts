export interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  dataNascimento?: string;
  status: string;
  criadoPor?: string;
  criadoEm?: string;
  editadoPor?: string;
  editadoEm?: string;
  permissao: string;
}
