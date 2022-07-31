import React from 'react';
import style from './Card.module.css';

import {MainContext, useContext} from './context/context';



function Card({title, dolar, parag, left }) {

  const {clickHandler} = useContext(MainContext)


  return (
    <div className={style.card}>
        <div className={style.upperSide}>
            <h1 className={style.title} > {title} </h1>
            <p className={style.dolar} >Pledge ${dolar} or more</p>
        </div>
        <p className={style.paragraph}> {parag} </p>
        <div className={style.lowerSide}>
            <div>
              <h1 className={style.left} >{left} </h1> 
              <p>left</p>
            </div>
            <button className={style.button} onClick={clickHandler}> Select Reward </button>
        </div>
    </div>
  )
}

export default Card