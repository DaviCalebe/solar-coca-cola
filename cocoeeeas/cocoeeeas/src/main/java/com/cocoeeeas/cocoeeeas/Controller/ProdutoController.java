package com.cocoeeeas.cocoeeeas.Controller;


import com.cocoeeeas.cocoeeeas.Repository.ProdutoRepository;
import com.cocoeeeas.cocoeeeas.Service.ProdutoService;
import com.cocoeeeas.cocoeeeas.entities.Produtos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    public List<Produtos> getProdutos()
    {
        return produtoService.getProdutos();
    }

    @GetMapping("/{id}")
    public Produtos getProdutoById(@PathVariable long id)
    {
        return produtoService.getProduto(id);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addProduto(@RequestBody Produtos produto)
    {
        produtoService.addProduto(produto);
        return ResponseEntity.ok("Produto com ID " + produto.getId() + " Adicionado com sucesso.");
    }

    @PutMapping("/update/{id}")
    public Produtos updateProduto(@PathVariable long id, @RequestBody Produtos produto)
    {
        return produtoService.updateProduto(id, produto);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduto(@PathVariable long id)
    {
        produtoService.deleteProduct(id);
        return ResponseEntity.ok("Produto com ID " + id + " deletado com sucesso.");
    }
}
