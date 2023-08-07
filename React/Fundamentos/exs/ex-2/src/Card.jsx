import Button from "./components/button";
import styles from "./styles/styles.module.css";

export default function Card({ imgPoster, title }) {
  return (
    <div className={styles.card}>
      <img src={imgPoster} alt={title} className={styles.imgCard} />
      <div className={styles.content}>
        <p className={styles.titleCard}> {title}</p>
        <p className={styles.textCard}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          iure accusamus sapiente similique praesentium minima qui voluptas?
          Voluptatem at minima eligendi delectus consectetur exercitationem
          consequuntur ipsa! Adipisci quae beatae odio quasi optio, vitae
          consequuntur. Dolorem ipsa quae iste. Id, sunt.
        </p>
        <Button />
      </div>
    </div>
  );
}
