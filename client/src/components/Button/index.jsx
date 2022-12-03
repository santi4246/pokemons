import React from "react";
import style from './Button.module.css';

export default function Button ({children}) {
    function handleClick () {        
        window.location = '/home';
    }
    return (
        <button  className={style.button} onClick={handleClick}><span>{children}</span><i></i></button>
    )
}