package com.thyago.gestao_atendimentos.controller;

import com.thyago.gestao_atendimentos.dto.ProdutoDTO;
import com.thyago.gestao_atendimentos.model.Produto;
import com.thyago.gestao_atendimentos.repository.ProdutoRepository;
import com.thyago.gestao_atendimentos.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "http://localhost:3000")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping
    public List<Produto> listar() {
        return produtoService.listar();
    }

    @PostMapping
    public ProdutoDTO criar(@RequestBody ProdutoDTO dto)
    {
        return produtoService.salvar(dto);
    }

    @PutMapping("/{id}")
    public ProdutoDTO atualizar(@PathVariable("id") Long id, @RequestBody ProdutoDTO dto)
    {
        return produtoService.atualizarProduto(id, dto);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        produtoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
