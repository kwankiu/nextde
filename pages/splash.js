import styles from '../styles/splash.module.css'

export default function Splash() {
  return (
   <main className={styles.main}>
    <div className={styles.logoContainer}>
      <img className={styles.logo} src="/nextjs.svg" />
    </div>
    <br />
    <br />
    <p>Getting things ready ...</p>
  </main>
  )
}
