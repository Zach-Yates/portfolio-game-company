import React, {useEffect, useState} from 'react'
import './Hero.css'

import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import Card from '../Card/Card'
import Indicator from '../Indicator/Indicator'

import drpop_logo from '../../assets/drpop-logo.png'
import dr_logo from '../../assets/dr-logo.png'
import pj_logo from '../../assets/pj-logo.png'
import combattle_logo from '../../assets/combattle-logo.png'



const Hero = () => {
    const [sliderIndex,setSliderIndex] = useState(0);

    useEffect(()=>{
        document.documentElement.style.setProperty('--slider-index',sliderIndex);
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
    };

  return (
    <div className='game__hero'>

        <button className='next-btn' onClick={slideForward}><img src={next_icon}/></button>
        <button className='back-btn' onClick={slideBackward}><img src={back_icon}/></button>

        <div className='cards'>

        <div className='cards-slide'>

            <Card bg={"card1"} logo={drpop_logo} title={"Auto Shooter"} desc={"Weave Through Fire and Foe!"} dir={"/Game_Drpop"}/>
            <Card bg={"card2"} logo={dr_logo} title={"Hack N Slash!"} desc={"Attack! Block! Dash! Super!"} dir={"/Game_Dr"}/>
            <Card bg={"card3"} logo={pj_logo} title={"Happy Picture Search!"} desc={"Find the 3!"} dir={"/Game_Pj"}/>
            <Card bg={"card4"} logo={combattle_logo} title={"Combo Action!"} desc={"Increase. Your. Combo."} dir={"/Game_Combattle"}/>

        </div>
        </div>

        <div className='indicators'>
            <Indicator currentIndex={sliderIndex} myIndex={0}/>
            <Indicator currentIndex={sliderIndex} myIndex={1}/>
            <Indicator currentIndex={sliderIndex} myIndex={2}/>
            <Indicator currentIndex={sliderIndex} myIndex={3}/>
        </div>

    </div>
  )
}

export default Hero
