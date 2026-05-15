import CardJogo from "../card-jogo/card-jogo";
import styles from "./lista-jogo.module.css";

const ListaJogo = () => {
    return (
        <div className={`${styles.container_lista} layout_guide`}>
            <div className={styles.pesquisa_jogo}>
                <input className={styles.input_pesquisa} type="text" placeholder="Pesquise..." />
                <button>Menor preço</button>
                <select className={styles.genero}>
                    <option>Gêneros</option>
                </select>
            </div>
            <div className={styles.lista_jogo}>
                <CardJogo></CardJogo>
            </div>
            <div className={styles.botoes_pagina}>

                <button> <img src="./setaesquerda.svg" alt="Seta esquerda" /> </button>
                <button> 1 </button>
                <button> 2 </button>
                <button> 3 </button>
                <button> 4 </button>
                <button> 5 </button>
                <button> <img src="./setadireita.svg" alt="Seta direita" /> </button>
                
            </div>
        </div>
    )
}

export default ListaJogo;