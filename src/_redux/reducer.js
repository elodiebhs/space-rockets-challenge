import { combineReducers } from 'redux'
const initialState = {
  favorites: [],
  counter: 0,
}

function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      const useritem = action.payload;
      const favorites = state.favorites.filter(item => item.flight_number != useritem.flight_number);
      if (favorites.length != state.favorites.length) {
        return { ...state, favorites };
      }
      return {
        ...state, favorites: [...state.favorites, useritem]
      }

    // case "ADD_FAVORITE":
    // const item = action.payload;
    // const flag = state.favorites.find(fav=> fav.flight_number=== item.flight_number)
    // if(flag){
    //   return state;
    // }
    // return {
    //   ...state, favorites: [...state.favorites, item]
    // }
    // case "DELETE_FAVORITE":
    //   const data = action.payload;
    //   const favorites = state.favorites.filter(item => item.flight_number!= data.flight_number);
    //   return {
    //     ...state, favorites
    //   }
    default:
      return state
  }
}


const rootReducer = combineReducers({ favoriteReducer });

export default rootReducer;