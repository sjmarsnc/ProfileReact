import React from "react";

const styles = {
  skillBox: {
    height: "1rem",
    fontSize: "smaller",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "lightsteelblue",
    padding: "3px 5px",
    margin: "3px"
  }
};
const Skill = props => {
  return <span style={styles.skillBox}>{props.skill}</span>;
};

export default Skill;
