import styles from "./entrar.module.css";

export default function Entrar() {
  return (
    <div>
      <main>
        <div className={styles.loginContainer}>
          <div className={styles.loginCard}>
            <h1 className={styles.loginTitle}>Fazer Login</h1>
            <p className={styles.loginSubtitle}>Acesse sua conta OrganizaDaí</p>
            
            <form className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>E-mail</label>
                <input
                  type="email"
                  id="email"
                  className={styles.formInput}
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.formLabel}>Senha</label>
                <input
                  type="password"
                  id="password"
                  className={styles.formInput}
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className={styles.formOptions}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span>Lembrar-me</span>
                </label>
                <a href="#" className={styles.forgotLink}>Esqueci a senha</a>
              </div>
              
              <button type="submit" className={styles.loginButton}>
                Entrar
              </button>
              
              <div className={styles.divider}>
                <span>ou</span>
              </div>
              
              <div className={styles.socialLogin}>
                <button type="button" className={styles.socialButton}>
                  <span>Entrar com Google</span>
                </button>
              </div>
              
              <p className={styles.signupPrompt}>
                Não tem conta? <a href="/cadastro" className={styles.signupLink}>Criar conta grátis</a>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}