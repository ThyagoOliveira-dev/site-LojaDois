package com.thyago.gestao_atendimentos.repository;

import com.thyago.gestao_atendimentos.model.Produto;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

    //boolean existsByEmail(@Email @NotBlank(message = "O campo Email não pode ficar vazio.") String email);
}


