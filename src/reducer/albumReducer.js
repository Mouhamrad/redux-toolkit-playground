import { GET_ALBUMS } from "../action/types";

//Definig initial State
const initialState = {
  albums: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload
      };
    default:
      return state;
  }
};
