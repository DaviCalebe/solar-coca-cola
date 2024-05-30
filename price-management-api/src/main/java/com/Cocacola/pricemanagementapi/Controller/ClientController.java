package com.Cocacola.pricemanagementapi.Controller;

import com.Cocacola.pricemanagementapi.Entities.Client;
import com.Cocacola.pricemanagementapi.Entities.ClientProduct;
import com.Cocacola.pricemanagementapi.Services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping()
    public List<Client> getAllClients() {
        return clientService.getClients();
    }

    @GetMapping("/{id}")
    public Client getClientById(@PathVariable long id) {
        return clientService.getClient(id);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addClient(@RequestBody Client client) {
        clientService.addClient(client);
        return ResponseEntity.ok("Client with ID" + client.getId() + " successfully added.");
    }

    @PutMapping("/update/{id}")
    public Client updateClient(@PathVariable long id, @RequestBody Client client) {
        return clientService.updateClient(id , client);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteClient(@PathVariable long id) {
        clientService.DeleteClient(id);
        return ResponseEntity.ok("Client with ID " + id + " successfully deleted.");

    }
    
    @PostMapping("/{clienteId}/add/produtos")
    public ResponseEntity<Void> adicionarProdutoAoCliente(@PathVariable Long clienteId, @RequestBody Map<String, Object> produtoInfo) {
        Long produtoId = ((Number) produtoInfo.get("produtoId")).longValue();
        int quantidade = (int) produtoInfo.get("quantidade");
        clientService.adicionarProdutoAoCliente(clienteId, produtoId, quantidade);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{clienteId}/produtos")
    public ResponseEntity<List<ClientProduct>> obterProdutosDoCliente(@PathVariable Long clienteId) {
        List<ClientProduct> produtos = clientService.obterProdutosDoCliente(clienteId);
        return ResponseEntity.ok(produtos);
    }

    @DeleteMapping("/{clienteId}/DeleteProduct/{produtoId}")
    public ResponseEntity<Void> removerProdutoDoCliente(@PathVariable Long clienteId, @PathVariable Long produtoId) {
        clientService.removerProdutoDoCliente(clienteId, produtoId);
        return ResponseEntity.ok().build();
    }

}
