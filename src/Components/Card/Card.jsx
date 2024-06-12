import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


const Card = ({bg,logo,title, desc, dir}) => {
  return (
    <div className={`card ${bg}`}>

    <div className='info'>

        <img className='card__logo' src={logo}/>

        <h2 className='card__title'>
            {title}
        </h2>

        <p className='card__desc'>
            {desc}
        </p>

        <Link to={dir}>
        <button className='card__button'>
            Learn More
        </button>
        </Link>
      

    </div>

</div>
  )
}

export default Card
