import { PHOTOS } from "./types";

// Add Photo to WishList Action
export const addPhoto = photo => ({ type: PHOTOS.ADD_PHOTO, photo });
