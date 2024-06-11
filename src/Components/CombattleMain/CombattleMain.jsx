import React from 'react'
import './CombattleMain.css'
import GameBg from '../GameBg/GameBg'
import bgimage from '../../../../assets/red-bg.png'
import gameimage from '../../../../assets/combattle-game-icon.png'
import qrcode from '../../../../assets/combattle-qr.svg'

const CombattleMain = () => {
  return (
    <div className='combattlemain'>
        <GameBg 
        bgimage={bgimage} 
        title="Combattle"
        subtitle="Combo Action!"
        gameimage={gameimage}
        applelink="https://apps.apple.com/us/app/combattle/id1561038985"
        googlelink="https://play.google.com/store/apps/details?id=com.ninetythreellc.combattle"
        qrcode={qrcode}
        />
    </div>
  )
}

export default CombattleMain
