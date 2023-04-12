import {
  FILTER_CATS,
  GET_CATS,
  SEARCH_CATS,
  POST_CATS,
  GET_PRODUCT,
  FILTER_PRODUCT,
  GET_USERS,
  LOGGED,
  ADD_TO_CART,
  DEL_ALL_FROM_CART,
  DEL_ONE_FROM_CART,
  CLEAR_CART,
  TOTAL_AMOUNT,
} from "./actions";

const initialState = {
  cats: [],
  allCats: [],
  allProducts: [],
  allUsers: [],
  logged: false,
  user: {},
  cart: [],
  totalAmout: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATS:
      return { ...state, allCats: action.payload, cats: action.payload };
    case SEARCH_CATS:
      return { ...state, allCats: action.payload };
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
      let newItem = state.allProducts.find(
        (product) => product.id === action.payload
      );
      let itemincart = state.cart.find((item) => item.id === newItem.id);
      return itemincart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };

    case DEL_ONE_FROM_CART:
      let deletitem = state.cart.find((item) => item.id === action.payload);
      return deletitem.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    case DEL_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case CLEAR_CART:
      return initialState;
    case TOTAL_AMOUNT:
      let finalValue =[...state.cart]
      let initialValue = 0;
      return {
        ...state,
        totalAmout:finalValue.reduce(
          (acc, item) => acc + item.price * item.quantity,
          initialValue
        ),
      };

    default:
      return { ...state };
  }
};

export default reducer;
