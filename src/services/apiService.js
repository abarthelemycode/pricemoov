import axios from 'axios';
import { config } from '../config'

const baseURL = config.apiUrl;

const api = axios.create({
    baseURL,
    timeout: 5000,
    headers: {}
})

export default api
