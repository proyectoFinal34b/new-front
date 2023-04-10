import axios from 'axios'

export const GET_CATS = 'GET_CATS';
export const SEARCH_CATS = 'SEARCH_CATS';
export const FILTER_CATS = 'FILTER_CATS'
export const POST_CATS = 'POST_CATS'
export const GET_PRODUCT='GET_PRODUCT'
export const FILTER_PRODUCT ='FILTER_PRODUCT'
export const GET_USERS='GET_USERS'
export const ADD_TO_CARD='ADD_TO_CARD'

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
      throw Error(error);
    }
  };
export const getProduct = () => async (dispatch) => {
    return await axios.get(`https://proyectofinal-gg57.onrender.com/product`)
    .then(r => dispatch({ type : GET_PRODUCT, payload : r.data}))
    .catch(e => console.error(e))}

    export const filterProduct = (filtered) => {
      return {type: FILTER_PRODUCT, payload: filtered}
  }

export function getUsers(){
      return async function(dispatch){
          try{
              let response = await axios.get(`https://proyectofinal-gg57.onrender.com/user`);
              return dispatch({
              type: GET_USERS,
              payload: response.data,
          });
          } catch (error) {
              alert(error) 
          }
      }
  };

export const postProduct=(body)=>async (dispatch)=>{

     try {
      const json = await axios.post('https://proyectofinal-gg57.onrender.com/product', body);
      return json;
    } catch (error) {
      throw Error(error);
    }
    };


    export const addToCard = (product) => {
      return {
        type: "ADD_TO_CARD",
        payload: product
      };
    };
    

