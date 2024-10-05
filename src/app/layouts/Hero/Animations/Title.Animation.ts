import gsap from "gsap";
import styles from "../Hero.module.css"

export default function titleAnimation(){
    gsap.to(`.${styles.title} span`,{
        y: 0,
        duration: 1.5,
        delay: 0.8,
        rotate: "0deg",
        ease: "elastic(1,9)"
    })
}
