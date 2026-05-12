import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <div className={`${styles.container} layout_guide`}>
                <img src="../logofooter.svg" alt="Logo rosa escrito Royal Games." id={styles.logo}/>
                    <div className={styles.contato}>
                        <ul className={styles.lista_contato}>
                            <li>royalgames@email.com</li>
                            <li>(11)99999-9999</li>
                            <li>@RoyalGames</li>
                        </ul>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;