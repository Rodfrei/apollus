package provaApollus.api.mapper;

import provaApollus.api.controller.request.CadastrarUsuarioRequest;
import provaApollus.api.controller.response.UsuarioResponse;
import provaApollus.api.domain.Status;
import provaApollus.api.domain.Usuario;

public class UsuarioMapper {


    public static UsuarioResponse toResponse(Usuario entity) {
        UsuarioResponse response = new UsuarioResponse();
        response.setId(entity.getId());
        response.setNome(entity.getNome());
        response.setEmail(entity.getEmail());
        response.setCpf(entity.getCpf());
        response.setDataNascimento(entity.getDataNascimento());
        response.setTelefone(entity.getTelefone());
        response.setStatus(entity.getStatus());
        response.setCriadoPor(entity.getCriadoPor());
        response.setCriadoEm(entity.getCriadoEm());
        response.setEditadoPor(entity.getEditadoPor());
        response.setEditadoEm(entity.getEditadoEm());
        response.setPermissao(entity.getFuncao());
        return response;
    }

    public static Usuario toEntity(CadastrarUsuarioRequest request) {
        Usuario entity = new Usuario();
        entity.setNome(request.getNome());
        entity.setEmail(request.getEmail());
        entity.setCpf(request.getCpf());
        entity.setDataNascimento(request.getDataNascimento());
        entity.setTelefone(request.getTelefone());
        entity.setStatus(Status.ATIVO);
        return entity;
    }
}
