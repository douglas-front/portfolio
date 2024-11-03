"use client"
import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect"
import styles from "./MoreProjects.module.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

interface IProps{
    projectName: string
    url: string
    image: string
}

export default function Card({projectName, url, image}: IProps) {

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

    const toUrl = () => window.open(url, "_blank")

    return(
        <div className={styles.container}>
            <div onClick={toUrl} className={styles.card}>
                <img src={image} alt={projectName} />
            </div>
            <p className="small">{projectName}</p>
        </div>
    )
}