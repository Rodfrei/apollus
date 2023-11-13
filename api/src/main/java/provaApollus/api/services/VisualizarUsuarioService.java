package provaApollus.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import provaApollus.api.domain.Usuario;
import provaApollus.api.repository.UsuarioRepository;

import java.util.Optional;

import static provaApollus.api.mapper.UsuarioMapper.toResponse;

@Service
public class VisualizarUsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    private ResponseEntityErrorService responseEntityService;

    public ResponseEntity visualizar(Long id) throws ResponseStatusException {

        Optional<Usuario> usuarioOptional = usuarioRepository.findById(id);

        if(usuarioOptional.isEmpty()){
            return responseEntityService.criar("Usuario não encontrado!", HttpStatus.BAD_REQUEST);
        }

        Usuario usuario = usuarioOptional.get();

        return ResponseEntity.ok(toResponse(usuario));
    }
}
