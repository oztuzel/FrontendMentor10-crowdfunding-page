import React from 'react';
import style from './About.module.css';
import Card from './Card';

import {MainContext, useContext} from './context/context';

function About() {

  const {isClicked} = useContext(MainContext);

  return (
    <div className={!isClicked ? style.container : style.containerGrey} >
        <h1 className={style.title}> About this project </h1>
        <p className={style.paragraph}> 
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          <br/> <br/>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
          to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        <Card 
            title={'Bamboo Stand'} 
            dolar={25} 
            parag={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}
            left={101}
        />
        <Card 
            title={'Black Edition Stand'} 
            dolar={75} 
            parag={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
            left={64}
        />
        <Card 
            title={'Mahogany Special Edition'} 
            dolar={200} 
            parag={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
            left={0}
        />
      </div>
  )
}

export default About