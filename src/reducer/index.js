import { combineReducers } from "redux";
import { reducer as albums } from "./albumReducer";
import { reducer_photos as photos } from "./photosReduser";
import { photo_id as photo } from "./wishListReducer";
export default combineReducers({
  albums,
  photos,
  photo
});
