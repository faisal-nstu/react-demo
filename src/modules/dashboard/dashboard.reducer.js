import Types from './dashboard.types';

const initialState = {
    pokemonList: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case Types.GET_POKEMONS_FULFILLED: {
            return {
                ...state,
                pokemonList: action.payload.data
            };
        }
    }

    return state;
}
