import styles from "./Rent.module.css";
import bikes from "../img/bikes.svg";

export default function Rent() {
  return (
    <>
      <div className={styles.general}>
        <div className={styles.img}>
          <img src={bikes} alt=""></img>
        </div>
        <h2 className={styles.title}>Прокат велосипедов</h2>
        <p className={styles.text}>
          У нас вы можете взять на прокат хорошо обслуженные и настроенные
          велосипеды. Как раз мы находимся в прекрасном парке!
        </p>
      </div>
    </>
  );
}
