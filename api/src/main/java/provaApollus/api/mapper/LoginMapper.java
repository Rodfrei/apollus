package provaApollus.api.mapper;

import provaApollus.api.controller.response.LoginResponse;
import provaApollus.api.controller.response.UsuarioResponse;
import provaApollus.api.domain.Usuario;

public class LoginMapper {
    public static LoginResponse toResponse(Usuario entity, String token) {
        LoginResponse response = new LoginResponse();
        response.setId(entity.getId());
        response.setFuncao(entity.getFuncao());
        response.setToken(token);
        return response;
    }
}
