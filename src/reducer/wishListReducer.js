import { PHOTOS } from "../action/types";

//Definig intial State
const initialState = {
  photo: {},
  wishlist: []
};

export const photo_id = (state = initialState, action) => {
  switch (action.type) {
    case PHOTOS.GET_PHOTO_ID:
      return {
        ...state,
        photo: action.photo
      };
    case PHOTOS.ADD_PHOTO:
      if (
        state.wishlist.find(element => {
          return element.id == action.photo.id;
        }) == undefined
      ) {
        state = {
          ...state,
          wishlist: [...state.wishlist, action.photo]
        };
      }

    default:
      return state;
  }
};
