package provaApollus.api.controller.request;

import jakarta.validation.constraints.NotBlank;

public class AlterarSenhaRequest {
    @NotBlank
    private String novaSenha;

    public String getNovaSenha() {
        return novaSenha;
    }

    public void setNovaSenha(String novaSenha) {
        this.novaSenha = novaSenha;
    }

    public String getSenhaAntiga() {
        return senhaAntiga;
    }

    public void setSenhaAntiga(String senhaAntiga) {
        this.senhaAntiga = senhaAntiga;
    }

    @NotBlank
    private String senhaAntiga;
}
