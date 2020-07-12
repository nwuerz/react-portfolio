import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { useDocumentTitle } from './useDocumentTitle';


function App() {
 useDocumentTitle({'/':'About | Nick Wuerz', '/portfolio': 'Portfolio | Nick Wuerz', "/contact": 'Contact | Nick Wuerz'});
  return (
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
  );
}

export default App;