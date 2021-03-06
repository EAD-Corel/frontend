import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer";
import getMyCourses from "./getMyCourses/reducer";
import getCourses from "./getCourses/reducer";
import getModules from "./getModules/reducer";
import getClass from "./getClass/reducer";
import getWarnings from "./getWarning/reducer";
import getUSers from "./getUsers/reducer";
import getVideos from "./getVideo/reducer";

export default combineReducers({
  auth,
  user,
  getMyCourses,
  getCourses,
  getModules,
  getClass,
  getWarnings,
  getUSers,
  getVideos,
});
