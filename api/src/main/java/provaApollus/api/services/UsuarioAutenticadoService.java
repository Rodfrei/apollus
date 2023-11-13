package provaApollus.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import provaApollus.api.domain.Usuario;
import provaApollus.api.repository.UsuarioRepository;

import static java.util.Objects.isNull;

@Service
public class UsuarioAutenticadoService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Long getId() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication.getPrincipal() instanceof Usuario) {
            return ((Usuario) authentication.getPrincipal()).getId();
        }

        return null;
    }

    public Usuario get() {
        Long id = getId();

        if (isNull(id)) {
            return null;
        }

      //  if(!usuarioRepository.findById(id).get().isAtivo()){
     //       return null;
      //  }

        return usuarioRepository.findById(getId()).orElse(null);
    }


}
