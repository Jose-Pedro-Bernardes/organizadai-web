import styles from "./cadastro.module.css";

export default function Cadastro() {
  return (
    <div>
      <main>
        <div className={styles.signupContainer}>
          <div className={styles.signupCard}>
            <h1 className={styles.signupTitle}>Criar Conta</h1>
            <p className={styles.signupSubtitle}>Junte-se ao OrganizaDaí e organize seu negócio</p>
            
            <form className={styles.signupForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.formLabel}>Nome</label>
                  <input
                    type="text"
                    id="firstName"
                    className={styles.formInput}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.formLabel}>Sobrenome</label>
                  <input
                    type="text"
                    id="lastName"
                    className={styles.formInput}
                    placeholder="Seu sobrenome"
                    required
                  />
                </div>
              </div>
              
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
                <label htmlFor="phone" className={styles.formLabel}>Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  className={styles.formInput}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.formLabel}>Senha</label>
                <input
                  type="password"
                  id="password"
                  className={styles.formInput}
                  placeholder="Crie uma senha forte"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.formLabel}>Confirmar Senha</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={styles.formInput}
                  placeholder="Confirme sua senha"
                  required
                />
              </div>
              
              <div className={styles.formOptions}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.checkbox} required />
                  <span>Li e concordo com os <a href="#" className={styles.loginLink}>termos de uso</a></span>
                </label>
              </div>
              
              <button type="submit" className={styles.signupButton}>
                Criar Conta Gratuita
              </button>
              
              <div className={styles.divider}>
                <span>ou</span>
              </div>
              
              <div className={styles.socialSignup}>
                <button type="button" className={styles.socialButton}>
                  <span>Cadastrar com Google</span>
                </button>
              </div>
              
              <p className={styles.loginPrompt}>
                Já tem conta? <a href="/entrar" className={styles.loginLink}>Fazer login</a>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}