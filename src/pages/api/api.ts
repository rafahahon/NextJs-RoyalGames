import axios from "axios";
import secureLocalStorage from "react-secure-storage";

// constante com o endereço da api consumida
const apiLocal = "https://localhost:7102/api/"; 

export const api = axios.create({
    baseURL: apiLocal
})

api.interceptors.request.use((config) => {
    const token = secureLocalStorage.getItem("Token");

    if(token){
        config.headers.Authorization = "Bearer " + token;
    }

    return config;
});