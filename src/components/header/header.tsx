import Link from "next/link";
import styles from "./header.module.css";
import { estaLogado, logout } from "@/pages/api/authService";
import { useEffect, useState } from "react";
import { router } from "next/client";

const Header = () => {

    const [logado, setLogado] = useState<boolean>(false);

    async function saida() {
        if (logado) {
            logout();
        }

        router.push("/home");
    }

    async function verificarLogin() {
        setLogado(await estaLogado())
    }

    useEffect(() => {
        verificarLogin();
    }, [])

    return (
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <img src="../logoheader.svg" alt="Logo rosa escrito Royal Games." id={styles.logo} />
                <nav id={styles.nav_menu}>
                    <a href="#catalogo">Catálogo</a>
                    <Link href="/login">
                        <button onClick={
                            () => {
                                saida()
                            }
                        } id={styles.botao}>{logado ? "Logout" : "Login"}</button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;