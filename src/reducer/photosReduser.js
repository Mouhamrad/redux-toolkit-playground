import { PHOTOS } from "../action/types";

//Definig default State
const defaultStatePhoto = {
  dataAlbum: {},
  dataPhotos: []
};

export const reducer_photos = (state = defaultStatePhoto, action) => {
  switch (action.type) {
    case PHOTOS.GET_PHOTOS:
      return {
        ...state
      };
    case PHOTOS.GET_PHOTOS_SUCCESS:
      return {
        ...state,
        dataAlbum: action.dataAlbum.data,
        dataPhotos: action.dataPhotos.data
      };
    default:
      return state;
  }
};
