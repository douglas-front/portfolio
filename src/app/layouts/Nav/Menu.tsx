import styles from './Nav.module.css'

export default function Menu() {
    return(
        <menu className={styles.menu}>
            <li className={styles.link}><span>Projects</span></li>
            <li className={styles.link}><span>About</span></li>

            <div className={styles.socialMedia}>
                <li className={styles.linkSmall}>github</li>
                <li className={styles.linkSmall}>Linkedin</li>
            </div>
        </menu>
    )
}