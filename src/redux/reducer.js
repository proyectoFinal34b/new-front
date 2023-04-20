import {
  FILTER_CATS,
  GET_CATS,
  GET_CATS_BY_ID,
  SEARCH_CATS,
  POST_CATS,
  GET_PRODUCT,
  GET_PRODUCT_BY_ID,
  FILTER_PRODUCT,
  GET_USERS,
  LOGGED,
  ADD_TO_CART,
  DEL_ALL_FROM_CART,
  DEL_ONE_FROM_CART,
  CLEAR_CART,
  TOTAL_AMOUNT,
  GET_USERS_ID,
  CURRENT_PAGE,
  LOAD_CART,
  SEARCH_PRODUCTS,
  GET_ORDERS,
  
} from "./actions";

const initialState = {
  cats: [],
  catsById: [],
  allCats: [],
  allProducts: [],
  productsById: [],
  allUsers: [],
  detail: [],
  logged: false,
  user: {},
  cart: {
    items:[],
    total:0
  },
  orders:[],
  currentPage:1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATS:
      return { ...state, allCats: action.payload, cats: action.payload };
    case SEARCH_CATS:
      return { ...state, allCats: action.payload };
    case GET_CATS_BY_ID:
      return { ...state, catsById: action.payload }
    case FILTER_CATS:
      return {
        ...state,
        allCats: action.payload,
      };
    case POST_CATS:
      return {
        ...state,
      };
    case GET_PRODUCT:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return{ ...state, productsById: action.payload}
    case FILTER_PRODUCT:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case LOGGED:
      console.log(action.payload.logged, action.payload.data, "action.payload");
      return {
        ...state,
        logged: action.payload.logged,
        user: action.payload.data,
      };

    case ADD_TO_CART:
      console.log(state.allProducts)
      let newItem = state.allProducts.find(
        (product) => product.id === action.payload
      );
      let itemincart = state.cart.items.find((item) => item.id === newItem.id);
      return itemincart
        ? {
            ...state,
            cart:{
              ...state.cart,
              items:state.cart.items.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            } 
          }
        : { ...state, cart: {...state.cart, items:[...state.cart.items, { ...newItem, quantity: 1 }]} };

    case DEL_ONE_FROM_CART:
      let deletitem = state.cart.items.find((item) => item.id === action.payload);
      return deletitem.quantity > 1
        ? {
            ...state,
            cart: {...state.cart, 
              items:state.cart.items.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }}
        : {
            ...state,
            cart: {...state.cart, items: state.cart.items.filter((item) => item.id !== action.payload)},
          };
    case DEL_ALL_FROM_CART:
      return {
        ...state,
        cart: {...state.cart, items:state.cart.items.filter((item) => item.id !== action.payload)} ,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart:{...state.cart, items:[]}
      };
    case TOTAL_AMOUNT:
      let finalValue =[...state.cart.items]
      let initialValue =0; 
      return {
        ...state,
        cart:{...state.cart, total: finalValue.reduce(
 (acc, item) => acc + (item?.price-(item.discount?.value/100)*item?.price) * item.quantity,
          initialValue
        ),}
      };
      case LOAD_CART:

        return{
          ...state,
         cart:{...state.cart, items:action.payload}
          //cart: state.cart.items.length ? {...state.cart, items:[...state.cart.items, action.payload]} : {...state.cart, items:action.payload}
        }
    case CURRENT_PAGE:
      return{
        ...state, currentPage: action.payload
      }

      case SEARCH_PRODUCTS:
      return { 
        ...state, 
        allProducts: action.payload 
      };

      case GET_ORDERS:
        return{

          ...state, orders:action.payload
        }

    default:
      return { ...state };
  }
};

export default reducer;
