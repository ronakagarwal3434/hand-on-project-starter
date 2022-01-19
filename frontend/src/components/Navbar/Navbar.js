import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="cuvette-logo" />
      <div className={styles.right}>
        <ul>
          <li className={styles.list}>My APIs</li>
          <li className={styles.list}>My Account</li>
        </ul>
        <Button body="+New API" color="#142683" />
      </div>
    </div>
  );
}
