//Depedencies
import React from 'react'

//Import
import './footer.css'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'>Victor Pereira</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/victor5055" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://linkedin.com/in/victor-pereira-210636257" target="blank" rel="noopener noreferrer"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright"></div>
      </footer>
       )
    }
//Export Footer
    export default Footer