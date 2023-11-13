package provaApollus.api.services.core;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import provaApollus.api.repository.UsuarioRepository;

@Service
public class ValidaEmailUnicoService {

    @Autowired
    UsuarioRepository usuarioRepository;

    public boolean validar(String email) {
        if(usuarioRepository.existsByEmail(email)){
            return true;
        }
        return false;
    }

}
