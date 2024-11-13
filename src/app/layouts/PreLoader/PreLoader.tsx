'use client'
import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect"
import styles from "./PreLoader.module.css"
import lightAnimation from "@/app/layouts/PreLoader/Animations/LightAnimaiton"
import darkAnimation from "@/app/layouts/PreLoader/Animations/DarkAnimaiton"

export default function PreLoader() {
    
    useIsomorphicEffect(()=>{
        lightAnimation()
        darkAnimation()
        
    },[])
    
    return(
        <>
            <div className={styles.light}></div>
            <div className={styles.dark}></div>
        </>
    )
}