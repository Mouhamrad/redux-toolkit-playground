import axios from "axios";
import { GET_ALBUMS } from "./types";
import { API_URL } from "../config";

const fetchSuccess = data => ({
  type: GET_ALBUMS,
  payload: data
});

// Fetching All Albums Action
export function fetchAlbum() {
  return dispatch => {
    axios.get(`${API_URL}/albums`).then(res => {
      dispatch(fetchSuccess(res.data));
    });
  };
}
