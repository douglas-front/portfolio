import Card from "@/app/layouts/MoreProjects/Card"
import styles from "./MoreProjects.module.css"
export default function MoreProjects() {

    const array = [1,2,3,4,5,6]


    const cards = [
        {
            projectName: "Jubas website",
            url: "https://jubas-new.vercel.app",
            image: "/projects/jubas.png"
        },
        {
            projectName: "Wilderlee website",
            url: "https://wilderlee.vercel.app",
            image: "/projects/wilderlee.jpg"
        },
        {
            projectName: "Ballence website",
            url: "https://ballence.vercel.app",
            image: "/projects/ballence.jpg"
        },
 
    ]

    return(
        <section className={styles.MoreProjects} id="projects">
            {cards.map((card, index)=>(
                <Card 
                    key={index}
                    projectName={card.projectName}
                    url={card.url}
                    image={card.image}
                />
            ))}
        </section>
    )
}