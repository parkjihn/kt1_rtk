import styles from "./Offers.module.css";

export default function Offers(props) {
  let offerStates = [
    "Годовое ТО",
    "Выравнивание колес",
    "Настройка переключателей",
  ];

  let title;
  let offerStyle;
  switch (props.state) {
    case "TO":
      title = offerStates[0];
      offerStyle = styles.state_1;
      break;
    case "Tires":
      title = offerStates[1];
      offerStyle = styles.state_2;
      break;
    case "Adjust":
      title = offerStates[2];
      offerStyle = styles.state_3;
      break;
    default:
      title = "";
  }

  return (
    <>
      <div className={offerStyle}>
        <div className={styles.topBorder}>
        <h2>{title}</h2>

        </div>
       
      </div>
    </>
  );
}
