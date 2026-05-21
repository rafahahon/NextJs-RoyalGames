import Header from "@/components/header/header";
import styles from "./cadastrar-jogo.module.css";
import Footer from "@/components/footer/footer";
import ListaJogo from "@/components/lista-jogo/lista-jogo";
import { notificacao } from "@/utils/toast";
import { listarPorId } from "../api/jogoService";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { listarPlataforma } from "../api/plataformaService";
import { listarClassificacao } from "../api/classificacaoService";
import { listarGenero } from "../api/generoService";
import { cadastrarJogo } from "../api/jogoService";

interface Genero {
    generoID: number;
    nome: string;
}

interface Classificacao {
    classificacaoID: number;
    nome: string;
}

interface Plataforma {
    plataformaID: number;
    nome: string;
}

const CadastrarJogo = () => {

    const [nome, setNome] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [genero, setGenero] = useState<Genero[]>([]);
    const [generoSelecionado, setGeneroSelecionado] = useState<number[]>([]);
    const [classificacao, setClassificacao] = useState<Classificacao[]>([]);
    const [classificacaoSelecionada, setClassificacaoSelecionada] = useState<number>(0);
    const [plataforma, setPlataforma] = useState<Plataforma[]>([]);
    const [plataformaSelecionada, setPlataformaSelecionada] = useState<number[]>([]);
    const [estaAutenticado, setEstaAutenticado] = useState(false);

    const router = useRouter();
    const id = router.query.id;

    async function listarGeneroEmJogo() {
        const lista = await listarGenero()
        setGenero(lista.data)
    }

    async function listarClassificacaoEmJogo() {
        const lista = await listarClassificacao()
        setClassificacao(lista.data)
    }

    async function listarPlataformaEmJogo() {
        const lista = await listarPlataforma()
        setPlataforma(lista.data)
    }

    async function listarJogo() {
        if (!id) return;

        const jogo = await listarPorId(Number(id))
        setNome(jogo.nome)
        setDescricao(jogo.descricao)
        setPreco(jogo.preco)
        setImagem(jogo.imagemUrl)
        setGeneroSelecionado(jogo.generos)
        setClassificacaoSelecionada(jogo.classificacaoID)
        setPlataformaSelecionada(jogo.plataformas)
    }


    async function SalvarJogo(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const dadosCadastro = {
                nome,
                preco,
                descricao,
                imagem,
                generoIds: generoSelecionado,
                plataformaIds: plataformaSelecionada,
                classificacaoIndicativaId: classificacaoSelecionada
            }

            console.log(dadosCadastro);

            await cadastrarJogo(dadosCadastro);
            notificacao("Jogo cadastrado!");

            setTimeout(() => {
                router.push("/home")
            }, 2000)

        } catch (error: any) {
            console.log(error.message)
        }

    }

    useEffect(() => {

        if (!router.isReady) return;

        listarGeneroEmJogo()
        listarClassificacaoEmJogo()
        listarPlataformaEmJogo()
        listarJogo()
    }, [router.isReady, id]);



    return (
        <>
            <Header />
            <main>

                <section className={styles.banner}>
                    <div className={`${styles.container_banner} layout_guide`}>
                        <div className={styles.texto_banner}>
                            <h1>Cadastrar novo jogo</h1>
                            <hr className={styles.linha} />
                        </div>

                        <form className={styles.formulario_jogo} action="" onSubmit={SalvarJogo}>
                            <div className={styles.campos_esquerda}>
                                <div className={styles.campo_texto}>
                                    <label htmlFor="">Nome</label>
                                    <input type="text" name="nome" value={nome}
                                        onChange={(e) => setNome(e.target.value)} />
                                </div>

                                <div className={styles.campos_meio}>
                                    <div className={`${styles.campo_texto}`}>
                                        <label htmlFor="">Valor</label>
                                        <input type="number" name="preco" id="preco" value={preco}
                                            onChange={(e) => setPreco(e.target.value)} />
                                    </div>

                                    <div className={styles.campo_texto}>
                                        <label htmlFor="genero">Gênero</label>
                                        <select name="genero" id="genero" multiple
                                            value={generoSelecionado.map(String)}
                                            onChange={(e) => {
                                                setGeneroSelecionado(
                                                    Array.from(e.target.selectedOptions).map(option => Number(option.value))
                                                )
                                            }}
                                        >
                                            {genero.map((item) => (
                                                <option value={item.generoID} key={item.generoID}>
                                                    {item.nome}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.campo_texto}>
                                        <label htmlFor="classificacao">Classificação Indicativa</label>
                                        <select name="classificacao" id="classificacao" value={classificacaoSelecionada}
                                            onChange={(e) => {
                                                setClassificacaoSelecionada(Number(e.target.value))
                                            }}>

                                            <option value="0" disabled selected>Ex: Livre</option>

                                            {classificacao.map((item) => (
                                                <option value={item.classificacaoID} key={item.classificacaoID}>
                                                    {item.nome}
                                                </option>
                                            ))}
                                            </select>
                                    </div>
                                </div>

                                <div className={styles.campos_baixo}>
                                    <div className={styles.campo_texto}>
                                        <label htmlFor="plataforma">Plataforma</label>
                                        <select name="plataforma" id="plataforma" multiple
                                            value={plataformaSelecionada.map(String)}
                                            onChange={(e) => {
                                                setPlataformaSelecionada(
                                                    Array.from(e.target.selectedOptions).map(option => Number(option.value)))
                                            }}>
                                            {plataforma.map((item) => (
                                                <option value={item.plataformaID}
                                                    key={item.plataformaID}>{item.nome}</option>
                                            ))}</select>
                                    </div>

                                    <div className={styles.campo_texto}>
                                        <label htmlFor="imagem">Imagem</label>
                                        <input type="file" name="imagem" id="imagem"
                                            onChange={(e) => {
                                                if (e.target.files && e.target.files[0])
                                                    setImagem(e.target.files[0])
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.campo_direita}>
                                <div className={styles.campo_texto}>
                                    <label htmlFor="">Descrição</label>
                                    <textarea value={descricao} className={styles.area_descricao} onChange={(event) => {
                                        setDescricao(event.target.value)
                                    }} />
                                </div>
                            </div>

                            <button className={styles.botao_cadastrar}>Cadastrar</button>
                        </form>
                    </div>
                </section >

                <section className={styles.lista_jogo}>
                    <div className={`${styles.container_lista_jogo} layout_guide`}>
                        <h1>Lista de jogos</h1>
                        <hr />
                    </div>
                        <ListaJogo editar={true} />
                </section>
            </main >
            <Footer />
        </>
    )
}

export default CadastrarJogo;