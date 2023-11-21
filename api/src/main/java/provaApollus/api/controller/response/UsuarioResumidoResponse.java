package provaApollus.api.controller.response;

import lombok.Getter;
import lombok.Setter;
import provaApollus.api.domain.Funcao;
import provaApollus.api.domain.Status;

@Getter
@Setter
public class UsuarioResumidoResponse {
    private Long id;
    private String nome;
    private String email;

    private Status status;

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

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Funcao getPermissao() {
        return permissao;
    }

    public void setPermissao(Funcao permissao) {
        this.permissao = permissao;
    }
}
