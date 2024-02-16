
import styles from "./AboutUs.module.css";
import dinoSvg from "../img/dino.svg"
import redBike from "../img/red_bike.svg"



export default function AboutUs(props) {

  let aboutTitle = [
    "Веломастерская “Велозар”",
    "Что мы предлагаем"
    
  ];

  let aboutText = [
    "Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.",
    "В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой",
    "Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.",
   
  ];

  let aboutImg = [
    dinoSvg,
    redBike
  ]



  let title;
  let text;
  let aboutStyle;
  let img;

  switch (props.state) {

    case "1":
      title = aboutTitle[0];
      text = aboutText[0]
      aboutStyle = styles.state_1;
      img = aboutImg[0]

      break;

    case "2":
      title = aboutTitle[1];
      text = aboutText[1]
      aboutStyle = styles.state_2;
      img = aboutImg[1];
      break;

    case "3":
    
      text = aboutText[2]
      aboutStyle = styles.state_3;
      break;

    default:
      title = "";
  }

  return (
    <>
     
     
     <div className={aboutStyle}>
        <div className={styles.titleBox}>

        <h2 className={styles.title}>{title}</h2>
        </div>
      

  
       
        <p className={styles.text}>{text}</p>
        <div className={styles.img}><img src={img} alt=""></img></div>

        </div>
      
       
    </>
  );
}