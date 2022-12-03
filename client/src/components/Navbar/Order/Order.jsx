import React from "react";
import { useDispatch } from "react-redux";
import { Sort } from "../../../redux/actions";
import style from './Order.module.css';

export default function Order () {
    const dispatch = useDispatch();        
    function onSelectChange (event) {
        dispatch(Sort(event.target.value));
    }
    return (
        <select name="select" onChange={onSelectChange} className={style.select}>
            <option value='ASCENDENTE'>Ascendente</option>
            <option value='DESCENDENTE'>Descendente</option>
        </select>
    )
}