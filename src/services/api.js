import axios from 'axios';

const api = axios.create({
    baseURL: 'https://viacep.com.br/wes/'
});

export default api;