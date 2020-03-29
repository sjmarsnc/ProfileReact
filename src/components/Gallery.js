import React from "react";
import Project from "./Project";
// import projects from "../projects.json";

const Gallery = ({ projects }) => {
  return (
    <div className="row">
      {projects.map((project, index) => {
        return <Project index={index} {...project} />;
      })}
    </div>
  );
};

export default Gallery;
