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
}

type CardJogoProps = {
    jogo: Jogo,
    onDelete: (jogoID: number) => void;
    onEdit?: (jogo: Jogo) => void;
    editar: boolean,
}

const CardJogo = ({editar, jogo, onDelete, onEdit}:CardJogoProps) => {
    return (
        <article className={styles.card_jogo}>
            <img src={jogo.imagemUrl} alt="Jogo vendido pela loja." className={styles.img_jogo} />
            <h3 className={styles.titulo_jogo}>{jogo.nome}</h3>
            <p className={styles.valor_jogo}>{formatarPreco(jogo.preco)}</p>
            {/* talvez aqui precise de uma div */}
            {editar ? <button onClick={() => onEdit?.(jogo)} className={styles.link_detalhe}>Editar</button> : <Link href={`/detalhe-jogo/${jogo.jogoID}`} className={styles.link_detalhe}>Detalhes</Link>}
            
            
        </article>
    )
}

export default CardJogo;