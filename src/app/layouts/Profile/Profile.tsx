import Paragraphs from "@/app/layouts/Profile/Paragraphs";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <section className={styles.profile}>
      <h4>Profile</h4>
     <Paragraphs/>
    </section>
  );
}
