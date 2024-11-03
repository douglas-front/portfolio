"use client"
import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect";
import styles from "./Profile.module.css";
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap";
import paragraphAnimation from "@/app/common/animations/ParagraphAnimation";
import paragraphOutAnimation from "@/app/common/animations/PaagraphOutAnimation";

export default function Paragraphs() {

    useIsomorphicEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.create({
            trigger: `.${styles.profile}`,
            start: "0% 50%",
            end: "130% 50%",
            onEnter: () => {
              paragraphAnimation({className: `${styles.paragraph}`, delay: 0});
            },
            onEnterBack:() => {
              paragraphAnimation({className: `${styles.paragraph}`, delay: 0});
            },
            onLeave: () => {
              paragraphOutAnimation(`${styles.paragraph}`)
            },
            onLeaveBack: () => {
              paragraphOutAnimation(`${styles.paragraph}`)
            },
          });
    },[])

    return(
        <div className={styles.paragraphs}>
        <p className={styles.paragraph}>
          <span>Me chamo Douglas</span> <span> sou desenvolvedor </span>{" "}
          <span>fullstack</span>
        </p>
        <p className={styles.paragraph}>
          <span>eu sou formado em</span> <span> desenvolvimento de </span>{" "}
          <span>sistemas</span>
        </p>
        <p className={styles.paragraph}>
          {" "}
          <span>Com Conhecimentos </span> <span> Em Next.JS, React.JS,</span>{" "}
          <span> Node.JS, PostgreSQL, C#</span>
        </p>
      </div>
    )
}