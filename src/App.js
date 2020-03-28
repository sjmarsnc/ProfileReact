import React from "react";
import "./App.css";
import Card from "./components/Card";
const projects = [
  {
    name: "Weather Dashboard",
    img: "/assets/lightning280x330.png",
    link: "https://sjmarsnc.github.io/WeatherDashboard",
    skills: ["External APIs", "Bootstrap", "Jquery", "JSON"],
    tooltip: "See current weather and forecast"
  },
  {
    name: "Password Generator",
    img: "/assets/padlock280x330.png",
    link: "https://sjmarsnc.github.io/PasswordGenerator",
    skills: ["String manipulation", "Javascript"],
    tooltip: "Generate a password according to specifications"
  },
  {
    name: "Timed Quiz",
    img: "/assets/woman-thinking280x330.png",
    link: "https://sjmarsnc.github.io/TimedQuiz",
    skills: ["Timers", "DOM manipulation", "Jquery"],
    tooltip: "Take a quiz, grade depends on speed and accuracy"
  },
  {
    name: "What to Do Outdoors",
    img: "/assets/outback280x330.png",
    link: "https://sjmarsnc.github.io/Project-What-To-Do/",
    skills: ["External APIs", "Materialize"],
    tooltip: "Group project helping you find outdoor activities"
  },
  {
    name: "Employee Manager",
    img: "/assets/employee280x330.png",
    link: "https://github.com/sjmarsnc/EmployeeTracker",
    skills: ["NodeJS", "mySQL"],
    tooltip:
      "Line mode application to add, update, and delete departments, roles, employees"
  },
  {
    name: "Movie Browser",
    img: "/assets/movie280x330.png",
    link: "https://whispering-dawn-54949.herokuapp.com/",
    skills: ["Sequelize", "Express", "Handlebars", "Node.js"],
    tooltip: "Group project to browse movies"
  },
  {
    name: "Employee Directory",
    img: "/assets/empdir280x330.png",
    link: "https://secret-sea-93788.herokuapp.com/",
    skills: ["React"],
    tooltip:
      "React application to display employees, sort by name and birth date"
  }
];

function App() {
  return (
    <>
      <div className="header text-align-center p-2">
        Web Development Expertise
      </div>
      <div className="container-fluid">
        <div className="row mainbody">
          <div className="col-12"></div>
        </div>

        <div className="row">
          <div className="col-12 col-md-3 leftbar justify-content-center">
            <p id="headshot" className="mt-4 ml-auto mr-auto">
              <img src="/assets/headshot2.png" alt="headshot" />
            </p>
            <h2>Susan Marshall</h2>
            <hr />
            <p id="bio">
              I create clean and responsive websites to get the information you
              want your customers to know into their hands!
            </p>
            <a href="https://github.com/sjmarsnc">
              <i className="fa fa-github" />
            </a>
            <span> &nbsp; &nbsp;</span>
            <a href="https://www.linkedin.com/in/susan-marshall-11367715/">
              <i className="fa fa-2 fa-linkedin" />
            </a>
            <span>&nbsp; &nbsp; </span>
            <a href="mailto:sjmarsnc@gmail.com">
              <i className="fa fa-paper-plane " />
            </a>
            <span> &nbsp; &nbsp; </span>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              {projects.map(project => (
                <Card {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
