import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='game__footer container'>
      <h2 className='copyright'>Copyright  {new Date().getFullYear()} All Rights Reserved.</h2>
      <ul>
        <li><Link></Link>About</li>
        <li><Link></Link>Contact</li>
      </ul>
    </div>
  )
}

export default Footer
