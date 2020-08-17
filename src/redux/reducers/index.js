import { combineReducers } from "redux";
import memeReducer from "./meme.reducer";
import alertReducer from "./alert.reducer";

export default combineReducers({
  meme: memeReducer,
  alert: alertReducer,
});
