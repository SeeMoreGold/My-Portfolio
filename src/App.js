import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Import components to render
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages that will render
// import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Header />
        <Switch>
            <Route exact path="/My-Portfolio/" component={Home} />
            <Route exact path="/My-Portfolio/about" component={Home} />
            <Route exact path="/My-Portfolio/contact" component={Contact} />
            <Route exact path="/My-Portfolio/skills" component={Skills} />
            <Route exact path="/My-Portfolio/projects" component={Projects} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
