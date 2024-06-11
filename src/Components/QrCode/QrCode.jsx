import React from 'react'
import './QrCode.css'

const QrCode = (props) => {
  return (
    <div className='qr'>
      <img className='code' src={props.code} />
      <div className='code-text-border'>
          <h4>Scan to Download</h4>
      </div>
    </div>
  )
}

export default QrCode
