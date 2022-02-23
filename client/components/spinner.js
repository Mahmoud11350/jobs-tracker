import styles from '../styles/spinner.module.css'
function Spiner() {
  return (
    <>
      <div className={styles[`sk-chase`]}>
        <div className={styles[`sk-chase-dot`]}></div>
        <div className={styles[`sk-chase-dot`]}></div>
        <div className={styles[`sk-chase-dot`]}></div>
        <div className={styles[`sk-chase-dot`]}></div>
        <div className={styles[`sk-chase-dot`]}></div>
        <div className={styles[`sk-chase-dot`]}></div>
      </div>
    </>
  )
}

export default Spiner
