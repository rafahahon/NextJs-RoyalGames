import { useState } from "react";
import styles from "./login.module.css"
import { useRouter } from "next/router";;
import { login } from "../api/authService";
import { erro, notificacao } from "@/utils/toast";
import Link from "next/link";

const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(email, senha);
            notificacao("Bem-vindo(a)!")

            setTimeout(() => {
                router.push("/jogo");
            }, 2000)
        } catch (error: any) {
            erro("E-mail ou senha inválidos.");
        }
    }



    return (
        <>
            <main id={styles.main}>
                <img src="../mulherlogin.svg" alt="Imagem de uma mulher cibernética." id={styles.imagem_mulher} />
                <div id={styles.campo_login}>

                    <Link href="/home">
                        <img src="./logologin.svg" alt="Logo rosa escrito Royal Games." id={styles.logo} />
                    </Link>
                    <form id={styles.formulario} onSubmit={autenticar}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <button id={styles.botao}>Entrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;