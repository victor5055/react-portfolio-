//Depedencies
import React from 'react'
//Import
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
       
    </>
  )
}

export default App