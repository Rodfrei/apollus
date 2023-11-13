package provaApollus.api.controller.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AlterarSenhaRequest {
    @NotBlank
    private String novaSenha;

    @NotBlank
    private String senhaAntiga;
}
