package provaApollus.api.controller.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;
import provaApollus.api.domain.Funcao;
import provaApollus.api.domain.Status;

import java.time.LocalDate;

public class CadastrarUsuarioRequest {
    @NotBlank
    private String nome;

    @Email
    @NotNull
    private String email;

    @Length(min= 11, max=11, message = "deve possuir 11 caracteres!")
    private String cpf;

    @Length(min= 11, max=11, message = "deve possuir 11 caracteres!")
    private String telefone;

    private LocalDate dataNascimento;

    @NotBlank
    private String senha;

    @NotNull
    private Funcao funcao;

    @NotNull
    private Status status;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Funcao getFuncao() {
        return funcao;
    }

    public void setFuncao(Funcao funcao) {
        this.funcao = funcao;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
