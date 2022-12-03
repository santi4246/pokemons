import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from './Button';
import SearchBar from "./Search";
import Order from "./Order/Order";
import OrderType from "./SortTypes";

function Navbar () {
    function onClick () {
        window.location = '/home';
    }
    return (
        <nav className="navbar">
            <ul>
                <li className="nav-item"><Link to = '/home' className="nav-links" onClick={onClick}>Home</Link></li>
            </ul>
            <Button/>
            <SearchBar/>
            <Order/>
            <OrderType/>
        </nav>
    )
}
export default Navbar;