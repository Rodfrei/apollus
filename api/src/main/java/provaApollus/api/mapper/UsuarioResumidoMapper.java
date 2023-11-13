package provaApollus.api.mapper;

import provaApollus.api.controller.response.UsuarioResponse;
import provaApollus.api.controller.response.UsuarioResumidoResponse;
import provaApollus.api.domain.Usuario;

public class UsuarioResumidoMapper {
    public static UsuarioResumidoResponse toResponse(Usuario entity) {
        UsuarioResumidoResponse response = new UsuarioResumidoResponse();
        response.setId(entity.getId());
        response.setNome(entity.getNome());
        response.setEmail(entity.getEmail());
        response.setStatus(entity.getStatus());
        response.setPermissao(entity.getFuncao());
        return response;
    }
}
