import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


// SOCIAL ICONS AND LINKS

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/victor-pereira-210636257" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/victor5055" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
     
    </div>
  )
}
//Export HeaderSocials
export default HeaderSocials