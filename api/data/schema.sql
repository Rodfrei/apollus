DROP TABLE IF EXISTS usuario CASCADE;

CREATE TABLE usuario (
	id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	telefone VARCHAR(11),
	cpf VARCHAR(11) NOT NULL,
	status VARCHAR(7) NOT NULL,
	data_nascimento DATE,
	senha VARCHAR(128) NOT NULL,
	criado_por VARCHAR(255) NOT NULL,
	criado_em TIMESTAMP NOT NULL,
	editado_por VARCHAR(255),
	editado_em TIMESTAMP,
	funcao VARCHAR(5)
);
ALTER TABLE usuario ADD CONSTRAINT pk_usuario PRIMARY KEY (id);
ALTER TABLE usuario ADD CONSTRAINT uk_usuario_email UNIQUE (email);

-- nome: adm
-- email: adm@mail.com
-- senha: 123r

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao, status)
values ('adm', 'adm@mail.com', '12345678909', '12345678909', '2000-01-01', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Gestor Banco', '2000-01-01', 'ADMIN', 'ATIVO');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao, status)
values ('João Silva', 'joao.silva@mail.com', '98765432101', '12345678909', '1990-05-15', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Administrador Geral', '2023-01-15', 'ADMIN', 'ATIVO');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao, status)
values ('Maria Oliveira', 'maria.oliveira@mail.com', '11223344556', '98765432101', '1985-09-22', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Supervisor RH', '2023-02-10', 'USER', 'ATIVO');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao, status)
values ('Carlos Santos', 'carlos.santos@mail.com', '99887766554', '11223344556', '1988-12-03', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Coordenador TI', '2023-03-05', 'ADMIN', 'ATIVO');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao, status)
values ('Ana Pereira', 'ana.pereira@mail.com', '66554433221', '99887766554', '1995-07-18', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista Financeiro', '2023-04-20', 'USER', 'ATIVO');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao, status)
values ('Paula Oliveira', 'paula.oliveira@mail.com', '44332211000', '66554433221', '1982-04-09', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Gerente Vendas', '2023-06-14', 'ADMIN', 'ATIVO');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao, status)
values ('Felipe Santos', 'felipe.santos@mail.com', '11223344556', '44332211000', '1993-11-27', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista Marketing', '2023-07-19', 'USER', 'ATIVO');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao, status)
values ('Rafael Lima', 'rafael.lima@mail.com', '77889900112', '11223344556', '1998-08-14', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista Desenvolvimento', '2023-09-22', 'ADMIN', 'ATIVO');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao, status)
values ('Camila Costa', 'camila.costa@mail.com', '55667788990', '77889900112', '1987-02-28', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Coordenador Recursos Humanos', '2023-10-11', 'USER', 'ATIVO');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao, status)
values ('Lucas Oliveira', 'lucas.oliveira@mail.com', '99887766554', '55667788990', '1991-12-07', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista Logística', '2023-12-05', 'ADMIN', 'ATIVO');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao, status)
values ('Isabela Pereira', 'isabela.pereira@mail.com', '11223344556', '99887766554', '1996-05-19', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista Comercial', '2024-01-20', 'USER', 'ATIVO');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao, status)
values ('Fernando Santos', 'fernando.santos@mail.com', '66554433221', '11223344556', '1990-09-15', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Gerente de Projetos', '2024-02-12', 'ADMIN', 'ATIVO');

