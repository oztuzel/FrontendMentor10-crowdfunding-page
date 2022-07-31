import React from 'react';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <div className={style.navbar} >
        <h1> crowdfund </h1>
        <div className={style.buttonDiv}>
            <p className={style.button}> About </p>
            <p className={style.button}> Discover </p>
            <p className={style.button}> Get Started </p>
        </div>
    </div>
  )
}

export default Navbar