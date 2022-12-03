import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, SortType } from "../../../redux/actions";
import style from './Sort.module.css';

export default function OrderType () {
    const tipos = useSelector(state => state.types);    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTypes());        
    }, [dispatch]);
    const onSelectChange = (event) => {
        dispatch(SortType(event.target.value));        
    }
    return(                
        <select name = 'select' className = {style.select} onChange = {onSelectChange}>
            {tipos?.map((t, index) => (
                <option key = {index} value={t.name}>{t.name}</option>
            ))}
        </select>
    )
}