import { api } from "./api";
import secureLocalStorage from "react-secure-storage";

export async function login(email: string, senha: string) {
    try {
        const response = await api.post("Autenticacao/login", { email, senha });

        const token = response.data.token;

        secureLocalStorage.setItem("Token", token);
    } catch (error: any) {
        throw new Error("E-mail ou senha inválidos")
    }
}

export async function estaLogado() {
    const token = secureLocalStorage.getItem("Token")

    if(token != null){
        return true;
    }else {
        return false;
    }
}

export async function logout() {
    secureLocalStorage.removeItem("Token");
}
