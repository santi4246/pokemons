import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Search } from '../../../redux/actions';
import style from './Search.module.css';

function SearchBar () {
    const [state, setState] = useState('');
    const dispatch = useDispatch();

    function handleInputChange (event) {
        setState(event.target.value);
    }
    function handleSubmit (event) {
        event.preventDefault();
        dispatch(Search(state));
    }

    return (
        <form onSubmit={(event) => {handleSubmit(event)}}>
            <input type = 'text' placeholder='search pokemon...' value={state} onChange={(event) => handleInputChange(event)} className={style.input}></input>
            <button type = 'submit' value = 'Agregar' className={style.button}>Buscar</button>
        </form>
    )
}
export default SearchBar;