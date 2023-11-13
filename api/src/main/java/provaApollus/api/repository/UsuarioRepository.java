package provaApollus.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import provaApollus.api.domain.Usuario;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<UserDetails> findByEmail(String email);


    boolean existsByEmail(String email);

    Page<Usuario> findByNomeContainsIgnoreCaseOrEmailContainsIgnoreCase(String nome, String email, Pageable pageable);
    Page<Usuario> findAll(Pageable pageable);
}
