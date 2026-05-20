import Link from "next/link";
import styles from "./card-jogo.module.css";
import { formatarPreco } from "@/utils/formatacao";
import { router } from "next/client";
import Botao from "../botao/botao";

type Jogo = {
    jogoID: number;
    nome: string;
    preco: number;
    imagemUrl: string;
    onDelete: (jogoID: number) => void;
}

const CardJogo = ({ jogoID, nome, preco, imagemUrl, onDelete}: Jogo) => {
    return (
        <article className={styles.card_jogo}>
            <img src={imagemUrl} alt="Jogo vendido pela loja." className={styles.img_jogo} />
            <h3 className={styles.titulo_jogo}>{nome}</h3>
            <p className={styles.valor_jogo}>{formatarPreco(preco)}</p>
            {/* talvez aqui precise de uma div */}
            <Link href={"/detalhe-jogo/"} className={styles.link_detalhe}>Detalhes</Link>
            
        </article>
    )
}

export default CardJogo;