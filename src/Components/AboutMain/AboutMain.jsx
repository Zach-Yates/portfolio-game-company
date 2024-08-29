import React from 'react'
import './AboutMain.css'
import bgimage from '../../assets/game-bg.png'


const AboutMain = () => {
  return (
    <div className='about-main' style = {{backgroundImage: `url(${bgimage})`}}>
            <div className='main'>
            <h1>About 93</h1>
            <p>93 is a game studio based in Rogers, AR. They have released 4 mobile games including:
            Dragon Rank Pop, Dragon Rank, Pic Jolly, and Combattle.</p>
        </div>
    </div>
  )
}

export default AboutMain
