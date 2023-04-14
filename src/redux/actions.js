import axios from "axios";

export const GET_CATS = "GET_CATS";
export const SEARCH_CATS = "SEARCH_CATS";
export const GET_CATS_BY_ID = 'GET_CATS_BY_ID';
export const FILTER_CATS = "FILTER_CATS";
export const POST_CATS = "POST_CATS";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCT_BY_ID='GET_PRODUCT_BY_ID'
export const FILTER_PRODUCT = "FILTER_PRODUCT";
export const GET_USERS = "GET_USERS";
export const LOGGED = "LOGGED";
export const ADD_TO_CART="ADD_TO_CART";
export const DEL_ALL_FROM_CART="DEL_ALL_FROM_CART"
export const DEL_ONE_FROM_CART="DEL_ONE_FROM_CART"
export const CLEAR_CART="CLEAR_CART";
export const TOTAL_AMOUNT="TOTAL_AMOUNT"



export const getCats = () => async (dispatch) => {
    return await axios.get(`http://localhost:3001/cat`)
    .then(r => {dispatch({ type : GET_CATS, payload : r.data})
    console.log(r.data, "action")})
    .catch(e => console.error(e))
};

export const searchCats = (name) => async (dispatch) => {
    return await axios.get(`https://proyectofinal-gg57.onrender.com/cat?name=${name}`)
    .then(r => dispatch({ type : SEARCH_CATS, payload : r.data}))
    .catch(e => console.error(e))
};

export const getCatsById = (id) => async (dispatch) => {
    return await axios.get(`https://proyectofinal-gg57.onrender.com/cat/${id}`)
    .then(r => dispatch({ type : GET_CATS_BY_ID, payload : r.data}))
    .catch(e => console.error(e))
}

export const filterCats = (filtered) => {
  return { type: FILTER_CATS, payload: filtered };
};

export const postCats = (payload) => async (dispatch) => {
    try {
      const json = await axios.post('https://proyectofinal-gg57.onrender.com/cat', payload);
      return json;
    } catch (error) {
      throw Error(error);
    }
  };
export const getProduct = () => async (dispatch) => {
    return await axios.get(`http://localhost:3001/product`)
    .then(r => dispatch({ type : GET_PRODUCT, payload : r.data}))
    .catch(e => console.error(e))}

export const getProductsById = (id) => async (dispatch) => {
    return await axios.get(`https://proyectofinal-gg57.onrender.com/product/${id}`)
    .then(r => dispatch({ type : GET_PRODUCT_BY_ID, payload : r.data}))
    .catch(e => console.error(e))
}

export const filterProduct = (filtered) => {
  return { type: FILTER_PRODUCT, payload: filtered };
};

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

export const isLogged = (logged) => {
  return {
    type: LOGGED,
    payload: { logged: logged.logged, data: logged.validatedUser },
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const delFromCart = (product, all = false) => {
  if (all) {
    return {
      type: DEL_ALL_FROM_CART,
      payload: product,
    };
  } else return { type: DEL_ONE_FROM_CART, payload: product };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
export const totalamount= ()=>{
  return{ 
    type:TOTAL_AMOUNT

  }
}
