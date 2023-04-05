import { FILTER_CATS, GET_CATS,SEARCH_CATS, POST_CATS } from "./actions";

const initialState = {
    cats:[],
    allCats: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATS:
            return {...state,
                allCats: action.payload,
                cats: action.payload,
            }
        case SEARCH_CATS:
            return {...state,
                allCats: action.payload
            }
        case FILTER_CATS:
      //       let tempGatos = state.allCats;
      // if (action.payload.status) {
      //   tempGatos = tempGatos.filter((gato) => gato.status === action.payload.status);
      // }
      // if (action.payload.gender) {
      //   tempGatos = tempGatos.filter((gato) => gato.gender === action.payload.gender);
      // }
      // if (action.payload.age) {
      //   tempGatos = tempGatos.filter((gato) => gato.age === parseInt(action.payload.age));
      // }
            return {
            ...state,
            allCats: action.payload
        };
        case POST_CATS:
             return {
            ...state,
        };
        default:
            return {...state};
        }


}



export default reducer;