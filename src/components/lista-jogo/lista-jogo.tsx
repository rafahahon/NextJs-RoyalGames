import Link from "next/link";
import styles from "./lista-jogo.module.css";
import { useEffect, useState } from "react";
import CardJogo from "../card-jogo/card-jogo";
import { excluirJogo, listarJogo } from "@/pages/api/jogoService";
import { notificacao, toastConfirmarDelete } from "@/utils/toast";
import { verificarAutenticacao } from "@/utils/auth"

interface Jogo {
    jogoID: number,
    nome: string,
    preco: number,
    genero: string;
    classificacao: string;
    plataforma: string;
    imagemUrl: string;
    descricao: string;
    statusJogo: boolean
}

const ListaJogo = () => {

    const [jogos, setJogos] = useState<Jogo[]>([]);
    const [ordem, setOrdem] = useState("todos");
    const [pesquisa, setPesquisa] = useState("");
    const [estaAutenticado, setEstaAutenticado] = useState(false);

    async function listar() {
        try {
            const lista = await listarJogo();
            setJogos(lista);
        } catch (error: any) {
            console.log(error.message)
        }
    }

    function confirmarExclusao(jogoId: number) {
        toastConfirmarDelete(async () => {
            try {
                await excluirJogo(jogoId);
                setJogos((ListaAtual) =>
                    ListaAtual.map((jogo) =>
                        jogo.jogoID === jogoId
                            ? { ...jogo, statusJogo: false }
                            : jogo
                    )
                )
                notificacao("Jogo inativado!")
                listar();
            } catch (error: any) {
                error(error.message)
            }
        })
    }

    useEffect(() => {
        setEstaAutenticado(verificarAutenticacao());
        listar();
    }, [])

    const jogosFiltrados = jogos.filter((jogo) => jogo.nome.toLowerCase().includes(pesquisa.toLowerCase()))
        .sort((a, b) => {
            if (ordem === "menorPreco") {
                return a.preco - b.preco;
            }

            return a.jogoID - b.jogoID;
        });

    return (
        <div className={styles.container_lista}>
            <div className={styles.pesquisa_jogo}>
                <input className={styles.input_pesquisa} type="text" placeholder="Pesquise..." value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} />
                <button value={ordem} onChange={(e) => setOrdem(e.target.value)}>Menor preço</button>
                <select className={styles.filtro}>
                    <option>Gênero</option>
                </select>
            </div>
            <div className={styles.lista_jogo}>
                {jogosFiltrados.length > 0 ? jogosFiltrados.map((jogo) => (
                    <CardJogo
                        key={jogo.jogoID}
                        jogoID={jogo.jogoID}
                        nome={jogo.nome}
                        preco={jogo.preco}
                        imagemUrl={jogo.imagemUrl}
                        onDelete={confirmarExclusao}
                    />
                )) : (
                    <p>Carregando jogo...</p>
                )}
            </div>
            <div className={styles.botoes_pagina}>

                <button> <img src="./setaesquerda.svg" alt="Seta esquerda" /> </button>
                <button> 1 </button>
                <button> 2 </button>
                <button> 3 </button>
                <button> 4 </button>
                <button> 5 </button>
                <button> <img src="./setadireita.svg" alt="Seta direita" /> </button>

            </div>
        </div>
    )
}

export default ListaJogo;