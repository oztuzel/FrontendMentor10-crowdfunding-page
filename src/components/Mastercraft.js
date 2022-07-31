import React from 'react';
import style from './Mastercraft.module.css';
import images from '../images/images';

import {MainContext, useContext} from './context/context' ;

function Mastercraft() {

  const {clickHandler} = useContext(MainContext);





  return (
    <div className={style.mastercraft}> 
        <img src={images.mastercraft} alt='mastercraft' className={style.imageM} />
        <h1 className={style.mastercraftTitle}>
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className={style.mastercraftParag}>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className={style.buttons}>
          <button className={style.mastercraftButton} onClick={clickHandler}> Back this project </button>
        
          <button className={style.button} onClick={clickHandler}> 
            <div className={style.mask} >
              <img src={images.bookmark} alt='bookmark' className={style.bookmark} />
            </div>
            <p> Bookmark </p>
          </button>
        </div>
      </div>
  )
}

export default Mastercraft