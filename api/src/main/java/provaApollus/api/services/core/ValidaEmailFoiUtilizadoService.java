package provaApollus.api.services.core;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import provaApollus.api.domain.Usuario;
import provaApollus.api.repository.UsuarioRepository;
import provaApollus.api.services.UsuarioAutenticadoService;

import java.util.Optional;

@Service
public class ValidaEmailFoiUtilizadoService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    UsuarioAutenticadoService usuarioAutenticadoService;


    public boolean validar(String email, Long id){

        Optional<UserDetails> usuario = usuarioRepository.findByEmail(email);

        if(usuario.isEmpty()){
            return false;
        }

        Usuario u = (Usuario) usuario.get();


        if(usuario.isPresent() && !id.equals(u.getId())){
            return true;
        }
        return false;
    }
}
