import React from 'react'
//Import
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
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
    title: '(Multiple Choice Quiz Application)',
    desc: 'This coding assessment is a combination of multiple-choice questions and interactive coding challenges.',
    github: 'https://github.com/victor5055/Coding-Mutiple-Choice-Quiz.git',
    demo: 'https://victor5055.github.io/Coding-Mutiple-Choice-Quiz/'
  },
  {
    id: 6,
    image: IMG6,
    title: '(Tech-Blog)',
    desc: 'This app utilizes many different files, database storage, and technologies to create a Tech blog. A user can view any blogs on the main page and click them to see the comments. Both the post and comments will show who posted them.If a user would like to create their own blog they can sign up to create an account or login to an existing one. Once logged in they now have access to a dashboard for posting blogs. They can also go to other blogs and comment on them leaving their name and a date.The user then can logout and end their session or a timeout exists on the session as well.',
    github: 'https://github.com/victor5055/Tech-Blog.git',
    demo: 'https://stark-caverns-54506.herokuapp.com/'
  },
  {
    id: 7,
    image: IMG7,
    title: '(Book-Search-Engine)',
    desc: 'AS AN avid reader I WANT to search for new books to read SO THAT I can keep a list of books to purchase.This application is a MERN stack application which is a group of four technologies, that is MongoDB Express.js ReactJS Node.js',
    github: 'https://github.com/victor5055/Book-Search-Engine',
    demo: 'https://shielded-badlands-28437.herokuapp.com/'
  },
  {
    id: 8,
    image: IMG8,
    title: '(MERN-Sky-Camp)',
    desc: 'This project is to build an application encouraging the users to stay active, enjoy the fresh air and sunshine found on the top of the mountain. Camping is an excellent way to burn a ton of calories while doing some great activites and feeling healthier. The application will be created as a MERN stack single-page application in which the users will be able to browse through the different Camping packages and add the package or remove the package before checkout. Stripe payment platform will be used for the users to pay for the package. Contact Form will be used for the users to contact MERN Sky Camp Team in case of cancellation due to unforeseen circumstances or other enquiries.',
    github: 'https://github.com/victor5055/MERN-Sky-Camp',
    demo: 'https://mighty-forest-97657.herokuapp.com/'
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