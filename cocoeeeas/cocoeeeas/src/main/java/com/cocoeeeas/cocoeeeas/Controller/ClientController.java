package com.cocoeeeas.cocoeeeas.Controller;

import com.cocoeeeas.cocoeeeas.Service.ClientService;
import com.cocoeeeas.cocoeeeas.entities.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        return ResponseEntity.ok("Cliente com ID " + client.getId() + " Adicionado com sucesso.");
    }

    @PutMapping("/update/{id}")
    public Client updateClient(@PathVariable long id, @RequestBody Client client) {
       return clientService.updateClient(id , client);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteClient(@PathVariable long id) {
        clientService.DeleteClient(id);
        return ResponseEntity.ok("Cliente com ID " + id + " deletado com sucesso.");

    }

}
