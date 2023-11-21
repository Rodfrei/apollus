DROP TABLE IF EXISTS usuario CASCADE;

CREATE TABLE usuario (
	id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	telefone VARCHAR(11),
	cpf VARCHAR(11) NOT NULL,
	status VARCHAR(7),
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

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('adm', 'adm@mail.com', '12345678909', '12345678909', '2000-01-01', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Gestor Banco', '2000-01-01', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('João Silva', 'joao.silva@mail.com', '98765432101', '12345678909', '1990-05-15', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Administrador Geral', '2023-01-15', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Maria Oliveira', 'maria.oliveira@mail.com', '11223344556', '98765432101', '1985-09-22', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Supervisor RH', '2023-02-10', 'USER');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Carlos Santos', 'carlos.santos@mail.com', '99887766554', '11223344556', '1988-12-03', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Coordenador TI', '2023-03-05', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Ana Pereira', 'ana.pereira@mail.com', '66554433221', '99887766554', '1995-07-18', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista Financeiro', '2023-04-20', 'USER');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Paula Oliveira', 'paula.oliveira@mail.com', '44332211000', '66554433221', '1982-04-09', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Gerente Vendas', '2023-06-14', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Felipe Santos', 'felipe.santos@mail.com', '11223344556', '44332211000', '1993-11-27', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista Marketing', '2023-07-19', 'USER');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Rafael Lima', 'rafael.lima@mail.com', '77889900112', '11223344556', '1998-08-14', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista Desenvolvimento', '2023-09-22', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Camila Costa', 'camila.costa@mail.com', '55667788990', '77889900112', '1987-02-28', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Coordenador Recursos Humanos', '2023-10-11', 'USER');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Lucas Oliveira', 'lucas.oliveira@mail.com', '99887766554', '55667788990', '1991-12-07', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista Logística', '2023-12-05', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Isabela Pereira', 'isabela.pereira@mail.com', '11223344556', '99887766554', '1996-05-19', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista Comercial', '2024-01-20', 'USER');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Fernando Santos', 'fernando.santos@mail.com', '66554433221', '11223344556', '1990-09-15', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Gerente de Projetos', '2024-02-12', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Mariana Lima', 'mariana.lima@mail.com', '77889900112', '66554433221', '1984-06-23', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista de Qualidade', '2024-03-18', 'USER');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Gabriel Oliveira', 'gabriel.oliveira@mail.com', '99887766554', '77889900112', '1993-04-05', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista de Sistemas', '2024-04-25', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Juliana Costa', 'juliana.costa@mail.com', '55667788990', '99887766554', '1989-11-11', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Coordenador de Marketing', '2024-05-15', 'USER');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Amanda Santos', 'amanda.santos@mail.com', '11223344556', '99887766554', '1997-08-30', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista de Recursos Humanos', '2024-06-10', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Pedro Lima', 'pedro.lima@mail.com', '66554433221', '11223344556', '1992-02-18', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista de Suporte Técnico', '2024-07-20', 'USER');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Patricia Oliveira', 'patricia.oliveira@mail.com', '99887766554', '66554433221', '1986-12-12', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Coordenador Financeiro', '2024-08-15', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Luiz Silva', 'luiz.silva@mail.com', '77889900112', '99887766554', '1994-04-03', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista de Compras', '2024-09-18', 'USER');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Renata Costa', 'renata.costa@mail.com', '55667788990', '77889900112', '1998-11-05', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista de Marketing Digital', '2024-10-22', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Diego Santos', 'diego.santos@mail.com', '11223344556', '55667788990', '1990-07-14', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Gerente de Operações', '2024-11-12', 'USER');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Carla Lima', 'carla.lima@mail.com', '66554433221', '11223344556', '1983-03-28', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista de Qualidade', '2024-12-05', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Bruno Oliveira', 'bruno.oliveira@mail.com', '99887766554', '66554433221', '1996-08-18', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista de TI', '2025-01-20', 'USER');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Fernanda Silva', 'fernanda.silva@mail.com', '77889900112', '99887766554', '1992-06-10', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Coordenadora de RH', '2025-02-12', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Rodrigo Lima', 'rodrigo.lima@mail.com', '66554433221', '77889900112', '1985-09-02', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista de Vendas', '2025-03-18', 'USER');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Beatriz Oliveira', 'beatriz.oliveira@mail.com', '99887766554', '66554433221', '1994-12-20', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Gerente Financeiro', '2025-04-25', 'ADMIN');

insert into usuario (nome, email, telefone, cpf, data_nascimento, senha, criado_por, criado_em, funcao)
values ('Guilherme Santos', 'guilherme.santos@mail.com', '11223344556', '99887766554', '1990-04-15', '$2a$10$dE6SA0ArDQFGFdfxT6wQG.vI77KaDW8ZtNyWexujkQdISHxo4UPzS', 'Analista de Desenvolvimento', '2025-05-15', 'USER');
