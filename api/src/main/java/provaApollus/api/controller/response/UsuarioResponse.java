package provaApollus.api.controller.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import provaApollus.api.domain.Funcao;
import provaApollus.api.domain.Status;

import java.time.LocalDate;
import java.time.LocalDateTime;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class UsuarioResponse {
    private Long id;
    private String nome;
    private String email;
    private String telefone;
    private String cpf;

    private LocalDate dataNascimento;

    private Status status;

    private String criadoPor;

    @JsonFormat(pattern = "HH:mm:ss dd/MM/yyyy")
    private LocalDateTime criadoEm;

    private String editadoPor;

    @JsonFormat(pattern = "HH:mm:ss dd/MM/yyyy")
    private LocalDateTime editadoEm;

    private Funcao permissao;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getCriadoPor() {
        return criadoPor;
    }

    public void setCriadoPor(String criadoPor) {
        this.criadoPor = criadoPor;
    }

    public LocalDateTime getCriadoEm() {
        return criadoEm;
    }

    public void setCriadoEm(LocalDateTime criadoEm) {
        this.criadoEm = criadoEm;
    }

    public String getEditadoPor() {
        return editadoPor;
    }

    public void setEditadoPor(String editadoPor) {
        this.editadoPor = editadoPor;
    }

    public LocalDateTime getEditadoEm() {
        return editadoEm;
    }

    public void setEditadoEm(LocalDateTime editadoEm) {
        this.editadoEm = editadoEm;
    }

    public Funcao getPermissao() {
        return permissao;
    }

    public void setPermissao(Funcao permissao) {
        this.permissao = permissao;
    }
}
