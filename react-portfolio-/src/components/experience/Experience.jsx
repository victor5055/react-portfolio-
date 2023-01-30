/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5></h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <iconify-icon icon="vscode-icons:file-type-html" width="40"></iconify-icon>

              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <iconify-icon icon="vscode-icons:file-type-css" width="50"></iconify-icon>

              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <iconify-icon icon="logos:javascript" width="50"></iconify-icon>

           
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <iconify-icon icon="logos:bootstrap" width="50"></iconify-icon>

              </div>
            
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <iconify-icon icon="logos:react" width="50"></iconify-icon>


                </div>
           
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Handlebars.js</h4>
                <li><iconify-icon icon="logos:handlebars" alt="handlebars" width="50"></iconify-icon></li>
              </div>
            </article>
          </div>
        </div>


        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development and Test Tools/Others</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <iconify-icon icon="fa-brands:node" width="50"></iconify-icon>

              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <iconify-icon icon="logos:mongodb-icon" width="20"></iconify-icon>

              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Sequelize</h4>
                <li><iconify-icon icon="vscode-icons:file-type-sequelize" alt="sequelize" width="40"></iconify-icon></li>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <iconify-icon icon="logos:mysql" width="50"></iconify-icon>

              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Heroku</h4>
                <li><iconify-icon icon="logos:heroku-icon" alt="heroku" width="35"></iconify-icon></li>
                </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Insomnia</h4>
                <iconify-icon icon="logos:insomnia" width="50"></iconify-icon>

                </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Express.js</h4>
                <li><iconify-icon icon="simple-icons:express" alt="express" width="40"></iconify-icon></li>
                </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Webpack</h4>
                <li><iconify-icon icon="logos:webpack" alt="webpack" width="40"></iconify-icon></li>



              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
//Export Experience
export default Experience