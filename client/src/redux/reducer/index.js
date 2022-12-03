import { ERROR, GET_POKEMONS, GET_POKEMON_DETAIL, GET_TYPES, CLEAR_PAGE, SEARCH_POKEMON, SORT_POKEMONS, SORT_TYPE } from "../actions/actionTypes";
const initialState = {
    pokemons: [],
    pokemonsFiltered: [],    
    pokemonDetail: {},
    types: [],
    error: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR: return {...state, error: action.payload}
        case GET_POKEMONS: return {...state, pokemons: action.payload, pokemonsFiltered: action.payload}
        case GET_POKEMON_DETAIL: return {...state, pokemonDetail: action.payload}
        case GET_TYPES: return {...state, types: action.payload}
        case CLEAR_PAGE: return {...state, pokemonDetail: {}}        
        case SEARCH_POKEMON: return {...state, pokemonsFiltered: [action.payload]}
        case SORT_POKEMONS: let ordered = [...state.pokemons]
                            ordered = ordered.sort((a, b) => {
                                if (a.name > b.name) {
                                    return action.payload === 'ASCENDENTE' ? 1 : -1;
                                }
                                if (a.name < b.name) {
                                    return action.payload === 'ASCENDENTE' ? -1 : 1;
                                }
                                return 0;
                            });
                            return {...state, pokemonsFiltered: [...ordered]}
        case SORT_TYPE: let order = [...state.pokemons].filter((pokemon) => pokemon.types.includes(action.payload));
        return {...state, pokemonsFiltered: order}
        default: return state;
    }    
}

export default rootReducer;