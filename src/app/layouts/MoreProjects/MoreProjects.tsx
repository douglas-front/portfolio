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
            projectName: "teste Salvus",
            url: "https://salvus-xi.vercel.app",
            image: "/projects/salvus.jpg"
        },
        {
            projectName: "Api Node.js Express",
            url: "https://github.com/douglas-front/ApiToDoList",
            image: "/projects/github.png"
        },
        {
            projectName: "Sistema de gerenciamento simples",
            url: "https://github.com/douglas-front/Management_System",
            image: "/projects/github.png"
        },
        {
            projectName: "teste mks",
            url: "https://github.com/douglas-front/mks",
            image: "/projects/github.png"
        },
    ]

    return(
        <section className={styles.MoreProjects}>
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