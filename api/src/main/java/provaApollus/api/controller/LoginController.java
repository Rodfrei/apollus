package provaApollus.api.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import provaApollus.api.controller.request.LoginRequest;
import provaApollus.api.domain.Status;
import provaApollus.api.domain.Usuario;
import provaApollus.api.security.TokenService;

import static provaApollus.api.mapper.LoginMapper.toResponse;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping()
    public ResponseEntity login (@Valid @RequestBody LoginRequest request){
        var usernamePassword = new UsernamePasswordAuthenticationToken(request.getEmail(), request.getSenha());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        Usuario usuario = (Usuario) auth.getPrincipal();

        if(usuario.getStatus() == Status.INATIVO){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        String token = tokenService.generateToken(usuario);

        return ResponseEntity.ok(toResponse(usuario, token));
    }

}
