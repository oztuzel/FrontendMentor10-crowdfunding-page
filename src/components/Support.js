import React from 'react';
import style from './Support.module.css';

import {MainContext,useContext} from './context/context';

function Support() {
  
  const {totalBackers, totalBacked } = useContext(MainContext);
  
  const barHeightValue = (totalBacked / 100000 ) * 100 ;
  const barHeight = barHeightValue + "%";
  
  
  
  
  return (
    <div className={style.supportContainer}>
        <div>
          <div className={style.dolars}>
            <h1 className={style.dolar}> ${totalBacked} <br/>  <p> of $100,000 backed </p> </h1>
            <h1 className={style.dolar}> {totalBackers} <br/>  <p> total backers </p> </h1>
            <h1 className={style.dolar} style={{border: 0}} > 56 <br/>  <p> days left  </p> </h1>
          </div>
          <div className={style.chartBarInner} >
            <div className={style.chartBarFill} style={{width: barHeight} } ></div>
          </div>
        </div>
      </div>
  )
}

export default Support