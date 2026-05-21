import { api } from "./api";

type JogoForm = {
    nome: string,
    preco: string,
    descricao: string,
    imagem: File | null,
    generoIds: number[],
    plataformaIds: number[],
    classificacaoIndicativaId: number
}

interface JogoListagem {
    nome: string,
    preco: string,
    descricao: string,
    imagemUrl?: string,
    statusJogo: boolean,
    generos: number[],
    plataformas: number[],
    classificacaoNome: string[],
}

export async function cadastrarJogo(dados: JogoForm) {
    try {
        const formData = new FormData();
        formData.append("nome", dados.nome);
        formData.append("preco", dados.preco);
        formData.append("descricao", dados.descricao);
        if (dados.imagem) {
            formData.append("imagem", dados.imagem)
        }
        formData.append("classificacaoId", dados.classificacaoIndicativaId.toString());

        dados.generoIds.forEach((id) => {
            formData.append("generoIds", id.toString());
        })

        dados.plataformaIds.forEach((id) => {
            formData.append("plataformaIds", id.toString());
        })

        await api.post("Jogo", formData)
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function listarJogo() {
    try {
        const response = await api.get("Jogo");

        const jogosAtivos = response.data.filter(
            (jogo: JogoListagem) => jogo.statusJogo === true
        );

        const jogos = jogosAtivos.map((jogo: JogoListagem) => ({
            ...jogo, imagemUrl: `${api.defaults.baseURL}${jogo.imagemUrl}`
        }))

        return jogos;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function listarPorId(id: number) {
    try {
        const response = await api.get("Jogo/" + id);

        const jogo = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        }

        return jogo;

    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function excluirJogo(jogoId: number) {
    try {
        await api.delete("Jogo/" + jogoId)
    } catch (error: any) {
        throw new Error(error.response.data)
    }
}

export async function editarJogo(jogoId: number, dados: JogoForm) {
    try {
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("preco", dados.preco);
        formData.append("descricao", dados.descricao);
        if (dados.imagem) {
            formData.append("imagem", dados.imagem)
        }

        formData.append("classificacaoIndicativaId", dados.classificacaoIndicativaId.toString());

        dados.generoIds.forEach((id) => {
            formData.append("generoIds", id.toString());
        })

        dados.plataformaIds.forEach((id) => {
            formData.append("plataformaIds", id.toString());
        })

        await api.post("Jogo/" + jogoId, formData)
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}