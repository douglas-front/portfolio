import Card from "@/app/layouts/MoreProjects/Card"
import styles from "./MoreProjects.module.css"
export default function MoreProjects() {

    const array = [1,2,3,4,5,6]

    return(
        <section className={styles.MoreProjects}>
            {array.map((x, index)=>(
                <Card key={index}/>
            ))}
        </section>
    )
}