import React from 'react'
//Import
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Victor Pereira</h1>
        <h5 className="text-light">Junior Full Stack Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
//Export Header
export default Header