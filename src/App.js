import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";
import LeftColumn from "./components/LeftColumn";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <HeaderBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3 p-0 ">
            <LeftColumn />
          </div>
          <div className="col-12 col-md-9">
            <Gallery />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
