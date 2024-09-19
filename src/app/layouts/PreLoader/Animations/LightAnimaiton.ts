import gsap from "gsap"
import styles from "../PreLoader.module.css"

export default function lightAnimation() {
    gsap.to(`.${styles.light}`, {
        width: "0vw",
        duration: 1,
        delay: 0.2,
        ease: "elastic(1,9)"
    })
}