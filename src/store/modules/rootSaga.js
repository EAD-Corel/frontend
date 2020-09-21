import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import user from "./user/sagas";
import getMyCourses from "./getMyCourses/sagas";
import getCourse from "./getCourse/sagas";
import getCourses from "./getCourses/sagas";
import getModules from "./getModules/sagas";
import getClass from "./getClass/sagas";
import getWarnings from "./getWarning/sagas";
import getUsers from "./getUsers/sagas";
import getVideos from "./getVideo/sagas";

export default function* rootSaga() {
  return yield all([
    auth,
    user,
    getMyCourses,
    getCourse,
    getCourses,
    getModules,
    getClass,
    getWarnings,
    getUsers,
    getVideos,
  ]);
}
