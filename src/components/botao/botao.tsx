import styles from "./botao.module.css"
import { ReactNode } from "react"

type BotaoProps = {
    children: ReactNode;
    onclick?: () => void;
}

const Botao = ({children, onclick}: BotaoProps) => {
    return (
        <button onClick={onclick} className={styles.botao} type="submit">{children}</button>
    )
}

export default Botao;