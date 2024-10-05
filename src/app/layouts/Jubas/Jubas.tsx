'use client'

import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect"
import styles from "./Jubas.module.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"
import Info from "@/app/layouts/Jubas/Info"

export default function Jubas() {

    const videoRef = useRef<HTMLVideoElement>(null)

    useIsomorphicEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(`.${styles.bg}`,{
            height: "0",
            duration: 1,
            ease: "power2.inOut",
            onComplete:()=>{
                videoRef.current?.play()
            },
            scrollTrigger: {
                trigger: `.${styles.jubas}`,
                start: "0% 50%",
                end: "100% 50%",
                
            }
        })
    },[])

    return(
        <section className={styles.jubas}>
            <div className={styles.bg}></div>
            <video ref={videoRef} src="/jubas.mp4" muted loop></video>
            <Info/>
        </section>
    )
}