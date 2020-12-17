import axios from "axios";
import { PHOTOS } from "./types";
import { API_URL } from "../config";

const fetchSuccessAlbumDetail = (dataAlbums, dataPhotos) => ({
  type: PHOTOS.GET_PHOTOS_SUCCESS,
  dataAlbum: dataAlbums,
  dataPhotos: dataPhotos
});

// Fetching Photos By AlbumId Action
export function fetchPhotos(AlbumId) {
  return dispatch => {
    const getAlbumById = () => axios.get(`${API_URL}/albums/${AlbumId}`);
    const getPhotosById = () =>
      axios.get(`${API_URL}/photos?albumId=${AlbumId}`);
    axios
      .all([getAlbumById(), getPhotosById()])
      .then(
        axios.spread((dataAlbum, dataPhotos) =>
          dispatch(fetchSuccessAlbumDetail(dataAlbum, dataPhotos))
        )
      );
  };
}

// Fetching Photo By Id Action
export function fetchPhoto(id) {
  return function(dispatch) {
    axios
      .get(`${API_URL}/photos/${id}`)
      .then(res => {
        dispatch({
          type: PHOTOS.GET_PHOTO_ID,
          photo: res.data
        });
      })
      .catch(error => {
        throw error;
      });
  };
}
