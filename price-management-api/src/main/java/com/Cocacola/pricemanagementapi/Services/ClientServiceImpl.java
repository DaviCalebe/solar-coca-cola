package com.Cocacola.pricemanagementapi.Services;

import com.Cocacola.pricemanagementapi.Entities.*;
import com.Cocacola.pricemanagementapi.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private PromotionRepository promotionRepository;
    @Autowired
    private LevelRepository levelRepository;
    @Autowired
    private ClientProductRepository clientProductRepository;

    @Override
    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    @Override
    public Client getClient(long id) {
        Client client = clientRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Client not found"));
        return client;
    }

    @Override
    public void addClient(Client client) {
        clientRepository.save(client);
    }

    @Override
    public Client updateClient(long id, Client client) {
        clientRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Client ID"));

        client.setId(id);

        return clientRepository.save(client);

    }

    @Override
    public void DeleteClient(long id) {
        Client client = clientRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Client ID"));

        clientRepository.delete(client);
    }



    @Override
    public void adicionarProdutoAoCliente(Long clienteId, Long produtoId,int quantidade) {
        Client cliente = clientRepository.findById(clienteId)
                .orElseThrow(() ->  new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Client ID"));

        Product produto = productRepository.findById(produtoId)
                .orElseThrow(() ->  new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Product ID"));

        if (quantidade > produto.getStock_quantity()) {
            throw new IllegalArgumentException("Quantidade solicitada é maior que a quantidade em estoque disponível");
        }
        Level level = levelRepository.findById(cliente.getLevel().getId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Level ID"));

        List<Promotion> promocoes = promotionRepository.findByProductAndLevel(produto, level);


        double precoFinal = produto.getPrice();
        if (!promocoes.isEmpty()) {
            Promotion promocao = promocoes.get(0);
            precoFinal = promocao.getPromotionalPrice();
        }

        ClientProduct clienteProduto = new ClientProduct();
        clienteProduto.setCliente(cliente);
        clienteProduto.setProduto(produto);
        clienteProduto.setPrecoFinal(precoFinal);
        clienteProduto.setQuantidade(quantidade);

        cliente.getClienteProdutos().add(clienteProduto);
        clientProductRepository.save(clienteProduto);
        clientRepository.save(cliente);
    }

    @Override
    public List<ClientProduct> obterProdutosDoCliente(Long clienteId) {
        Client cliente = clientRepository.findById(clienteId)
                .orElseThrow(() ->  new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Client ID"));
        return clientProductRepository.findByClienteId(clienteId);
    }

    @Override
    public void removerProdutoDoCliente(Long clienteId, Long produtoId) {
        Client cliente = clientRepository.findById(clienteId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Client ID"));

        ClientProduct clienteProduto = cliente.getClienteProdutos().stream()
                .filter(cp -> cp.getProduto().getId().equals(produtoId))
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not Found "));

        cliente.getClienteProdutos().remove(clienteProduto);
        clientRepository.save(cliente);
        clientProductRepository.delete(clienteProduto);
    }
}
