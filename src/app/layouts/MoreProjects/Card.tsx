"use client"
import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect"
import styles from "./MoreProjects.module.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default function Card() {

    

    useIsomorphicEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(`.${styles.card}`,{
            y: 0,
            duration: 1,
            stagger: 0.4,
            scrollTrigger:{
                trigger: `.${styles.MoreProjects}`,
                start: "0% 50%",
                end: "60% 50%",
                scrub: true
            }
        })
    },[])

    return(
        <div className={styles.container}>
            <div className={styles.card}></div>
            <p className="small">SHSUHS.</p>
        </div>
    )
}