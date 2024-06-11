import React from 'react'
import './PjMain.css'
import GameBg from '../GameBg/GameBg'
import bgimage from '../../../../assets/lblue-bg.png'
import gameimage from '../../../../assets/pj-game-icon.png'
import qrcode from '../../../../assets/pj-qr.svg'

const PjMain = () => {
  return (
    <div className='pjmain'>
        <GameBg 
        bgimage={bgimage} 
        title="Pic Jolly"
        subtitle="Picture Search"
        gameimage={gameimage}
        applelink="https://apps.apple.com/us/app/pic-jolly/id6476889091"
        googlelink="https://play.google.com/store/apps/details?id=com.ninetythreellc.picjolly"
        qrcode={qrcode}
        />
    </div>
  )
}

export default PjMain
