import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Experience from './contents/Experience';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="about">
          <About />
        </Route>
        <Route path="experience">
          <Experience />
        </Route>
        <Route path="skills">
          <Skills />
        </Route>
        <Route path="about">
          <Education />
        </Route>
        <Route path="contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
