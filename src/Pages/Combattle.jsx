import React from 'react'
import './Combattle.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import CombattleMain from '../Components/CombattleMain/CombattleMain'

const Combattle = () => {
  return (
    <div className='combattle'>
      <Navbar/>
      <CombattleMain/>
      <Footer/>
    </div>
  )
}

export default Combattle
