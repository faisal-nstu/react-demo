import axios from 'axios';
import Types from './dashboard.types';

export function getPokemons(url) {
    return {
        type: Types.GET_POKEMONS,
        payload: axios({
            method: 'get',
            url
        })
    };
}