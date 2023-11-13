# Instruções de Execução

### Banco de Dados

- **PostgresSQL:**
  - Certifique-se de ter o PostgresSQL instalado.
  - É necessário possuir um servidor rodando em:
    - URL: `jdbc:postgresql://localhost:5432/provaApollus`
    - Usuário: `provaApollus`
    - Senha: `provaApollus`
  - Execute o script SQL localizado em: `./api/data/schema.sql`
    - O script cria a tabela de usuários e realiza alguns inserts.
    - A senha de todos usuários cadastrados é: `123r`
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

- Certifique-se de ter o PostgresSQL instalado e configurado corretamente.
- Durante o desenvolvimento, foi utilizado o pgAdmin 4 para gerenciamento do banco de dados.
- Certifique-se de executar os scripts SQL para criar a tabela de usuários e inserir dados de exemplo.
- Para a API, é necessário o Maven instalado para realizar a compilação e geração do arquivo `.jar`.
- Para o APP, é necessário o Node.js e o npm instalados para instalar as dependências e iniciar a aplicação.
