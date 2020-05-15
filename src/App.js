import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <>
      <Navbar />
      <Switch>
        <Route exact path={["/", "/about"]}>
          <About />
        </Route>
        <Route exact path={"/portfolio"}>
          <Portfolio />
        </Route>
        <Route exact path={"/contact"}>
          <Contact />
        </Route>
      </Switch>
      <Footer />
      </>
    </Router>
  );
}

export default App;

{/* <div className="container">
        <div className="row">
          <Jumbotron title="About Me">

          </Jumbotron>
        </div>
      </div> */}
