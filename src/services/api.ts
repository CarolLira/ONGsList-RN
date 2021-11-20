import axios from 'axios';

const api = axios.create({
    baseURL: 'http://coloque-seu-ip:8080/',
});

export default api;