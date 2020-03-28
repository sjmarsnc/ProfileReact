import React from "react";
import Card from "./Card";
import projects from "../projects.json";

const Gallery = () => {
  return (
    <div className="row">
      {projects.map(project => (
        <Card {...project} />
      ))}
    </div>
  );
};

export default Gallery;
