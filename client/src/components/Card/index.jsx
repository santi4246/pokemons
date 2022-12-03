import React from "react";
import { NavLink } from "react-router-dom";
import style from './Card.module.css';

const Card = ({id, name, types, image}) => {    
    return (
        <div key={id} className = {style.card}>            
            <NavLink to={`home/pokemon/${name}`} className={style.title}>{name}</NavLink>            
            <img src={image} alt={name}></img>            
            {types ? 
            <>
                {types.map((t, i) => (
                    <span key={i.toString()}>{t}</span>                    
                )                    
                )}
            </>
            : <span>No type</span>
            };
        </div>
    )
}
export default Card;