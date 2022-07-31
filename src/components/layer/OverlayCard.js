import React, {useState} from 'react';
import style from './OverlayCard.module.css';
import image from '../../images/images';
import {MainContext, useContext} from '../context/context';

function OverlayCard({title, dolar, left, p, value, id}) {
  
  const {setTotalBacked, setTotalBackers, setIsClicked} = useContext(MainContext);

  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [isEnoughValue, setIsEnoughValue] = useState(false);


  const radioButtonCheck = () => {
    if(Number(left.charAt(0)) === 0){
      setIsChecked(false)
    }else{
    setIsChecked(prevstate => !prevstate)
    }
  };

  const changeValueHandler = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
    console.log(event.target.value);
  }

  const clickContinue = () => {
    if( Number(inputValue) >= Number(value)  ) {
      setIsEnoughValue(true);
      setTotalBacked(prevState => Number(prevState) + Number(inputValue) );
      setTotalBackers(prevState => Number(prevState) + 1);
    }else {
      setIsEnoughValue(false);
    }
  }

  const gotItClickHandler = () => {
    setIsEnoughValue(false);
    setIsClicked(false);
  }


  return (
    
    <div className={!isChecked ? style.card : style.cardActive}>
        <input 
          type='radio' 
          className= { style.inputRadio} 
          onClick={radioButtonCheck} 
          checked={isChecked} 
        />
        <div className={style.div}>
          <div className={style.cardUpper} >
            <h3 className={style.cardTitle}> {title}  </h3> 
            <p className={style.cardDolar}> {dolar} </p>
            <p className={style.cardLeft}> {left}</p>
          </div>
          <p className={style.parag}> {p} </p>
          {isChecked ? 
          <div className={style.checkedDiv}>
            <p className={style.enterPledge }>Enter Your Pledge</p> 
            <div className={style.inputDiv}> 
              <span className={style.dolarIcon}> $ </span> 
              <input 
                type='number' 
                className={style.number} 
                onChange={changeValueHandler}
                value={inputValue}
              /> 
            </div> 
            <button className={style.continue} onClick={clickContinue}> Continue </button> 
          </div> : ''}
          {isEnoughValue && 
            <div className={style.thanks}>
              <img src={image.check} alt='checkImage' className={style.thanksImg} />
              <h1 className={style.thanksTitle}> Thanks for your support!</h1>
              <p className={style.thanksPassage}>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
              <button className={style.thanksButton} onClick={gotItClickHandler}> Got It </button>
            </div>
          }
        </div>
    </div>
  )
}

export default OverlayCard