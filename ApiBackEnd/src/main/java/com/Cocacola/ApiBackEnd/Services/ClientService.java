package com.Cocacola.ApiBackEnd.Services;

import com.Cocacola.ApiBackEnd.Entities.Client;

import java.util.List;

public interface ClientService {

    List<Client> getClients();

    Client getClient(long id);

    void addClient(Client client);

    Client updateClient(long id, Client client);

    void DeleteClient(long id);
}

