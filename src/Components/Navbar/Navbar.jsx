import './Navbar.css'

import React,{useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Link as Scroll} from 'react-scroll'

import { VscMenu } from "react-icons/vsc";
import { IoMailOutline } from "react-icons/io5";

import game_company_logo from '../../assets/game-company-logo.png'

const Navbar = () => {

  const [navMenu, setNavMenu] = useState(false);
  const location = useLocation();

  let home = false;

  const toggleNavMenu = ()=>{
    // console.log("clicked");
    setNavMenu(!navMenu);
  }

  const [mailMenu, setMailMenu] = useState(false);
  const toggleMailMenu = ()=>{
    // console.log("clicked");
    setMailMenu(!mailMenu);
  }

  const HideMenus = ()=>{
    if(navMenu){setNavMenu(false);} 
    if(mailMenu){setMailMenu(false);}
  }

  if(location.pathname == "/portfolio-game-company/"){
    home = true;
  }else{
    home = false;
  }


  return (
    <nav className='game__navbar' onClick={HideMenus}>
      <VscMenu className='menu-icon' onClick={toggleNavMenu}/>

      <ul className={`left ${navMenu? '':'hide-nav-menu'}`}>
        {/* <Link to='/'> <li><div className='item'>Zach.dev</div></li></Link> */}

        <Link to='/portfolio-game-company/'> <li> <img src={game_company_logo} className='logo'/> </li> </Link>

        <Link to='/Game_Drpop'> <li><div className='item'>Dragon Rank Pop</div></li></Link>
        <Link to='/Game_Dr'> <li><div className='item'>Dragon Rank</div></li></Link>
        <Link to='/Game_Pj'> <li><div className='item'>Pic Jolly</div></li></Link>

        <Link to='/Game_Combattle' className='nav-combattle'><li><div className='item'>Combattle</div></li></Link>
      </ul>

      <ul className={`right ${mailMenu? '':'hide-mail-menu'}`}>
        <Scroll to='games' smooth={true} offset={0} duration={500}><li className={`scroller ${home? '':'hide-scroller'}`}><div className='item'>Games</div></li></Scroll>

        <Link to='/Game_About'> <li><div className='item'>About</div></li></Link> 

        <Link to='/Game_Contact'> <li><div className='item'>Contact</div></li></Link>
      </ul>

      <IoMailOutline className='mail-icon' onClick={toggleMailMenu}/>

    </nav>
  )
}

export default Navbar
