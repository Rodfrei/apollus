package provaApollus.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import provaApollus.api.controller.request.AlterarSenhaRequest;
import provaApollus.api.domain.Usuario;
import provaApollus.api.repository.UsuarioRepository;

@Service
public class AlterarSenhaService {

    @Autowired
    private UsuarioRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private  UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private ResponseEntityErrorService responseEntityErrorService;


    public ResponseEntity alterar(AlterarSenhaRequest request) {

            Usuario usuario = usuarioAutenticadoService.get();

            if (bCryptPasswordEncoder.matches(request.getSenhaAntiga(), usuario.getSenha())) {

                String senhaNovaCriptografada = bCryptPasswordEncoder.encode(request.getNovaSenha());
                usuario.setSenha(senhaNovaCriptografada);
                userRepository.save(usuario);

                return ResponseEntity.ok().build();
            } else {
                return responseEntityErrorService.criar("Não foi possivel alterar a senha.", HttpStatus.BAD_REQUEST);
            }
    }
}
