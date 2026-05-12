package com.thyago.gestao_atendimentos.service;

import com.thyago.gestao_atendimentos.dto.ProdutoDTO;
import com.thyago.gestao_atendimentos.exception.customizedException.UsuarioNaoEncontradoException;
import com.thyago.gestao_atendimentos.map.Mapper;
import com.thyago.gestao_atendimentos.model.Produto;
import com.thyago.gestao_atendimentos.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private Mapper mapper;

    public List<Produto> listar() {
        return produtoRepository.findAll();
    }

    public ProdutoDTO salvar(ProdutoDTO dto) {
        Produto produto = mapper.toEntity(dto);
        Produto salvo = produtoRepository.save(produto);
        return mapper.toDTO(salvo);
    }

    public ProdutoDTO atualizarProduto(Long id, ProdutoDTO dto) {
        Produto produto = produtoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        produto.setNome(dto.getNome());
        produto.setPreco(dto.getPreco());

        Produto salvar = produtoRepository.save(produto);

        return mapper.toDTO(salvar);
    }
}
