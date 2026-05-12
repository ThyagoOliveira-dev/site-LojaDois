package com.thyago.gestao_atendimentos.map;

import com.thyago.gestao_atendimentos.dto.ProdutoDTO;
import com.thyago.gestao_atendimentos.model.Produto;

@org.mapstruct.Mapper (componentModel = "spring")
public interface Mapper {

    Produto toEntity(ProdutoDTO dto);
    ProdutoDTO toDTO(Produto produto);
}