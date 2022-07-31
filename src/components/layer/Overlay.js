import React from 'react';
import ReactDom from 'react-dom';
import style from './Overlay.module.css';
import images from '../../images/images';
import OverlayCard from './OverlayCard';

import {MainContext, useContext} from '../context/context';

function Overlay() {

  const {clickHandler} = useContext(MainContext);

  return ReactDom.createPortal(
    
    <div className={style.overlay}>
      <img src={images.closeMenu} alt='closeMenu' className={style.closeImg} onClick={clickHandler} />
      <h1 className={style.title} >  Back this project</h1>
      <p className={style.passage}>  Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
      <OverlayCard 
        title={'Pledge with no reward'} 
        p={'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'} 
        left={'∞'}
        value={0}
      />

      <OverlayCard 
        title={'Bamboo Stand '}
        dolar={'Pledge $25 or more'}
        left={'101 left'}
        p={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."}
        id={1}
        value={25}
      />
      
      <OverlayCard
        title={'Black Edition Stand '}
        dolar={'Pledge $75 or more'}
        left={'64 left'}
        p={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
        id={2}
        value={75}
      />

      <OverlayCard
        title={'Mahogany Special Edition'}
        dolar={'Pledge $200 or more'}
        left={'0 left'}
        p={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}
        id={3}
        value={200}
      />

    </div>
    ,
    document.getElementById('overlay')
  )
}

export default Overlay