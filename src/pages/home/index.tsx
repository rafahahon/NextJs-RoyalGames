import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ListaJogo from "@/components/lista-jogo/lista-jogo"
import styles from "./home.module.css"

const Home = () => {
    return (
        <>
            <main>
                <Header />

                <section id={styles.banner}>
                    <div className={`${styles.container_banner} layout_guide`}>
                        <div className={styles.texto_banner}>
                            <h1>Conheça nossos jogos!</h1>
                            <p>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                        </div>
                        <div className={styles.imagem_banner}>
                            <img src="../imagembanner.svg" alt="Imagem de uma mulher com estética cibernética." />
                        </div>
                    </div>
                </section>

                <section id={styles.catalogo}>
                    <div className={`${styles.container_catalogo} layout_guide`}>
                        {/* catálogo de jogos :D */}
                        <h1>Catálogo de jogos</h1>
                        <hr />
                        <ListaJogo editar={false}/>
                    </div>
                </section>

                 <section id={styles.estudo}>
                    <div className={`${styles.container_estudo} layout_guide`}>
                        <h1 id="titulo-estudo" className={styles.titulo_detalhes}>Jogos online podem afetar o comportamento humano?</h1>
                        <hr id={styles.linha}></hr>
                    </div>
                    <div className={styles.estudo_imagens}>
                        <img src="./lolimagem.png" alt="" />
                        <img src="./csimagem.png" alt="" />
                    </div>
                    <div className={styles.estudo_texto}>
                        <p> Estudos indicam que jogos podem alterar o comportamento humano…<br/>Principalmente quando o time resolve testar sua paciência em plena partida ranqueada.</p>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Home;