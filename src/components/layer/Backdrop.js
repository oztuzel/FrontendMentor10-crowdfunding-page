import React from 'react';
import ReactDOM from 'react-dom';

import {MainContext, useContext} from '../context/context';

function Backdrop(props) {

    const {isClicked ,setIsClicked} = useContext(MainContext);

    const clickHandlers = () => {
        if(isClicked=== true) {
            setIsClicked(false)        
        }
    }

  return ReactDOM.createPortal(
    <div onClick={clickHandlers}>
        {props.children}
    </div>,
    document.getElementById('root')
  )
}

export default Backdrop