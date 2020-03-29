import React from "react";
import Card from "./Card";
// import projects from "../projects.json";

const Gallery = ({ projects }) => {
  return (
    <div className="row">
      {projects.map((project, index) => {
        return <Card index={index} {...project} />;
      })}
    </div>
  );
};

export default Gallery;
