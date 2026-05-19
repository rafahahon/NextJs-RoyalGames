import Link from "next/link";
import styles from "./card-jogo.module.css";
import { formatarPreco } from "@/utils/formatacao";
import { router } from "next/client";
import Botao from "../botao/botao";

type Jogo = {
    nome: string,
    img: string,
    preco: number,
    jogoId: number,
}

type CardProps = {
    jogo: Jogo;
    estaAutenticado?: boolean;
    onEdit?: (jogo: Jogo) => void;
    onDelete?: (id: number) => void;
}

const CardJogo = ({ jogo, estaAutenticado, onEdit, onDelete }: CardProps) => {
    return (
        <article className={styles.card_jogo}>
            <img src={jogo.img} alt="Jogo vendido pela loja." className={styles.img_jogo} />
            <h3 className={styles.titulo_jogo}>{jogo.nome}</h3>
            <p className={styles.valor_jogo}>{formatarPreco(jogo.preco)}</p>
            {/* talvez aqui precise de uma div */}
            <Link href={"/detalhe-jogo/"} className={styles.link_detalhe}>Detalhes</Link>
            {estaAutenticado ?
                <>
                    <Botao onclick={() => onDelete?.(jogo.jogoId)}>Excluir</Botao>
                    <Botao onclick={() => onEdit?.(jogo)}>Editar</Botao>
                </>

                :
                <Botao onclick={() => {
                    router.push(`/detalhes-jogo/${jogo.jogoId}`);
                }}>Detalhes</Botao>
            }
        </article>
    )
}

export default CardJogo;