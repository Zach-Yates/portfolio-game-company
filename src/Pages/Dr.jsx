import React from 'react'
import './Dr.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import DrMain from '../Components/DrMain/DrMain'


const Dr = () => {
  return (
    <div className='dr'>
        <Navbar/>
        <DrMain/>
        <Footer/>
    </div>
  )
}

export default Dr
