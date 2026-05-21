import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./detalhe-jogo.module.css"
import { listarPorId } from "../../api/jogoService";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { formatarPreco } from "@/utils/formatacao";

interface Jogo {
    jogoID: number;
    nome: string;
    preco: string;
    descricao: string;
    imagemUrl: string;
    generos: [];
    plataformas: [];
    classificacaoNome: string;
}

const DetalheJogo = () => {

    const [jogo, setJogo] = React.useState<Jogo>();

    const params = useParams();
    const jogoId = params?.id;

    async function listar() {
        try {
            const response = await listarPorId(Number(jogoId));
            setJogo(response);
        } catch (error: any) {
            console.log(error.message);
        }
    }


    useEffect(() => {

        if (!jogoId) return;

        listar();
    }, [jogoId]);


    return (
        <>
            <main className={styles.main_detalhes}>
                <Header />
                <section className={`${styles.detalhes} layout_guide`}>
                    <div className={styles.cabecalho}>

                        {jogo ?
                            (<>
                                <h1 id="titulo-detalhes" className={styles.titulo_detalhes}>Detalhes do jogo </h1>
                                <hr id={styles.linha}></hr>

                                <div className={styles.detalhes_info}>
                                    <figure className={styles.card_jogo_imagem} >
                                        <img src={jogo?.imagemUrl} alt="Imagem do jogo selecionado pelo usuário" />
                                    </figure>
                                    <div className={styles.card_detalhes_texto}>
                                        <h2>{jogo?.nome}</h2>
                                        <p>
                                            {jogo?.descricao}
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.card_detalhes_infos}>

                                    {/* Coluna da esquerda */}
                                    <div className={`${styles.card_detalhes_col} ${styles.card_detalhes_col_esq}`}>
                                        <div className={styles.campo}>
                                            <h2 className={styles.campo_titulo}>Classificação indicativa:</h2>
                                            <p className={styles.campo_valor}>
                                                {jogo?.classificacaoNome} anos
                                            </p>
                                        </div>
                                        <div className={styles.campo}>
                                            <h2 className={styles.campo_titulo}>Preço:</h2>
                                            <p className={styles.campo_valor}>
                                                {formatarPreco(Number(jogo?.preco))}
                                            </p>
                                        </div>
                                        <div className={styles.campo}>
                                            <h2 className={styles.campo_titulo}>Plataformas: </h2>
                                            <ul>
                                                {jogo?.plataformas.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Coluna da direita */}
                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Gêneros:</h2>
                                    <ul>
                                        {jogo?.generos.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                            </>) : (<> <h1 style={{ color: "var(--cinza-claro)" }} >Carregando detalhes do jogo...</h1> </>)}
                    </div>


                </section >
                <Footer />
            </main >
        </>
    )
}

export default DetalheJogo;