import React from 'react'
//Import
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}
//Export CTA
export default CTA