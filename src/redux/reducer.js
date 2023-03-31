import { FILTER_CATS, GET_CATS,SEARCH_CATS } from "./actions";

const initialState = {
    cats:[],
    allCats: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATS:
            return {...state,
                allCats: action.payload,
                cats: action.payload
            }
        case SEARCH_CATS:
            return {...state,
                allCats: action.payload
            }
        case FILTER_CATS:
            return {...state,
                allCats: action.payload
            }
        default:
            return {...state};
    }


}



export default reducer;