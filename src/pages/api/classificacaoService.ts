import { api } from "./api";

export async function listarClassificacao(){
    try {
        const response = await api.get("Classificacao");
        return response;
    } catch (error: any) {
        throw new Error(error.response.data)
    }
}