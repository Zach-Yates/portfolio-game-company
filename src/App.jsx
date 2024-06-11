import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Games from './Components/Games/Games'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {

  return (
    <div className='gamehome'>
      <Navbar/>
      <Hero/>
      <Games/>
      <Footer/>
    </div>
  )
}

export default App
