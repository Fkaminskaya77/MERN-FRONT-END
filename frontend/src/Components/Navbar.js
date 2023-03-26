import React from 'react'
import homeImg from '../images/home.png'
import notesImg from '../images/paper.png'
import tasksImg from '../images/sticky-note.png'

export default function Navbar({ homeLink, notesLink, tasksLink }) {
  return (
    <div className='navbar--container'>
      <ul className='nav-links'>
        <li className='nav-links__li'>
            <img src={homeImg} alt="house"></img>
            <a href={homeLink}>Home</a>
        </li>
        <li className='nav-links__li'>
            <img src={notesImg} alt="paper"></img>
            <a href={notesLink}>Notes</a>
        </li>
        <li className='nav-links__li'>
            <img src={tasksImg} alt="sticky note"></img>
            <a href={tasksLink}>Tasks</a>
        </li>
      </ul>
    </div>
  )
}
