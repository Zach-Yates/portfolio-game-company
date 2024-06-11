import React from 'react';
import {Link} from 'react-router-dom';
import './Games.css';
import apple_icon from "../../assets/apple-icon.svg";
import gp_icon from "../../assets/google-play.svg";
import drpop_game_img from "../../assets/drpop-game-img.png";
import dr_game_img from "../../assets/dr-game-img.png";
import pj_game_img from "../../assets/pj-game-img.png";
import combattle_game_img from "../../assets/combattle-game-img.png";

const Games = () => {
  return (
    <div className='games game__games container'>
      <h1>games</h1>

      <div className='game__grid'>

        <div className='game drpop'>
          <Link>
            {/* <video className=''></video> */}
            <img className='game__image' src={drpop_game_img}/>
            <h2>dragon rank pop</h2>
            <p>auto shooter!</p>
            <div className='platforms'>
              <img src={apple_icon} className='store-icon'/>
              <img src={gp_icon} className='store-icon'/>
            </div>
          </Link>

        </div>

        <div className='game dr'>
          <Link>
            <img className='game__image' src={dr_game_img}/>

            <h2>dragon rank</h2>
            <p>hack n slash!</p>

            <div className='platforms'>
              <img src={apple_icon} className='store-icon'/>
              <img src={gp_icon} className='store-icon'/>
            </div>
          </Link>
        </div>

        <div className='game pj'>
          <Link>
            <img className='game__image' src={pj_game_img}/>

            <h2>pic jolly</h2>
            <p>picture search!</p>

            <div className='platforms'>
              <img src={apple_icon} className='store-icon'/>
              <img src={gp_icon} className='store-icon'/>
            </div>
          </Link>
        </div>

        <div className='game combattle'>
          <Link>
            <img className='game__image' src={combattle_game_img}/>

            <h2>Combattle!</h2>
            <p>combo action!</p>

            <div className='platforms'>
              <img src={apple_icon} className='store-icon'/>
              <img src={gp_icon} className='store-icon'/>
            </div>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Games
