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
