'use client'
import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect"
import styles from "./Wilderlee.module.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"
import Info from "@/app/layouts/Wilderlee/Info"


export default function Wilderlee() {

    const videoRef = useRef<HTMLVideoElement>(null)

    useIsomorphicEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(`.${styles.bg}`,{
            height: "0",
            duration: 1,
            ease: "elastic(1,9)",
            onComplete:()=>{
                videoRef.current?.play()
            },
            scrollTrigger: {
                trigger: `.${styles.wilderlee}`,
                start: "20% 50%",
                end: "100% 50%",
                
            }
        })
    },[])

    return(
        <section className={styles.wilderlee}>
            <div className={styles.bg}></div>
            <video ref={videoRef} src="/wilderlee.mp4" muted loop></video>
            <Info/>
        </section>
    )
}