import React from "react";
import "./App.css";
import Home from './PortfolioContainer/Home/Home';
import About from './PortfolioContainer/AboutMe/About';
import Resume from './PortfolioContainer/Resume/Resume';
import Testimonial from './PortfolioContainer/Testimonial/Testimonial';
import ContactMe from './PortfolioContainer/ContactMe/Contact'
import Project from './PortfolioContainer/Projects/Project';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/AboutMe" component={About}/>
          <Route path="/Resume" component={Resume}/>
          <Route path="/Projects" component={Project}/>
          <Route path="/Testimonial" component={Testimonial}/>
          <Route path="/ContactMe" component={ContactMe}/>
        </Switch> 
      </Router>
  </div>
  )
}

export default App;