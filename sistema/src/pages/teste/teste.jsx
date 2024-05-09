/* import api from "../../services/api";
import { useState, useEffect } from "react";

/* export default function Teste(){

    const [clients, setClients] = useState([]);

    useEffect(() => {
        api.get('/clients').then((response) => {
            setClients(response.data.clients)
        })
    }) */

  /*   return (
        <>
            <h1>oi</h1>
            <section>
                <div>
                    {clients.length > 0 ? (
                        clients.map((client) => (
                            <div key={client.id}>
                                <h1>{client.name}</h1>
                            </div>
                        ))
                    ) : (
                        <p>Não há clientes</p>
                    )}
                </div>
            </section>
        </>
    ); */
    /* return <>
        <h1>oi</h1>
        <section>
            <div>
                {clients.length > 0 && clients.map((client) => (
                    <div><h1>{clients.name}</h1></div>
                ))
                } {clients.length === 0 && (
                    <p>Não ha clientes</p>
                )}
            </div>
        </section>
    </>
} */ 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { listClients } from '../../services/api';

const ListClientsComponent = () => {
    const [clients, setClients]  = useState([])
    
    useEffect (() => {
        listClients().then((response) => {
            setClients(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    return (
        <div>
      <h1>Data from Spring Boot:</h1>
      <ul>
        {clients.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
    )
}

export default ListClientsComponent;