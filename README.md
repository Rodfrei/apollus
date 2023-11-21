# Instruções de Execução

### Banco de Dados

- **PostgresSQL:**
  - É necessario que o PostgresSQL instalado.
  - É necessário possuir um servidor rodando em:
    - URL: `jdbc:postgresql://localhost:5432/provaApollus`
    - Usuário: `provaApollus`
    - Senha: `provaApollus`
  - Execute o script SQL localizado em: `./api/data/schema.sql` no servidor
    - O script cria a tabela de usuários e realiza alguns inserts.
    - A senha de todos usuários inseridos é: `123r`
  - Durante o desenvolvimento, foi utilizado o pgAdmin 4.

### API (Back-end)

Na raiz do projeto, execute os seguintes comandos no terminal:

1. `mvn clean install`
   - Este comando irá gerar um arquivo `.jar` dentro da pasta `target`.
2. `java -jar target/nome-do-arquivo-gerado.jar`
   - Este comando irá executar a aplicação.

### APP (Front-end)

Na raiz do projeto, execute os seguintes comandos no terminal:

1. `npm install`
   - Este comando irá instalar as dependências do projeto.
2. `npm start`
   - Este comando irá executar a aplicação.

---

**Observações:**

- É necessario que o PostgresSQL esteja instalado e configurado corretamente.
- Durante o desenvolvimento, foi utilizado o pgAdmin 4 para gerenciamento do banco de dados.
- Certifique-se de executar os scripts SQL para criar a tabela de usuários e inserir alguns usuarios.
- Para o backend, é necessário o maven esteja instalado para realizar a compilação e geração do arquivo `.jar`.
- Para o frontend, é necessário o Node.js e o npm instalados para instalar as dependências e iniciar a aplicação.

---

# Solicitações para a API

- A autenticação é feita atravéz de token JWT, que é enviado em resposta para o usuario ao fazer login.
- A rota login é a unica que é publica.
- Ao fazer solicitações para API, selecionar o metodo de autenticação 'Bearer Token':
  - No campo token informar o token; e
  - No campo prefix informar 'Bearer'.
- O arquivo 'Insomnia.json' com as requisições consta em './api/data/'

## Login

- **Método**: POST
- **URL**: http://localhost:8080/login
- **Descrição**: Autenticação do usuário.
- **Corpo**:
  ```json
  {
    "email": "adm@mail.com",
    "senha": "123r"
  }
  ```

## Listar

- **Método**: GET
- **URL**: http://localhost:8080/usuario?page={numero}&size={numero}&sort={texto},asc&busca={texto}
- **Descrição**: Obter uma lista de usuários.

## Visualizar

- **Método**: GET
- **URL**: http://localhost:8080/usuario/{id}
- **Descrição**: Obter detalhes de um usuário específico.

## Editar (ADMIN)

- **Método**: PUT
- **URL**: http://localhost:8080/usuario/{id}
- **Descrição**: Atualizar detalhes do usuário.
- **Corpo**:
  ```json
  {
    "nome": "João Silva",
    "email": "joao.silva@mail.com",
    "cpf": "12345678909",
    "telefone": "12345678909",
    "dataNascimento": "2000-04-10",
    "status": "ATIVO",
    "funcao": "USER"
  }
  ```

## Deletar (ADMIN)

- **Método**: DELETE
- **URL**: http://localhost:8080/usuario/{id}
- **Descrição**: Excluir um usuário.

## Alterar Senha

- **Método**: PUT
- **URL**: http://localhost:8080/usuario/alterar-senha
- **Descrição**: Alterar a senha do usuário.
- **Corpo**:
  ```json
  {
    "senhaAntiga": "123r",
    "novaSenha": "123r"
  }
  ```

## Cadastrar (ADMIN)

- **Método**: POST
- **URL**: http://localhost:8080/usuario
- **Descrição**: Registrar um novo usuário.
- **Corpo**:
  ```json
  {
    "nome": "João da Silva",
    "email": "joao.silva@gmail.com",
    "cpf": "12345678909",
    "telefone": "12345678909",
    "dataNascimento": "2023-04-10",
    "senha": "123r",
    "funcao": "USER",
    "status": "ATIVO"
  }
  ```
