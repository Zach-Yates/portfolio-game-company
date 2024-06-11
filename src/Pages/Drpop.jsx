import React from 'react'
import './Drpop.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import DrpopMain from '../Components/DrpopMain/DrpopMain'


const Drpop = () => {
  return (
    <div className='drpop'>
      <Navbar/>
      <DrpopMain/>
      <Footer/>
    </div>
  )
}

export default Drpop
