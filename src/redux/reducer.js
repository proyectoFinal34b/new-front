import {
  FILTER_CATS,
  GET_CATS,
  SEARCH_CATS,
  POST_CATS,
  GET_PRODUCT,
  FILTER_PRODUCT,
  GET_USERS, 
  LOGGED
  // ADD_TO_CARD

} from "./actions";

const initialState = {
  cats: [],
  allCats: [],
  allProducts: [],
  allUsers: [],
  logged: false,
  card: [],
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
        case LOGGED:
        return {
          ...state, logged: action.payload
        }
      // case ADD_TO_CARD:
      //   return {
      //   ...state,
      //   card: [...state.card, action.payload]
      // };
    default:
      return { ...state };
  }
};

export default reducer;
