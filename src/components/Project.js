import React from "react";
import Skill from "./Skill";
import "./card.css";

function Project(props) {
  // console.log("PROPS in Card: ", props);
  return (
    <div
      className="card m-3"
      data-toggle="tooltip"
      title={props.tooltip}
      key={props.index}
    >
      <a href={props.link}>
        <img
          className="card-img-top projimage"
          src={props.img}
          alt="related to app"
        />
        <div className="card-title projLabelBox">{props.name}</div>
        <div className="justify-content-around">
          {props.skills.map(skill => (
            <Skill skill={skill} />
          ))}
        </div>
      </a>
    </div>
  );
}

export default Project;
