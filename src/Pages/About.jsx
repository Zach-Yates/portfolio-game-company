import React from 'react'
import './About.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import AboutMain from '../Components/AboutMain/AboutMain'


const About = () => {
  return (
    <div className='about__game'>
        <Navbar/>
        <AboutMain/>
        <Footer/>
    </div>
  )
}

export default About
