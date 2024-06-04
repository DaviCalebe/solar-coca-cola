import axios from "axios";

export default axios.create({
    baseURL: 'https://cocacola-api-production.up.railway.app',
})