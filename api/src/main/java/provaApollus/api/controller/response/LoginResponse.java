package provaApollus.api.controller.response;

import lombok.Getter;
import lombok.Setter;
import provaApollus.api.domain.Funcao;

@Getter
@Setter
public class LoginResponse {
    String token;
    Long id;
    Funcao funcao;
}
