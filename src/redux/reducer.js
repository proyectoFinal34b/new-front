import {
  FILTER_CATS,
  GET_CATS,
  SEARCH_CATS,
  POST_CATS,
  GET_PRODUCT,
  FILTER_PRODUCT,
  GET_USERS
} from "./actions";

const initialState = {
  cats: [],
  allCats: [],
  allProducts: [],
  allUsers: [],
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
        }
    default:
      return { ...state };
  }
};

export default reducer;
