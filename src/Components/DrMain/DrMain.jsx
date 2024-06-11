import React from 'react'
import './DrMain.css'
import GameBg from '../GameBg/GameBg'
import bgimage from '../../../../assets/black-bg.png'
import gameimage from '../../../../assets/dr-game-icon.png'
import qrcode from '../../../../assets/dr-qr.svg'

const DrMain = () => {
  return (
    <div className='drmain'>
        <GameBg 
        bgimage={bgimage} 
        title="Dragon Rank"
        subtitle="Hack N Slash"
        gameimage={gameimage}
        applelink="https://apps.apple.com/us/app/dragon-rank/id6443802328"
        googlelink="https://play.google.com/store/apps/details?id=com.NINETYTHREEllc.dragonrank&pli=1"
        qrcode={qrcode}
        />
    </div>
  )
}

export default DrMain
