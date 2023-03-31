import React from "react";
import homeImg from "../images/home.png";
import notesImg from "../images/paper.png";
import tasksImg from "../images/sticky-note.png";
import { Routes, Route, Link } from "react-router-dom";

export default function Navbar({ homeLink, notesLink, tasksLink }) {
  return (
    <div className="navbar--container">
      <ul className="nav-links">
        <li className="nav-links__li">
          <img src={homeImg} alt="house"></img>
          <Link to={homeLink}>Home</Link>
        </li>
        <li className="nav-links__li">
          <img src={notesImg} alt="paper"></img>
          <Link to={notesLink}>Notes</Link>
        </li>
        <li className="nav-links__li">
          <img src={tasksImg} alt="sticky note"></img>
          <Link to={tasksLink}>Tasks</Link>
        </li>
      </ul>
    </div>
  );
}
