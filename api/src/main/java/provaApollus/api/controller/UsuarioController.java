package provaApollus.api.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import provaApollus.api.controller.request.AlterarSenhaRequest;
import provaApollus.api.controller.request.CadastrarUsuarioRequest;
import provaApollus.api.controller.request.EditarUsuarioRequest;
import provaApollus.api.controller.response.UsuarioResponse;
import provaApollus.api.services.*;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private VisualizarUsuarioService visualizarUsuarioService;

    @Autowired
    private CadastrarUsuarioService cadastrarUsuarioService;

    @Autowired
    private ListarUsuarioService listarUsuarioService;

    @Autowired
    private EditarUsuarioService editarUsuarioService;

    @Autowired
    private DeletarUsuarioService deletarUsuarioService;

    @Autowired
    private AlterarSenhaService alterarSenhaService;

    @GetMapping("/{id}")
    public ResponseEntity vizualizar(@PathVariable Long id) {
        return visualizarUsuarioService.visualizar(id);
    }


    @PostMapping()
    public ResponseEntity cadastrar(@Valid @RequestBody CadastrarUsuarioRequest request) {
        return cadastrarUsuarioService.cadastrar(request);
    }

    @GetMapping()
    public ResponseEntity listar(@RequestParam(required = false, defaultValue = "") String busca, Pageable pageable) {
        return listarUsuarioService.listar(busca, pageable);
    }

    @PutMapping("/{id}")
    public ResponseEntity editar(@PathVariable Long id, @Valid @RequestBody EditarUsuarioRequest request){
        return editarUsuarioService.editar(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity deletar(@PathVariable Long id){
        return deletarUsuarioService.deletar(id);
    }


    @PutMapping("/alterar-senha")
    public ResponseEntity editar(@Valid @RequestBody AlterarSenhaRequest request){
        return alterarSenhaService.alterar(request);
    }

}
