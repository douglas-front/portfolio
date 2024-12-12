import gsap from "gsap";

export default function paragraphOutAnimation(className: string) {
    gsap.to(`.${className} span`,{
        y: "300%",
        duration: 1,
        ease: "elastic(1,9)",
        stagger: 0.1,
    })
    
}