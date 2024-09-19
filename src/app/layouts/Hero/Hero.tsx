'use client'
import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect";
import styles from "./Hero.module.css";
import titleAnimation from "@/app/layouts/Hero/Animations/Title.Animation";
// import paragraphAnimation from "@/app/layouts/Hero/Animations/ParagraphAnimation";
import Marquee from "@/app/components/Marquee";
import paragraphAnimation from "@/app/common/animations/ParagraphAnimation";

export default function Hero() {

  useIsomorphicEffect(()=>{
    titleAnimation()
    paragraphAnimation({className: `${styles.paragraph}`, delay: 0.7})
  },[])

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}><span>douglas</span></h1>
      <div className={styles.info}>
        <p className={styles.paragraph}>
          <span>Me chamo Douglas</span> <span> sou desenvolvedor </span> <span> fullstack e
          designer.</span>
        </p>
        <svg
          width="62.030vw"
          // width="0vw"
          height="2.258vw"
          viewBox="0 0 1200 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            className={styles.svg}
            d="M2.50751 24.796C8.74023 24.796 16.3285 22.3312 22.4092 20.8571C33.3938 18.1942 41.9754 8.04564 47.2863 21.4791C56.4906 44.7605 73.3622 18.832 90.1992 27.491C96.2637 30.6099 102.398 44.1546 108.235 45.2159C121.362 47.6027 131.815 40.1717 143.478 35.9907C164.222 28.5541 188.369 39.0992 209.402 43.2465C226.512 46.6203 238.718 43.1339 254.803 35.3688C264.547 30.6645 271.753 34.7119 281.027 40.5515C294.903 49.2878 322.39 37.5426 337.312 34.9541C345.129 33.5981 352.962 32.8179 358.872 38.9967C373.266 54.0451 393.418 42.8693 409.662 35.5761C440.371 21.7884 466.566 36.8973 498.598 35.9907C530.382 35.0911 555.708 7.04876 588.156 12.5648C599.018 14.4115 607.707 17.3329 618.63 17.3329C640.612 17.3329 661.253 12.0331 682.896 8.00397C698.131 5.16757 709.319 0.764136 724.358 4.58337C740.253 8.62035 755.096 13.6013 771.624 13.6013C797.881 13.6013 822.48 6.28308 848.225 4.37606C862.354 3.32946 876.226 7.87382 890.412 8.00397C902.813 8.11774 915.223 8.00397 927.624 8.00397C937.342 8.00397 947.8 5.6137 955.922 11.3209C965.759 18.2336 974.541 17.3329 986.085 17.3329C1000.42 17.3329 1014.76 17.3329 1029.1 17.3329C1039.11 17.3329 1042.49 16.9774 1050.35 22.101C1061.45 29.3363 1065.62 28.7456 1079.69 28.5276C1094.31 28.3009 1108.62 22.9302 1123.01 22.9302C1132.56 22.9302 1141.39 26.8227 1151.21 26.6618C1160.46 26.5101 1176.34 16.4806 1184.38 20.1315C1188.05 21.8014 1192.64 21.0644 1196.61 21.0644"
            stroke="#1E1E1E"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>

        <p className={styles.paragraph}>
          
          <span>Next.js, Node.js, </span> <span>Figma, PostgreSQL </span> <span>e MongoDB.</span>
        </p>
      </div>
      <Marquee/>
    </section>
  );
}
