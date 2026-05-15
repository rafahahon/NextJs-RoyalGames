import Link from "next/link";
import styles from "./card-jogo.module.css"


const CardJogo = () => {
    return (
        <article className={styles.card_jogo}>
            <img src="./mineimagem.png" alt="Jogo vendido pela loja." className={styles.img_jogo} />
            <h3 className={styles.titulo_jogo}>Minecraft</h3>
            <p className={styles.valor_produto}>R$70,00</p>
            <Link href={"/detalhe-jogo/"}>Detalhes</Link>
        </article>
    )
}

export default CardJogo;