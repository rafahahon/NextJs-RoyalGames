import styles from "./login.module.css"

const Login = () => {
    return (
        <>
            <main id={styles.main}>
                <img src="../mulherlogin.svg" alt="Imagem de uma mulher cibernética." id={styles.imagem_mulher} />
                <div id={styles.campo_login}>
                    <img src="./logologin.svg" alt="Logo rosa escrito Royal Games." id={styles.logo} />
                    <form id={styles.formulario}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" required />
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" required />
                        </div>
                        <button id={styles.botao}>Entrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;