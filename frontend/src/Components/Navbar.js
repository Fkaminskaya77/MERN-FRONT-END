import React from 'react'
import homeImg from '../images/home.png'
import notesImg from '../images/paper.png'
import tasksImg from '../images/stickyNote.png'

export default function Navbar() {
  return (
    <div className='navbar--container'>
      <ul className='nav-links'>
        <li className='nav_links__li'>
            <img src={homeImg} alt="house"></img>
            <a href={props.homeLink}>Home</a>
        </li>
        <li className='nav_links__li'>
            <img src={notesImg} alt="paper"></img>
            <a href={props.homeLink}>Notes</a>
        </li>
        <li className='nav_links__li'>
            <img src={tasksImg} alt="sticky note"></img>
            <a href={props.homeLink}>Tasks</a>
        </li>
      </ul>
    </div>
  )
}
