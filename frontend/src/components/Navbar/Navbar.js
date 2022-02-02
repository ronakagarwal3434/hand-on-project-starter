import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  console.log(props, props.user);
  const pathname = window.location.pathname;
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="cuvette-logo" />
      {pathname == "/login" || pathname == "/signup" ? (
        ""
      ) : props && props.user && Object.keys(props.user).length ? (
        <div className={styles.right}>
          <ul>
            <li className={styles.list}>My APIs</li>
            <li className={styles.list}>My Account</li>
          </ul>
          <Button body="+New API" color="#142683" />
        </div>
      ) : (
        <div className={styles.right}>
          <Link to="/signup">
            <Button body="Sign Up" color="#142683" />
          </Link>
        </div>
      )}
    </div>
  );
}
