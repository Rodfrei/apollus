package provaApollus.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import provaApollus.api.domain.Usuario;
import provaApollus.api.repository.UsuarioRepository;

import java.util.Optional;


@Service
public class DeletarUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ResponseEntityErrorService responseEntityErrorService;

    public ResponseEntity deletar(Long id) {
        Optional<Usuario> usuario = usuarioRepository.findById(id);

        if(usuario.isEmpty()){
            return responseEntityErrorService.criar("Usuario não encontrado!", HttpStatus.BAD_REQUEST);
        }

        usuarioRepository.delete(usuario.get());
        return ResponseEntity.ok().build();

    }
}
