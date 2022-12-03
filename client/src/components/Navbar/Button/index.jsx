import React from "react";
import { Link } from 'react-router-dom';
import './Button.css';

function Button () {
    return (
        <Link to='/home/create-pokemon'><button className="btn">Create Pokemon</button></Link>
    )
}
export default Button;