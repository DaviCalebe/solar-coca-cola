package com.cocoeeeas.cocoeeeas.Service;

import com.cocoeeeas.cocoeeeas.Repository.ProdutoRepository;
import com.cocoeeeas.cocoeeeas.entities.Produtos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ProdutoServiceImpl implements ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    public List<Produtos> getProdutos() {
        return produtoRepository.findAll();
    }

    @Override
    public Produtos getProduto(long id)
    {
        Produtos produto = produtoRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
        return produto;
    }

    @Override
    public void addProduto(Produtos produto) {
        produtoRepository.save(produto);
    }

    @Override
    public Produtos updateProduto(long id, Produtos produto) {
        produtoRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
        produto.setId(id);
        return produtoRepository.save(produto);
    }

    @Override
    public void deleteProduct(long id) {
        Produtos produtos = produtoRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Client ID"));
        produtoRepository.delete(produtos);
    }
}
