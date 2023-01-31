import React from 'react'
//Import
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

// MY PROJECTS.....
const data = [
{
id: 1,
image: IMG1,
title: 'Group Project 2 eMarket',
github: 'https://github.com/victor5055/eMarket.git',
demo: 'https://safe-harbor-99168.herokuapp.com/'
},
{
id: 2,
image: IMG2,
title: 'Group Project 1 Sip&Chow',
github: 'https://github.com/victor5055/Sip-Chow.git',
demo: 'https://victor5055.github.io/Sip-Chow/'
},
]

const Portfolio = () => {
    return (
      <section id='portfolio'>
        <h2>Projects</h2>
  
        <div className="container portfolio__container">
          {
            data.map(({ id, image, title, desc }) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <h4>{desc}</h4>
                  <div className="portfolio__item-cta">
                   
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>
    )
  }

//Export Portfolio
export default Portfolio