import axios from 'axios';

const api = axios.create({
    baseURL: 'httpos://api.github.com',
    })

    export default api;
    