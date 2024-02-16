import styles from "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";

import Offers from "./components/Offers/Offers";
import Rent from "./components/Rent/Rent";
import ThirdBlock from "./components/ThirdBlock/ThirdBlock";

function App() {
  return (
    <div className={styles.general}>
      <Header />

      <AboutUs state="1"/>
      <AboutUs state="2"/>
      
      <ThirdBlock/>
      
      <div className="offerBox">
      <Offers state="TO" />
      <Offers state="Tires" />
      <Offers state="Adjust" />
      </div>
     

  

      <Rent/>
    </div>
  );
}

export default App;
