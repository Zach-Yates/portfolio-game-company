import React, {useEffect, useRef, useState} from 'react'
import './Hero.css'
import drpop_logo from '../../assets/drpop-logo.png'
import dr_logo from '../../assets/dr-logo.png'
import pj_logo from '../../assets/pj-logo.png'
import combattle_logo from '../../assets/combattle-logo.png'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    const [sliderIndex,setSliderIndex] = useState(0);
    let iarr = [];

    useEffect(()=>{
        document.documentElement.style.setProperty('--slider-index',sliderIndex);
        check();

    },[sliderIndex])

    const slideForward = ()=>{
        if(sliderIndex != 3){
            setSliderIndex(cur =>{
                return cur + 1;
            });
        }else{
            setSliderIndex(cur =>{
                return cur =0;
            });
        }
        // console.log("Next");
    };

    const slideBackward = ()=>{
        if(sliderIndex != 0){
            setSliderIndex(cur =>{
                return cur - 1;
            });
        }else{
            setSliderIndex(cur =>{
                return cur = 3;
            });
        }
        // console.log("Back");
    };

    const check = ()=>{
        iarr = [...document.querySelector('.indicators').children];

        iarr.forEach(e=>{
            e.classList.remove("active");
        })

        document.querySelector('.indicators').children[sliderIndex].classList.add("active")
    }

  return (
    <div className='game__hero'>


        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>

        <div className='cards'>

        <div className='cards-slide'>

            <div className='card card1'>

                <div className='info'>

                    <img className='card__logo' src={drpop_logo}/>

                    <h2 className='card__title'>
                        Auto Shooter
                    </h2>

                    <p className='card__desc'>
                        Weave Through Fire and Fell Foe!
                    </p>

                    <Link to="/Game_Drpop">
                    <button className='card__button'>
                        Learn More
                    </button>
                    </Link>
                  

                </div>

            </div>

            <div className='card card2'>

                <div className='info'>

                    <img className='card__logo' src={dr_logo}/>

                    <h2 className='card__title'>
                        Hack N Slash!
                    </h2>

                    <p className='card__desc'>
                        Attack Block Dash and SUper
                    </p>

                    <Link to="/Game_Dr">
                        <button className='card__button'>
                            Learn More
                        </button>
                    </Link>
                </div>

            </div>

            <div className='card card3'>

                <div className='info'>

                    <img className='card__logo' src={pj_logo}/>

                    <h2 className='card__title'>
                        Happy Picture Search!
                    </h2>

                    <p className='card__desc'>
                        Find the 3!
                    </p>

                    <Link to="/Game_Pj">
                        <button className='card__button'>
                            Learn More
                        </button>
                    </Link>
                </div>

            </div>

            <div className='card card4'>

                <div className='info'>

                    <img className='card__logo' src={combattle_logo}/>

                    <h2 className='card__title'>
                        Combo Action!
                    </h2>

                    <p className='card__desc'>
                        Increase Your Combo.
                    </p>

                    <Link to="/Game_Combattle">
                        <button className='card__button'>
                            Learn More
                        </button>
                    </Link>



                </div>

            </div>

        </div>

        </div>

        <div className='indicators'>
            <div className='indicator'></div>
            <div className='indicator'></div>
            <div className='indicator'></div>
            <div className='indicator'></div>
        </div>



    </div>
  )
}

export default Hero
