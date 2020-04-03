import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import NotFound404 from "./components/NotFound404";
// import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/Portfolio"]} component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route component={NotFound404} /> */}
      </Switch>
    </Router>
  );
}

export default App;
