import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills'
import ReactGA from 'react-ga';
const TRACKING_ID = "G-DLQP6VE1W0"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "teal";

  const [currentAnchor, setCurrentAnchor] = useState("");

  useEffect(() => {
    let currentAnchor = "";
  
    const handleScroll = () => {
      const aboutOffset = document.getElementById("about").offsetTop - 200;
      const experienceOffset = document.getElementById("experience").offsetTop - 200;
      const projectsOffset = document.getElementById("projects").offsetTop - 200;
      const skillsOffset = document.getElementById("skills").offsetTop - 200;
      const contactOffset = document.getElementById("contact").offsetTop - 200;
  
      const scrollPosition = window.scrollY;
  
      if (scrollPosition < aboutOffset) {
        currentAnchor = "header";
      } else if (scrollPosition < experienceOffset) {
        currentAnchor = "about";
      } else if (scrollPosition < projectsOffset) {
        currentAnchor = "experience";
      } else if (scrollPosition < skillsOffset) {
        currentAnchor = "projects";
      } else if (scrollPosition < contactOffset) {
        currentAnchor = "skills";
      } else {
        currentAnchor = "contact";
      }
  
      // Cambia l'ancora nell'URL solo se è cambiata
      if (currentAnchor !== window.location.hash.substr(1)) {
        window.history.replaceState({}, "", `#${currentAnchor}`);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Cambia l'ancora nell'URL quando l'ancora corrente cambia
    window.history.replaceState({}, "", `#${currentAnchor}`);
  }, [currentAnchor]);

  return (
    <main>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Experience color={color} />
      <Projects color={color} />
      <Skills color={color} />
      <Contact color={color} />
      <Footer />
    </main>
  );
}


export default App;
