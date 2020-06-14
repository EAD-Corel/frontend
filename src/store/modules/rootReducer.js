import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer";
import getMyCourses from "./getMyCourses/reducer";
import getCourses from "./getCourses/reducer";

export default combineReducers({ auth, user, getMyCourses, getCourses });
