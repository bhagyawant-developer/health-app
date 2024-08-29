// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/diet">Diet & Nutrition</Link></li>
        <li><Link to="/fitness">Fitness</Link></li>
        <li><Link to="/mental-health">Mental Health</Link></li>
        <li><Link to="/journal">Journal</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
