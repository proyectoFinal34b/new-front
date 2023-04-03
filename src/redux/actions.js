import axios from 'axios'

export const GET_CATS = 'GET_CATS';
export const SEARCH_CATS = 'SEARCH_CATS';
export const FILTER_CATS = 'FILTER_CATS'

export const getCats = () => async (dispatch) => {
    return await axios.get(`https://proyectofinal-gg57.onrender.com/cat`)
    .then(r => dispatch({ type : GET_CATS, payload : r.data}))
    .catch(e => console.error(e))
};

export const searchCats = (name) => async (dispatch) => {
    return await axios.get(`https://proyectofinal-gg57.onrender.com/cat?name=${name}`)
    .then(r => dispatch({ type : SEARCH_CATS, payload : r.data}))
    .catch(e => console.error(e))
};

export const filterCats = (filtered) => {
    return {type: FILTER_CATS, payload: filtered}
}