import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
<<<<<<< HEAD
        <h1><Link to="/">Jihaeee</Link></h1>
=======
        <h1>Jihaeee</h1>
>>>>>>> main
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
