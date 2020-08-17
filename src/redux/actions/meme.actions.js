import * as types from "../constants/meme.constants";
import api from "../api";

const memesRequest = (pageNum) => async (dispatch) => {
  dispatch({ type: types.GET_MEMES_REQUEST, payload: null });
  try {
    const res = await api.get(`/memes?page=${pageNum}&perPage=9`);
    dispatch({ type: types.GET_MEMES_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_MEMES_FAILURE, payload: error });
  }
};

export const memeActions = {
  memesRequest,
};
