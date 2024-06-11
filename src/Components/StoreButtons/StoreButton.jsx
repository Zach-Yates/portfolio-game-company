import React from 'react'
import './StoreButton.css'
import { Link } from 'react-router-dom'

const StoreButton = (props) => {
  return (
    <div >
      <Link to={props.link}>

        <div className='storebutton'>

          <img src={props.logo}/>

          <div className='words'>

            <p> {props.small}</p>

            <h3>{props.big}</h3>

          </div>
          
        </div>

      </Link>
    </div>
  )
}

export default StoreButton
