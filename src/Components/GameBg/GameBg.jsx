import React from 'react'
import './GameBg.css'
import StoreButton from '../StoreButtons/StoreButton'
import apple_logo from '../../../../assets/apple-icon.svg'
import google_logo from '../../../../assets/google-play.svg'
import QrCode from '../QrCode/QrCode'

const GameBg = (props) => {
    
  return (
    <div className='gamebg' style = {{backgroundImage: `url(${props.bgimage})`}}>
      <div className='bg-left'>
        <h1 className='gamebg__title'>{props.title}</h1>
          <p className='gamebg__subtitle'>{props.subtitle}</p>
          <img className='gamebg__gameimg' src={props.gameimage} />
          <div className='gamebg__store-buttons'>
              <StoreButton link={props.applelink} logo={apple_logo} small="Download on the" big="App Store"/> 
              <StoreButton link={props.googlelink} logo={google_logo} small="GET IT ON" big="Google Play"/>
          </div>
      </div>

      <div className='bg-right'>
        <QrCode code={props.qrcode}/>
      </div>

    </div>
  )
}

export default GameBg
