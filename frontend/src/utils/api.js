import axios from "axios";

import { ACCESS } from "./constants";


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS);

        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, 
    (error) => {
        return Promise.reject(error);
    }
);

export default api;