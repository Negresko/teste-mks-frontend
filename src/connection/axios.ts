import axios from 'axios';

import { apiUrl } from '../provisoriaURL';

const instance = axios.create({
    baseURL: apiUrl,
    timeout: 1000,
});

export default instance;