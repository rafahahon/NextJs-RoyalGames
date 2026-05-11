import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <img src="../logoheader.svg" alt="Logo rosa escrito Royal Games" id={styles.logo}/>
                <nav id={styles.nav_menu}>
                    <a href="#catalogo">Catálogo</a>
                    <Link href="/login">Login</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;