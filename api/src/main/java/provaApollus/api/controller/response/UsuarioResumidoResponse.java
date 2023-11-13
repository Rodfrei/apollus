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
}
