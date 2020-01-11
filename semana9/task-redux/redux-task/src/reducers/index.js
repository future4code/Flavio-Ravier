import { combineReducers } from "redux";
import checkAll from "./checkAll";
import checkTask from "./checkTask";
import deleteAll from "./deleteAll";
import deleteTask from "./deleteTask";
import filterAll from "./filterAll";
import filterComplete from "./filterComplete";
import filterPending from "./filterPending";
import handleInputTask from "./handleInputTask";
import unCheckTask from "./unCheckTask";


const rootReducer = combineReducers({
  checkAll: checkAll,
  checkTask: checkTask,
  deleteAll: deleteAll,
  deleteTask: deleteTask,
  filterAll: filterAll,
  filterComplete: filterComplete,
  filterPending: filterPending,
  handleInputTask: handleInputTask,
  unCheckTask: unCheckTask,
});

export default rootReducer;
