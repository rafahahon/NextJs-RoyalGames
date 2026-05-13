import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./detalhe-jogo.module.css"

const DetalheJogo = () => {
    return (
        <>
            <main className={styles.main_detalhes}>
                <Header />
                <section className={`${styles.detalhes} layout_guide`}>
                    <article className={styles.card_detalhes} aria-label="Card de detalhes do jogo">
                        <div className={styles.cabecalho}>
                            <h1 id="titulo-detalhes" className={styles.titulo_detalhes}>Detalhes do jogo </h1>
                            <hr id={styles.linha}></hr>
                        </div>
                        <div className={styles.detalhes_info}>
                            <figure className={styles.card_detalhes_imagem} >
                                <img src="../imgjogo.png" alt="Imagem do jogo selecionado pelo usuário" />
                            </figure>
                            <h2>League of Legends</h2>
                            <p>
                                League of Legends (LoL) é um jogo eletrônico do gênero MOBA (Multiplayer Online Battle Arena) onde duas equipes de cinco jogadores competem entre si com o objetivo de destruir a base adversária. Cada jogador controla um campeão com habilidades únicas, exigindo estratégia, trabalho em equipe e tomada de decisões rápidas durante as partidas.
                                O jogo possui diversos modos, mapas e estilos de jogo, além de oferecer atualizações frequentes com novos personagens, eventos e ajustes de balanceamento. League of Legends é conhecido pelo seu cenário competitivo mundial, reunindo milhões de jogadores e campeonatos profissionais ao redor do mundo.
                            </p>
                        </div>
                        <div className={styles.card_detalhes_infos}>

                            {/* Coluna da esquerda */}
                            <div className={`${styles.card_detalhes_col} ${styles.card_detalhes_col_esq}`}>
                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Classificação indicativa:</h2>
                                    <p className={styles.campo_valor}>
                                        18 anos
                                    </p>
                                </div>
                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Preço:</h2>
                                    <p className={styles.campo_valor}>
                                        R$100,00
                                    </p>
                                </div>
                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Plataformas:</h2>
                                    <p className={styles.campo_valor}>
                                        Xbox e PC
                                    </p>
                                </div>
                            </div>

                            {/* Coluna da direita */}
                            <div className={`${styles.card_detalhes_col} ${styles.card_detalhes_col_dir}`}>
                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Categorias:</h2>
                                    <p className={styles.campo_valor}>
                                        Ulala
                                    </p>
                                </div>
                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Gêneros:</h2>
                                    <p className={styles.campo_valor}>
                                        Todos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default DetalheJogo;