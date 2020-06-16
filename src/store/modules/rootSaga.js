import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import user from "./user/sagas";
import getMyCourses from "./getMyCourses/sagas";
import getCourse from "./getCourse/sagas";
import getModules from "./getModules/sagas";
import getClass from "./getClass/sagas";
import getWarnings from "./getWarning/sagas";

export default function* rootSaga() {
  return yield all([
    auth,
    user,
    getMyCourses,
    getCourse,
    getModules,
    getClass,
    getWarnings,
  ]);
}
