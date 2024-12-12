import gsap from "gsap";
import styles from "../marquee.module.css"

export default function marqueeAnimation(){
    gsap.to(`.${styles.marquee_part}`,{
        xPercent: 100,
        repeat: -1,
        duration: 5,
        ease: "linear"
    })

    gsap.set(`.${styles.marquee_inner}`,{
        xPercent: -45
    })
}
