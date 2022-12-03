import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail, clearPage } from '../../redux/actions';
import Loading from '../Loading';
import style from './Pokemon.module.css';

function Pokemon () {
    const { name } = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemonDetail);

    useEffect(() => {
        dispatch(getDetail(name));
        return () => {
            dispatch(clearPage());
        }
    }, [dispatch, name]);

    return (
        <>
            {pokemon.name ?
                <>
                    <div className={style.pokemon}>
                        <h4>Name: {pokemon.name}</h4>
                        <h4>Health: {pokemon.health}</h4>
                        <h4>Attack: {pokemon.attack}</h4>
                        <h4>Defense: {pokemon.defense}</h4>
                        <h4>Speed: {pokemon.speed}</h4>
                        <h4>Height: {pokemon.height}</h4>
                        <h4>Weight: {pokemon.weight}</h4>
                        <img src={pokemon.image} alt={pokemon.name}></img>
                    </div>
                </>
                : (<Loading/>)
            }
        </>
    )
}
export default Pokemon;