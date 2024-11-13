import useLenisScroll from '@/app/common/hooks/useLenisScroll'
import styles from './Nav.module.css'

export default function Menu() {

    const lenis = useLenisScroll()

    return(
        <menu className={styles.menu}>
            <li className={styles.link} onClick={()=> lenis?.current.scrollTo("#projects")}><span>Projects</span></li>
            <li className={styles.link} onClick={()=> lenis?.current.scrollTo("#profile")}><span>Profile</span></li>

            <div className={styles.socialMedia}>
                <a href="https://github.com/douglas-front" target='_blank'><li className={styles.linkSmall}>github</li></a>
                <a href="https://www.linkedin.com/in/douglas-rodrigues-310128276/" target='_blank'><li className={styles.linkSmall}>Linkedin</li></a>
            </div>
        </menu>
    )
}