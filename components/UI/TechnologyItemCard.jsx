import React from "react";
import classes from "../../styles/technology.module.css";

export default function TechnologyItemCard({ cardTitle, cardDec, iconName }) {
  return (
    <div className={`${classes.technology__card__item}`}>
      <h3>{cardTitle}</h3>
      <p>{cardDec}</p>
      <span>
        <i className={`${iconName}`}></i>
      </span>
    </div>
  );
}
