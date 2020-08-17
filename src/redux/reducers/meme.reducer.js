import * as types from "../constants/meme.constants";

const initialState = {
  memes: [],
  totalPageNum: 1,
  loading: false,
};

const memeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MEMES_REQUEST:
    case types.CREATE_MEME_REQUEST:
    case types.UPDATE_MEME_REQUEST:
      return { ...state, loading: true };
    case types.GET_MEMES_SUCCESS:
      return {
        ...state,
        memes: payload.memes,
        totalPageNum: payload.totalPages,

        loading: false,
      };
    case types.CREATE_MEME_SUCCESS:
    case types.UPDATE_MEME_SUCCESS:
      return {
        ...state,
        selectedMeme: {
          ...state.selectedMeme,
          ...payload,
          localImageUrl: `${process.env.REACT_APP_BACKEND_API}/${
            payload.outputMemePath.split("public/")[1]
          }?${payload.updatedAt}`,
        },
        loading: false,
      };
    case types.GET_MEMES_FAILURE:
    case types.CREATE_MEME_FAILURE:
    case types.UPDATE_MEME_FAILURE:
      console.log(payload);
      return { ...state, loading: false };
    case types.SET_SELECTED_MEME:
      return { ...state, selectedMeme: payload };
    default:
      return state;
  }
};

export default memeReducer;
