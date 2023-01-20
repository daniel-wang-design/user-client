import React, { useState, useCallback } from "react";
import { IoLogoEdge, IoBookmark } from "react-icons/io5";
import {
  BsImageFill,
  BsFillHandbagFill,
  BsFillStarFill,
  BsHouseFill,
} from "react-icons/bs";
import { RiSettings4Fill } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import classNames from "classnames";

import styles from "./Sidebar.module.css";

const Sidebar = ({ navigationData }) => {
  const [currentRoute, setCurrentRoute] = useState("Home");

  const renderIcon = useCallback((element) => {
    switch (element) {
      case "Home":
        return <BsHouseFill />;
      case "Gallery":
        return <BsImageFill />;
      case "Store":
        return <BsFillHandbagFill />;
      case "Favorites":
        return <BsFillStarFill />;
      case "Saved":
        return <IoBookmark />;
    }
  }, []);

  return (
    <nav className={styles.wrapper}>
      <span className={styles.logo}>
        <IoLogoEdge />
      </span>
      <ul className={styles.navListItems}>
        {navigationData.map((element, index) => (
          <li
            key={index}
            className={classNames([
              styles.navItem,
              currentRoute === element && styles.navItemActive,
              "group",
            ])}
            onClick={() => setCurrentRoute(element)}
          >
            {renderIcon(element)}
            <span
              className={classNames([styles.tooltip, "group-hover:inline"])}
            >
              {element}
            </span>
          </li>
        ))}
      </ul>
      <div className={styles.bottomWrapper}>
        <div className={styles.notifications}>
          <span className={styles.badge}>24</span>
          <FaRegBell />
        </div>
        <span className={styles.settingsLogo}>
          <RiSettings4Fill />
        </span>
      </div>
    </nav>
  );
};

export default Sidebar;