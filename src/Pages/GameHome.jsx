import React from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Hero from '../Components/Hero/Hero.jsx'
import Games from '../Components/Games/Games.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import './GameHome.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'


const Home = () => {
  return (
    <div className='gamehome'>
    <Navbar/>
    <Hero/>
    <Games/>
    <Footer/>
    </div>
  )
}

export default Home