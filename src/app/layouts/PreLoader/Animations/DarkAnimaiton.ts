import gsap from "gsap"
import styles from "../PreLoader.module.css"

export default function darkAnimation() {
    gsap.to(`.${styles.dark}`, {
        width: "0vw",
        duration: 1,
        delay: 0.5,
        ease: "power2.inOut"
    })
}