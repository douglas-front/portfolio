import Button from "@/app/components/Button";
import styles from "./Jubas.module.css";
import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import paragraphAnimation from "@/app/common/animations/ParagraphAnimation";
import paragraphOutAnimation from "@/app/common/animations/PaagraphOutAnimation";

export default function Info() {
  useIsomorphicEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: `.${styles.info}`,
      start: "0% 50%",
      end: "100% 50%",
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
  }, []);

  return (
    <div className={styles.info}>
      <p className={styles.paragraph}>
        <span>Vendas De Bolsas</span>
        <span>Com Api Propria E</span>
        <span>Um Desging Único</span>
      </p>

      <svg
        width="300"
        height="13"
        viewBox="0 0 300 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 6.42544C2.55818 6.42544 4.45524 5.80925 5.97542 5.44072C8.72157 4.77499 10.867 2.23785 12.1947 5.59621C14.4958 11.4166 18.7137 4.93444 22.9229 7.0992C24.4391 7.87892 25.9726 11.2651 27.4319 11.5304C30.7137 12.1271 33.3268 10.2694 36.2425 9.22411C41.4285 7.36498 47.4654 10.0012 52.7236 11.0381C57.0011 11.8815 60.0525 11.0099 64.0738 9.06863C66.5099 7.89257 68.3113 8.90441 70.6299 10.3643C74.0988 12.5484 80.9706 9.61208 84.701 8.96498C86.6554 8.62596 88.6135 8.4309 90.0911 9.97561C93.6896 13.7377 98.7277 10.9438 102.789 9.12046C110.466 5.67354 117.015 9.45076 125.023 9.22411C132.969 8.99922 139.3 1.98863 147.412 3.36763C150.128 3.8293 152.3 4.55966 155.031 4.55966C160.526 4.55966 165.686 3.23472 171.097 2.22743C174.906 1.51833 177.703 0.417474 181.463 1.37228C185.436 2.38153 189.147 3.62677 193.279 3.62677C199.843 3.62677 205.993 1.79721 212.429 1.32046C215.962 1.0588 219.43 2.1949 222.976 2.22743C226.076 2.25588 229.179 2.22743 232.279 2.22743C234.709 2.22743 237.323 1.62986 239.354 3.05667C241.813 4.78484 244.008 4.55966 246.894 4.55966C250.479 4.55966 254.064 4.55966 257.649 4.55966C260.15 4.55966 260.997 4.47078 262.961 5.75169C265.734 7.56053 266.778 7.41284 270.294 7.35833C273.95 7.30166 277.527 5.959 281.126 5.959C283.512 5.959 285.721 6.93211 288.175 6.89189C290.489 6.85396 294.459 4.34659 296.467 5.25933C297.386 5.67678 297.755 5.959 298.748 5.959"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <p className={styles.paragraph}>
        <span>Next.js, Node.js</span> 
        <span>MongoDB, Figma</span>
        <span>E Express.js</span>
      </p>

      <svg
        width="300"
        height="13"
        viewBox="0 0 300 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 6.42544C2.55818 6.42544 4.45524 5.80925 5.97542 5.44072C8.72157 4.77499 10.867 2.23785 12.1947 5.59621C14.4958 11.4166 18.7137 4.93444 22.9229 7.0992C24.4391 7.87892 25.9726 11.2651 27.4319 11.5304C30.7137 12.1271 33.3268 10.2694 36.2425 9.22411C41.4285 7.36498 47.4654 10.0012 52.7236 11.0381C57.0011 11.8815 60.0525 11.0099 64.0738 9.06863C66.5099 7.89257 68.3113 8.90441 70.6299 10.3643C74.0988 12.5484 80.9706 9.61208 84.701 8.96498C86.6554 8.62596 88.6135 8.4309 90.0911 9.97561C93.6896 13.7377 98.7277 10.9438 102.789 9.12046C110.466 5.67354 117.015 9.45076 125.023 9.22411C132.969 8.99922 139.3 1.98863 147.412 3.36763C150.128 3.8293 152.3 4.55966 155.031 4.55966C160.526 4.55966 165.686 3.23472 171.097 2.22743C174.906 1.51833 177.703 0.417474 181.463 1.37228C185.436 2.38153 189.147 3.62677 193.279 3.62677C199.843 3.62677 205.993 1.79721 212.429 1.32046C215.962 1.0588 219.43 2.1949 222.976 2.22743C226.076 2.25588 229.179 2.22743 232.279 2.22743C234.709 2.22743 237.323 1.62986 239.354 3.05667C241.813 4.78484 244.008 4.55966 246.894 4.55966C250.479 4.55966 254.064 4.55966 257.649 4.55966C260.15 4.55966 260.997 4.47078 262.961 5.75169C265.734 7.56053 266.778 7.41284 270.294 7.35833C273.95 7.30166 277.527 5.959 281.126 5.959C283.512 5.959 285.721 6.93211 288.175 6.89189C290.489 6.85396 294.459 4.34659 296.467 5.25933C297.386 5.67678 297.755 5.959 298.748 5.959"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <p className={styles.paragraph}>
        <span>Gsap Para Fazer</span>
        <span>Animações, Figma</span>
        <span>e Locomotive Scroll</span>
      </p>

      <Button link="https://jubas-new.vercel.app"/>
    </div>
  );
}
