package provaApollus.api.controller.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import provaApollus.api.domain.Funcao;
import provaApollus.api.domain.Status;

import java.time.LocalDate;

@Getter
@Setter
public class EditarUsuarioRequest {
    @NotBlank
    private String nome;

    @Email
    private String email;

    @Length(min= 11, max=11, message = "deve possuir 11 caracteres!")
    private String cpf;

    @Length(min= 11, max=11, message = "deve possuir 11 caracteres!")
    private String telefone;

    private LocalDate dataNascimento;

    @NotNull
    private Status status;

    @NotNull
    private Funcao funcao;

}
