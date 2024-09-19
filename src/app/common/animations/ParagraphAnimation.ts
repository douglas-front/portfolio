import gsap from "gsap";

interface Iprops{
    className: string,
    delay: number
}

export default function paragraphAnimation({className, delay}:Iprops) {
    gsap.to(`.${className} span`,{
        y: 0,
        duration: 1,
        ease: "elastic(1,9)",
        stagger: 0.1,
        delay: delay
    })
}