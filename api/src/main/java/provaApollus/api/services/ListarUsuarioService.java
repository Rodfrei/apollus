package provaApollus.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import provaApollus.api.controller.response.UsuarioResumidoResponse;
import provaApollus.api.mapper.UsuarioResumidoMapper;
import provaApollus.api.repository.UsuarioRepository;

@Service
public class ListarUsuarioService {
    private static final int MINIMO_DE_LETRAS_PARA_BUSCAR = 3;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public ResponseEntity listar(String busca, Pageable pageable){
        if(busca.length() < MINIMO_DE_LETRAS_PARA_BUSCAR){
            Page<UsuarioResumidoResponse> response = usuarioRepository.findAll(pageable).map(UsuarioResumidoMapper::toResponse);
            return ResponseEntity.ok(response);
        } else {
            Page<UsuarioResumidoResponse> response = usuarioRepository.findByNomeContainsIgnoreCaseOrEmailContainsIgnoreCase(busca, busca, pageable).map(UsuarioResumidoMapper::toResponse);
            return ResponseEntity.ok(response);
        }
    }
}
