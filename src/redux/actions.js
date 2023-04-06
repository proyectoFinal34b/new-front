import axios from 'axios'

export const GET_CATS = 'GET_CATS';
export const SEARCH_CATS = 'SEARCH_CATS';
export const FILTER_CATS = 'FILTER_CATS'
export const POST_CATS = 'POST_CATS'
export const GET_PRODUCT='GET_PRODUCT'

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

export const postCats = (payload) => async (dispatch) => {
    try {
      const json = await axios.post('https://proyectofinal-gg57.onrender.com/cat', payload);
      return json;
    } catch (error) {
      console.log(error);
    }
  };
  export const getProduct = () => async (dispatch) => {
    return await axios.get(`https://proyectofinal-gg57.onrender.com/product`)
    .then(r => dispatch({ type : GET_PRODUCT, payload : r.data}))
    .catch(e => console.error(e))}