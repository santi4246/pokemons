import { ERROR, GET_POKEMONS, GET_POKEMON_DETAIL, GET_TYPES, CLEAR_PAGE, SEARCH_POKEMON, SORT_POKEMONS, SORT_TYPE } from "./actionTypes";

export const getPokemons = () => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/api/pokemon`).then(response => response.json()).then(json => dispatch({ type: GET_POKEMONS, payload: json })).catch(error => dispatch({ type: ERROR, payload: error }))
    }
}

export const getDetail = (name) => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/api/pokemon/${name}`).then(response => response.json()).then(json => dispatch({ type: GET_POKEMON_DETAIL, payload: json })).catch(error => dispatch({ type: ERROR, payload: error }));
    }
}

export const getTypes = () => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/api/type`).then(response => response.json()).then(json => dispatch({ type: GET_TYPES, payload: json })).catch(error => dispatch({ type: ERROR, payload: error }));
    }
}

export const clearPage = () => {
    return { type: CLEAR_PAGE }
}

export const Search = (search) => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/api/pokemon/${search}`).then(response => response.json()).then(json => dispatch({ type: SEARCH_POKEMON, payload: json })).catch(error => dispatch({ type: ERROR, payload: error }))
    }
}

export const Sort = (order) => {
    return {
        type: SORT_POKEMONS,
        payload: order
    }    
}

export const SortType = (type) => {
    return {
        type: SORT_TYPE,
        payload: type
    }
}