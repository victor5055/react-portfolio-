import React from 'react'
//Import
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'

import { FaGithub } from 'react-icons/fa'
import { GrDeploy } from 'react-icons/gr'

// MY PROJECTS.....
const data = [
{
id: 1,
image: IMG1,
title: '(Group Project 2 eMarket)',
desc:'A full stack node.js application where users can post items for sale and display for others to bid on. The server-side application is built with express.js to support REST API with CRUD operations using the Mongoose ODM (MongoDB)',
github: 'https://github.com/victor5055/eMarket.git',
demo: 'https://safe-harbor-99168.herokuapp.com/'
},
{
id: 2,
image: IMG2,
title: '(Group Project 1 Sip&Chow)',
desc:'an application that allows user to find food and drinks based on desired ingredients and criteria',
github: 'https://github.com/victor5055/Sip-Chow.git',
demo: 'https://victor5055.github.io/Sip-Chow/'
},
{
id: 3,
image: IMG3,
title: '(Coding-Mutiple-Choice-Quiz)',
desc:'A typical coding assessment is a combination of multiple-choice questions and interactive coding challenges.',
github: 'https://github.com/victor5055/Coding-Mutiple-Choice-Quiz.git',
demo: 'https://victor5055.github.io/Coding-Mutiple-Choice-Quiz'
  },
  {
id: 4,
image: IMG4,
title: '(My-Daily-Planner)',
desc:' A simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.',
github: 'https://github.com/victor5055/My-Daily-Planner.git',
demo: 'https://victor5055.github.io/My-Daily-Planner/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Multiple Choice Quiz Application',
    desc: 'This coding assessment is a combination of multiple-choice questions and interactive coding challenges.',
    github: 'https://github.com/victor5055/Coding-Mutiple-Choice-Quiz.git',
    demo: 'https://victor5055.github.io/Coding-Mutiple-Choice-Quiz/'
  },
]

const Portfolio = () => {
    return (
      <section id='portfolio'>
        <h2>Projects</h2>
  
        <div className="container portfolio__container">
          {
            data.map(({ id, image, title, desc, github, demo }) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <h4>{desc}</h4>
                  <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer" ><FaGithub />Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer"><GrDeploy />Deployed Link</a>
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