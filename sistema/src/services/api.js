import axios from "axios";

const baseURL = 'http://localhost:8080/clients';
export const listClients = () => axios.get(baseURL);