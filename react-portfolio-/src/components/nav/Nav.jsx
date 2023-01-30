/* import */
import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'


// Floating Nav on bottom of screen
const Nav = () => {
const [activeNav, setActiveNav] = useState('#')
return (
<nav>
    <a href="#" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''} ><AiOutlineHome />Home</a> <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser />About Me</a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook />Skills</a>
    <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine />Portfolio</a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail />Contact</a>
     </nav>
  )
}


//Export Nav
export default Nav