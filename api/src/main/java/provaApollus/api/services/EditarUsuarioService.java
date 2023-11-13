package provaApollus.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import provaApollus.api.controller.request.EditarUsuarioRequest;
import provaApollus.api.domain.Usuario;
import provaApollus.api.repository.UsuarioRepository;
import provaApollus.api.services.core.ValidaEmailFoiUtilizadoService;

import java.time.LocalDateTime;
import java.util.Optional;


@Service
@Transactional
public class EditarUsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    ValidaEmailFoiUtilizadoService validaEmailFoiUtilizadoService;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private ResponseEntityErrorService responseEntityErrorService;


   public ResponseEntity editar(Long id, EditarUsuarioRequest request){
       Optional<Usuario> usuarioOptional = usuarioRepository.findById(id);

       if(usuarioOptional.isEmpty()){
           return responseEntityErrorService.criar("Usuario não encontrado!", HttpStatus.BAD_REQUEST);
       }

       boolean isEmailUtilizado = validaEmailFoiUtilizadoService.validar(request.getEmail(), id);

       if(isEmailUtilizado){
           return responseEntityErrorService.criar("Email pertence a outro usuario!", HttpStatus.BAD_REQUEST);
       }

       Usuario usuario = usuarioOptional.get();

       usuario.setNome(request.getNome());
       usuario.setEmail(request.getEmail());
       usuario.setTelefone(request.getTelefone());
       usuario.setEmail(request.getEmail());
       usuario.setDataNascimento(request.getDataNascimento());
       usuario.setEditadoPor(usuarioAutenticadoService.get().getNome());
       usuario.setEditadoEm(LocalDateTime.now());
       usuario.setStatus(request.getStatus());
       usuario.setFuncao(request.getFuncao());

       usuarioRepository.save(usuario);

       return ResponseEntity.ok().build();
   }
}
