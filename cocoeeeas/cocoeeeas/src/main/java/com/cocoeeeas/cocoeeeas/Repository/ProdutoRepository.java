package com.cocoeeeas.cocoeeeas.Repository;

import com.cocoeeeas.cocoeeeas.entities.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produtos,Long > {

}
