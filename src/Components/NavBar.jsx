import React, { useState, useEffect } from "react";
import "./App.css";
import toggleIcon from './images/toggle-icon.png';

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Effect to apply or remove dark mode class on body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.style.backgroundColor = ' rgb(44, 54, 63)';
    } else {
      document.body.classList.remove('dark-mode');
      document.body.style.backgroundColor = ' white';
    }
  }, [isDarkMode]);

  const toggleBackgroundColor = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="nav">
      <div className="firstrow">
        <div className="name">
          <h4>{`</> CodeWithBismiAllah`}</h4>
          <button className="menu-toggle" onClick={toggleMenuVisibility}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className={`menu-list ${isMenuVisible ? 'visible' : ''}`}>
          <li><a href="Home.jsx">Home</a></li>
          <li><a href="Tutorials.jsx">Tutorials</a></li>
          <li><a href="Notes.jsx">Notes</a></li>
          <li><a href="Certifications.jsx">Certifications</a></li>
          <li><a href="Contact.jsx">Contact</a></li>
        </ul>

        <div className="btns"> 
          <button className="toggle" onClick={toggleBackgroundColor}>
            <img src={toggleIcon} id="toggle-img" alt="Toggle" />
          </button>
          <button className="btn">Login</button>
          <button className="btn">SignUp</button>
        </div>
      </div>
      <div className="secondrow">
        <ul className="second-list">
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">JS</a></li>
          <li><a href="#">C</a></li>
          <li><a href="#">C++</a></li>
          <li><a href="#">JAVA</a></li>
          <li><a href="#">PYTHON</a></li>
          <li><a href="#">PHP</a></li>
          <li><a href="#">REACT JS</a></li>
        </ul>
      </div>
    </div>
  );
}

export { NavBar };
