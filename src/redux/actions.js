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
export const GET_USERS_ID="GET_USERS_ID"
export const SEARCH_PRODUCTS= "SEARCH_PRODUCTS"
export const GET_ORDERS="GET_ORDERS"
export const LOAD_CART= "LOAD_CART"
export const CURRENT_PAGE = "CURRENT_PAGE"


export const getCats = () => async (dispatch) => {

    return await axios.get(`/cat`)

    .then(r => {dispatch({ type : GET_CATS, payload : r.data})
    console.log(r.data, "action")})
    .catch(e => console.error(e))
};

export const searchCats = (name) => async (dispatch) => {
    return await axios.get(`/cat?name=${name}`)
    .then(r => dispatch({ type : SEARCH_CATS, payload : r.data}))
    .catch(e => console.error(e))
};

export const getCatsById = (id) => async (dispatch) => {

    return await axios.get(`/cat/${id}`)

    .then(r => dispatch({ type : GET_CATS_BY_ID, payload : r.data}))
    .catch(e => console.error(e))
}

export const filterCats = (filtered) => {
  return { type: FILTER_CATS, payload: filtered };
};

export const postCats = (payload) => async (dispatch) => {
    try {
      const json = await axios.post(`/cat/${payload.id}`, payload.data);
      return json;
    } catch (error) {
      throw Error(error);
    }
  };
export const getProduct = () => async (dispatch) => {
    return await axios.get(`/product`)
    .then(r => dispatch({ type : GET_PRODUCT, payload : r.data}))
    .catch(e => console.error(e))}

export const getProductsById = (id) => async (dispatch) => {
    return await axios.get(`/product/${id}`)
    .then(r => dispatch({ type : GET_PRODUCT_BY_ID, payload : r.data}))
    .catch(e => console.error(e))
}

export const filterProduct = (filtered) => {
  return { type: FILTER_PRODUCT, payload: filtered };
};

export function getUsers(){
      return async function(dispatch){
          try{
              let response = await axios.get(`/user`);
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
      const json = await axios.post('/product', body);
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

export const loadCart= (cart)=>{
  return{
    type: LOAD_CART,
    payload: cart
  }
}

export function getUsersById(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/user/${id}`);
      return dispatch({
        type: GET_USERS_ID,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export const currentPageFunction = (payload) => {
  return{
    type: CURRENT_PAGE,
    payload: payload
  }
}

export const searchProducts = (name) => async (dispatch) => {
    return await axios.get(`/product?name=${name}`)
    .then(r => dispatch({ type : SEARCH_PRODUCTS, payload : r.data}))
    .catch(e => console.error(e))
};
export const postOrder = (order) => async (dispatch) => {
  try {
    const json = await axios.post('/order', order);
    console.log(json)
    return json;
  } catch (error) {
    throw Error(error);
  }
}


export function GetOrders(){
  return async function(dispatch){
    try{
        let response = await axios.get(`/order`);
        return dispatch({
        type: GET_ORDERS,
        payload: response.data,
    });
    } catch (error) {
        alert(error) 
    }
}
}

export const postDonated = (user) => async (dispatch) => {
  try {
    const json = await axios.post('/donate', user);
    console.log(json)                                         
    return json;
  } catch (error) {
    throw Error(error);
  }
}
