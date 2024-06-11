import React from 'react'
import './DrpopMain.css'
import GameBg from '../GameBg/GameBg'
import bgimage from '../../../../assets/blue-bg.png'
import gameimage from '../../../../assets/drpop-game-icon.png'
import qrcode from '../../../../assets/drpop-qr.svg'

const DrpopMain = () => {
  return (
    <div className='drpop-main'>
        <GameBg 
        bgimage={bgimage} 
        title="Dragon Rank Pop"
        subtitle="Auto Shooter"
        gameimage={gameimage}
        applelink="https://apps.apple.com/us/app/d-r-pop/id6495164213"
        googlelink="https://play.google.com/store/apps/details?id=com.ninetythreellc.drpop&pli=1"
        qrcode={qrcode}
        />
    </div>
  )
}

export default DrpopMain
