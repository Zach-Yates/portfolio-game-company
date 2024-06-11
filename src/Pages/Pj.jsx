import React from 'react'
import './Pj.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import PjMain from '../Components/PjMain/PjMain'

const Pj = () => {
  return (
    <div className='pj'>
      <Navbar/>
      <PjMain/>
      <Footer/>
    </div>
  )
}

export default Pj
