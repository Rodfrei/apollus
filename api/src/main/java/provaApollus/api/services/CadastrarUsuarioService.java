package provaApollus.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import provaApollus.api.controller.request.CadastrarUsuarioRequest;
import provaApollus.api.domain.Status;
import provaApollus.api.domain.Usuario;
import provaApollus.api.mapper.UsuarioMapper;
import provaApollus.api.repository.UsuarioRepository;
import provaApollus.api.services.core.ValidaEmailUnicoService;

import java.time.LocalDateTime;


@Service
public class CadastrarUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ValidaEmailUnicoService validaEmailUnicoService;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private ResponseEntityErrorService responseEntityErrorService;


    public ResponseEntity cadastrar(CadastrarUsuarioRequest request) {

        boolean isEmailUtilizado = validaEmailUnicoService.validar(request.getEmail());

        if(isEmailUtilizado){
            return responseEntityErrorService.criar("Email pertence a outro usuario!", HttpStatus.BAD_REQUEST);
        }

        Usuario usuario = UsuarioMapper.toEntity(request);

        usuario.setSenha(getSenhaCriptografada(request.getSenha()));
        usuario.setFuncao(request.getFuncao());
        usuario.setCriadoPor(usuarioAutenticadoService.get().getNome());
        usuario.setCriadoEm(LocalDateTime.now());


        usuarioRepository.save(usuario);

        return ResponseEntity.ok().build();

    }

    private String getSenhaCriptografada(String senhaAberta) {
        return passwordEncoder.encode(senhaAberta);
    }



}
