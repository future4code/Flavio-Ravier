import { combineReducers } from "redux";
import languages from "./languages";
import planets from "./planets";

const rootReducer = combineReducers({
  languages: languages,
  planets: planets
});

export default rootReducer;
