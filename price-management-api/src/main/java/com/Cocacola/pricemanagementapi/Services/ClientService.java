package com.Cocacola.pricemanagementapi.Services;

import com.Cocacola.pricemanagementapi.Entities.Client;
import com.Cocacola.pricemanagementapi.Entities.ClientProduct;


import java.util.List;

public interface ClientService {

    List<Client> getClients();

    Client getClient(long id);

    void addClient(Client client);

    Client updateClient(long id, Client client);

    void DeleteClient(long id);


    void adicionarProdutoAoCliente(Long clienteId, Long produtoId,int quantidade);

    List<ClientProduct> obterProdutosDoCliente(Long clienteId);

    void removerProdutoDoCliente(Long clienteId, Long produtoId);
}