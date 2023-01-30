//Imports
import React from 'react'
import './about.css'
import ME from '../../assets/ProfilePicture.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

//About me section
const About = () => {
  return (
    <section id='about'>
      <h5>Who Am I</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Hospitality Experience</h5>
              <small>15+ years </small>
            </article>


            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>See my Work in the Project Section</small>
            </article>
          </div>
          <p>
          Junior Full stack developer leveraging background in  hospitality. Earned a certificate in Full Stack Web Development from Georgia Institute Of Technology Coding Boot Camp.
          </p>
          <p>Web Development has always inspired me and I am very passionate about developing applications with a focus on mobile-first design and development. My strengths lie in creativity, teamwork, and building projects.</p>

          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}
//Export About
export default About