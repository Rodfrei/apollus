package provaApollus.api.controller.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;
import provaApollus.api.domain.Funcao;
import provaApollus.api.domain.Status;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UsuarioResponse {
    private Long id;
    private String nome;
    private String email;
    private String telefone;
    private String cpf;

    private LocalDate dataNascimento;

    private Status status;

    private String criadoPor;

    @JsonFormat(pattern = "HH:mm:ss dd/MM/yyyy")
    private LocalDateTime criadoEm;

    private String editadoPor;

    @JsonFormat(pattern = "HH:mm:ss dd/MM/yyyy")
    private LocalDateTime editadoEm;

    private Funcao permissao;
}
