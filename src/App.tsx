import React from "react";
import { FaDev } from "react-icons/fa";

import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";
import navigationData from "./data/navigation";

const App = () => {
  return (
    <div className={styles.container}>
      <Sidebar navigationData={navigationData} />
      <div className={styles.devLogo}>
        <FaDev />
      </div>
    </div>
  );
};

export default App;