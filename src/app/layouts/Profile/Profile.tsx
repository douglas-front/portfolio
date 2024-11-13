import Paragraphs from "@/app/layouts/Profile/Paragraphs";
import styles from "./Profile.module.css";
import useLenisScroll from "@/app/common/hooks/useLenisScroll";

export default function Profile() {

  return (
    <section className={styles.profile} id="profile">
      <h4>Profile</h4>
     <Paragraphs/>
    </section>
  );
}
