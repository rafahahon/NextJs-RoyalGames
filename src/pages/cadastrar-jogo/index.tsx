import Header from "@/components/header/header";
import styles from "./cadastrar-jogo.module.css";
import Footer from "@/components/footer/footer";
import CardJogo from "@/components/card-jogo/card-jogo";
import ListaJogo from "@/components/lista-jogo/lista-jogo";

const CadastrarJogo = () => {
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
                        <form className={styles.formulario_jogo}>
                            <div className={styles.campos_esquerda}>
                                <div className={styles.campo_texto}>
                                    <label htmlFor="">Nome</label>
                                    <input type="text" />
                                </div>
                                <div className={styles.campos_meio}>
                                    <div className={`${styles.campo_texto}`}>
                                        <label htmlFor="">Valor</label>
                                        <input type="text" />
                                    </div>
                                    <div className={styles.campo_texto}>
                                        <label htmlFor="">Gênero</label>
                                        <select name="" id=""></select>
                                    </div>
                                    <div className={styles.campo_texto}>
                                        <label htmlFor="">Classificação Indicativa</label>
                                        <select name="" id=""></select>
                                    </div>
                                </div>
                                <div className={styles.campos_baixo}>
                                    <div className={styles.campo_texto}>
                                        <label htmlFor="">Plataforma</label>
                                        <select name="" id=""></select>
                                    </div>
                                    <div className={styles.campo_texto}>
                                        <label htmlFor="">Imagem</label>
                                        <input type="image" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.campo_direita}>
                                <div className={styles.campo_texto}>
                                    <label htmlFor="">Descrição</label>
                                    <textarea className={styles.area_descricao} />
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
                        <ListaJogo />
                    </div>
                </section>
            </main >
            <Footer />
        </>
    )
}

export default CadastrarJogo;