import React from "react";
import Skill from "./Skill";
import "./card.css";

const Card = props => {
  console.log("PROPS in Card: ", props);
  return (
    <div className="card m-3" data-toggle="tooltip" title={props.tooltip}>
      <a href={props.link}>
        <img className="cardimg-top projimage" src={props.img} alt="picture" />
        <div className="card-title projLabelBox">{props.name}</div>
        <div className="justify-content-around">
          {props.skills.map(skill => (
            <Skill skill={skill} />
          ))}
        </div>
      </a>
    </div>
  );
};

export default Card;
