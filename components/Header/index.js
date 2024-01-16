import styles from './Header.module.css'

export default function Header() {
    return(
        <header>
            <div className={styles.headContainer}>
                <h1 className={styles.h1}>Dashboard</h1>
                <div className={styles.right}>
                    <div className={styles.imgContainer}>
                        <img className={styles.bell_icon} src="/images/bell_icon.png" alt='bell icon'/>
                    </div>
                    <p className={styles.friday}>Friday</p>
                </div>
            </div>
        </header>
    )
}