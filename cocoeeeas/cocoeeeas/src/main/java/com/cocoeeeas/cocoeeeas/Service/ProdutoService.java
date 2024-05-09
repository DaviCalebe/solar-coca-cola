package com.cocoeeeas.cocoeeeas.Service;

import com.cocoeeeas.cocoeeeas.entities.Produtos;

import java.util.List;

public interface ProdutoService {

    List<Produtos> getProdutos();

    Produtos getProduto(long id);

    void addProduto(Produtos produto);

    Produtos updateProduto(long id, Produtos produto);


    void deleteProduct(long id);
}
