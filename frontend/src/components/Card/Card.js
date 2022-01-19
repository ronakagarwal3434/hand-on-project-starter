import React from "react";
import CardStyles from "./Card.module.css";
import bgremove from "../../images/bgremove.svg";

export default function Card() {
  return (
    <div className={CardStyles.card}>
      <img src={bgremove} />
      <h1 className={CardStyles.heading}>Background Remove</h1>
      <p className={CardStyles.text}>
        The descriptipn of the API in quick brief and we will truncate it
        here...
      </p>
    </div>
  );
}
