// import images from './images/images';
import style from './App.module.css';
import Navbar from './components/Navbar';
import Mastercraft from './components/Mastercraft';
import Support from './components/Support';
import About from './components/About';
import Overlay from './components/layer/Overlay';

import {MainContext } from './components/context/context';
import { useState } from 'react';
import Backdrop from './components/layer/Backdrop';


function App() {
  // 15-25 is about context. (./context/context.js)

  const [isClicked, setIsClicked] = useState(false);
  
  const [totalBackers, setTotalBackers] = useState(5007);
  const [totalBacked, setTotalBacked] = useState(89914);

  const clickHandler = () => {
    setIsClicked(isClicked === false ? true : false)
  }


  const data = {
    isClicked,
    setIsClicked ,
    clickHandler,

    totalBacked,
    totalBackers,
    setTotalBacked,
    setTotalBackers
  }

 

  return (
    <MainContext.Provider value={data}>
      <Backdrop >
        <div className={!isClicked ? style.app : style.appGrey} >
        <div className={style.navbarSide} >
          <Navbar />
        </div>
        <Mastercraft />
        <Support />
        <About />
        </div>
      </Backdrop >
      {isClicked && <Overlay />}
    </MainContext.Provider>
  );
}

export default App;
